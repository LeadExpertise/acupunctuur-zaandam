import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Spierpijn | Acupunctuur Zaandam",
  description:
    "Last van chronische spierpijn, triggerpoints of spierspanning? Acupunctuur in Zaandam verlicht myofasciale pijn en bevordert spierherstel. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur spierpijn",
    "spierpijn behandeling acupunctuur",
    "triggerpoints acupunctuur",
    "myofasciale pijn behandeling",
    "acupunctuur spierspanning Zaandam",
    "chronische spierpijn behandeling",
    "acupunctuur sportblessure",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-spierpijn",
      name: "Acupunctuur bij Spierpijn",
      description:
        "Behandeling van chronische spierpijn, triggerpoints en myofasciale pijn met acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Spierpijn en myofasciale pijn" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Spierpijn" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij spierpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is effectief bij spierpijn. Door naalden direct in triggerpoints (gespannen spierknobbels) te plaatsen worden spiervezels ontspannen, de doorbloeding verbeterd en pijnsignalen gedempt. Zowel acute spierpijn na inspanning als chronische myofasciale pijn reageren goed op acupunctuur.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij spierpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is een veilige behandeling voor spierpijn. De naalden worden nauwkeurig in aangedane spiergroepen geplaatst. Na de behandeling kan lichte spiergevoeligheid optreden, vergelijkbaar met dat na een sportmassage. Dit is tijdelijk en duidt op activering van het herstelproces.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij spierpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute spierpijn is verlichting vaak al na 1 tot 2 behandelingen merkbaar. Chronische spierpijn of fibromyalgie vereist een reeks van 6 tot 10 sessies. Triggerpoint-acupunctuur geeft vaak directe ontspanning van de behandelde spierknopen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor spierpijn vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Behandelingen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Acupunctuur bij Spierpijn",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-spierpijn",
        },
      ],
    },
  ],
};

export default function SpierpijnBehandelingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav
          aria-label="Kruimelpad"
          className="fixed top-[110px] left-0 right-0 z-10 bg-[#FAF8F3]/90 backdrop-blur-sm border-b border-[#4A6559]/10"
        >
          <ol className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-[#4A6559]">
            <li>
              <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-[#8A6B3D]">/</li>
            <li>
              <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            </li>
            <li aria-hidden="true" className="text-[#8A6B3D]">/</li>
            <li className="text-[#1F3A36] font-medium">Spierpijn</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-48 pb-16 bg-[#FAF8F3]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-[#8A6B3D] text-sm font-medium tracking-widest uppercase mb-4">
                Pijnbestrijding &amp; Herstel
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#1F3A36] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Acupunctuur bij Spierpijn in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Spierpijn kan uw bewegingsvrijheid en levensplezier ernstig beperken. Of het nu
                gaat om pijnlijke triggerpoints, chronische spierspanning na stress of
                sportgerelateerde blessures &mdash; acupunctuur ontspant de spieren diep, bevordert
                herstel en verbreekt de cyclus van pijn en spanning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F3A36] text-[#FAF8F3] px-8 py-4 rounded-full font-medium hover:bg-[#4A6559] transition-colors"
                >
                  <iconify-icon icon="ph:calendar-check" className="text-xl" />
                  Maak een afspraak
                </Link>
                <Link
                  href="/klachten/spierpijn"
                  className="inline-flex items-center justify-center gap-2 border border-[#1F3A36] text-[#1F3A36] px-8 py-4 rounded-full font-medium hover:bg-[#1F3A36] hover:text-[#FAF8F3] transition-colors"
                >
                  <iconify-icon icon="ph:info" className="text-xl" />
                  Meer over de klacht
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Wat is spierpijn?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Spierpijn kan ontstaan door overbelasting, slechte houding, stress, trauma of
                    als onderdeel van een systemische aandoening zoals fibromyalgie. Myofasciale
                    pijn &mdash; pijn vanuit triggerpoints in de spier &mdash; is een veelvoorkomende
                    maar onderkende oorzaak van chronische pijn in nek, schouders, rug en ledematen.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Triggerpoints zijn hyperirritable knopen in spiervezels die bij druk of beweging
                    pijn uitstralen naar andere lichaamsdelen (referred pain). Een triggerpoint in
                    de trapezius kan bijvoorbeeld hoofdpijn veroorzaken; een triggerpoint in de
                    gluteus minimus kan pijn geven die lijkt op ischias.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Chronische spierpijn door stress is bijzonder frustrerend: de spieren reageren
                    op psychische spanning met voortdurende verhoogde tonus. Acupunctuur is bij
                    uitstek geschikt voor dit type klacht, omdat het zowel de lichamelijke spanning
                    als de stressreactie aanpakt.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij spierpijn?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG wordt spierpijn gezien als een stagnatie van Qi en Bloed in de
                    spiermeridianen (jingjin). De spieren worden gevoed door het Leverbloed en
                    bestuurd door de Lever-Qi. Bij chronische spierpijn is er vaak een combinatie
                    van Lever-Qi stagnatie (door stress), Bloed-deficiëntie (onvoldoende voeding
                    van het spierweefsel) en koude-obstructie in de kanalen.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling richt zich op het verwijderen van de obstructie door naalden
                    direct in de pijnlijke spieren te plaatsen (Ashi-punten) gecombineerd met
                    distale punten om de Qi-doorstroming te bevorderen. Moxibustie en cupping
                    kunnen worden toegevoegd bij koude-obstructie en Bloed-stagnatie.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Dry needling &mdash; het naaldelen van triggerpoints, identiek aan TCG
                    acupunctuur bij Ashi-punten &mdash; induceert een lokale twitch-respons in de
                    spiervezel. Deze mechanische verstoring doorbreekt de pathologische sarcomeer-
                    contractie en herstelt de normale spierlengte.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Tegelijk stimuleert acupunctuur de afgifte van endorfinen en serotonine, die
                    de pijngewaarwording dempen. De verbeterde doorbloeding in de behandelde spier
                    spoelt afvalproducten weg en levert zuurstof en voedingsstoffen voor herstel.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe verloopt de behandeling?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    We beginnen met een grondige lichamelijke beoordeling van de aangedane spiergroepen:
                    waar zijn de triggerpoints, wat is het bewegingspatroon en hoe is de spiertonus?
                    De TCG-anamnese brengt het systemische patroon in kaart (stress, slaap, constitutie).
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Tijdens de sessie worden naalden geplaatst in de geïdentificeerde triggerpoints
                    en op meridiaalspecifieke punten. U kunt een lokale spiertrekkeling voelen
                    wanneer een triggerpoint wordt geraakt &mdash; dit is het teken dat de knoop
                    loslaat. De naalden liggen 20 tot 30 minuten.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Na de behandeling adviseren wij lichte rekoefeningen en hydratatie om het
                    herstelproces te ondersteunen. Bij stress-gerelateerde spierpijn geven wij
                    aanvullend advies over ontspanningstechnieken en ademhaling.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoeveel behandelingen zijn nodig?
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">1&ndash;2</div>
                      <div className="text-sm text-[#4A6559]">Eerste pijnverlichting</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">6&ndash;10</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">maand</div>
                      <div className="text-sm text-[#4A6559]">Onderhoud bij stress</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Voor wie is deze behandeling geschikt?
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Chronische spierspanning in nek, schouders en rug door werkhouding of stress",
                      "Triggerpoints en myofasciale pijn met uitstralende pijnpatronen",
                      "Sportblessure herstel: spierscheuren, overbelasting na intensieve training",
                      "Spierpijn door stress die niet weggaat na rust of massage",
                      "Spierpijn als onderdeel van fibromyalgie",
                      "Preventieve behandeling bij duursporters en mensen met zware beroepen",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <iconify-icon
                          icon="ph:check-circle-fill"
                          className="text-[#8A6B3D] text-xl mt-0.5 shrink-0"
                        />
                        <span className="text-[#4A6559]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Gerelateerde behandelingen
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Link
                      href="/behandelingen/acupunctuur-fibromyalgie"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:activity" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Fibromyalgie</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-lage-rugklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:person" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Lage rugklachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-nekklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:person-simple" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Nekklachten</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij spierpijn in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Acupunctuur Zaandam behandelt spierpijn bij mensen uit Zaandam, de Zaanstreek
                    en Amsterdam-Noord. Onze erkende acupuncturist heeft ruime ervaring met
                    triggerpoint-behandeling en myofasciale pijn. Wij combineren klassieke
                    TCG-technieken met moderne inzichten uit de sportgeneeskunde voor optimale
                    resultaten. Vergoeding door de meeste aanvullende verzekeringen is mogelijk.
                  </p>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-[#1F3A36] text-[#FAF8F3] rounded-2xl p-6 sticky top-36">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Direct een afspraak
                  </h3>
                  <p className="text-[#FAF8F3]/80 text-sm mb-4">
                    Verlicht uw spierpijn snel en effectief. Plan vandaag nog uw sessie.
                  </p>
                  <Link
                    href="#contact"
                    className="block text-center bg-[#FAF8F3] text-[#1F3A36] px-6 py-3 rounded-full font-medium hover:bg-[#F2EDE3] transition-colors mb-3"
                  >
                    Online inplannen
                  </Link>
                  <a
                    href="https://wa.me/31657998330"
                    className="flex items-center justify-center gap-2 border border-[#FAF8F3]/30 text-[#FAF8F3] px-6 py-3 rounded-full font-medium hover:bg-[#FAF8F3]/10 transition-colors"
                  >
                    <iconify-icon icon="ph:whatsapp-logo" className="text-xl" />
                    WhatsApp
                  </a>
                  <div className="mt-6 pt-6 border-t border-[#FAF8F3]/20 space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <iconify-icon icon="ph:shield-check" className="text-[#8A6B3D]" />
                      NVA &amp; TCMA erkend
                    </div>
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <iconify-icon icon="ph:currency-eur" className="text-[#8A6B3D]" />
                      Vergoeding mogelijk
                    </div>
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <iconify-icon icon="ph:map-pin" className="text-[#8A6B3D]" />
                      Centrum Zaandam
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3]">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1F3A36] mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Veelgestelde vragen over acupunctuur bij spierpijn
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij spierpijn?",
                  a: "Ja, acupunctuur is effectief bij spierpijn. Door naalden direct in triggerpoints te plaatsen worden spiervezels ontspannen, de doorbloeding verbeterd en pijnsignalen gedempt. Zowel acute spierpijn na inspanning als chronische myofasciale pijn reageren goed op acupunctuur.",
                },
                {
                  q: "Is acupunctuur veilig bij spierpijn?",
                  a: "Acupunctuur is een veilige behandeling voor spierpijn. Na de behandeling kan lichte spiergevoeligheid optreden, vergelijkbaar met na een sportmassage. Dit is tijdelijk en duidt op activering van het herstelproces.",
                },
                {
                  q: "Hoe snel merk je resultaat bij spierpijn?",
                  a: "Bij acute spierpijn is verlichting vaak al na 1 tot 2 behandelingen merkbaar. Chronische spierpijn of fibromyalgie vereist een reeks van 6 tot 10 sessies. Triggerpoint-acupunctuur geeft vaak directe ontspanning van de behandelde spierknopen.",
                },
                {
                  q: "Wordt acupunctuur voor spierpijn vergoed?",
                  a: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-white rounded-2xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-medium text-[#1F3A36]">
                    {q}
                    <iconify-icon icon="ph:caret-down" className="text-[#8A6B3D] shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-[#4A6559] leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-10 bg-white border-y border-[#4A6559]/10">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-sm text-[#4A6559] mb-6 font-medium tracking-widest uppercase">
              Erkend &amp; vergoed door
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
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
        <section id="contact" className="py-24 bg-[#1F3A36]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#FAF8F3] mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Maak een afspraak
              </h2>
              <p className="text-[#FAF8F3]/80 max-w-xl mx-auto">
                Klaar om uw spierpijn aan te pakken? Plan direct uw afspraak of neem contact op
                via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_spier"
                  title="Afspraak maken voor spierpijn"
                />
              </div>
              <div className="space-y-6 text-[#FAF8F3]">
                <div className="bg-[#4A6559]/30 rounded-2xl p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Liever direct contact?
                  </h3>
                  <p className="text-[#FAF8F3]/80 mb-4">
                    Heeft u vragen of wilt u eerst een vrijblijvend kennismakingsgesprek? App ons
                    via WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center gap-2 bg-[#FAF8F3] text-[#1F3A36] px-6 py-3 rounded-full font-medium hover:bg-[#F2EDE3] transition-colors"
                  >
                    <iconify-icon icon="ph:whatsapp-logo" className="text-xl" />
                    App ons op WhatsApp
                  </a>
                </div>
                <div className="bg-[#4A6559]/30 rounded-2xl p-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="ph:map-pin" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span>Centrum Zaandam, Noord-Holland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="ph:clock" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span>Ma&ndash;Za: 08:00&ndash;20:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="ph:shield-check" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span>NVA &amp; TCMA erkend &mdash; vergoeding mogelijk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </main>
    </>
  );
}
