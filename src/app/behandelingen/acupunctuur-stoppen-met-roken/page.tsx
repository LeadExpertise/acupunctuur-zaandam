import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Stoppen met Roken | Acupunctuur Zaandam",
  description: "Wilt u stoppen met roken? Acupunctuur Zaandam ondersteunt u bij het afkicken van nicotine, vermindert onthoudingsverschijnselen en verlaagt de zucht naar sigaretten. Erkend, vergoed door zorgverzekeraar.",
  keywords: ["acupunctuur stoppen met roken", "acupunctuur stoppen met roken Zaandam", "auriculotherapie roken", "acupunctuur nicotineverslaving", "stoppen met roken behandeling Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-stoppen-met-roken",
      name: "Acupunctuur bij Stoppen met Roken | Acupunctuur Zaandam",
      description: "Acupunctuur en auriculotherapie als ondersteuning bij het stoppen met roken: vermindert onthoudingsverschijnselen, verlaagt nicotinebehoefte en ondersteunt ontspanning in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "nicotineverslaving" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "nicotineverslaving" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij stoppen met roken?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan een waardevolle ondersteuning zijn bij het stoppen met roken. De behandeling richt zich op het verminderen van de zucht naar nicotine, het verlichten van onthoudingsverschijnselen zoals prikkelbaarheid en rusteloosheid, en het reguleren van de stressrespons. Met name auriculotherapie (ooracupunctuur) op specifieke punten zoals Shen Men, Long en Sympathicus wordt ingezet bij verslavingsproblematiek. Er bestaat gemengd wetenschappelijk bewijs, maar veel mensen ervaren duidelijke steun van de behandeling bij hun stoppoging.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen heb ik nodig om te stoppen met roken?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wij adviseren een traject van 5 tot 8 behandelingen voor stoppen met roken. Tijdens het eerste gesprek bespreken we uw rookgeschiedenis, uw motivatie en de momenten waarop u meest rookt. De behandelingen worden afgestemd op uw persoonlijke situatie en kunnen gecombineerd worden met adviezen over voeding, beweging en stressmanagement.",
          },
        },
        {
          "@type": "Question",
          name: "Wat zijn auriculotherapiepunten voor stoppen met roken?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij auriculotherapie voor stoppen met roken worden specifieke punten op het oor behandeld: het Shen Men-punt (kalmering en stressreductie), het Longpunt (reiniging en loslaten van de rookdrang), het Sympathicuspunt (regulering van het autonome zenuwstelsel) en het Neuropunt (vermindering van de verlangingsreactie). Deze punten worden gecombineerd met lichaamsacupunctuurpunten voor een holistisch effect.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor stoppen met roken vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico. Wij adviseren u om de polis van uw verzekeraar te raadplegen voor de exacte vergoedingsregeling.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Stoppen met Roken", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-stoppen-met-roken" },
      ],
    },
  ],
};

export default function StoppenMetRokenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Stoppen met Roken</span>
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
              Acupunctuur bij Stoppen met Roken in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Stoppen met roken is een van de beste dingen die u voor uw gezondheid kunt doen, maar de nicotineverslavingg maakt het voor velen bijzonder moeilijk. Acupunctuur &mdash; en in het bijzonder auriculotherapie (ooracupunctuur) &mdash; biedt gerichte ondersteuning bij het doorbreken van de rookgewoonte: het vermindert de zucht naar nicotine, verlicht onthoudingsverschijnselen en ondersteunt u in de eerste moeilijke weken van uw stoppoging.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/stoppen-met-roken" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over stoppen met roken</Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat is nicotineverslaving */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Waarom is stoppen met roken zo moeilijk?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Nicotine is een van de meest verslavende stoffen die er bestaan. Bij elke sigaret bereikt nicotine binnen seconden de hersenen, waar het de afgifte van dopamine stimuleert en een gevoel van ontspanning of alertheid geeft. Na verloop van tijd past de hersenen zich aan: er ontstaan meer nicotinereceptoren, waardoor u steeds meer nodig heeft om hetzelfde effect te ervaren.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Als u stopt met roken daalt het nicotinegehalte in het bloed snel, wat leidt tot typische onthoudingsverschijnselen. Deze klachten zijn de voornaamste reden waarom veel stoppogingen mislukken, zeker in de eerste twee weken. Acupunctuur richt zich specifiek op het verzachten van deze moeilijke periode.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Fysieke onthoudingsverschijnselen</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Rusteloosheid, prikkelbaarheid, hoofdpijn, slaapproblemen, verhoogde eetlust en concentratieproblemen. Deze klachten zijn het directe gevolg van de daling van nicotine in het bloed en het aanpassen van de hersenen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Psychologische afhankelijkheid</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Roken is voor velen diep verweven met dagelijkse routines: de sigaret bij de koffie, na het eten, bij stress of in de pauze. Deze gewoontepatronen zijn minstens zo moeilijk te doorbreken als de lichamelijke verslaving.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Stressreactie en emotionele regulatie</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Veel rokers gebruiken sigaretten als coping-mechanisme voor stress, angst of verveling. Het loslaten van deze strategie vereist niet alleen wilskracht, maar ook een alternatief middel om met stress om te gaan.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Gewichtstoename als belemmering</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Nicotine onderdrukt de eetlust en verhoogt het metabolisme. Na het stoppen kunnen mensen aankomen, wat een extra reden is om terug te vallen. Acupunctuur ondersteunt ook het metabolisme en vermindert overmatig eetgedrag.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij stoppen met roken
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    Vanuit de Traditionele Chinese Geneeskunde wordt roken gezien als een belasting voor de Longen, het orgaan dat verantwoordelijk is voor de opname van levensenergie (Qi) via de adem. Langdurig roken beschadigt de Longenergie en kan leiden tot Qi-defici&euml;ntie, droogte en hitte in de Long. Daarnaast raakt roken vaak verweven met emotionele patronen: stress, verdriet en onvervulde behoeften die de Hartenergie en het Shen (geesteskracht) belastten. De behandeling richt zich op het herstellen van de Longenergie, het kalmeren van het Shen en het versterken van de wilskracht (Zhi), die wordt geassocieerd met de Nieren.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Auriculotherapie: ooracupunctuur bij verslaving</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                    Auriculotherapie is een gespecialiseerde tak van acupunctuur waarbij uitsluitend punten op het oor worden gebruikt. Het oor wordt in de Chinese geneeskunde beschouwd als een microsysteem van het gehele lichaam. Voor verslavingsbehandeling worden specifieke punten ingezet die klinisch zijn vastgesteld:
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Shen Men (Hemense Poort):</strong> Centraal kalmeringspunt dat angst, prikkelbaarheid en rusteloosheid vermindert. Een van de meest gebruikte punten in de auriculotherapie.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Longpunt:</strong> Versterkt de Longenergie, ondersteunt de reiniging van de luchtwegen en vermindert het fysieke verlangen naar roken.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Sympathicuspunt:</strong> Reguleert het autonome zenuwstelsel, vermindert de stressrespons en ondersteunt ontspanning in het lichaam.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Neuropunt:</strong> Gericht op het verminderen van de verlangingsreactie (craving) en het doorbreken van de verslavingscirkel.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Endocrien punt:</strong> Ondersteunt de hormonale balans en het herstelherstelproces van de stofwisseling.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Lichaamsacupunctuur ter aanvulling</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Endorfineafgifte:</strong> Acupunctuur stimuleert de afgifte van endorfines en enkephalines, lichaamseigen stoffen die een vergelijkbaar kalmerend effect hebben als nicotine, waardoor het verlangen afneemt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stressregulatie:</strong> Door het activeren van het parasympathische zenuwstelsel verlaagt acupunctuur de cortisolspiegels en bevordert een diep gevoel van ontspanning &mdash; de toestand die veel rokers juist van een sigaret verwachten.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Smaak- en geurverandering:</strong> Bepaalde acupunctuurpunten worden traditioneel ingezet om de smaak van sigaretten onaangenamer te maken, wat de rookdrang kan verminderen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Slaapkwaliteit verbeteren:</strong> Slaapproblemen zijn een veelvoorkomend onthoudingsverschijnsel. Acupunctuur op specifieke slaappunten ondersteunt een diepere, herstellende nachtrust.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hoe ziet een behandeling eruit */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De eerste sessie begint met een uitgebreide intake. We bespreken uw rookgeschiedenis: hoe lang rookt u al, hoeveel sigaretten per dag, op welke momenten rookt u het meest en wat zijn uw voornaamste triggers? Ook uw motivatie, eerdere stoppogingen en eventuele stressklachten komen aan bod.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De eigenlijke behandeling combineert auriculotherapie met lichaamsacupunctuur. Fijne naalden worden geplaatst op specifieke oorpunten &mdash; Shen Men, Long, Sympathicus en Neuropunt &mdash; en op geselecteerde lichaamsmeridianen die de Long, het Hart en de Nieren ondersteunen. U ligt comfortabel op de behandelbank terwijl de naalden 20 tot 30 minuten op hun plek blijven.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Na de behandeling ontvangt u praktische adviezen: welke voedingsmiddelen de reiniging ondersteunen, hoe u craving-momenten kunt overbruggen en welke ademhalingsoefeningen helpen bij acute rookdrang. Sommige cli&euml;nten krijgen kleine oornaaldjes (semi-permanente naalden) mee om tussen de sessies door te stimuleren wanneer de rookdrang opkomt.
              </p>
            </section>

            {/* Hoeveel behandelingen */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Voor stoppen met roken adviseren wij een traject van <strong className="font-medium text-[#1F3A36]">5 tot 8 behandelingen</strong>. De eerste behandelingen vinden bij voorkeur wekelijks plaats, met name in de eerste twee weken na de laatste sigaret &mdash; de meest kritieke fase van het stopproces.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Veel cli&euml;nten ervaren al na de eerste of tweede behandeling een duidelijke afname van de rookdrang en minder prikkelbaarheid. Na de intensieve startfase kunnen behandelingen worden afgebouwd naar eens per twee weken en vervolgens maandelijks ter consolidering.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Het is belangrijk te benadrukken dat acupunctuur een ondersteuning is, geen magische oplossing. Uw eigen motivatie en vastberadenheid blijven het fundament van een succesvolle stoppoging. Acupunctuur maakt de weg naar stoppen aanzienlijk gemakkelijker door de lichamelijke en emotionele drempel te verlagen.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Rokers die gemotiveerd zijn te stoppen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met eerdere mislukte stoppogingen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die natuurlijke ondersteuning verkiezen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Rokers met stressklachten of slaapproblemen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Zwangere vrouwen die willen stoppen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die medicijnen of pleisters willen vermijden</span>
                </div>
              </div>
            </section>

            {/* Internal links */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/stoppen-met-roken" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over stoppen met roken (klacht pagina)</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-stressklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij stressklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-angstklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij angstklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-vitaliteit" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur voor vitaliteit</span>
                </Link>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij stoppen met roken in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar voor de gehele regio. Wekelijks begeleiden wij cli&euml;nten bij hun stoppoging die afkomstig zijn uit <strong className="font-medium text-[#1F3A36]">Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Een gezonder leven begint met de eerste stap &mdash; en die zet u dichter bij huis dan u denkt.
              </p>
            </section>

          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij stoppen met roken
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij stoppen met roken?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur &mdash; met name auriculotherapie op punten zoals Shen Men, Long en Sympathicus &mdash; kan een waardevolle ondersteuning zijn bij het stoppen met roken. De behandeling verlicht onthoudingsverschijnselen zoals prikkelbaarheid en rusteloosheid, vermindert de rookdrang en ondersteunt ontspanning. Wetenschappelijk bewijs is gemengd, maar veel mensen ervaren de behandeling als een effectieve aanvulling op hun stoppoging.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen heb ik nodig om te stoppen met roken?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Wij adviseren een traject van 5 tot 8 behandelingen. De eerste sessies vinden bij voorkeur wekelijks plaats, met name in de eerste twee weken na de laatste sigaret &mdash; de meest kritieke fase. Na de intensieve startfase worden behandelingen afgebouwd. Veel cli&euml;nten ervaren al na de eerste behandeling minder rookdrang en een rustiger gevoel.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wat zijn auriculotherapiepunten voor stoppen met roken?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  De voornaamste ooracupunctuurpunten voor stoppen met roken zijn: Shen Men (kalmering en stressreductie), het Longpunt (versterking van de Long en vermindering van rookdrang), het Sympathicuspunt (regulering van het zenuwstelsel) en het Neuropunt (vermindering van de verslavingsreactie). Deze worden gecombineerd met lichaamsacupunctuurpunten voor een holistisch effect.
                </div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor stoppen met roken vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico. Wij adviseren u de polis van uw verzekeraar te raadplegen voor de exacte vergoedingsregeling.
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
                  Klaar voor uw stoppoging?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Stoppen met roken is de beste investering in uw gezondheid. Plan vandaag nog een afspraak en ontdek hoe acupunctuur uw stoppoging ondersteunt met minder ontwenningsverschijnselen en meer rust.
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_roken"
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
