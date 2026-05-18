/**
 * Second migration pass: replaces the plain LeadConnector <iframe ... /> (no
 * window-chrome wrapper) with <BookingWidget id="..." /> on the 20 pages that
 * use a simpler embed pattern.
 *
 * Idempotent — only touches files that still contain a raw LeadConnector iframe.
 *
 * Run:  node scripts/migrate-booking-simple.mjs
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

  // Find raw iframe matching the booking URL with the ID pattern
  // Captures the full self-closing iframe block (multi-line).
  const iframeRe = /<iframe\b[^>]*?id="D8uouGkFZH4Alr37y5z4_([^"]+)"[^>]*?\/\s*>/s;
  const match = src.match(iframeRe);
  if (!match) return { status: "skipped" };

  const widgetId = match[1];
  const replacement = `<BookingWidget id="${widgetId}" />`;

  src = src.replace(iframeRe, replacement);

  if (!src.includes("import BookingWidget")) {
    src = src.replace(
      /^((?:import[^;]+;\n)+)/m,
      (m) => m + 'import BookingWidget from "@/components/BookingWidget";\n'
    );
  }

  if (!/<Script\b/.test(src)) {
    src = src.replace(/^import Script from "next\/script";\n/m, "");
  }

  writeFileSync(file, src, "utf8");
  return { status: "migrated", widgetId };
}

let migrated = 0;
let skipped = 0;

for (const file of walk(APP_DIR)) {
  const r = processFile(file);
  const rel = file.replace(APP_DIR + "/", "");
  if (r.status === "migrated") {
    migrated++;
    console.log(`  ✓ ${rel} -> id="${r.widgetId}"`);
  } else {
    skipped++;
  }
}

console.log(`\nDone. Migrated ${migrated}, skipped ${skipped}.`);
