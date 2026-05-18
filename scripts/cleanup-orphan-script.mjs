/**
 * Removes orphan `<Script src=".../form_embed.js" strategy="afterInteractive" />`
 * tags left over by the simple-iframe migration. The BookingWidget façade now
 * loads this script itself only after user interaction, so the inline copies
 * are dead code that just pulls down JS on first paint.
 *
 * Also drops the `import Script from "next/script"` if Script is no longer used.
 *
 * Idempotent.
 *
 * Run:  node scripts/cleanup-orphan-script.mjs
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

// Matches:
//   <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
// AND the multi-line variant:
//   <Script
//     src="https://link.msgsndr.com/js/form_embed.js"
//     strategy="afterInteractive"
//   />
const orphanRe = /\s*<Script\s+[^>]*?src="https?:\/\/link\.msgsndr\.com\/js\/form_embed\.js"[^>]*?\/>\s*\n?/gs;

let cleaned = 0;
let skipped = 0;

for (const file of walk(APP_DIR)) {
  let src = readFileSync(file, "utf8");
  if (!/form_embed\.js/.test(src)) {
    skipped++;
    continue;
  }

  const before = src.length;
  src = src.replace(orphanRe, "\n");

  if (src.length === before) {
    skipped++;
    continue;
  }

  // Drop Script import if no <Script> remains
  if (!/<Script\b/.test(src)) {
    src = src.replace(/^import Script from "next\/script";\n/m, "");
  }

  writeFileSync(file, src, "utf8");
  cleaned++;
  console.log(`  ✓ ${file.replace(APP_DIR + "/", "")}`);
}

console.log(`\nDone. Cleaned ${cleaned}, skipped ${skipped}.`);
