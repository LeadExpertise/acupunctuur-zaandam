/**
 * Replaces the inline LeadConnector booking iframe (~500KB-1MB third-party JS
 * on every page) with the <BookingWidget /> façade component. The component
 * only loads the iframe after the user clicks — biggest single Core Web Vitals
 * win for the site.
 *
 * Walks src/app/**\/page.tsx, finds the `<div className="w-full relative group">`
 * wrapper, walks forward counting <div>/</div> until matched, and replaces the
 * entire block with `<BookingWidget id="..." />`. Adds the import and removes
 * the `next/script` import if it is no longer used.
 *
 * Idempotent — skips files already migrated.
 *
 * Run:  node scripts/migrate-booking-widget.mjs
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

  if (src.includes("<BookingWidget")) return { status: "skipped" };

  const iframeIdMatch = src.match(/id="D8uouGkFZH4Alr37y5z4_([^"]+)"/);
  if (!iframeIdMatch) return { status: "skipped" };
  const widgetId = iframeIdMatch[1];

  const startMarker = '<div className="w-full relative group">';
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) return { status: "no wrapper", widgetId };

  // Walk forward with a proper JSX-aware tokenizer that distinguishes
  // <div ... >, <div ... />, and </div>. Self-closing divs do NOT add depth.
  let depth = 1; // we've seen the opening startMarker
  let endIdx = -1;
  const tokenRe = /<div\b[^>]*?(\/?)>|<\/div>/g;
  tokenRe.lastIndex = startIdx + startMarker.length;

  let m;
  while ((m = tokenRe.exec(src)) !== null) {
    if (m[0] === "</div>") {
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

  if (endIdx === -1) return { status: "no matching close", widgetId };

  const replacement = `<BookingWidget id="${widgetId}" />`;
  src = src.substring(0, startIdx) + replacement + src.substring(endIdx);

  // Add BookingWidget import after the last existing import (only once).
  if (!src.includes("import BookingWidget")) {
    src = src.replace(
      /^((?:import[^;]+;\n)+)/m,
      (m) => m + 'import BookingWidget from "@/components/BookingWidget";\n'
    );
  }

  // Remove `next/script` import if no <Script> remains in the file.
  if (!/<Script\b/.test(src)) {
    src = src.replace(/^import Script from "next\/script";\n/m, "");
  }

  writeFileSync(file, src, "utf8");
  return { status: "migrated", widgetId };
}

let migrated = 0;
let skipped = 0;
let failed = 0;

for (const file of walk(APP_DIR)) {
  const r = processFile(file);
  const rel = file.replace(APP_DIR + "/", "");
  if (r.status === "migrated") {
    migrated++;
    console.log(`  ✓ ${rel} -> id="${r.widgetId}"`);
  } else if (r.status === "skipped") {
    skipped++;
  } else {
    failed++;
    console.log(`  ⚠  ${r.status}: ${rel}`);
  }
}

console.log(`\nDone. Migrated ${migrated}, skipped ${skipped}, failed ${failed}.`);
