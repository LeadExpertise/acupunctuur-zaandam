import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Duizeligheid | Acupunctuur Zaandam",
  description:
    "Last van duizeligheid, BPPD of cervicogene duizeligheid? Acupunctuur in Zaandam helpt bij functionele en stress-gerelateerde duizeligheid. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur duizeligheid",
    "BPPD acupunctuur",
    "cervicogene duizeligheid behandeling",
    "acupunctuur duizeligheid Zaandam",
    "functionele duizeligheid behandeling",
    "stress duizeligheid acupunctuur",
    "acupunctuur hoofd zenuwstelsel",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-duizeligheid",
      name: "Acupunctuur bij Duizeligheid",
      description:
        "Behandeling van duizeligheid met acupunctuur in Zaandam: BPPD, cervicogene duizeligheid, functionele duizeligheid en duizeligheid bij stress.",
      about: [{ "@type": "MedicalCondition", name: "Duizeligheid" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Duizeligheid" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij duizeligheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan effectief zijn bij verschillende vormen van duizeligheid. Met name bij cervicogene duizeligheid (vanuit de nek), functionele duizeligheid en stress-gerelateerde duizeligheid zijn goede resultaten bereikt. De behandeling normaliseert de spanning in de nek, verbetert de doorbloeding van de hersenstam en reguleert het autonome zenuwstelsel.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij duizeligheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij duizeligheid wanneer uitgevoerd door een erkend acupuncturist. Bij plotseling optredende ernstige duizeligheid of duizeligheid met neurologische uitvalsverschijnselen is altijd eerst medisch onderzoek aangewezen. Acupunctuur kan aanvullend worden ingezet nadat organische oorzaken zijn uitgesloten.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij duizeligheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij cervicogene duizeligheid merken patiënten vaak al na 3 tot 4 behandelingen verbetering. Functionele en stress-gerelateerde duizeligheid vraagt doorgaans een reeks van 6 tot 10 sessies. De resultaten zijn sterk afhankelijk van de oorzaak en de duur van de klachten.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor duizeligheid vergoed?",
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
          name: "Acupunctuur bij Duizeligheid",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-duizeligheid",
        },
      ],
    },
  ],
};

export default function DuizeligheidBehandelingPage() {
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
            <li className="text-[#1F3A36] font-medium">Duizeligheid</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-48 pb-16 bg-[#FAF8F3]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-[#8A6B3D] text-sm font-medium tracking-widest uppercase mb-4">
                Hoofd &amp; Zenuwstelsel
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#1F3A36] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Acupunctuur bij Duizeligheid in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Duizeligheid &mdash; het gevoel te draaien, te zweven of niet stabiel te staan
                &mdash; kan invaliderend zijn en angst veroorzaken. Of het nu gaat om
                cervicogene duizeligheid vanuit de nek, functionele duizeligheid of stress-
                gerelateerde klachten: acupunctuur herstelt het evenwicht in lichaam en geest.
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
                  href="/klachten/duizeligheid"
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
                    Wat is duizeligheid?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Duizeligheid is een subjectief gevoel van beweging of instabiliteit.
                    Vertigo &mdash; de meest voorkomende vorm &mdash; is het gevoel dat de
                    omgeving of het eigen lichaam draait. Presyncope is het gevoel flauw te
                    vallen bij een daling van de bloeddruk. Disequilibrium is een gevoel van
                    instabiliteit zonder draaigevoel.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Oorzaken van duizeligheid zijn divers: BPPD (Benigne Paroxysmale Positie-
                    Duizeligheid, door verschoven otolietenkristallen in het binnenoor) is de
                    meest voorkomende oorzaak van plotseling optredende vertigo. Cervicogene
                    duizeligheid ontstaat door spanningsproblemen in de nek-cervicale proprioceptoren.
                    Functionele duizeligheid heeft geen aanwijsbare organische oorzaak en is
                    sterk gerelateerd aan angst en hyperventilatie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Bij BPPD is de Epley-manoeuvre de eerste behandelingskeuze; bij de overige
                    vormen is acupunctuur een waardevolle aanvulling of primaire behandeling.
                    Altijd eerst medisch onderzoek om ernstige oorzaken uit te sluiten.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij duizeligheid?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG wordt duizeligheid (xuan yun) beschreven als wind of opstijgend
                    Yang in het hoofd. De twee meest voorkomende patronen zijn: Lever-Yang
                    overmacht (door stress, emoties of constitutionele predispositie) en Qi-
                    en Bloed-deficiëntie (te weinig voeding voor de hersenen, vaak bij vermoeidheid
                    en na ziekte).
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling dempt het opstijgende Lever-Yang via punten als GB20
                    (Fengchi, schedelbasis), LV3 (Taichong) en LI4. Bij Qi-deficiëntie wordt
                    ST36 en CV6 ingezet om de opbouw van energie te bevorderen. GB34 harmoniseert
                    de Galblaas-meridiaan die langs de zijkant van het hoofd loopt.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Acupunctuur verbetert de doorbloeding van de vertebrobasilaire circulatie
                    die de hersenstam en het cerebellum (evenwichtscentrum) voedt. Stimulatie
                    van GB20 (Fengchi) verhoogt de bloedstroom in de arteria vertebralis,
                    aangetoond met Doppler-onderzoek.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Bij cervicogene duizeligheid ontspant acupunctuur de suboccipitale en
                    cervicale spieren, waardoor de proprioceptieve signalen vanuit de nek worden
                    genormaliseerd. Het autonome zenuwstelsel wordt in balans gebracht, wat
                    de hyperventilatie en angst bij functionele duizeligheid vermindert.
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
                    De intake begint met een gedetailleerde beschrijving van het duizeligheidsverschijnsel:
                    draaiduizeligheid of zweefgevoel, positieafhankelijk of continu, duur van de
                    aanvallen, aanvullende klachten (tinnitus, gehoorverlies, nausea) en
                    stressniveau. Dit helpt bij het bepalen van het TCG-patroon en de oorzaak.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De naalden worden geplaatst op de schedelbasis (GB20, BL10), langs de
                    nekwervels en op distale punten (LV3, GB34, ST36). Bij cervicogene
                    duizeligheid voegen we cupping of moxibustie toe om de nekspanningen te
                    verlichten. De sessie duurt 30 tot 40 minuten.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    We geven praktisch advies over houdingsverandering, scherminstellingen en
                    nekontlastende oefeningen. Bij functionele duizeligheid is stressreductie
                    een essentieel onderdeel van het behandelplan.
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
                      <div className="text-sm text-[#4A6559]">Cervicogeen: eerste verbetering</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">6&ndash;10</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">kwartaal</div>
                      <div className="text-sm text-[#4A6559]">Preventief onderhoud</div>
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
                      "Benigne Paroxysmale Positieduizeligheid (BPPD) na Epley-manoeuvre, ter preventie van terugval",
                      "Cervicogene duizeligheid vanuit de nek bij nekklachten of whiplash",
                      "Functionele duizeligheid zonder aanwijsbare organische oorzaak",
                      "Duizeligheid bij stress, angst of hyperventilatie",
                      "Duizeligheid als onderdeel van burn-out of overprikkeling",
                      "Chronische duizeligheid bij wie medisch onderzoek geen oorzaak toont",
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
                      href="/behandelingen/acupunctuur-tinnitus"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:speaker-high" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Tinnitus</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-hoofdpijn"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:brain" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Hoofdpijn</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-nekklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:person" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Nekklachten</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij duizeligheid in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Onze praktijk in het centrum van Zaandam behandelt patiënten met
                    duizeligheidsklachten uit de Zaanstreek, Purmerend en Amsterdam-Noord.
                    We werken nauw samen met huisartsen, neurologen en fysiotherapeuten in de
                    regio voor een integrale aanpak. Als NVA- en TCMA-erkend acupuncturist
                    is vergoeding door de meeste aanvullende verzekeringen mogelijk.
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
                    Herstel uw evenwicht. Plan vandaag nog uw eerste sessie.
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
              Veelgestelde vragen over acupunctuur bij duizeligheid
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij duizeligheid?",
                  a: "Ja, acupunctuur kan effectief zijn bij verschillende vormen van duizeligheid. Met name bij cervicogene duizeligheid, functionele duizeligheid en stress-gerelateerde duizeligheid zijn goede resultaten bereikt. De behandeling normaliseert de spanning in de nek, verbetert de doorbloeding van de hersenstam en reguleert het autonome zenuwstelsel.",
                },
                {
                  q: "Is acupunctuur veilig bij duizeligheid?",
                  a: "Acupunctuur is veilig bij duizeligheid wanneer uitgevoerd door een erkend acupuncturist. Bij plotseling optredende ernstige duizeligheid is altijd eerst medisch onderzoek aangewezen. Acupunctuur kan aanvullend worden ingezet nadat organische oorzaken zijn uitgesloten.",
                },
                {
                  q: "Hoe snel merk je resultaat bij duizeligheid?",
                  a: "Bij cervicogene duizeligheid merken patiënten vaak al na 3 tot 4 behandelingen verbetering. Functionele en stress-gerelateerde duizeligheid vraagt doorgaans een reeks van 6 tot 10 sessies. De resultaten zijn sterk afhankelijk van de oorzaak en duur van de klachten.",
                },
                {
                  q: "Wordt acupunctuur voor duizeligheid vergoed?",
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
                Herstel uw evenwicht met acupunctuur. Plan direct uw afspraak of neem contact op
                via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_duizeligheid"
                  loading="lazy"
                  title="Afspraak maken voor duizeligheid"
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
