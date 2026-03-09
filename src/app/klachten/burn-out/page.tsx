import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Burn-out Zaandam | Herstel & Energie",
  description:
    "Ondersteuning bij burn-out herstel met acupunctuur in Zaandam. Reguleer uw zenuwstelsel, herstel uw slaap en bouw uw energie stap voor stap op.",
  keywords: [
    "acupunctuur burn-out",
    "burn-out herstel acupunctuur zaandam",
    "acupunctuur stress vermoeidheid",
    "burn-out behandeling naturlijk zaandam",
    "acupunctuur energieherstel zaandam",
    "burn-out begeleiding acupunctuur",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/burn-out",
      name: "Acupunctuur bij Burn-out",
      description: "Informatie over acupunctuur als ondersteuning bij burn-out herstel in Zaandam via Traditionele Chinese Geneeskunde.",
      about: [
        { "@type": "MedicalCondition", name: "Burn-out" },
        { "@type": "MedicalCondition", name: "Chronische uitputting" },
        { "@type": "MedicalCondition", name: "Overspannenheid" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe kan acupunctuur helpen bij burn-out herstel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur stimuleert het parasympathisch zenuwstelsel (de rust-en-herstel modus), helpt het cortisol-ritme te normaliseren en ondersteunt de slaapkwaliteit. Het is geen snelle oplossing voor burn-out — herstel kost tijd — maar acupunctuur biedt waardevolle ondersteuning op zowel fysiek als energetisch niveau gedurende het herstelproces.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik acupunctuur combineren met psychologische begeleiding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, absoluut. Acupunctuur en psychologische begeleiding of coaching zijn complementair. Acupunctuur werkt op het lichamelijke en energetische herstel, terwijl psychologische begeleiding zich richt op de patronen, overtuigingen en gedrag die aan de burn-out bijdroegen. De combinatie is vaak effectiever dan elk afzonderlijk.",
          },
        },
      ],
    },
  ],
};

export default function BurnOutPage() {
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
            <span className="text-[#1F3A36]">Burn-out</span>
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
              Acupunctuur bij Burn-out
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Een burn-out is geen zwakte — het is de uitkomst van jarenlang harder lopen dan uw energiereserves aankunnen. Herstel is een proces dat tijd vraagt en een holistische aanpak verdient. Acupunctuur ondersteunt dit proces door het zenuwstelsel te kalmeren, slaap te herstellen en de diepste energiereserves van het lichaam te tonifiëren.
            </p>
          </div>
        </header>

        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij burn-out?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur ondersteunt herstel bij burn-out door het uitgeputte zenuwstelsel te herstellen, de bijnierfunctie te ondersteunen en slaap te verbeteren. Het verlicht vermoeidheid, hoofdpijn en concentratieklachten, en versnelt het herstelproces — effectief als onderdeel van een integraal traject naast coaching en rust.
              </p>
            </div>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is een burn-out?</h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>Burn-out is een toestand van volledige uitputting — fysiek, emotioneel en mentaal — die ontstaat na een langdurige periode van overbelasting zonder voldoende herstel. Het is meer dan gewone moeheid: het is een systemische ineenstorting van het vermogen van het lichaam om te functioneren en te herstellen.</p>
                <p>De drie kerndimensies van burn-out zijn: emotionele uitputting (de tank is leeg), depersonalisatie of cynisme (onthechting van het werk en de mensen eromheen) en een gevoel van verminderde persoonlijke bekwaamheid (twijfels aan uw eigen kunnen).</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    { fase: "Vroeg stadium", desc: "Overmatige inzet, moeilijk loslaten, eerste slaapproblemen, gespannenheid die niet weggaat." },
                    { fase: "Midden stadium", desc: "Toenemende vermoeidheid, concentratieproblemen, emotionele labiliteit, fysieke klachten (nek, buik, hoofd)." },
                    { fase: "Volledig burn-out", desc: "Complete uitputting, onvermogen te functioneren, diepe somberheid, terugtrekking uit alle activiteiten." },
                  ].map(item => (
                    <div key={item.fase} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                      <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.fase}</h3>
                      <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Symptomen van burn-out</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-[#1F3A36] text-sm mb-3">Fysieke symptomen</h3>
                  <ul className="space-y-2 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                    {["Extreme vermoeidheid, ook na rust en slaap", "Slaapproblemen (inslapen, doorslapen)", "Pijn in nek, schouders, rug", "Hoofdpijn, maagklachten, hartkloppingen", "Verhoogde vatbaarheid voor infecties"].map(s => (
                      <li key={s} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8A6B3D] shrink-0" />{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-[#1F3A36] text-sm mb-3">Mentale en emotionele symptomen</h3>
                  <ul className="space-y-2 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                    {["Concentratie- en geheugenproblemen (brain fog)", "Emotionele uitputting of afvlakking", "Prikkelbaarheid, huilbuien", "Angst, piekeren, sombere gedachten", "Gevoel van zinloosheid of hopeloosheid"].map(s => (
                      <li key={s} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6559] shrink-0" />{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur burn-out behandelt</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Oosters perspectief</h3>
                  <p>In de Traditionele Chinese Geneeskunde is burn-out een toestand van diepe <em>Nier-Jing uitputting</em> — de Jing is de diepste essentiële levensenergie, opgeslagen in de Nieren. Wanneer deze reserve te lang wordt aangesproken zonder te worden aangevuld, raakt het systeem fundamenteel uitgeput. Tegelijkertijd is het <em>Hart-Vuur</em> gedoofd: de vonk van levensvreugde, verbinding en doel is weg. De <em>Milt-Qi</em> is verzwakt: denkvermogen, concentratie en spijsvertering zijn aangetast.</p>
                  <p>Behandeling tonificeert langzaam en voorzichtig de Nier-Qi, voedt Hart-Bloed en kalmeert de Shen (geest). We gebruiken bewust rustige behandelingen met weinig naaldjes om het reeds uitgeputte systeem niet verder te belasten.</p>
                </div>
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Westers perspectief</h3>
                  <p>Chronische stress leidt tot een dysregulatie van de HPA-as (hypothalamus-hypofyse-bijnier-as). Aanvankelijk verhoogd cortisol resulteert uiteindelijk in een relatief verlaagd cortisol bij volledig burn-out — de bijnierfunctie is uitgeput. Het autonome zenuwstelsel is chronisch in de sympathische stand (vecht-of-vlucht) en kan niet meer terugschakelen naar parasympathisch (rust en herstel).</p>
                  <p>Acupunctuur activeert het parasympathisch zenuwstelsel, normaliseert het cortisol-dagritmee, verbetert de HRV (hartritmevariabiliteit) en bevordert de aanmaak van GABA en serotonine — neurotransmitters essentieel voor rust, slaap en emotioneel evenwicht.</p>
                </div>
              </div>
            </section>

            <section className="bg-[#F2EDE3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat u kunt verwachten</h2>
              <div className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>Burn-out herstel is een marathon, geen sprint. Acupunctuur is één pijler van een integraal herstelplan dat ook rust, bewuste leefstijlverandering en psychologische begeleiding omvat.</p>
                <p>We starten met wekelijkse behandelingen gedurende de eerste 4–6 weken. De behandelingen zijn rustig en bewust licht: het uitgeputte systeem heeft zachte impuls nodig, geen krachtige prikkel. Na de initiële fase schalen we terug naar twee-wekelijkse en later maandelijkse sessies naarmate de energie terugkeert.</p>
                <p>Wat cliënten als eerste merken: verbetering van slaapkwaliteit, afname van lichamelijke spanning (nek, schouders) en een iets rustiger hoofd. De grote energetische terugkeer vraagt meer tijd — reken op 3–6 maanden voor merkbaar herstel van de algehele vitaliteit.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is behandeling geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Mensen in de vroege of midden fase van burn-out", "Mensen die na langdurige rust klaar zijn voor actief herstel", "Mensen die acupunctuur willen combineren met coaching of therapie", "Mensen met lichamelijke klachten als gevolg van burn-out (nek, slaap, maag)", "Mensen die preventief willen werken om burn-out te voorkomen", "Mensen die merken dat ze op de grens zitten van overbelasting"].map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#4A6559] text-lg mt-0.5 shrink-0" stroke-width="1.5" />
                    <span className="text-sm text-[#1F3A36]/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <p className="text-sm text-[#1F3A36]/60 font-light leading-relaxed">
                Onze praktijk in Koog aan de Zaan is een rustige, veilige omgeving — bewust ingericht voor mensen die herstellen van stress en uitputting. Lees ook over <Link href="/klachten/stressklachten" className="text-[#4A6559] underline underline-offset-2">stressklachten</Link> en <Link href="/klachten/slaapproblemen" className="text-[#4A6559] underline underline-offset-2">slaapproblemen</Link> als onderdeel van het burn-out beeld.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over burn-out</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Hoe kan acupunctuur helpen bij burn-out herstel?", a: "Acupunctuur activeert het parasympathisch zenuwstelsel, helpt cortisol-ritmes te normaliseren en ondersteunt slaapkwaliteit. Het tonificeert de diepste energiereserves (Nier-Jing) die bij burn-out zijn uitgeput. Het is een ondersteuning van het herstelproces, geen vervanging voor rust en psychologische begeleiding." },
                { q: "Kan ik starten met acupunctuur in het begin van een burn-out?", a: "Ja, vroege interventie is bij voorkeur. In het vroege stadium kunt u de spiraal mogelijk doorbreken voordat de uitputting volledig is. Wacht niet tot u volledig op is — hoe eerder we beginnen, hoe zachter en effectiever de behandeling kan zijn." },
                { q: "Hoe lang duurt burn-out herstel met acupunctuur?", a: "Burn-out is een herstelproces van maanden tot soms een jaar of langer. Acupunctuur ondersteunt elk stadium van dit proces. Realistische verwachting: eerste verbetering in slaap en lichamelijke spanning na 4–6 weken; merkbare verbetering van algehele energie en stemming na 3–4 maanden van geïntegreerde aanpak." },
                { q: "Worden burn-out behandelingen vergoed?", a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars, dankzij onze NVA/TCMA-erkenning. Dit gaat niet ten koste van uw eigen risico." },
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
                { href: "/klachten/slaapproblemen", label: "Slaapproblemen" },
                { href: "/klachten/vermoeidheid", label: "Vermoeidheid" },
                { href: "/klachten/concentratieproblemen", label: "Concentratieproblemen" },
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
                  Klaar om uw herstel te ondersteunen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Plan een rustige intake in. We bespreken uw situatie en stellen samen een haalbaar herstelplan op. Of stel uw vraag via WhatsApp.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_burn_out" title="Maak een afspraak" />
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
