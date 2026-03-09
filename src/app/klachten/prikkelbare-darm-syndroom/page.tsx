import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_pds" title="Maak een afspraak" />
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
