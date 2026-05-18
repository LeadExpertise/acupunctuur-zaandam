import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/behandelingen/acupunctuur-heupklachten" },
  title: "Acupunctuur bij Heupklachten | Acupunctuur Zaandam",
  description: "Last van heuppijn, heupartrose of trochanterbursa? Acupunctuur Zaandam behandelt heupklachten effectief en natuurlijk. Erkend specialist, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur heupklachten", "acupunctuur heupklachten Zaandam", "behandeling heuppijn acupunctuur", "acupunctuur heup klachten", "natuurlijke behandeling heupklachten"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-heupklachten",
      name: "Acupunctuur bij Heupklachten | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor heupartrose, trochanterbursa, uitstralende heuppijn en liesklachten in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "heupklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "heupklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij heupklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is effectief bij heupklachten, met name bij heupartrose en trochanterbursa. Wetenschappelijk onderzoek, waaronder de Vickers meta-analyse (JAMA 2012), toont aan dat acupunctuur pijn significant vermindert bij chronische heuppijn en de functie verbetert.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij heupklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij heupklachten. Wij werken met steriele wegwerpnaalden en hebben ruime ervaring met heupproblematiek. Bij patiënten met een heupprothese passen we de naaldpunten aan en werken we zorgvuldig rondom het implantaat.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij heupklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute heupklachten zijn de eerste resultaten vaak al na 3 tot 5 behandelingen merkbaar. Bij heupartrose of langdurige klachten is een behandelreeks van 8 tot 12 sessies realistisch. Veel patiënten ervaren halverwege de behandelreeks al een duidelijke vermindering van pijn en betere mobiliteit.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor heupklachten vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Heupklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-heupklachten" },
      ],
    },
  ],
};

export default function HeupklachtenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content">

        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Acupunctuur bij Heupklachten</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Pijnbestrijding &amp; Herstel</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Heupklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Heupklachten kunnen uw looppatroon, slaap en algehele mobiliteit ernstig verstoren. Of u nu last heeft van heupartrose, een trochanterbursitis, liesklachten of uitstralende pijn langs het been — acupunctuur biedt een effectieve, medicijnvrije aanpak die de pijn verlicht en de functie van uw heup herstelt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/heupklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over heupklachten</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn heupklachten */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn heupklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Het heupgewricht is een kogelgewricht dat het dijbeen verbindt met het bekken. Het draagt het gewicht van het bovenlichaam en speelt een centrale rol bij lopen, zitten, traplopen en sporten. Door de grote belasting en complexe anatomie is de heup kwetsbaar voor slijtage, ontsteking en overbelasting.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Heuppijn kan worden gevoeld diep in de lies, aan de zijkant van de heup of uitstralen naar de bil of knie. De locatie en het karakter van de pijn geven belangrijke aanwijzingen over de onderliggende oorzaak. Nauwkeurige diagnostiek is essentieel voor een effectieve behandeling.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Heupartrose (coxartrose)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Slijtage van het kraakbeen in het heupgewricht, met pijn in de lies, stijfheid na rust en beperkte bewegingsruimte. Een van de meest voorkomende oorzaken van chronische heuppijn bij mensen boven de 50.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Trochanterbursa (grote trochanterbursa-syndroom)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Ontsteking van de slijmbeurs aan de buitenzijde van de heup, met pijn bij liggen op de aangedane zijde en bij traplopen. Komt vaker voor bij vrouwen van middelbare leeftijd.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Uitstralende heuppijn</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Pijn die uitstraalt vanuit de lage rug of heup naar de bil en het been. Kan worden veroorzaakt door zenuwprikkeling, piriformissyndroom of verwijzingspijn vanuit gewrichten.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Pijn in de liesstreek</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Liesklachten vanuit het heupgewricht, de adductoren of het heupgewrichtskapsel. Vaak pijnlijk bij het opheffen van het been of bij draaibewegingen.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij heupklachten
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG loopt de Galblaasmeridiaan langs de zijkant van het lichaam, door de heup en het been. Heupklachten worden gezien als een belemmerde stroom van Qi en Xue in deze meridiaan, veroorzaakt door kou, vochtigheid of overbelasting. Bij heupartrose speelt ook een verzwakking van de Nier-jing (essentie) een rol, die de kwaliteit van botten en kraakbeen onderhoudt. Acupunctuur versterkt het Nier-systeem, opent de meridianen en herstelt de doorbloeding in het heupgebied.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontstekingsremming:</strong> Acupunctuur verlaagt lokale concentraties van pro-inflammatoire cytokinen in en rond het heupgewricht, wat zwelling en pijn vermindert bij bursitis en artrose.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Endorfine-afgifte:</strong> De naaldprikkel stimuleert de aanmaak van endorfines en enkefalines, lichaamseigen pijnstillers die langdurige verlichting bieden.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Spierspanning normalisering:</strong> Overbelaste heupspieren (m. piriformis, m. gluteus medius) ontspannen na behandeling, wat druk op het gewricht vermindert.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Verbeterde microcirculatie:</strong> Betere doorbloeding van het heupgebied bevordert de aanvoer van voedingsstoffen naar het kraakbeen en versnelt herstelprocessen.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Behandeling */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij de intake bespreken we uitgebreid uw heupklachten: waar zit de pijn precies, wanneer is ze het ergst, zijn er uitlokkende bewegingen en hoe lang bestaan de klachten al? We beoordelen ook uw looppatroon en bekkenstand.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Tijdens de behandeling liggen patiënten op de zij of op de rug. Naalden worden geplaatst op lokale punten rondom de heup, langs het been en op distale punten. Bij trochanterbursitis richten we ons op de zijkant van de heup. Bij artrose combineren we acupunctuur soms met moxa om het gewricht diep te verwarmen en de doorbloeding te stimuleren. De behandelsessie duurt gemiddeld 45 tot 60 minuten.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn meestal nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij acute heupklachten zoals een trochanterbursitis zijn 4 tot 6 behandelingen doorgaans voldoende om de ontsteking te laten zakken en de pijn te verlichten. We plannen de eerste sessies dicht op elkaar.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij heupartrose is een behandelreeks van 8 tot 12 sessies realistisch voor merkbare verbetering. Veel artrosepatiënten kiezen voor periodieke onderhoudssessies om de pijn beheersbaar te houden en een heupoperatie zo lang mogelijk uit te stellen.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij heupklachten geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Heupartrose (coxartrose)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Trochanterbursa-syndroom</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Uitstralende heuppijn naar het been</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pijn in de liesstreek</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/heupklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over heupklachten (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-kniepijn" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij kniepijn</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-artrose" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij artrose</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-lage-rugklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij lage rugklachten</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij heupklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Wij behandelen wekelijks patiënten met heupklachten uit de gehele regio. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.
              </p>
            </section>

          </div>
        </article>

        {/* Wetenschappelijk onderzoek */}
        <section className="py-20 bg-[#F2EDE3] border-y border-[#1F3A36]/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#4A6559] mb-4 shadow-sm">
                <iconify-icon icon="solar:document-text-linear" className="text-2xl" stroke-width="1.5" />
              </span>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wetenschappelijk onderzoek
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">Vickers AJ et al. — JAMA Internal Medicine (2012)</h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Deze grote individuele patiëntendata meta-analyse toonde aan dat acupunctuur significant effectiever is dan zowel sham-acupunctuur als geen behandeling voor chronische pijn, inclusief heuppijn door artrose. De effecten bleven aantoonbaar aanwezig 12 maanden na de behandeling, wat wijst op een duurzame werking. <em>Vickers AJ, Cronin AM, Maschino AC, et al. Acupuncture for Chronic Pain: Individual Patient Data Meta-analysis. JAMA Intern Med. 2012;172(19):1444&ndash;1453.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij heupklachten
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij heupklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is effectief bij heupklachten. Wetenschappelijk onderzoek toont aan dat acupunctuur pijn significant vermindert bij heupartrose en andere chronische heupklachten. Patiënten rapporteren betere mobiliteit, minder nachtpijn en een hogere kwaliteit van leven.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij heupklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur is veilig bij heupklachten. Bij patiënten met een heupprothese passen we de naaldpunten aan en werken we zorgvuldig rondom het implantaat. Wij werken altijd met steriele wegwerpnaalden.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij heupklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij acute heupklachten zijn de eerste resultaten vaak al na 3 tot 5 behandelingen merkbaar. Bij heupartrose of langdurige klachten is een behandelreeks van 8 tot 12 sessies realistisch. Veel patiënten ervaren halverwege de reeks al duidelijke verbetering.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor heupklachten vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBadges />

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
                  Beweeg weer vrij, zonder heuppijn
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw heupklachten kan verlichten. Wij helpen u met een persoonlijk behandelplan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_heupklachten" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
