import Hero from "@/components/sections/Hero";
import Diensten from "@/components/sections/Diensten";
import Reviews from "@/components/sections/Reviews";
import TrustBar from "@/components/sections/TrustBar";
import CTAAfspraak from "@/components/sections/CTAAfspraak";
import FAQ from "@/components/sections/FAQ";

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
