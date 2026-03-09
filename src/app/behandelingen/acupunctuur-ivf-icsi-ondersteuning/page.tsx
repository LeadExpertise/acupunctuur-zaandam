import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij IVF & ICSI Ondersteuning | Acupunctuur Zaandam",
  description: "Ondersteun uw IVF- of ICSI-traject met acupunctuur in Zaandam. Wetenschappelijk onderbouwde behandeling ter verbetering van de zwangerschapskans. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur IVF", "acupunctuur ICSI", "acupunctuur IVF Zaandam", "vruchtbaarheidsacupunctuur IVF", "acupunctuur zwangerschapskans verhogen"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-ivf-icsi-ondersteuning",
      name: "Acupunctuur bij IVF & ICSI Ondersteuning | Acupunctuur Zaandam",
      description: "Acupunctuurbehandeling ter ondersteuning van IVF- en ICSI-trajecten in Zaandam. Vergroot de kans op een succesvolle implantatie en draagt bij aan meer ontspanning tijdens het behandeltraject.",
      about: [{ "@type": "MedicalCondition", name: "IVF & ICSI ondersteuning" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "IVF & ICSI ondersteuning" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij IVF of ICSI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Onderzoek, waaronder de veelgeciteerde studie van Paulus et al. (2002), toont aan dat acupunctuur rondom de embryotransfer de zwangerschapskans significant kan verhogen. Acupunctuur verbetert de doorbloeding van de baarmoeder, vermindert spasmen en verlaagt stress — factoren die de implantatie van het embryo bevorderen.",
          },
        },
        {
          "@type": "Question",
          name: "Wanneer tijdens het IVF-traject start ik met acupunctuur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideaal gezien start u 6 tot 8 weken vóór de geplande embryotransfer met acupunctuur. Dit geeft de behandeling de tijd om de baarmoederslijmvliesopbouw, hormonale balans en algehele conditie te optimaliseren. Op de dag van de transfer zelf zijn behandelingen voor én na de transfer extra waardevol.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig tijdens een IVF-traject?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, mits uitgevoerd door een gecertificeerde acupuncturist met ervaring in vruchtbaarheidsbehandeling. Wij werken uitsluitend met steriele, wegwerpnaalden en zijn op de hoogte van de veiligheidsprotocollen specifiek voor de verschillende fasen van een IVF- of ICSI-traject.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij IVF vergoed door de zorgverzekeraar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Veel aanvullende verzekeringen vergoeden acupunctuurbehandelingen, ook wanneer deze worden ingezet ter ondersteuning van IVF of ICSI. Controleer uw polisvoorwaarden of neem contact met ons op voor meer informatie.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij IVF & ICSI Ondersteuning", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-ivf-icsi-ondersteuning" },
      ],
    },
  ],
};

export default function IvfIcsiOndersteuningPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij IVF &amp; ICSI Ondersteuning</span>
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
              Acupunctuur bij IVF &amp; ICSI Ondersteuning in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een IVF- of ICSI-traject is emotioneel en lichamelijk intensief. Acupunctuur kan uw kans op succes vergroten door de baarmoederdoorbloeding te verbeteren, stress te verlichten en uw lichaam optimaal voor te bereiden op implantatie. Wij begeleiden u met persoonlijke zorg en wetenschappelijk onderbouwde behandelingen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/ivf-icsi-ondersteuning" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over IVF &amp; ICSI ondersteuning</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat is IVF/ICSI */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is IVF &amp; ICSI en hoe werkt het?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                IVF (In Vitro Fertilisatie) en ICSI (Intracytoplasmatische Sperma-injectie) zijn vormen van geassisteerde voortplanting waarbij eicellen buiten het lichaam worden bevrucht. Bij IVF worden meerdere zaadcellen samen met een eicel gebracht; bij ICSI wordt één zaadcel rechtstreeks in de eicel geïnjecteerd — dit wordt gebruikt bij verminderde zaadkwaliteit of eerder mislukte IVF-pogingen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Ondanks de indrukwekkende medische vooruitgang is het slagingspercentage van een IVF-traject per cyclus gemiddeld tussen de 20 en 40 procent, afhankelijk van leeftijd en andere factoren. Elke ondersteuning die de kans op een succesvolle implantatie vergroot, is dan ook welkom. Acupunctuur biedt hier een waardevolle, veilige aanvulling.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Verminderde uteriene doorbloeding</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een slechte doorbloeding van de baarmoeder vermindert de kwaliteit van het slijmvlies, wat implantatie bemoeilijkt. Acupunctuur verbetert de lokale circulatie aantoonbaar.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Stress en angst rondom het traject</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">De hormonale injecties, het wachten en de onzekerheid zorgen voor veel stress. Chronische stress verhoogt cortisol en kan de vruchtbaarheid nadelig beïnvloeden.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Hormonale disbalans door medicatie</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">De hormoonstimulatie bij IVF kan klachten geven zoals opvliegers, stemmingswisselingen en buikpijn. Acupunctuur helpt de balans te herstellen en bijwerkingen te verzachten.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Baarmoederspasmen na de transfer</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Spasmen van de baarmoeder direct na embryotransfer kunnen de innesteling verstoren. Acupunctuur vermindert aantoonbaar de spasmiciteit van het baarmoederslijmvlies.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur het IVF-traject ondersteunt
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit de Traditionele Chinese Geneeskunde wordt vruchtbaarheid gedragen door de Nieren — de grondstof van levenskracht en reproductie — en de Lever, die de Qi- en bloedstroom reguleert. Bij IVF-trajecten is er doorgaans sprake van Nierdeficiëntie (uitputting), Leverstagnatie (stress) en soms Hittesymptomen door de hormoonstimulatie. Acupunctuur voedt de Nierergie, beweegt de Qi en koelt overtollige Hitte af, waardoor de conditie van de baarmoeder en de algehele vruchtbaarheid optimaal worden ondersteund.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Verbeterde uteriene doorbloeding:</strong> Acupunctuur vergroot de bloedstroom naar de baarmoeder via vasodilatatie, wat leidt tot een beter voorbereide baarmoederwand voor implantatie.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stressreductie via het autonome zenuwstelsel:</strong> Acupunctuur activeert het parasympathische zenuwstelsel en verlaagt de cortisol- en adrenalineniveaus, wat een gunstig effect heeft op de reproductieve hormonen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Regulatie van reproductieve hormonen:</strong> Studies tonen aan dat acupunctuur invloed heeft op de GnRH-secretie en daarmee op LH, FSH en oestradiolniveaus — centraal in een IVF-cyclus.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Vermindering baarmoederspasmen:</strong> Door het ontspannen van de gladde spiercellen van de baarmoeder na de embryotransfer vergroot acupunctuur de kans op succesvolle innesteling.</li>
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
                Tijdens de intake bespreken we uw volledige IVF- of ICSI-protocol, uw medische geschiedenis, leefstijl en eventuele eerdere vruchtbaarheidsbehandelingen. Vanuit de TCG beoordelen we ook uw tong en pols om een persoonlijk behandelplan op te stellen. We stemmen onze behandelingen nauwkeurig af op de fasen van uw medische cyclus.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                De naalden worden geplaatst op specifieke acupunctuurpunten die de baarmoeder ondersteunen, stress reduceren en de hormonale balans bevorderen. Op de dag van de embryotransfer adviseren wij een behandeling van 25 minuten vóór en een behandeling van 25 minuten ná de procedure. De naalden blijven doorgaans 20 tot 30 minuten zitten. De behandeling is ontspannend en vrijwel pijnloos — veel patiënten vallen zelfs in slaap.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn aanbevolen?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Voor optimale resultaten adviseren wij te starten met acupunctuur 6 tot 8 weken vóór de geplande embryotransfer. In de voorbereidingsfase plannen we wekelijkse behandelingen om de baarmoeder en hormonale balans te optimaliseren. Tijdens de stimulatiefase van het IVF-protocol (hormooninjecties) behandelen we 1 à 2 keer per week om bijwerkingen te beperken.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Op de dag van de embryotransfer zijn twee behandelingen ideaal: één voor en één na de ingreep in het ziekenhuis. Na de transfer bieden we ook ondersteuning tijdens de kritieke tweewekenperiode om het lichaam te ondersteunen bij het handhaven van een vroege zwangerschap. Het totale traject telt doorgaans 8 tot 15 behandelingen per IVF-cyclus.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij IVF &amp; ICSI geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen die een IVF- of ICSI-traject volgen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met eerdere mislukte IVF-pogingen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Paren met onverklaarde onvruchtbaarheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met veel stress rondom het traject</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Bijwerkingen van hormoonstimulatie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met PCOS of endometriose</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/ivf-icsi-ondersteuning" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over IVF &amp; ICSI ondersteuning (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-vruchtbaarheidsproblemen" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij vruchtbaarheidsproblemen</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-hormonale-disbalans" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij hormonale disbalans</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-stressklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij stressklachten</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij IVF &amp; ICSI ondersteuning in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar vanuit de gehele regio. Wij begeleiden regelmatig vrouwen tijdens IVF- en ICSI-trajecten vanuit <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft, Zaandijk en Amsterdam-Noord</strong>. Wij werken waar mogelijk nauw samen met uw fertiliteitskliniek of gynaecoloog.
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
              <p className="text-base text-[#1F3A36]/70 font-light">Acupunctuur bij IVF is wereldwijd onderzocht met veelbelovende resultaten.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">Paulus WE et al. &mdash; Fertility and Sterility (2002)</h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  In deze gerandomiseerde gecontroleerde studie ontvingen 160 patiënten die een embryotransfer ondergingen ofwel acupunctuur (voor én na de transfer) ofwel geen aanvullende behandeling. De zwangerschapsgraad in de acupunctuurgroep bedroeg <strong>42,5%</strong> tegenover <strong>26,3%</strong> in de controlegroep — een statistisch significant verschil. De studie concludeerde dat acupunctuur rondom de embryotransfer de implantatie bevordert, mogelijk door verbetering van de uteriene doorbloeding en vermindering van baarmoederspasmen. <em>Paulus WE, Zhang M, Strehler E, et al. Influence of acupuncture on the pregnancy rate in patients who undergo assisted reproduction therapy. Fertil Steril. 2002;77(4):721&ndash;724.</em>
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
                Veelgestelde vragen over acupunctuur bij IVF &amp; ICSI
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij IVF of ICSI?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Onderzoek, waaronder de veelgeciteerde studie van Paulus et al. (2002), toont aan dat acupunctuur rondom de embryotransfer de zwangerschapskans significant kan verhogen — van 26,3% naar 42,5% in dat onderzoek. Acupunctuur verbetert de doorbloeding van de baarmoeder, vermindert spasmen en verlaagt stress, factoren die de implantatie van het embryo bevorderen.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wanneer tijdens het IVF-traject start ik met acupunctuur?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ideaal gezien start u 6 tot 8 weken vóór de geplande embryotransfer met acupunctuur. Dit geeft de behandeling de tijd om de baarmoederslijmvliesopbouw, hormonale balans en algehele conditie te optimaliseren. Op de dag van de transfer zelf zijn behandelingen voor én na de transfer extra waardevol.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig tijdens een IVF-traject?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, mits uitgevoerd door een gecertificeerde acupuncturist met ervaring in vruchtbaarheidsbehandeling. Wij werken uitsluitend met steriele, wegwerpnaalden en zijn op de hoogte van de veiligheidsprotocollen specifiek voor de verschillende fasen van een IVF- of ICSI-traject. Bepaalde acupunctuurpunten worden bewust vermeden tijdens de stimulatiefase.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij IVF vergoed door de zorgverzekeraar?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Veel aanvullende verzekeringen vergoeden acupunctuurbehandelingen, ook wanneer deze worden ingezet ter ondersteuning van IVF of ICSI. Controleer uw polisvoorwaarden of neem contact met ons op voor meer informatie.
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
                  Ondersteuning tijdens uw IVF-traject?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en bespreek hoe acupunctuur uw IVF- of ICSI-traject kan ondersteunen. U kunt eenvoudig online een tijd kiezen of ons direct bereiken via WhatsApp.
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_ivf_icsi"
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
