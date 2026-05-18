/**
 * Replaces the inline trust-badges <section> (with 5 raw <img> trust badges)
 * on klachten + behandelingen pages with the shared <TrustBadges /> component
 * (which uses next/image for AVIF/WebP + lazy loading).
 *
 * Idempotent — only touches files still containing the inline section.
 *
 * Run:  node scripts/migrate-trust-badges.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
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

  if (src.includes("<TrustBadges")) return { status: "skipped" };

  // Look for the marker section open
  const startMarker = `<section\n          aria-label="Beroepsverenigingen en verzekeraars"`;
  // Some files might have slightly different indent — match more loosely:
  const startRe = /<section\s+aria-label="Beroepsverenigingen en verzekeraars"/;
  const startMatch = src.match(startRe);
  if (!startMatch) return { status: "skipped" };

  const startIdx = startMatch.index;

  // Walk forward, balancing <section ...> vs </section>
  let depth = 1;
  let endIdx = -1;
  // Skip past the opening tag's `>`
  const firstGt = src.indexOf(">", startIdx);
  if (firstGt === -1) return { status: "no opening close" };

  const tokenRe = /<section\b[^>]*?(\/?)>|<\/section>/g;
  tokenRe.lastIndex = firstGt + 1;

  let m;
  while ((m = tokenRe.exec(src)) !== null) {
    if (m[0] === "</section>") {
      depth--;
      if (depth === 0) {
        endIdx = m.index + m[0].length;
        break;
      }
    } else {
      const selfClosing = m[1] === "/";
      if (!selfClosing) depth++;
    }
  }

  if (endIdx === -1) return { status: "no matching close" };

  // Sanity check: the section should contain "NVA" alt text — confirms it's
  // the trust-badge section, not some other.
  const block = src.substring(startIdx, endIdx);
  if (!/NVA/.test(block)) return { status: "skipped (no NVA marker)" };

  const replacement = `<TrustBadges />`;
  src = src.substring(0, startIdx) + replacement + src.substring(endIdx);

  if (!src.includes("import TrustBadges")) {
    src = src.replace(
      /^((?:import[^;]+;\n)+)/m,
      (m) => m + 'import TrustBadges from "@/components/TrustBadges";\n'
    );
  }

  writeFileSync(file, src, "utf8");
  return { status: "migrated" };
}

let migrated = 0;
let skipped = 0;
let failed = 0;

for (const file of walk(APP_DIR)) {
  const r = processFile(file);
  const rel = file.replace(APP_DIR + "/", "");
  if (r.status === "migrated") {
    migrated++;
    console.log(`  ✓ ${rel}`);
  } else if (r.status === "skipped" || r.status.startsWith("skipped")) {
    skipped++;
  } else {
    failed++;
    console.log(`  ⚠  ${r.status}: ${rel}`);
  }
}

console.log(`\nDone. Migrated ${migrated}, skipped ${skipped}, failed ${failed}.`);
