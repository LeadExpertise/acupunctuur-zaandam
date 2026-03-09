import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Astma | Acupunctuur Zaandam",
  description: "Acupunctuur als aanvullende ondersteuning bij astma: minder aanvallen, ontspannen luchtwegen en verbetering van de ademhalingskwaliteit. Erkend & vergoed in Zaandam.",
  keywords: ["acupunctuur astma", "acupunctuur astma Zaandam", "behandeling astma", "acupunctuur astma klachten"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-astma",
      name: "Acupunctuur bij Astma | Acupunctuur Zaandam",
      description: "Acupunctuur als aanvullende behandeling bij astma ondersteunt de luchtwegen, vermindert de frequentie van aanvallen en verbetert de ademhalingskwaliteit.",
      about: [{ "@type": "MedicalCondition", name: "Astma" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Astma" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij astma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan als aanvullende therapie de luchtwegen ondersteunen en de frequentie van astma-aanvallen verminderen. Het ontspant de bronchiaalspieren, moduleert ontstekingsreacties en kalmert het zenuwstelsel. Acupunctuur vervangt echter nooit voorgeschreven astmamedicatie — bespreek altijd wijzigingen in uw medicatiegebruik met uw arts.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij astma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig als aanvullende behandeling bij astma. Wij werken met steriele eenmalige naalden. Patiënten mogen hun reguliere astmamedicatie gewoon blijven gebruiken naast de acupunctuurbehandeling.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij astma?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sommige patiënten ervaren al na twee tot vier behandelingen een verbetering in hun ademhalingspatroon en minder benauwdheidsaanvallen. Een volledige behandelcyclus van zes tot tien sessies geeft de meest duurzame resultaten.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor astma vergoed?",
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
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Astma", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-astma" },
      ],
    },
  ],
};

export default function AstmaBehandelingPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Astma</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Luchtwegen &amp; Allergieën</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij Astma in Zaandam</h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Astma belast de luchtwegen met terugkerende aanvallen van benauwdheid, piepen en hoesten. Acupunctuur biedt aanvullende ondersteuning bij astma door de luchtwegen te ontspannen, ontstekingen te moduleren en het zenuwstelsel te kalmeren — altijd naast en nooit in plaats van uw reguliere medicatie.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/astma" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over astma</Link>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <div className="bg-[#FAF8F3] border border-[#8A6B3D]/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:info-circle-linear" className="text-[#8A6B3D] text-xl shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Belangrijke mededeling:</strong> Acupunctuur is een <em>aanvullende</em> behandeling bij astma en vervangt uw voorgeschreven inhalatoren of andere astmamedicatie <strong>nooit</strong>. Bespreek altijd wijzigingen in uw medicatiegebruik met uw arts of longspecialist. Bij een acute astma-aanval dient u altijd direct uw noodmedicatie te gebruiken.</p>
                </div>
              </div>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is astma?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Astma is een chronische ontstekingsziekte van de luchtwegen waarbij de bronchiën overmatig reageren op prikkels. Bij een astma-aanval zwellen de wanden van de luchtwegen op, produceren ze extra slijm en trekken de spieren rondom de bronchiën samen — met benauwdheid, piepen en hoesten als gevolg. Astma kent perioden van relatieve rust en perioden van verergering, vaak getriggerd door allergenen, inspanning, kou of stress.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">De aandoening treft zowel kinderen als volwassenen en vereist doorgaans levenslang medicatiegebruik met luchtwegverwijders en ontstekingsremmers. Voor veel mensen blijft astma ondanks medicatie een belastende aandoening die activiteiten en levenskwaliteit beperkt. Acupunctuur kan in dit kader als zinvolle aanvulling dienen.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Mild tot matig astma</strong><span className="text-sm text-[#1F3A36]/70 font-light">Patiënten die ondanks medicatie regelmatig benauwdheidsklachten ervaren, kunnen baat hebben bij acupunctuur als aanvulling op hun behandeling.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Allergie-gerelateerd astma</strong><span className="text-sm text-[#1F3A36]/70 font-light">Astma dat wordt getriggerd door pollen, huisstofmijt of dierenallergieën, waarbij acupunctuur de allergische reactie kan dempen.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Stress-geïnduceerd astma</strong><span className="text-sm text-[#1F3A36]/70 font-light">Aanvallen die worden uitgelokt of verergerd door emotionele stress of spanning, waarbij acupunctuur het zenuwstelsel kalmeert en de aanvalsgevoeligheid verlaagt.</span></div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur helpt bij astma</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de TCG wordt astma gezien als een stoornis van de neerdalende beweging van Long-Qi, gecombineerd met een ophoping van slijm (Tan) in de luchtwegen. De oorzaak ligt vaak bij een verzwakte Long- en Nierenergie, waarbij de long niet in staat is de Qi neer te dalen en de nieren hem niet kunnen &apos;vastgrijpen&apos;. Behandeling richt zich op het transformeren van slijm, het versterken van long en nieren, en het reguleren van de Qi-stroom zodat de luchtwegen vrij kunnen ademen.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Ontspanning van bronchiaalspieren:</strong> Acupunctuur activeert het parasympathische zenuwstelsel en kan de bronchoconstrictie verminderen, waardoor de luchtwegen ruimer worden en de ademhaling gemakkelijker gaat.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Modulering van de immuunrespons:</strong> De behandeling beïnvloedt de balans tussen Th1- en Th2-immuuncellen, wat relevant is bij allergisch astma waarbij een Th2-dominantie de allergische ontsteking aanstuurt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Vermindering van stresshormonen:</strong> Door cortisol en adrenaline te reguleren, vermindert acupunctuur de stress-geïnduceerde component van astma-aanvallen en verbetert het de algehele ademhalingsregulatie.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe ziet een behandeling eruit?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Tijdens het eerste consult bespreken we de aard en ernst van uw astmaklachten, uw medicatiegebruik, triggers en andere relevante gezondheidsfactoren. We stellen een behandelplan op dat de conventionele behandeling aanvult en nooit vervangt. U hoeft uw medicatie niet te wijzigen of te stoppen — dat bespreekt u uitsluitend met uw behandelend arts.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Per sessie worden fijne naalden geplaatst op specifieke punten rondom de borst, rug, nek, onderarmen en benen. De behandeling duurt 45 tot 60 minuten en wordt door de meeste patiënten als diep ontspannend ervaren. Bijzonder nuttig zijn punten op de long- en niermeridinaan die de ademhaling reguleren en de luchtwegweerstand verlagen.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoeveel behandelingen zijn meestal nodig?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Bij astma als chronische aandoening zijn doorgaans zes tot tien behandelingen nodig voor een merkbare verbetering in de frequentie en ernst van klachten. Sommige patiënten ervaren al na twee tot vier sessies een positief effect op hun ademhalingspatroon. Seizoensgebonden onderhoudssessies — met name voor en tijdens de hooikoortsseizoenen — kunnen helpen om de luchtwegen weerbaarder te houden.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is acupunctuur bij astma geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Mild tot matig astma aanvullend op medicatie</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Allergie-gerelateerd astma</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Stress-geïnduceerd astma</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Terugkerende bronchospasmen</span></div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Meer informatie &amp; gerelateerde behandelingen</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/astma" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over astma</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-ademhalingsproblemen" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij ademhalingsproblemen</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-hooikoorts" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij hooikoorts</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-allergische-klachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij allergische klachten</span>
                </Link>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij astma in de regio Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar voor patiënten met astma. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.</p>
            </section>

          </div>
        </article>

        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over acupunctuur bij astma</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij astma?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Acupunctuur kan als aanvullende therapie de luchtwegen ondersteunen en de frequentie van astma-aanvallen verminderen. Het ontspant de bronchiaalspieren, moduleert ontstekingsreacties en kalmeert het zenuwstelsel. Acupunctuur vervangt echter nooit voorgeschreven astmamedicatie.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij astma?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur is veilig als aanvullende behandeling bij astma. Wij werken met steriele eenmalige naalden. Patiënten mogen hun reguliere astmamedicatie gewoon blijven gebruiken naast de acupunctuurbehandeling.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij astma?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Sommige patiënten ervaren al na twee tot vier behandelingen een verbetering in hun ademhalingspatroon en minder benauwdheidsaanvallen. Een volledige behandelcyclus van zes tot tien sessies geeft de meest duurzame resultaten.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor astma vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja. Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen (NVA / TCMA). Hierdoor vergoeden de meeste zorgverzekeraars in Nederland de behandeling vanuit de aanvullende verzekering. De vergoeding gaat <strong>niet</strong> ten koste van uw verplichte eigen risico.</div>
              </details>
            </div>
          </div>
        </section>

        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>Erkend door verenigingen en vergoed door verzekeraars</h2>
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

        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Ondersteun uw luchtwegen — maak een afspraak</h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Wilt u uw astmabehandeling aanvullen met acupunctuur? Maak eenvoudig online een afspraak of stuur ons een bericht via WhatsApp. Wij bespreken graag samen de mogelijkheden voor uw situatie.</p>
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
                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /></div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">Online Planner</span>
                    <div className="w-10" />
                  </div>
                  <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="animate-spin h-8 w-8 text-[#4A6559]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    </div>
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_behandeling_astma" title="Maak een afspraak" />
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
