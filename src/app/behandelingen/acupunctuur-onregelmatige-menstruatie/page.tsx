import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Onregelmatige Menstruatie | Acupunctuur Zaandam",
  description: "Last van een onregelmatige cyclus, uitblijven van de menstruatie of wisselende cycluslengten? Acupunctuur Zaandam herstelt uw cyclus op een natuurlijke manier. Erkend acupuncturist.",
  keywords: ["acupunctuur onregelmatige menstruatie", "acupunctuur onregelmatige cyclus Zaandam", "behandeling onregelmatige menstruatie acupunctuur", "acupunctuur amenorroe", "acupunctuur cyclus reguleren Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-onregelmatige-menstruatie",
      name: "Acupunctuur bij Onregelmatige Menstruatie | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor onregelmatige menstruatie en cyclusklachten in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "onregelmatige menstruatie" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "onregelmatige menstruatie" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij een onregelmatige cyclus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan effectief de menstruatiecyclus reguleren. Het beïnvloedt de hypothalamus-hypofyse-gonaden-as, de hormonale regulator van de cyclus, en bevordert een regelmatige eisprong. Veel vrouwen zien na 3 tot 6 behandelingen een merkbare regulering van hun cyclus.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen als de menstruatie volledig uitblijft (amenorroe)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan een waardevolle aanvulling zijn bij functionele amenorroe, bijvoorbeeld door stress, gewichtsverlies of hormonale disbalansen. Bij secundaire amenorroe is medisch onderzoek om onderliggende oorzaken uit te sluiten altijd de eerste stap. Acupunctuur werkt dan complementair aan medische zorg.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij een onregelmatige cyclus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij onregelmatige menstruatie werken we cyclus-gebonden met doorgaans 6 tot 10 behandelingen over 2 tot 3 menstruatiecycli. Hormonale balans herstelt geleidelijk — geduld is een belangrijk onderdeel van het proces. Na regulering adviseren wij onderhoudssessies.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij onregelmatige menstruatie vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste aanvullende zorgverzekeringen vergoeden onze behandelingen. Controleer uw polisvoorwaarden voor het exacte bedrag of neem contact met ons op.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Onregelmatige Menstruatie", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-onregelmatige-menstruatie" },
      ],
    },
  ],
};

export default function OnregelmatigeMenstruatiePage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Onregelmatige Menstruatie</span>
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
              Acupunctuur bij Onregelmatige Menstruatie in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een onregelmatige cyclus — te lang, te kort, onvoorspelbaar of soms volledig uitblijvend — is een signaal van het lichaam dat de hormonale balans verstoord is. Acupunctuur werkt op de diepere regulatiemechanismen van de cyclus en ondersteunt een regelmatige, gezonde menstruatie op een geheel natuurlijke wijze.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/onregelmatige-menstruatie" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over onregelmatige menstruatie</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat is onregelmatige menstruatie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is een onregelmatige menstruatiecyclus?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Een normale menstruatiecyclus duurt gemiddeld 21 tot 35 dagen, met een menstruatieduur van 2 tot 7 dagen. Wanneer cycli korter of langer zijn, sterk wisselend zijn van duur, of wanneer de menstruatie soms geheel uitblijft, spreken we van een onregelmatige cyclus (oligomenorroe) of het uitblijven van de menstruatie (amenorroe).
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Een onregelmatige cyclus wijst bijna altijd op een verstoring in de hormonale regulatie — het fijne samenspel tussen de hypothalamus, de hypofyse en de eierstokken. Oorzaken kunnen variëren van stress en gewichtsveranderingen tot PCOS, schildklierproblemen of een doorgemaakte intensieve sportperiode. Acupunctuur ondersteunt dit regulatiesysteem van binnenuit.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Oligomenorroe (zeldzame menstruatie)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Minder dan 9 menstruaties per jaar, met cycli langer dan 35 dagen. Vaak gepaard met anovulatie (uitblijven van eisprong) en hormonale disbalans.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Polymenorroe (te frequente menstruatie)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Cycli korter dan 21 dagen, wat kan leiden tot vermoeidheid door frequent bloedverlies en hormonale instabiliteit met stemmingsschommelingen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Amenorroe (uitblijven menstruatie)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Primair (nooit een menstruatie gehad) of secundair (menstruatie stopte na een periode van regelmatige cycli). Medisch onderzoek is bij amenorroe altijd de eerste stap.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Sterk wisselende cycluslengten</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een cyclus die elke maand anders is — soms 24 dagen, dan weer 45 dagen — wijst op hormonale instabiliteit die de kwaliteit van de eisprong en het endometrium beïnvloedt.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij onregelmatige menstruatie
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit de TCG wordt de menstruatiecyclus geregeld door een samenspel van Qi, Bloed, Yin en Yang — met de Nieren als de grondslag van alles. Een gezonde cyclus vereist voldoende Nierenessence (Jing) en Bloed om het baarmoederslijmvlies te voeden, Lever-Qi die vrij stroomt om de menstruatie op gang te brengen, en een juiste Yang-impuls voor de eisprong. Verstoringen in elk van deze aspecten kunnen leiden tot een onregelmatige cyclus. Acupunctuur herstelt het evenwicht stap voor stap, afgestemd op de fase van de cyclus.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">HPG-as regulatie:</strong> Acupunctuur beïnvloedt de hypothalamus-hypofyse-gonaden-as, de centrale regulator van de menstruatiecyclus. Dit bevordert een regelmatige GnRH-pulsatiliteit en daarmee regelmatige FSH- en LH-afgifte.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Eisprong bevordering:</strong> Onderzoek toont aan dat acupunctuur de kans op ovulatie kan vergroten bij vrouwen met anovulatoire cycli, met name bij PCOS.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stressreductie:</strong> Chronische stress is een van de voornaamste oorzaken van een onregelmatige cyclus, via cortisolproductie die de geslachtshormonen onderdrukt. Acupunctuur verlaagt stresshormonen en herstelt daarmee de cyclus.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Bloedtoevoer eierstokken:</strong> Acupunctuur verbetert de doorbloeding van de eierstokken en het endometrium, wat de follikelrijping en de opbouw van het baarmoederslijmvlies ondersteunt.</li>
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
                Bij de intake inventariseren we uw complete cyclusgeschiedenis: wanneer de onregelmatigheid begon, hoe lang de cycli zijn, wat het bloedverlies eruit ziet, eventuele bijkomende klachten en uw leefstijl. We vragen ook naar stressniveau, dieet en eventuele medische diagnosen (zoals PCOS of schildklierproblematiek).
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                We stellen een cyclus-specifiek behandelplan op. Dit betekent dat we de behandeling afstemmen op de fase van uw cyclus: in de folliculaire fase (na menstruatie tot eisprong) leggen we de nadruk op het voeden van het Yin en Bloed; rond de eisprong ondersteunen we de Yang-impuls; en in de luteale fase focussen we op het circuleren van Qi en Bloed om een soepele menstruatie voor te bereiden. Deze fasegerichte aanpak leidt tot de meest effectieve cyclusregulering.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij onregelmatige menstruatie werken we over een periode van minimaal 2 tot 3 cycli, met doorgaans 2 behandelingen per cyclus (in de folliculaire fase en rond de eisprong). In totaal gaat het om 6 tot 10 sessies, afhankelijk van de ernst en de oorzaak van de onregelmatigheid.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Hormonale balans herstelt niet van de ene op de andere dag — geduld is essentieel. Na regulering van de cyclus adviseren wij maandelijkse onderhoudssessies. Bij PCOS of andere onderliggende aandoeningen is een langdurigere samenwerking gangbaar.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij onregelmatige menstruatie geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Wisselende cycluslengten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Stressgebonden cyclusverstoring</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">PCOS met onregelmatige cyclus</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Cyclusherstel na stoppen anticonceptie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Cyclusherstel na gewichtsverandering</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Zwangerschapswens &amp; cyclusoptimalisatie</span>
                </div>
              </div>
            </section>

            {/* Gerelateerde behandelingen */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/onregelmatige-menstruatie" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over onregelmatige menstruatie</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-menstruatieklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij menstruatieklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-hormonale-disbalans" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij hormonale disbalans</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-endometriose-pcos" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij endometriose &amp; PCOS</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij onregelmatige menstruatie in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk in Zaandam is gespecialiseerd in vrouwenklachten en cyclusgerelateerde aandoeningen. Wij behandelen regelmatig vrouwen met een onregelmatige cyclus uit <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Maak eenvoudig een afspraak via de online agenda of per WhatsApp.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij onregelmatige menstruatie
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij een onregelmatige cyclus?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur kan effectief de menstruatiecyclus reguleren. Het beïnvloedt de HPG-as (de hormonale regelaar van de cyclus) en bevordert een regelmatige eisprong. Veel vrouwen zien na 3 tot 6 behandelingen een merkbare regulering van hun cyclus.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur helpen bij amenorroe (uitblijven menstruatie)?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur kan een waardevolle aanvulling zijn bij functionele amenorroe door stress, gewichtsverandering of hormonale disbalans. Bij secundaire amenorroe is medisch onderzoek altijd de eerste stap om organische oorzaken uit te sluiten. Acupunctuur werkt dan complementair aan medische zorg.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig voor een regelmatige cyclus?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  We werken cyclus-gebonden: doorgaans 6 tot 10 behandelingen over 2 tot 3 menstruatiecycli. Hormonale balans herstelt geleidelijk. We stemmen de behandeling af op de fase van uw cyclus voor het meest effectieve resultaat.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij onregelmatige menstruatie vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste aanvullende zorgverzekeringen vergoeden onze behandelingen. Controleer uw polisvoorwaarden voor het exacte bedrag of neem contact met ons op.
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
                  Herstel uw cyclus op een natuurlijke manier
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan een afspraak en ontdek hoe acupunctuur uw menstruatiecyclus kan reguleren en uw hormonale balans kan herstellen. Hormoonvrij en persoonsgericht.
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_onregelmatige_menstruatie"
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
