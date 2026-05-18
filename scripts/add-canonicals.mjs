/**
 * Adds `alternates: { canonical: "/derived/path" }` to every page.tsx that
 * exports `metadata` but does not yet set `alternates`. Idempotent — running
 * twice is a no-op.
 *
 * Run:  node scripts/add-canonicals.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative, dirname } from "path";
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

function pathFromFile(file) {
  // src/app/klachten/nekklachten/page.tsx -> /klachten/nekklachten
  // src/app/page.tsx -> /
  const rel = relative(APP_DIR, file).replace(/\/page\.tsx$/, "");
  if (rel === "page.tsx" || rel === "") return "/";
  return "/" + rel;
}

let modified = 0;
let skipped = 0;
let dynamic = 0;

for (const file of walk(APP_DIR)) {
  const canonical = pathFromFile(file);

  // Dynamic segments need generateMetadata — handled manually
  if (canonical.includes("[")) {
    dynamic++;
    console.log(`  ⤷ dynamic (skipped, needs generateMetadata): ${canonical}`);
    continue;
  }

  let src = readFileSync(file, "utf8");

  // Skip if already has alternates / canonical
  if (/alternates\s*:\s*\{[^}]*canonical/.test(src)) {
    skipped++;
    continue;
  }

  // Find the metadata export. Two common patterns:
  //   export const metadata: Metadata = {
  //   export const metadata: Metadata = pageMetadata("/path", {
  // If it's already using pageMetadata, skip.
  if (/export\s+const\s+metadata\s*:\s*Metadata\s*=\s*pageMetadata\(/.test(src)) {
    skipped++;
    continue;
  }

  const metadataOpenRe = /export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{/;
  if (!metadataOpenRe.test(src)) {
    console.log(`  ⚠  no metadata export found, skipped: ${file}`);
    skipped++;
    continue;
  }

  // Inject alternates as the first field inside the object literal.
  const replacement = `export const metadata: Metadata = {\n  alternates: { canonical: "${canonical}" },`;
  src = src.replace(metadataOpenRe, replacement);

  writeFileSync(file, src, "utf8");
  modified++;
  console.log(`  ✓ ${canonical}`);
}

console.log(`\nDone. Modified ${modified}, skipped ${skipped}, dynamic ${dynamic}.`);
