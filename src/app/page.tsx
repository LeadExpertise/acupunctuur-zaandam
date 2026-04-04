import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Diensten from "@/components/sections/Diensten";
import Reviews from "@/components/sections/Reviews";
import TrustBar from "@/components/sections/TrustBar";
import CTAAfspraak from "@/components/sections/CTAAfspraak";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Acupunctuur Zaandam — Erkende Praktijk voor Pijn, Stress & Herstel",
  description:
    "NVA-erkende acupunctuurpraktijk van Sam de Vries in Zaandam. Behandelingen bij pijn, stress, burnout en meer. Vergoed door zorgverzekeraars.",
  keywords: [
    "acupunctuur zaandam",
    "acupuncturist zaandam",
    "acupunctuurpraktijk zaandam",
    "traditionele chinese geneeskunde zaandam",
    "pijnbehandeling acupunctuur",
    "stress acupunctuur zaandam",
    "burnout acupunctuur",
    "migraine acupunctuur zaandam",
  ],
  alternates: {
    canonical: "https://www.acupunctuurzaandam.nl",
  },
  openGraph: {
    title: "Acupunctuur Zaandam — Praktijk Sam de Vries",
    description:
      "NVA-erkende acupunctuurpraktijk in Zaandam. Behandelingen bij pijn, stress, burnout en meer. Vergoed door zorgverzekeraars.",
    url: "https://www.acupunctuurzaandam.nl",
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Diensten />
      <Reviews />
      <TrustBar />
      <CTAAfspraak />
      <FAQ />
    </main>
  );
}
