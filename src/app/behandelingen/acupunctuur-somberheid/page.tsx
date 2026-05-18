import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/behandelingen/acupunctuur-somberheid" },
  title: "Acupunctuur bij Somberheid | Acupunctuur Zaandam",
  description: "Last van somberheid, neerslachtigheid of een gedeprimeerde stemming? Acupunctuur Zaandam biedt ondersteunende behandeling naast professionele geestelijke gezondheidszorg. Erkend acupuncturist.",
  keywords: ["acupunctuur somberheid", "acupunctuur somberheid Zaandam", "behandeling somberheid acupunctuur", "acupunctuur neerslachtigheid", "acupunctuur depressie ondersteuning Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-somberheid",
      name: "Acupunctuur bij Somberheid | Acupunctuur Zaandam",
      description: "Ondersteunende acupunctuurbehandeling bij somberheid en neerslachtigheid in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "somberheid" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "somberheid" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij somberheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan een ondersteunende rol spelen bij somberheid door de aanmaak van serotonine en dopamine te stimuleren en het energieniveau te verhogen. Bij ernstige depressie is samenwerking met een geestelijke gezondheidsprofessional altijd noodzakelijk. Acupunctuur is een aanvulling op — niet een vervanging van — professionele psychiatrische of psychologische zorg.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij somberheid en depressie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig als aanvullende behandeling bij somberheid en kan worden gecombineerd met antidepressiva of psychotherapie. We overleggen altijd met u over uw huidige behandelingen. Bij ernstige depressie of suïcidale gedachten verwijzen wij altijd door naar een psycholoog of psychiater.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij somberheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij situatieve somberheid of milde neerslachtigheid zijn doorgaans 6 tot 10 behandelingen nodig. We starten met wekelijkse sessies. Resultaat is vaak al na 4 tot 5 behandelingen merkbaar in de vorm van meer energie en een lichtere stemming.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij somberheid vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste aanvullende zorgverzekeringen vergoeden onze behandelingen. Controleer uw polisvoorwaarden of neem contact met ons op voor meer informatie.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Somberheid", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-somberheid" },
      ],
    },
  ],
};

export default function SomberheidPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Somberheid</span>
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
              Acupunctuur bij Somberheid in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Somberheid en neerslachtigheid kunnen het leven uithollen — weinig energie, geen plezier meer in dingen die u vroeger leuk vond, een gevoel van zwaarheid dat maar niet verdwijnt. Acupunctuur biedt als ondersteunende behandeling een zachte maar effectieve manier om het lichaam en de geest te ondersteunen, energieniveaus te verhogen en stemming te verlichten.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/somberheid" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over somberheid</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Disclaimer */}
            <div className="bg-[#FAF8F3] border border-[#8A6B3D]/20 rounded-lg p-5">
              <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <strong className="font-medium text-[#1F3A36]">Belangrijke opmerking:</strong> Bij ernstige depressie of suïcidale gedachten is het altijd noodzakelijk om een geestelijke gezondheidsprofessional (psycholoog, psychiater of huisarts) te raadplegen. Acupunctuur is een <em>ondersteunende</em> behandeling die kan bijdragen aan herstel, maar is geen vervanging voor professionele psychiatrische of psychologische zorg.
              </p>
            </div>

            {/* Wat is somberheid */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is somberheid en wanneer wordt het een probleem?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Somberheid is een menselijke emotie — iedereen kent perioden van neerslachtigheid, verdriet of het gevoel dat het leven zwaar aanvoelt. Dit is normaal, zeker na verlies, tegenslag of ingrijpende levensgebeurtenissen. Maar wanneer somberheid weken aanhoudt, het dagelijks functioneren belemmert en gepaard gaat met verlies van levensvreugde, energietekort en slaapproblemen, is er mogelijk sprake van een depressieve stoornis.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Acupunctuur richt zich op de lichamelijke dimensie van somberheid: het herstellen van de energiebalans, het ondersteunen van neurotransmitterproductie en het activeren van het lichaamseigen herstelproces. Het is een zachte, holistische aanpak die de gehele persoon in acht neemt.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Aanhoudende neerslachtigheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een somber gevoel dat langer dan twee weken aanhoudt en niet vanzelf verdwijnt, ook niet na positieve ervaringen of ontspanning.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Verlies van plezier (anhedonie)</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Activiteiten die vroeger vreugde brachten voelen leeg of betekenisloos aan — een van de meest kenmerkende signalen van een depressieve stemming.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Energietekort &amp; besluiteloosheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Een diepe moeheid, traagheid in denken en handelen, en moeite met het nemen van zelfs kleine beslissingen in het dagelijks leven.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Slaap- en eetproblemen</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Te veel of te weinig slapen, veranderingen in eetlust en gewicht — lichamelijke klachten die vaak hand in hand gaan met somberheid.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij somberheid
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit de TCG heeft somberheid een nauwe relatie met de Lever, het Hart en de Milt. De Lever is verantwoordelijk voor de vrije stroming van Qi en emoties door het lichaam. Wanneer de Lever &rsquo;geblokkeerd&rsquo; raakt door stress, onverwerkte emoties of frustratie, stolt de Qi en ontstaat een gevoel van zwaarheid, somberheid en onvermogen om dingen los te laten. Het Hart huisvest de Shen (geest) en het Milt genereert energie uit voedsel. Door al deze systemen in balans te brengen, verlicht acupunctuur de stemming en herstelt het de vitaliteit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Serotonine en dopamine:</strong> Acupunctuur stimuleert de aanmaak van serotonine en dopamine — de neurotransmitters die essentieel zijn voor een positieve stemming, motivatie en het gevoel van welzijn.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Endorfine-afgifte:</strong> De behandeling activeert het endogene opioïdensysteem, wat zorgt voor een directe verlichting van het gevoel van zwaarheid en een lichte euforie na de sessie.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">HPA-as normalisering:</strong> Bij depressie is de HPA-as (stressas) vaak chronisch overactief. Acupunctuur helpt cortisolspiegels te normaliseren en de stressrespons te reguleren.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontstekingsremmend effect:</strong> Neuroinflammatie speelt een rol bij depressie. Acupunctuur verlaagt pro-inflammatoire cytokinen, wat kan bijdragen aan een verbetering van de stemming.</li>
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
                De intake verloopt vertrouwelijk en zonder oordeel. We bespreken hoe lang u zich somber voelt, wat de klachten beïnvloedt, uw slaap, eetgewoonten en sociale leven. We vragen ook naar eventuele andere behandelingen of medicatie. Vanuit de TCG beoordelen we tong en pols om het energetische patroon vast te stellen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Tijdens de behandeling plaatsen we naalden op punten die de Qi-stroom bevorderen, de Shen kalmeren en de energieproductie stimuleren. De omgeving is rustig en warm — veel patiënten ervaren de sessie als een bijzonder rustgevend moment. Na de behandeling nemen we kort de tijd om te bespreken hoe u zich voelt en geven we adviezen mee voor leefstijl en voeding die de behandeling ondersteunen.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig bij somberheid?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij situatieve somberheid of milde neerslachtigheid, bijvoorbeeld na een moeilijke periode of verlies, zijn doorgaans 6 tot 8 behandelingen afdoende. We starten met wekelijkse sessies voor een snel en merkbaar effect.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij langdurige somberheid of als ondersteuning bij een depressieve stoornis is een traject van 10 tot 15 sessies gangbaar. We werken altijd in afstemming met uw huisarts of behandelend psycholoog. Acupunctuur kan naast antidepressiva worden gebruikt — er zijn geen bekende negatieve interacties.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij somberheid geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Milde tot matige somberheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Situatieve neerslachtigheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Aanvulling op antidepressiva</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Aanvulling op psychotherapie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vermoeidheid &amp; energietekort</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Winterdepressie (SAD)</span>
                </div>
              </div>
            </section>

            {/* Gerelateerde behandelingen */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/somberheid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over somberheid (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-burn-out" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij burn-out</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-angstklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij angstklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-vermoeidheid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij vermoeidheid</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij somberheid in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk biedt een rustige, veilige omgeving voor mensen die kampen met somberheid of neerslachtigheid. Wij behandelen regelmatig patiënten uit <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Heeft u vragen over hoe wij kunnen helpen? Neem gerust contact op via WhatsApp of de online agenda.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij somberheid
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij somberheid en neerslachtigheid?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur kan een ondersteunende rol spelen bij somberheid. Het stimuleert de aanmaak van serotonine en dopamine, verlaagt cortisol en activeert het lichaamseigen herstelproces. Bij ernstige depressie is professionele geestelijke gezondheidszorg altijd noodzakelijk — acupunctuur is een aanvulling, geen vervanging.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan ik acupunctuur combineren met antidepressiva?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur kan veilig worden gecombineerd met antidepressiva. Er zijn geen bekende negatieve interacties. Sommige patiënten merken dat acupunctuur de werking van medicatie ondersteunt en de bijwerkingen vermindert. Informeer altijd uw behandelend arts dat u acupunctuur ondergaat.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig bij somberheid?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij situatieve somberheid zijn doorgaans 6 tot 8 behandelingen nodig. Bij langdurige somberheid of als aanvulling op een depressiebehandeling werken we met 10 tot 15 sessies. Resultaat is vaak al na 4 tot 5 behandelingen merkbaar in de vorm van meer energie en een lichtere stemming.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij somberheid vergoed?
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
                  Ondersteuning bij herstel van somberheid
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan een afspraak en ontdek hoe acupunctuur uw stemming kan ondersteunen en uw energieniveau kan verhogen. Wij bieden een veilige, oordeelvrije omgeving voor uw herstel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_somberheid" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
