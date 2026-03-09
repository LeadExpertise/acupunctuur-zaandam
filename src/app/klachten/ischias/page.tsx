import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Ischias Zaandam | Ischiaszenuw & Uitstralende Pijn",
  description:
    "Ischias: uitstralende pijn vanuit de rug door het been? Acupunctuur in Zaandam verlicht druk op de ischiaszenuw. Erkend behandelaar, deels vergoed.",
  keywords: [
    "acupunctuur ischias",
    "acupunctuur zaandam",
    "ischiaszenuw behandeling",
    "uitstralende rugpijn been",
    "piriformis syndroom acupunctuur",
    "ischias oefeningen",
    "hernia acupunctuur zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/ischias",
      name: "Acupunctuur bij Ischias",
      description:
        "Informatie over acupunctuur als behandeling voor ischiasklachten, uitstralende beenpijn en piriformissyndroom in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Ischias" },
        { "@type": "MedicalCondition", name: "Nervus ischiadicus beknelling" },
        { "@type": "MedicalCondition", name: "Piriformissyndroom" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Ischias",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur ischiaspijn verlichten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan bij veel pati\u00ebnten de ischiaspijn significant verlichten. Door punten te behandelen langs de Galblaas- en Blaasmeridiaan, die parallel lopen aan het traject van de ischiaszenuw, wordt de zenuwprikkeling verminderd. Tegelijkertijd ontspant acupunctuur de spieren die de zenuw kunnen beknellen, zoals de piriformisspier.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het verschil tussen ischias en een hernia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ischias is de beschrijving van het klachtenpatroon: uitstralende pijn langs de ischiaszenuw naar het been. Een hernia (hernia nuclei pulposi) is een van de oorzaken van ischias, waarbij een tussenwervelschijf de zenuwwortel beknelt. Andere oorzaken zijn spierverharding (piriformissyndroom), artrose van de wervelkolom of een spinale stenose.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij ischias?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De behandelduur is afhankelijk van de oorzaak en de chronicitei van de klachten. Bij acute ischias na een hernia zijn soms al 4 tot 6 sessies voldoende voor significante verbetering. Bij chronische ischias of een piriformissyndroom adviseren wij een traject van 8 tot 12 sessies, waarbij we na elke 4 behandelingen de voortgang evalueren.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij een hernia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is over het algemeen veilig bij een hernia. De naalden worden niet geplaatst op de aangedane wervelkolom zelf, maar op omliggende punten en distale punten langs de meridianen. We werken altijd voorzichtig en pijnvrij. Bij ernstige neurologische uitval of cauda-equina-syndroom verwijzen wij door naar de huisarts of specialist.",
          },
        },
      ],
    },
  ],
};

export default function IschiasPage() {
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
            <span className="text-[#1F3A36]">Ischias</span>
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
              Acupunctuur bij Ischias in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Ischiaspijn &mdash; de brandende, schietende pijn die vanuit de rug uitstraalt door bil en
              been &mdash; kan buitengewoon invaliderend zijn. Acupunctuur biedt een gerichte aanpak om
              de druk op de ischiaszenuw te verlichten, de omliggende musculatuur te ontspannen en de
              pijn duurzaam te verminderen.
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
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is ischias?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Ischias is geen ziekte op zichzelf, maar een klachtenpatroon dat ontstaat wanneer de
                nervus ischiadicus &mdash; de dikste zenuw van het menselijk lichaam &mdash; bekneld of
                ge&iuml;rriteerd raakt. Deze zenuw loopt vanuit de wervelkolom (L4 tot en met S1) door de
                bilspieren en vervolgens langs de achterkant van het been tot aan de voet. Wanneer deze
                zenuw onder druk staat, ontstaan typische klachten: een scherpe, brandende of schietende
                pijn die uitstraalt vanuit de onderrug of bil door het been, soms tot in de voet.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                De meest voorkomende oorzaken zijn een hernia in de lumbale wervelkolom, artrose van
                de facetgewrichten, spinale stenose (vernauwing van het wervelkanaal) en het
                piriformissyndroom, waarbij de piriformisspier in de bil de ischiaszenuw beknelt. Het
                onderscheiden van deze oorzaken is belangrijk voor de juiste behandeling.
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
                      Schietende pijn vanuit rug of bil langs het been
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Tintelingen of gevoelloosheid in been of voet
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Pijn die verergert bij zitten of vooroverbuigen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Spierkramp of zwaktegevoel in het been
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Pijn bij hoesten, niezen of persen
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
                      Hernia nuclei pulposi (L4&ndash;S1)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Piriformissyndroom (spierklem in de bil)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Spinale stenose (wervelkanaalsvernauwing)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Facetartrose in de lumbale wervelkolom
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Spondylolisthesis (verschuiving wervellichaam)
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
                Hoe acupunctuur kan helpen bij ischias
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG loopt de Blaasmeridiaan langs de gehele achterkant van het lichaam, van het
                    hoofd via de rug en bil tot aan de voet &mdash; exact het traject van de ischiaszenuw.
                    Ischiaspijn wordt beschouwd als een ernstige obstructie van Qi en Xue in deze
                    meridiaan, vaak verergerd door kou en vocht. Behandeling richt zich op het openen van
                    de Blaas- en Galblaasmeridiaan, het versterken van de Nierenergie (de grondslag van
                    de wervelkolom in de TCG) en het ontspannen van de spieren rondom de zenuw.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Pijndemping:</strong> Acupunctuur
                      moduleert de overdracht van pijnsignalen via het centrale zenuwstelsel en
                      stimuleert de afgifte van endorfinen, waardoor de brandende ischiaspijn afneemt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Verbeterde
                      doorbloeding rondom de aangedane zenuwwortel bevordert herstel van geprikkeld of
                      oedeemachtig zenuwweefsel.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontsteking:</strong> Behandeling
                      van triggerpoints in de piriformis en gluteusmusculatuur vermindert de
                      spiertonus en verlicht zo de directe zenuwcompressie.
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
                Tijdens het intakegesprek brengen we het precieze verloop van de pijn in kaart: welke
                bewegingen verergeren de klacht, welke verlichten die, en zijn er ook tintelingen of
                krachtsverlies? Op basis hiervan worden naalden geplaatst langs het verloop van de
                ischiaszenuw &mdash; in de bil, het bovenbeen en onderbeen &mdash; en op gerichte
                punten in de lumbale regio. Bij een piriformissyndroom wordt extra aandacht besteed aan
                de diepe bilspieren.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij acute ischias (recent ontstaan) zijn soms al 4 tot 6 behandelingen voldoende voor
                duidelijke verbetering. Chronische ischias of een hernia vergt doorgaans een traject van
                8 tot 12 sessies. Wij werken indien gewenst samen met fysiotherapeuten of manueel
                therapeuten voor een optimale uitkomst.
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
                  <span className="text-sm font-medium text-[#1F3A36]">Acute of chronische ischiaspijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Hernia met uitstralende beenpijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Piriformissyndroom</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten na rugoperatie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Aanvullend op fysiotherapie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Bij spinale stenose of facetartrose</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij ischias in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
                Ischiasklachten zijn een veelgehoorde reden waarom mensen uit de regio onze praktijk
                opzoeken. Wij combineren zo nodig acupunctuur met moxibustie en adviezen voor
                houdingscorrectie en gerichte oefeningen.
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
                  href="/klachten/lage-rugklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Lage rugklachten
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
                  href="/klachten/nekklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Nekklachten
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen over ischias
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur ischiaspijn verlichten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur kan bij veel pati&euml;nten de ischiaspijn significant verlichten. Door punten
                  te behandelen langs de Galblaas- en Blaasmeridiaan, die parallel lopen aan het traject
                  van de ischiaszenuw, wordt de zenuwprikkeling verminderd. Tegelijkertijd ontspant
                  acupunctuur de spieren die de zenuw kunnen beknellen, zoals de piriformisspier.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wat is het verschil tussen ischias en een hernia?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ischias is de beschrijving van het klachtenpatroon: uitstralende pijn langs de
                  ischiaszenuw naar het been. Een hernia is een van de oorzaken van ischias, waarbij een
                  tussenwervelschijf de zenuwwortel beknelt. Andere oorzaken zijn spierverharding
                  (piriformissyndroom), artrose of spinale stenose.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig bij ischias?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij acute ischias zijn soms al 4 tot 6 sessies voldoende. Bij chronische ischias of
                  een hernia adviseren wij een traject van 8 tot 12 sessies. Na elke 4 behandelingen
                  evalueren we samen de voortgang en stellen het plan bij.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij een hernia?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is over het algemeen veilig bij een hernia. De naalden worden niet
                  geplaatst op de aangedane wervelkolom zelf, maar op omliggende en distale punten langs
                  de meridianen. Bij ernstige neurologische uitval verwijzen wij door naar de huisarts
                  of specialist.
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
                  Laat ischiaspijn uw bewegingsvrijheid niet langer inperken. Maak vandaag nog een
                  afspraak in Zaandam en ontdek hoe acupunctuur de druk op uw ischiaszenuw kan
                  verlichten en uw kwaliteit van leven teruggeeft.
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
                      id="D8uouGkFZH4Alr37y5z4_ischias"
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
