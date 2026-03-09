import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Endometriose & PCOS | Acupunctuur Zaandam",
  description: "Last van endometriose of PCOS? Acupunctuur Zaandam biedt gerichte behandeling voor pijn, hormonale disbalans en vruchtbaarheidsproblemen. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur endometriose", "acupunctuur PCOS", "acupunctuur endometriose Zaandam", "PCOS behandeling acupunctuur", "acupunctuur polycysteus ovarium"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-endometriose-pcos",
      name: "Acupunctuur bij Endometriose & PCOS | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor endometriose en PCOS in Zaandam. Verlicht pijn, herstel hormonale balans en ondersteun de vruchtbaarheid.",
      about: [{ "@type": "MedicalCondition", name: "endometriose en PCOS" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "endometriose en PCOS" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij endometriose?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan de pijnklachten die gepaard gaan met endometriose aanzienlijk verlichten. Door de Qi-stroom te reguleren, ontsteking te verminderen en de hormoonhuishouding te ondersteunen, helpt acupunctuur bij pijnlijke menstruaties, bekkenpijn en de vermoeidheid die endometriose vaak met zich meebrengt.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij PCOS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij PCOS richt acupunctuur zich op het reguleren van de menstruatiecyclus, het verlagen van androgenen en het verbeteren van de insulinegevoeligheid. Klinische studies en de praktijkervaring laten zien dat regelmatige acupunctuur de cyclus regelmatiger maakt en bijdraagt aan een betere hormonale balans.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe lang duurt het voordat ik verbetering merk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij endometriose en PCOS is een behandeltraject van 3 tot 6 maanden doorgaans nodig voor duurzame verbetering. Veel vrouwen merken al na 4 tot 6 behandelingen een verschil in de pijnintensiteit en de regelmaat van de cyclus. Hormoonbalans herstel vraagt meer tijd dan acute pijnverlichting.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij endometriose of PCOS vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste aanvullende verzekeringen vergoeden acupunctuurbehandelingen, ook voor endometriose en PCOS. Controleer uw polisvoorwaarden of neem contact met ons op.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Endometriose & PCOS", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-endometriose-pcos" },
      ],
    },
  ],
};

export default function EndometriosePcosPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Endometriose &amp; PCOS</span>
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
              Acupunctuur bij Endometriose &amp; PCOS in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Endometriose en PCOS zijn complexe hormonale aandoeningen die het dagelijks leven ingrijpend kunnen beïnvloeden. Acupunctuur biedt een veilige, natuurlijke aanvulling op de reguliere behandeling: het verlicht pijn, herstelt de hormonale balans en ondersteunt de vruchtbaarheid vanuit een holistische benadering.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/endometriose-pcos" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over endometriose &amp; PCOS</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn endometriose en PCOS */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn endometriose en PCOS precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Endometriose is een chronische aandoening waarbij baarmoederslijmvliesachtig weefsel buiten de baarmoeder groeit — op eierstokken, eileiders, de darm of het bekkenperitoneum. Dit weefsel reageert op hormonen zoals de baarmoederwand dat doet: het zwelt op en bloeit maandelijks, maar het bloed heeft geen uitweg. Het gevolg is pijn, ontsteking en littekenweefsel.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                PCOS (Polycysteus Ovariumsyndroom) is een hormonale stofwisselingsaandoening waarbij de eierstokken te veel androgenen (mannelijke hormonen) aanmaken. Dit leidt tot onregelmatige of uitblijvende eisprong, kleine cystjes op de eierstokken en een breed scala aan klachten. Zowel endometriose als PCOS kunnen de vruchtbaarheid beïnvloeden en vragen om een gerichte aanpak.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Endometriose: ernstige menstruatiepijn (dysmenorroe)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Krampen en pijn die ver boven het normale uitstijgen, soms zo hevig dat werken of bewegen onmogelijk is. De pijn kan ook buiten de menstruatie om aanwezig zijn.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">PCOS: onregelmatige of uitblijvende menstruatie</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Door het ontbreken van regelmatige eisprong is de cyclus chaotisch of afwezig. Dit maakt het moeilijk om zwanger te worden en veroorzaakt hormonale onbalans.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Vermoeidheid en uitputting</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Chronische ontsteking bij endometriose en insulineresistentie bij PCOS leiden beiden tot uitputtende vermoeidheid die het functioneren sterk beperkt.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Stemmingswisselingen en emotionele klachten</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Hormonale schommelingen bij beide aandoeningen beïnvloeden het emotioneel welzijn en kunnen leiden tot angst, prikkelbaarheid of somberheid.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij endometriose &amp; PCOS
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit de Traditionele Chinese Geneeskunde wordt endometriose gezien als een patroon van Bloed-stase: het bloed stroomt niet vrij door het bekkengebied, wat leidt tot pijn, knobbels en littekenvorming. PCOS wordt gerelateerd aan Nier- en Miltdeficiëntie gecombineerd met Phlegm-vochtigheid — een disbalans die de eisprong belemmert en vocht laat ophopen in de eierstokken. Acupunctuur beweegt het gestagneerde bloed, voedt de Nieren en transformeert het overtollige vocht, waardoor de cyclus wordt genormaliseerd en de pijn afneemt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Pijnverlichting via endorfines:</strong> Acupunctuur stimuleert de aanmaak van bèta-endorfines en enkephalines, die de pijnperceptie verminderen — effectief bij de ernstige pijn van endometriose.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Regulatie van androgenen bij PCOS:</strong> Studies tonen aan dat electro-acupunctuur de LH-secretie en androgeenniveaus kan verlagen, wat leidt tot een regelmatigere ovulatiecyclus bij vrouwen met PCOS.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Anti-inflammatoir effect:</strong> Acupunctuur moduleert pro-inflammatoire cytokinen zoals IL-6 en TNF-alfa, die verhoogd zijn bij endometriose. Dit beperkt de chronische ontstekingsrespons.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Insulinegevoeligheid bij PCOS:</strong> Electro-acupunctuur op specifieke punten verbetert de insulinegevoeligheid, een kernprobleem bij veel vrouwen met PCOS dat samenhangt met gewichtstoename en hormonale disbalans.</li>
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
                Bij de intake besteden we uitgebreid aandacht aan uw klachtenpatroon: wanneer is de pijn het hevigst, hoe ziet uw cyclus eruit, wat zijn uw hormonale klachten en hoe beïnvloedt dit uw dagelijks leven? Op basis hiervan stellen we een persoonlijk behandelplan op dat aansluit op uw specifieke TCG-patroon.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Afhankelijk van het klachtenpatroon worden naalden geplaatst op punten in het bekkengebied, de benen, de rug en soms het hoofd of de polsen. Bij endometriose richten we ons sterk op punten die bloedstase opheffen en ontstekingen reduceren. Bij PCOS werken we meer met punten die de hormonale as reguleren en de stofwisseling ondersteunen. Soms wordt electro-acupunctuur ingezet voor extra stimulatie van specifieke punten.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Endometriose en PCOS zijn chronische aandoeningen waarbij langdurige begeleiding het meest effectief is. Wij adviseren een behandeltraject van minimaal 3 maanden, met wekelijkse of tweewekelijkse sessies. Na iedere twee cycli evalueren we het verloop en passen we het behandelplan aan.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                In de eerste maand werken we intensiever (wekelijks) om een fundament te leggen. Naarmate de klachten verbeteren, kunnen behandelingen worden afgebouwd naar eens per twee weken of eens per maand als onderhoudsbehandeling. Voor vrouwen die ook zwanger willen worden, stemmen we het behandelplan af op de cyclus.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij endometriose &amp; PCOS geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met gediagnosticeerde endometriose</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met PCOS en onregelmatige cyclus</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Ernstige pijnklachten rondom de menstruatie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vruchtbaarheidswens bij endometriose of PCOS</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Bijwerkingen van hormoonsuppressieve therapie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vermoeidheid en stemmingsklachten bij PCOS</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/endometriose-pcos" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over endometriose &amp; PCOS (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-menstruatieklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij menstruatieklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-hormonale-disbalans" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij hormonale disbalans</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-vruchtbaarheidsproblemen" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij vruchtbaarheidsproblemen</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij endometriose &amp; PCOS in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar vanuit de gehele regio. Wij behandelen regelmatig vrouwen met endometriose en PCOS uit <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft, Zaandijk en Amsterdam-Noord</strong>. Wij werken complementair aan de reguliere gynaecoloog of behandelend specialist.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij endometriose &amp; PCOS
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur helpen bij endometriose?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur kan de pijnklachten die gepaard gaan met endometriose aanzienlijk verlichten. Door de Qi-stroom te reguleren, ontsteking te verminderen en de hormoonhuishouding te ondersteunen, helpt acupunctuur bij pijnlijke menstruaties, bekkenpijn en de vermoeidheid die endometriose vaak met zich meebrengt. Het vervangt niet de reguliere behandeling, maar vormt een waardevolle aanvulling.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij PCOS?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij PCOS richt acupunctuur zich op het reguleren van de menstruatiecyclus, het verlagen van androgenen en het verbeteren van de insulinegevoeligheid. Klinische studies en de praktijkervaring laten zien dat regelmatige acupunctuur de cyclus regelmatiger maakt en bijdraagt aan een betere hormonale balans.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe lang duurt het voordat ik verbetering merk?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij endometriose en PCOS is een behandeltraject van 3 tot 6 maanden doorgaans nodig voor duurzame verbetering. Veel vrouwen merken al na 4 tot 6 behandelingen een verschil in de pijnintensiteit en de regelmaat van de cyclus. Hormoonbalans herstel vraagt meer tijd dan acute pijnverlichting.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij endometriose of PCOS vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste aanvullende verzekeringen vergoeden acupunctuurbehandelingen, ook voor endometriose en PCOS. Controleer uw polisvoorwaarden of neem contact met ons op.
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
                  Verlichting bij endometriose of PCOS?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw klachten kan verlichten en uw hormoonbalans kan ondersteunen. U kunt eenvoudig online een tijd kiezen of ons direct bereiken via WhatsApp.
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_endometriose_pcos"
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
