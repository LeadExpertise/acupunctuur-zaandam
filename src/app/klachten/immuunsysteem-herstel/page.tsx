import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur voor Immuunsysteem & Herstel | Zaandam",
  description:
    "Versterk uw weerstand en herstel na ziekte met acupunctuur in Zaandam. Behandeling bij verminderde immuniteit, Long COVID en chronische ontstekingen.",
  keywords: [
    "acupunctuur immuunsysteem",
    "weerstand verbeteren acupunctuur",
    "long covid acupunctuur zaandam",
    "herstel na ziekte",
    "chronische ontsteking acupunctuur",
    "acupunctuur vermoeidheid na corona",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/immuunsysteem-herstel",
      name: "Acupunctuur voor Immuunsysteem & Herstel",
      description:
        "Overzicht en behandelingsinformatie voor immuunsysteemklachten en herstel na ziekte door middel van Traditionele Chinese Geneeskunde en acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Verminderde weerstand" },
        { "@type": "MedicalCondition", name: "Long COVID" },
        { "@type": "MedicalCondition", name: "Chronische ontsteking" },
        { "@type": "MedicalCondition", name: "Herstel na ziekte" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Verminderde immuniteit" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij Long COVID klachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur wordt wereldwijd onderzocht als behandeling voor Long COVID, met name voor vermoeidheid, brain fog en ademhalingsproblemen. Hoewel grootschalig gecontroleerd onderzoek nog loopt, laten vroege klinische ervaringen en casusrapporten veelbelovende resultaten zien. We behandelen Long COVID altijd complementair aan reguliere medische begeleiding.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe versterkt acupunctuur het immuunsysteem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur moduleert het immuunsysteem via meerdere mechanismen: het verhoogt de activiteit van Natural Killer-cellen, reguleert de pro-inflammatoire cytokines (TNF-alfa, IL-6) en stimuleert de productie van antilichamen. In TCG versterkt acupunctuur de Nier-Yang (het fundament van weerstand) en de Milt-Qi (productie van witte bloedcellen).",
          },
        },
      ],
    },
  ],
};

export default function ImmuunsysteemHerstellPage() {
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
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">
              Welke klachten
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Immuunsysteem &amp; Herstel</span>
          </div>
        </div>

        {/* Hero */}
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
                Immuunsysteem &amp; Herstel
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>

            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur voor Weerstand &amp; Herstel
            </h1>

            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een verzwakt immuunsysteem, herstel na langdurige ziekte en klachten zoals Long COVID
              vragen om een aanpak die het lichaam van binnenuit versterkt. Binnen de Traditionele
              Chinese Geneeskunde (TCG) richten we ons op het herstellen van de Oorspronkelijke Qi
              en het opbouwen van duurzame weerstand — zodat uw lichaam zichzelf weer kan dragen.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#klachten-index"
                className="text-sm font-medium text-[#1F3A36] border-b border-[#1F3A36]/30 hover:border-[#1F3A36] pb-1 transition-colors"
              >
                Bekijk alle klachten
              </a>
            </div>
          </div>
        </header>

        {/* Featured Snippet — targets "Helpt acupunctuur bij immuunsysteemherstel?" */}
        <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 max-w-3xl mx-auto mt-10 mb-2 px-6">
          <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
          <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
            Ja. Acupunctuur ondersteunt immuunsysteemherstel door de aanmaak van immuuncellen te stimuleren, ontsteking te remmen en het lichaam in staat te stellen dieper te herstellen. Effectief na ziekte, chemotherapie, langdurig antibioticagebruik of chronische infecties — met bewezen positief effect op immuunmarkers.
          </p>
        </div>

        {/* Waarom werkt acupunctuur bij immuunsysteem? */}
        <section className="py-16 bg-white relative z-10 border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#F2EDE3] flex items-center justify-center text-[#4A6559]">
                <iconify-icon icon="solar:info-circle-linear" className="text-xl" stroke-width="1.5" />
              </div>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Waarom werkt acupunctuur bij immuun- en herstelklachten?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <h3 className="font-medium text-[#1F3A36] text-base mb-2">De Oosterse Visie: Nier-Yang &amp; Milt-Qi als fundament</h3>
                <p>
                  Wanneer het Oorspronkelijke Qi (Yuan Qi) verzwakt is door langdurige ziekte, stress
                  of overbelasting, raakt de weerstand aangetast. De Milt, verantwoordelijk voor de
                  transformatie van voedsel naar energie en bloedcellen, is vaak de zwakke schakel.
                  Acupunctuur tonificeert Yuan Qi, versterkt Milt-Qi en helpt het lichaam de
                  productie van Weerstandsenergie (Wei-Qi) te herstellen.
                </p>
              </div>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <h3 className="font-medium text-[#1F3A36] text-base mb-2">
                  De Westerse Visie: Neuro-immuun regulatie
                </h3>
                <p>
                  Via regulatie van het neuro-immuun systeem beïnvloedt acupunctuur de functie van{" "}
                  <strong>Natural Killer-cellen, T-lymfocyten en macrofagen</strong>. Het remt
                  chronische laaggradige ontsteking door modulatie van pro-inflammatoire cytokines.
                  Dit heeft toepassingen bij verminderde weerstand, post-viraal herstel en chronische
                  ontstekingsklachten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Klachten index */}
        <section id="klachten-index" aria-labelledby="klachten-lijst-titel" className="py-24 relative z-10 bg-[#FAF8F3]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                id="klachten-lijst-titel"
                className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Kies uw specifieke klacht
              </h2>
              <p className="text-sm font-light text-[#1F3A36]/70 max-w-2xl mx-auto">
                Klik op een aandoening voor meer uitgebreide informatie over de oorzaken, symptomen
                en onze specifieke behandelmethode in de praktijk in Zaandam.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

              <a href="/klachten/verminderde-weerstand" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Verminderde weerstand</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Steeds ziek, langzaam herstel</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/herstel-na-ziekte" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Herstel na ziekte</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Post-viraal, na operatie of langdurige ziekte</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/long-covid" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Long COVID</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Vermoeidheid, brain fog, ademhaling</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/chronische-ontstekingsklachten" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Chronische ontsteking</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Aanhoudende laaggradige ontsteking</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen over immuunsysteem &amp; herstel
              </h2>
            </div>

            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan ik acupunctuur combineren met mijn reguliere behandeling?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, absoluut. Acupunctuur is complementair aan reguliere geneeskunde. Informeer uw arts en acupuncturist over elkaars behandelingen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe versterkt acupunctuur het immuunsysteem?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur moduleert het immuunsysteem via meerdere mechanismen: het verhoogt de activiteit van Natural Killer-cellen, reguleert de pro-inflammatoire cytokines (TNF-alfa, IL-6) en stimuleert de productie van antilichamen. In TCG versterkt acupunctuur de Nier-Yang (het fundament van weerstand) en de Milt-Qi (productie van witte bloedcellen).
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe lang duurt herstelbehandeling na langdurige ziekte?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Dit varieert sterk. Na een griep kan een paar sessies voldoende zijn. Bij Long COVID of post-operatief herstel is een traject van 3–6 maanden realistischer.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Worden behandelingen vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, omdat Acupunctuur Zaandam is aangesloten bij de erkende beroepsvereniging (NVA/TCMA), worden behandelingen door vrijwel alle Nederlandse zorgverzekeraars (deels) vergoed vanuit het{" "}
                  <strong>aanvullende pakket</strong> onder alternatieve geneeswijzen. Omdat het vanuit de aanvullende verzekering komt, gaat dit{" "}
                  <em>niet</em> ten koste van uw eigen risico.
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
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

        {/* Gerelateerde klachten */}
        <section className="py-16 bg-white border-b border-[#1F3A36]/10">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-2 text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Gerelateerde klachten
            </h2>
            <p className="text-sm text-[#1F3A36]/60 font-light text-center mb-8">
              Acupunctuur helpt ook bij deze verwante klachten
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: "/klachten/verminderde-weerstand", label: "Verminderde Weerstand" },
                { href: "/klachten/chronische-vermoeidheid", label: "Chronische Vermoeidheid" },
                { href: "/klachten/herstel-na-ziekte", label: "Herstel na Ziekte" },
                { href: "/klachten/long-covid", label: "Long Covid" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="klacht-card-link flex items-center justify-between gap-2 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/10 rounded-xl px-5 py-4 transition-colors duration-200 group"
                >
                  <span className="text-sm font-medium text-[#1F3A36]">{item.label}</span>
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#4A6559] text-base shrink-0 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA met boekingsplanner */}
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
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
                  Klaar om uw weerstand te herstellen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Zet vandaag de eerste stap naar duurzaam herstel. Plan direct een intake of consult
                  in via onze online planner. Twijfelt u of acupunctuur geschikt is voor uw
                  specifieke situatie? Stuur ons dan even een WhatsApp bericht.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">Online Planner</span>
                    <div className="w-10" />
                  </div>

                  <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="animate-spin h-8 w-8 text-[#4A6559]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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
                      id="D8uouGkFZH4Alr37y5z4_immuunsysteem"
                      title="Maak een afspraak"
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
