import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Blaasklachten & Urologische Klachten | Zaandam",
  description:
    "Behandeling van blaasontstekingen, overactieve blaas, incontinentie en blaasklachten met acupunctuur in Zaandam. Natuurlijke regulatie via Traditionele Chinese Geneeskunde.",
  keywords: [
    "acupunctuur blaasklachten",
    "overactieve blaas acupunctuur",
    "blaasontsteking acupunctuur zaandam",
    "incontinentie behandeling acupunctuur",
    "urineverlies acupunctuur",
    "acupunctuur blaas zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/blaas-urogenitaal",
      name: "Acupunctuur bij Blaas- en Urogenitale Klachten",
      description:
        "Overzicht en behandelingsinformatie voor blaasklachten, overactieve blaas, terugkerende blaasontstekingen en incontinentie via Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Overactieve blaas" },
        { "@type": "MedicalCondition", name: "Terugkerende blaasontsteking" },
        { "@type": "MedicalCondition", name: "Urine-incontinentie" },
        { "@type": "MedicalCondition", name: "Blaasklachten" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij een overactieve blaas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Er zijn klinische studies die een positief effect van acupunctuur laten zien bij overactieve blaas, met name voor vermindering van aandrang-incontinentie, frequent plassen overdag en nycturie. Acupunctuur beïnvloedt de sacrale zenuwbanen die de blaascontrole reguleren.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur terugkerende blaasontstekingen voorkomen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij vrouwen met terugkerende blaasontstekingen (meer dan 3 per jaar) zetten we acupunctuur in om de Nier-Qi te versterken en de lokale immuniteit te verbeteren. In de praktijk zien we dat de frequentie van infecties afneemt. We behandelen dit altijd ter aanvulling op reguliere urologische begeleiding.",
          },
        },
      ],
    },
  ],
};

export default function BlaasUrogenitaalPage() {
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
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Blaas &amp; urogenitaal</span>
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
                Blaas &amp; Urogenitaal
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur bij Blaas- &amp; Urologische Klachten
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Overactieve blaas, terugkerende blaasontstekingen, incontinentie — klachten die diep ingrijpen op uw dagelijks leven en zelfvertrouwen. Binnen de Traditionele Chinese Geneeskunde staat de Nier-Blaas-as centraal bij de regulatie van vloeistoffen en de blaascontrole. Acupunctuur herstelt dit systeem van binnenuit, zonder bijwerkingen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#klachten-index"
                className="text-sm font-medium text-[#1F3A36] border-b border-[#1F3A36]/30 hover:border-[#1F3A36] pb-1 transition-colors"
              >
                Bekijk alle blaas- en urogenitale klachten
              </a>
            </div>
          </div>
        </header>

        {/* Featured Snippet — targets "Helpt acupunctuur bij blaas- en urogenitale klachten?" */}
        <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 max-w-3xl mx-auto mt-10 mb-2 px-6">
          <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
          <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
            Ja. Acupunctuur verbetert blaas- en urogenitale klachten door de zenuwregulatie van het urogenitale stelsel te optimaliseren, spasmen te verminderen en het hormonale evenwicht te ondersteunen. Effectief bij blaasklachten, urethritis, prostaatproblemen en hormonaal gerelateerde klachten in het urogenitale gebied.
          </p>
        </div>

        {/* Why section */}
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
                Waarom werkt acupunctuur bij blaas- en urologische klachten?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <h3 className="font-medium text-[#1F3A36] text-base mb-2">De Oosterse Visie: Nier-Blaas-as &amp; Vloeistofregulatie</h3>
                <p>
                  In de Traditionele Chinese Geneeskunde vormen de Nieren en Blaas een Yin-Yang paar dat samenwerkt in de regulatie van vloeistoffen in het lichaam. De Nieren beheren de onderste lensopeningen en de transformatie van water. Een <em>Nier-Yang leegte</em> leidt tot onvoldoende verwarmende kracht: de blaas wordt slap, resulterend in frequente mictie, incontinentie en nachtelijk plassen. <em>Nier-Yin leegte</em> geeft juist een brandend gevoel en verhoogde gevoeligheid, wat bijdraagt aan terugkerende infecties. Acupunctuur tonificeert de juiste Nier-kwaliteit en herstelt de transformatiekracht van de Blaas.
                </p>
              </div>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <h3 className="font-medium text-[#1F3A36] text-base mb-2">De Westerse Visie: Sacrale Zenuwstimulatie &amp; Blaascontrole</h3>
                <p>
                  Westers gezien beïnvloedt acupunctuur de sacrale zenuwbanen (S2–S4) die direct verantwoordelijk zijn voor de blaascontrole. Onderzoek wijst op vermindering van detrusoroveractiviteit (onwillekeurige blaascontracties bij overactieve blaas) en verbetering van de urethrale sluitspiercontrole. Bij terugkerende infecties moduleert acupunctuur de lokale immuniteit van het urothelium en reguleert het de ontstekingsreactie, wat de vatbaarheid voor nieuwe infecties vermindert.
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
                Klik op een aandoening voor uitgebreide informatie over oorzaken, symptomen en onze behandelmethode in de praktijk in Zaandam.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

              <a href="/klachten/blaasklachten" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Blaasklachten</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Druk, pijn of ongemak in de blaasstreek</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/blaasontstekingen" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Terugkerende blaasontstekingen</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Frequente urineweginfecties, preventie</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/overactieve-blaas" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Overactieve blaas</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Plotselinge aandrang, frequent plassen, nycturie</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/urineverlies" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Urineverlies (Incontinentie)</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Stress- of aandrangincontinentie</p>
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
                Veelgestelde vragen over blaasbehandeling
              </h2>
            </div>
            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur pijnlijk bij blaasklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Nee. We brengen nooit naaldjes in of rondom de blaas. De acupunctuurpunten die we gebruiken liggen op de Nier- en Blaasmeridiaan: aan de binnenzijde van de enkels, de knieholte, de onderbeen en de lage rug. De behandeling is rustig en wordt door de meeste cliënten als ontspannend ervaren.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij een overactieve blaas?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Klinische studies laten positieve resultaten zien bij overactieve blaas. Acupunctuur beïnvloedt de sacrale zenuwbanen die de blaascontractie reguleren en kan de detrusoroveractiviteit verminderen. Veel cliënten merken na 4–6 behandelingen een merkbare vermindering van aandrangepisodes en nachtelijk plassen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Voor overactieve blaas en incontinentie is een traject van 8–12 behandelingen gebruikelijk, met wekelijkse sessies in de eerste fase. Bij terugkerende blaasontstekingen behandelen we meer preventief, met name in de periodes dat u kwetsbaar bent.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Worden blaasbehandelingen vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, omdat Acupunctuur Zaandam is aangesloten bij de erkende beroepsvereniging (NVA/TCMA), worden behandelingen door de meeste zorgverzekeraars vergoed vanuit het <strong>aanvullende pakket</strong>. Dit gaat niet ten koste van uw eigen risico.
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
                { href: "/klachten/blaasklachten", label: "Blaasklachten" },
                { href: "/klachten/blaasontstekingen", label: "Blaasontstekingen" },
                { href: "/klachten/overactieve-blaas", label: "Overactieve Blaas" },
                { href: "/klachten/urineverlies", label: "Urineverlies" },
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

        {/* CTA */}
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Klaar voor meer controle en comfort?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan direct een intake via onze online planner. Twijfelt u of acupunctuur geschikt is voor uw klacht? Stuur ons gerust een WhatsApp bericht — we denken graag met u mee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
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
                      style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }}
                      scrolling="yes"
                      id="D8uouGkFZH4Alr37y5z4_blaas"
                      title="Maak een afspraak"
                    />
                    <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
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
