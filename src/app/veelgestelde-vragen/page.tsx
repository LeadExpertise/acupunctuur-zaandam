import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over acupunctuur | Acupunctuur Zaandam",
  description:
    "Antwoorden op de meestgestelde vragen over acupunctuur: doet het pijn, wordt het vergoed, hoeveel sessies, hoe werkt het? Alles op een rij voor Acupunctuur Zaandam.",
  keywords: [
    "acupunctuur faq",
    "veelgestelde vragen acupunctuur",
    "doet acupunctuur pijn",
    "wordt acupunctuur vergoed",
    "hoe werkt acupunctuur",
    "acupunctuur vragen zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat zijn de kosten van een behandeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eerste consult (Intake + Behandeling): €80,- (duur ca. 1,5 uur). Vervolgbehandeling: €60,- (duur ca. 1 uur). Tijdens het eerste consult nemen we uitgebreid de tijd voor een vraaggesprek (anamnese), pols- en tongdiagnostiek, gevolgd door uw eerste behandeling.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur vergoed door de zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, in de meeste gevallen wel. Acupunctuur wordt door vrijwel alle Nederlandse zorgverzekeraars geheel of gedeeltelijk vergoed vanuit uw aanvullende verzekering. Omdat wij zijn aangesloten bij erkende beroepsverenigingen (zoals de NVA), voldoen wij aan de eisen van zorgverzekeraars. Consulten vallen niet onder uw verplichte eigen risico. Raadpleeg de polisvoorwaarden van uw eigen verzekeraar voor de exacte hoogte van uw vergoeding.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe en wanneer kan ik betalen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "U kunt na afloop van elke behandeling direct afrekenen in de praktijk via pin. Na uw betaling ontvangt u een digitale factuur per e-mail met alle benodigde gegevens om de kosten te declareren bij uw zorgverzekeraar.",
          },
        },
        {
          "@type": "Question",
          name: "Doet acupunctuur pijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nee, een acupunctuurbehandeling doet over het algemeen geen pijn. De naaldjes die we gebruiken zijn haardun. U voelt wellicht een klein prikje als de naald wordt gezet. Vaak ervaart men daarna een lichte tinteling, een zwaar gevoel, of een milde druk rondom de naald (het 'De Qi' gevoel). Dit is volkomen normaal en geeft juist aan dat de energie effectief begint te stromen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel sessies heb ik nodig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dit varieert per persoon en hangt af van de aard en de duur van uw klachten. Bij relatief acute, recente klachten merkt u vaak al na 3 tot 5 behandelingen een aanzienlijk verschil. Voor chronische of langdurige klachten is vaak een langer traject nodig. Tijdens het eerste consult maken we samen een inschatting en een persoonlijk behandelplan.",
          },
        },
        {
          "@type": "Question",
          name: "Moet ik me speciaal voorbereiden op een afspraak?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Draag comfortabele, loszittende kleding. Zorg dat u iets gegeten heeft maar vermijd zware maaltijden vlak voor de behandeling. Vermijd zware fysieke inspanning en overmatig alcoholgebruik kort voor en na de sessie. Plan na de behandeling ruimte in voor rust.",
          },
        },
        {
          "@type": "Question",
          name: "Zijn er bijwerkingen na een behandeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is een zeer veilige geneeswijze met vrijwel geen nadelige bijwerkingen. Wat wel kan voorkomen, is dat u zich na de sessie even vermoeid, loom of juist heel energiek voelt. Soms kan een klacht de eerste 24 uur kortstondig iets verergeren (beginverergering). Dit is een natuurlijk, onschuldig teken dat uw lichaam reageert en het zelfherstellend vermogen is geactiveerd.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe werkt acupunctuur precies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Binnen de Traditionele Chinese Geneeskunde (TCG) gaat men ervan uit dat levensenergie (Qi) door het lichaam stroomt via meridianen. Ziekte of pijn ontstaat wanneer er een blokkade of onbalans is in deze energiestroom. Door specifieke punten op deze meridianen aan te prikken, stimuleren we het lichaam om blokkades op te heffen en het zelfhelend vermogen te activeren.",
          },
        },
        {
          "@type": "Question",
          name: "Zijn de naalden veilig en steriel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absoluut. Wij werken uitsluitend met hoogwaardige, steriel verpakte wegwerpnaalden voor eenmalig gebruik. Er is hierdoor geen enkel risico op besmetting of infectie.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het verschil tussen dry needling en acupunctuur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dry needling richt zich puur lokaal op spierknopen (triggerpoints) om spanning in één specifieke spier te verminderen. Acupunctuur kijkt naar het lichaam als een holistisch geheel en pakt ook de onderliggende oorzaak van de klacht aan via het meridiaanstelsel. Hierdoor werken we zowel fysiek als mentaal aan een structurele oplossing.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt het ook bij mentale klachten of stress?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, heel goed zelfs. Binnen de Chinese Geneeskunde worden lichaam en geest als één verbonden systeem gezien. Acupunctuur is bijzonder krachtig in het reguleren van het zenuwstelsel, waardoor het diepe ontspanning brengt en zowel fysieke als mentale stress aanzienlijk vermindert.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur elke ziekte oplossen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nee, acupunctuur is geen wondermiddel en vervangt nooit noodzakelijke medische behandelingen. Wat het wél doet, is uw lichamelijke balans verbeteren, pijn verlichten, ontstekingen remmen en het immuunsysteem versterken. Het is een uitstekende complementaire zorg die de kwaliteit van leven aanzienlijk kan verhogen.",
          },
        },
      ],
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
          name: "Veelgestelde vragen",
          item: "https://www.acupunctuurzaandam.nl/veelgestelde-vragen",
        },
      ],
    },
  ],
};

export default function VeelgesteldeVragenPage() {
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
            <span className="text-[#1F3A36]">Veelgestelde vragen</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="md:pt-48 md:pb-16 overflow-hidden flex flex-col pt-40 pb-12 relative items-center justify-center min-h-[50vh]">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
          />

          <div className="z-10 text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span
                className="uppercase text-xs font-medium text-[#8A6B3D] tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Kennisbank
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>

            <h1
              className="md:text-6xl leading-[1.1] text-5xl font-normal text-[#1F3A36] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Veelgestelde vragen
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-xl mr-auto mb-10 ml-auto">
              Vind hier direct antwoord op uw vragen over onze werkwijze, de
              behandelingen, tarieven en vergoedingen door de zorgverzekering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-normal hover:bg-[#4A6559] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3]"
              >
                Maak een afspraak
              </a>
              <a
                href="https://wa.me/31657998330"
                className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#F2EDE3] hover:border-[#1F3A36]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3] text-sm font-normal text-[#1F3A36] bg-transparent w-full border-[#1F3A36]/30 border rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
              >
                <iconify-icon
                  icon="solar:chat-round-line-linear"
                  className="text-lg"
                />
                Stel een vraag
              </a>
            </div>
          </div>
        </header>

        {/* FAQ Content Section */}
        <section id="faq-content" className="bg-[#FAF8F3] pb-32">
          <div className="max-w-4xl mx-auto px-6">

            {/* Categorie 1: Tarieven & Vergoeding */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#F2EDE3] flex items-center justify-center text-[#4A6559]">
                  <iconify-icon
                    icon="solar:wallet-money-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Tarieven &amp; Vergoeding
                </h2>
              </div>

              <div className="space-y-4">
                <details
                  className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300"
                  open
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Wat zijn de kosten van een behandeling?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      <li>
                        <strong>Eerste consult (Intake + Behandeling):</strong>{" "}
                        €80,- (duur ca. 1,5 uur)
                      </li>
                      <li>
                        <strong>Vervolgbehandeling:</strong> €60,- (duur ca. 1
                        uur)
                      </li>
                    </ul>
                    <p>
                      Tijdens het eerste consult nemen we uitgebreid de tijd
                      voor een vraaggesprek (anamnese), pols- en
                      tongdiagnostiek, gevolgd door uw eerste behandeling.{" "}
                      <Link
                        href="/tarieven-vergoeding"
                        className="text-[#4A6559] underline hover:text-[#1F3A36]"
                      >
                        Bekijk onze tarieven en vergoedingen
                      </Link>
                      .
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>
                      Wordt acupunctuur vergoed door de zorgverzekering?
                    </span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    <p className="mb-3">
                      Ja, in de meeste gevallen wel. Acupunctuur wordt door
                      vrijwel alle Nederlandse zorgverzekeraars geheel of
                      gedeeltelijk vergoed vanuit uw{" "}
                      <strong>aanvullende verzekering</strong>. Omdat wij zijn
                      aangesloten bij erkende beroepsverenigingen (zoals de
                      NVA), voldoen wij aan de eisen van zorgverzekeraars.
                    </p>
                    <p>
                      <em>Let op:</em> Consulten vallen niet onder uw
                      verplichte eigen risico. Raadpleeg de polisvoorwaarden van
                      uw eigen verzekeraar voor de exacte hoogte van uw
                      vergoeding.{" "}
                      <Link
                        href="/tarieven-vergoeding#vergoedingen"
                        className="text-[#4A6559] underline hover:text-[#1F3A36]"
                      >
                        Bekijk het vergoedingsoverzicht per verzekeraar
                      </Link>
                      .
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Hoe en wanneer kan ik betalen?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    U kunt na afloop van elke behandeling direct afrekenen in de
                    praktijk. Wij beschikken over een pinautomaat. Na uw
                    betaling ontvangt u van ons een digitale factuur per e-mail.
                    Deze factuur bevat alle benodigde gegevens (zoals AGB-codes)
                    die u nodig heeft om de kosten direct te kunnen declareren
                    bij uw zorgverzekeraar.
                  </div>
                </details>
              </div>
            </div>

            {/* Categorie 2: De Behandeling */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#F2EDE3] flex items-center justify-center text-[#4A6559]">
                  <iconify-icon
                    icon="solar:heart-pulse-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  De Behandeling
                </h2>
              </div>

              <div className="space-y-4">
                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Doet acupunctuur pijn?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Nee, een acupunctuurbehandeling doet over het algemeen geen
                    pijn. De naaldjes die we gebruiken zijn haardun en niet te
                    vergelijken met naalden voor bijvoorbeeld bloedprikken. U
                    voelt wellicht een klein prikje als de naald wordt gezet.
                    Vaak ervaart men daarna een lichte tinteling, een zwaar
                    gevoel, of een milde druk rondom de naald (het zogenaamde
                    &lsquo;De Qi&rsquo; gevoel). Dit is volkomen normaal en
                    geeft juist aan dat de energie effectief begint te stromen.
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Hoeveel sessies heb ik nodig?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Dit varieert enorm per persoon en hangt af van de aard en de
                    duur van uw klachten. Bij relatief acute, recente klachten
                    merkt u vaak al na 3 tot 5 behandelingen een aanzienlijk
                    verschil. Voor chronische of langdurige klachten is vaak een
                    langer traject nodig om het lichaam fundamenteel weer in
                    balans te krijgen. Tijdens het eerste consult maken we altijd
                    samen een inschatting en een persoonlijk behandelplan.{" "}
                    <Link
                      href="/behandeling-werkwijze"
                      className="text-[#4A6559] underline hover:text-[#1F3A36]"
                    >
                      Lees meer over hoe een behandeling verloopt
                    </Link>
                    .
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>
                      Moet ik me speciaal voorbereiden op een afspraak?
                    </span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Er zijn een paar simpele dingen waar u rekening mee kunt
                    houden:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        Draag comfortabele, loszittende kleding. Veelgebruikte
                        punten bevinden zich op de onderarmen en onderbenen.
                      </li>
                      <li>
                        Zorg ervoor dat u iets gegeten heeft voordat u komt,
                        maar vermijd zware maaltijden vlak voor de behandeling.
                      </li>
                      <li>
                        Vermijd zware fysieke inspanning en overmatig
                        alcoholgebruik kort voor en direct na de sessie.
                      </li>
                      <li>
                        Probeer na de behandeling ruimte in te plannen voor
                        rust, zodat uw lichaam de behandeling goed kan
                        verwerken.
                      </li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Zijn er bijwerkingen na een behandeling?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Acupunctuur is een zeer veilige geneeswijze met vrijwel geen
                    nadelige bijwerkingen. Wat wel kan voorkomen, is dat u zich
                    na de sessie even vermoeid, loom of juist heel energiek
                    voelt. Soms kan een klacht de eerste 24 uur kortstondig iets
                    verergeren. Dit wordt ook wel een &lsquo;beginverergering&rsquo;
                    genoemd en is een natuurlijk, onschuldig teken dat uw
                    lichaam reageert op de behandeling en het zelfherstellend
                    vermogen is geactiveerd.
                  </div>
                </details>
              </div>
            </div>

            {/* Categorie 3: Veiligheid & Werking */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#F2EDE3] flex items-center justify-center text-[#4A6559]">
                  <iconify-icon
                    icon="solar:shield-check-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Veiligheid &amp; Werking
                </h2>
              </div>

              <div className="space-y-4">
                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Hoe werkt acupunctuur precies?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Binnen de Traditionele Chinese Geneeskunde (TCG) gaat men
                    ervan uit dat levensenergie (Qi) door het lichaam stroomt
                    via een netwerk van banen, de zogeheten meridianen. Ziekte
                    of pijn ontstaat wanneer er een blokkade of onbalans is in
                    deze energiestroom. Door zeer lokaal specifieke punten op
                    deze meridianen aan te prikken, stimuleren we het lichaam om
                    deze blokkades op te heffen. Hierdoor stroomt de energie
                    weer vrij en wordt het zelfhelend vermogen van het lichaam
                    geactiveerd.{" "}
                    <Link
                      href="/behandeling-werkwijze#hoe-werkt-het"
                      className="text-[#4A6559] underline hover:text-[#1F3A36]"
                    >
                      Lees meer over hoe een behandeling verloopt
                    </Link>
                    .
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Zijn de naalden veilig en steriel?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Absoluut. Veiligheid en hygiëne staan voorop. Wij werken
                    uitsluitend met hoogwaardige, steriel verpakte
                    wegwerpnaalden. Deze naalden worden voor eenmalig gebruik
                    uit de verpakking gehaald en direct na de behandeling veilig
                    weggegooid in een speciale container. Er is hierdoor geen
                    enkel risico op besmetting of infectie.
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>
                      Wat is het verschil tussen dry needling en acupunctuur?
                    </span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Hoewel beide technieken naalden gebruiken, is de benadering
                    wezenlijk anders. <strong>Dry needling</strong> richt zich
                    puur lokaal op spierknopen (triggerpoints) om spanning in
                    één specifieke spier te verminderen.{" "}
                    <strong>Acupunctuur</strong> kijkt naar het lichaam als een
                    holistisch geheel. We behandelen niet alleen de pijnplek
                    zelf, maar pakken ook de onderliggende oorzaak van de klacht
                    aan via het meridiaanstelsel. Hierdoor werken we zowel
                    fysiek als mentaal aan een structurele oplossing.
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Helpt het ook bij mentale klachten of stress?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Ja, heel goed zelfs. Binnen de Chinese Geneeskunde worden
                    lichaam en geest niet als gescheiden gezien, maar als één
                    verbonden systeem. Fysieke klachten hebben vaak een mentale
                    weerslag (zoals prikkelbaarheid door langdurige pijn) en
                    mentale klachten (zoals stress of burn-out) uiten zich vaak
                    fysiek (bijv. in nekpijn of vermoeidheid). Acupunctuur is
                    bijzonder krachtig in het reguleren van het zenuwstelsel,
                    waardoor het diepe ontspanning brengt en zowel fysieke als
                    mentale stress aanzienlijk vermindert.{" "}
                    <Link
                      href="/welke-klachten"
                      className="text-[#4A6559] underline hover:text-[#1F3A36]"
                    >
                      Bekijk bij welke klachten acupunctuur kan helpen
                    </Link>
                    .
                  </div>
                </details>

                <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                    <span>Kan acupunctuur elke ziekte oplossen?</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                      <iconify-icon
                        icon="solar:alt-arrow-down-linear"
                        className="text-xl"
                      />
                    </span>
                  </summary>
                  <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                    Nee, acupunctuur is geen wondermiddel voor alles en vervangt
                    nooit noodzakelijke medische behandelingen door een arts of
                    specialist. Wat het wél doet, is uw lichamelijke balans
                    verbeteren, pijn drastisch verlichten, ontstekingen remmen
                    en het immuunsysteem versterken. Het is daarmee een
                    uitstekende en effectieve complementaire (aanvullende) zorg,
                    die de kwaliteit van leven aanzienlijk kan verhogen.{" "}
                    <Link
                      href="/over-de-praktijk"
                      className="text-[#4A6559] underline hover:text-[#1F3A36]"
                    >
                      Lees meer over de filosofie van de praktijk
                    </Link>
                    .
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
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
                  Staat uw vraag er niet tussen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Of bent u klaar om de stap te zetten naar een natuurlijke
                  balans? Plan dan direct uw eerste consult via de online
                  planner. U mag ons uiteraard ook een bericht sturen voor
                  persoonlijk advies.
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
                  <a
                    href="mailto:info@acupunctuurzaandam.nl"
                    className="inline-flex items-center justify-center gap-2 border border-[#FAF8F3]/30 hover:bg-[#FAF8F3]/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F3] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-[#FAF8F3] rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
                  >
                    <iconify-icon
                      icon="solar:letter-linear"
                      className="text-lg"
                    />
                    Stuur een e-mail
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
                      id="D8uouGkFZH4Alr37y5z4_veelgestelde_vragen"
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
