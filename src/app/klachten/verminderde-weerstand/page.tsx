import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Verminderde Weerstand Zaandam | Immuunsysteem Versterken",
  description: "Last van een verminderde weerstand, veel verkoudheden of trage genezing? Acupunctuur versterkt het immuunsysteem op natuurlijke wijze. Praktijk in Zaandam.",
  keywords: ["verminderde weerstand", "immuunsysteem versterken", "acupunctuur weerstand", "vaak ziek", "immuunsysteem acupunctuur Zaandam", "wei qi"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/verminderde-weerstand",
      name: "Acupunctuur bij Verminderde Weerstand",
      description: "Informatie over het versterken van het immuunsysteem via acupunctuur bij verminderde weerstand en frequente infecties.",
      about: [{ "@type": "MedicalCondition", name: "Verminderde weerstand" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Verminderde weerstand" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe snel merk ik resultaat van acupunctuur bij een verminderde weerstand?",
          acceptedAnswer: { "@type": "Answer", text: "De meeste mensen merken na drie tot vijf behandelingen een verbetering in hun energieniveau en veerkracht. Een volledig immuunsysteem opbouwen vergt wat meer tijd; reken op een behandeltraject van zes tot tien sessies, afhankelijk van uw situatie." },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur worden gecombineerd met andere behandelingen voor het immuunsysteem?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, acupunctuur werkt uitstekend als aanvulling op reguliere medische zorg, voedingsadvies en leefstijlaanpassingen. Informeer uw huisarts altijd over complementaire behandelingen die u volgt." },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur bij verminderde weerstand vergoed door de zorgverzekering?",
          acceptedAnswer: { "@type": "Answer", text: "Acupunctuur wordt vergoed vanuit de aanvullende verzekering. De hoogte van de vergoeding verschilt per verzekeraar en polis. Controleer uw polisvoorwaarden of neem contact op met uw zorgverzekeraar." },
        },
        {
          "@type": "Question",
          name: "Welke leefstijladviezen geeft u naast de acupunctuurbehandeling?",
          acceptedAnswer: { "@type": "Answer", text: "Naast naalden bespreken we voeding, slaap, beweging en stressmanagement. Vanuit de Traditionele Chinese Geneeskunde heeft elk seizoen specifieke aandachtspunten voor uw weerstand. Deze adviezen zijn altijd afgestemd op uw persoonlijke situatie." },
        },
      ],
    },
  ],
};

export default function VerminderdWeerstandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content">

        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Welke klachten</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/klachten/immuunsysteem-herstel" className="hover:text-[#1F3A36] transition-colors">Immuunsysteem &amp; herstel</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Verminderde weerstand</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Immuunsysteem &amp; herstel</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Verminderde Weerstand in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Bent u vaak verkouden, herstelt u langzaam van infecties of voelt u zich kwetsbaar bij elke virusronde? Een verminderde weerstand kan uw dagelijks leven flink beïnvloeden. Acupunctuur biedt een gerichte, natuurlijke aanpak om uw immuunsysteem van binnenuit te versterken.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij verminderde weerstand?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur versterkt het immuunsysteem door de productie van natural killer cells en T-lymfocyten te stimuleren, het stresshormoon cortisol te verlagen en de slaapkwaliteit te verbeteren. Effectief bij mensen die frequent ziek zijn, lang herstellen of een verminderde vitaliteit ervaren.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is een verminderde weerstand?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Een verminderde weerstand, ook wel een verzwakt immuunsysteem genoemd, betekent dat het lichaam minder goed in staat is om bacteriën, virussen en andere ziekteverwekkers het hoofd te bieden. Het gevolg is dat u vaker ziek wordt dan anderen in uw omgeving, dat infecties langer duren en dat u na ziekte moeilijk uw normale energieniveau terugvindt.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">De oorzaken zijn divers: chronische stress put de bijnieren en het immuunsysteem uit, slaaptekort vermindert de aanmaak van afweercellen, een eenzijdige voeding levert onvoldoende bouwstoffen en ook hormonale schommelingen of een ingrijpende ziekte kunnen het immuunsysteem langdurig verzwakken.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Acupunctuur richt zich niet alleen op het symptoom — de frequente infecties — maar op het herstel van de onderliggende balans in het lichaam. Dat maakt het een waardevolle aanvulling op reguliere medische zorg bij mensen die merken dat hun weerstand structureel tekortschiet.</p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelvoorkomende symptomen</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Meer dan drie à vier verkoudheden per jaar</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Infecties die langer duren dan normaal</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Aanhoudende vermoeidheid na ziekte</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Gevoeligheid voor seizoensgebonden virussen</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Trage wondheling of huidproblemen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mogelijke oorzaken</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Langdurige stress of overbelasting</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Chronisch slaaptekort</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Voedingstekorten (vitamine D, zink, ijzer)</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Herstelperiode na ziekte of operatie</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Hormonale disbalans of schildklierproblemen</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur kan helpen</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de Traditionele Chinese Geneeskunde wordt de afweer beschreven als het <em>wei qi</em> — de verdedigingsenergie die het lichaamsoppervlak bewaakt en indringers buiten houdt. Een zwak wei qi ontstaat wanneer de long en milt niet voldoende qi produceren. De long is verantwoordelijk voor de verspreiding van verdedigingsenergie; de milt voor de aanmaak ervan uit voeding. Door specifieke acupunctuurpunten op de long-, milt- en maagmeridiaan te stimuleren, wordt de wei qi versterkt en de vatbaarheid voor externe pathogenen verminderd.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">NK-celactiviteit:</strong> onderzoek toont aan dat acupunctuur de activiteit van natural killer-cellen verhoogt, een belangrijke eerste verdedigingslinie tegen virussen en tumorcellen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">T-celregulatie:</strong> acupunctuur helpt de balans tussen pro-inflammatoire en regulerende T-cellen te herstellen, wat chronische activatie van het immuunsysteem tegengaat.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Cortisolreductie:</strong> door het verlagen van stresshormonen als cortisol vermindert acupunctuur de immunosuppressieve werking van chronische stress, waardoor het immuunsysteem beter kan functioneren.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat kunt u verwachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Tijdens het eerste consult bespreken we uitgebreid uw klachten, leefstijl, voedingspatroon en voorgeschiedenis. Op basis hiervan stel ik een persoonlijk behandelplan op. De behandeling richt zich op het versterken van de relevante meridianen, het reguleren van het zenuwstelsel en het verbeteren van de algehele vitaliteit.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Voor het opbouwen van een structureel betere weerstand adviseer ik doorgaans een reeks van zes tot tien behandelingen, aanvankelijk wekelijks en later tweewekelijks. Veel mensen kiezen daarna voor een seizoensgebonden onderhoudsbehandeling — met name in de herfst — om hun immuunsysteem voor de wintermaanden te versterken.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is dit geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die elk jaar meerdere keren ziek worden</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Personen in herstel na een zware infectie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met stress-gerelateerde immuunproblemen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Iedereen die preventief de weerstand wil versterken</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Behandeling in Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Of u nu preventief uw weerstand wilt versterken of al langere tijd last heeft van frequente infecties — u bent van harte welkom voor een kennismakingsgesprek.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/immuunsysteem-herstel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Immuunsysteem &amp; herstel overzicht</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Alle klachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/herstel-na-ziekte" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Herstel na ziekte</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/vermoeidheid" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Vermoeidheid</Link>
              </div>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk ik resultaat van acupunctuur bij een verminderde weerstand?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">De meeste mensen merken na drie tot vijf behandelingen een verbetering in hun energieniveau en veerkracht. Een volledig immuunsysteem opbouwen vergt wat meer tijd; reken op een behandeltraject van zes tot tien sessies, afhankelijk van uw situatie.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur worden gecombineerd met andere behandelingen voor het immuunsysteem?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur werkt uitstekend als aanvulling op reguliere medische zorg, voedingsadvies en leefstijlaanpassingen. Informeer uw huisarts altijd over complementaire behandelingen die u volgt.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur bij verminderde weerstand vergoed door de zorgverzekering?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Acupunctuur wordt vergoed vanuit de aanvullende verzekering. De hoogte van de vergoeding verschilt per verzekeraar en polis. Controleer uw polisvoorwaarden of neem contact op met uw zorgverzekeraar.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Welke leefstijladviezen geeft u naast de acupunctuurbehandeling?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Naast naalden bespreken we voeding, slaap, beweging en stressmanagement. Vanuit de Traditionele Chinese Geneeskunde heeft elk seizoen specifieke aandachtspunten voor uw weerstand. Deze adviezen zijn altijd afgestemd op uw persoonlijke situatie.</div>
              </details>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
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

        {/* Gerelateerde klachten */}
        <section className="py-16 bg-white border-b border-[#1F3A36]/10">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-2 text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Gerelateerde klachten
            </h2>
            <p className="text-sm text-[#1F3A36]/60 font-light text-center mb-8">
              Acupunctuur helpt ook bij deze verwante klachten
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: "/klachten/immuunsysteem-herstel", label: "Immuunsysteemherstel" },
                { href: "/klachten/chronische-vermoeidheid", label: "Chronische Vermoeidheid" },
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/verkoudheid", label: "Verkoudheid" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="klacht-card-link flex items-center justify-between gap-2 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/10 rounded-xl px-5 py-4 transition-colors duration-200 group"
                >
                  <span className="text-sm font-medium text-[#1F3A36]">{item.label}</span>
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#4A6559] text-base shrink-0 transition-transform duration-200" />
                </Link>
              ))}
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
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Klaar voor een eerste stap?</h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Wilt u uw weerstand versterken en minder snel ziek worden? Plan een vrijblijvend eerste gesprek en ontdek wat acupunctuur voor u kan betekenen.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_weerstand" title="Maak een afspraak" />
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
