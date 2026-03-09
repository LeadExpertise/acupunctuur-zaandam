import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Darmklachten Zaandam | Darmproblemen",
  description:
    "Last van darmkramp, diarree, wisselende ontlasting of opgeblazen gevoel? Acupunctuur in Zaandam behandelt darmklachten via TCG en moderne fysiologie.",
  keywords: [
    "acupunctuur darmklachten zaandam",
    "darmproblemen acupunctuur",
    "darmkramp acupunctuur zaandam",
    "diarree acupunctuur",
    "hersen-darm-as acupunctuur",
    "darmontsteking acupunctuur zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/darmklachten",
      name: "Acupunctuur bij Darmklachten in Zaandam",
      description:
        "Informatie over de behandeling van darmkramp, diarree, wisselende ontlasting en opgeblazen gevoel via acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Darmklachten" },
        { "@type": "MedicalCondition", name: "Darmkramp" },
        { "@type": "MedicalCondition", name: "Functionele darmklachten" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Darmklachten" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur darmklachten verminderen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur beïnvloedt de hersen-darm-as via de vagusnervus en het enterische zenuwstelsel. In de TCG wordt gewerkt aan het herstellen van de Milt-Maag functie en het oplossen van stagnaties in de Dikke Darm meridiaan. Veel cliënten merken vermindering van kramp, diarree en opgeblazen gevoel na een reeks behandelingen.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur geschikt naast behandeling voor de ziekte van Crohn of colitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur wordt in toenemende mate ingezet als aanvullende therapie bij inflammatoire darmziekten zoals de ziekte van Crohn en colitis ulcerosa. Het vervangt reguliere medicamenteuze behandeling niet, maar kan klachten zoals kramp, vermoeidheid en stressgerelateerde opvlammingen ondersteunen.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij chronische diarree?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chronische diarree wordt in de TCG gezien als een teken van Milt-Qi of Nieren-Yang deficiëntie. Behandeling richt zich op het versterken van die orgaanfuncties. Westers onderzoek toont dat acupunctuur de darmmotiliteit kan normaliseren en de overgevoeligheid van de darmwand kan verminderen.",
          },
        },
        {
          "@type": "Question",
          name: "Worden behandelingen vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij de meeste zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function DarmklachtenPage() {
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
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Welke klachten</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/klachten/spijsvertering-buik" className="hover:text-[#1F3A36] transition-colors">Spijsvertering &amp; buik</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Darmklachten</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Spijsvertering &amp; Buik
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Darmklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Darmkramp, wisselende ontlasting, frequente diarree of een constant opgeblazen gevoel — darmklachten beïnvloeden uw dagelijks functioneren op ingrijpende wijze. Acupunctuur richt zich op de dieperliggende disbalans in de darmfunctie via zowel de Traditionele Chinese Geneeskunde als de moderne hersen-darm-verbinding.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn darmklachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Darmklachten omvatten een breed spectrum van klachten in het onderste deel van het spijsverteringskanaal: van darmkramp en opgeblazen gevoel tot wisselende stoelgang, urgente diarree en een gevoel van onvolledige ontlasting. Soms is er een duidelijk structurele oorzaak zoals de ziekte van Crohn of colitis ulcerosa; vaker gaat het om functionele klachten waarbij het darmstelsel gevoelig reageert op voeding, stress of hormonale schommelingen zonder dat er weefselschade aantoonbaar is. De hersen-darm-as — de bidirectionele verbinding tussen het centrale zenuwstelsel en het enterische zenuwstelsel in de darm — speelt bij vrijwel alle vormen van darmklachten een centrale rol.
              </p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Veelvoorkomende symptomen
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Darmkramp en buikpijn",
                      "Frequente of urgente diarree",
                      "Opgeblazen gevoel en winderigheid",
                      "Wisselende ontlasting (diarree en obstipatie)",
                      "Gevoel van onvolledige lediging",
                      "Slijm bij de ontlasting",
                      "Vermoeidheid door chronische darmklachten",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Mogelijke oorzaken
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Stress en overbelasting van het zenuwstelsel",
                      "Inflammatoire darmziekten (Crohn, colitis)",
                      "Prikkelbare darm syndroom (PDS/IBS)",
                      "Voedselintoleranties en overgevoeligheden",
                      "Dysbiose van de darmflora",
                      "Post-infectieuze darmproblemen",
                      "Hormonale schommelingen",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur kan helpen
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    De TCG ziet de Dikke Darm als het orgaan dat verantwoordelijk is voor de finale verwerking en uitscheiding van voedselresten. Problemen in de darmfunctie worden doorgaans teruggevoerd op een disbalans in de Milt en de Maag — de kern van de spijsvertering — of op een spanning vanuit de Lever die de darmfunctie verstoort. Bij chronische diarree is er vaak sprake van een Yang- of Qi-deficiëntie; bij krampen en stagnatie van een Qi-blokkade. Behandeling richt zich op het vrijmaken van stagnaties, het versterken van de spijsverteringsfunctie en het herstellen van de balans tussen Lever en Milt-Maag-systeem.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Hersen-darm-as:</strong> Acupunctuur moduleert de communicatie tussen het centrale zenuwstelsel en het enterische zenuwstelsel in de darm. Dit kan de overgevoeligheid van de darmwand verminderen en de motiliteit normaliseren.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Microbioom en stressrespons:</strong> Chronische stress verstoort de samenstelling van de darmflora via corticosteroïden. Acupunctuur dempt de stressrespons via de HPA-as, wat indirect de darmmicrobiota ondersteunt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontstekingsremming:</strong> Bij inflammatoire darmziekten toont onderzoek dat acupunctuur pro-inflammatoire cytokinen kan verlagen en zo een ondersteunend effect heeft op het darmweefsel.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat kunt u verwachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Darmklachten reageren doorgaans goed op acupunctuur, maar vragen geduld. We adviseren een traject van 8 tot 12 behandelingen over 2 tot 3 maanden. Eerste verbeteringen in krampen en opgeblazen gevoel zijn veelal na 3 tot 5 sessies merkbaar. Bij ernstige inflammatoire darmziekten werken we altijd in overleg met de behandelend arts of specialist.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Naast acupunctuur bespreken we ook leefstijladvies: eetpatroon, voedingsgewoonten, stressmanagement en beweging. Bij darmklachten die samenhangen met voedselintoleranties kan een verwijzing naar een diëtist zinvol zijn als aanvulling op de behandeling.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is dit geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met functionele darmklachten",
                  "Mensen met PDS/IBS die aanvulling zoeken",
                  "Mensen met stress-gerelateerde darmklachten",
                  "Mensen met de ziekte van Crohn (aanvullend)",
                  "Mensen met colitis ulcerosa (aanvullend)",
                  "Mensen met post-infectieuze darmklachten",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span className="text-sm font-medium text-[#1F3A36]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Behandeling in Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/spijsvertering-buik" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Spijsvertering &amp; buik overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/prikkelbare-darm-syndroom" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Prikkelbare darm syndroom
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/obstipatie" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Obstipatie
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Alle klachten
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over darmklachten
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Kan acupunctuur darmklachten verminderen?",
                  a: "Ja. Acupunctuur beïnvloedt de hersen-darm-as via de vagusnervus en het enterische zenuwstelsel. In de TCG wordt gewerkt aan het herstellen van de Milt-Maag functie en het oplossen van stagnaties in de Dikke Darm meridiaan. Veel cliënten merken vermindering van kramp, diarree en opgeblazen gevoel na een reeks behandelingen.",
                },
                {
                  q: "Is acupunctuur geschikt naast behandeling voor de ziekte van Crohn of colitis?",
                  a: "Acupunctuur wordt in toenemende mate ingezet als aanvullende therapie bij inflammatoire darmziekten zoals de ziekte van Crohn en colitis ulcerosa. Het vervangt reguliere medicamenteuze behandeling niet, maar kan klachten zoals kramp, vermoeidheid en stressgerelateerde opvlammingen ondersteunen.",
                },
                {
                  q: "Helpt acupunctuur bij chronische diarree?",
                  a: "Chronische diarree wordt in de TCG gezien als een teken van Milt-Qi of Nieren-Yang deficiëntie. Behandeling richt zich op het versterken van die orgaanfuncties. Westers onderzoek toont dat acupunctuur de darmmotiliteit kan normaliseren en de overgevoeligheid van de darmwand kan verminderen.",
                },
                {
                  q: "Worden behandelingen vergoed?",
                  a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij de meeste zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
                },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                    {item.q}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
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
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" />
                </svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Klaar voor een eerste stap?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Darmklachten verdienen een grondige aanpak. Plan een intake en bespreek hoe acupunctuur uw darmfunctie en kwaliteit van leven kan verbeteren.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
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
                      id="D8uouGkFZH4Alr37y5z4_darmklachten"
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
