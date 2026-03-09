import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Vruchtbaarheidsproblemen Zaandam | Fertiliteit",
  description:
    "Acupunctuur als aanvullende ondersteuning bij vruchtbaarheidsproblemen in Zaandam. Voor vrouwen en mannen die zwanger willen worden, inclusief hormonale en onverklaarde infertiliteit.",
  keywords: [
    "acupunctuur vruchtbaarheidsproblemen zaandam",
    "fertiliteit acupunctuur",
    "onverklaard infertiliteit acupunctuur zaandam",
    "zwanger worden acupunctuur",
    "sperma kwaliteit acupunctuur",
    "acupunctuur zwangerschap ondersteuning zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/vruchtbaarheidsproblemen",
      name: "Acupunctuur bij Vruchtbaarheidsproblemen",
      description: "Informatie over acupunctuur als aanvullende ondersteuning bij vruchtbaarheidsproblemen en fertiliteitsvraagstukken in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Vruchtbaarheidsproblemen" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Infertiliteit" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur de vruchtbaarheid verbeteren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur wordt ingezet als aanvullende ondersteuning bij vruchtbaarheidsproblemen. Mogelijke bijdragen zijn: verbetering van de doorbloeding van de baarmoeder, regulatie van hormonen, vermindering van stress en ondersteuning van de cyclus. Het bewijs is gemengd en acupunctuur is geen vervanging voor vruchtbaarheidsbehandeling. Altijd in overleg met uw fertiliteitsarts.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt acupunctuur ook bij mannelijke vruchtbaarheidsproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur en leefstijladviezen kunnen ondersteuning bieden bij verminderde spermaparameters (lagere concentratie, motiliteit of morfologie). Onderzoek is beperkt maar veelbelovend. We behandelen bij voorkeur beide partners tegelijk voor een optimaal resultaat.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe lang duurt een behandeltraject voor vruchtbaarheidsproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We adviseren minimaal 3 menstruatiecycli (maanden) behandeling als voorbereiding op zwangerschap of IVF. Een spermacel heeft circa 90 dagen nodig om te rijpen, dus voor optimaal effect bij mannelijke factoren is een behandeltraject van 3 maanden gewenst.",
          },
        },
        {
          "@type": "Question",
          name: "Worden fertiliteitsbehandelingen met acupunctuur vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur zelf wordt vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars. Specifieke vruchtbaarheidsbehandelingen (IVF, medicatie) vallen onder aparte vergoedingsregelingen. Check uw polisvoorwaarden.",
          },
        },
      ],
    },
  ],
};

export default function VruchtbaarheidsproblemenPage() {
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
            <Link href="/klachten/hormonen-vrouwenklachten" className="hover:text-[#1F3A36] transition-colors">Hormonen &amp; vrouwenklachten</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Vruchtbaarheidsproblemen</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mx-auto px-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Hormonen &amp; Vrouwenklachten</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Vruchtbaarheidsproblemen in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              De wens voor een kind die maar niet vervuld raakt — dat is een van de zwaarst belastende ervaringen die een stel kan doormaken. Acupunctuur biedt geen garanties, maar kan als zorgvuldig afgestemde aanvulling bijdragen aan een betere uitgangspositie: hormonaal evenwicht, minder stress, betere doorbloeding en ondersteuning van de cyclus.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij vruchtbaarheidsproblemen?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur ondersteunt de vruchtbaarheid door de bloedtoevoer naar de eierstokken en baarmoeder te verbeteren, stresshormonen te verlagen en de hormonale cyclus te reguleren. Studies tonen hogere zwangerschapskansen aan bij vrouwen die acupunctuur combineren met IVF — en het is ook effectief bij natuurlijk proberen zwanger te worden.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat zijn vruchtbaarheidsproblemen?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Van vruchtbaarheidsproblemen wordt gesproken wanneer een stel na 12 maanden regelmatig onbeschermd vrijen (of 6 maanden bij vrouwen boven de 35) niet zwanger is geworden. De oorzaak kan liggen bij de vrouw (ovulatieproblemen, tubaire factoren, endometriose, PCOS), de man (verminderde spermaparameters), of — in circa 20–30% van de gevallen — is er geen duidelijke verklaring (onverklaarde infertiliteit).
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Medisch onderzoek is altijd de eerste stap bij vruchtbaarheidsvragen. Acupunctuur positioneren wij als aanvullende ondersteuning op de medische route — niet als alternatief daarvoor.
              </p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Vrouwelijke factoren</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Ovulatieproblemen (PCOS, anovulatie)",
                      "Onregelmatige of uitblijvende cyclus",
                      "Endometriose of adhesies",
                      "Hormonale disbalans (FSH, LH, AMH)",
                      "Slechte eikwaliteit",
                      "Onverklaarde infertiliteit",
                    ].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mannelijke factoren</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Verminderde spermaconcentratie (oligospermie)",
                      "Slechte beweeglijkheid (asthenospermie)",
                      "Morfologie-afwijkingen (teratospermie)",
                      "Verhoogde DNA-fragmentatie sperma",
                      "Hormonale factoren bij de man",
                      "Stress als bijdragende factor",
                    ].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur kan helpen</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG zijn de <em>Nier-Jing en Nier-Qi</em> de basis van de voortplantingsfunctie. De Jing bepaalt de reproductieve essentie — de kwaliteit van eicellen en zaadcellen. De <em>Chong Mai</em> (het &ldquo;zee van bloed&rdquo;) en <em>Ren Mai</em> regelen de cyclus en de baarmoeder. Behandeling richt zich op het voeden van de Nier-Jing, het reguleren van de Chong en Ren, het verbeteren van de Bloed-kwaliteit (voor de opbouw van het baarmoederslijmvlies) en het wegnemen van stagnatie die implantatie kan belemmeren.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding baarmoeder:</strong> Acupunctuur verbetert de doorbloeding van de baarmoeder en eierstokken, wat bijdraagt aan betere follikelrijping en een dikker baarmoederslijmvlies — gunstig voor innesteling.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Stressreductie:</strong> Chronische stress verhoogt cortisol en verlaagt LH/FSH-pulsatie, wat ovulatie kan onderdrukken. Acupunctuur normaliseert de stressrespons en ondersteunt de HPO-as.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Hormonale balans:</strong> Ondersteuning van de oestrogeen- en progesteronproductie via regulatie van de HPO-as. Het bewijs is gemengd — we zijn bewust terughoudend in onze claims bij vruchtbaarheidsproblemen.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat kunt u verwachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                We starten met een uitgebreide intake waarbij we de volledige medische en levensgeschiedenis bespreken. Een behandeltraject voor vruchtbaarheidsproblemen duurt minimaal 3 maanden — de rijpingscyclus van een eicel duurt ca. 90 dagen, en voor sperma geldt hetzelfde. Behandelingen zijn wekelijks, afgestemd op de cyclus.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                We begeleiden bij voorkeur beide partners. Naast acupunctuur geven we leefstijladviezen over voeding, beweging, slaap en het vermijden van schadelijke stoffen. We werken samen met uw fertiliteitsarts en passen onze aanpak aan op eventuele medische behandelingen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is dit geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Stellen die proberen zwanger te raken",
                  "Vrouwen met hormonale vruchtbaarheidsproblemen",
                  "Vrouwen als voorbereiding op IVF of IUI",
                  "Mannen met verminderde spermaparameters",
                  "Stellen met onverklaarde infertiliteit",
                  "Mensen die de aanvullende zorg willen optimaliseren",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span className="text-sm font-medium text-[#1F3A36]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Behandeling in Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/hormonen-vrouwenklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Hormonen &amp; vrouwenklachten overzicht</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/ivf-icsi-ondersteuning" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">IVF/ICSI ondersteuning</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/hormonale-disbalans" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Hormonale disbalans</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Alle klachten</Link>
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
              {[
                { q: "Kan acupunctuur de vruchtbaarheid verbeteren?", a: "Acupunctuur wordt ingezet als aanvullende ondersteuning bij vruchtbaarheidsproblemen. Mogelijke bijdragen zijn: verbetering van de doorbloeding van de baarmoeder, regulatie van hormonen, vermindering van stress en ondersteuning van de cyclus. Het bewijs is gemengd en acupunctuur is geen vervanging voor vruchtbaarheidsbehandeling." },
                { q: "Helpt acupunctuur ook bij mannelijke vruchtbaarheidsproblemen?", a: "Ja. Acupunctuur en leefstijladviezen kunnen ondersteuning bieden bij verminderde spermaparameters. We behandelen bij voorkeur beide partners tegelijk voor een optimaal resultaat." },
                { q: "Hoe lang duurt een behandeltraject voor vruchtbaarheidsproblemen?", a: "We adviseren minimaal 3 menstruatiecycli behandeling als voorbereiding op zwangerschap of IVF. Een spermacel heeft circa 90 dagen nodig om te rijpen, dus voor optimaal effect bij mannelijke factoren is een behandeltraject van 3 maanden gewenst." },
                { q: "Worden fertiliteitsbehandelingen met acupunctuur vergoed?", a: "Acupunctuur zelf wordt vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars. Specifieke vruchtbaarheidsbehandelingen (IVF, medicatie) vallen onder aparte vergoedingsregelingen. Check uw polisvoorwaarden." },
              ].map(item => (
                <details key={item.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                    {item.q}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                    </span>
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
                { href: "/klachten/ivf-icsi-ondersteuning", label: "IVF/ICSI Ondersteuning" },
                { href: "/klachten/hormonale-disbalans", label: "Hormonale Disbalans" },
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/endometriose-pcos", label: "Endometriose & PCOS" },
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
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">We begeleiden u en uw partner met zorg en aandacht. Plan een intake in — een veilige ruimte om uw situatie te bespreken en samen te kijken hoe we kunnen ondersteunen.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_vruchtbaarheidsproblemen" title="Maak een afspraak" />
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
