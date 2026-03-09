import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Over de Praktijk | Acupuncturist Sam de Vries | Acupunctuur Zaandam",
  description:
    "Maak kennis met Sam de Vries, acupuncturist in Zaandam. Psychologische achtergrond gecombineerd met Traditionele Chinese Geneeskunde. Persoonlijke, holistische zorg voor lichaam en geest.",
  keywords: [
    "acupunctuur zaandam",
    "acupuncturist zaandam",
    "acupunctuur praktijk zaandam",
    "sam de vries acupunctuur",
    "acupunctuur zaandam over ons",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/over-de-praktijk",
      name: "Over de Praktijk | Acupunctuur Zaandam",
      description:
        "Maak kennis met acupuncturist Sam de Vries en de filosofie achter Acupunctuur Zaandam.",
      url: "https://www.acupunctuurzaandam.nl/over-de-praktijk",
      about: { "@type": "MedicalTherapy", name: "Acupunctuur" },
      author: {
        "@type": "Person",
        name: "Sam de Vries",
        jobTitle: "Acupuncturist",
        worksFor: {
          "@type": "MedicalClinic",
          name: "Acupunctuur Zaandam",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.acupunctuurzaandam.nl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Over de praktijk",
          item: "https://www.acupunctuurzaandam.nl/over-de-praktijk",
        },
      ],
    },
  ],
};

export default function OverDePraktijkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* Breadcrumb — fixed below shared header (~110px) */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div
            className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">
              Home
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Over de praktijk</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="md:pt-56 md:pb-24 overflow-hidden flex flex-col min-h-[70vh] pt-40 pb-16 relative items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
          />

          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-8">
              <span
                className="uppercase text-xs font-medium text-[#8A6B3D] tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Over ons
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>

            <h1
              className="md:text-6xl leading-[1.1] text-5xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Aangenaam, mijn naam is Sam de Vries uit Zaandam.
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-2xl mr-auto mb-12 ml-auto">
              Ik combineer mijn psychologische achtergrond met de 6000 jaar oude
              kracht van acupunctuur om mensen zowel geestelijk als lichamelijk
              te helpen zich beter te voelen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-normal hover:bg-[#4A6559] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3]"
              >
                Maak een afspraak
              </a>
              <a
                href="#mijn-verhaal"
                className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#F2EDE3] hover:border-[#1F3A36]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3] text-sm font-normal text-[#1F3A36] bg-transparent w-full border-[#1F3A36]/30 border rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
              >
                Lees mijn verhaal
              </a>
            </div>
          </div>
        </header>

        {/* Story / About Section */}
        <section
          id="mijn-verhaal"
          aria-labelledby="over-titel"
          className="bg-[#1F3A36] pt-32 pb-32 relative"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none"
          >
            <div
              className="absolute inset-0 opacity-10 mix-blend-luminosity bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#4A6559]/40 via-transparent to-transparent" />
          </div>

          <div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#FAF8F3]/20 relative aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acdfc0b-7c17-44c6-9162-cb7b3309a4f2_800w.png"
                    alt="Portret van acupuncturist Sam de Vries"
                    className="w-full h-full object-cover bg-center hover:scale-105 transition-transform duration-1000 motion-reduce:transition-none motion-reduce:transform-none"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2
                  className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  id="over-titel"
                >
                  Van psycholoog naar acupuncturist
                </h2>

                <div className="space-y-6 text-[#FAF8F3]/90 font-light leading-relaxed text-base">
                  <p>
                    Werkend als psycholoog merkte ik dat veel cliënten naast hun
                    mentale klachten ook lichamelijke problemen hadden. Denk
                    bijvoorbeeld aan aanhoudende nekpijn of een compleet gebrek
                    aan energie bij extreme stress of een burn-out.
                  </p>
                  <p>
                    Zelfs na het succesvol verhelpen van de mentale klachten
                    bleven bij veel cliënten deze fysieke klachten helaas
                    bestaan. De medicijnen van de huisarts hielpen soms wel en
                    soms niet. Alleen werd de daadwerkelijke, onderliggende
                    oorzaak van de ziekte hierdoor niet altijd opgelost.
                  </p>
                  <p>
                    Gefrustreerd zocht ik naar een structurele oplossing voor
                    mijn cliënten. Toen ik zelf acupunctuur probeerde, ontdekte
                    ik persoonlijk de kracht van deze indrukwekkende, 6000 jaar
                    oude methode. Mijn eigen klachten verdwenen. Dit gevoel van
                    verlichting en herstel wilde ik anderen ook kunnen geven. Om
                    die reden ben ik acupunctuur gaan studeren.
                  </p>

                  <h3
                    className="text-3xl font-normal text-[#FAF8F3] tracking-tight mt-10 mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Onze filosofie over gezondheid
                  </h3>
                  <p>
                    Nu combineer ik mijn psychologische achtergrond met de
                    inzichten van acupunctuur en de Traditionele Chinese
                    Geneeskunde. Onze filosofie is dat lichaam en geest
                    onlosmakelijk met elkaar verbonden zijn. Echte gezondheid en
                    rust ontstaan pas wanneer beide systemen in harmonie met
                    elkaar samenwerken.
                  </p>
                  <p>
                    Je bent in mijn praktijk van harte welkom voor beide soorten
                    klachten. We kijken verder dan enkel de symptomen en werken
                    samen aan een duurzaam herstel.
                  </p>

                  {/* Internal links */}
                  <div className="pt-4 flex flex-col gap-3">
                    <Link
                      href="/welke-klachten"
                      className="inline-flex items-center gap-2 text-sm font-light text-[#FAF8F3]/80 hover:text-[#FAF8F3] underline underline-offset-2 transition-colors w-fit"
                    >
                      Bekijk bij welke klachten acupunctuur kan helpen
                    </Link>
                    <Link
                      href="/behandeling-werkwijze"
                      className="inline-flex items-center gap-2 text-sm font-light text-[#FAF8F3]/80 hover:text-[#FAF8F3] underline underline-offset-2 transition-colors w-fit"
                    >
                      Lees hoe een behandeling verloopt
                    </Link>
                    <Link
                      href="/tarieven-vergoeding"
                      className="inline-flex items-center gap-2 text-sm font-light text-[#FAF8F3]/80 hover:text-[#FAF8F3] underline underline-offset-2 transition-colors w-fit"
                    >
                      Bekijk onze tarieven en vergoedingen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section
          aria-labelledby="reviews-titel"
          className="bg-[#FAF8F3] pt-32 pb-32"
        >
          <div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
            <div className="mb-20 md:text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#F2EDE3] border border-[#1F3A36]/5 mb-6">
                <iconify-icon
                  icon="solar:star-bold"
                  className="text-[#8A6B3D] text-sm"
                  stroke-width="1.5"
                />
                <iconify-icon
                  icon="solar:star-bold"
                  className="text-[#8A6B3D] text-sm"
                  stroke-width="1.5"
                />
                <iconify-icon
                  icon="solar:star-bold"
                  className="text-[#8A6B3D] text-sm"
                  stroke-width="1.5"
                />
                <iconify-icon
                  icon="solar:star-bold"
                  className="text-[#8A6B3D] text-sm"
                  stroke-width="1.5"
                />
                <iconify-icon
                  icon="solar:star-bold"
                  className="text-[#8A6B3D] text-sm"
                  stroke-width="1.5"
                />
                <span className="text-xs font-medium text-[#1F3A36] ml-2 tracking-widest uppercase">
                  5.0/5 op Google
                </span>
              </div>
              <h2
                id="reviews-titel"
                className="text-4xl md:text-5xl font-normal tracking-tight text-[#1F3A36] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Ervaringen uit de praktijk
              </h2>
              <p className="md:mx-auto leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-2xl">
                Niets spreekt meer voor zich dan de verhalen van degenen die u
                voorgingen. Ontdek hoe eerdere cliënten de stap naar herstel
                hebben ervaren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-base font-medium">
                      M
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Marieke V.
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">2 reviews</p>
                    </div>
                  </div>
                  <iconify-icon
                    icon="logos:google-icon"
                    className="text-xl mt-1"
                  />
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <span className="text-xs text-gray-500 ml-2">
                    3 maanden geleden
                  </span>
                </div>
                <p className="leading-relaxed flex-grow text-sm text-gray-700">
                  Na maanden rondlopen met aanhoudende stress en
                  spanningshoofdpijn, bracht Sam direct verlichting. Zijn
                  rustige, observerende aanpak wekt direct vertrouwen. Een
                  verademing in een gejaagde wereld.
                </p>
              </div>

              {/* Review 2 */}
              <div
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#34a853] text-white flex items-center justify-center text-base font-medium">
                      J
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Koen L.
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Google Review
                      </p>
                    </div>
                  </div>
                  <iconify-icon
                    icon="logos:google-icon"
                    className="text-xl mt-1"
                  />
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <span className="text-xs text-gray-500 ml-2">
                    Een maand geleden
                  </span>
                </div>
                <p className="leading-relaxed flex-grow text-sm text-gray-700">
                  In de voorbereiding op mijn eerste marathon kwam een oude
                  enkelblessure meer opspelen. Drie behandeling ben ik ondergaan
                  in drie weken en het had meteen al een enorm merkbaar effect na
                  de eerste behandeling. Ik kon probleemloos verder gaan
                  trainen.
                </p>
              </div>

              {/* Review 3 */}
              <div
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col h-full hover:shadow-md transition-shadow duration-300"
                style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#ea4335] text-white flex items-center justify-center text-base font-medium">
                      L
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Lisa K.
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Lokaal gids · 12 reviews
                      </p>
                    </div>
                  </div>
                  <iconify-icon
                    icon="logos:google-icon"
                    className="text-xl mt-1"
                  />
                </div>
                <div className="flex items-center gap-0.5 mb-3">
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <iconify-icon
                    icon="ic:round-star"
                    className="text-[#fbbc04] text-base"
                  />
                  <span className="text-xs text-gray-500 ml-2">
                    5 maanden geleden
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                  Wat een fijne, veilige plek. Sam luistert écht naar de
                  signalen van je lichaam in plaats van alleen symptomen te
                  bestrijden. Mijn overgangsklachten zijn aanzienlijk afgenomen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar: Beroepsverenigingen en Zorgverzekeraars */}
        <section
          aria-labelledby="trust-titel"
          className="border-y bg-[#F2EDE3] border-[#1F3A36]/10 pt-16 pb-16"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2
              className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
              id="trust-titel"
            >
              Aangesloten beroepsverenigingen en zorgverzekeraars
            </h2>

            <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp"
                alt="NVA - Nederlandse Vereniging voor Acupunctuur"
                className="md:h-12 w-auto h-10 object-cover bg-center"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png"
                alt="VGZ"
                className="md:h-10 bg-center w-auto h-8 object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg"
                alt="TCMA - Traditional Chinese Medicine Academy"
                className="md:h-12 w-auto h-10 object-contain"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png"
                alt="Zilveren Kruis"
                className="md:h-12 w-auto h-10 object-cover bg-center"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png"
                alt="CZ"
                className="md:h-10 bg-center w-auto h-8 object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9d7f8ec-453f-43d5-b95b-c8e49400962d_original.gif"
                alt="Menzis"
                className="md:h-10 w-auto h-8 object-cover bg-center"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          aria-labelledby="cta-titel"
          className="overflow-hidden text-center bg-[#1F3A36] pt-40 pr-6 pb-40 pl-6 relative"
          id="contact"
        >
          <div className="relative z-20 w-full max-w-6xl mx-auto text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Column */}
              <div className="flex flex-col items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#8A6B3D] mb-8"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m9 16 2 2 4-4" />
                </svg>

                <h2
                  id="cta-titel"
                  className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Een afspraak maken is simpel
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Klaar om de oorzaak van uw klachten aan te pakken? Plan direct
                  uw kennismaking of consult via Whatsapp of via de planner
                  hiernaast. Heeft u eerst nog vragen? Stuur ons dan gerust een
                  bericht.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>

              {/* Right Column: GHL Planner */}
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/30 to-[#4A6559]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300" />
                <div className="relative w-full bg-[#FAF8F3] rounded-xl shadow-2xl border border-[#1F3A36]/10 overflow-hidden flex flex-col">
                  <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b pr-4 pl-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">
                      Online Planner
                    </span>
                    <div className="w-10" />
                  </div>

                  <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg
                        className="animate-spin h-8 w-8 text-[#4A6559]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </div>

                    <iframe
                      src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                      style={{
                        width: "100%",
                        border: "none",
                        overflow: "auto",
                        minHeight: "650px",
                        height: "100%",
                        position: "relative",
                        zIndex: 10,
                      }}
                      scrolling="yes"
                      id="D8uouGkFZH4Alr37y5z4_over_de_praktijk"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
