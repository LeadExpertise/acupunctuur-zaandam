import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Spierpijn Zaandam | Myalgie & Triggerpoints",
  description:
    "Chronische spierpijn, myalgie of gespannen spieren? Acupunctuur in Zaandam behandelt triggerpoints en verlicht spierpijn effectief. Erkend NVA-acupuncturist.",
  keywords: [
    "acupunctuur spierpijn",
    "acupunctuur zaandam",
    "myalgie behandeling",
    "triggerpoint acupunctuur",
    "spierspanning behandeling",
    "droge naaldtherapie",
    "chronische spierpijn zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/spierpijn",
      name: "Acupunctuur bij Spierpijn",
      description:
        "Informatie over acupunctuur als behandeling voor spierpijn, myalgie en triggerpoints in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Spierpijn" },
        { "@type": "MedicalCondition", name: "Myalgie" },
        { "@type": "MedicalCondition", name: "Triggerpoints" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Spierpijn",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe werkt acupunctuur bij spierpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur verlicht spierpijn op meerdere manieren: door directe stimulatie van triggerpoints (pijnlijke knopen in spierweefsel) worden deze ontkrampt; door activering van het endogene pijndempingssysteem daalt het pijnniveau; en door verbeterde doorbloeding worden afvalstoffen zoals melkzuur sneller afgevoerd. Dit maakt acupunctuur effectief bij zowel acute als chronische spierpijn.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het verschil tussen acupunctuur en dry needling bij spierpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dry needling is een westerse techniek waarbij naalden uitsluitend worden geplaatst in triggerpoints &mdash; pijnlijke knooppunten in spierweefsel. Acupunctuur combineert triggerpointbehandeling met een breder energetisch perspectief: meridianen, systemische disbalansen en de wisselwerking tussen orgaansystemen worden meegewogen. In de praktijk overlappen de twee technieken sterk; acupunctuur biedt doorgaans een bredere behandelingscontext.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij spierpijn na het sporten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is effectief bij spierpijn na inspanning (DOMS) en bij sportblessures. Het versnelt de afvoer van metabole afvalstoffen uit het spierweefsel, vermindert lokale ontsteking en bevordert herstel. Sporters gebruiken acupunctuur zowel als behandeling bij blessures als als preventief hulpmiddel om spierstijfheid en overbelasting te voorkomen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel sessies zijn nodig bij chronische spierpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute spierpijn zijn soms 2 tot 4 sessies voldoende. Chronische spierpijn, zoals bij fibromyalgie of langdurige overbelasting, vereist doorgaans een traject van 8 tot 12 sessies. Na het initieel traject adviseren wij onderhoudsbehandelingen en leefstijladviezen om terugkeer van klachten te voorkomen.",
          },
        },
      ],
    },
  ],
};

export default function SpierpijnPage() {
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
            <span className="text-[#1F3A36]">Spierpijn</span>
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
              Acupunctuur bij Spierpijn in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Aanhoudende spierpijn, gespannen spieren of pijnlijke knopen die maar niet willen wijken?
              Acupunctuur is een bewezen effectieve techniek om triggerpoints te behandelen, de
              spierspanning te verlagen en de doorbloeding te verbeteren &mdash; zodat uw lichaam
              eindelijk tot rust kan komen.
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
                Wat is spierpijn?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Spierpijn &mdash; medisch myalgie &mdash; is pijn die haar oorsprong vindt in het spierweefsel
                zelf. Het kan variëren van een lichte, zeurende pijn na inspanning tot een diepe,
                aanhoudende pijn die het bewegen belemmert. Spierpijn kan diffuus zijn (verspreid over
                het hele lichaam) of gelokaliseerd in specifieke spiergroepen zoals de nek, schouders,
                onderrug of benen. Wanneer spierpijn langere tijd aanhoudt zonder duidelijke
                aanleiding, spreekt men van chronische myalgie of, in ernstigere gevallen, fibromyalgie.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Een veelvoorkomend fenomeen bij spierpijn zijn triggerpoints: pijnlijke, verharde
                knooppunten in de spier die bij druk een karakteristieke uitstralende pijn geven. Ze
                ontstaan door overbelasting, langdurige verkeerde houding, stress of onvoldoende
                herstel na inspanning. Triggerpoints in de nekspieren kunnen hoofdpijn veroorzaken;
                in de heupspieren kunnen ze uitstralende pijn geven die lijkt op ischiasklachten.
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
                      Lokale of diffuse pijnlijke spieren
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Stijfheid en verminderde beweeglijkheid
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Voelbare knobbels of harde strengen in de spier
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Uitstralende pijn bij druk op een triggerpoint
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Vermoeidheid en slaapstoornissen door pijn
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
                      Overbelasting door sport of lichamelijk werk
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Langdurige verkeerde houding (beeldschermwerk)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Psychische spanning en stress
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Onvoldoende herstel en slaaptekort
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Fibromyalgie of chronisch vermoeidheidssyndroom
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
                Hoe acupunctuur kan helpen bij spierpijn
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG worden spieren beschouwd als weefsels die nauw verbonden zijn met de
                    Leverenergie: de lever is verantwoordelijk voor de soepele doorstroming van Qi en
                    voor de voeding van pezen en spieren. Spierpijn ontstaat wanneer Qi stagneert of
                    wanneer het Bloed (Xue) de spieren onvoldoende voedt. Stress en emotionele spanning
                    belemmeren de Leverfunctie en manifesteren zich letterlijk als gespannen spieren.
                    De behandeling richt zich op het herstellen van de Qi-stroom, het nourishing van
                    Lever-Bloed en het ontspannen van de getroffen spiergebieden via specifieke
                    acupunctuurpunten.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Pijndemping:</strong> Naaldstimulatie
                      in triggerpoints veroorzaakt een lokale twitch-respons, waarna de gespannen
                      spiervezels ontspannen. Tegelijkertijd activeert de naald het endorfinesysteem
                      voor bredere pijnverlichting.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Acupunctuur
                      verhoogt de lokale bloeddoorstroming, wat de aanvoer van zuurstof en voedingsstoffen
                      verbetert en de afvoer van metabole afvalstoffen zoals melkzuur versnelt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontsteking:</strong> Acupunctuur
                      moduleert de productie van inflammatoire mediatoren en bevordert het herstel
                      van microtraumata in het spierweefsel die kunnen leiden tot chronische pijn.
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
                Tijdens de intake bepaalt de acupuncturist welke spiergroepen aangedaan zijn en of er
                duidelijke triggerpoints aanwezig zijn. Bij triggerpointbehandeling worden naalden
                direct in de pijnlijke knooppunten geplaatst; dit kan een korte, scherpe sensatie geven
                gevolgd door directe ontspanning van de spier. Naast lokale punten worden ook distale
                punten behandeld die de Qi-stroom door de aangedane spieren herstellen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij acute spierpijn na overbelasting zijn soms 2 tot 4 sessies voldoende voor herstel.
                Chronische spierpijn of spierpijn in het kader van fibromyalgie vraagt om een langer
                traject: doorgaans 8 tot 12 sessies, aangevuld met advies over rust, bewegen, houding
                en stressmanagement. Wij werken bij complexe klachten graag samen met uw huisarts of
                fysiotherapeut.
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
                  <span className="text-sm font-medium text-[#1F3A36]">Spierpijn door overbelasting of sport</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Triggerpoints in nek, schouders of rug</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Spanning door stress of beeldschermwerk</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Fibromyalgie en diffuse spierpijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Sporters in herstelperiode</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met spierpijn bij reuma</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij spierpijn in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
                Spierpijn door werkstress, sport of chronische spanning is een van de meest voorkomende
                klachten in onze praktijk. Met gerichte triggerpointtherapie en klassieke acupunctuur
                helpen wij pati&euml;nten uit de hele regio hun spierspanning te verlichten en de oorzaak
                van hun klachten aan te pakken.
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
                  href="/klachten/nekklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Nekklachten
                </Link>
                <span className="text-[#8A6B3D]">&middot;</span>
                <Link
                  href="/klachten/fibromyalgie"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Fibromyalgie
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
                Veelgestelde vragen over spierpijn
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe werkt acupunctuur bij spierpijn?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur verlicht spierpijn op meerdere manieren: door directe stimulatie van
                  triggerpoints worden gespannen spiervezels ontkrampt; door activering van het endogene
                  pijndempingssysteem daalt het pijnniveau; en door verbeterde doorbloeding worden
                  afvalstoffen zoals melkzuur sneller afgevoerd. Dit maakt acupunctuur effectief bij
                  zowel acute als chronische spierpijn.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wat is het verschil tussen acupunctuur en dry needling bij spierpijn?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Dry needling is een westerse techniek waarbij naalden uitsluitend worden geplaatst in
                  triggerpoints. Acupunctuur combineert triggerpointbehandeling met een breder energetisch
                  perspectief: meridianen en systemische disbalansen worden meegewogen. In de praktijk
                  overlappen de technieken sterk; acupunctuur biedt doorgaans een bredere behandelingscontext.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij spierpijn na het sporten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is effectief bij spierpijn na inspanning en bij sportblessures. Het
                  versnelt de afvoer van metabole afvalstoffen, vermindert lokale ontsteking en bevordert
                  herstel. Sporters gebruiken acupunctuur zowel als behandeling als als preventief middel
                  tegen spierstijfheid en overbelasting.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel sessies zijn nodig bij chronische spierpijn?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij acute spierpijn zijn soms 2 tot 4 sessies voldoende. Chronische spierpijn, zoals
                  bij fibromyalgie of langdurige overbelasting, vereist doorgaans een traject van 8 tot
                  12 sessies. Na het initieel traject adviseren wij onderhoudsbehandelingen en
                  leefstijladviezen om terugkeer van klachten te voorkomen.
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
                  Gespannen spieren en chronische spierpijn verdienen meer dan een pijnstiller. Maak
                  vandaag een afspraak in onze praktijk in Zaandam en ontdek hoe acupunctuur uw
                  triggerpoints behandelt en uw lichaam duurzaam ontspant.
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
                      id="D8uouGkFZH4Alr37y5z4_spierpijn"
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
