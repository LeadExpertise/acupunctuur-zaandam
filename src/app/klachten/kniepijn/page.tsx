import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Kniepijn Zaandam | Artrose & Sportknie",
  description:
    "Kniepijn door artrose, een sportknie of bakers cyste? Acupunctuur in Zaandam verlicht pijn en verbetert beweeglijkheid. Erkend en vergoed door zorgverzekeraars.",
  keywords: [
    "acupunctuur kniepijn",
    "acupunctuur zaandam",
    "kniepijn behandeling",
    "gonartrose acupunctuur",
    "sportknie acupunctuur",
    "knie artrose",
    "acupunctuur pijn knie",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/kniepijn",
      name: "Acupunctuur bij Kniepijn",
      description:
        "Informatie over acupunctuur als behandeling voor kniepijn, gonartrose, sportknie en bakers cyste in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Kniepijn" },
        { "@type": "MedicalCondition", name: "Gonartrose" },
        { "@type": "MedicalCondition", name: "Patellofemoraal pijnsyndroom" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Kniepijn",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij kniepijn door artrose?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, meerdere grote klinische studies tonen aan dat acupunctuur effectief is bij kniepijn veroorzaakt door artrose. Een meta-analyse van Vickers et al. (2012) met bijna 18.000 deelnemers toonde significante pijnvermindering aan ten opzichte van schijnbehandeling. Acupunctuur helpt de pijn te dempen, de beweeglijkheid te verbeteren en de spierspanning rondom het kniegewricht te verminderen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn er nodig voor kniepijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute kniepijn zijn vaak 4 tot 6 behandelingen voldoende. Bij chronische kniepijn of artrose wordt doorgaans een traject van 8 tot 12 sessies aanbevolen, verspreid over 6 tot 10 weken. Na een initieel traject bespreken we samen of onderhoudsbehandelingen wenselijk zijn.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur bij kniepijn pijnlijk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De meeste mensen ervaren acupunctuur als aangenaam of licht tintelend. De naalden zijn zeer dun — veel dunner dan injectiespuiten. Rondom het kniegewricht kunnen sommige punten gevoeliger zijn, maar pijn is doorgaans minimaal. Veel pati\u00ebnten vallen zelfs in slaap tijdens de behandeling.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij kniepijn vergoed door de zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur wordt vergoed vanuit de aanvullende verzekering, afhankelijk van uw pakket en verzekeraar. Wij zijn aangesloten bij de NVA en werken met erkende acupuncturisten. Verzekeraars als VGZ, CZ en Zilveren Kruis vergoeden doorgaans een deel van de behandelingen. Neem contact op met uw verzekeraar voor de exacte vergoeding.",
          },
        },
      ],
    },
  ],
};

export default function KniepijnPage() {
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
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">
              Welke klachten
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link
              href="/klachten/pijnklachten-en-beweging"
              className="hover:text-[#1F3A36] transition-colors"
            >
              Pijnklachten &amp; beweging
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Kniepijn</span>
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
                Pijnbestrijding &amp; Herstel
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur bij Kniepijn in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Kniepijn is een van de meest voorkomende klachten waarmee mensen onze praktijk bezoeken.
              Of het nu gaat om slijtage, een sportknie of pijn zonder duidelijke oorzaak &mdash;
              acupunctuur biedt een bewezen effectieve aanpak om pijn te verminderen en uw bewegingsvrijheid
              te herstellen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300"
              >
                Maak een afspraak
              </a>
            </div>
          </div>
        </header>

        {/* Content Article */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            {/* Featured Snippet — targets "Helpt acupunctuur bij kniepijn?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur vermindert kniepijn door lokale ontstekingen te remmen, pijnprikkels te blokkeren en de doorbloeding te verbeteren. Meerdere studies bevestigen dat acupunctuur effectief is bij kniepijn door artrose, overbelasting en blessures — en bewegelijkheid merkbaar verbetert.
              </p>
            </div>
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is kniepijn?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Kniepijn is een verzamelnaam voor pijn in of rondom het kniegewricht. Het kniegewricht is
                een van de meest belaste gewrichten in het lichaam en daardoor kwetsbaar voor zowel
                slijtage als blessures. De pijn kan diffuus zijn, maar ook scherp gelokaliseerd aan de
                binnenkant, buitenkant of achterkant van de knie. Soms gaat kniepijn gepaard met zwelling,
                stijfheid of een knakkend gevoel bij bewegen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Veelvoorkomende vormen van kniepijn zijn gonartrose (knieartrose), een patellofemoraal
                pijnsyndroom (ook wel &lsquo;runnersknee&rsquo; of voorste kniepijn), een bakers cyste achter de
                knie, en knieblessures door sport of overbelasting. Ook meniscusproblemen en bandletsel
                kunnen chronische kniepijn veroorzaken.
              </p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Veelvoorkomende symptomen
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Pijn bij traplopen of opstaan vanuit zit
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Zwelling en warmte rondom het kniegewricht
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Ochtendstijfheid die geleidelijk afneemt
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Knakkende of krakende geluiden bij beweging
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Pijn die verergert bij koud of vochtig weer
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Mogelijke oorzaken
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Artrose (gewrichtsslijtage)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Sportblessures en overbelasting
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Meniscusscheur of bandletsel
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Bakers cyste (vochtophoping)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Verkeerde belasting of spierzwakte
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe acupunctuur kan helpen bij kniepijn
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG wordt kniepijn vaak geclassificeerd als een Bi-syndroom: een belemmering van
                    de vrije stroming van Qi en Xue (bloed) door de meridianen rondom het kniegewricht.
                    Factoren zoals kou, vocht en wind kunnen deze blokkade verergeren &mdash; wat verklaart
                    waarom veel mensen bij slecht weer meer kniepijn ervaren. De behandeling richt zich op
                    het opheffen van de belemmering, het versterken van de nieren en lever (die in de TCG
                    verantwoordelijk zijn voor pezen en gewrichten), en het herstellen van de Qi-stroom
                    door de knie-meridianen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Pijndemping:</strong> Acupunctuur
                      stimuleert de afgifte van endorfinen en enkefalinen, de lichaamseigen pijnstillers,
                      waardoor de pijnperceptie in het kniegewricht significant afneemt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Lokale naald-
                      stimulatie vergroot de microcirculatie rondom het kniegewricht, wat voeding aan het
                      kraakbeen en afvoer van afvalstoffen bevordert.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontsteking:</strong> Studies tonen
                      aan dat acupunctuur ontstekingsbevorderende cytokinen kan verminderen en zo
                      ontsteking rondom het gewricht remt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Spiertonus:</strong> Behandeling van
                      triggerpoints in de quadriceps en hamstrings ontspant de musculatuur rondom de knie
                      en vermindert de druk op het gewricht.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat kunt u verwachten van een behandeling?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Tijdens het eerste consult neemt de acupuncturist een uitgebreide anamnese af: wanneer
                begon de pijn, waar zit deze precies, wat verzwaart of verlicht de klacht? Vervolgens
                worden geschikte acupunctuurpunten bepaald, zowel lokaal rondom de knie als distaal op
                de meridianen die door het kniegebied lopen. De naalden blijven doorgaans 20 tot 30 minuten
                zitten. Veel pati&euml;nten ervaren al na de eerste of tweede behandeling merkbare verlichting.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Voor chronische kniepijn of artrose adviseren wij een traject van 8 tot 12 sessies.
                Na afronding bespreken we samen de noodzaak van onderhoudsbehandelingen, die bij artrose
                de klachten langdurig onder controle kunnen houden. Aanvullend kunnen oefeningen voor
                spierversterkende mobilisatie worden aanbevolen.
              </p>
            </section>

            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Voor wie is acupunctuur geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Senioren met knieartrose</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Sporters met overbelastingsklachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die pijnstillers willen afbouwen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten die een operatie willen uitstellen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Revalidatie na knieblessure of -operatie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Bij bakers cyste of patellaire problemen</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij kniepijn in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
                Kniepijn is een van de meest voorkomende redenen waarom mensen in de regio Zaandam onze
                hulp zoeken. Wij behandelen zowel acute sportknieblessures als chronische knieartrose bij
                ouderen.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/klachten/pijnklachten-en-beweging"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Pijnklachten overzicht
                </Link>
                <span className="text-[#8A6B3D]">&middot;</span>
                <Link
                  href="/klachten/artrose"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Artrose
                </Link>
                <span className="text-[#8A6B3D]">&middot;</span>
                <Link
                  href="/klachten/heupklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Heupklachten
                </Link>
                <span className="text-[#8A6B3D]">&middot;</span>
                <Link
                  href="/klachten/lage-rugklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Lage rugklachten
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* Science Section */}
        <section className="py-20 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#1F3A36]/10 flex items-center justify-center">
                <iconify-icon icon="solar:document-text-linear" className="text-[#1F3A36] text-2xl" />
              </div>
              <div>
                <h2
                  className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Wetenschappelijk onderbouwd
                </h2>
                <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed mb-4">
                  Een invloedrijke meta-analyse van Vickers AJ et al., gepubliceerd in{" "}
                  <em>Archives of Internal Medicine</em> (2012;172(19):1444&ndash;1453), analyseerde individuele
                  pati&euml;ntdata van 29 gerandomiseerde klinische studies met in totaal 17.922 deelnemers.
                  De studie toonde aan dat acupunctuur significant effectiever is dan zowel geen behandeling
                  als schijnacupunctuur bij chronische pijn, waaronder kniepijn door artrose. De onderzoekers
                  concludeerden dat acupunctuur een zinvolle behandeloptie is voor pati&euml;nten met chronische
                  pijnklachten.
                </p>
                <p className="text-xs text-[#1F3A36]/50 font-light">
                  Bron: Vickers AJ, et al. Acupuncture for Chronic Pain: Individual Patient Data Meta-analysis.{" "}
                  <em>Arch Intern Med.</em> 2012;172(19):1444&ndash;1453.
                </p>
              </div>
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
                Veelgestelde vragen over kniepijn
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij kniepijn door artrose?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, meerdere grote klinische studies tonen aan dat acupunctuur effectief is bij kniepijn
                  veroorzaakt door artrose. Een meta-analyse van Vickers et al. (2012) met bijna 18.000
                  deelnemers toonde significante pijnvermindering aan. Acupunctuur helpt de pijn te dempen,
                  de beweeglijkheid te verbeteren en de spierspanning rondom het kniegewricht te verminderen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn er nodig voor kniepijn?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij acute kniepijn zijn vaak 4 tot 6 behandelingen voldoende. Bij chronische kniepijn
                  of artrose wordt doorgaans een traject van 8 tot 12 sessies aanbevolen, verspreid over
                  6 tot 10 weken. Na een initieel traject bespreken we samen of onderhoudsbehandelingen
                  wenselijk zijn.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur bij kniepijn pijnlijk?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  De meeste mensen ervaren acupunctuur als aangenaam of licht tintelend. De naalden zijn
                  zeer dun &mdash; veel dunner dan injectiespuiten. Rondom het kniegewricht kunnen sommige
                  punten gevoeliger zijn, maar pijn is doorgaans minimaal. Veel pati&euml;nten vallen zelfs
                  in slaap tijdens de behandeling.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij kniepijn vergoed door de zorgverzekering?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur wordt vergoed vanuit de aanvullende verzekering, afhankelijk van uw pakket
                  en verzekeraar. Wij zijn aangesloten bij de NVA en werken met erkende acupuncturisten.
                  Verzekeraars als VGZ, CZ en Zilveren Kruis vergoeden doorgaans een deel van de
                  behandelingen. Neem contact op met uw verzekeraar voor de exacte vergoeding.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
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

        {/* Gerelateerde klachten */}
        <section className="py-16 bg-[#FAF8F3] border-t border-[#1F3A36]/10">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Gerelateerde klachten
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/klachten/heupklachten", label: "Heupklachten" },
                { href: "/klachten/lage-rugklachten", label: "Lage rugklachten" },
                { href: "/klachten/artrose", label: "Artrose" },
                { href: "/klachten/spierpijn", label: "Spierpijn" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#1F3A36]/10 hover:border-[#4A6559]/40 hover:bg-[#F2EDE3] transition-colors group"
                  >
                    <iconify-icon
                      icon="solar:alt-arrow-right-linear"
                      className="text-[#4A6559] group-hover:translate-x-0.5 transition-transform"
                    />
                    <span className="text-sm font-light text-[#1F3A36]">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
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
                  Klaar om verlichting te vinden?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Laat kniepijn uw dagelijkse leven niet langer beperken. Maak vandaag nog een afspraak
                  bij onze praktijk in Zaandam en ontdek hoe acupunctuur uw kniepijn kan verlichten en
                  uw beweeglijkheid kan herstellen.
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
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
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
                      id="D8uouGkFZH4Alr37y5z4_kniepijn"
                      title="Maak een afspraak"
                      loading="lazy"
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
