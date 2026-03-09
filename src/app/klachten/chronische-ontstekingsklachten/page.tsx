import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Chronische Ontstekingsklachten Zaandam",
  description: "Last van chronische ontstekingen, gewrichtsontsteking of laaggradige systemische ontsteking? Acupunctuur ondersteunt het reguleren van het immuunsysteem. Praktijk in Zaandam.",
  keywords: ["chronische ontsteking", "laaggradige ontsteking", "acupunctuur ontsteking", "reumatoïde artritis", "inflammatie", "acupunctuur Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/chronische-ontstekingsklachten",
      name: "Acupunctuur bij Chronische Ontstekingsklachten",
      description: "Informatie over het aanpakken van chronische en laaggradige ontstekingen via acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Chronische ontsteking" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Chronische ontstekingsklachten" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat is het verschil tussen een acute en chronische ontsteking?",
          acceptedAnswer: { "@type": "Answer", text: "Een acute ontsteking is een tijdelijke, gerichte reactie van het immuunsysteem op schade of infectie — zichtbaar als roodheid, zwelling en warmte. Een chronische ontsteking is een laaggradige, aanhoudende activatie van het immuunsysteem die maanden of jaren aanhoudt en vaak moeilijker te herkennen is, maar wel schade aanricht aan weefsels en organen." },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur worden ingezet naast medicatie bij reumatoïde artritis?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, acupunctuur werkt complementair aan reguliere reumatologische behandelingen. Het kan helpen pijn en stijfheid te verminderen, de bijwerkingen van medicatie te verlichten en de kwaliteit van leven te verbeteren. Overleg altijd met uw reumatoloog voordat u start." },
        },
        {
          "@type": "Question",
          name: "Hoe snel merkt u verbetering bij chronische ontstekingsklachten?",
          acceptedAnswer: { "@type": "Answer", text: "Bij chronische aandoeningen is geduld vereist. Na twee tot vier sessies rapporteren mensen doorgaans vermindering van pijn en stijfheid. Duurzame verandering in ontstekingsniveaus vergt een langer traject van acht tot twaalf sessies, afhankelijk van de aandoening." },
        },
        {
          "@type": "Question",
          name: "Welke leefstijlaanpassingen helpen bij chronische ontsteking?",
          acceptedAnswer: { "@type": "Answer", text: "Een ontstekingsremmend voedingspatroon (rijk aan omega-3, antioxidanten, vezels en arm aan suiker en bewerkte producten), voldoende slaap, stressreductie en regelmatige beweging zijn bewezen effectief. Wij bespreken deze factoren altijd als onderdeel van uw behandelplan." },
        },
      ],
    },
  ],
};

export default function ChronischeOntstekingsklachtenPage() {
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
            <span className="text-[#1F3A36]">Chronische ontstekingsklachten</span>
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
              Acupunctuur bij Chronische Ontstekingsklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Chronische ontsteking is een stille aanval op het lichaam die in verband wordt gebracht met gewrichtsaandoeningen, vermoeidheid, pijn en tal van andere gezondheidsproblemen. Acupunctuur biedt een bewezen aanpak om het immuunsysteem te moduleren en ontstekingsprocessen te reguleren.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij chronische ontstekingsklachten?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur remt chronische ontsteking door de productie van anti-inflammatoire cytokinen te stimuleren, het immuunsysteem te moduleren en oxidatieve stress te verminderen. Effectief bij systeemontsteking, artritis, chronisch pijnsyndroom en andere inflammatoire aandoeningen — ook als aanvulling op reguliere ontstekingsremmende therapie.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat zijn chronische ontstekingsklachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Ontsteking is een essentieel onderdeel van het immuunsysteem — het is de manier waarop het lichaam reageert op schade of infectie. Maar wanneer ontsteking niet meer uitdooft en chronisch wordt, richt het schade aan in gezond weefsel. Laaggradige systemische ontsteking — ook wel &apos;stille ontsteking&apos; genannt — is niet altijd zichtbaar maar is wel degelijk aanwezig en heeft op de lange termijn ernstige gevolgen voor de gezondheid.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Chronische ontsteking wordt in verband gebracht met gewrichtsaandoeningen zoals reumatoïde artritis en artrose, maar ook met hart- en vaatziekten, diabetes type 2, auto-immuunziekten, chronische darmontstekingen (IBD) en neurologische aandoeningen. De klachten variëren van gewrichtspijn en stijfheid tot vermoeidheid, huidproblemen en een algemeen gevoel van malaise.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Acupunctuur richt zich niet op het onderdrukken van de ontsteking zoals ontstekingsremmers dat doen, maar op het herstellen van de balans in het immuunsysteem zodat het lichaam zelf het ontstekingsproces reguleert.</p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelvoorkomende symptomen</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Gewrichtspijn, stijfheid en zwelling</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Chronische vermoeidheid en algehele malaise</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Terugkerende pijn zonder duidelijke oorzaak</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Huidproblemen of rode, warme gewrichten</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Verhoogde CRP of andere ontstekingswaarden in bloed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mogelijke oorzaken</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Auto-immuunreactie (RA, lupus, IBD)</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Ongezond voedingspatroon en leefstijl</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Chronische stress en cortisolontregeling</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Overgewicht en metabole ontregeling</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Omgevingsfactoren en toxische belasting</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur kan helpen</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de TCG worden chronische ontstekingsklachten doorgaans geassocieerd met patronen van <em>damp-hitte</em> of <em>hitte-toxine</em> in de meridianen. Vochtigheid (tan-shi) verstopt de kanalen en veroorzaakt pijn en zwelling; overtollige hitte versnelt het ontstekingaromatische in de weefsels. De behandeling richt zich op het afvoeren van hitte, het omzetten van vocht en het bevorderen van de vrije doorstroming van qi en bloed. Punten op de grote darm-, driefuncties- en maagmeridiaan worden ingezet om het immuunsysteem in balans te brengen.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Cytokineregulatie:</strong> acupunctuur moduleert de productie van pro-inflammatoire cytokines zoals TNF-alfa en IL-1beta, waardoor chronische overactivatie van het immuunsysteem wordt geremd.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Anti-inflammatoire paden:</strong> stimulatie van bepaalde acupunctuurpunten activeert het cholinergisch anti-inflammatoir pad via de nervus vagus, wat een systemisch ontstekingsremmend effect heeft.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Endorfine en cortisol:</strong> de afgifte van endorfines en normalisering van cortisol draagt bij aan pijnvermindering en verlaging van stressgerelateerde ontstekingsactiviteit.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat kunt u verwachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Chronische ontstekingsklachten vragen om een consequente, regelmatige behandeling. Na een uitgebreide intake stellen we een behandelplan op dat aansluit bij uw specifieke patroon — of dat nu damp-hitte, qi-stagnatie of een tekort aan ondersteunende energie is. Leefstijladvies vormt een integraal onderdeel: voeding, beweging en stressmanagement hebben direct invloed op ontstekingsniveaus.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Voor chronische ontstekingsklachten adviseren we een initieel traject van acht tot twaalf wekelijkse of tweewekelijkse behandelingen. Na evaluatie bepalen we samen of en hoe we het traject voortzetten. Onderhoudsbehandelingen één à twee keer per maand helpen om de bereikte balans vast te houden.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is dit geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met reumatoïde artritis (als aanvulling)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Personen met laaggradige systemische ontsteking</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Patiënten met chronische gewrichts- of spierpijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die hun ontstekingswaarden willen verlagen</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Behandeling in Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Wij begeleiden mensen met chronische ontstekingsklachten op een integrale manier, waarbij acupunctuur en leefstijladvies hand in hand gaan.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/immuunsysteem-herstel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Immuunsysteem &amp; herstel overzicht</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Alle klachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/verminderde-weerstand" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Verminderde weerstand</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/pijnbestrijding" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Pijnbestrijding</Link>
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
                  Wat is het verschil tussen een acute en chronische ontsteking?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Een acute ontsteking is een tijdelijke, gerichte reactie van het immuunsysteem op schade of infectie — zichtbaar als roodheid, zwelling en warmte. Een chronische ontsteking is een laaggradige, aanhoudende activatie van het immuunsysteem die maanden of jaren aanhoudt en vaak moeilijker te herkennen is, maar wel schade aanricht aan weefsels en organen.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur worden ingezet naast medicatie bij reumatoïde artritis?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur werkt complementair aan reguliere reumatologische behandelingen. Het kan helpen pijn en stijfheid te verminderen, de bijwerkingen van medicatie te verlichten en de kwaliteit van leven te verbeteren. Overleg altijd met uw reumatoloog voordat u start.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merkt u verbetering bij chronische ontstekingsklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Bij chronische aandoeningen is geduld vereist. Na twee tot vier sessies rapporteren mensen doorgaans vermindering van pijn en stijfheid. Duurzame verandering in ontstekingsniveaus vergt een langer traject van acht tot twaalf sessies, afhankelijk van de aandoening.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Welke leefstijlaanpassingen helpen bij chronische ontsteking?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Een ontstekingsremmend voedingspatroon (rijk aan omega-3, antioxidanten, vezels en arm aan suiker en bewerkte producten), voldoende slaap, stressreductie en regelmatige beweging zijn bewezen effectief. Wij bespreken deze factoren altijd als onderdeel van uw behandelplan.</div>
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
                { href: "/klachten/artrose", label: "Artrose" },
                { href: "/klachten/fibromyalgie", label: "Fibromyalgie" },
                { href: "/klachten/immuunsysteem-herstel", label: "Immuunsysteemherstel" },
                { href: "/klachten/pijnbestrijding", label: "Pijnbestrijding" },
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
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Chronische ontsteking hoeft niet uw leven te bepalen. Ontdek hoe acupunctuur en een gerichte leefstijlaanpak samen het verschil kunnen maken. Plan een eerste consultatie.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_ontsteking" title="Maak een afspraak" />
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
