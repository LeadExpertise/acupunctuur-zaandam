import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Stoppen met Roken Zaandam | Rookverslaving",
  description: "Wilt u stoppen met roken maar lukt het niet alleen? Acupunctuur vermindert cravings en ontwenningsverschijnselen. NADA-protocol beschikbaar. Praktijk in Zaandam.",
  keywords: ["stoppen met roken", "acupunctuur roken", "rookverslaving behandeling", "NADA protocol", "nicotine ontwenning", "acupunctuur Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/stoppen-met-roken",
      name: "Acupunctuur bij Stoppen met Roken",
      description: "Ondersteuning bij het stoppen met roken via acupunctuur en het NADA-protocol in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Nicotineverslaving" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Rookverslaving" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe helpt acupunctuur bij stoppen met roken?",
          acceptedAnswer: { "@type": "Answer", text: "Acupunctuur vermindert cravings door het dopamine-beloningssysteem te moduleren, verlicht ontwenningsverschijnselen zoals prikkelbaarheid, angst en slaapproblemen, en helpt de stressrespons te reguleren die bij veel rokers de trigger is om een sigaret op te steken." },
        },
        {
          "@type": "Question",
          name: "Wat is het NADA-protocol bij stoppen met roken?",
          acceptedAnswer: { "@type": "Answer", text: "Het NADA-protocol (National Acupuncture Detoxification Association) is een gestandaardiseerde ooracupunctuur-techniek waarbij vijf vaste punten in het oor worden geprikkeld. Het is ontwikkeld voor verslavingszorg en wordt wereldwijd toegepast bij stoppen met roken, maar ook bij alcohol- en drugsverslaving en stressverwerking." },
        },
        {
          "@type": "Question",
          name: "Hoeveel sessies heb ik nodig om te stoppen met roken?",
          acceptedAnswer: { "@type": "Answer", text: "Een typisch behandeltraject omvat zes tot acht sessies verdeeld over vier tot acht weken. De eerste sessies zijn het meest intensief — vaak twee keer per week in de eerste twee weken. De motivatie van de patiënt zelf is hierbij van groot belang; acupunctuur is een krachtige ondersteuning maar geen vervanging voor eigen beslissing." },
        },
        {
          "@type": "Question",
          name: "Kan ik acupunctuur combineren met nicotinevervangingstherapie?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, acupunctuur kan goed worden gecombineerd met nicotinevervangingstherapie (pleisters, kauwgom) of met medicamenteuze ondersteuning. Het is altijd verstandig uw huisarts hierover te informeren. Sommige mensen kiezen ervoor acupunctuur als enige ondersteuning te gebruiken." },
        },
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
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Welke klachten</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/klachten/leefstijl-ondersteuning" className="hover:text-[#1F3A36] transition-colors">Leefstijl &amp; ondersteuning</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Stoppen met roken</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Leefstijl &amp; ondersteuning</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Stoppen met Roken in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Stoppen met roken is de gezondste beslissing die u kunt nemen, maar de verslaving maakt het moeilijk. Acupunctuur — met name via het ooracupunctuur NADA-protocol — vermindert cravings, verlicht ontwenningsverschijnselen en helpt u de rookgewoonte van binnenuit los te laten.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat maakt stoppen met roken zo moeilijk?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Roken is een combinatie van een fysieke verslaving aan nicotine en een psychologische gewoonte die diep verweven is met dagelijkse routines, emoties en sociale situaties. Nicotine stimuleert het dopamine-beloningssysteem in de hersenen, waardoor het roken aangenaam voelt en ophouden gepaard gaat met ontwenningsverschijnselen: prikkelbaarheid, angst, concentratieproblemen, slaapproblemen en een sterke drang naar nicotine.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Veel mensen proberen meerdere keren te stoppen voordat het lukt. Wilskracht alleen is zelden voldoende; het is de combinatie van motivatie, ondersteuning en de juiste hulpmiddelen die het verschil maakt. Acupunctuur heeft in internationale studies aangetoond de ontwenningsverschijnselen significant te verminderen en de kans op succesvolle stoppoging te vergroten.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Wij gebruiken naast lichaamsacupunctuur ook het gerenommeerde NADA-protocol (ooracupunctuur) dat wereldwijd wordt ingezet in verslavingszorgprogramma&apos;s.</p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelvoorkomende symptomen bij stoppen</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Sterke cravings naar nicotine</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Prikkelbaarheid en stemmingswisselingen</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Slaapproblemen en onrust</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Concentratieproblemen en hersenmist</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Verhoogde eetlust en gewichtstoename</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Factoren die het stoppen bemoeilijken</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Sterke nicotineafhankelijkheid</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Stress als rooktrigger</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Sociale omgeving van rokers</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Emotionele koppeling aan het roken</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Angst voor gewichtstoename na het stoppen</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur kan helpen</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Vanuit de TCG wordt rookverslaving geassocieerd met een verstoring van de long- en lever-meridiaan. De long vertegenwoordigt de emotie van rouw en afscheid; roken wordt soms gezien als een manier om de long te kalmeren. De lever staat voor de regulatie van qi-stroom en emoties; verslavend gedrag is een uiting van vastgelopen lever-qi. Behandeling richt zich op het ontspannen van lever-qi, het versterken van long-qi en het kalmeren van de geest (shen) via het hartkanaal. Ooracupunctuur — het NADA-protocol — stimuleert specifieke punten (sympathisch, shen men, nieren, lever, long) die direct werken op de stressrespons en het verlangenspatroon.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Dopamine-modulatie:</strong> acupunctuur stimuleert de afgifte van endogene dopamine op een manier die de behoefte aan externe nicotinestimulatie vermindert, waardoor cravings afnemen.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Nicotine-ontwenning:</strong> door het endorfinesysteem te activeren en het stresshormoon cortisol te verlagen, verlicht acupunctuur de fysieke en emotionele ongemakken van de ontwenning.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Stressrespons:</strong> veel rokers steken een sigaret op als respons op stress; acupunctuur helpt de stressrespons te reguleren zodat de automatische koppeling stress-roken wordt verzwakt.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat kunt u verwachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Het behandeltraject begint met een intake waarbij we uw rookpatroon, triggers, motivatie en gezondheidsgeschiedenis bespreken. We bepalen samen een stopdatum en stellen een behandelplan op. De eerste twee weken zijn cruciaal: in die periode behandelen we twee keer per week om de ontwenningsverschijnselen maximaal te ondersteunen.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Na de intensieve fase schakelen we over naar wekelijkse en daarna tweewekelijkse sessies. Een volledig traject omvat doorgaans zes tot acht sessies over vier tot acht weken. Naast de behandelingen krijgt u tips voor het omgaan met triggers en leefstijladviezen die het stoppen ondersteunen.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is dit geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Rokers die gemotiveerd zijn om te stoppen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die eerder mislukte stoppogingen hadden</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Personen met sterke stress-gerelateerde rooktriggers</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Iedereen die een natuurlijke aanpak verkiest</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Behandeling in Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Wij begrijpen dat stoppen met roken een persoonlijke strijd is en begeleiden u zonder oordeel op uw eigen tempo.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/leefstijl-ondersteuning" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Leefstijl &amp; ondersteuning overzicht</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Alle klachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/stressklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Stressklachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/vitaliteit" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Vitaliteit</Link>
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
                  Hoe helpt acupunctuur bij stoppen met roken?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Acupunctuur vermindert cravings door het dopamine-beloningssysteem te moduleren, verlicht ontwenningsverschijnselen zoals prikkelbaarheid, angst en slaapproblemen, en helpt de stressrespons te reguleren die bij veel rokers de trigger is om een sigaret op te steken.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wat is het NADA-protocol bij stoppen met roken?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Het NADA-protocol (National Acupuncture Detoxification Association) is een gestandaardiseerde ooracupunctuur-techniek waarbij vijf vaste punten in het oor worden geprikkeld. Het is ontwikkeld voor verslavingszorg en wordt wereldwijd toegepast bij stoppen met roken, maar ook bij alcohol- en drugsverslaving en stressverwerking.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel sessies heb ik nodig om te stoppen met roken?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Een typisch behandeltraject omvat zes tot acht sessies verdeeld over vier tot acht weken. De eerste sessies zijn het meest intensief — vaak twee keer per week in de eerste twee weken. De motivatie van de patiënt zelf is hierbij van groot belang; acupunctuur is een krachtige ondersteuning maar geen vervanging voor eigen beslissing.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan ik acupunctuur combineren met nicotinevervangingstherapie?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur kan goed worden gecombineerd met nicotinevervangingstherapie (pleisters, kauwgom) of met medicamenteuze ondersteuning. Het is altijd verstandig uw huisarts hierover te informeren. Sommige mensen kiezen ervoor acupunctuur als enige ondersteuning te gebruiken.</div>
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
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">U hoeft het niet alleen te doen. Plan een gesprek en ontdek hoe acupunctuur u kan helpen om voor altijd te stoppen met roken.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_roken" title="Maak een afspraak" />
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
