import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/klachten/migraine", {
  title: "Acupunctuur bij Migraine Zaandam | Aanvallen Voorkomen",
  description:
    "Verlaag de frequentie en intensiteit van migraineaanvallen met acupunctuur in Zaandam. Onderbouwd door Cochrane-onderzoek. Minder aanvallen, minder medicatie.",
  keywords: [
    "acupunctuur migraine",
    "migraine behandeling zaandam",
    "migraineaanvallen verminderen acupunctuur",
    "preventieve migraine acupunctuur",
    "chronische migraine acupunctuur zaandam",
    "migraine zonder medicatie",
    "acupunctuur migraine cochrane",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/migraine",
      name: "Acupunctuur bij Migraine",
      description:
        "Informatie over de behandeling van migraine en het voorkomen van migraineaanvallen via Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Migraine" },
        { "@type": "MedicalCondition", name: "Chronische migraine" },
        { "@type": "MedicalCondition", name: "Migraine met aura" },
      ],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Migraine" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is acupunctuur wetenschappelijk bewezen effectief bij migraine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Een systematische review van de Cochrane Collaboration (Linde et al., 2016) concludeerde dat acupunctuur minstens even effectief is als profylactische migraine-medicatie bij het verlagen van de aanvalsfrequentie, met minder bijwerkingen. Dit maakt acupunctuur een serieuze optie voor mensen die hun migraineaanvallen structureel willen verminderen.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur een acute migraineaanval stoppen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij behandeling in het vroege begin van een aanval (prodroom of vroege pijnfase) zien we in de praktijk dat acupunctuur de aanval soms kan afbreken of aanzienlijk verzachten. Het grootste voordeel van acupunctuur is echter preventief: het verlagen van de aanvalsfrequentie en -intensiteit over langere tijd.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.acupunctuurzaandam.nl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Welke klachten",
          item: "https://www.acupunctuurzaandam.nl/welke-klachten",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Migraine",
          item: "https://www.acupunctuurzaandam.nl/klachten/migraine",
        },
      ],
    },
  ],
};

const TrustBar = () => (
  <TrustBadges />
);

export default function MigrainePage() {
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
            <span className="text-[#1F3A36]">Migraine</span>
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
              Acupunctuur bij Migraine
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Migraineaanvallen zetten uw leven op pauze. Uren of soms dagen van ernstige, kloppende hoofdpijn, misselijkheid en lichtgevoeligheid die u volledig uitschakelen. Wat als u de frequentie en intensiteit van aanvallen structureel kunt verlagen, zonder de bijwerkingen van profylactische medicatie? De Cochrane Collaboration concludeerde dat acupunctuur daarvoor een bewezen, effectieve optie is.
            </p>
          </div>
        </header>

        {/* Content */}
        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij migraine?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Een Cochrane-review van 22 studies (4.900+ deelnemers) bevestigt dat acupunctuur minstens even effectief is als profylactische migraine-medicatie bij het verminderen van aanvalsfrequentie — maar zonder bijwerkingen. Acupunctuur moduleert de trigeminuszenuw en stabiliseert de serotonine-aanmaak.
              </p>
            </div>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is migraine?
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  Migraine is meer dan een hevige hoofdpijn. Het is een neurologische aandoening waarbij aanvallen van ernstige hoofdpijn optreden, vaak gepaard met andere neurologische verschijnselen. Migraine treft naar schatting 12–15% van de Nederlandse bevolking en is de meest invaliderende niet-fatale neurologische aandoening wereldwijd.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {[
                    { title: "Migraine zonder aura", desc: "De meest voorkomende vorm. Kloppende, eenzijdige hoofdpijn gedurende 4–72 uur, met misselijkheid en licht-/geluidsgevoeligheid." },
                    { title: "Migraine met aura", desc: "Voorafgaand aan de hoofdpijn treden reversibele neurologische verschijnselen op: visuele stoornissen (zigzaglijnen, vlekken), tintelingen of spraakstoornissen." },
                    { title: "Chronische migraine", desc: "15 of meer hoofdpijndagen per maand, waarvan minstens 8 met migrainkenmerken. Ernstige impact op kwaliteit van leven en werkvermogen." },
                    { title: "Menstruele migraine", desc: "Aanvallen die samenhangen met de menstruatiecyclus. Hormonale fluctuaties (estrogeendaling) zijn een sterke trigger." },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                      <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.title}</h3>
                      <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Symptomen &amp; triggers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-medium text-[#1F3A36] text-sm mb-3">Symptomen van een aanval</h3>
                  <ul className="space-y-2 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                    {["Kloppende, bonzende hoofdpijn (meestal eenzijdig)", "Misselijkheid en soms braken", "Extreme lichtgevoeligheid (fotofobiie)", "Extreme geluidsgevoeligheid (fonofobiie)", "Aura: visuele stoornissen, tintelingen, taalstoornis", "Prodroom: vermoeidheid, prikkelbaarheid, concentratieproblemen"].map(s => (
                      <li key={s} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8A6B3D] shrink-0" />{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-[#1F3A36] text-sm mb-3">Veelvoorkomende triggers</h3>
                  <ul className="space-y-2 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                    {["Stress en stressontlading (weekend-migraine)", "Slaaptekort of te veel slaap", "Hormonale schommelingen (menstruatie, pil)", "Bepaalde voedingsmiddelen (rode wijn, kaas, chocolade)", "Overslaan van maaltijden, uitdroging", "Weersveranderingen, felle lichten"].map(s => (
                      <li key={s} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6559] shrink-0" />{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur migraine behandelt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Oosters perspectief</h3>
                  <p>
                    In de Traditionele Chinese Geneeskunde is migraine vrijwel altijd gekoppeld aan <em>opstijgend Lever-Yang</em>: een overmaat aan Yang-energie (warmte, spanning) die naar boven stijgt en het hoofd overspoelt. Dit patroon wordt gevoed door stress, boosheid, frustratie en slaaptekort. Bij vrouwen met menstruele migraine speelt ook een <em>Lever-Bloed leegte</em> mee, waarbij het hoofd onvoldoende wordt gevoed in de fase na de menstruatie.
                  </p>
                  <p>
                    Behandeling richt zich op het verlagen van het opstijgende Yang (punten op de lever- en galblaasmeriidiaan), het voeden van Lever-Bloed en het verbeteren van de circulatie in de hoofdmeridianen. Ook behandelen we punten op de handen en voeten om energie te ontrekken aan het hoofd.
                  </p>
                </div>
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Westers perspectief</h3>
                  <p>
                    Migraine wordt verklaard via de trigeminusvasculaire theorie: activering van de trigeminuszenuw leidt tot het vrijkomen van neuropeptiden (CGRP) die bloedvaten doen verwijden en ontstekingsreacties triggeren in de hersen- en schedelvliezen. Acupunctuur remt deze trigeminusactivering, moduleert serotonine- en endorfine-afgifte, en heeft aangetoond de corticale spreading depression (een elektrische golf die aan de basis ligt van het aura) te beïnvloeden.
                  </p>
                </div>
              </div>
            </section>

            {/* Science section */}
            <section className="bg-[#FAF8F3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <div className="flex items-center gap-3 mb-4">
                <iconify-icon icon="solar:document-text-linear" className="text-2xl text-[#4A6559]" stroke-width="1.5" />
                <h2 className="text-xl font-normal text-[#1F3A36] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Wetenschappelijk onderzoek
                </h2>
              </div>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  <strong className="text-[#1F3A36] font-medium">Cochrane Review — Linde et al. (2016)</strong><br />
                  De meest gezaghebbende systematische review op dit gebied werd gepubliceerd door de Cochrane Collaboration: <em>Linde K, et al. &ldquo;Acupuncture for the prevention of episodic migraine.&rdquo; Cochrane Database of Systematic Reviews. 2016;(6):CD001218.</em>
                </p>
                <p>
                  De reviewers analyseerden 22 gerandomiseerde gecontroleerde studies met in totaal meer dan 4.900 deelnemers. Hun conclusie: acupunctuur vermindert de aanvalsfrequentie bij migraine minstens even effectief als profylactische medicatie (zoals bètablokkers of topiramaat), met aanzienlijk minder bijwerkingen. Meer dan 50% aanvalsvermindering werd bij een groter deel van de acupunctuurpatiënten bereikt dan bij medicatiegebruikers.
                </p>
                <p className="text-xs text-[#1F3A36]/50 italic">
                  Bovenstaand onderzoek is gepubliceerd in een peer-reviewed wetenschappelijk tijdschrift. We vermelden uitsluitend bewezen en geverifieerde studies.
                </p>
              </div>
            </section>

            <section className="bg-[#F2EDE3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat u kunt verwachten</h2>
              <div className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>Voor migraine adviseren we een profylactisch traject van 8–12 behandelingen, verspreid over 10–14 weken. Dit is vergelijkbaar met de periode die profylactische medicatie nodig heeft om aan te slaan. Meetbaar resultaat (reductie in aanvalsfrequentie) is doorgaans merkbaar na 4–6 sessies.</p>
                <p>Bij een acute aanval in een vroeg stadium behandelen we op specifieke punten (o.a. GB 20, LI 4, LR 3) die zijn aangetoond de trigeminusactivering te remmen. Dit kan de aanval verzachten of verkorten, maar is minder voorspelbaar dan het preventieve effect.</p>
                <p>Na het profylactische traject adviseren we een onderhoudsfrequentie van 1 behandeling per 4–6 weken om het bereikte resultaat te behouden.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is behandeling geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met episodische migraine (≥ 4 aanvallen/maand)",
                  "Mensen die de bijwerkingen van profylactische medicatie willen vermijden",
                  "Vrouwen met hormonale of menstruele migraine",
                  "Mensen die acupunctuur willen combineren met bestaande migraine-medicatie",
                  "Mensen die hun aanvallen via een holistische aanpak willen verminderen",
                  "Kinderen en jongvolwassenen met migraine (met ouderlijk akkoord)",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#4A6559] text-lg mt-0.5 shrink-0" stroke-width="1.5" />
                    <span className="text-sm text-[#1F3A36]/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <p className="text-sm text-[#1F3A36]/60 font-light leading-relaxed">
                Acupunctuur Zaandam is gevestigd in Koog aan de Zaan, bereikbaar vanuit Zaandam, Zaandijk, Wormerveer en omgeving. Wij behandelen regelmatig cliënten met migraine en chronische <Link href="/klachten/hoofdpijn" className="text-[#4A6559] underline underline-offset-2">hoofdpijn</Link>. De samenhang tussen migraine en <Link href="/klachten/stressklachten" className="text-[#4A6559] underline underline-offset-2">stressklachten</Link> of <Link href="/klachten/nekklachten" className="text-[#4A6559] underline underline-offset-2">nekspanning</Link> wordt in de intake meegenomen.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over migraine</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Is acupunctuur bij migraine wetenschappelijk bewezen?", a: "Ja. De Cochrane Collaboration publiceerde in 2016 een systematische review (Linde et al.) van 22 studies met meer dan 4.900 deelnemers. Conclusie: acupunctuur is minstens even effectief als profylactische migraine-medicatie bij het verminderen van de aanvalsfrequentie, met minder bijwerkingen." },
                { q: "Kan acupunctuur een lopende aanval stoppen?", a: "Soms, als de behandeling vroeg in de aanval plaatsvindt (prodroom of vroege pijnfase). We behandelen dan op specifieke punten die de trigeminusactivering remmen. Het preventieve effect (minder aanvallen) is echter het meest betrouwbare en voorspelbare effect van acupunctuur bij migraine." },
                { q: "Moet ik stoppen met mijn migraine-medicatie?", a: "Nee, absoluut niet. Acupunctuur is complementair aan uw bestaande behandeling. Uw medicatie (triptanen, bètablokkers) blijft beschikbaar. Naarmate de behandeling aanslaat, zien sommige cliënten in overleg met hun neuroloog de profylactische medicatie kunnen afbouwen." },
                { q: "Worden migraine-behandelingen vergoed?", a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars. Dit gaat niet ten koste van uw eigen risico." },
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

        <TrustBar />

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
                { href: "/klachten/hoofdpijn", label: "Hoofdpijn" },
                { href: "/klachten/nekklachten", label: "Nekklachten" },
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/slaapproblemen", label: "Slaapproblemen" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="klacht-card-link flex items-center justify-between gap-2 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/8 rounded-xl px-5 py-4 transition-colors duration-200 group"
                >
                  <span className="text-sm font-medium text-[#1F3A36]">{item.label}</span>
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#4A6559] text-base shrink-0 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" />
                </svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Klaar voor minder migraineaanvallen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan direct een intake via onze planner. Wilt u eerst bespreken of acupunctuur past bij uw migrainepatroon? Stuur ons een WhatsApp bericht.
                </p>
                <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  WhatsApp ons
                </a>
              </div>
              <BookingWidget id="migraine" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
