/**
 * Second pass: replaces the alternate compact trust-bar (used on 12 pages
 * with className="py-10 bg-white border-y border-[#4A6559]/10") with the
 * shared <TrustBadges /> component.
 *
 * Idempotent — only touches files that still contain raw <img> trust badges.
 *
 * Run:  node scripts/migrate-trust-badges-v2.mjs
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

  // Only act if the file still has the NVA-badge raw <img>
  if (!/NVA Erkend Acupuncturist[^"]*"\s+className="[^"]*"\s*\/>/.test(src) && !/alt="NVA Erkend Acupuncturist"/.test(src)) {
    return { status: "skipped" };
  }

  // Look for the alternate compact trust-bar wrapper section.
  const startRe = /<section\s+className="py-10\s+bg-white\s+border-y\s+border-\[#4A6559\]\/10"[^>]*>/;
  const startMatch = src.match(startRe);
  if (!startMatch) return { status: "skipped (no alt wrapper)" };

  const startIdx = startMatch.index;
  const firstGt = src.indexOf(">", startIdx);

  // Balance <section> ... </section>
  let depth = 1;
  let endIdx = -1;
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

  // Confirm this section indeed contains the trust badges
  const block = src.substring(startIdx, endIdx);
  if (!/NVA Erkend Acupuncturist/.test(block)) {
    return { status: "skipped (wrong section)" };
  }

  src = src.substring(0, startIdx) + `<TrustBadges />` + src.substring(endIdx);

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

for (const file of walk(APP_DIR)) {
  const r = processFile(file);
  const rel = file.replace(APP_DIR + "/", "");
  if (r.status === "migrated") {
    migrated++;
    console.log(`  ✓ ${rel}`);
  } else if (r.status.startsWith("skipped")) {
    skipped++;
  } else {
    console.log(`  ⚠  ${r.status}: ${rel}`);
  }
}

console.log(`\nDone. Migrated ${migrated}, skipped ${skipped}.`);
