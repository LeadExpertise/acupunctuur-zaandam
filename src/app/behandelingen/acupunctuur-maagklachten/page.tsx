import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Maagklachten | Acupunctuur Zaandam",
  description: "Last van maagpijn, misselijkheid, een opgeblazen gevoel of maagzuur? Acupunctuur Zaandam biedt effectieve behandeling voor maagklachten. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur maagklachten", "acupunctuur maagpijn Zaandam", "acupunctuur misselijkheid", "acupunctuur maagzuur", "acupunctuur gastritis"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-maagklachten",
      name: "Acupunctuur bij Maagklachten | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor maagklachten in Zaandam. Verlicht maagpijn, misselijkheid, maagzuur, opgeblazen gevoel en functionele dyspepsie.",
      about: [{ "@type": "MedicalCondition", name: "maagklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "maagklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij maagklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is een effectieve behandeling voor functionele maagklachten zoals misselijkheid, maagpijn, opgeblazen gevoel en zuurbranden. Door de maaglediging te reguleren, spasmen te verlichten en de zuurproductie te normaliseren, kunnen maagklachten significant verbeteren. Acupunctuur werkt aanvullend aan dieetaanpassingen en reguliere behandeling.",
          },
        },
        {
          "@type": "Question",
          name: "Welke maagklachten behandelt acupunctuur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wij behandelen functionele dyspepsie, misselijkheid, maagzuur en reflux, gastritis, spastische maag, een vol gevoel na het eten, belachte oprispingen en stressgerelateerde maagklachten.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk ik verbetering van maagklachten met acupunctuur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel patiënten ervaren al na 3 tot 5 behandelingen merkbare verlichting van misselijkheid en maagpijn. Voor structurele verbetering van chronische maagklachten adviseren wij een behandelreeks van 8 tot 10 sessies.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen als aanvulling op maagmedicatie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan goed worden gecombineerd met maagmedicatie zoals protonpompremmers of antacida. Veel patiënten rapporteren dat ze dankzij acupunctuur hun medicijnengebruik kunnen verminderen, altijd in overleg met hun huisarts of specialist.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Maagklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-maagklachten" },
      ],
    },
  ],
};

export default function MaagklachtenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Maagklachten</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Spijsvertering &amp; Buik</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Maagklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Maagklachten zijn vervelend en kunnen het eten, het werken en het slapen beïnvloeden. Of u nu last heeft van misselijkheid, maagzuur, een gespannen maag of terugkerende maagpijn — acupunctuur biedt een effectieve, medicijnvrije aanpak die de onderliggende oorzaak aanpakt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/maagklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over maagklachten</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn maagklachten */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn maagklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Maagklachten is een brede term voor klachten die zich voordoen in het bovenste deel van het spijsverteringskanaal — de maag en het twaalfvingerige darm. Ze kunnen acuut optreden of chronisch aanwezig zijn. Bij veel mensen zijn maagklachten functioneel van aard: er is geen structurele afwijking aantoonbaar, maar de maag functioneert niet optimaal vanwege stress, voeding, leefstijl of een verstoorde darm-hersen-as.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Chronische maagklachten worden ook wel functionele dyspepsie of &ldquo;niet-ulcusachtige dyspepsie&rdquo; genoemd. Zij treffen naar schatting 20 tot 30 procent van de bevolking en zijn een frequente reden voor bezoek aan de huisarts. Reguliere behandeling bestaat doorgaans uit zuurremming, maar lost de onderliggende disbalans niet altijd op. Acupunctuur biedt hier aanvulling of alternatief.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Functionele dyspepsie (niet-ulcusachtige maagklachten)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Aanhoudend vol gevoel na het eten, vroege verzadiging, misselijkheid en pijn of branderig gevoel in de maagstreek zonder aanwijsbare oorzaak bij endoscopie.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Gastritis (maagontsteking)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Ontsteking van het maagslijmvlies die leidt tot pijn, misselijkheid, opboeren en soms braken. Kan acuut of chronisch zijn en wordt verergerd door stress, alcohol en NSAID-gebruik.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Maagzuur en reflux</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Terugvloeien van maagzuur naar de slokdarm met als gevolg zuurbranden, oprispingen en keelirrirtatie. Stress, voeding en een verslapte slokdarmsfincter spelen een rol.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Stressgerelateerde maagklachten</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Klachten die sterk samenhangen met emotionele spanning, werkdruk of angst. De maag is een van de meest stressgevoelige organen in het lichaam.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij maagklachten
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Traditionele Chinese Geneeskunde is de Maag het orgaan van ontvangst en transformatie — het verzamelt voeding en begint de vertering. De Maag-Qi beweegt van nature naar beneden (het verteringsproces). Wanneer deze neerwaartse beweging verstoord raakt — door stress, verkeerde voeding, te snel eten of emotionele belasting — gaat de Qi juist omhoog, wat leidt tot misselijkheid, oprispingen, zuurbranden en een vol gevoel. Acupunctuur herstelt de neerwaartse richting van de Maag-Qi, ondersteunt de Miltfunctie en kalmeert de Lever die de Maag aanvalt bij stress.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Regulatie van maaglediging:</strong> Acupunctuur op specifieke punten (zoals ST36 en PC6) normaliseert de maaglediging bij zowel te trage (gevoel van vol zitten) als te snelle maaglediging, via het autonome zenuwstelsel.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Vermindering van zuurproductie:</strong> Acupunctuur moduleert de zuurproductie in de maag via het autonome zenuwstelsel en de vaguszenuw, wat bij maagzuur en gastritis verlichting biedt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Antiemetisch effect:</strong> Het PC6-punt (Neiguan) op de pols is een van de best onderzochte antiemetische acupunctuurpunten. Het moduleert het braakcentrum in de hersenstam en vermindert misselijkheid effectief.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stressmodulatie via het autonome zenuwstelsel:</strong> Door de parasympathische activiteit te verhogen en de sympathische stress-respons te verlagen, brengt acupunctuur de maag tot rust en vermindert het de stressgerelateerde component van maagklachten.</li>
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
                Bij de intake bespreken we de aard en frequentie van uw maagklachten, de relatie met eten en stress, eventuele medicijnen die u gebruikt en uitkomsten van eerder medisch onderzoek. Het is van belang dat ernstige organische oorzaken (zoals een maagzweer of H. pylori-infectie) eerst door uw huisarts zijn uitgesloten. Acupunctuur werkt aanvullend aan reguliere medische zorg.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Tijdens de behandeling worden naalden geplaatst op punten op de buik (ST21, CV12), de armen en handen (PC6, ST36) en soms de rug. Buikacupunctuur voor maagklachten vereist een ontspannen lighouding; veel patiënten vallen bijna in slaap tijdens de sessie. Bij spanningsgerelateerde maagklachten voegen we ook punten toe die het autonome zenuwstelsel kalmeren.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig bij maagklachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij acute maagklachten (bijv. na een periode van veel stress of een virale gastritis) zijn 3 tot 5 behandelingen vaak voldoende voor merkbare verbetering. Bij chronische maagklachten die al maanden of jaren bestaan, is een behandelreeks van 8 tot 10 sessies realistischer.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                We combineren de behandelingen met voedingsadvies en stressmanagementtips die specifiek zijn voor uw klachtenpatroon. Bij functionele dyspepsie of PDS die tegelijkertijd voorkomt, stemmen we het behandelplan af op beide klachtenbeelden tegelijk — wat tijd en geld bespaart.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij maagklachten geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Functionele dyspepsie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Chronische misselijkheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Maagzuur en refluxklachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Stressgerelateerde maagklachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Opgeblazen gevoel en vol zitten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Gastritis en maagontsteking (na uitsluiting H. pylori)</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/maagklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over maagklachten (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-reflux" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij reflux</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-prikkelbare-darm-syndroom" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij prikkelbare darm syndroom</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-buikpijn" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij buikpijn</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij maagklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Wij behandelen regelmatig patiënten met maagklachten en andere spijsverteringsproblemen uit de gehele regio. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft, Zaandijk of Amsterdam-Noord</strong>? Dan bent u snel bij ons voor een gericht gesprek en behandeling.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij maagklachten
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij maagklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur is een effectieve behandeling voor functionele maagklachten zoals misselijkheid, maagpijn, opgeblazen gevoel en zuurbranden. Door de maaglediging te reguleren, spasmen te verlichten en de zuurproductie te normaliseren, kunnen maagklachten significant verbeteren. Acupunctuur werkt aanvullend aan dieetaanpassingen en reguliere behandeling.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Welke maagklachten behandelt acupunctuur?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Wij behandelen functionele dyspepsie, misselijkheid, maagzuur en reflux, gastritis, spastische maag, een vol gevoel na het eten, belachte oprispingen en stressgerelateerde maagklachten.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk ik verbetering van maagklachten met acupunctuur?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Veel patiënten ervaren al na 3 tot 5 behandelingen merkbare verlichting van misselijkheid en maagpijn. Voor structurele verbetering van chronische maagklachten adviseren wij een behandelreeks van 8 tot 10 sessies.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur helpen als aanvulling op maagmedicatie?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur kan goed worden gecombineerd met maagmedicatie zoals protonpompremmers of antacida. Veel patiënten rapporteren dat ze dankzij acupunctuur hun medicijnengebruik kunnen verminderen, altijd in overleg met hun huisarts of specialist.
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
                  Rust in uw maag herstellen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw maagklachten kan verlichten. U kunt eenvoudig online een tijd kiezen of ons direct bereiken via WhatsApp.
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_maagklachten"
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
