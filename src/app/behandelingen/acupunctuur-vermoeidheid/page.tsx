import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/behandelingen/acupunctuur-vermoeidheid" },
  title: "Acupunctuur bij Vermoeidheid | Acupunctuur Zaandam",
  description: "Last van aanhoudende vermoeidheid en weinig energie? Acupunctuur Zaandam behandelt vermoeidheid op een natuurlijke manier. Erkend acupuncturist, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur vermoeidheid", "acupunctuur vermoeidheid Zaandam", "behandeling vermoeidheid acupunctuur", "acupunctuur energie", "natuurlijke behandeling vermoeidheid Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-vermoeidheid",
      name: "Acupunctuur bij Vermoeidheid | Acupunctuur Zaandam",
      description: "Effectieve acupunctuurbehandeling voor vermoeidheid en energietekort in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "vermoeidheid" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "vermoeidheid" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij vermoeidheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan zeer effectief zijn bij vermoeidheid. Vanuit de Traditionele Chinese Geneeskunde wordt vermoeidheid gezien als een tekort aan Qi (levensenergie) of een disbalans in de orgaansystemen. Acupunctuur herstelt deze balans en stimuleert de aanmaak van energie. Veel patiënten ervaren al na enkele sessies een merkbare verbetering in hun energieniveau.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij vermoeidheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij alledaagse vermoeidheid zijn vaak 5 tot 8 behandelingen voldoende om een duurzame verbetering te bewerkstelligen. We starten doorgaans met wekelijkse sessies en schakelen na verbetering over naar tweewekelijkse behandelingen. De exacte duur hangt af van de ernst en de oorzaak van uw klachten.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het verschil tussen gewone vermoeidheid en chronische vermoeidheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gewone vermoeidheid treedt op na inspanning en herstelt voldoende na rust of slaap. Chronische vermoeidheid (CVS of ME) is een aandoening waarbij de vermoeidheid langdurig aanhoudt, ook na voldoende rust, en gepaard gaat met andere klachten zoals concentratieproblemen en spierpijn. Beide vormen kunnen goed behandeld worden met acupunctuur, al vraagt chronische vermoeidheid om een intensiever traject.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij vermoeidheid vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste aanvullende zorgverzekeringen de behandeling. Controleer uw polisvoorwaarden voor het exacte vergoedingsbedrag, of neem contact met ons op.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Vermoeidheid", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-vermoeidheid" },
      ],
    },
  ],
};

export default function VermoeidheidPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Vermoeidheid</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Stress, Energie &amp; Mentaal</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Vermoeidheid in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Uitgeput wakker worden ondanks een volle nacht slapen, geen energie hebben voor de dingen die u graag doet, voortdurend moe voelen zonder duidelijke reden — vermoeidheid kan uw levenskwaliteit ingrijpend beïnvloeden. Acupunctuur pakt de onderliggende oorzaak aan en helpt uw energiebalans te herstellen op een veilige, natuurlijke manier.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/vermoeidheid" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over vermoeidheid</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat is vermoeidheid */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is vermoeidheid precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Vermoeidheid is meer dan alleen moe zijn. Het is een aanhoudend gevoel van uitputting — lichamelijk, mentaal of allebei — dat niet voldoende herstelt met rust of slaap. Iedereen heeft weleens een drukke periode en voelt zich dan moe, maar wanneer vermoeidheid weken aanhoudt en uw dagelijks functioneren beïnvloedt, is er sprake van een klacht die aandacht verdient.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Vermoeidheid kan vele oorzaken hebben: langdurige stress, slaaptekort, hormonale disbalansen, voedingstekorten, emotionele overbelasting of een onderliggende aandoening. Vaak is het een combinatie van factoren. Acupunctuur behandelt de gehele persoon en richt zich op het herstellen van de onderliggende disbalans.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Lichamelijke vermoeidheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Zware benen, spierpijn, trage bewegingen en een gevoel van lood in de ledematen — ook na voldoende rust blijven deze klachten aanhouden.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Mentale vermoeidheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Concentratieproblemen, vergeetachtigheid, moeite met beslissingen nemen en een gevoel van &rsquo;hersenmist&rsquo; — mentale uitputting beïnvloedt uw prestaties en welzijn.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Emotionele vermoeidheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Gevoel van leegheid, emotionele afvlakking of het gevoel geen vreugde meer te kunnen ervaren. Vaak een signaal dat uw systeem overbelast is geraakt.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Post-activiteitsmalaise</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Extreme vermoeidheid na normale activiteiten, waarbij zelfs lichte inspanning leidt tot een disproportionele terugval in energie — een kenmerk van ernstigere vermoeidheidsklachten.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij vermoeidheid
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Traditionele Chinese Geneeskunde wordt vermoeidheid doorgaans gezien als een tekort of blokkade van Qi — de vitale levensenergie die door het lichaam stroomt via meridianen. Met name het Miltnetwerk, de Nieren en het Hart spelen een centrale rol bij het aanmaken en verdelen van energie. Wanneer deze systemen verzwakt zijn door overbelasting, slechte voeding, te weinig slaap of langdurige emotionele spanning, raakt de energieproductie verstoord. Acupunctuur stimuleert specifieke punten om de Qi-stroom te herstellen, de orgaanfunctie te versterken en het lichaam te voeden.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">HPA-as regulatie:</strong> Acupunctuur moduleert de hypothalamus-hypofyse-bijnieras, die de stressrespons reguleert. Dit helpt cortisolniveaus te normaliseren, een veelvoorkomend probleem bij chronische vermoeidheid.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Serotonine en dopamine:</strong> De behandeling stimuleert de productie van neurotransmitters die de stemming, motivatie en slaapkwaliteit verbeteren — direct gekoppeld aan energieniveaus.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Slaapkwaliteit:</strong> Acupunctuur bevordert de productie van melatonine en verbetert de slaapcyclus, waardoor het herstel tijdens de nacht effectiever wordt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Mitochondriale functie:</strong> Recent onderzoek suggereert dat acupunctuur de cellulaire energieproductie (ATP-synthese in mitochondriën) kan bevorderen, wat direct bijdraagt aan het gevoel van meer energie.</li>
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
                Bij de eerste afspraak voeren we een uitgebreide intake uit. We bespreken uw klachten in detail: wanneer de vermoeidheid begon, wat het erger of beter maakt, uw slaappatroon, eetgewoonten, stressniveau en levensomstandigheden. Vanuit de TCG beoordelen we ook uw tong en pols om het energetische patroon vast te stellen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                De behandeling zelf is ontspannend en veelal diep rustgevend. We plaatsen dunne, steriele naalden op zorgvuldig geselecteerde acupunctuurpunten — vaak op de armen, benen, buik en rug. Veel patiënten vallen tijdens de sessie in een lichte slaap of ervaren een diepe ontspanning die ze thuis moeilijk kunnen bereiken. Na de behandeling voelen velen zich rustig en licht. De naalden blijven 20 tot 30 minuten zitten.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn meestal nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij situatieve of milde vermoeidheid — ontstaan door stress, een drukke periode of slaaptekort — zijn doorgaans 4 tot 6 behandelingen voldoende om het energieniveau duurzaam te herstellen. We plannen de eerste sessies wekelijks.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij meer hardnekkige vermoeidheid die al langere tijd aanhoudt, is een behandeltraject van 8 tot 12 sessies gangbaar. Gedurende het traject evalueren we regelmatig de voortgang. Veel patiënten kiezen na succesvolle behandeling voor maandelijkse onderhoudssessies om terugval te voorkomen en hun energieniveau op peil te houden.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij vermoeidheid geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met aanhoudende moeheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Stressgebonden energietekort</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vermoeidheid na ziekte of operatie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Hormonale vermoeidheid (bijv. overgang)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vermoeidheid bij slaapproblemen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mentale uitputting &amp; overprikkeling</span>
                </div>
              </div>
            </section>

            {/* Gerelateerde behandelingen */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/vermoeidheid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over vermoeidheid (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-chronische-vermoeidheid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij chronische vermoeidheid</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-burn-out" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij burn-out</span>
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
                Acupunctuur bij vermoeidheid in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar voor patiënten uit de hele regio. Wij behandelen wekelijks mensen met vermoeidheidsklachten uit <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Plannen een afspraak is eenvoudig via de online agenda of per WhatsApp.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij vermoeidheid
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij vermoeidheid?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur kan zeer effectief zijn bij vermoeidheid. Vanuit de TCG wordt vermoeidheid gezien als een Qi-tekort of disbalans in de orgaansystemen. Acupunctuur herstelt deze balans en stimuleert de aanmaak van energie. Veel patiënten ervaren al na enkele sessies een merkbare verbetering in hun energieniveau en slaapkwaliteit.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig bij vermoeidheid?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij milde vermoeidheid zijn doorgaans 4 tot 6 behandelingen voldoende. Bij meer hardnekkige klachten adviseren wij een traject van 8 tot 12 sessies. We evalueren na elke sessie en stemmen het plan af op uw voortgang.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wat is het verschil tussen gewone en chronische vermoeidheid?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Gewone vermoeidheid treedt op na inspanning en herstelt na voldoende rust. Chronische vermoeidheid (ME/CVS) houdt langer dan zes maanden aan, ook na rust, en gaat gepaard met andere klachten. Beide vormen worden behandeld met acupunctuur, al vraagt chronische vermoeidheid om een intensiever en langer traject.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij vermoeidheid vergoed door de zorgverzekeraar?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste aanvullende zorgverzekeringen de behandelingen. Controleer uw polisvoorwaarden of neem contact met ons op voor informatie over uw specifieke verzekering.
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
                  Klaar om uw energie terug te winnen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw energiebalans kan herstellen. Kies eenvoudig een tijd in onze online agenda of neem direct contact op via WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_vermoeidheid" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
