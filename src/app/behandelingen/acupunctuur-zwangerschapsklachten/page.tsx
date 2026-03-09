import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Zwangerschapsklachten | Acupunctuur Zaandam",
  description: "Last van ochtendmisselijkheid, bekken- of rugpijn tijdens de zwangerschap? Acupunctuur Zaandam biedt veilige, effectieve behandeling. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur zwangerschapsklachten", "acupunctuur misselijkheid zwangerschap", "acupunctuur tijdens zwangerschap Zaandam", "acupunctuur ochtendmisselijkheid", "acupunctuur zwangerschap veilig"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-zwangerschapsklachten",
      name: "Acupunctuur bij Zwangerschapsklachten | Acupunctuur Zaandam",
      description: "Veilige en effectieve acupunctuurbehandeling voor zwangerschapsklachten in Zaandam. Verlicht ochtendmisselijkheid, rugpijn, bekkenklachten en vermoeidheid tijdens de zwangerschap.",
      about: [{ "@type": "MedicalCondition", name: "zwangerschapsklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "zwangerschapsklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is acupunctuur veilig tijdens de zwangerschap?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig tijdens de zwangerschap wanneer het wordt uitgevoerd door een gecertificeerde acupuncturist met specifieke kennis van zwangerschapsacupunctuur. Bepaalde acupunctuurpunten worden zorgvuldig vermeden; wij hanteren strikte veiligheidsprotocollen voor elke fase van de zwangerschap.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt acupunctuur tegen ochtendmisselijkheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur en acupressuur zijn goed onderzocht als behandeling voor misselijkheid en braken tijdens de zwangerschap. Een Cochrane-review (Matthews et al., 2015) concludeerde dat acupressuur op punt P6 (polsgebied) de misselijkheid in de vroege zwangerschap significant vermindert. In onze praktijk combineren we acupunctuur met acupressuurinstructies die u thuis zelf kunt toepassen.",
          },
        },
        {
          "@type": "Question",
          name: "Bij welke klachten tijdens de zwangerschap kan ik terecht?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wij behandelen ochtendmisselijkheid en hyperemesis gravidarum, bekken- en lage rugpijn, ribpijn, slapeloosheid, hoofdpijn, vermoeidheid, stuitligging (moxibustie), voorbereiding op de bevalling en inductie bij overtijd zijn.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur tijdens de zwangerschap vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste aanvullende verzekeringen vergoeden acupunctuurbehandelingen ook tijdens de zwangerschap. Controleer uw polisvoorwaarden of neem contact met ons op.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Zwangerschapsklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-zwangerschapsklachten" },
      ],
    },
  ],
};

export default function ZwangerschapsklachtenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Zwangerschapsklachten</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Hormonen &amp; Vrouwenklachten</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Zwangerschapsklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een zwangerschap is een bijzondere periode, maar gaat vaak gepaard met vervelende klachten als misselijkheid, rugpijn, vermoeidheid en bekkenklachten. Acupunctuur biedt een veilige, medicijnvrije behandeling die de klachten verlicht en het lichaam ondersteunt tijdens alle fasen van de zwangerschap.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/zwangerschapsklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over zwangerschapsklachten</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn zwangerschapsklachten */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Welke zwangerschapsklachten behandelt acupunctuur?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Zwangerschapsklachten zijn divers en veranderen per trimester. In het eerste trimester domineert misselijkheid; in het tweede en derde trimester komen beweegingsklachten, pijn en slaapproblemen meer op de voorgrond. Veel vrouwen zijn terughoudend met medicatie tijdens de zwangerschap — terecht, maar dat laat hen soms met weinig opties. Acupunctuur is hier een uitstekend alternatief.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Wij behandelen zwangerschapsklachten in alle trimesters, altijd met specifieke aandacht voor de veiligheid van moeder en kind. Onze acupuncturist heeft uitgebreide ervaring in zwangerschapsacupunctuur en werkt complementair aan de verloskundige of gynaecoloog.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Ochtendmisselijkheid en hyperemesis</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Misselijkheid en braken in het eerste trimester, soms zo ernstig dat hospitalisatie nodig is. Acupressuur op punt P6 is wetenschappelijk onderbouwd effectief.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Bekken- en lage rugpijn</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Veranderd gewichtszwaartepunt en hormonale bekkenmobiliteit leiden tot pijn rondom het schaambeen en de SI-gewrichten. Acupunctuur verlicht de pijn en herstelt de stabiliteit.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Stuitligging (moxibustie)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Moxibustie op punt BL67 (bij de kleine teen) wordt traditioneel ingezet om een kind in stuitligging te helpen draaien. In de 34e tot 36e week is dit het meest effectief.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Vermoeidheid en slaapproblemen</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Hormonale veranderingen, frequente toiletbezoeken en lichamelijk ongemak verstoren de slaap. Acupunctuur kalmeert het zenuwstelsel en bevordert een herstellende nachtrust.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij zwangerschapsklachten
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit de Traditionele Chinese Geneeskunde wordt een zwangerschap gezien als een periode van grote bloedvraag: het bloed voedt het kind, waardoor de moeder relatief snel in een toestand van bloeddeficiëntie kan raken. Dit verklaart vermoeidheid en duizeligheid. Misselijkheid in het eerste trimester wordt toegeschreven aan de omhooggaande beweging van Maaqi, die gestimuleerd wordt door de zich ontwikkelende foetus. Bekken- en rugpijn wijzen op overbelasting van de Nierenergie, die de botten en gewrichten voedt. Acupunctuur voedt het bloed, kalmeert de Maaqibeweging en ondersteunt de Nierenergie.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A16] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Antiemetisch effect via P6:</strong> Het Neiguan-punt (P6) op de binnenkant van de pols moduleert de vaguszenuw en remt de misselijkheidsprikkel in het braakcentrum van de hersenstam.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Pijnverlichting via endorfines:</strong> Acupunctuur stimuleert endorfineproductie die bekken- en rugpijn verlicht zonder risico voor de foetus — in tegenstelling tot pijnstillers.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontspanning van spieren en ligamenten:</strong> Door spasmen in bekkenbodemen rugspieren te verlichten, herstelt acupunctuur de stabiliteit en vermindert het houdingsgerelateerde ongemak.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stressvermindering via het autonome zenuwstelsel:</strong> Acupunctuur activeert het parasympathische zenuwstelsel, wat de moeder diep ontspant en indirect ook de foetus ten goede komt.</li>
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
                Veiligheid staat altijd voorop. Tijdens de intake informeren we uitgebreid naar uw zwangerschapsduur, klachten, medische achtergrond en de begeleiding door uw verloskundige of gynaecoloog. Op basis hiervan kiezen we alleen de punten die veilig zijn in uw zwangerschapsfase. Bepaalde krachtige punten worden bewust vermeden.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                U ligt comfortabel op uw zij of in halfzittende positie — we werken nooit in buikligging bij een zichtbare zwangerschap. De naalden worden geplaatst op veilige punten op de armen, benen, rug en hoofd. Voor misselijkheidsklachten leren we u ook hoe u zelf acupressuur kunt toepassen thuis met een acupressuurbandje op punt P6.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig bij zwangerschapsklachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij misselijkheid in het eerste trimester zijn doorgaans 3 tot 6 behandelingen voldoende voor merkbare verlichting. We starten bij voorkeur zo vroeg mogelijk in het eerste trimester. Voor bekken- en rugpijn in het tweede en derde trimester adviseren we tweewekelijkse behandelingen gedurende 4 tot 8 weken.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Voor de voorbereiding op de bevalling bieden wij een speciaal bevallings-voorbereidingsprogramma aan vanaf week 36 tot 38. Hierbij werken we met punten die de baarmoedermond rijpen en de bevalling bevorderen. Bij stuitligging starten we bij voorkeur tussen week 34 en 36 met moxibustie.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur tijdens de zwangerschap geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Ochtendmisselijkheid en braken</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Bekken- en lage rugpijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Stuitligging (moxibustie)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Slaapproblemen en vermoeidheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Bevallingsvoorbereiding</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Postpartum herstel na de bevalling</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/zwangerschapsklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over zwangerschapsklachten (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-bekkenklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij bekkenklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-vermoeidheid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij vermoeidheid</span>
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
                Acupunctuur bij zwangerschapsklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Wij begeleiden regelmatig zwangere vrouwen uit de gehele regio. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft, Zaandijk of Amsterdam-Noord</strong>? Dan bent u snel bij ons. Wij werken samen met verloskundigen en gynaecologen in de regio.
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
              <p className="text-base text-[#1F3A36]/70 font-light">Acupunctuur en acupressuur bij zwangerschapsmisselijkheid zijn uitgebreid bestudeerd.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">Matthews A et al. &mdash; Cochrane Database Syst Rev (2015)</h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Deze uitgebreide Cochrane-review onderzocht interventies voor misselijkheid en braken in de vroege zwangerschap. De review concludeerde dat <strong>acupressuur op het P6-punt (Neiguan)</strong> een significant effect heeft op de vermindering van misselijkheidsklachten in het eerste trimester van de zwangerschap. Acupunctuur en acupressuur werden als veilige, niet-farmacologische opties aanbevolen voor zwangere vrouwen. <em>Matthews A, Haas DM, O&rsquo;Mathúna DP, Dowswell T. Interventions for nausea and vomiting in early pregnancy. Cochrane Database Syst Rev. 2015;(9):CD007575.</em>
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
                Veelgestelde vragen over acupunctuur bij zwangerschapsklachten
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig tijdens de zwangerschap?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is veilig tijdens de zwangerschap wanneer het wordt uitgevoerd door een gecertificeerde acupuncturist met specifieke kennis van zwangerschapsacupunctuur. Bepaalde acupunctuurpunten worden zorgvuldig vermeden; wij hanteren strikte veiligheidsprotocollen voor elke fase van de zwangerschap.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur tegen ochtendmisselijkheid?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur en acupressuur zijn goed onderzocht als behandeling voor misselijkheid en braken tijdens de zwangerschap. Een Cochrane-review (Matthews et al., 2015) concludeerde dat acupressuur op punt P6 de misselijkheid in de vroege zwangerschap significant vermindert. In onze praktijk combineren we acupunctuur met acupressuurinstructies die u thuis zelf kunt toepassen.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Bij welke klachten tijdens de zwangerschap kan ik terecht?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Wij behandelen ochtendmisselijkheid en hyperemesis gravidarum, bekken- en lage rugpijn, ribpijn, slapeloosheid, hoofdpijn, vermoeidheid, stuitligging (moxibustie), voorbereiding op de bevalling en inductie bij overtijd zijn.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur tijdens de zwangerschap vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste aanvullende verzekeringen vergoeden acupunctuurbehandelingen ook tijdens de zwangerschap. Controleer uw polisvoorwaarden of neem contact met ons op.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
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
                  Comfortabeler door uw zwangerschap?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw zwangerschapsklachten kan verlichten. U kunt eenvoudig online een tijd kiezen of ons direct bereiken via WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
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
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">Online Planner</span>
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
                      style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }}
                      scrolling="yes"
                      id="D8uouGkFZH4Alr37y5z4_behandeling_zwangerschapsklachten"
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
