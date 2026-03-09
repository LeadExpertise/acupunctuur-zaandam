import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur voor Vitaliteit | Acupunctuur Zaandam",
  description: "Voel u weer energiek en levendig. Acupunctuur Zaandam ondersteunt uw vitaliteit, verbetert de Qi-circulatie, stimuleert het immuunsysteem en herstelt uw mentale en fysieke energie. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur vitaliteit", "acupunctuur vitaliteit Zaandam", "acupunctuur energie verbeteren", "acupunctuur preventief", "acupunctuur weerstand verhogen Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-vitaliteit",
      name: "Acupunctuur voor Vitaliteit | Acupunctuur Zaandam",
      description: "Preventieve acupunctuurbehandeling in Zaandam om uw vitaliteit te ondersteunen, de energiestroom te herstellen, het immuunsysteem te versterken en de algehele levenskwaliteit te verbeteren.",
      about: [{ "@type": "MedicalCondition", name: "verminderde vitaliteit" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "verminderde vitaliteit" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur mijn vitaliteit en energie verbeteren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur wordt wereldwijd gebruikt voor preventieve en vitaliteitsgerichte doeleinden. De behandeling richt zich op het herstellen van de vrije doorstroming van Qi (levensenergie) door de meridianen, het versterken van orgaanfuncties en het ondersteunen van het immuunsysteem. Veel mensen die zich uitgeput, futloos of mentaal moe voelen zonder duidelijke medische oorzaak, ervaren na een behandelreeks meer energie, beter slaap en een positievere stemming.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het seizoensgewijze tune-up concept in de Chinese geneeskunde?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In de traditionele Chinese geneeskunde wordt het jaar ingedeeld in vijf seizoenen, elk gekoppeld aan specifieke organen en energiepatronen. In het voorjaar domineert de Lever-energie (vernieuwen, plannen maken), in de herfst de Long-energie (loslaten, bescherming). Een seizoensgewijze tune-up behandelt de bijbehorende organen preventief, voor klachten ontstaan. Veel mensen komen twee keer per jaar voor een onderhoudssessie om met de seizoenswisseling mee te bewegen en de weerstand op peil te houden.",
          },
        },
        {
          "@type": "Question",
          name: "Voor wie is vitaliteitsacupunctuur geschikt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vitaliteitsacupunctuur is geschikt voor mensen die zich chronisch moe voelen, weinig enthousiasme of levensenergie ervaren, snel ziek worden, moeilijk herstellen van ziekte of stress, of die preventief hun gezondheid willen ondersteunen. Ook mensen die na een drukke periode willen bijkomen, of die aan het begin van een nieuw seizoen hun energie willen opladen, profiteren van deze behandelingen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt vitaliteitsacupunctuur vergoed door de zorgverzekeraar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, ook voor vitaliteits- en preventieve doeleinden, zonder aantasting van uw eigen risico. Wij adviseren de polis van uw verzekeraar te raadplegen voor de exacte vergoedingsregeling.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur voor Vitaliteit", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-vitaliteit" },
      ],
    },
  ],
};

export default function VitaliteitPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur voor Vitaliteit</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Leefstijl &amp; Ondersteuning</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur voor Vitaliteit in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Voelt u zich regelmatig moe zonder duidelijke reden? Ontbreekt u aan de energie om te genieten van wat het leven biedt? Of wilt u preventief uw gezondheid ondersteunen en met meer veerkracht door het jaar? Acupunctuur voor vitaliteit richt zich op het herstellen van uw levensenergie, het optimaliseren van orgaanfuncties en het aanwakkeren van uw natuurlijke vitaliteit &mdash; zodat u zich werkelijk goed voelt, van binnen en van buiten.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/vitaliteit" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over vitaliteit</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat is verminderde vitaliteit */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is verminderde vitaliteit?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Vitaliteit is meer dan de afwezigheid van ziekte. Het is het gevoel dat u energie heeft, mentaal helder bent, gemotiveerd wakker wordt en met veerkracht omgaat met de uitdagingen van het dagelijkse leven. Wanneer vitaliteit ontbreekt, ervaart u een subtiele maar aanhoudende uitputting die moeilijk te benoemen is: u slaapt genoeg, maar voelt u niet uitgerust. U heeft geen specifieke klacht, maar voelt dat er iets niet klopt.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                In onze moderne samenleving is verminderde vitaliteit bijzonder wijdverbreid. Chronische stress, slechte slaapkwaliteit, voedingspatronen, weinig beweging en overprikkeling door digitale media putten het systeem langzaam maar zeker uit. Reguliere geneeskunde heeft voor deze &ldquo;grijze zone&rdquo; van gezondheid vaak weinig te bieden; acupunctuur daarentegen blinkt juist uit in het fijn afstemmen en versterken van de algehele gezondheid.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Chronische vermoeidheid zonder medische oorzaak</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">U bent uitgerust maar voelt u moe. Bloedonderzoek toont niets bijzonders aan, maar uw energieniveau is structureel laag. Dit is een klassiek teken van Qi-defici&euml;ntie in de Chinese geneeskunde.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Gebrek aan enthousiasme en levenslust</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Weinig zin in dingen die u normaal leuk vindt, moeite om te genieten, een gevoel van apathie of leegte. Vanuit TCG duidt dit op een verzwakking van Shen (geesteskracht) en Hart-energie.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Verminderde weerstand en langzaam herstel</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Snel ziek worden, moeilijk herstellen van verkoudheid of griep, of het gevoel dat uw lichaam weinig reserves heeft. Dit wijst op een verzwakking van de Wei Qi (beschermende energie) en de Long- en Miltfunctie.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Mentale nevel en concentratieproblemen</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Moeite met helder denken, vergeetachtigheid, gebrek aan mentale scherpte of concentratie. In TCG een teken van onvoldoende Qi en Bloed om de hersenen (Shen) te voeden.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur de vitaliteit herstelt
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Chinese geneeskunde is vitaliteit het resultaat van een harmonieuze samenwerking tussen drie fundamentele energiebronnen: Jing (constitutionele essentie, geërfd van de ouders), Qi (functionele levensenergie, aangevuld door voeding en lucht) en Shen (geesteskracht en bewustzijn). Wanneer &eacute;&eacute;n van deze drie verzwakt raakt &mdash; door overbelasting, slechte voeding, emotionele stress of onvoldoende rust &mdash; daalt de algehele vitaliteit. Acupunctuur versterkt de Qi-productie door het tonificeren van de Milt (spijsvertering), de Long (ademhaling) en de Nieren (essentie), en herstelt de vrije doorstroming door geblokkeerde meridianen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Het seizoensgewijze tune-up concept</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                    Een van de meest waardevolle toepassingen van traditionele Chinese geneeskunde is de preventieve, seizoensgebonden behandeling. In de klassieke Chinese geneeskunde wordt het jaar verdeeld in vijf fasen, elk verbonden met specifieke organen en energetische kwaliteiten:
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Lente (Hout &mdash; Lever en Galblaas):</strong> Tijd van vernieuwing en plannen maken. De Lever-energie moet vrij kunnen stromen; stagnatie uit zich in prikkelbaarheid, spanning en vermoeidheid. Een lentebehandeling ondersteunt de transitie naar meer activiteit.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Zomer (Vuur &mdash; Hart en Dunne Darm):</strong> Hoogtepunt van energie en expressie. De Hartenergie voorziet de geest van vreugde en helderheid; uitputting leidt tot rusteloosheid of slapeloosheid.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Herfst (Metaal &mdash; Long en Dikke Darm):</strong> Tijd van loslaten en naar binnen keren. De Longenergie beschermt tegen externe pathogenen; een herfstbehandeling versterkt de weerstand voor de winterperiode.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Winter (Water &mdash; Nieren en Blaas):</strong> Tijd van rust en herstel. De Nieren bewaren de diepste essentie (Jing); overbelasting in de winter leidt tot uitputting en verminderde levenskracht.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische mechanismen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Regulering van het autonome zenuwstelsel:</strong> Acupunctuur activeert het parasympathische zenuwstelsel (rust en herstel), verlaagt cortisolspiegels en bevordert diep herstel &mdash; essentieel voor het aanvullen van energiereserves.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Verbetering van de slaapkwaliteit:</strong> Door regulering van melatonine-productie en het kalmeren van een overactief zenuwstelsel bevordert acupunctuur een diepere, meer herstellende slaap &mdash; de belangrijkste bron van vitaliteit.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Immunomodulatie:</strong> Acupunctuur stimuleert de aanmaak van Natural Killer-cellen en T-lymfocyten, wat de afweer versterkt en de weerstand tegen infecties verbetert.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Optimalisering van de spijsvertering:</strong> Een gezonde Milt- en Maagfunctie (in TCG termen) zorgt voor optimale opname van voedingsstoffen, wat direct bijdraagt aan de energieproductie in het lichaam.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Hormonale balans:</strong> Via het hypothalamus-hypofyse-as beïnvloedt acupunctuur de afgifte van hormonen die energie, stemming en stressrespons reguleren, waaronder cortisol, DHEA en schildklierhormonen.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hoe ziet een behandeling eruit */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een vitaliteitsbehandeling eruit?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De eerste consultatie begint met een uitgebreide intake. We bespreken niet alleen uw klachten, maar uw gehele leefstijl: hoe is uw slaap, uw spijsvertering, uw stressniveau, uw emotionele toestand en uw energiepatroon door de dag? We kijken ook naar de tong en voelen de pols &mdash; beide geven in de Chinese geneeskunde waardevolle informatie over de toestand van uw organen en de kwaliteit van uw Qi en Bloed.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Op basis van deze diagnose stellen we een persoonlijk behandelplan op. De acupunctuurpunten worden zorgvuldig geselecteerd om de zwakste schakels in uw energiesysteem te versterken: tonificatiepunten voor Qi-opbouw, Shu-punten op de rug voor orgaanondersteuning, en Yuan-bronpunten voor diepe vitaliteitsopbouw.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Afhankelijk van uw situatie kan de behandeling worden aangevuld met moxibustie (warmtebehandeling met moxa-staf) op specifieke tonificatiepunten, wat bijzonder effectief is bij Qi- en Yang-defici&euml;ntie. We geven ook adviezen mee over voeding, slaaphygi&euml;ne en eenvoudige oefeningen die uw vitaliteit tussen de sessies door ondersteunen.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Voor een merkbare verbetering van vitaliteit adviseren wij een initieel traject van <strong className="font-medium text-[#1F3A36]">6 tot 10 behandelingen</strong>, wekelijks of tweewekelijks. Vitaliteitsklachten zijn vaak het resultaat van een langdurig opgebouwde uitputting; herstel vraagt tijd en consistentie.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Na de behandelreeks kiezen veel cli&euml;nten voor een onderhoudsschema: een sessie per maand of per seizoen om de vitaliteit op peil te houden en de overgang naar nieuwe seizoenen soepel te laten verlopen. Dit seizoensgewijze onderhoud is een van de meest waardevolle en tijdseffici&euml;nte manieren om uw gezondheid preventief te ondersteunen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Sommige mensen kiezen voor een intensief vitaliteitsprogramma van 3 tot 4 sessies in twee weken als een soort &ldquo;reset&rdquo; na een bijzonder drukke periode, een ziekte of een stressvolle levensfase. De resultaten zijn in dat geval snel en merkbaar: meer energie, betere slaap en een helderder hoofd.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is vitaliteitsacupunctuur geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met chronische vermoeidheid zonder diagnose</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die weinig enthousiasme of levenslust ervaren</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die snel ziek worden of traag herstellen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Na een drukke periode of herstel van ziekte</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Preventieve behandeling bij seizoenswisseling</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met slaapproblemen en mentale nevel</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/vitaliteit" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over vitaliteit (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-vermoeidheid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij vermoeidheid</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-stressklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij stressklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-slaapproblemen" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij slaapproblemen</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur voor vitaliteit in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar voor de gehele regio. Wij verwelkomen regelmatig cli&euml;nten voor vitaliteits- en preventieve behandelingen uit <strong className="font-medium text-[#1F3A36]">Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Investeer in uw gezondheid &mdash; op loopafstand van uw eigen buurt.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur voor vitaliteit
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur mijn vitaliteit en energie verbeteren?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur wordt wereldwijd gebruikt voor preventieve en vitaliteitsgerichte doeleinden. De behandeling herstelt de vrije doorstroming van Qi, versterkt orgaanfuncties en ondersteunt het immuunsysteem. Veel mensen die zich uitgeput of futloos voelen zonder duidelijke medische oorzaak ervaren na een behandelreeks meer energie, betere slaap en een positievere stemming.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wat is het seizoensgewijze tune-up concept in de Chinese geneeskunde?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  In de traditionele Chinese geneeskunde wordt het jaar ingedeeld in vijf seizoenen, elk gekoppeld aan specifieke organen en energiepatronen. In het voorjaar domineert de Lever-energie (vernieuwen, plannen), in de herfst de Long-energie (loslaten, bescherming). Een preventieve tune-up behandeling met de seizoenen mee ondersteunt de organen v&oacute;&oacute;r klachten ontstaan. Veel mensen komen twee keer per jaar voor een onderhoudssessie om de weerstand op peil te houden.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Voor wie is vitaliteitsacupunctuur geschikt?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Vitaliteitsacupunctuur is geschikt voor mensen die chronisch moe zijn, weinig enthousiasme of levensenergie ervaren, snel ziek worden, moeilijk herstellen van stress of ziekte, of die preventief hun gezondheid willen ondersteunen. Ook mensen die na een drukke periode willen bijkomen of bij seizoenswisseling extra ondersteuning zoeken profiteren van deze behandelingen.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt vitaliteitsacupunctuur vergoed door de zorgverzekeraar?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, ook voor vitaliteits- en preventieve doeleinden, zonder aantasting van uw eigen risico. Wij adviseren de polis van uw verzekeraar te raadplegen voor de exacte vergoedingsregeling.
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
                  Klaar om uw vitaliteit te herstellen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Voel u weer energiek, helder en levendig. Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw levensenergie herstelt en uw weerstand versterkt.
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_vitaliteit"
                      title="Maak een afspraak"
                      loading="lazy"
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
