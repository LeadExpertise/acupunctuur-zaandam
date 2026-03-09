import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Hoofdpijn Zaandam | Spanningshoofdpijn",
  description:
    "Verminder spanningshoofdpijn en chronische hoofdpijn met acupunctuur in Zaandam. Cochrane-onderzoek bevestigt effectiviteit. Minder hoofdpijn, minder pijnstillers.",
  keywords: [
    "acupunctuur hoofdpijn",
    "spanningshoofdpijn behandeling zaandam",
    "chronische hoofdpijn acupunctuur",
    "acupunctuur hoofdpijn cochrane",
    "hoofdpijn zonder medicijnen",
    "hoofdpijn behandeling naturlijk zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/hoofdpijn",
      name: "Acupunctuur bij Hoofdpijn en Spanningshoofdpijn",
      description: "Informatie over de behandeling van spanningshoofdpijn en chronische hoofdpijn via acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Spanningshoofdpijn" },
        { "@type": "MedicalCondition", name: "Chronische dagelijkse hoofdpijn" },
        { "@type": "MedicalCondition", name: "Cervicogene hoofdpijn" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is acupunctuur bewezen effectief bij spanningshoofdpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Een systematische review van de Cochrane Collaboration (Linde et al., 2016, Cochrane Database Syst Rev) toonde aan dat acupunctuur significant de frequentie van spanningshoofdpijn verlaagt en minstens zo effectief is als profylactische behandeling, met minder bijwerkingen dan medicatie.",
          },
        },
        {
          "@type": "Question",
          name: "Verschilt de acupunctuurbehandeling voor hoofdpijn en migraine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Hoofdpijn en migraine zijn aparte aandoeningen met overlappende maar verschillende TCG-patronen. Spanningshoofdpijn hangt vaker samen met Lever-Qi stagnatie door stress en spierspanning in de nek, terwijl migraine vaker het patroon van opstijgend Lever-Yang toont. De acupunctuurpunten en behandelaanpak worden hierop afgestemd.",
          },
        },
      ],
    },
  ],
};

const trustBarImgs = [
  { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp", alt: "NVA Erkend Acupuncturist", className: "md:h-12 w-auto h-10 object-cover bg-center" },
  { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png", alt: "VGZ Vergoeding Acupunctuur", className: "md:h-10 bg-center w-auto h-8 object-cover" },
  { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg", alt: "TCMA Certificering", className: "md:h-12 w-auto h-10 object-contain" },
  { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png", alt: "Zilveren Kruis Vergoeding", className: "md:h-12 w-auto h-10 object-cover bg-center" },
  { src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png", alt: "CZ Vergoeding Acupunctuur", className: "md:h-10 bg-center w-auto h-8 object-cover" },
];

export default function HoofdpijnPage() {
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
            <Link href="/klachten/hoofd-zenuwstelsel" className="hover:text-[#1F3A36] transition-colors">Hoofd &amp; zenuwstelsel</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Hoofdpijn</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mx-auto px-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Hoofd &amp; Zenuwstelsel</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Hoofdpijn
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Spanningshoofdpijn is de meest voorkomende vorm van hoofdpijn en treft naar schatting 80% van de bevolking op enig moment in hun leven. Wanneer het chronisch wordt — 15 of meer hoofdpijndagen per maand — heeft het een enorme impact op uw kwaliteit van leven. Acupunctuur biedt een bewezen, bijwerkingenvrije aanpak om de frequentie structureel te verlagen.
            </p>
          </div>
        </header>

        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij hoofdpijn?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur verlicht hoofdpijn door spierspanning in nek en hoofd te verminderen, de doorbloeding te verbeteren en pijnmodulerende stoffen vrij te maken. Wetenschappelijk bewezen effectief bij spanningshoofdpijn, clusterhoofdpijn en chronische dagelijkse hoofdpijn — met een sneller en duurzamer effect dan pijnstillers of reguliere fysiotherapie.
              </p>
            </div>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Soorten hoofdpijn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Spanningshoofdpijn (episodisch)", desc: "Drukkende of knellende pijn rondom het hoofd, als een strakke band. Geen misselijkheid. Verergert niet bij inspanning. Minder dan 15 dagen per maand." },
                  { title: "Chronische spanningshoofdpijn", desc: "15 of meer hoofdpijndagen per maand gedurende minimaal 3 maanden. Vaak samenhangend met chronische spierspanning en stress." },
                  { title: "Cervicogene hoofdpijn", desc: "Hoofdpijn die zijn oorsprong heeft in de nekwervels en nekspieren. Pijn start in de nek en straalt naar het hoofd. Verergert bij neksturing." },
                  { title: "Medicatie-overgebruik hoofdpijn", desc: "Paradoxale hoofdpijn door te frequent gebruik van pijnstillers (> 10-15 dagen/maand). Acupunctuur kan helpen bij afbouw." },
                ].map(item => (
                  <div key={item.title} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Oorzaken en bijdragende factoren</h2>
              <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                {["Chronische spierspanning in nek, schouders en kaak (m. trapezius, suboccipitalen)", "Langdurig schermwerk en slechte zithouding", "Stress, angst en emotionele belasting", "Slaaptekort of onregelmatig slaappatroon", "Uitdroging en overgeslagen maaltijden", "Kaakklachten (bruxisme, TMD)", "Hormonale schommelingen bij vrouwen"].map(s => (
                  <li key={s} className="flex items-start gap-3"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8A6B3D] shrink-0" />{s}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur hoofdpijn behandelt</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Oosters perspectief</h3>
                  <p>Spanningshoofdpijn wordt in de TCG vrijwel altijd gekoppeld aan <em>Lever-Qi stagnatie</em>: de vrije stroom van Qi wordt geblokkeerd door stress, frustratie of overbelasting, waardoor het hoofd onvoldoende wordt gevoed of juist te veel spanning draagt. Bij cervicogene hoofdpijn zien we een <em>Bi-syndroom</em> in de Blaasmeridiaan die over de nek en het achterhoofd loopt.</p>
                  <p>Behandeling ontspant de Lever-Qi, ontblokkeert de meridianen langs de nek en het hoofd, en voedt Bloed en Yin waar leegte aanwezig is.</p>
                </div>
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Westers perspectief</h3>
                  <p>Acupunctuur ontspant de hypertone pericraniale spieren (nekmusculatuur, suboccipitalen, temporalisspier) die sterk bijdragen aan spanningshoofdpijn. Naaldplaatsing activeert het trigeminocervicale complex en moduleert de centrale pijnverwerking. Daarnaast remt acupunctuur de afgifte van pro-inflammatoire prostaglandinen en bevordert de vrijgave van endorfines.</p>
                </div>
              </div>
            </section>

            {/* Science */}
            <section className="bg-[#FAF8F3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <div className="flex items-center gap-3 mb-4">
                <iconify-icon icon="solar:document-text-linear" className="text-2xl text-[#4A6559]" stroke-width="1.5" />
                <h2 className="text-xl font-normal text-[#1F3A36] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wetenschappelijk onderzoek</h2>
              </div>
              <div className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p><strong className="text-[#1F3A36] font-medium">Cochrane Review — Linde et al. (2016)</strong><br />
                  <em>Linde K, et al. &ldquo;Acupuncture for the prevention of tension-type headache.&rdquo; Cochrane Database Syst Rev. 2016;(4):CD007587.</em>
                </p>
                <p>Deze systematische review analyseerde 12 gerandomiseerde studies. Conclusie: acupunctuur vermindert significant de frequentie van spanningshoofdpijn en is minstens zo effectief als profylactische behandeling met medicatie. Acupunctuur bleek bovendien effectiever dan zogenoemde nep-acupunctuur, wat wijst op een specifiek therapeutisch effect.</p>
                <p className="text-xs text-[#1F3A36]/50 italic">Uitsluitend gepubliceerde, geverifieerde studies worden op deze pagina vermeld.</p>
              </div>
            </section>

            <section className="bg-[#F2EDE3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat u kunt verwachten</h2>
              <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed">Voor profylactische behandeling van hoofdpijn adviseren we een traject van 6–10 behandelingen. Veel cliënten merken na 3–4 sessies al een duidelijke vermindering in de frequentie en intensiteit van hoofdpijnaanvallen. We combineren behandeling van lokale punten (hoofd, nek) met distale punten (handen, voeten) die de Lever-Qi reguleren en de algehele spanning verlagen.</p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is behandeling geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Mensen met frequente spanningshoofdpijn (meerdere keren per week)", "Mensen met chronische dagelijkse hoofdpijn", "Kantoorwerkers met hoofd- en nekspanning", "Mensen die pijnstillergebruik willen verminderen", "Mensen met cervicogene hoofdpijn vanuit de nek", "Mensen die migraine willen onderscheiden van spanningshoofdpijn"].map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#4A6559] text-lg mt-0.5 shrink-0" stroke-width="1.5" />
                    <span className="text-sm text-[#1F3A36]/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <p className="text-sm text-[#1F3A36]/60 font-light leading-relaxed">
                Onze praktijk is gevestigd in Koog aan de Zaan, centraal in de Zaanstreek. Wij behandelen wekelijks cliënten met hoofdpijn uit Zaandam en omgeving. Bekijk ook onze pagina over <Link href="/klachten/migraine" className="text-[#4A6559] underline underline-offset-2">migraine</Link> om het verschil te begrijpen, of lees over de relatie met <Link href="/klachten/stressklachten" className="text-[#4A6559] underline underline-offset-2">stressklachten</Link> en <Link href="/klachten/nekklachten" className="text-[#4A6559] underline underline-offset-2">nekklachten</Link>.
              </p>
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
              {[
                { q: "Is acupunctuur bewezen effectief bij spanningshoofdpijn?", a: "Ja. De Cochrane Review van Linde et al. (2016) analyseerde 12 gecontroleerde studies en concludeerde dat acupunctuur significant de frequentie van spanningshoofdpijn verlaagt. Het effect is vergelijkbaar met profylactische medicatie, maar zonder de bijwerkingen." },
                { q: "Hoe snel merk ik verlichting van mijn hoofdpijn?", a: "Veel cliënten voelen al na de eerste 1–2 behandelingen minder spanning in nek en hoofd. Structurele vermindering van de aanvalsfrequentie is meetbaar na 4–6 behandelingen. We houden een behandeldagboek bij zodat u de voortgang kunt volgen." },
                { q: "Kan ik doorgaan met pijnstillers tijdens de behandeling?", a: "Ja. U hoeft uw pijnstillers niet af te bouwen om met acupunctuur te starten. Naarmate de behandeling aanslaat, merken veel cliënten vanzelf dat ze minder pijnstillers nodig hebben. Bij medicatie-overgebruik hoofdpijn begeleiden we u in een geleidelijke afbouw." },
                { q: "Worden hoofdpijnbehandelingen vergoed?", a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars, dankzij onze NVA/TCMA-erkenning." },
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
              {trustBarImgs.map(img => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={img.alt} src={img.src} alt={img.alt} className={img.className} />
              ))}
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
                { href: "/klachten/migraine", label: "Migraine" },
                { href: "/klachten/nekklachten", label: "Nekklachten" },
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/slaapproblemen", label: "Slaapproblemen" },
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
                  Klaar voor minder hoofdpijn?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Plan direct een intake in via onze online planner. Twijfelt u? Stuur ons een WhatsApp bericht.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_hoofdpijn" title="Maak een afspraak" />
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
