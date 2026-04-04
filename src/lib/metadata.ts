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
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68f83157-af01-4d10-a1e0-6bb35e6e923d_320w.png",
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
