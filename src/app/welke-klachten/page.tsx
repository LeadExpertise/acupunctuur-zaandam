import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Klachten Behandeld met Acupunctuur",
  description:
    "Overzicht van alle klachten die wij succesvol behandelen met acupunctuur. Van pijnklachten, stress en burn-out tot hormonale disbalans en maag-darmklachten.",
  keywords: [
    "acupunctuur klachten",
    "pijnklachten",
    "stress",
    "burn-out",
    "hormonale klachten",
    "acupunctuur zaandam",
    "migraine",
    "vermoeidheid",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Acupunctuur Zaandam - Sam de Vries",
  url: "https://www.acupunctuurzaandam.nl",
  description:
    "Praktijk voor acupunctuur en Traditionele Chinese Geneeskunde in Zaandam.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruststraat 12",
    addressLocality: "Zaandam",
    postalCode: "1506 AA",
    addressCountry: "NL",
  },
  medicalSpecialty: "Acupuncture",
  availableService: [
    { "@type": "MedicalTherapy", name: "Pijnbestrijding" },
    { "@type": "MedicalTherapy", name: "Stress en Burn-out behandeling" },
    { "@type": "MedicalTherapy", name: "Hormonale balans herstel" },
  ],
};

export default function WelkeKlachtenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* Breadcrumb — positioned below fixed header (h-20 nav bar ~80px + review strip ~30px) */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div
            className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">
              Home
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Behandelingen &amp; Klachten</span>
          </div>
        </div>

        {/* SEO Pillar Hero Section */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden">
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
                Traditionele Chinese Geneeskunde
              </span>
              <div
                aria-hidden="true"
                className="h-px w-8 bg-[#8A6B3D]/60"
              />
            </div>

            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Welke klachten behandelen we?
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-2xl mr-auto ml-auto">
              Acupunctuur richt zich niet alleen op het verlichten van symptomen,
              maar zoekt naar de onderliggende oorzaak van uw disbalans. Ontdek
              hieronder bij welke lichamelijke en mentale klachten wij
              natuurlijke verlichting kunnen bieden.
            </p>
          </div>
        </header>

        {/* Klachten Overzicht Grid */}
        <section aria-labelledby="klachten-overzicht" className="pb-32 relative z-10">
          <h2 id="klachten-overzicht" className="sr-only">
            Lijst van alle behandelbare klachten gecategoriseerd
          </h2>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

              {/* Categorie 1: Pijnklachten */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:body-shape-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/pijnklachten-en-beweging" className="hover:text-[#4A6559] transition-colors">
                    Pijnklachten &amp; beweging
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/lage-rugklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Lage rugklachten</a></li>
                  <li><a href="/klachten/nekklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Nekklachten</a></li>
                  <li><a href="/klachten/schouderklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Schouderklachten</a></li>
                  <li><a href="/klachten/kniepijn" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Kniepijn</a></li>
                  <li><a href="/klachten/heupklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Heupklachten</a></li>
                  <li><a href="/klachten/ischias" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Ischias</a></li>
                  <li><a href="/klachten/artrose" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Artrose</a></li>
                  <li><a href="/klachten/spierpijn" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Spierpijn &amp; Gewrichtspijn</a></li>
                  <li><a href="/klachten/rsi" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">RSI / Tennis- &amp; Golferselleboog</a></li>
                  <li><a href="/klachten/frozen-shoulder" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Frozen shoulder</a></li>
                  <li><a href="/klachten/whiplash" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Whiplash &amp; Sportblessures</a></li>
                  <li><a href="/klachten/fibromyalgie" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Fibromyalgie</a></li>
                </ul>
              </article>

              {/* Categorie 2: Hoofd & Zenuwstelsel */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:brain-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/hoofd-zenuwstelsel" className="hover:text-[#4A6559] transition-colors">
                    Hoofd &amp; zenuwstelsel
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/hoofdpijn" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Hoofdpijn</a></li>
                  <li><a href="/klachten/migraine" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Migraine</a></li>
                  <li><a href="/klachten/duizeligheid" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Duizeligheid</a></li>
                  <li><a href="/klachten/tinnitus" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Tinnitus (Oorsuizen)</a></li>
                  <li><a href="/klachten/trigeminus-neuralgie" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Trigeminus neuralgie</a></li>
                  <li><a href="/klachten/aangezichtspijn" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Aangezichtspijn</a></li>
                  <li><a href="/klachten/restless-legs" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Restless legs</a></li>
                  <li><a href="/klachten/concentratieproblemen" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Concentratieproblemen</a></li>
                  <li><a href="/klachten/overprikkeling" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Overprikkeling</a></li>
                </ul>
              </article>

              {/* Categorie 3: Stress, Energie & Mentaal */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:leaf-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/stress-energie-mentaal" className="hover:text-[#4A6559] transition-colors">
                    Stress, energie &amp; mentaal
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/stressklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Stressklachten &amp; Spanning</a></li>
                  <li><a href="/klachten/burn-out" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Burn-out</a></li>
                  <li><a href="/klachten/vermoeidheid" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Vermoeidheid</a></li>
                  <li><a href="/klachten/chronische-vermoeidheid" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Chronische vermoeidheid</a></li>
                  <li><a href="/klachten/slaapproblemen" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Slaapproblemen</a></li>
                  <li><a href="/klachten/angstklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Angstklachten</a></li>
                  <li><a href="/klachten/somberheid" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Somberheid</a></li>
                  <li><a href="/klachten/uitputting" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Uitputting</a></li>
                </ul>
              </article>

              {/* Categorie 4: Hormonen & Vrouwenklachten */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:moon-stars-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/hormonen-vrouwenklachten" className="hover:text-[#4A6559] transition-colors">
                    Hormonen &amp; vrouwenklachten
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/menstruatieklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Menstruatieklachten &amp; PMS</a></li>
                  <li><a href="/klachten/onregelmatige-menstruatie" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Onregelmatige menstruatie</a></li>
                  <li><a href="/klachten/vruchtbaarheidsproblemen" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Vruchtbaarheidsproblemen</a></li>
                  <li><a href="/klachten/ivf-icsi-ondersteuning" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Ondersteuning bij IVF of ICSI</a></li>
                  <li><a href="/klachten/endometriose-pcos" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Endometriose &amp; PCOS</a></li>
                  <li><a href="/klachten/hormonale-disbalans" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Hormonale disbalans</a></li>
                  <li><a href="/klachten/overgangsklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Overgangsklachten</a></li>
                  <li><a href="/klachten/zwangerschapsklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Zwangerschapsklachten &amp; Misselijkheid</a></li>
                  <li><a href="/klachten/bekkenklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Bekkenklachten tijdens zwangerschap</a></li>
                </ul>
              </article>

              {/* Categorie 5: Spijsvertering & Buik */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:stomach-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/spijsvertering-buik" className="hover:text-[#4A6559] transition-colors">
                    Spijsvertering &amp; buik
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/maagklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Maagklachten</a></li>
                  <li><a href="/klachten/darmklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Darmklachten</a></li>
                  <li><a href="/klachten/prikkelbare-darm-syndroom" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Prikkelbare darm syndroom (PDS)</a></li>
                  <li><a href="/klachten/obstipatie" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Obstipatie</a></li>
                  <li><a href="/klachten/opgeblazen-gevoel" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Opgeblazen gevoel</a></li>
                  <li><a href="/klachten/reflux" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Reflux &amp; Brandend maagzuur</a></li>
                  <li><a href="/klachten/buikpijn" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Buikpijn</a></li>
                  <li><a href="/klachten/voedselintoleranties" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Voedselintoleranties</a></li>
                </ul>
              </article>

              {/* Categorie 6: Luchtwegen & Allergieën */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:wind-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/luchtwegen-allergieen" className="hover:text-[#4A6559] transition-colors">
                    Luchtwegen &amp; allergieën
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/ademhalingsproblemen" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Ademhalingsproblemen</a></li>
                  <li><a href="/klachten/hooikoorts" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Hooikoorts</a></li>
                  <li><a href="/klachten/astma" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Astma</a></li>
                  <li><a href="/klachten/sinusitis" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Sinusitis (Bijholteontsteking)</a></li>
                  <li><a href="/klachten/verkoudheid" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Chronische verkoudheid</a></li>
                  <li><a href="/klachten/allergische-klachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Allergische klachten</a></li>
                </ul>
              </article>

              {/* Categorie 7: Immuunsysteem & Herstel */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:shield-plus-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/immuunsysteem-herstel" className="hover:text-[#4A6559] transition-colors">
                    Immuunsysteem &amp; herstel
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/verminderde-weerstand" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Verminderde weerstand</a></li>
                  <li><a href="/klachten/herstel-na-ziekte" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Herstel na ziekte</a></li>
                  <li><a href="/klachten/long-covid" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Long COVID</a></li>
                  <li><a href="/klachten/chronische-ontstekingsklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Chronische ontstekingsklachten</a></li>
                </ul>
              </article>

              {/* Categorie 8: Blaas & Urogenitaal */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:drop-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/blaas-urogenitaal" className="hover:text-[#4A6559] transition-colors">
                    Blaas &amp; urogenitaal
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/blaasklachten" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Blaasklachten</a></li>
                  <li><a href="/klachten/blaasontstekingen" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Terugkerende blaasontstekingen</a></li>
                  <li><a href="/klachten/overactieve-blaas" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Overactieve blaas</a></li>
                  <li><a href="/klachten/urineverlies" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Urineverlies (Incontinentie)</a></li>
                </ul>
              </article>

              {/* Categorie 9: Leefstijl & Ondersteuning */}
              <article className="bg-white rounded-2xl p-8 border border-[#1F3A36]/5 shadow-[0_4px_20px_-10px_rgba(31,58,54,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(31,58,54,0.1)] transition-shadow duration-300 flex flex-col h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F2EDE3] text-[#4A6559] mb-6">
                  <iconify-icon icon="solar:heart-pulse-linear" className="text-2xl" stroke-width="1.5" />
                </div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <Link href="/klachten/leefstijl-ondersteuning" className="hover:text-[#4A6559] transition-colors">
                    Leefstijl &amp; ondersteuning
                  </Link>
                </h2>
                <ul className="space-y-3 mt-auto flex-grow list-none p-0 text-sm font-light text-[#1F3A36]/80">
                  <li><a href="/klachten/stoppen-met-roken" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Stoppen met roken</a></li>
                  <li><a href="/klachten/pijnbestrijding" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Algemene pijnbestrijding</a></li>
                  <li><a href="/klachten/vitaliteit" className="klacht-link hover:text-[#4A6559] focus:outline-none focus:ring-1 focus:ring-[#1F3A36] rounded-sm">Algemene vitaliteit &amp; energieherstel</a></li>
                </ul>
              </article>

            </div>
          </div>
        </section>

        {/* SEO Content Block: Holistische aanpak */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Een holistische aanpak voor uw klachten
            </h2>
            <div className="space-y-6 text-base text-[#1F3A36]/80 font-light leading-relaxed">
              <p>
                Binnen de Traditionele Chinese Geneeskunde (TCG) kijken we anders naar klachten en
                ziektes dan in de westerse geneeskunde. Waar de westerse benadering vaak gericht is
                op het lokaal bestrijden van een specifiek symptoom, zien we in de Chinese geneeskunde
                uw lichaam en geest als één verbonden, dynamisch systeem. Pijn, vermoeidheid of
                ziekte wordt gezien als een stagnatie of onbalans in uw vitale levensenergie, de{" "}
                <em>Qi</em>.
              </p>
              <p>
                Wanneer u met een van bovenstaande klachten in onze praktijk in Zaandam komt,
                onderzoeken we niet alleen de plek waar het pijn doet. We kijken naar uw algehele
                energie, slaappatroon, spijsvertering en stressniveau. Door middel van uiterst dunne,
                steriele naaldjes op specifieke acupunctuurpunten herstellen we de doorstroming van
                energie in de meridianen. Dit stimuleert het zelfhelend vermogen van uw lichaam,
                vermindert ontstekingen, verlaagt stresshormonen en brengt u terug in uw natuurlijke
                balans.
              </p>
              <p className="font-medium text-[#1F3A36]">Staat uw klacht er niet tussen?</p>
              <p>
                De lijst hierboven is een overzicht van de meest voorkomende aandoeningen die wij
                behandelen (gebaseerd op de indicatielijst van de WHO). Acupunctuur is echter breed
                inzetbaar. Neem gerust contact met ons op om te bespreken of acupunctuur ook voor uw
                specifieke situatie verlichting kan bieden.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Bar: Beroepsverenigingen */}
        <section
          aria-label="Beroepsverenigingen en verzekeraars"
          className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16"
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
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp"
                alt="NVA Erkend Acupuncturist"
                className="md:h-12 w-auto h-10 object-cover bg-center"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png"
                alt="VGZ Vergoeding Acupunctuur"
                className="md:h-10 bg-center w-auto h-8 object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg"
                alt="TCMA Certificering"
                className="md:h-12 w-auto h-10 object-contain"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png"
                alt="Zilveren Kruis Vergoeding"
                className="md:h-12 w-auto h-10 object-cover bg-center"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png"
                alt="CZ Vergoeding Acupunctuur"
                className="md:h-10 bg-center w-auto h-8 object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          aria-labelledby="cta-titel"
          className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative"
        >
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                  Klaar om de oorzaak aan te pakken?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Zet vandaag de eerste stap naar herstel. Plan direct een intake of consult in via
                  onze online planner. Twijfelt u of acupunctuur geschikt is voor uw klacht? Stuur
                  ons dan even een WhatsApp bericht.
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
                      id="D8uouGkFZH4Alr37y5z4_welke_klachten"
                      title="Maak een afspraak"
                      loading="lazy"
                    />
                    <Script
                      src="https://link.msgsndr.com/js/form_embed.js"
                      strategy="afterInteractive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
