import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/behandelingen/acupunctuur-nekklachten" },
  title: "Acupunctuur bij Nekklachten | Acupunctuur Zaandam",
  description: "Last van nekpijn, whiplash of een nekhernia? Acupunctuur Zaandam behandelt nekklachten effectief en natuurlijk. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur nekklachten", "acupunctuur nekklachten Zaandam", "behandeling nekpijn acupunctuur", "acupunctuur nekpijn klachten", "natuurlijke behandeling nekklachten"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-nekklachten",
      name: "Acupunctuur bij Nekklachten | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor nekpijn, whiplash, nekhernia en spanningshoofdpijn door nekklachten in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "nekklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "nekklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij nekklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is een effectieve behandeling voor chronische nekpijn. De Vickers-studie (JAMA Internal Medicine, 2012) met bijna 18.000 patiënten toonde aan dat acupunctuur significant beter werkt dan placebo voor chronische nekpijn. Veel patiënten ervaren na een behandelreeks duidelijke verlichting en betere beweeglijkheid.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij nekklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij nekklachten wanneer uitgevoerd door een gekwalificeerde acupuncturist. Wij werken uitsluitend met steriele wegwerpnaalden en hanteren strikte protocollen. Bij klachten na een whiplash of nekhernia overleggen we eerst met uw behandelend arts indien dat van toepassing is.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij nekklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute nekpijn is verbetering vaak al na 2 tot 3 behandelingen merkbaar. Bij chronische nekklachten of klachten na whiplash is een behandelreeks van 6 tot 10 sessies gebruikelijk. Resultaten variëren per persoon en per ernst van de klachten.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor nekklachten vergoed?",
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
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Nekklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-nekklachten" },
      ],
    },
  ],
};

export default function NekklachtenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Nekklachten</span>
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
              Acupunctuur bij Nekklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Nekklachten kunnen het dagelijks leven ernstig belemmeren en gaan vaak gepaard met hoofdpijn, uitstraling naar de schouders of gevoelsstoornissen in de armen. Acupunctuur biedt een gerichte, natuurlijke behandeling die de pijn verlicht, de spierspanning vermindert en de beweeglijkheid van de nek herstelt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/nekklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over nekklachten</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn nekklachten */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn nekklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De nek (cervicale wervelkolom) bestaat uit zeven wervels en ondersteunt het hoofd, dat gemiddeld 5 tot 7 kilogram weegt. Dit complexe gebied huisvest talrijke spieren, zenuwen, bloedvaten en tussenwervelschijven. Nekklachten zijn dan ook zeer divers van aard en kunnen voortkomen uit spieroverbelasting, gewrichtsaandoeningen, zenuwinklemming of trauma.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                In onze moderne maatschappij zijn nekklachten bijzonder prevalent: langdurig schermgebruik, een verkeerde werkhouding en stress leiden tot chronische overbelasting van de nekspieren. Tegelijkertijd zien we ook ernstigere oorzaken zoals een nekhernia of whiplash, waarbij gerichte behandeling onmisbaar is.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Chronische nekpijn door houding en spanning</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Nekpijn door langdurig beeldschermwerk, slechte zithouding of aanhoudende stress. De spieren raken overbelast en kunnen pijnlijke knopen (triggerpoints) ontwikkelen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Whiplash</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een traumatische nekblessure door plotselinge voor-achterwaartse beweging, vaak na een verkeersongeval. Klachten kunnen bestaan uit pijn, stijfheid, duizeligheid en vermoeidheid.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Nekhernia</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een uitpuilende tussenwervelschijf in de nek die druk uitoefent op een zenuwwortel, met uitstralende pijn, tintelingen of krachtverlies in arm of hand als gevolg.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Spanningshoofdpijn vanuit de nek</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Hoofdpijn die zijn oorsprong vindt in gespannen nekspieren en nekgewrichten. Trekt vaak op vanuit de nekbasis naar het hoofd en kan dagelijks aanwezig zijn.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij nekklachten
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit TCG wordt nekpijn beschouwd als een blokkade van Qi en Xue (bloed) in de meridianen die door de nek verlopen, met name de Galblaas- en Blaasmeridiaan. Wind en kou spelen vaak een uitlokkende rol — denk aan tocht, airconditioning of slapen met een ontbloot hoofd. Ook emotionele spanning en overbelasting van de Lever-energie kunnen leiden tot opwaartse druk en pijn in nek en hoofd. Acupunctuur opent de meridianen, verdrijft pathogene factoren en herstelt de vrije doorstroming.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Triggerpoint-deactivatie:</strong> Acupunctuurnaalden worden direct in gespannen spierbundels (triggerpoints) geplaatst, wat een lokale spierspasmreactie en vervolgens diepe ontspanning veroorzaakt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Pijnmodulatie via het zenuwstelsel:</strong> Acupunctuur beïnvloedt de pijnpoorttransmissie in het ruggenmerg en stimuleert de afgifte van endorfines en serotonine, wat pijn vermindert en stemming verbetert.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Verbeterde doorbloeding:</strong> De naaldprikkel stimuleert de lokale microcirculatie, wat de afvoer van afvalstoffen bevordert en zuurstofaanvoer naar de weefsels verhoogt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stressregulatie:</strong> Via het autonome zenuwstelsel bevordert acupunctuur een parasympathische toestand (rust-en-herstel), wat helpt bij nekklachten veroorzaakt door chronische stress.</li>
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
                Bij de eerste consultatie bespreken we uitgebreid het verloop van uw nekklachten: wanneer zijn ze ontstaan, wat verergert of verlicht de pijn, gaan ze gepaard met hoofdpijn of uitstraling naar de armen? We nemen ook uw algehele gezondheid, werkhouding en stressniveau mee in de beoordeling.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Tijdens de behandeling zit of ligt u comfortabel. Naalden worden geplaatst in de nekspieren, langs de schouders, aan de basis van het hoofd en op distale punten aan de handen of voeten. De behandeling duurt doorgaans 45 tot 60 minuten inclusief intake. Veel patiënten met nekklachten ervareneen directe vermindering van de spierspanning al tijdens de sessie.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn meestal nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij acute nekpijn na een verkeerde beweging of een stijve nek na slapen zijn 3 tot 5 behandelingen vaak voldoende. Bij whiplashklachten is herstel doorgaans een langduriger proces: afhankelijk van de ernst en de tijd die verstreken is na het ongeval, is een traject van 8 tot 15 sessies realistisch.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij chronische nekklachten die samenhangen met werkhouding of stress, combineren we de acupunctuurbehandeling met praktische adviezen over ergonomie en ontspanningsoefeningen. Na een succesvolle behandelreeks adviseren we vaak maandelijkse onderhoudssessies.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij nekklachten geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Chronische nekpijn door beeldschermwerk</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Whiplash-gerelateerde klachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Nekhernia met uitstraling naar de arm</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Spanningshoofdpijn vanuit de nek</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/nekklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over nekklachten (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-lage-rugklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij lage rugklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-schouderklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij schouderklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-hoofdpijn" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij hoofdpijn</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij nekklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Wij behandelen wekelijks patiënten met nekklachten uit de gehele regio. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.
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
              <p className="text-base text-[#1F3A36]/70 font-light">Nekpijn is een van de meest onderzochte indicaties voor acupunctuur.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">Vickers AJ et al. — JAMA Internal Medicine (2012)</h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Deze omvangrijke individuele patiëntendata meta-analyse (29 RCT&rsquo;s, 17.922 patiënten) toonde aan dat acupunctuur significant effectiever is dan zowel sham-acupunctuur als geen behandeling voor chronische nekpijn. De effecten waren nog steeds aantoonbaar aanwezig 12 maanden na de behandeling. <em>Vickers AJ, Cronin AM, Maschino AC, et al. Acupuncture for Chronic Pain: Individual Patient Data Meta-analysis. JAMA Intern Med. 2012;172(19):1444&ndash;1453.</em>
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
                Veelgestelde vragen over acupunctuur bij nekklachten
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij nekklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is een effectieve behandeling voor chronische nekpijn. Wetenschappelijk onderzoek, waaronder de Vickers meta-analyse (JAMA 2012), toont significant betere resultaten dan placebo. Patiënten rapporteren minder pijn, betere beweeglijkheid en vermindering van gerelateerde klachten zoals spanningshoofdpijn.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij nekklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur is veilig bij nekklachten wanneer uitgevoerd door een gekwalificeerde acupuncturist. Wij werken uitsluitend met steriele wegwerpnaalden en hanteren strikte hygiëneprotocollen. Bij ernstige klachten na een whiplash stemmen wij indien nodig af met uw behandelend arts.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij nekklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij acute nekpijn is verbetering vaak al na 2 tot 3 behandelingen merkbaar. Bij chronische nekklachten of klachten na whiplash is een behandelreeks van 6 tot 10 sessies gebruikelijk. De meeste patiënten merken een duidelijke vermindering van pijn en stijfheid na de eerste sessies.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor nekklachten vergoed?
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
                  Klaar om uw nekklachten aan te pakken?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Laat nekpijn uw leven niet beheersen. Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw klachten kan verlichten en uw beweeglijkheid herstelt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_nekklachten" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
