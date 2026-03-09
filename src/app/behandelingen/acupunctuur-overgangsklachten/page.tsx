import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Overgangsklachten | Acupunctuur Zaandam",
  description: "Last van opvliegers, nachtelijk zweten of stemmingswisselingen door de overgang? Acupunctuur Zaandam biedt natuurlijke verlichting. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur overgangsklachten", "acupunctuur menopauze Zaandam", "acupunctuur opvliegers", "acupunctuur climacterium", "natuurlijke behandeling overgang"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-overgangsklachten",
      name: "Acupunctuur bij Overgangsklachten | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor overgangsklachten in Zaandam. Verlicht opvliegers, nachtelijk zweten, slaapproblemen en stemmingswisselingen op natuurlijke wijze.",
      about: [{ "@type": "MedicalCondition", name: "overgangsklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "overgangsklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij opvliegers en nachtelijk zweten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Meerdere klinische studies tonen aan dat acupunctuur de frequentie en intensiteit van opvliegers significant kan verminderen. Acupunctuur reguleert de thermoregulatie via het autonome zenuwstelsel en beïnvloedt hormoonspiegels, waardoor de typische hittegolven en nachtelijk zweten van de overgang afnemen.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur de overgang comfortabeler maken?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur pakt meerdere overgangsklachten tegelijk aan: opvliegers, slaapproblemen, stemmingswisselingen, gewrichtsklachten en vermoeidheid. Door de hormonale balans te ondersteunen en het autonome zenuwstelsel te kalmeren, maakt acupunctuur de overgang aanzienlijk comfortabeler.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur een alternatief voor hormoontherapie (HRT)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is een goede optie voor vrouwen die geen hormoontherapie willen of kunnen gebruiken vanwege contra-indicaties. Het kan ook uitstekend worden gecombineerd met HRT om bijwerkingen te verlichten. De keuze hangt af van de ernst van de klachten en persoonlijke voorkeur. Bespreek dit altijd met uw arts.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij overgangsklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij overgangsklachten adviseren we een behandelreeks van 6 tot 10 sessies. De eerste behandelingen zijn wekelijks; naarmate de klachten verbeteren, worden ze tweewekelijks of maandelijks. Veel vrouwen kiezen voor periodieke onderhoudssessies gedurende de gehele overgangsperiode.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Overgangsklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-overgangsklachten" },
      ],
    },
  ],
};

export default function OvergangsklachtenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Overgangsklachten</span>
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
              Acupunctuur bij Overgangsklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              De overgang is een natuurlijke levensfase, maar de klachten die ermee gepaard gaan kunnen het dagelijks leven ingrijpend verstoren. Acupunctuur biedt een bewezen effectieve, hormoonvrije aanpak voor opvliegers, nachtelijk zweten, slaapproblemen, stemmingswisselingen en andere overgangsklachten.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/overgangsklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over overgangsklachten</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn overgangsklachten */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn overgangsklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De overgang (menopauze) markeert het einde van de vruchtbare fase. Ze begint gemiddeld rond het 51e levensjaar, maar de perimenopauze — de aanloop — kan al jaren eerder beginnen. Tijdens deze fase daalt de productie van oestrogeen en progesteron sterk, wat een breed scala aan klachten kan veroorzaken.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Hoewel de overgang een fysiologisch normaal proces is, varieert de last enorm per vrouw. Sommige vrouwen gaan er probleemloos doorheen; anderen lijden jarenlang onder intense opvliegers, ernstige slaapverstoringen en emotionele instabiliteit. De ernst van de klachten hangt samen met genetica, leefstijl, stressniveau en constitutie.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Opvliegers en nachtelijk zweten</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Plotselinge hittegolven die het hele lichaam treffen, gevolgd door hevig zweten en rillingen. Nachtelijk zweten verstoort de slaap structureel en leidt tot uitputting.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Slaapproblemen en vermoeidheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Moeite met inslapen, doorslapen of vroeg wakker worden zijn veelvoorkomende klachten. De resulterende vermoeidheid ondermijnt het functioneren overdag.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Stemmingswisselingen en prikkelbaarheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Daling van oestrogeen beïnvloedt serotonine en dopamine, wat leidt tot prikkelbaarheid, angst, somberheid en onverklaarbare huilbuien.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Gewrichtsklachten en droge huid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Lagere oestrogeenspiegel vermindert de aanmaak van collageen en synoviaal vocht, wat leidt tot gewrichts- en spierpijn, en verdroogde huid en slijmvliezen.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij overgangsklachten
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Traditionele Chinese Geneeskunde wordt de overgang gezien als een periode waarin de Nierenergie — de fundamentele levensenergie die de vruchtbaarheid en het yin-yang-evenwicht draagt — geleidelijk afneemt. De typische overgangsklachten zoals opvliegers, nachtelijk zweten en onrust worden gezien als tekenen van Nieryin-deficiëntie: er is onvoldoende koelend Yin om de opvlammende Yang te bedaren. Acupunctuur voedt het Nieryin, kalmeert het Hart (verantwoordelijk voor de geest en slaap) en brengt het interne vuur tot rust.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Thermoregulatie via het autonome zenuwstelsel:</strong> Acupunctuur stabiliseert de temperatuurregeling door het parasympathische zenuwstelsel te activeren en de gevoeligheid van de thermoregulatoire centra in de hypothalamus te verlagen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stijging van bèta-endorfines:</strong> Dalende oestrogeenniveaus verlagen de bèta-endorfineproductie, wat de hypothalamus destabiliseert. Acupunctuur verhoogt bèta-endorfines en herstelt de stabiliteit, waardoor opvliegers minder frequent optreden.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Serotonine regulatie:</strong> Acupunctuur verhoogt serotonineactiviteit, wat bijdraagt aan betere stemming, minder angst en verbeterde slaapkwaliteit gedurende de overgang.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ondersteuning van cortisolbalans:</strong> De overgang verhoogt cortisolgevoeligheid; acupunctuur temperde de stressrespons en helpt het lichaam beter om te gaan met hormonale schommelingen.</li>
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
                Tijdens de intake inventariseren we al uw overgangsklachten: de frequentie en intensiteit van opvliegers, uw slaappatroon, stemmingsklachten, energie en eventuele lichamelijke pijn. We bespreken ook uw leefstijl, voeding en eerdere behandelingen. Vanuit de TCG beoordelen we uw pols en tong om uw constitutiepatroon te bepalen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Naalden worden geplaatst op punten die het Nieryin voeden, het Hart kalmeren, opvliegers reduceren en de slaap verbeteren. Veelgebruikte punten liggen op de voeten, benen, armen, buik en het hoofd. De behandeling duurt 45 tot 60 minuten. De meeste vrouwen ervaren de sessie als diep ontspannend en slapen de avond van de behandeling aanzienlijk beter.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig bij de overgang?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Voor de aanpak van overgangsklachten adviseren we een behandelreeks van 6 tot 10 sessies. In de eerste fase behandelen we wekelijks. Na 4 tot 6 sessies evalueren we het resultaat en bouwen we af naar tweewekelijkse behandelingen. Veel vrouwen kiezen gedurende de gehele overgangsperiode voor maandelijkse onderhoudssessies.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                De overgang duurt gemiddeld 4 tot 7 jaar. Acupunctuur biedt geen permanente oplossing voor de onderliggende hormonale verandering, maar vermindert de klachten aanzienlijk en ondersteunt het lichaam om zo soepel mogelijk door deze fase te navigeren. Periodieke behandelingen houden de verlichting in stand.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij overgangsklachten geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met frequente opvliegers</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Slaapproblemen door nachtelijk zweten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Emotionele instabiliteit en prikkelbaarheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen die geen hormoontherapie willen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Bijwerkingen van HRT verzachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Perimenopauze (aanloop naar de overgang)</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/overgangsklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over overgangsklachten (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-hormonale-disbalans" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij hormonale disbalans</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-slaapproblemen" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij slaapproblemen</span>
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
                Acupunctuur bij overgangsklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Wij begeleiden regelmatig vrouwen in de peri- en postmenopauze uit de gehele regio. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft, Zaandijk of Amsterdam-Noord</strong>? Dan bent u snel bij ons. Wij bieden een warme, begripvolle omgeving voor een vertrouwelijk gesprek over uw overgangsklachten.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij overgangsklachten
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij opvliegers en nachtelijk zweten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Meerdere klinische studies tonen aan dat acupunctuur de frequentie en intensiteit van opvliegers significant kan verminderen. Acupunctuur reguleert de thermoregulatie via het autonome zenuwstelsel en beïnvloedt hormoonspiegels, waardoor de typische hittegolven en nachtelijk zweten van de overgang afnemen.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur de overgang comfortabeler maken?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur pakt meerdere overgangsklachten tegelijk aan: opvliegers, slaapproblemen, stemmingswisselingen, gewrichtsklachten en vermoeidheid. Door de hormonale balans te ondersteunen en het autonome zenuwstelsel te kalmeren, maakt acupunctuur de overgang aanzienlijk comfortabeler.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur een alternatief voor hormoontherapie (HRT)?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur is een goede optie voor vrouwen die geen hormoontherapie willen of kunnen gebruiken vanwege contra-indicaties. Het kan ook uitstekend worden gecombineerd met HRT om bijwerkingen te verlichten. De keuze hangt af van de ernst van de klachten en persoonlijke voorkeur. Bespreek dit altijd met uw arts.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig bij overgangsklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij overgangsklachten adviseren we een behandelreeks van 6 tot 10 sessies. De eerste behandelingen zijn wekelijks; naarmate de klachten verbeteren, worden ze tweewekelijks of maandelijks. Veel vrouwen kiezen voor periodieke onderhoudssessies gedurende de gehele overgangsperiode.
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
                  Verlichting van uw overgangsklachten?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw overgangsklachten kan verlichten. U kunt eenvoudig online een tijd kiezen of ons direct bereiken via WhatsApp.
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_overgangsklachten"
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
