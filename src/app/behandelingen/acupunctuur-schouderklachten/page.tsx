import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/behandelingen/acupunctuur-schouderklachten" },
  title: "Acupunctuur bij Schouderklachten | Acupunctuur Zaandam",
  description: "Last van schouderklachten, frozen shoulder of RSI? Acupunctuur Zaandam behandelt schouderklachten effectief en duurzaam. Erkend specialist, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur schouderklachten", "acupunctuur schouderklachten Zaandam", "behandeling schouderklachten acupunctuur", "acupunctuur schouder klachten", "natuurlijke behandeling schouderklachten"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-schouderklachten",
      name: "Acupunctuur bij Schouderklachten | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor schouderimpingement, frozen shoulder, spierpijn en RSI-gerelateerde schouderklachten in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "schouderklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "schouderklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij schouderklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is effectief bij diverse schouderklachten, waaronder impingement, frozen shoulder en spierpijn. Wetenschappelijk onderzoek toont aan dat acupunctuur pijn significant vermindert en de schouderfunctie verbetert. De Vickers meta-analyse (JAMA 2012) bevestigt de effectiviteit voor chronische schouderpijn.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij schouderklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij schouderklachten. Wij werken met steriele wegwerpnaalden en hebben ruime ervaring met de behandeling van schouderproblematiek. Bij een vermoeden van een scheurde spierpees of ernstige anatomische afwijking adviseren we altijd eerst een diagnose door een arts of fysiotherapeut.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij schouderklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute schouderklachten is verbetering vaak na 3 tot 5 sessies merkbaar. Frozen shoulder vereist een langdurigere behandeling van 10 tot 20 sessies vanwege de uitgebreide ontsteking en verklevingen. Gemiddeld ervaren patiënten na 4 tot 6 behandelingen een duidelijke vermindering van pijn en een verruiming van de bewegingsruimte.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor schouderklachten vergoed?",
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
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Schouderklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-schouderklachten" },
      ],
    },
  ],
};

export default function SchouderklachtenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Schouderklachten</span>
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
              Acupunctuur bij Schouderklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Schouderklachten kunnen uw bewegingsvrijheid ernstig beperken en zelfs de eenvoudigste dagelijkse handelingen pijnlijk maken. Of u nu last heeft van een beknelde zenuw, frozen shoulder, een ontsteking of RSI — acupunctuur biedt een gerichte behandeling die pijn verlicht, ontsteking remt en de schouderfunctie herstelt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/schouderklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over schouderklachten</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn schouderklachten */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn schouderklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De schouder is het meest beweeglijke gewricht van het menselijk lichaam en daarmee ook een van de kwetsbaarste. Het schoudergewricht wordt gestabiliseerd door de rotatormanchet — een groep van vier spieren en pezen — en omgeven door slijmbeurzen, zenuwen en bloedvaten. Deze complexe anatomie maakt de schouder gevoelig voor overbelasting, blessures en degeneratieve aandoeningen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Schouderklachten zijn een van de meest voorkomende bewegingsapparaatklachten. Ze kunnen het gevolg zijn van sport, werkhouding, trauma of slijtage. De pijn kan lokaal in de schouder zitten, maar ook uitstralen naar de nek, arm of hand.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Schouderimpingement</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Beknelling van pezen of slijmbeurs onder het schouderdak, met name bij het heffen van de arm. Veroorzaakt een pijnlijke boog en verminderde kracht.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Frozen shoulder (adhesieve capsulitis)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een pijnlijke ontsteking en verharding van het gewrichtskapsel, waardoor de bewegingsruimte van de schouder sterk afneemt. Verloopt in fasen en kan maanden tot jaren duren.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">RSI-gerelateerde schouderklachten</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Chronische overbelasting door repetitieve bewegingen of langdurig statisch werk, met pijn in de schouder(s), nek en armen als gevolg.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Spierpijn en triggerpoints</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Pijnlijke knopen in de schouderspieren (m. trapezius, m. deltoideus) die uitstralende pijn geven naar nek, hoofd of arm. Vaak gerelateerd aan stress of eenzijdige belasting.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij schouderklachten
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG is de schouder het gebied waar de Galblaas- en Drievoudige Verwarmermeridiaan doorheen lopen. Schouderklachten worden vaak verklaard door een belemmerde stroom van Qi en Xue (bloed), veroorzaakt door kou, vochtigheid of overbelasting. Bij frozen shoulder spreken we van &lsquo;Bi-syndroom&rsquo; — een obstructiepatroon waarbij pezen en gewrichtskapsel verhard raken. Gerichte acupunctuur op lokale en distale punten verwarmt de gewrichten, lost verklevingen op en herstelt de vrije beweging.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontstekingsremming:</strong> Acupunctuur verlaagt lokale concentraties van pro-inflammatoire stoffen zoals prostaglandinen en interleukinen, wat helpt bij slijmbeursontsteking en impingement.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Triggerpoint-behandeling:</strong> Naalden die direct in gespannen spierbundels worden geplaatst veroorzaken een lokale spierspasmreactie gevolgd door diepe ontspanning en herstel van de bloeddoorstroming.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Weefselregeneratie:</strong> De lichte traumatische prikkel van de naald activeert herstelprocessen in het bindweefsel en bevordert de aanmaak van collageen, nuttig bij peesontstekingen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Pijnmodulatie:</strong> Via het centrale zenuwstelsel worden pijnsignalen vanuit de schouder gedempt, waardoor beweging minder pijnlijk wordt en het herstel kan beginnen.</li>
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
                Bij de intake vragen we uitgebreid naar het verloop van uw schouderklachten: welke bewegingen zijn pijnlijk, is er sprake van nachtelijke pijn, en wat is de voorgeschiedenis. Bij klachten die mogelijk wijzen op een scheuring van de rotatormanchet verwijzen we door voor aanvullende beeldvorming voordat we starten met behandelen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Tijdens de behandeling zit u comfortabel of ligt u op uw zij. Naalden worden geplaatst op lokale punten rond de schouder, langs de nek en op distale punten aan de hand, onderarm of been. Bij frozen shoulder combineren we acupunctuur soms met moxa (warmtebehandeling) om de doorbloeding te stimuleren en verklevingen los te maken. De behandeling duurt 45 tot 60 minuten.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn meestal nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij impingement en spierpijn gerelateerde schouderklachten zijn 5 tot 8 behandelingen doorgaans voldoende voor significante verbetering. We plannen de eerste sessies tweemaal per week om snel momentum op te bouwen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Frozen shoulder is een hardnekkige aandoening die een langdurig traject vereist: doorgaans 10 tot 20 sessies over een periode van 3 tot 6 maanden. Regelmatige evaluatie is essentieel om het behandelplan aan te passen aan de fase van het herstel.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij schouderklachten geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Schouderimpingement</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Frozen shoulder (adhesieve capsulitis)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Spierpijn en triggerpoints in de schouder</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">RSI-gerelateerde schouderklachten</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/schouderklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over schouderklachten (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-nekklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij nekklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-frozen-shoulder" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij frozen shoulder</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-rsi" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij RSI</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij schouderklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Wij behandelen wekelijks patiënten met schouderklachten uit de gehele regio. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.
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
                  Deze omvangrijke meta-analyse (17.922 patiënten) toonde aan dat acupunctuur significant effectiever is dan zowel sham-acupunctuur als gebruikelijke zorg voor chronische schouderpijn. De onderzoekers concludeerden dat acupunctuur een reële behandeloptie is voor patiënten met aanhoudende schouderpijn. <em>Vickers AJ, Cronin AM, Maschino AC, et al. Acupuncture for Chronic Pain: Individual Patient Data Meta-analysis. JAMA Intern Med. 2012;172(19):1444&ndash;1453.</em>
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
                Veelgestelde vragen over acupunctuur bij schouderklachten
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij schouderklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is effectief bij diverse schouderklachten waaronder impingement, frozen shoulder en spierpijn. Wetenschappelijk onderzoek bevestigt dat acupunctuur pijn vermindert en de schouderfunctie verbetert. Veel patiënten ervaren al na enkele sessies een merkbare verbetering.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij schouderklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur is veilig bij schouderklachten. Wij werken met steriele wegwerpnaalden en hebben ruime ervaring met schouderproblematiek. Bij vermoeden van een structurele beschadiging adviseren we altijd eerst een diagnose via de huisarts of orthopedisch specialist.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij schouderklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij impingement en spierpijn is verbetering vaak na 3 tot 5 sessies merkbaar. Frozen shoulder vereist een langdurigere behandeling vanwege de omvang van de ontsteking en de verklevingen. Gemiddeld ervaren patiënten na 4 tot 6 behandelingen een duidelijke vermindering van pijn en een verruiming van de bewegingsruimte.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor schouderklachten vergoed?
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
                  Beweeg weer vrij, zonder schouderpijn
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw schouderklachten kan verlichten en uw bewegingsvrijheid herstelt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_schouderklachten" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
