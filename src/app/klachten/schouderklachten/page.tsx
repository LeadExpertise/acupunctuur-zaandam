import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Schouderklachten Zaandam | Bursitis & Peesirritatie",
  description:
    "Behandeling van schouderklachten, slijmbeursontsteking, peesirritatie en beperkte schoudermobiliteit met acupunctuur in Zaandam. Natuurlijke pijnverlichting.",
  keywords: [
    "acupunctuur schouderklachten",
    "bursitis behandeling acupunctuur",
    "slijmbeursontsteking acupunctuur zaandam",
    "schouder pijn acupunctuur",
    "rotatorcuff acupunctuur zaandam",
    "peesirritatie schouder behandeling",
    "acupunctuur schouderpijn zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/schouderklachten",
      name: "Acupunctuur bij Schouderklachten",
      description:
        "Informatie over de behandeling van schouderklachten waaronder slijmbeursontsteking, peesirritatie en bewegingsbeperking via Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Schouderklachten" },
        { "@type": "MedicalCondition", name: "Bursitis subacromialis" },
        { "@type": "MedicalCondition", name: "Rotatorcuff laesie" },
        { "@type": "MedicalCondition", name: "Tendinopathie schouder" },
      ],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Schouderpijn" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij een slijmbeursontsteking van de schouder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan effectief bijdragen aan het verminderen van pijn en ontsteking bij subacromiale bursitis. De Wereldgezondheidsorganisatie (WHO) erkent schouderpijn als een van de indicaties voor acupunctuurbehandeling. In de praktijk zien we goede resultaten bij zowel acute als chronische schouderklachten.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur mijn schoudermobiliteit verbeteren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Door de omliggende spiergroepen (m. supraspinatus, infraspinatus, subscapularis, deltoideus) te ontspannen en de lokale doorbloeding te verbeteren, neemt de bewegingsvrijheid van de schouder vaak merkbaar toe. Veel cliënten merken al na 3–4 behandelingen een verbetering in het optillen van de arm.",
          },
        },
      ],
    },
  ],
};

const TrustBar = () => (
  <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
      <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
        Erkend door verenigingen en vergoed door verzekeraars
      </h2>
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
);

export default function SchouderklachtenPage() {
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
            <Link href="/klachten/pijnklachten-en-beweging" className="hover:text-[#1F3A36] transition-colors">Pijnklachten &amp; beweging</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Schouderklachten</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mx-auto px-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Pijnklachten &amp; Beweging</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Schouderklachten
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Pijn bij het optillen van uw arm, een vastzittende schouder of een slijmbeursontsteking die maar niet overgaat — schouderklachten belemmeren u bij vrijwel elke dagelijkse beweging. In de Traditionele Chinese Geneeskunde beschouwen we schouderpijn als een blokkade van Qi en Bloed in de meridianen die door de schouder lopen. Met acupunctuur herstellen we de doorstroming, verminderen ontsteking en ontspannen de overbelaste spieren en pezen.
            </p>
          </div>
        </header>

        {/* Content article */}
        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {/* Featured Snippet — targets "Helpt acupunctuur bij schouderklachten?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur vermindert schouderpijn door ontstekingen te remmen, de bloedcirculatie te verbeteren en verkrampte spieren te ontspannen. Het is effectief bij frozen shoulder, RSI, bursitis en tenniselleboog. Wetenschappelijk onderzoek bevestigt significante pijnvermindering en verbeterde schoudermobiliteit na een traject van acupunctuurbehandelingen.
              </p>
            </div>

            {/* Wat zijn schouderklachten */}
            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn schouderklachten?
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  De schouder is het beweeglijkste gewricht van het lichaam, maar die beweeglijkheid maakt het ook kwetsbaar. Schouderklachten is een verzamelnaam voor uiteenlopende aandoeningen die pijn, stijfheid of beperkte bewegingsvrijheid in de schouder veroorzaken.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {[
                    { title: "Subacromiale bursitis", desc: "Ontsteking van de slijmbeurs tussen het gewrichtskapsel en de peesplaat (rotatorcuff). Pijnlijk bij het optillen van de arm, met name tussen 60° en 120°." },
                    { title: "Rotatorcuff tendinopathie", desc: "Irritatie of (micro)scheur in de pezen rondom de schouder. Ontstaat vaak door overbelasting of repetitieve bewegingen." },
                    { title: "Frozen shoulder (adhesieve capsulitis)", desc: "Ernstige verstijving en pijn door verkorting van het gewrichtskapsel. Beweeglijkheid neemt sterk af in alle richtingen." },
                    { title: "Impingement syndroom", desc: "Beknelling van pezen of slijmbeurs in de subacromiale ruimte, met name bij armbewegingen boven schouderhoogte." },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                      <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.title}</h3>
                      <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Symptomen */}
            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Symptomen van schouderklachten
              </h2>
              <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed list-none p-0">
                {[
                  "Pijn bij het optillen van de arm, soms met een pijnboog (tussen 60° en 120°)",
                  "Pijn 's nachts, met name bij liggen op de aangedane schouder",
                  "Beperkte bewegingsvrijheid: arm niet volledig zijwaarts of naar achteren bewegen",
                  "Pijn bij rotatiebewegingen (bijv. schroeven of kammen)",
                  "Uitstralende pijn naar de bovenarm of nek",
                  "Zwakte in de arm bij het optillen van gewichten",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8A6B3D] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            {/* Oorzaken */}
            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Oorzaken en risicofactoren
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>Schouderklachten ontstaan zelden plotseling. Meestal is er sprake van een combinatie van factoren die over langere tijd de schouder belasten:</p>
                <ul className="space-y-2 list-none p-0">
                  {[
                    "Overbelasting door repetitief werk (kassamedewerker, schilder, bouwvakker) of intensieve sport",
                    "Langdurig computerwerk met verkeerde houding of muisgebruik",
                    "Trauma (val op de schouder, automobieleongeval)",
                    "Slijtage bij ouderleeftijd (degeneratieve rotatorcuff)",
                    "Chronische spierspanning door stress (opgetrokken schouders)",
                    "Onvoldoende herstel na een eerder letsel",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#4A6559] shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Acupunctuur aanpak */}
            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur schouderklachten behandelt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Oosters perspectief</h3>
                  <p>
                    In de TCG lopen de Dunne Darm meridiaan en de Drievoudige Verwarmer meridiaan over de buitenzijde van de schouder, terwijl de Long meridiaan over de voorzijde loopt. Schouderklachten worden gezien als een <em>Bi-syndroom</em>: een blokkade van Qi en Bloed in deze meridianen door kou, vochtigheid of overbelasting. Bij chronische gevallen speelt ook een <em>Lever-Bloed leegte</em> een rol: pezen en spieren worden onvoldoende gevoed, wat leidt tot stijfheid en kwetsbaarheid.
                  </p>
                  <p>
                    De behandeling bestaat uit lokale naaldplaatsing op de schouder (trigger points, ahshi-punten) gecombineerd met distale punten die de meridiaan activeren. Bij koude patronen wordt moxa (warmtebehandeling) toegevoegd.
                  </p>
                </div>
                <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                  <h3 className="font-medium text-[#1F3A36] text-base">Westers perspectief</h3>
                  <p>
                    Acupunctuur stimuleert de afgifte van prostaglandine-remmende stoffen, waardoor lokale ontsteking afneemt. De behandeling verbetert de doorbloeding van de perifere weefsels rondom de schouder, waardoor pezen en slijmbeurs beter kunnen herstellen. Daarnaast ontspant het de hypertone spiergroepen (m. supraspinatus, m. trapezius) die betrokken zijn bij het impingement. De WHO erkent schouderpijn als een indicatiegebied voor acupunctuur.
                  </p>
                </div>
              </div>
            </section>

            {/* Behandeling verwachting */}
            <section className="bg-[#F2EDE3] rounded-2xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat u kunt verwachten
              </h2>
              <div className="space-y-3 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>In het eerste consult bespreken we de aard, locatie en duur van uw schouderklachten en doen we een beweeglijkheidsonderzoek. Op basis hiervan stellen we een individueel behandelplan op.</p>
                <p>Bij acute schouderklachten (recent ontstaan) is 4–8 behandelingen vaak voldoende voor een duidelijke verbetering. Bij chronische of langdurige klachten (langer dan 3 maanden) is een traject van 10–15 sessies gebruikelijker.</p>
                <p>Veel cliënten merken na de eerste 2–3 behandelingen al een vermindering van pijn bij bewegen en een verbetering van de nachtrust. Bij frozen shoulder kan het herstelproces langer duren — dit is een aandoening die van nature 12–24 maanden kan duren, maar acupunctuur kan dit proces ondersteunen en versnellen.</p>
              </div>
            </section>

            {/* Voor wie */}
            <section>
              <h2 className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Sporters met een slijmbeursontsteking of rotatorcuffklachten",
                  "Kantoorwerkers met chronische schouder- en nekspanning",
                  "Ouderen met degeneratieve schouderklachten of slijtage",
                  "Mensen die reguliere behandeling (fysiotherapie, injecties) willen aanvullen",
                  "Mensen met een frozen shoulder in enige fase van het herstelproces",
                  "Iedereen die schouderpijn heeft en een natuurlijke, bijwerkingenvrije aanpak zoekt",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:check-circle-linear" className="text-[#4A6559] text-lg mt-0.5 shrink-0" stroke-width="1.5" />
                    <span className="text-sm text-[#1F3A36]/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-10">
              <p className="text-sm text-[#1F3A36]/60 font-light leading-relaxed">
                Acupunctuur Zaandam is gevestigd aan de Lagendijk 3 in Koog aan de Zaan, centraal gelegen in de Zaanstreek. Wij behandelen dagelijks cliënten met schouderklachten uit Zaandam, Koog aan de Zaan, Zaandijk, Wormerveer, Assendelft en omgeving. Heeft u vragen over uw schouder? Neem vrijblijvend contact op via{" "}
                <a href="https://wa.me/31657998330" className="text-[#4A6559] underline underline-offset-2">WhatsApp</a> of plan direct een intake in. Ook kunt u meer lezen over verwante klachten als{" "}
                <Link href="/klachten/nekklachten" className="text-[#4A6559] underline underline-offset-2">nekklachten</Link> en{" "}
                <Link href="/klachten/pijnklachten-en-beweging" className="text-[#4A6559] underline underline-offset-2">andere pijnklachten</Link>.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over schouderbehandeling
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij een slijmbeursontsteking?",
                  a: "Ja. Acupunctuur vermindert de ontsteking en pijn bij subacromiale bursitis en verbetert de doorbloeding rondom de slijmbeurs. De WHO erkent schouderpijn als indicatiegebied. In de praktijk zien we goede resultaten, met name wanneer de ontsteking niet te ver is gevorderd.",
                },
                {
                  q: "Moet ik stoppen met fysiotherapie voor ik begin met acupunctuur?",
                  a: "Nee, integendeel. Acupunctuur en fysiotherapie vullen elkaar goed aan. Acupunctuur vermindert de pijn en ontsteking, waarna fysiotherapie effectiever kan werken aan spierkracht en stabiliteit. Laat uw behandelaars weten dat u beide therapieën combineert.",
                },
                {
                  q: "Hoeveel behandelingen zijn nodig voor mijn schouder?",
                  a: "Dit hangt af van de aard en duur van de klacht. Bij recent ontstane klachten (korter dan 3 maanden) volstaan doorgaans 4–8 behandelingen. Chronische klachten of frozen shoulder vragen om een langer traject van 10–15 sessies.",
                },
                {
                  q: "Worden schouderbehandelingen vergoed?",
                  a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij vrijwel alle zorgverzekeraars, dankzij onze NVA/TCMA-erkenning. Dit gaat niet ten koste van uw eigen risico.",
                },
              ].map((item) => (
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

        <TrustBar />

        {/* Gerelateerde klachten */}
        <section className="py-16 bg-[#FAF8F3] border-t border-[#1F3A36]/10">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Gerelateerde klachten
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/klachten/nekklachten", label: "Nekklachten" },
                { href: "/klachten/frozen-shoulder", label: "Frozen shoulder" },
                { href: "/klachten/rsi", label: "RSI / Muisarm" },
                { href: "/klachten/kniepijn", label: "Kniepijn" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#1F3A36]/10 hover:border-[#4A6559]/40 hover:bg-[#F2EDE3] transition-colors group"
                  >
                    <iconify-icon
                      icon="solar:alt-arrow-right-linear"
                      className="text-[#4A6559] group-hover:translate-x-0.5 transition-transform"
                    />
                    <span className="text-sm font-light text-[#1F3A36]">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" />
                </svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Klaar voor een beweeglijke schouder?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan direct een intake via onze online planner. Heeft u vragen over uw specifieke schouderklacht? Stuur ons een WhatsApp bericht.
                </p>
                <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                  WhatsApp ons
                </a>
              </div>
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/30 to-[#4A6559]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                <div className="relative w-full bg-[#FAF8F3] rounded-xl shadow-2xl border border-[#1F3A36]/10 overflow-hidden flex flex-col">
                  <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b px-4 items-center justify-between">
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
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_schouderklachten" title="Maak een afspraak"
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
