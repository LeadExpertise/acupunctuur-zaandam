import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij RSI | Acupunctuur Zaandam",
  description:
    "Last van RSI, tenniselleboog of carpaal tunnelsyndroom? Acupunctuur in Zaandam verlicht pijn en herstelt functie bij repetitive strain injury. Erkend NVA-acupuncturist.",
  keywords: [
    "acupunctuur RSI",
    "RSI behandeling acupunctuur",
    "tenniselleboog acupunctuur",
    "carpaal tunnelsyndroom acupunctuur",
    "acupunctuur polspijn Zaandam",
    "repetitive strain injury behandeling",
    "acupunctuur overbelasting arm",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-rsi",
      name: "Acupunctuur bij RSI",
      description:
        "Behandeling van RSI, tenniselleboog en carpaal tunnelsyndroom met acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "RSI (Repetitive Strain Injury)" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "RSI" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij RSI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan effectief zijn bij RSI. De behandeling vermindert ontstekingen in pezen en spieren, verbetert de doorbloeding van het aangedane weefsel en verlicht de zenuwpijn. Veel RSI-patiënten ervaren na een behandelreeks minder pijn en betere functie in arm, pols en hand.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij RSI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is een veilige behandeling voor RSI. De naalden worden nauwkeurig geplaatst rondom de aangedane structuren. De behandeling kan goed gecombineerd worden met fysiotherapie, ergonomische aanpassingen en werkplekadvies.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij RSI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute RSI-klachten is vaak al na 3 tot 4 behandelingen verbetering merkbaar. Chronische RSI vereist een langere reeks van 8 tot 12 sessies. Belangrijk is ook het elimineren van de oorzakelijke belasting tijdens de behandelperiode.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor RSI vergoed?",
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
          name: "Acupunctuur bij RSI",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-rsi",
        },
      ],
    },
  ],
};

export default function RsiBehandelingPage() {
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
            <li className="text-[#1F3A36] font-medium">RSI</li>
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
                Acupunctuur bij RSI in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                RSI &mdash; Repetitive Strain Injury &mdash; ontstaat door herhalende belasting van
                armen, polsen en handen. De brandende pijn, tintelingen en krachtverlies maken
                werken en dagelijkse handelingen pijnlijk. Acupunctuur verlicht de ontsteking,
                herstelt de doorbloeding en geeft uw lichaam de kans te genezen.
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
                  href="/klachten/rsi"
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
                    Wat is RSI?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    RSI is een verzamelnaam voor klachten aan spieren, pezen en zenuwen door
                    herhalende bewegingen of langdurige statische belasting. De aandoening treft
                    vooral kantoorwerkers, muzikanten en handarbeiders. Symptomen zijn pijn,
                    tintelingen, gevoelloosheid en krachtverlies in armen, polsen en handen.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Specifieke RSI-aandoeningen zijn het carpaal tunnelsyndroom (inklemming van de
                    nervus medianus in de pols), tenniselleboog (laterale epicondylitis door
                    overbelasting van de onderarmextensoren), golferselleboog (mediale epicondylitis)
                    en tendinitiis in de rotatorcuff. Elk heeft zijn eigen pijnpatroon en behandelstrategie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    De conventionele behandeling bestaat uit rust, fysiotherapie en soms
                    corticosteroïdinjecties. Acupunctuur biedt een waardevolle aanvulling die de
                    genezing versnelt en pijn verlicht zonder bijwerkingen.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij RSI?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG wordt RSI gezien als een obstructie van Qi en Bloed in de meridianen
                    van de arm &mdash; de Long-, Hart- en Pericard-meridianen. Door langdurige
                    overbelasting raakt het Yin-weefsel (pezen, gewrichten) uitgeput en ontstaat er
                    hitte en stagnatie in de kanalen, wat leidt tot brandende pijn en zwelling.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling richt zich op het verwijderen van de obstructie, het voeden van
                    het Yin-weefsel en het koelen van pathologische hitte. Lokale punten rondom de
                    aangedane pees worden gecombineerd met distale punten op de meridiaan voor een
                    krachtig therapeutisch effect.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Acupunctuur stimuleert de lokale doorbloeding in aangedaan weefsel. Dit bevordert
                    de afvoer van ontstekingsmediatoren en vergroot de aanvoer van zuurstof en
                    voedingsstoffen voor weefselherstel. De behandeling vermindert de activiteit
                    van pro-inflammatoire cytokinen en stimuleert de aanmaak van collageen in
                    peesweefsel.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Bij carpaal tunnelsyndroom verbetert acupunctuur de elektrische geleiding van de
                    nervus medianus. Bij tenniselleboog is lokale needling van triggerpoints in de
                    onderarmspieren een bewezen effectieve techniek die spierspanning en pijn reduceert.
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
                    Na een grondige intake waarbij we uw werkhouding, bewegingspatronen en
                    klachtengeschiedenis in kaart brengen, starten we met de behandeling. Afhankelijk
                    van het TCG-patroon plaatsen we naalden lokaal in het aangedane gebied en distaal
                    op de bijbehorende meridianen.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Bij RSI door computerwerk combineren we punten langs de Long- en Pericard-meridianen
                    (arm en pols) met punten op de nek en schouder, omdat spanningsopbouw in de
                    cervicale regio vaak bijdraagt aan de klachten. Moxibustie kan worden ingezet om
                    koude en stagnatie te verdrijven.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    We geven u ook praktisch advies over ergonomie, rekoefeningen en hoe u uw
                    herstelperiode optimaal kunt benutten. Dit vergroot de kans op duurzaam herstel.
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
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">3&ndash;4</div>
                      <div className="text-sm text-[#4A6559]">Eerste pijnverlichting</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">8&ndash;12</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">wekelijks</div>
                      <div className="text-sm text-[#4A6559]">Startfrequentie</div>
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
                      "RSI door intensief computerwerk of muisgebruik",
                      "Tenniselleboog (laterale epicondylitis) en golferselleboog",
                      "Carpaal tunnelsyndroom met tintelingen en krachtverlies",
                      "Overbelasting van pols en vingers bij muzikanten en handarbeiders",
                      "RSI-klachten bij wie corticosteroïdinjecties onvoldoende helpen",
                      "Preventieve behandeling bij hoge werkbelasting van de armen",
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
                      href="/behandelingen/acupunctuur-schouderklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:person-arms-spread" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Schouderklachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-nekklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:person" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Nekklachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-spierpijn"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:lightning" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Spierpijn</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij RSI in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Acupunctuur Zaandam behandelt RSI-klachten bij kantoorwerkers, muzikanten en
                    ambachtslieden uit Zaandam, de Zaanstreek en Amsterdam-Noord. Onze erkende
                    acupuncturist combineert klassieke TCG-technieken met moderne kennis over
                    het bewegingsapparaat en ergonomie. Vergoeding door de meeste aanvullende
                    verzekeringen is mogelijk.
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
                    Stop met doorwerken in pijn. Maak vandaag een afspraak voor uw RSI.
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
              Veelgestelde vragen over acupunctuur bij RSI
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij RSI?",
                  a: "Ja, acupunctuur kan effectief zijn bij RSI. De behandeling vermindert ontstekingen in pezen en spieren, verbetert de doorbloeding van het aangedane weefsel en verlicht de zenuwpijn. Veel RSI-patiënten ervaren na een behandelreeks minder pijn en betere functie.",
                },
                {
                  q: "Is acupunctuur veilig bij RSI?",
                  a: "Acupunctuur is een veilige behandeling voor RSI. De naalden worden nauwkeurig geplaatst rondom de aangedane structuren. De behandeling kan goed gecombineerd worden met fysiotherapie, ergonomische aanpassingen en werkplekadvies.",
                },
                {
                  q: "Hoe snel merk je resultaat bij RSI?",
                  a: "Bij acute RSI-klachten is vaak al na 3 tot 4 behandelingen verbetering merkbaar. Chronische RSI vereist een langere reeks van 8 tot 12 sessies. Belangrijk is ook het elimineren van de oorzakelijke belasting tijdens de behandelperiode.",
                },
                {
                  q: "Wordt acupunctuur voor RSI vergoed?",
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
                Herstel van RSI begint met de eerste stap. Plan uw afspraak of neem contact op via
                WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_rsi"
                  title="Afspraak maken voor RSI"
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
