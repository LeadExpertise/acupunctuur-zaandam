import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/behandelingen/acupunctuur-artrose" },
  title: "Acupunctuur bij Artrose | Acupunctuur Zaandam",
  description: "Pijn en stijfheid door artrose? Acupunctuur vermindert gewrichtspijn, verbetert de beweeglijkheid en kan een operatie helpen uitstellen. Erkend & vergoed in Zaandam.",
  keywords: ["acupunctuur artrose", "acupunctuur artrose Zaandam", "behandeling artrose", "acupunctuur artrose klachten"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-artrose",
      name: "Acupunctuur bij Artrose | Acupunctuur Zaandam",
      description: "Acupunctuur bij artrose vermindert gewrichtspijn en ontsteking, verbetert de beweeglijkheid en ondersteunt het herstel van knie, heup en vingers.",
      about: [{ "@type": "MedicalCondition", name: "Artrose" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Artrose" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij artrose?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is wetenschappelijk aangetoond effectief bij artrosepijn. Een grote meta-analyse (Vickers et al., JAMA Intern Med, 2012) met bijna 18.000 patiënten toonde aan dat acupunctuur significant beter werkt dan zowel placebo als geen behandeling bij chronische artrosepijn. Patiënten rapporteren minder pijn, betere beweeglijkheid en hogere kwaliteit van leven.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij artrose?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij artrose, ook als u bloedverdunners gebruikt of andere gewrichtsaandoeningen heeft. Wij prikken nooit direct in een ontstoken gewricht en werken uitsluitend met steriele eenmalige naalden. Bijwerkingen zijn zeldzaam en mild.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij artrose?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel patiënten met artrose merken al na twee tot vier behandelingen verlichting van de pijn en een verbeterde beweeglijkheid. Voor duurzame verbetering zijn doorgaans zes tot tien sessies nodig, waarna onderhoudssessies de resultaten bestendigen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor artrose vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden acupunctuur vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Artrose", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-artrose" },
      ],
    },
  ],
};

export default function ArtrosBehandelingPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Artrose</span>
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
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij Artrose in Zaandam</h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Artrose brengt chronische pijn, stijfheid en beperkte beweeglijkheid met zich mee die uw dagelijks leven zwaar kunnen belasten. Acupunctuur is wetenschappelijk onderbouwd effectief bij gewrichtspijn en helpt u om comfortabeler te bewegen — zonder de bijwerkingen van langdurig pijnstillergebruik.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/artrose" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over artrose</Link>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is artrose?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Artrose is de meest voorkomende gewrichtsaandoening in Nederland en kenmerkt zich door het slijten van het kraakbeen in de gewrichten. Zonder dit beschermende laagje botsen de botten direct op elkaar, wat leidt tot pijn, ontsteking, stijfheid en verlies van beweeglijkheid. Hoewel artrose het vaakst voorkomt na het vijftigste levensjaar, kunnen ook jongere mensen erdoor worden getroffen — zeker na sportblessures of overbelasting.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">De aandoening tast met name de knieën, heupen, handen en wervelkolom aan. Klachten variëren van een zeurende pijn na activiteit tot een constante pijn die ook in rust aanhoudt. Ochtendstijfheid die geleidelijk afneemt is een kenmerkend symptoom. Bij vergevorderde artrose kan de levenskwaliteit sterk afnemen door pijnklachten en beperkingen in de mobiliteit.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">Acupunctuur biedt geen genezing van artrose, maar is een effectieve methode om pijn te verlichten, de ontsteking te verminderen en de beweeglijkheid te verbeteren, zodat u langer actief kunt blijven.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Knie- en heupartrose</strong><span className="text-sm text-[#1F3A36]/70 font-light">De meest voorkomende vormen, met pijn bij traplopen, opstaan en langdurig lopen als kenmerkende klachten.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Vingergewrichtsartrose</strong><span className="text-sm text-[#1F3A36]/70 font-light">Pijnlijke, soms gezwollen knokkels en duimbasisgewrichten die fijne motoriek en dagelijkse handelingen bemoeilijken.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Wervelkolom- en nekartrose</strong><span className="text-sm text-[#1F3A36]/70 font-light">Slijtage van de gewrichtjes in de rug of nek, met uitstralende pijn, tintelingen of gevoelsstoornissen.</span></div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur helpt bij artrose</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de TCG wordt artrose beschouwd als een stagnatie van Qi en Bloed in de gewrichten, vaak verergerd door kou, vocht en ouderdom. De nieren worden in de TCG gezien als de bron van botten en gewrichten; een verzwakte nierenergie (Nieren-Jing) draagt bij aan slijtage. Behandeling richt zich op het bevorderen van de doorstroming van Qi en Bloed, het versterken van de nierenergie en het verdrijven van kou en vocht uit de gewrichten via specifieke acupunctuurpunten.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Wetenschappelijk bewijs &amp; moderne fysiologische verklaringen</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-3">Een grote individuele patiëntendata-meta-analyse door <strong>Vickers AJ et al.</strong> (JAMA Intern Med. 2012;172(19):1444–1453), met bijna 17.922 patiënten, toonde aan dat acupunctuur significant effectiever is dan zowel placebo-acupunctuur als geen behandeling bij chronische pijn door artrose. Dit geldt als een van de sterkste bewijzen voor de werkzaamheid van acupunctuur in de pijnbestrijding.</p>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Endorfine-afgifte:</strong> Acupunctuurnaalden stimuleren de vrijlating van endorfines en enkefalinen — lichaamseigen pijnstillers die de pijnperceptie bij artrose direct verlagen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontstekingsremming:</strong> De behandeling moduleert ontstekingsbevorderende cytokines rondom het gewricht, wat zwelling en roodheid vermindert.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Verbeterde doorbloeding:</strong> Lokale naaldplaatsing vergroot de microcirculatie in en rondom het gewricht, wat de aanvoer van voedingsstoffen en afvoer van afvalstoffen verbetert.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe ziet een behandeling eruit?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Tijdens het eerste consult brengen we uw klachtenpatroon uitgebreid in kaart: welke gewrichten zijn aangetast, hoe ernstig de pijn is, welke bewegingen pijn uitlokken en welke andere factoren (kou, vocht, stress) de klachten beïnvloeden. Op basis hiervan stellen we een behandelplan op dat gericht is op zowel pijnverlichting als verbetering van de gewrichtsfunctie.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Per sessie worden naalden geplaatst rondom en distaal van het aangetaste gewricht — bij knieproblemen bijvoorbeeld op de knie, maar ook op relevante punten op de onderarm en het been. De naalden blijven 20 tot 30 minuten in situ. Warmtebehandeling (moxibustie) kan worden gecombineerd om kou uit het gewricht te verdrijven en de doorbloeding te stimuleren. De behandeling is over het algemeen goed verdraagbaar, ook bij uitgesproken pijnklachten.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoeveel behandelingen zijn meestal nodig?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Bij artrose zijn doorgaans zes tot tien behandelingen nodig om een significant en duurzaam resultaat te bereiken. Bij milde artrose kan verbetering al na drie tot vier sessies merkbaar zijn. Bij ernstige of langdurige artrose — met name wanneer een gewrichtsvervangende operatie overweging is — adviseren wij een intensievere begeleiding van tien tot twaalf behandelingen, gevolgd door maandelijkse onderhoudssessies. Veel patiënten kunnen hiermee een operatie uitstellen of in enkele gevallen zelfs vermijden.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is acupunctuur bij artrose geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Knie- en heupartrose</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Vingergewrichtslijtage</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Mensen die operatie willen uitstellen</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Chronische gewrichtspijn</span></div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Meer informatie &amp; gerelateerde behandelingen</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/artrose" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over artrose</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-kniepijn" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij kniepijn</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-heupklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij heupklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-spierpijn" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij spierpijn</span>
                </Link>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij artrose in de regio Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar voor patiënten met artrose. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.</p>
            </section>

          </div>
        </article>

        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over acupunctuur bij artrose</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij artrose?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur is wetenschappelijk aangetoond effectief bij artrosepijn. Een grote meta-analyse met bijna 18.000 patiënten (Vickers et al., JAMA Intern Med, 2012) toonde aan dat acupunctuur significant beter werkt dan placebo en geen behandeling. Patiënten rapporteren minder pijn, betere beweeglijkheid en een hogere kwaliteit van leven.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij artrose?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Acupunctuur is veilig bij artrose, ook als u bloedverdunners gebruikt of andere gewrichtsaandoeningen heeft. Wij prikken nooit direct in een ontstoken gewricht en werken uitsluitend met steriele eenmalige naalden. Bijwerkingen zijn zeldzaam en mild van aard.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij artrose?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Veel patiënten met artrose merken al na twee tot vier behandelingen verlichting van de pijn en een verbeterde beweeglijkheid. Voor duurzame verbetering zijn doorgaans zes tot tien sessies nodig, waarna onderhoudssessies de resultaten bestendigen.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor artrose vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja. Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen (NVA / TCMA). Hierdoor vergoeden de meeste zorgverzekeraars in Nederland de behandeling vanuit de aanvullende verzekering. De vergoeding gaat <strong>niet</strong> ten koste van uw verplichte eigen risico.</div>
              </details>
            </div>
          </div>
        </section>

        <TrustBadges />

        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Beweeg pijnvrij — plan uw eerste behandeling</h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Artrosepijn hoeft uw leven niet te bepalen. Maak vandaag nog een afspraak via onze online planner of stuur ons een WhatsApp-bericht. Er is geen wachtlijst en wij reageren snel.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_artrose" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
