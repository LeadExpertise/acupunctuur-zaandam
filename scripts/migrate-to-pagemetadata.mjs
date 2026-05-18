/**
 * Migrates every page.tsx that currently does:
 *
 *   export const metadata: Metadata = {
 *     alternates: { canonical: "/path" },
 *     title: "...",
 *     ...
 *   };
 *
 * to:
 *
 *   export const metadata: Metadata = pageMetadata("/path", {
 *     title: "...",
 *     ...
 *   });
 *
 * Why: `pageMetadata()` auto-spreads title/description into openGraph so social
 * previews show page-specific titles instead of the homepage fallback.
 *
 * Idempotent — skips files already using pageMetadata.
 *
 * Run:  node scripts/migrate-to-pagemetadata.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const APP_DIR = join(ROOT, "src", "app");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry === "page.tsx") out.push(full);
  }
  return out;
}

function processFile(file) {
  let src = readFileSync(file, "utf8");

  if (src.includes("pageMetadata(")) return { status: "skipped (already)" };
  if (!/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{/.test(src)) {
    return { status: "skipped (no metadata)" };
  }

  // Match the metadata object literal: from `{ alternates: { canonical: "X" },` to its matching `};`
  // We balance braces to find the end.
  const startRe = /export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{/;
  const startMatch = startRe.exec(src);
  if (!startMatch) return { status: "skipped (no match)" };

  const objStart = startMatch.index + startMatch[0].length - 1; // points at the `{`
  // Walk forward balancing { and } while skipping strings
  let depth = 0;
  let i = objStart;
  let inStr = null;
  while (i < src.length) {
    const c = src[i];
    if (inStr) {
      if (c === "\\") { i += 2; continue; }
      if (c === inStr) inStr = null;
    } else {
      if (c === '"' || c === "'" || c === "`") inStr = c;
      else if (c === "{") depth++;
      else if (c === "}") {
        depth--;
        if (depth === 0) break;
      }
    }
    i++;
  }
  if (depth !== 0) return { status: "skipped (unbalanced)" };

  const objEnd = i; // points at the matching `}`
  // Expect `};` after
  const tail = src.substring(objEnd + 1, objEnd + 3);
  const trailingSemi = tail.startsWith(";") ? 1 : 0;

  const bodyRaw = src.substring(objStart + 1, objEnd); // contents between { and }

  // Extract canonical path
  const canonicalMatch = bodyRaw.match(/alternates\s*:\s*\{\s*canonical\s*:\s*"([^"]+)"\s*,?\s*\}\s*,?/);
  if (!canonicalMatch) return { status: "skipped (no canonical)" };

  const canonicalPath = canonicalMatch[1];

  // Remove the alternates line from the body
  let newBody = bodyRaw.replace(/\s*alternates\s*:\s*\{\s*canonical\s*:\s*"[^"]+"\s*,?\s*\}\s*,?/, "");

  // Trim leading/trailing whitespace inside the object literal
  newBody = newBody.replace(/^\s*\n/, "\n").replace(/\n\s*$/, "\n");

  const replacement =
    `export const metadata: Metadata = pageMetadata("${canonicalPath}", {${newBody}})` +
    (trailingSemi ? ";" : "");

  src =
    src.substring(0, startMatch.index) +
    replacement +
    src.substring(objEnd + 1 + trailingSemi);

  // Ensure pageMetadata is imported from @/lib/metadata
  if (!/import\s+\{[^}]*\bpageMetadata\b[^}]*\}\s+from\s+["']@\/lib\/metadata["']/.test(src)) {
    // Append pageMetadata to an existing import from @/lib/metadata, or add new import line.
    if (/import\s+\{([^}]+)\}\s+from\s+["']@\/lib\/metadata["']/.test(src)) {
      src = src.replace(
        /import\s+\{([^}]+)\}\s+from\s+["']@\/lib\/metadata["']/,
        (_m, inner) => {
          const items = inner.split(",").map((s) => s.trim()).filter(Boolean);
          if (!items.includes("pageMetadata")) items.push("pageMetadata");
          return `import { ${items.join(", ")} } from "@/lib/metadata"`;
        }
      );
    } else {
      // Insert after the last existing import
      src = src.replace(
        /^((?:import[^;]+;\n)+)/m,
        (m) => m + 'import { pageMetadata } from "@/lib/metadata";\n'
      );
    }
  }

  writeFileSync(file, src, "utf8");
  return { status: "migrated", canonical: canonicalPath };
}

let migrated = 0;
let skipped = 0;
let failed = 0;

for (const file of walk(APP_DIR)) {
  const r = processFile(file);
  const rel = relative(APP_DIR, file);
  if (r.status === "migrated") {
    migrated++;
    console.log(`  ✓ ${rel}`);
  } else if (r.status.startsWith("skipped")) {
    skipped++;
  } else {
    failed++;
    console.log(`  ⚠  ${r.status}: ${rel}`);
  }
}

console.log(`\nDone. Migrated ${migrated}, skipped ${skipped}, failed ${failed}.`);
