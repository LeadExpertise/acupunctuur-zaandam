/**
 * Strips the redundant "| Acupunctuur Zaandam" suffix from page.tsx `title`
 * fields and blog JSON `seoTitle` fields. defaultMetadata's title.template
 * ("%s | Acupunctuur Zaandam") re-adds the brand, so leaving it in the
 * source results in duplicated brand: "X | Acupunctuur Zaandam | Acupunctuur Zaandam".
 *
 * Idempotent — only matches strings that still end with the brand suffix.
 *
 * Run:  node scripts/strip-brand-suffix.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const APP_DIR = join(ROOT, "src", "app");
const BLOG_DIR = join(ROOT, "content", "blog");
const SUFFIX_RE = /\s*\|\s*Acupunctuur Zaandam\s*$/;

function walkPages(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkPages(full, out);
    else if (entry === "page.tsx") out.push(full);
  }
  return out;
}

let pagesUpdated = 0;
let jsonUpdated = 0;

// 1) page.tsx files — `title: "X | Acupunctuur Zaandam"` -> `title: "X"`
for (const file of walkPages(APP_DIR)) {
  let src = readFileSync(file, "utf8");
  let changed = false;

  src = src.replace(/title:\s*"([^"]+)"/g, (m, t) => {
    if (SUFFIX_RE.test(t)) {
      changed = true;
      return `title: "${t.replace(SUFFIX_RE, "")}"`;
    }
    return m;
  });

  if (changed) {
    writeFileSync(file, src, "utf8");
    pagesUpdated++;
    console.log(`  ✓ page: ${relative(APP_DIR, file)}`);
  }
}

// 2) Blog JSON files — `seoTitle` field
for (const f of readdirSync(BLOG_DIR).filter((x) => x.endsWith(".json"))) {
  const full = join(BLOG_DIR, f);
  const raw = readFileSync(full, "utf8");
  const data = JSON.parse(raw);
  if (typeof data.seoTitle === "string" && SUFFIX_RE.test(data.seoTitle)) {
    data.seoTitle = data.seoTitle.replace(SUFFIX_RE, "");
    writeFileSync(full, JSON.stringify(data, null, 2) + "\n", "utf8");
    jsonUpdated++;
    console.log(`  ✓ blog: ${f}`);
  }
}

console.log(`\nDone. Pages updated: ${pagesUpdated}, blog JSON updated: ${jsonUpdated}.`);
