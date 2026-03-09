import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Onregelmatige Menstruatie Zaandam",
  description:
    "Acupunctuur voor het reguleren van een onregelmatige cyclus in Zaandam. Van uitblijvende menstruatie tot korte of lange cycli — de TCG biedt gerichte ondersteuning.",
  keywords: [
    "acupunctuur onregelmatige menstruatie zaandam",
    "cyclus reguleren acupunctuur",
    "uitblijvende menstruatie acupunctuur zaandam",
    "amenorroe acupunctuur",
    "onregelmatige cyclus PCOS acupunctuur",
    "acupunctuur HPO-as zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/onregelmatige-menstruatie",
      name: "Acupunctuur bij Onregelmatige Menstruatie",
      description: "Informatie over acupunctuur voor het reguleren van een onregelmatige cyclus in Zaandam via Traditionele Chinese Geneeskunde.",
      about: [{ "@type": "MedicalCondition", name: "Onregelmatige menstruatie" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Onregelmatige menstruatiecyclus" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur een onregelmatige cyclus reguleren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan de HPO-as (hypothalamus-hypofyse-ovarium-as) ondersteunen en de hormoonbalans bevorderen, wat bijdraagt aan een regelmatiger cyclus. Resultaten variëren per persoon en oorzaak. Bij een onderliggende aandoening zoals PCOS of schildklierproblemen is medische beoordeling altijd essentieel.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe lang duurt het voor mijn cyclus regelmatiger wordt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De meeste vrouwen zien verbetering na 2–3 behandelcycli (maanden). We plannen sessies rondom de cyclus voor maximaal effect. Een stabiele, regelmatige cyclus vraagt doorgaans 3–6 maanden begeleiding.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt acupunctuur ook als mijn menstruatie volledig uitblijft?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij amenorroe (uitblijvende menstruatie) is het altijd belangrijk om eerst een medische oorzaak uit te sluiten (zwangerschap, schildklier, hypofyse). Acupunctuur kan ondersteunen bij functionele amenorroe — uitblijvende menstruatie door stress, ondergewicht of hormoonverstoringen zonder structurele oorzaak.",
          },
        },
        {
          "@type": "Question",
          name: "Worden behandelingen voor menstruatieklachten vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars, dankzij onze NVA/TCMA-erkenning. Dit gaat niet ten koste van uw eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function OnregelmatigeMenstruatiePage() {
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
            <span className="text-[#1F3A36]">Onregelmatige menstruatie</span>
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
              Acupunctuur bij Onregelmatige Menstruatie in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Een regelmatige cyclus is een spiegel van uw algehele gezondheid. Wanneer de cyclus korter dan 21 of langer dan 35 dagen is, onregelmatig varieert, of de menstruatie geheel uitblijft, is er een signaal van onderliggende disbalans. Acupunctuur ondersteunt de hormonale regulatie en helpt de cyclus te herstellen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Featured Snippet — targets "Helpt acupunctuur bij onregelmatige menstruatie?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur reguleert een onregelmatige menstruatiecyclus door de hormonale as te balanceren, de bekkendoorbloeding te verbeteren en stresshormonen te verlagen. Effectief bij uitblijvende menstruatie (amenorroe), te korte of te lange cycli, en bij onregelmatigheid door stress, gewichtsschommelingen of PCOS.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is een onregelmatige menstruatie?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Een normale menstruatiecyclus duurt gemiddeld 28 dagen, maar een cyclus van 21–35 dagen wordt als normaal beschouwd. Een cyclus wordt onregelmatig genoemd als de duur sterk varieert van maand tot maand, als de menstruatie vroeger of later dan verwacht optreedt, of als de menstruatie meerdere maanden uitblijft (amenorroe). Onregelmatigheid kan ook betrekking hebben op de hoeveelheid of duur van de bloeding.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Een onregelmatige cyclus is niet alleen vervelend en onvoorspelbaar — het kan ook een indicator zijn van hormonale disbalans en van invloed zijn op de vruchtbaarheid.
              </p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelvoorkomende symptomen</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Cyclus korter dan 21 of langer dan 35 dagen",
                      "Sterk wisselende cyclusduur van maand tot maand",
                      "Uitblijven van menstruatie (amenorroe)",
                      "Tussentijds bloedverlies of spotting",
                      "Zeer lichte of zeer zware bloeding",
                      "Onzekerheid over ovulatie en vruchtbare dagen",
                    ].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mogelijke oorzaken</h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "PCOS (polycysteus-ovariumsyndroom)",
                      "Schildklieraandoeningen (hypo- of hyperthyreoïdie)",
                      "Chronische stress en overbelasting",
                      "Ondergewicht of sterk gewichtsverlies",
                      "Hormonale disbalans (oestrogeen/progesteron)",
                      "Stoppen met hormonale anticonceptie",
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
                    In de TCG wordt de menstruatiecyclus geregeld door de <em>Chong Mai</em> (het &ldquo;zee van bloed&rdquo;-meridian) en de <em>Ren Mai</em>, beide diepgelegen extraordinaire meridianen die de baarmoeder en de vrouwelijke voortplantingsfunctie besturen. Een te korte cyclus wijst vaak op <em>Bloed-Hitte</em> of <em>Yin leegte</em>; een te lange cyclus op <em>Bloed leegte</em>, <em>Qi-stagnatie</em> of <em>Koude in de Baarmoeder</em>. Uitblijvende menstruatie duidt op diepe <em>Bloed leegte</em> of ernstige <em>Lever-Qi stagnatie</em>. Behandeling is sterk afhankelijk van het specifieke TCG-patroon en wordt afgestemd in de intake.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">HPO-as regulatie:</strong> De hypothalamus-hypofyse-ovarium-as is de hormonale stuurketting van de cyclus. Chronische stress, slaaptekort en ondergewicht verstoren GnRH-pulsatie en daarmee LH/FSH-afgifte. Acupunctuur ondersteunt normalisatie van dit systeem.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Zenuwstelsel en stresshormonen:</strong> Hoge cortisolspiegels onderdrukken de oestrogeenproductie en kunnen de ovulatie verstoren. Door het stress-systeem te kalmeren via acupunctuur kan de hormonale cyclus zich herstellen.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding bekkenorganen:</strong> Verbeterde doorbloeding van de baarmoeder en eierstokken draagt bij aan betere follikelrijping en een functionelere cyclus.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat kunt u verwachten?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Behandeling van een onregelmatige cyclus vraagt afstemming op de cyclus zelf. We plannen sessies op specifieke momenten in uw cyclus — rond de menstruatie, rond de ovulatie — om het hormonale ritme te ondersteunen. Een behandeltraject beslaat typisch 3–6 menstruatiecycli.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                We vragen u uw cyclus bij te houden (eventueel via een app). Dit helpt ons de behandeling optimaal af te stemmen en verbeteringen in kaart te brengen. We werken altijd in overleg met uw gynaecoloog of huisarts bij een onderliggende diagnose zoals PCOS of schildklierproblematiek.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is dit geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Vrouwen met een sterk wisselende cyclusduur",
                  "Vrouwen van wie de menstruatie uitblijft na stoppillen",
                  "Vrouwen met PCOS-gerelateerde onregelmatigheden",
                  "Vrouwen die hun cyclus willen reguleren als voorbereiding op zwangerschap",
                  "Vrouwen met onregelmatigheid door stress of leefstijl",
                  "Vrouwen die aanvullende ondersteuning zoeken naast medische zorg",
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
                <Link href="/klachten/menstruatieklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Menstruatieklachten</Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/vruchtbaarheidsproblemen" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">Vruchtbaarheidsproblemen</Link>
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
                { q: "Kan acupunctuur een onregelmatige cyclus reguleren?", a: "Acupunctuur kan de HPO-as ondersteunen en de hormoonbalans bevorderen, wat bijdraagt aan een regelmatiger cyclus. Resultaten variëren per persoon en oorzaak. Bij een onderliggende aandoening zoals PCOS of schildklierproblemen is medische beoordeling altijd essentieel." },
                { q: "Hoe lang duurt het voor mijn cyclus regelmatiger wordt?", a: "De meeste vrouwen zien verbetering na 2–3 behandelcycli (maanden). We plannen sessies rondom de cyclus voor maximaal effect. Een stabiele, regelmatige cyclus vraagt doorgaans 3–6 maanden begeleiding." },
                { q: "Helpt acupunctuur ook als mijn menstruatie volledig uitblijft?", a: "Bij amenorroe is het altijd belangrijk om eerst een medische oorzaak uit te sluiten. Acupunctuur kan ondersteunen bij functionele amenorroe — uitblijvende menstruatie door stress, ondergewicht of hormoonverstoringen zonder structurele oorzaak." },
                { q: "Worden behandelingen voor menstruatieklachten vergoed?", a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars, dankzij onze NVA/TCMA-erkenning. Dit gaat niet ten koste van uw eigen risico." },
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
                { href: "/klachten/menstruatieklachten", label: "Menstruatieklachten" },
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
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Uw cyclus verdient aandacht. Plan een intake in en bespreek uw klachten. We stemmen de behandeling af op uw specifieke cyclus en situatie.</p>
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_onregelmatige_menstruatie" title="Maak een afspraak"
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
