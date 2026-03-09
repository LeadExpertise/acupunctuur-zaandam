import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Terugkerende Blaasontstekingen Zaandam | UTI Preventie",
  description: "Last van terugkerende blaasontstekingen? Acupunctuur versterkt de immuniteit van het urinewegstelsel en helpt blaasontstekingen te voorkomen. Praktijk in Zaandam.",
  keywords: ["blaasontstekingen", "terugkerende blaasontsteking", "cystitis", "UTI preventie", "acupunctuur blaasontsteking", "acupunctuur Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/blaasontstekingen",
      name: "Acupunctuur bij Terugkerende Blaasontstekingen",
      description: "Behandeling van terugkerende blaasontstekingen en preventie via acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Blaasontsteking" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Recidiverende urineweginfectie" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe kan acupunctuur blaasontstekingen voorkomen?",
          acceptedAnswer: { "@type": "Answer", text: "Acupunctuur versterkt de lokale en systemische immuniteit, waardoor het urinewegstelsel minder vatbaar wordt voor bacteriële infecties. Door de nierfunctie te ondersteunen en damp-hitte te verwijderen volgens de TCG-principes wordt de omgeving minder gunstig voor bacteriën als E. coli." },
        },
        {
          "@type": "Question",
          name: "Kan ik acupunctuur nemen tijdens een actieve blaasontsteking?",
          acceptedAnswer: { "@type": "Answer", text: "Tijdens een actieve bacteriële blaasontsteking is antibiotica doorgaans de aangewezen behandeling. Acupunctuur kan wel ter ondersteuning worden ingezet om de symptomen te verlichten. De preventieve aanpak — het voorkomen van herhaling — is de grootste toegevoegde waarde van acupunctuur bij blaasontstekingen." },
        },
        {
          "@type": "Question",
          name: "Bij hoeveel blaasontstekingen per jaar is preventieve behandeling zinvol?",
          acceptedAnswer: { "@type": "Answer", text: "Wanneer u twee of meer blaasontstekingen per jaar heeft, is preventieve behandeling met acupunctuur zeker zinvol. Bij drie of meer infecties in een jaar wordt gesproken van recidiverende urineweginfecties, waarbij acupunctuur een structureel onderdeel van uw zorgplan kan zijn." },
        },
        {
          "@type": "Question",
          name: "Zijn er hygiëne- en voedingsadviezen die blaasontstekingen helpen voorkomen?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, voldoende vochtinname (minimaal 1,5 tot 2 liter per dag), niet ophouden met plassen, correct toiletbezoek (van voor naar achter vegen bij vrouwen), cranberrysap of cranberry-extract en het vermijden van irriterende stoffen zijn bewezen effectief. Wij bespreken deze adviezen altijd in combinatie met de acupunctuurbehandeling." },
        },
      ],
    },
  ],
};

export default function BlaasontstekingenPage() {
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
            <Link href="/klachten/blaas-urogenitaal" className="hover:text-[#1F3A36] transition-colors">Blaas &amp; urogenitaal</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Blaasontstekingen</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Blaas &amp; urogenitaal</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Terugkerende Blaasontstekingen in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Terugkerende blaasontstekingen zijn pijnlijk, beperkend en frustrerend. Antibioticakuren lossen de infectie op maar pakken de onderliggende vatbaarheid niet aan. Acupunctuur biedt een preventieve aanpak die het urinewegstelsel versterkt en de frequentie van infecties significant kan verminderen.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij blaasontstekingen?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur ondersteunt bij blaasontstekingen door het lokale immuunsysteem van de blaas te versterken, bacteriële adhesie te verminderen en de blaasslijmvliezen te beschermen. Effectief bij terugkerende blaasontstekingen (recidiverende UWI) als preventieve behandeling — en vermindert de noodzaak van herhaald antibioticagebruik.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat zijn terugkerende blaasontstekingen?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Een blaasontsteking (cystitis) ontstaat wanneer bacteriën — meestal Escherichia coli uit de darmflora — de blaas bereiken via de urethra en zich daar vermenigvuldigen. De klassieke symptomen zijn een brandend gevoel bij het plassen, frequente aandrang, troebele of stinkende urine en soms bloed in de urine. Bij vrouwen komt een blaasontsteking veel vaker voor dan bij mannen vanwege de kortere urethra.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Wanneer iemand twee of meer blaasontstekingen per jaar doormaakt, spreekt men van recidiverende of terugkerende blaasontstekingen. Dit heeft een grote impact op de kwaliteit van leven. Bovendien leidt herhaaldelijk antibioticagebruik tot resistentie van bacteriën en verstoring van de darmmicrobiota, wat op zijn beurt de vatbaarheid voor nieuwe infecties vergroot.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Acupunctuur richt zich op de preventie door de lokale weerstand van de blaaswand en het urinewegstelsel te versterken, de nierfunctie te ondersteunen en het immuunsysteem in zijn geheel te moduleren.</p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelvoorkomende symptomen</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Brandend of pijnlijk gevoel bij het plassen</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Frequente, dwingende aandrang om te plassen</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Troebele of bloederige urine</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Pijn in de onderbuik of rug</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Meer dan twee infecties per jaar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mogelijke oorzaken</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Verminderde lokale immuniteit in het urinewegstelsel</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Hormonale veranderingen (menopauze)</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Darmmicrobiota-verstoring door antibiotica</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Onvoldoende vochtinname of ophouden met plassen</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Anatomische factoren of bekkenproblematiek</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur kan helpen</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de TCG worden terugkerende blaasontstekingen veelal gezien als een combinatie van een onderliggende nieronvoldoende (nier-qi of nier-yin tekort) en episoden van damp-hitte die de blaas binnenvallen. Het nier-qi-tekort maakt het lichaam gevoelig; de damp-hitte manifesteert zich als de acute infectie. De behandeling richt zich op twee fronten: het tonificeren van de nieren en het wei qi (afweer) in de interinfectieuze periode, en het afvoeren van damp-hitte tijdens en na een infectieepisode. Klassieke punten zijn SP9, B22, B28, K3 en Ren3.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Immuunmodulatie:</strong> acupunctuur verhoogt de activiteit van secretoir IgA in de slijmvliezen van het urinewegstelsel, waardoor de blaaswand beter bestand is tegen bacteriële aanhechting.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Mucosale immuniteit:</strong> door de lokale slijmvliesimmuniteit te versterken wordt de eerste verdedigingslinie van het urinewegstelsel robuuster, wat directe preventie biedt tegen terugkerende infecties.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Microbioomondersteuning:</strong> indirecte ondersteuning van het darmmicrobioom via stressreductie en verbetering van de darmfunctie draagt bij aan een gunstiger bacterieel evenwicht in het urogenitale stelsel.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat kunt u verwachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">De preventieve behandeling start idealiter buiten een actieve infectie. Na de intake stellen we een plan op dat gericht is op het versterken van uw weerstand en het verminderen van de vatbaarheid voor infecties. Naast acupunctuur geven we voedings- en leefstijladviezen die wetenschappelijk onderbouwd zijn als preventieve maatregelen.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Voor preventieve behandeling van terugkerende blaasontstekingen adviseren wij een reeks van zes tot acht sessies over twee tot drie maanden. In de periode daarna evalueren we of onderhoudsbehandelingen gewenst zijn, met name rondom momenten van hogere kwetsbaarheid (stress, seizoenswisseling).</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is dit geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met twee of meer blaasontstekingen per jaar</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die antibioticagebruik willen verminderen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen in de overgang met verhoogde vatbaarheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die preventief hun weerstand willen versterken</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Behandeling in Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Wij begeleiden u met discretie en deskundigheid op weg naar minder infecties en meer vertrouwen in uw eigen gezondheid.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/blaas-urogenitaal" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Blaas &amp; urogenitaal overzicht</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Alle klachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/blaasklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Blaasklachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/verminderde-weerstand" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Verminderde weerstand</Link>
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
                  Hoe kan acupunctuur blaasontstekingen voorkomen?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Acupunctuur versterkt de lokale en systemische immuniteit, waardoor het urinewegstelsel minder vatbaar wordt voor bacteriële infecties. Door de nierfunctie te ondersteunen en damp-hitte te verwijderen volgens de TCG-principes wordt de omgeving minder gunstig voor bacteriën als E. coli.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan ik acupunctuur nemen tijdens een actieve blaasontsteking?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Tijdens een actieve bacteriële blaasontsteking is antibiotica doorgaans de aangewezen behandeling. Acupunctuur kan wel ter ondersteuning worden ingezet om de symptomen te verlichten. De preventieve aanpak — het voorkomen van herhaling — is de grootste toegevoegde waarde van acupunctuur bij blaasontstekingen.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Bij hoeveel blaasontstekingen per jaar is preventieve behandeling zinvol?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Wanneer u twee of meer blaasontstekingen per jaar heeft, is preventieve behandeling met acupunctuur zeker zinvol. Bij drie of meer infecties in een jaar wordt gesproken van recidiverende urineweginfecties, waarbij acupunctuur een structureel onderdeel van uw zorgplan kan zijn.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Zijn er hygiëne- en voedingsadviezen die blaasontstekingen helpen voorkomen?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, voldoende vochtinname (minimaal 1,5 tot 2 liter per dag), niet ophouden met plassen, correct toiletbezoek (van voor naar achter vegen bij vrouwen), cranberrysap of cranberry-extract en het vermijden van irriterende stoffen zijn bewezen effectief. Wij bespreken deze adviezen altijd in combinatie met de acupunctuurbehandeling.</div>
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
                { href: "/klachten/blaasklachten", label: "Blaasklachten" },
                { href: "/klachten/blaas-urogenitaal", label: "Blaas & Urogenitaal" },
                { href: "/klachten/overactieve-blaas", label: "Overactieve Blaas" },
                { href: "/klachten/hormonen-vrouwenklachten", label: "Hormonen & Vrouwenklachten" },
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
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Stop de cyclus van terugkerende blaasontstekingen. Plan een afspraak en ontdek hoe acupunctuur uw weerstand structureel kan versterken.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_blaasontstekingen" title="Maak een afspraak"
                      loading="lazy" />
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
