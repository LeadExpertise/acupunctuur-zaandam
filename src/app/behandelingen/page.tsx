import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behandelingen | Acupunctuur Zaandam",
  description:
    "Bekijk al onze acupunctuurbehandelingen in Zaandam. Van rugpijn en migraine tot stress, hormonale klachten en darmproblemen. Erkend, vergoed en effectief.",
  keywords: [
    "acupunctuur behandelingen Zaandam",
    "acupunctuur klachten overzicht",
    "acupunctuur rugpijn",
    "acupunctuur migraine",
    "acupunctuur stress",
    "acupunctuur hormonen",
    "acupunctuur Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen",
      name: "Acupunctuur Behandelingen | Acupunctuur Zaandam",
      description:
        "Overzicht van alle acupunctuurbehandelingen bij Acupunctuur Zaandam. Erkend, verzekerd en effectief voor pijn, stress, hormonale klachten en meer.",
      audience: { "@type": "Patient" },
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
          name: "Behandelingen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen",
        },
      ],
    },
  ],
};

const categories = [
  {
    title: "Pijnklachten & Beweging",
    icon: "solar:body-linear",
    color: "#1F3A36",
    treatments: [
      { slug: "lage-rugklachten", label: "Lage rugklachten" },
      { slug: "nekklachten", label: "Nekklachten" },
      { slug: "schouderklachten", label: "Schouderklachten" },
      { slug: "kniepijn", label: "Kniepijn" },
      { slug: "heupklachten", label: "Heupklachten" },
      { slug: "ischias", label: "Ischias" },
      { slug: "artrose", label: "Artrose" },
      { slug: "spierpijn", label: "Spierpijn" },
      { slug: "rsi", label: "RSI" },
      { slug: "frozen-shoulder", label: "Frozen shoulder" },
      { slug: "whiplash", label: "Whiplash" },
      { slug: "fibromyalgie", label: "Fibromyalgie" },
      { slug: "pijnbestrijding", label: "Pijnbestrijding" },
    ],
  },
  {
    title: "Hoofd & Zenuwstelsel",
    icon: "solar:brain-linear",
    color: "#4A6559",
    treatments: [
      { slug: "migraine", label: "Migraine" },
      { slug: "hoofdpijn", label: "Hoofdpijn" },
      { slug: "duizeligheid", label: "Duizeligheid" },
      { slug: "tinnitus", label: "Tinnitus" },
      { slug: "trigeminus-neuralgie", label: "Trigeminus neuralgie" },
      { slug: "aangezichtspijn", label: "Aangezichtspijn" },
      { slug: "restless-legs", label: "Restless legs" },
      { slug: "concentratieproblemen", label: "Concentratieproblemen" },
      { slug: "overprikkeling", label: "Overprikkeling" },
    ],
  },
  {
    title: "Stress, Energie & Mentaal",
    icon: "solar:mind-graph-linear",
    color: "#8A6B3D",
    treatments: [
      { slug: "burn-out", label: "Burn-out" },
      { slug: "stressklachten", label: "Stressklachten" },
      { slug: "slaapproblemen", label: "Slaapproblemen" },
      { slug: "vermoeidheid", label: "Vermoeidheid" },
      { slug: "chronische-vermoeidheid", label: "Chronische vermoeidheid" },
      { slug: "angstklachten", label: "Angstklachten" },
      { slug: "somberheid", label: "Somberheid" },
      { slug: "uitputting", label: "Uitputting" },
    ],
  },
  {
    title: "Hormonen & Vrouwenklachten",
    icon: "solar:health-linear",
    color: "#1F3A36",
    treatments: [
      { slug: "menstruatieklachten", label: "Menstruatieklachten" },
      { slug: "onregelmatige-menstruatie", label: "Onregelmatige menstruatie" },
      { slug: "vruchtbaarheidsproblemen", label: "Vruchtbaarheidsproblemen" },
      { slug: "ivf-icsi-ondersteuning", label: "IVF / ICSI ondersteuning" },
      { slug: "endometriose-pcos", label: "Endometriose & PCOS" },
      { slug: "hormonale-disbalans", label: "Hormonale disbalans" },
      { slug: "overgangsklachten", label: "Overgangsklachten" },
      { slug: "zwangerschapsklachten", label: "Zwangerschapsklachten" },
      { slug: "bekkenklachten", label: "Bekkenklachten" },
    ],
  },
  {
    title: "Spijsvertering & Buik",
    icon: "solar:stomach-linear",
    color: "#4A6559",
    treatments: [
      { slug: "prikkelbare-darm-syndroom", label: "Prikkelbare darm" },
      { slug: "maagklachten", label: "Maagklachten" },
      { slug: "darmklachten", label: "Darmklachten" },
      { slug: "obstipatie", label: "Obstipatie" },
      { slug: "opgeblazen-gevoel", label: "Opgeblazen gevoel" },
      { slug: "reflux", label: "Reflux" },
      { slug: "buikpijn", label: "Buikpijn" },
      { slug: "voedselintoleranties", label: "Voedselintoleranties" },
    ],
  },
  {
    title: "Luchtwegen & Allergieën",
    icon: "solar:lungs-linear",
    color: "#8A6B3D",
    treatments: [
      { slug: "hooikoorts", label: "Hooikoorts" },
      { slug: "ademhalingsproblemen", label: "Ademhalingsproblemen" },
      { slug: "astma", label: "Astma" },
      { slug: "sinusitis", label: "Sinusitis" },
      { slug: "verkoudheid", label: "Verkoudheid" },
      { slug: "allergische-klachten", label: "Allergische klachten" },
    ],
  },
  {
    title: "Immuunsysteem & Herstel",
    icon: "solar:shield-plus-linear",
    color: "#1F3A36",
    treatments: [
      { slug: "verminderde-weerstand", label: "Verminderde weerstand" },
      { slug: "herstel-na-ziekte", label: "Herstel na ziekte" },
      { slug: "long-covid", label: "Long COVID" },
      { slug: "chronische-ontstekingsklachten", label: "Chronische ontstekingen" },
    ],
  },
  {
    title: "Blaas & Urogenitaal",
    icon: "solar:drop-linear",
    color: "#4A6559",
    treatments: [
      { slug: "blaasklachten", label: "Blaasklachten" },
      { slug: "blaasontstekingen", label: "Blaasontstekingen" },
      { slug: "overactieve-blaas", label: "Overactieve blaas" },
      { slug: "urineverlies", label: "Urineverlies" },
    ],
  },
  {
    title: "Leefstijl & Ondersteuning",
    icon: "solar:leaf-linear",
    color: "#8A6B3D",
    treatments: [
      { slug: "stoppen-met-roken", label: "Stoppen met roken" },
      { slug: "vitaliteit", label: "Vitaliteit" },
    ],
  },
];

export default function BehandelingenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div
            className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">
              Home
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Behandelingen</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
          />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span
                className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Erkend &amp; Vergoed
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>

            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur behandelingen in Zaandam
            </h1>

            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Acupunctuur Zaandam behandelt een breed spectrum aan klachten, van chronische pijn en
              migraine tot stress, hormonale disbalans en spijsverteringsproblemen. Kies hieronder
              uw klacht voor uitgebreide informatie over de behandeling.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300"
              >
                Maak een afspraak
              </a>
              <Link
                href="/welke-klachten"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300"
              >
                Welke klachten?
              </Link>
            </div>
          </div>
        </header>

        {/* Treatment grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-16">
              {categories.map((cat) => (
                <div key={cat.title}>
                  <h2
                    className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-8 pb-4 border-b border-[#1F3A36]/10"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {cat.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {cat.treatments.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/behandelingen/acupunctuur-${t.slug}`}
                        className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200"
                      >
                        <iconify-icon
                          icon="solar:alt-arrow-right-linear"
                          className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform"
                        />
                        <span className="text-sm font-medium text-[#1F3A36]">{t.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section
          aria-label="Beroepsverenigingen en verzekeraars"
          className="border-y bg-[#FAF8F3] border-[#1F3A36]/10 py-16"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2
              className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Erkend door verenigingen en vergoed door verzekeraars
            </h2>
            <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp" alt="NVA Erkend Acupuncturist" className="md:h-12 w-auto h-10 object-cover bg-center" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png" alt="VGZ Vergoeding Acupunctuur" className="md:h-10 bg-center w-auto h-8 object-cover" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg" alt="TCMA Certificering" className="md:h-12 w-auto h-10 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png" alt="Zilveren Kruis Vergoeding" className="md:h-12 w-auto h-10 object-cover bg-center" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png" alt="CZ Vergoeding Acupunctuur" className="md:h-10 bg-center w-auto h-8 object-cover" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          aria-labelledby="cta-titel"
          className="overflow-hidden text-center bg-[#1F3A36] pt-24 pb-24 relative"
        >
          <div className="relative z-20 w-full max-w-3xl mx-auto px-6 text-center">
            <h2
              id="cta-titel"
              className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Klaar voor uw eerste behandeling?
            </h2>
            <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mx-auto mb-10">
              Plan direct een intake in Zaandam via WhatsApp of onze online planner. Geen wachtlijst,
              geen verwijzing nodig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/31657998330"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                WhatsApp ons
              </a>
              <Link
                href="/welke-klachten"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#FAF8F3]/20 text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300"
              >
                Bekijk alle klachten
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
