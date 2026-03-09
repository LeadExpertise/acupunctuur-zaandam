import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij RSI Zaandam | Tennis- & Golferselleboog",
  description:
    "RSI, tennisarm, golferselleboog of carpaal tunnelsyndroom? Acupunctuur in Zaandam verlicht overbelastingspijn in arm, pols en elleboog snel en medicijnvrij.",
  keywords: [
    "acupunctuur RSI zaandam",
    "tennisarm behandeling",
    "golferselleboog acupunctuur",
    "carpaal tunnelsyndroom acupunctuur",
    "overbelasting arm pols",
    "RSI behandeling zaandam",
    "epicondylitis lateralis acupunctuur",
    "acupunctuur repetitive strain injury",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/rsi",
      name: "Acupunctuur bij RSI in Zaandam",
      description:
        "Informatie over de behandeling van RSI, tennisarm (epicondylitis lateralis), golferselleboog (epicondylitis medialis) en carpaal tunnelsyndroom met acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "RSI (Repetitive Strain Injury)" },
        { "@type": "MedicalCondition", name: "Epicondylitis lateralis (tennisarm)" },
        { "@type": "MedicalCondition", name: "Epicondylitis medialis (golferselleboog)" },
        { "@type": "MedicalCondition", name: "Carpaal tunnelsyndroom" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "RSI en overbelastingsletsels van arm en pols",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij een tennisarm of golferselleboog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur vermindert de lokale ontsteking in de peesinserties rondom de elleboog, ontspant de overbelaste onderarmspieren en moduleert de pijngeleiding. De meeste patiënten merken al na 3 tot 6 sessies een duidelijke verbetering in pijnintensiteit en grijpkracht.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen heb ik nodig bij RSI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute overbelastingsklachten volstaan doorgaans 4 tot 8 behandelingen. Bij langdurige of chronische RSI is een traject van 8 tot 12 sessies realistischer. We combineren acupunctuur waar zinvol met advies over werkhouding en belasting-herstelbalans.",
          },
        },
        {
          "@type": "Question",
          name: "Moet ik stoppen met werken tijdens de behandeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dat hangt af van de ernst van uw klachten. We adviseren de belasting te verminderen, maar volledige werkonderbreking is zelden noodzakelijk. Samen stellen we een realistisch belastingsplan op zodat u kunt blijven functioneren terwijl het weefsel herstelt.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij RSI vergoed door mijn zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur Zaandam is aangesloten bij erkende beroepsverenigingen (NVA / TCMA). De meeste aanvullende zorgverzekeringen vergoeden acupunctuurbehandelingen. Dit gaat niet ten koste van uw verplicht eigen risico, omdat het onder de aanvullende verzekering valt.",
          },
        },
      ],
    },
  ],
};

export default function RsiPage() {
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
            <Link href="/klachten/pijnklachten-en-beweging" className="hover:text-[#1F3A36] transition-colors">
              Pijnklachten &amp; beweging
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">RSI</span>
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
              Acupunctuur bij RSI in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een brandende elleboog na een dag typen, een pijnlijke pols bij het muis bewegen of
              tintelingen in uw vingers &mdash; RSI en overbelastingsletsels van arm en pols zijn
              beroepsziekten van onze tijd. Acupunctuur pakt zowel de lokale ontsteking als de
              dieperliggende spieroverbelasting aan, zodat u sneller en duurzamer herstelt.
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

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            {/* Featured Snippet — targets "Helpt acupunctuur bij RSI?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur vermindert RSI-klachten door peesontstekingen te kalmeren, spierspanning in nek en armen te verlichten en zenuwen te ontprikkelen. Onderzoek bevestigt dat acupunctuur pijn bij carpaal tunnelsyndroom, tenniselleboog en muisarm effectief behandelt en terugkeer naar werk versnelt.
              </p>
            </div>

            {/* Wat is RSI */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is RSI?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                RSI staat voor <em>Repetitive Strain Injury</em>: een verzamelnaam voor klachten aan
                spieren, pezen en zenuwen in de nek, schouders, armen, polsen en handen die ontstaan
                door langdurige herhalende bewegingen of een statische belasting. In onze praktijk in
                Zaandam behandelen we een aantal veelvoorkomende vormen:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Tennisarm (epicondylitis lateralis)
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Ontsteking van de peesinserties van de strekspieren op de buitenzijde van de
                      elleboog. Pijn treedt op bij grijpen, draaibewegingen van de onderarm en het
                      tillen van voorwerpen. Niet alleen bij tennissers: ook toetsenbordgebruikers,
                      schilders en handwerkers zijn frequent getroffen.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Golferselleboog (epicondylitis medialis)
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Ontsteking van de peesinserties van de buigspieren op de binnenzijde van de
                      elleboog. Typisch bij herhaald buigen van de pols of krachtige grijpbewegingen.
                      Pijn kan uitstralen naar de onderarm en pols.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Carpaal tunnelsyndroom
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Beknelling van de nervus medianus in de carpale tunnel van de pols. Veroorzaakt
                      tintelingen, brandende pijn en gevoelloosheid in de duim, wijs- en middelvinger,
                      typisch &lsquo;s nachts en &lsquo;s ochtends.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Algemene overbelasting van arm en pols
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Diffuse pijn en vermoeidheid in de onderarm zonder specifieke diagnose, ontstaan
                      door langdurig schermwerk, muis- of toetsenbordgebruik of herhalende
                      handbewegingen in een productieomgeving.
                    </span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Symptomen & Oorzaken */}
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
                      Pijn bij grijpen of draaibewegingen van de pols
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Drukgevoeligheid op de elleboog of onderarm
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Verminderde grijpkracht of krachtverlies
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Tintelingen of brandende pijn in hand en vingers
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Klachten die verergeren na inspanning en verbeteren na rust
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Nachtelijke pijn of tintelingen in de hand (bij carpaal tunnel)
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
                      Langdurig toetsenbord- of muisgebruik
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Herhalende handbewegingen in productiewerk of sport
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Onvoldoende hersteltijd tussen belastingsmomenten
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Ergonomisch ongunstige werkhouding
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Plotselinge intensivering van sport of training
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Hormonale veranderingen (bij carpaal tunnelsyndroom)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hoe helpt acupunctuur */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe acupunctuur kan helpen bij RSI
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Traditionele Chinese Geneeskunde worden RSI-klachten primair gezien als een
                    Bi-syndroom van het type overbelasting: de voortdurende fysieke inspanning put het
                    Qi en Bloed in de meridianen van de arm uit, waardoor de doorstroming stokt en
                    pijn ontstaat. De Dikke Darm-, Longc en Drievoudige Verwarmer-meridianen lopen
                    langs de buitenzijde van de arm en zijn betrokken bij tennisarm. De Hart- en
                    Hartomhulsel-meridianen aan de binnenzijde zijn relevant bij golferselleboog en
                    carpaal tunnelsyndroom. Door acupunctuurpunten lokaal rondom de elleboog en pols
                    te combineren met distale punten op dezelfde meridianen, wordt de stagnatie
                    opgeheven en de doorbloeding hersteld.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Pijndemping:</strong> Acupunctuur
                      stimuleert de vrijmaking van endorfinen en enkephalinen, die de pijndrempel
                      verhogen en de pijnsignalen vanuit de elleboog en pols dempen.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> De naalden
                      verbeteren de microcirculatie in het aangedane peesweefsel, wat de aanvoer van
                      zuurstof en voedingsstoffen vergroot en ontstekingsproducten sneller afvoert.
                      Dit bevordert direct het herstel van microtraumata in de peesinserties.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontspanning:</strong> Trigger
                      point acupunctuur in de overbelaste onderarmspieren (m. extensor carpi radialis,
                      m. flexor digitorum) ontspant de spierspanning direct, waardoor de trekkracht
                      op de peesinserties afneemt en de pijn verlicht.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Wat kunt u verwachten */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat kunt u verwachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Het eerste consult begint met een grondige intake: we brengen de aard, locatie en
                verloop van uw klachten in kaart en onderzoeken de arm functioneel. Aangevuld met
                een TCG-diagnose stellen we een behandelplan op. Naalden worden geplaatst op
                lokale punten rondom de elleboog en pols, evenals op distale punten langs de
                betrokken meridianen in de nek, schouder en been. Bij uitgesproken spierspanning
                combineren we acupunctuur met dry needling van trigger points in de onderarm.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij acute RSI-klachten zien we doorgaans verbetering na 3 tot 6 behandelingen.
                Chronische klachten die maanden of langer aanhouden vragen een langer traject van
                8 tot 12 sessies. We geven ook advies over werkhouding, pauzemomenten en specifieke
                oefeningen om herhaling te voorkomen.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Voor wie is dit geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Kantoorwerkers met arm- of polsklachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Sporters met tennisarm of golferselleboog</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Handwerkers en productiemedewerkers</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten met carpaal tunnelsyndroom</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5 sm:col-span-2">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Iedereen waarbij reguliere behandelingen onvoldoende resultaat geven</span>
                </div>
              </div>
            </section>

            {/* Lokale SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij RSI in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
                Werkt u in de haven, de industrie of op een kantoor in de Zaanstreek en heeft u last
                van uw arm of pols? Neem gerust contact op voor een vrijblijvend adviesgesprek.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/klachten/pijnklachten-en-beweging"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Pijnklachten overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/nekklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Nekklachten
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/schouderklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Schouderklachten
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/spierpijn"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Spierpijn
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
                Veelgestelde vragen over RSI
              </h2>
            </div>
            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij een tennisarm of golferselleboog?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Acupunctuur vermindert de lokale ontsteking in de peesinserties rondom de
                  elleboog, ontspant de overbelaste onderarmspieren en moduleert de pijngeleiding.
                  De meeste pati&euml;nten merken al na 3 tot 6 sessies een duidelijke verbetering
                  in pijnintensiteit en grijpkracht. De behandeling werkt het best in combinatie
                  met een tijdelijke vermindering van de belasting.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen heb ik nodig bij RSI?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij acute overbelastingsklachten volstaan doorgaans 4 tot 8 behandelingen. Bij
                  langdurige of chronische RSI die al maanden aanhoudt, is een traject van 8 tot 12
                  sessies realistischer. We evalueren het verloop na elke 4 sessies en stellen het
                  plan bij. Na afloop geven we advies over hoe u herhaling kunt voorkomen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Moet ik stoppen met werken tijdens de behandeling?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Dat hangt af van de ernst van uw klachten. We adviseren de belasting te verminderen,
                  maar volledige werkonderbreking is zelden noodzakelijk. Samen stellen we een
                  realistisch belastingsplan op, zodat u kunt blijven functioneren terwijl het weefsel
                  herstelt. Ergonomisch advies maakt standaard deel uit van de behandeling.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij RSI vergoed door mijn zorgverzekering?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Acupunctuur Zaandam is aangesloten bij erkende beroepsverenigingen (NVA / TCMA).
                  De meeste aanvullende zorgverzekeringen vergoeden acupunctuurbehandelingen geheel of
                  gedeeltelijk. Omdat het onder de aanvullende verzekering valt, gaat de vergoeding{" "}
                  <strong>niet</strong> ten koste van uw verplicht eigen risico. Controleer uw
                  polisvoorwaarden of neem contact met ons op voor meer informatie.
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
                { href: "/klachten/schouderklachten", label: "Schouderklachten" },
                { href: "/klachten/nekklachten", label: "Nekklachten" },
                { href: "/klachten/frozen-shoulder", label: "Frozen shoulder" },
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
                  Laat arm- en polspijn uw werk en vrije tijd niet langer beheersen. Boek een intake
                  in onze praktijk in Zaandam via de online planner. Heeft u vragen over uw RSI-klachten?
                  Stuur gerust een WhatsApp-bericht voor vrijblijvend advies.
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
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">
                      Online Planner
                    </span>
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
                      id="D8uouGkFZH4Alr37y5z4_rsi"
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
