import type { Metadata } from "next";

export const siteConfig = {
  name: "Acupunctuur Zaandam",
  description:
    "Professionele acupunctuurpraktijk in Zaandam. Behandelingen voor pijn, stress, burnout en meer.",
  url: "https://www.acupunctuurzaandam.nl",
  locale: "nl_NL",
};

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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
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
