import type { Metadata } from "next";

export const siteConfig = {
  name: "Acupunctuur Zaandam",
  description:
    "Professionele acupunctuurpraktijk in Zaandam. Behandelingen voor pijn, stress, burnout en meer.",
  url: "https://www.acupunctuurzaandam.nl",
  locale: "nl_NL",
};

const OG_IMAGE =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68f83157-af01-4d10-a1e0-6bb35e6e923d_320w.png";

/**
 * Root metadata for layout.tsx — page-level metadata is added in each page.tsx.
 * Canonical + openGraph.url are intentionally NOT set here; every page sets its
 * own via `pageMetadata()` so Google does not deduplicate all routes against
 * the homepage URL.
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
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: OG_IMAGE,
        width: 320,
        height: 64,
        alt: "Acupunctuur Zaandam — Sam de Vries",
      },
    ],
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
 * Helper to build per-page metadata with a guaranteed canonical + openGraph URL.
 * Pass the absolute path (e.g. "/klachten/nekklachten"). metadataBase resolves
 * it to the full URL automatically.
 */
export function pageMetadata(
  path: string,
  overrides: Metadata = {}
): Metadata {
  const { openGraph, alternates, ...rest } = overrides;
  return {
    ...rest,
    alternates: {
      canonical: path,
      ...alternates,
    },
    openGraph: {
      url: path,
      ...openGraph,
    },
  };
}
