/**
 * Adds a BreadcrumbList JSON-LD entry to the `@graph` of every
 * src/app/klachten/X/page.tsx that has a jsonLd const but no BreadcrumbList yet.
 *
 * Idempotent — running twice is a no-op.
 *
 * Run:  node scripts/add-breadcrumbs-klachten.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const KLACHTEN_DIR = join(ROOT, "src", "app", "klachten");
const BASE = "https://www.acupunctuurzaandam.nl";

function humanize(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

let modified = 0;
let skipped = 0;

for (const slug of readdirSync(KLACHTEN_DIR)) {
  const dir = join(KLACHTEN_DIR, slug);
  if (!statSync(dir).isDirectory()) continue;
  const file = join(dir, "page.tsx");

  let src;
  try {
    src = readFileSync(file, "utf8");
  } catch {
    skipped++;
    continue;
  }

  // Already has BreadcrumbList — skip
  if (/"@type"\s*:\s*"BreadcrumbList"/.test(src)) {
    skipped++;
    continue;
  }

  const breadcrumbEntry = `
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "${BASE}",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Welke klachten",
          item: "${BASE}/welke-klachten",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "${humanize(slug)}",
          item: "${BASE}/klachten/${slug}",
        },
      ],
    },`;

  // Look for a jsonLd `@graph` array — append the breadcrumb as a new entry.
  // Matches:  "@graph": [\n   ... existing entries ... \n  ]
  const graphCloseRe = /("@graph"\s*:\s*\[[\s\S]*?)(\n\s*\],?\s*\n?\s*\}\s*;)/;

  if (graphCloseRe.test(src)) {
    src = src.replace(graphCloseRe, (_m, before, after) => {
      const trimmed = before.replace(/,?\s*$/, ",");
      return trimmed + breadcrumbEntry + after;
    });
    writeFileSync(file, src, "utf8");
    modified++;
    console.log(`  ✓ ${slug}`);
  } else {
    console.log(`  ⚠  no @graph array found in ${slug} — skipping (manual review)`);
    skipped++;
  }
}

console.log(`\nDone. Modified ${modified}, skipped ${skipped}.`);
