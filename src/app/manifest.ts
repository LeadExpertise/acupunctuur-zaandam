import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acupunctuur Zaandam",
    short_name: "Acupunctuur Zaandam",
    description:
      "NVA-erkende acupunctuurpraktijk van Sam de Vries in Zaandam. Behandelingen bij pijn, stress, burnout en meer.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#1F3A36",
    lang: "nl-NL",
    icons: [
      {
        src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68f83157-af01-4d10-a1e0-6bb35e6e923d_320w.png",
        sizes: "320x320",
        type: "image/png",
      },
    ],
  };
}
