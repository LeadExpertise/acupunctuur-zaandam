import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/behandelingen/acupunctuur-bekkenklachten", {
  title: "Acupunctuur bij Bekkenklachten",
  description: "Bekkenpijn tijdens zwangerschap, bekkenbodemklachten of symfysiolyse? Ontdek hoe acupunctuur pijn verlicht en stabiliteit herstelt bij Acupunctuur Zaandam.",
  keywords: ["acupunctuur bekkenklachten", "acupunctuur bekkenklachten Zaandam", "behandeling bekkenklachten", "acupunctuur bekkenklachten klachten"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-bekkenklachten",
      name: "Acupunctuur bij Bekkenklachten | Acupunctuur Zaandam",
      description: "Acupunctuur bij bekkenklachten verlicht bekkenpijn, ondersteunt de bekkenbodem en helpt bij symfysiolyse en chronische lagebekkenpijn.",
      about: [{ "@type": "MedicalCondition", name: "Bekkenklachten" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Bekkenklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij bekkenklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is effectief bij bekkenpijn, zowel tijdens de zwangerschap als daarbuiten. De behandeling verlicht pijn, ontspant bekkenspieren en herstelt de energiestroom in het bekkengebied. Zwangere vrouwen ervaren acupunctuur als een veilige en effectieve aanvulling op hun reguliere zorg.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij bekkenklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig bij bekkenklachten, ook tijdens de zwangerschap. Wij zijn gespecialiseerd in acupunctuur rondom zwangerschap en werken met specifieke punten die veilig zijn tijdens alle trimesters.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij bekkenklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel patiënten met bekkenklachten ervaren al na twee tot vier behandelingen merkbare pijnverlichting en betere mobiliteit. Bij chronische bekkenpijn zijn doorgaans zes tot tien sessies nodig voor duurzame verbetering.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor bekkenklachten vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden acupunctuur vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Bekkenklachten", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-bekkenklachten" },
      ],
    },
  ],
};

export default function BekkenklachtenBehandelingPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Bekkenklachten</span>
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
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij Bekkenklachten in Zaandam</h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Bekkenpijn — of het nu tijdens de zwangerschap is, door een verzwakte bekkenbodem of chronische lagebekkenpijn — kan dagelijkse activiteiten zwaar belasten. Acupunctuur verlicht pijn, ondersteunt de bekkenbodem en herstelt de balans in het bekkengebied op een veilige, natuurlijke manier.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/bekkenklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over bekkenklachten</Link>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat zijn bekkenklachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Bekkenklachten is een verzamelnaam voor pijn en instabiliteit in en rondom het bekken. Het bekken bestaat uit verschillende gewrichten — het schaambeen (symfyse), de sacro-iliacale gewrichten (SI-gewrichten) en het stuitje — die allemaal kunnen bijdragen aan pijnklachten. De pijn kan zich manifesteren als een zeurende pijn laag in de rug, pijn in de liezen of de binnenkant van de dijen, of een stekende pijn bij bepaalde bewegingen zoals traplopen, opdraaien of langdurig staan.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Bekkenklachten komen veel voor tijdens en na de zwangerschap, maar ook buiten de zwangerschap kan het bekken instabiel of pijnlijk worden — door een bevalling, een val, hormonale veranderingen of chronische overbelasting. De bekkenbodem speelt ook een centrale rol bij bekkenklachten en kan zowel te gespannen als te zwak zijn.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">Acupunctuur biedt een doeltreffende aanpak door pijn te verlichten, de doorbloeding te verbeteren en de hormonale balans te ondersteunen.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Bekkenpijn tijdens de zwangerschap</strong><span className="text-sm text-[#1F3A36]/70 font-light">Pijn in het schaambeen, de SI-gewrichten of onderrug die vaak verergert naarmate de zwangerschap vordert.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Symfysiolyse</strong><span className="text-sm text-[#1F3A36]/70 font-light">Pijnlijke loslatting van het schaambeen, leidend tot stekende pijn laag vooraan in het bekken bij elke stap.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Chronische lagebekkenpijn</strong><span className="text-sm text-[#1F3A36]/70 font-light">Aanhoudende pijn in het onderste bekkengebied buiten de zwangerschap, soms gerelateerd aan hormonale schommelingen of eerdere bevallingstrauma.</span></div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur helpt bij bekkenklachten</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de TCG wordt het bekken geassocieerd met de nieren, lever en blaas-meridinaan. Bekkenpijn wordt gezien als een stagnatie van Qi en Bloed in het onderste verwarmingsvak (Xia Jiao), soms verergerd door kou of vocht dat het bekkengebied binnendringt. Tijdens de zwangerschap vraagt de groeiende baarmoeder extra nierenergie, wat de stabiliteit van het bekken kan beïnvloeden. Acupunctuur ondersteunt de nierenergie, bevordert de doorbloeding en lost stagnatie op in het bekkengebied.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Pijnmodulatie:</strong> Acupunctuur stimuleert de afgifte van endorfines en moduleert pijnsignalen via het centrale zenuwstelsel, wat de bekkenpijn direct verlicht.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontspanning van bekkenspieren:</strong> Behandeling van triggerpoints in de bekkenbodem- en heupspieren vermindert spierspanning en vergroot de stabiliteit en mobiliteit van het bekken.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Hormonale regulatie:</strong> Acupunctuur beïnvloedt de afgifte van relaxine en oestrogeen, hormonen die de soepelheid van gewrichtsbanden in het bekken reguleren.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe ziet een behandeling eruit?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Tijdens het eerste consult bespreken we uitgebreid uw klachten, de zwangerschapsduur indien van toepassing, eerdere bevallingen en andere relevante factoren. We stellen een op maat gemaakt behandelplan op. Voor zwangere patiënten gebruiken we specifieke acupunctuurpunten die veilig zijn tijdens alle trimesters en vermijden we punten die weeën kunnen opwekken.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Per sessie worden naalden geplaatst op punten rondom het bekken, de heupen, onderbenen en voeten. Bij zwangere patiënten ligt u op uw zij in een comfortabele positie. De behandeling duurt 30 tot 45 minuten en wordt door de meeste patiënten als zeer ontspannend en pijnverlichtend ervaren.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoeveel behandelingen zijn meestal nodig?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Bij bekkenklachten tijdens de zwangerschap zijn doorgaans vier tot acht behandelingen nodig voor een significante pijnverlichting, afhankelijk van de ernst. Bij chronische bekkenklachten buiten de zwangerschap zijn zes tot tien sessies gebruikelijk. Behandelingen worden vaak wekelijks ingepland, met de mogelijkheid om de frequentie aan te passen aan uw voortgang en draagkracht.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is acupunctuur bij bekkenklachten geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Bekkenpijn tijdens zwangerschap</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Bekkenbodemklachten</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Symfysiolyse</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Chronische lagebekkenpijn</span></div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Meer informatie &amp; gerelateerde behandelingen</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/bekkenklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over bekkenklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-zwangerschapsklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij zwangerschapsklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-lage-rugklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij lage rugklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-ischias" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij ischias</span>
                </Link>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij bekkenklachten in de regio Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar voor patiënten met bekkenklachten. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.</p>
            </section>

          </div>
        </article>

        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over acupunctuur bij bekkenklachten</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij bekkenklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur is effectief bij bekkenpijn, zowel tijdens de zwangerschap als daarbuiten. De behandeling verlicht pijn, ontspant bekkenspieren en herstelt de energiestroom in het bekkengebied. Zwangere vrouwen ervaren acupunctuur als een veilige en effectieve aanvulling op hun reguliere zorg.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij bekkenklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur is veilig bij bekkenklachten, ook tijdens de zwangerschap. Wij zijn gespecialiseerd in acupunctuur rondom zwangerschap en werken met specifieke punten die veilig zijn tijdens alle trimesters.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij bekkenklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Veel patiënten met bekkenklachten ervaren al na twee tot vier behandelingen merkbare pijnverlichting en betere mobiliteit. Bij chronische bekkenpijn zijn doorgaans zes tot tien sessies nodig voor duurzame verbetering.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor bekkenklachten vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja. Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen (NVA / TCMA). Hierdoor vergoeden de meeste zorgverzekeraars in Nederland de behandeling vanuit de aanvullende verzekering. De vergoeding gaat <strong>niet</strong> ten koste van uw verplichte eigen risico.</div>
              </details>
            </div>
          </div>
        </section>

        <TrustBadges />

        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Verlichting van bekkenpijn — plan uw afspraak</h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Bekkenpijn hoeft u niet te beperken. Maak vandaag een afspraak via onze online planner of stuur ons een WhatsApp-bericht. Wij reageren snel en plannen u in zonder wachtlijst.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <BookingWidget id="behandeling_bekken" />
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
