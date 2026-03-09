import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Urineverlies Zaandam | Incontinentie",
  description: "Last van urineverlies of incontinentie? Acupunctuur ondersteunt de bekkenbodem en het zenuwstelsel bij stressincontinentie, aandrangincontinentie en gemengde incontinentie. Praktijk in Zaandam.",
  keywords: ["urineverlies", "incontinentie", "stressincontinentie", "acupunctuur incontinentie", "bekkenbodem", "acupunctuur Zaandam"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/urineverlies",
      name: "Acupunctuur bij Urineverlies en Incontinentie",
      description: "Behandeling van urineverlies en incontinentie via acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Urineverlies" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Urine-incontinentie" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Welke soorten incontinentie behandelt acupunctuur?",
          acceptedAnswer: { "@type": "Answer", text: "Acupunctuur is effectief bij stressincontinentie (urineverlies bij hoesten, niezen of sporten), aandrangincontinentie (urineverlies bij plotselinge, dwingende aandrang) en gemengde incontinentie. De aanpak verschilt per type en wordt afgestemd op uw specifieke patroon." },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen na een bevalling bij urineverlies?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, postpartum incontinentie is een veelvoorkomende klacht na een vaginale bevalling. Acupunctuur ondersteunt het herstel van de bekkenbodem, bevordert de doorbloeding van het bekkengebied en helpt het zenuwstelsel te reguleren. Combinatie met bekkenbodemtherapie wordt aanbevolen." },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur ook werkzaam bij menopauze-gerelateerd urineverlies?",
          acceptedAnswer: { "@type": "Answer", text: "Ja, de daling van oestrogeen tijdens en na de menopauze leidt tot verzwakking van de bekkenbodem en het slijmvlies van de urethra. Acupunctuur helpt de hormonale balans te ondersteunen en de lokale weefselkwaliteit te verbeteren, wat de incontinentieklachten verlicht." },
        },
        {
          "@type": "Question",
          name: "Hoe combineer ik acupunctuur met bekkenbodemtherapie?",
          acceptedAnswer: { "@type": "Answer", text: "Wij adviseren acupunctuur en bekkenbodemtherapie te combineren. De bekkenbodemtherapeut werkt aan spiertonus en coördinatie; acupunctuur optimaliseert de zenuwgeleiding en energetische balans. Wij werken graag samen met uw fysiotherapeut of bekkenbodemtherapeut." },
        },
      ],
    },
  ],
};

export default function UrineverliesPage() {
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
            <span className="text-[#1F3A36]">Urineverlies</span>
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
              Acupunctuur bij Urineverlies in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Urineverlies treft miljoenen mensen en heeft een grote impact op zelfvertrouwen, sociale activiteiten en slaap. Of het nu gaat om verlies bij hoesten, lachen of sporten, of bij een plotselinge aandrang — acupunctuur biedt een veilige, effectieve aanvulling op de gebruikelijke behandeling.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is urineverlies?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Urineverlies, of urine-incontinentie, is het ongewild verlies van urine. Er zijn verschillende vormen: stressincontinentie (verlies bij fysieke inspanning zoals hoesten, niezen, lachen of sporten), aandrangincontinentie (verlies bij een plotselinge, sterke aandrang) en gemengde incontinentie (combinatie van beide). Overloop-incontinentie — waarbij de blaas niet goed leegloopt en overstroomt — en functionele incontinentie zijn minder frequent.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Incontinentie is geen onvermijdelijk gevolg van ouder worden, al neemt de kans erop toe met de leeftijd. Vrouwen zijn vaker getroffen, met name na een bevalling en rondom en na de menopauze, maar ook mannen — met name na prostaatbehandeling — kunnen last hebben van urineverlies. Schaamte zorgt ervoor dat het probleem vaak ondergerapporteerd wordt en mensen te lang wachten met hulp zoeken.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Acupunctuur richt zich op het versterken van de bekkenbodemfunctie via het zenuwstelsel, het ondersteunen van de hormonale balans en het aanvullen van de nierenergie die in de TCG verantwoordelijk is voor de controle over de blaas.</p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelvoorkomende symptomen</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Urineverlies bij hoesten, niezen of lachen</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Urineverlies bij plotselinge aandrang</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Gevoel van zwakte in het bekken</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Frequent plassen met kleine hoeveelheden</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Sociaal terugtrekgedrag door angst voor incidenten</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mogelijke oorzaken</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Zwakke bekkenbodemspieren na bevalling</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Hormonale veranderingen bij menopauze</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Overgewicht of verhoogde druk op het bekken</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Zenuwschade of neurologische aandoeningen</li>
                    <li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />Prostaatproblematiek bij mannen</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur kan helpen</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de TCG wordt urineverlies gezien als een onvermogen van de nieren om de qi te bewaken die de blaas sluit. Het nier-qi is verantwoordelijk voor de controle van de lage openingen van het lichaam; wanneer dit tekortschiet door ouderdom, bevalling of langdurige uitputting, verliest de blaas zijn sluitingsvermogen. Ook de longmeridiane speelt een rol: in de TCG beheersen de longen de tonusregulatie van de neerwaartse functies in het lichaam. Behandeling richt zich op het tonificeren van nieren en longen via punten als Lu7, K3, K7, B23, Ren4 en Ren6.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Bekkenbodemondersteuning:</strong> acupunctuur stimuleert de motorische zenuwgeleiding naar de bekkenbodemspieren, wat hun tonus en reactievermogen verbetert bij plotselinge drukverhoging.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Zenuwregulatie:</strong> via het pudendaal- en sacraalzenuwstelsel helpt acupunctuur de coördinatie tussen blaas, sluitspier en bekkenbodem te verbeteren, wat zowel stress- als aandrangincontinentie ten goede komt.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Hormonale ondersteuning:</strong> bij menopauze-gerelateerde incontinentie helpt acupunctuur de hormonale balans te ondersteunen en de kwaliteit van het urethraslijmvlies te verbeteren.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat kunt u verwachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Na een uitgebreide, discrete intake bespreken we het type incontinentie, het klachtenpatroon, uw obstretische voorgeschiedenis en eventuele hormonale context. De behandeling wordt hierop afgestemd. Naalden worden geplaatst in het bekkengebied, de rug, de benen en soms de buik. Moxibustie wordt ingezet bij nier-yang-tekort.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Voor urineverlies adviseren we een traject van acht tot twaalf sessies, wekelijks of tweewekelijks. Bekkenbodemtherapie en acupunctuur worden idealiter gecombineerd. Na het initiële traject evalueren we of onderhoudsbehandelingen gewenst zijn.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is dit geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen na een bevalling met bekkenbodemklachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Vrouwen met menopauze-gerelateerde incontinentie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met gemengde of aandrangincontinentie</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Iedereen die vrijheid en zelfvertrouwen terug wil</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Behandeling in Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Wij behandelen urineverlies in een veilige, vertrouwelijke omgeving en met respect voor uw privacy.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/blaas-urogenitaal" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Blaas &amp; urogenitaal overzicht</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Alle klachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/overactieve-blaas" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Overactieve blaas</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/blaasklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Blaasklachten</Link>
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
                  Welke soorten incontinentie behandelt acupunctuur?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Acupunctuur is effectief bij stressincontinentie (urineverlies bij hoesten, niezen of sporten), aandrangincontinentie (urineverlies bij plotselinge, dwingende aandrang) en gemengde incontinentie. De aanpak verschilt per type en wordt afgestemd op uw specifieke patroon.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur helpen na een bevalling bij urineverlies?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, postpartum incontinentie is een veelvoorkomende klacht na een vaginale bevalling. Acupunctuur ondersteunt het herstel van de bekkenbodem, bevordert de doorbloeding van het bekkengebied en helpt het zenuwstelsel te reguleren. Combinatie met bekkenbodemtherapie wordt aanbevolen.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur ook werkzaam bij menopauze-gerelateerd urineverlies?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, de daling van oestrogeen tijdens en na de menopauze leidt tot verzwakking van de bekkenbodem en het slijmvlies van de urethra. Acupunctuur helpt de hormonale balans te ondersteunen en de lokale weefselkwaliteit te verbeteren, wat de incontinentieklachten verlicht.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe combineer ik acupunctuur met bekkenbodemtherapie?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Wij adviseren acupunctuur en bekkenbodemtherapie te combineren. De bekkenbodemtherapeut werkt aan spiertonus en coördinatie; acupunctuur optimaliseert de zenuwgeleiding en energetische balans. Wij werken graag samen met uw fysiotherapeut of bekkenbodemtherapeut.</div>
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
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Urineverlies is behandelbaar. Plan een vertrouwelijk gesprek en ontdek hoe acupunctuur u kan helpen uw zelfvertrouwen en vrijheid terug te krijgen.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_urineverlies" title="Maak een afspraak" />
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
