import { readdirSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";

const BASE_URL = "https://acupunctuur-zaandam.nl";

function getSubdirectories(dir: string): string[] {
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = join(process.cwd(), "src", "app");

  const klachtenSlugs = getSubdirectories(join(appDir, "klachten"));
  const behandelingenSlugs = getSubdirectories(join(appDir, "behandelingen"));

  const staticPages: MetadataRoute.Sitemap = [
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

  const klachtenPages: MetadataRoute.Sitemap = klachtenSlugs.map((slug) => ({
    url: `${BASE_URL}/klachten/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const behandelingenPages: MetadataRoute.Sitemap = behandelingenSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/behandelingen/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticPages, ...klachtenPages, ...behandelingenPages];
}
