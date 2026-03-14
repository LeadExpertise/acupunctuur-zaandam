import { readdirSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.acupunctuurzaandam.nl";

// Next.js generates a sitemap index at /sitemap.xml and individual sitemaps at:
//   /sitemap/pages.xml      — homepage + informational pages
//   /sitemap/klachten.xml   — 72 klachten detail pages
//   /sitemap/behandelingen.xml — 63 behandelingen pages

export function generateSitemaps() {
  return [
    { id: "pages" },
    { id: "klachten" },
    { id: "behandelingen" },
  ];
}

function getSubdirectories(dir: string): string[] {
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
  const appDir = join(process.cwd(), "src", "app");

  if (id === "klachten") {
    return getSubdirectories(join(appDir, "klachten")).map((slug) => ({
      url: `${BASE_URL}/klachten/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  }

  if (id === "behandelingen") {
    return getSubdirectories(join(appDir, "behandelingen")).map((slug) => ({
      url: `${BASE_URL}/behandelingen/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  }

  // "pages" — homepage + informational pages
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/welke-klachten`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/behandeling-werkwijze`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tarieven-vergoeding`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/over-de-praktijk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/veelgestelde-vragen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
