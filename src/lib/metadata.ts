import type { Metadata } from "next";

export const siteConfig = {
  name: "Acupunctuur Zaandam",
  description:
    "Professionele acupunctuurpraktijk in Zaandam. Behandelingen voor pijn, stress, burnout en meer.",
  url: "https://www.acupunctuurzaandam.nl",
  locale: "nl_NL",
};

/**
 * Root metadata for layout.tsx — page-level metadata is added in each page.tsx.
 * - `alternates.canonical` is set per page via `pageMetadata()` so Google does
 *   not deduplicate every route against the homepage URL.
 * - `openGraph.images` and Twitter image are intentionally NOT set here; Next.js
 *   auto-discovers `src/app/opengraph-image.tsx` (1200×630) as the site-wide
 *   fallback and `src/app/blog/[slug]/opengraph-image.tsx` for per-post images.
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "acupunctuur",
    "zaandam",
    "acupunctuurpraktijk",
    "traditionele chinese geneeskunde",
    "pijnbehandeling",
    "stress",
    "burnout",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "Acupunctuur Zaandam — Blog" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Helper to build per-page metadata with a guaranteed canonical, openGraph URL,
 * and page-specific openGraph title/description. Pass the absolute path
 * (e.g. "/klachten/nekklachten"). metadataBase resolves it to the full URL.
 *
 * Auto-spreads `title` and `description` into `openGraph.{title,description}`
 * if you didn't set them explicitly — fixes the issue where every subpage
 * fell back to the homepage values when shared on social.
 */
export function pageMetadata(
  path: string,
  overrides: Metadata = {}
): Metadata {
  const { openGraph, alternates, title, description, ...rest } = overrides;

  // Pull plain-string title (string or {default} variant) for OG fallback
  const ogTitleFallback =
    typeof title === "string"
      ? title
      : title && typeof title === "object" && "default" in title
        ? (title as { default: string }).default
        : undefined;

  return {
    ...rest,
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "nl-NL": path },
      ...alternates,
    },
    openGraph: {
      url: path,
      title: ogTitleFallback,
      description: description as string | undefined,
      locale: "nl_NL",
      ...openGraph,
    },
  };
}
