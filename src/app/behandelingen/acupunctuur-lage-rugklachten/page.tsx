import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/behandelingen/acupunctuur-lage-rugklachten" },
  title: "Acupunctuur bij Lage Rugklachten | Acupunctuur Zaandam",
  description: "Last van lage rugpijn, spit of een hernia? Acupunctuur Zaandam biedt effectieve, natuurlijke behandeling voor lage rugklachten. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur lage rugklachten", "acupunctuur lage rugklachten Zaandam", "behandeling lage rugpijn acupunctuur", "acupunctuur rugpijn klachten", "natuurlijke behandeling lage rugpijn"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-lage-rugklachten",
      name: "Acupunctuur bij Lage Rugklachten | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor lage rugklachten, spit, hernia en chronische rugpijn in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "lage rugklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "lage rugklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij lage rugklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is een bewezen effectieve behandeling voor zowel acute als chronische lage rugklachten. Meerdere grote meta-analyses, waaronder de beroemde Vickers-studie uit 2012 gepubliceerd in JAMA Internal Medicine, tonen aan dat acupunctuur significant beter werkt dan placebo en vergelijkbaar is met andere eerstelijnsbehandelingen voor chronische rugpijn.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij lage rugklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is bij lage rugklachten over het algemeen zeer veilig wanneer uitgevoerd door een gekwalificeerde en geregistreerde acupuncturist. Wij werken uitsluitend met steriele, wegwerpnaalden. Bijwerkingen zijn doorgaans mild en tijdelijk, zoals lichte gevoeligheid op de naaldpunten.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij lage rugklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel patiënten ervaren al na 3 tot 5 behandelingen een duidelijke verlichting van hun klachten. Bij acute lage rugpijn (spit) kan het resultaat soms al na 1 à 2 sessies merkbaar zijn. Bij chronische of langdurige rugklachten is een volledige behandelreeks van 8 tot 12 sessies doorgaans nodig voor blijvend resultaat.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor lage rugklachten vergoed?",
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
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Lage Rugklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-lage-rugklachten" },
      ],
    },
  ],
};

export default function LageRugklachtenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Lage Rugklachten</span>
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
              Acupunctuur bij Lage Rugklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Lage rugpijn is een van de meest voorkomende klachten in Nederland en kan uw dagelijks leven flink beperken. Of het nu gaat om acuut spit, een hernia of slepende chronische rugpijn — acupunctuur biedt een veilige, effectieve en bewezen aanpak die de onderliggende oorzaak aanpakt in plaats van alleen de pijn te dempen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/lage-rugklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over lage rugklachten</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn lage rugklachten */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn lage rugklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Lage rugklachten omvatten alle vormen van pijn, stijfheid of beperking in het gebied tussen de onderste ribben en de bilplooi. Het is een van de meest invaliderende aandoeningen wereldwijd en treft mensen van alle leeftijden, hoewel de piek ligt tussen de 30 en 60 jaar.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Lage rugpijn kan plotseling ontstaan — zoals bij het optillen van een zware doos — of sluipend toenemen over maanden. In beide gevallen spelen spieren, gewrichten, zenuwen en tussenwervelschijven een rol. Een nauwkeurige diagnose en gerichte behandeling zijn essentieel voor duurzaam herstel.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Spit (acute lumbago)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Plotselinge hevige rugpijn door spierkramp of gewrichtsblok, vaak na een verkeerde beweging. Pijnlijk maar meestal goed behandelbaar.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Hernia nuclei pulposi</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een uitpuilende tussenwervelschijf die druk uitoefent op een zenuw, wat leidt tot uitstralende pijn naar het been (ischias) of gevoelsstoornissen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Chronische lage rugpijn</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Rugpijn die langer dan 12 weken aanhoudt, vaak met een complex samenspel van fysieke en psychosociale factoren. Vraagt om een integratieve aanpak.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Spondylose &amp; facetartrose</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Slijtage van de wervels en facetgewrichten, met name bij ouderen. Leidt tot stijfheid, pijn bij draaibewegingen en verminderde beweeglijkheid.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij lage rugklachten
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit de Traditionele Chinese Geneeskunde wordt lage rugpijn gezien als een belemmering in de stroom van Qi (levensenergie) en Xue (bloed) in de meridianen die door de rug lopen — met name de Blaasmeridiaan en de Gouverneursmeridiaan. Kou, vochtigheid, overbelasting of emotionele stress kunnen deze stroom verstoren. Door specifieke acupunctuurpunten te activeren wordt de Qi-stroom hersteld, het lichaam verwarmd of gekoeld waar nodig, en de zelfherstellende kracht versterkt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Endorfine-afgifte:</strong> Acupunctuur stimuleert de aanmaak van endorfines en enkefalines — de lichaamseigen pijnstillers — wat direct pijnverlichting geeft.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontstekingsremming:</strong> De behandeling verlaagt lokaal de concentratie van pro-inflammatoire cytokinen, waardoor zwelling en pijn in de weefsels afnemen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Spierspanning vermindering:</strong> Acupunctuur ontspant hypertone (te strakke) rugspieren door het activeren van de motorische eindpunten en trigger points, wat de mobiliteit herstelt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Zenuwmodulatie:</strong> Via het centrale zenuwstelsel beïnvloedt acupunctuur de pijnpoorttransmissie, waardoor pijnsignalen minder sterk worden doorgegeven aan de hersenen.</li>
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
                Bij het eerste bezoek nemen we uitgebreid de tijd voor een intake. We bespreken uw klachten, hoe en wanneer de pijn is ontstaan, uw leefstijl, slaappatroon en eventuele eerdere behandelingen. Vanuit de TCG beoordelen we ook uw tong en pols om een volledig beeld te krijgen van uw constitutie en de onderliggende disbalans.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Tijdens de behandeling liggen de meeste patiënten op hun buik, wat optimale toegang geeft tot de rugpunten. We plaatsen dunne, steriele naalden op zorgvuldig gekozen acupunctuurpunten langs de rug, de billen, de benen en soms ook de handen of voeten — afhankelijk van uw klachtenpatroon. De naalden blijven doorgaans 20 tot 30 minuten zitten. Veel patiënten ervaren tijdens de behandeling een aangename warmte, een licht trekkend gevoel of diepe ontspanning.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn meestal nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij acute lage rugpijn (spit) zijn vaak 3 tot 5 behandelingen voldoende om de ergste pijn te doorbreken en de functie te herstellen. We adviseren in dit geval om de eerste behandelingen kort op elkaar te plannen — bij voorkeur tweemaal per week.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij chronische lage rugklachten die al maanden of jaren bestaan, is een langere behandelreeks nodig. Gemiddeld werken we met een traject van 8 tot 12 sessies, wekelijks of tweewekelijks. Na elke behandeling evalueren we het verloop en stellen het plan waar nodig bij. Veel patiënten met chronische rugklachten kiezen na een succesvolle behandelreeks voor periodieke onderhoudssessies om terugval te voorkomen.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij lage rugklachten geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met spit of lumbago</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Herniapatiënten met uitstraling</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Chronische rugpijn (lang bestaand)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Stijfheid en beperkte mobiliteit</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/lage-rugklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over lage rugklachten (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-nekklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij nekklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-ischias" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij ischias</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-schouderklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij schouderklachten</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij lage rugklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Wij behandelen wekelijks patiënten met lage rugklachten uit de gehele regio. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.
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
              <p className="text-base text-[#1F3A36]/70 font-light">Acupunctuur bij rugpijn is een van de best onderzochte toepassingen van acupunctuur.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">Vickers AJ et al. — JAMA Internal Medicine (2012)</h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Deze grote individuele patiëntendata meta-analyse (29 RCT&rsquo;s, 17.922 patiënten) toonde aan dat acupunctuur significant effectiever is dan zowel sham-acupunctuur als geen behandeling voor chronische rugpijn, nekpijn en artrosepijn. De effecten bleven ook na 12 maanden nog aantoonbaar aanwezig. <em>Vickers AJ, Cronin AM, Maschino AC, et al. Acupuncture for Chronic Pain: Individual Patient Data Meta-analysis. JAMA Intern Med. 2012;172(19):1444&ndash;1453.</em>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">Furlan AD et al. — Cochrane Review: Acupunctuur bij lage rugpijn</h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  De Cochrane systematische review naar acupunctuur bij lage rugpijn concludeerde dat acupunctuur effectiever is dan geen behandeling voor zowel pijnverlichting als functionele verbetering bij chronische lage rugpijn, en dat het kan worden overwogen als aanvullende behandeling naast reguliere zorg. <em>Furlan AD, van Tulder MW, Cherkin DC, et al. Acupuncture and dry-needling for low back pain. Cochrane Database Syst Rev. 2005.</em>
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
                Veelgestelde vragen over acupunctuur bij lage rugklachten
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij lage rugklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is een bewezen effectieve behandeling voor zowel acute als chronische lage rugklachten. Meerdere grote meta-analyses tonen aan dat acupunctuur significant beter werkt dan placebo en vergelijkbaar is met andere eerstelijnsbehandelingen voor chronische rugpijn. De Vickers-studie (JAMA Internal Medicine, 2012) met bijna 18.000 patiënten bevestigt dit.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij lage rugklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur is bij lage rugklachten over het algemeen zeer veilig wanneer uitgevoerd door een gekwalificeerde en geregistreerde acupuncturist. Wij werken uitsluitend met steriele, wegwerpnaalden. Bijwerkingen zijn doorgaans mild en tijdelijk, zoals lichte gevoeligheid op de naaldpunten of een korte periode van vermoeidheid na de behandeling.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij lage rugklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Veel patiënten ervaren al na 3 tot 5 behandelingen een duidelijke verlichting van hun klachten. Bij acuut spit kan het resultaat soms al na 1 à 2 sessies merkbaar zijn. Bij chronische of langdurige rugklachten is een volledige behandelreeks van 8 tot 12 sessies doorgaans nodig voor blijvend resultaat.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor lage rugklachten vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico. Controleer uw polisvoorwaarden of neem contact met ons op voor meer informatie.
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
                  Klaar om uw rugpijn aan te pakken?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw lage rugklachten kan verlichten. U kunt eenvoudig online een tijd kiezen of ons direct bereiken via WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_lage_rugklachten" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
