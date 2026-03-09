import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Slaapproblemen & Insomnia Zaandam",
  description:
    "Herstel uw slaap met acupunctuur in Zaandam. Behandeling van insomnia, moeilijk doorslapen en slechte slaapkwaliteit. Natuurlijk alternatief voor slaaptabletten.",
  keywords: [
    "acupunctuur slaapproblemen",
    "insomnia behandeling acupunctuur zaandam",
    "slaaptabletten afbouwen acupunctuur",
    "acupunctuur insomnia",
    "slechte slaap behandeling zaandam",
    "doorslapen acupunctuur",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/slaapproblemen",
      name: "Acupunctuur bij Slaapproblemen",
      description: "Informatie over de behandeling van slaapproblemen en insomnia via Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Insomnia" },
        { "@type": "MedicalCondition", name: "Slaapproblemen" },
        { "@type": "MedicalCondition", name: "Slechte slaapkwaliteit" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij slapeloosheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In de klinische praktijk zien we bij de meeste cliënten met stressgerelateerde insomnia goede resultaten. Acupunctuur activeert het parasympathisch zenuwstelsel, moduleert de aanmaak van melatonine en bevordert de aanmaak van GABA — een neurotransmitter essentieel voor ontspanning en slaap. Hoe snel en in welke mate iemand verbetert, hangt af van de onderliggende oorzaak van de slaapproblemen.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik slaaptabletten afbouwen met acupunctuur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, maar altijd in overleg met uw huisarts. Acupunctuur kan de slaapkwaliteit verbeteren terwijl u de medicatie onder begeleiding geleidelijk afbouwt. Stop nooit abrupt met slaaptabletten zonder medisch advies.",
          },
        },
      ],
    },
  ],
};

export default function SlaapproblemenPage() {
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
            <Link href="/klachten/stress-energie-mentaal" className="hover:text-[#1F3A36] transition-colors">Stress, energie &amp; mentaal</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Slaapproblemen</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mx-auto px-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Stress, Energie &amp; Mentaal</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Slaapproblemen &amp; Insomnia
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Urenlang wakker liggen, te vroeg wakker worden of slaap die u niet herstelt — chronische slaapproblemen tasten uw gezondheid, concentratie en stemming diepgaand aan. Acupunctuur helpt het zenuwstelsel te kalmeren, het melatonine-ritme te herstellen en de slaapkwaliteit te verbeteren, zonder de bijwerkingen en afhankelijkheid van slaaptabletten.
            </p>
          </div>
        </header>

        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij slaapproblemen?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur verbetert slaap door melatonineproductie te stimuleren, het cortisol-rhythme te normaliseren en overactieve hersenactiviteit te kalmeren. Studies tonen aan dat het inslaaptijd verkort, doorslapen verbetert en nachtelijk wakker worden vermindert — effectief bij insomnia, stress-gerelateerde slaapproblemen en onrustige slaap.
              </p>
            </div>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Soorten slaapproblemen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { type: "Moeilijk inslapen", desc: "Meer dan 30 minuten nodig om in slaap te vallen. Vaak gepaard met piekeren, gespannenheid of een overactief brein." },
                  { type: "Moeizaam doorslapen", desc: "Meerdere malen per nacht wakker worden. Moeite om opnieuw in slaap te vallen. Kan duiden op hormonale oorzaken (overgang) of pijn." },
                  { type: "Vroeg wakker worden", desc: "Twee uur of meer voor de gewenste wektijd spontaan wakker, zonder te kunnen terugslapen. Kenmerkend bij depressie en uitputting." },
                  { type: "Niet-herstellende slaap", desc: "Voldoende uren slaap maar toch uitgerust wakker worden. Probleem zit in de slaapkwaliteit (te weinig diepe slaap of REM-slaap)." },
                ].map(item => (
                  <div key={item.type} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.type}</h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Oorzaken van slaapproblemen</h2>
              <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                {["Chronische stress en piekeren (overactief brein 's nachts)", "Hormonale veranderingen (overgang, zwangerschap, menstruatiecyclus)", "Chronische pijn die de slaap verstoort", "Medicijnen (o.a. bepaalde antidepressiva, bètablokkers)", "Onregelmatig slaap-waakritme (diensten, tijdszones, schermgebruik)", "Angst en somberheid", "Overactief zenuwstelsel bij burn-out of PTSS"].map(s => (
                  <li key={s} className="flex items-start gap-3"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8A6B3D] shrink-0" />{s}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur slaap herstelt</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Oosters perspectief</h3>
                  <p>In de TCG huisvest het <em>Hart</em> de Shen — de geest, het bewustzijn. Gezonde slaap vereist dat de Shen &apos;s nachts veilig rust in het Hart. Wanneer het Hart-Bloed of de Hart-Yin onvoldoende is om de Shen te voeden en te verankeren, dwaalt de geest — en wakker zijn is het gevolg. Bij <em>Lever-Yang opstijgend</em> (stress, boosheid, frustratie) schiet de energie omhoog en verhindert de slaap-inducierende daling van Yang naar Yin. Bij <em>Nier-Yin leegte</em> ontbreekt de koelende basis die de nacht voorziet van rust, wat leidt tot nachtelijk zweten en vroeg wakker worden.</p>
                </div>
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Westers perspectief</h3>
                  <p>Acupunctuur activeert het parasympathisch zenuwstelsel via de vagusnervus, waardoor het lichaam van alertheids- naar herstelmodus overgaat. Onderzoek wijst op positieve effecten op de aanmaak van melatonine (slaapbeginregulatie) en GABA (de primaire remmende neurotransmitter die slaap induceert). Acupunctuur verlaagt tevens het cortisol-niveau in de avond, dat bij chronische stress te hoog blijft en de slaapinleiding verstoort.</p>
                </div>
              </div>
            </section>

            <section className="bg-[#F2EDE3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat u kunt verwachten</h2>
              <div className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>Bij slaapproblemen beginnen we met wekelijkse behandelingen. Veel cliënten merken na 3–4 sessies een verbetering in de inslaaptijd of de nachtelijke waakperiodes. Structureel herstel van de slaapkwaliteit vereist doorgaans 6–10 sessies.</p>
                <p>Avondsessies zijn voor sommige cliënten een voorkeur: de behandeling induceert direct ontspanning die de slaapinleiding diezelfde avond kan bevorderen. We bespreken in de intake welk tijdstip het best bij uw situatie past.</p>
                <p>Naast acupunctuurbehandeling geven we praktisch advies over slaaphygiëne — eenvoudige gedragsaanpassingen die het effect van de behandeling versterken.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is behandeling geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Mensen met stressgerelateerde insomnia", "Mensen die slaaptabletten willen afbouwen (altijd in overleg met huisarts)", "Vrouwen in de overgang met slaapproblemen en nachtzweten", "Mensen met burn-out waarbij slaap het herstel blokkeert", "Mensen met chronische pijn die de slaap verstoort", "Mensen met onregelmatig ritme (ploegendienst, jetlag)"].map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#4A6559] text-lg mt-0.5 shrink-0" stroke-width="1.5" />
                    <span className="text-sm text-[#1F3A36]/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <p className="text-sm text-[#1F3A36]/60 font-light leading-relaxed">
                Onze praktijk in Koog aan de Zaan biedt een rustige, ontspannen omgeving — precies wat u nodig heeft. Slaapproblemen hangen vaak samen met <Link href="/klachten/burn-out" className="text-[#4A6559] underline underline-offset-2">burn-out</Link> of <Link href="/klachten/stressklachten" className="text-[#4A6559] underline underline-offset-2">stressklachten</Link>. Bij vrouwen speelt ook de overgang een rol — lees meer over <Link href="/klachten/overgangsklachten" className="text-[#4A6559] underline underline-offset-2">overgangsklachten</Link>.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over slaapproblemen</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Helpt acupunctuur bij slapeloosheid?", a: "In de klinische praktijk zien we bij de meeste cliënten met stressgerelateerde insomnia goede resultaten. Acupunctuur activeert het parasympathisch zenuwstelsel, bevordert GABA-aanmaak en moduleert het melatonine-ritme. Resultaten variëren per persoon en hangen af van de onderliggende oorzaak." },
                { q: "Na hoeveel behandelingen merk ik verbetering?", a: "Veel cliënten merken al na de eerste behandeling dat ze makkelijker in slaap vallen of minder wakker worden diezelfde nacht. Structureel herstel — consistent beter slapen — is doorgaans merkbaar na 4–6 sessies." },
                { q: "Kan ik slaaptabletten afbouwen met acupunctuur?", a: "Ja, maar altijd in overleg met uw huisarts. We adviseren nooit om abrupt te stoppen. Acupunctuur verbetert geleidelijk de slaapkwaliteit, waarna de medicatie onder medische begeleiding in stappen kan worden afgebouwd." },
                { q: "Worden slaapbehandelingen vergoed?", a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars, dankzij onze NVA/TCMA-erkenning." },
              ].map(item => (
                <details key={item.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                    {item.q}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                  </summary>
                  <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>Erkend door verenigingen en vergoed door verzekeraars</h2>
            <div className="flex flex-wrap gap-10 md:gap-16 mix-blend-multiply w-full justify-center items-center">
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
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/burn-out", label: "Burn-out" },
                { href: "/klachten/vermoeidheid", label: "Vermoeidheid" },
                { href: "/klachten/angstklachten", label: "Angstklachten" },
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
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Klaar voor herstellende slaap?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Plan een intake via onze online planner. Of stel uw vraag via WhatsApp — we bespreken graag uw persoonlijke situatie.</p>
                <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  WhatsApp ons
                </a>
              </div>
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/30 to-[#4A6559]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                <div className="relative w-full bg-[#FAF8F3] rounded-xl shadow-2xl border border-[#1F3A36]/10 overflow-hidden flex flex-col">
                  <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b px-4 items-center justify-between">
                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /></div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">Online Planner</span>
                    <div className="w-10" />
                  </div>
                  <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="animate-spin h-8 w-8 text-[#4A6559]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    </div>
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_slaapproblemen" title="Maak een afspraak"
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
