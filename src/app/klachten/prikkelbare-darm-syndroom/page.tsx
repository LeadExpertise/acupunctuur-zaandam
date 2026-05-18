import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  alternates: { canonical: "/klachten/prikkelbare-darm-syndroom" },
  title: "Acupunctuur bij Prikkelbare Darm Syndroom (PDS) Zaandam",
  description:
    "Behandeling van PDS, buikpijn, opgeblazen gevoel en darmkrampen met acupunctuur in Zaandam. Reguleer de hersen-darm-verbinding op een natuurlijke manier.",
  keywords: [
    "acupunctuur PDS",
    "prikkelbare darm syndroom acupunctuur zaandam",
    "acupunctuur IBS zaandam",
    "buikpijn behandeling acupunctuur",
    "opgeblazen gevoel acupunctuur zaandam",
    "darmklachten acupunctuur zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/prikkelbare-darm-syndroom",
      name: "Acupunctuur bij Prikkelbare Darm Syndroom (PDS)",
      description: "Informatie over de behandeling van PDS, buikpijn en opgeblazen gevoel via Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Prikkelbare Darm Syndroom" },
        { "@type": "MedicalCondition", name: "Functionele buikpijn" },
        { "@type": "MedicalCondition", name: "Irritable Bowel Syndrome" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij het prikkelbare darm syndroom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In de klinische praktijk zien we bij PDS regelmatig positieve resultaten: vermindering van buikpijn, minder opgeblazen gevoel en normalisering van de darmtransit. Acupunctuur beïnvloedt de hersen-darm-as via de vagusnervus en reguleert de verhouding tussen Lever (spanning, emoties) en Milt (spijsvertering) — een patroon dat sterk overeenkomt met het westerse PDS-concept.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik acupunctuur combineren met het FODMAP-dieet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, absoluut. Het FODMAP-dieet en acupunctuur zijn complementair en versterken elkaar. Het dieet vermindert triggerende voedingsstoffen; acupunctuur behandelt de onderliggende gevoeligheid van de darm en de invloed van stress op de spijsvertering.",
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
          name: "Prikkelbare Darm Syndroom",
          item: "https://www.acupunctuurzaandam.nl/klachten/prikkelbare-darm-syndroom",
        },
      ],
    },
  ],
};

export default function PrikkelbaareDarmSyndoomPage() {
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
            <Link href="/klachten/spijsvertering-buik" className="hover:text-[#1F3A36] transition-colors">Spijsvertering &amp; buik</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Prikkelbare darm syndroom</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mx-auto px-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Spijsvertering &amp; Buik</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Prikkelbare Darm Syndroom (PDS)
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              PDS is een van de meest voorkomende functionele darmaandoeningen — chronische buikpijn, wisseling van diarree en obstipatie, opgeblazen gevoel — zonder aantoonbare structurele afwijking. Toch is de pijn en het ongemak heel reëel. Acupunctuur richt zich op de hersen-darm-as en het onderliggende patroon van Lever-Milt disbalans dat aan de basis ligt van de meeste PDS-presentaties.
            </p>
          </div>
        </header>

        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {/* Featured Snippet — targets "Helpt acupunctuur bij prikkelbare darm syndroom?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur is bewezen effectief bij het prikkelbare darm syndroom (PDS/IBS). Het reguleert de darm-hersenas, vermindert viscerale hypersensitiviteit en verlicht buikpijn, krampen en wisselende ontlasting. Meerdere gerandomiseerde studies tonen significante klachtenvermindering aan bij PDS-patiënten na een behandeltraject van 8–10 sessies.
              </p>
            </div>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is het prikkelbare darm syndroom?</h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>PDS (prikkelbare darm syndroom) of IBS (irritable bowel syndrome) is een chronische functionele darmaandoening die gekenmerkt wordt door terugkerende buikpijn in samenhang met veranderingen in de stoelgang. Er is geen structurele darmaandoening (zoals de ziekte van Crohn of colitis) aanwezig, maar de klachten zijn voor de patiënt wel degelijk invaliderend.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {[
                    { type: "PDS-D (Diarree)", desc: "Overheersend diarree, urgente aandrang, losse ontlasting meerdere keren per dag." },
                    { type: "PDS-C (Constipatie)", desc: "Overheersend obstipatie, moeizame stoelgang, harde keutels, opgeblazen gevoel." },
                    { type: "PDS-M (Gemengd)", desc: "Wisselend patroon van diarree en obstipatie, soms binnen één dag." },
                  ].map(item => (
                    <div key={item.type} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                      <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.type}</h3>
                      <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Symptomen en klachten</h2>
              <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                {["Terugkerende buikpijn die verbetert na ontlasting", "Opgeblazen gevoel en gasvorming", "Urgente aandrang of juist moeizame stoelgang", "Slijm bij de ontlasting", "Gevoel van onvolledige lediging", "Verergering bij stress, spanning of bepaalde voedingen", "Vermoeidheid en concentratieproblemen als bijkomende klachten"].map(s => (
                  <li key={s} className="flex items-start gap-3"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8A6B3D] shrink-0" />{s}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur PDS behandelt</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Oosters perspectief</h3>
                  <p>Het klassieke TCG-patroon bij PDS is <em>Lever invadeert Milt</em>: wanneer de Lever (verantwoordelijk voor de vrije stroom van Qi en emoties) overbelast is door stress of frustratie, overheerst hij de Milt (verantwoordelijk voor spijsvertering en transport van voedingsstoffen). Dit verstoort de darmmotiliteit en veroorzaakt buikpijn, opgeblazen gevoel en wisselende ontlasting — precies het beeld van PDS.</p>
                  <p>Behandeling richt zich op het vrijmaken van Lever-Qi, het versterken van de Milt en het herstellen van de harmonie tussen beide organen. Punten op de Lever-, Milt- en Maag-meridiaan worden gecombineerd met lokale buikpunten.</p>
                </div>
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Westers perspectief</h3>
                  <p>PDS wordt westers begrepen via de hersen-darm-as: het bidirectionele communicatiesysteem tussen hersenen en het enterische zenuwstelsel in de darm. Bij PDS is dit systeem dysgereguleerd: visceraal overgevoelig (darmsensaties worden versterkt waargenomen), en sterk beïnvloedbaar door stress.</p>
                  <p>Acupunctuur moduleert het enterische zenuwstelsel via vagusnervus-activering, vermindert viscerale overgevoeligheid en herstelt de darmmotiliteit. Het vermindert ook de stressgerelateerde activering van de darm via demping van de HPA-as.</p>
                </div>
              </div>
            </section>

            <section className="bg-[#F2EDE3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat u kunt verwachten</h2>
              <div className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>PDS is een chronische aandoening die een aanpak over langere tijd vraagt. We adviseren een traject van 8–12 behandelingen. Veel cliënten merken na 3–4 sessies al een vermindering van buikpijn en opgeblazen gevoel. Normalisering van de darmtransit vraagt meer geduld.</p>
                <p>We combineren acupunctuurbehandeling met aandacht voor leefstijl: stressreductie, eetpatroon en slaaphygiëne. Bij PDS-C (met overheersend obstipatie) voegen we soms moxibustie toe voor het verwarmen van de buik.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is behandeling geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Mensen met gediagnosticeerd PDS die aanvullende behandeling zoeken", "Mensen met stress-gerelateerde darmklachten", "Mensen die het FODMAP-dieet willen aanvullen met behandeling", "Mensen die buikklachten hebben na infectie (post-infectieus PDS)", "Mensen die reguliere behandelingen (spasmolytisch, laxantia) willen reduceren", "Mensen met zowel PDS als angstklachten of stress"].map(item => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#4A6559] text-lg mt-0.5 shrink-0" stroke-width="1.5" />
                    <span className="text-sm text-[#1F3A36]/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <p className="text-sm text-[#1F3A36]/60 font-light leading-relaxed">
                Onze praktijk in Koog aan de Zaan behandelt cliënten met PDS en spijsverteringsklachten uit Zaandam en omgeving. Bekijk ook <Link href="/klachten/spijsvertering-buik" className="text-[#4A6559] underline underline-offset-2">spijsverteringsklachten</Link> voor een breder overzicht. De sterke relatie tussen PDS en <Link href="/klachten/stressklachten" className="text-[#4A6559] underline underline-offset-2">stressklachten</Link> wordt in de intake altijd besproken.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over PDS</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: "Helpt acupunctuur bij PDS?", a: "In de klinische praktijk zien we regelmatig positieve resultaten bij PDS: minder buikpijn, minder opgeblazen gevoel en een regelmatiger darmpatroon. Acupunctuur beïnvloedt de hersen-darm-as via de vagusnervus en reguleert de Lever-Milt verhouding in de TCG." },
                { q: "Kan ik acupunctuur combineren met het FODMAP-dieet?", a: "Ja, absoluut. De twee benaderingen zijn complementair. Het FODMAP-dieet vermindert de inname van fermenteerbare koolhydraten die PDS-klachten triggeren. Acupunctuur behandelt de onderliggende gevoeligheid van de darm en de invloed van stress op de spijsvertering." },
                { q: "Hoeveel behandelingen zijn nodig?", a: "Voor PDS adviseren we een traject van 8–12 behandelingen over 3–4 maanden. PDS is een chronische aandoening en vraagt een aanpak over langere tijd. Eerste verbetering in buikpijn en opgeblazen gevoel is doorgaans merkbaar na 3–5 sessies." },
                { q: "Worden PDS-behandelingen vergoed?", a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars. Dit gaat niet ten koste van uw eigen risico." },
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
        <TrustBadges />

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
                { href: "/klachten/darmklachten", label: "Darmklachten" },
                { href: "/klachten/obstipatie", label: "Obstipatie" },
                { href: "/klachten/buikpijn", label: "Buikpijn" },
                { href: "/klachten/stressklachten", label: "Stressklachten" },
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
                  Klaar voor een rustiger buik?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Plan een intake in. Of stuur ons een WhatsApp bericht — we bespreken graag of acupunctuur bij uw PDS-beeld past.</p>
                <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  WhatsApp ons
                </a>
              </div>
              <BookingWidget id="pds" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
