import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Prikkelbare Darm Syndroom | Acupunctuur Zaandam",
  description:
    "Last van PDS? Acupunctuur in Zaandam verlicht buikpijn, diarree, obstipatie en opgeblazen gevoel bij prikkelbare darm syndroom. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur prikkelbare darm syndroom",
    "PDS behandeling acupunctuur",
    "acupunctuur buikpijn diarree",
    "irritable bowel syndrome acupunctuur",
    "acupunctuur spijsvertering Zaandam",
    "prikkelbare darm behandeling",
    "acupunctuur darmklachten",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-prikkelbare-darm-syndroom",
      name: "Acupunctuur bij Prikkelbare Darm Syndroom",
      description:
        "Behandeling van PDS met acupunctuur in Zaandam: buikpijn, diarree, obstipatie en stress-gerelateerde darmklachten.",
      about: [{ "@type": "MedicalCondition", name: "Prikkelbare darm syndroom (PDS)" }],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Prikkelbare darm syndroom",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij prikkelbare darm syndroom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan bij PDS effectief zijn. De behandeling richt zich op het reguleren van de darmmotoriek, verminderen van ontstekingsprikkels en verlichten van de stressreactie die PDS verergert. Veel patiënten rapporteren minder buikpijn, minder opgeblazen gevoel en een regelmatiger ontlastingspatroon na een behandelreeks.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij prikkelbare darm syndroom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij PDS wanneer uitgevoerd door een erkend acupuncturist. Er zijn geen bijwerkingen op het maagdarmkanaal, wat een voordeel is ten opzichte van sommige medicijnen. De behandeling kan naast dieetadviezen en psychologische begeleiding worden ingezet.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij prikkelbare darm syndroom?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel patiënten merken na 4 tot 6 sessies een verbetering in de klachten. Voor chronische PDS adviseren wij een volledige reeks van 8 tot 12 behandelingen. De snelheid van herstel hangt af van de subtype (PDS-D, PDS-O of PDS-M) en de stressbelasting.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor prikkelbare darm syndroom vergoed?",
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
          name: "Acupunctuur bij Prikkelbare Darm Syndroom",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-prikkelbare-darm-syndroom",
        },
      ],
    },
  ],
};

export default function PrikkelbarePermBehandelingPage() {
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
            <li className="text-[#1F3A36] font-medium">Prikkelbare Darm Syndroom</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-48 pb-16 bg-[#FAF8F3]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-[#8A6B3D] text-sm font-medium tracking-widest uppercase mb-4">
                Spijsvertering &amp; Buik
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#1F3A36] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Acupunctuur bij Prikkelbare Darm Syndroom in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Prikkelbare darm syndroom (PDS) maakt het dagelijks leven moeilijk. De onvoorspelbare
                buikkrampen, het opgeblazen gevoel en het voortdurend bewust zijn van uw darmen putten
                u uit. Acupunctuur pakt zowel de lichamelijke als de stresscomponent van PDS aan
                &mdash; zonder bijwerkingen.
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
                  href="/klachten/prikkelbare-darm-syndroom"
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
                    Wat is prikkelbare darm syndroom?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Prikkelbare darm syndroom (PDS) is een functionele darmaandoening gekenmerkt door
                    terugkerende buikpijn, veranderingen in het ontlastingspatroon en een opgeblazen
                    gevoel. Er is geen aantoonbare organische oorzaak &mdash; bloedonderzoek, scopie
                    en scans tonen geen afwijkingen &mdash; maar de klachten zijn reëel en invaliderend.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    PDS wordt onderverdeeld in drie typen: PDS-D (overwegend diarree), PDS-O
                    (overwegend obstipatie) en PDS-M (gemengd patroon). Naar schatting 10 tot 15
                    procent van de Nederlandse bevolking heeft PDS, met een hogere prevalentie bij
                    vrouwen. De klachten beginnen vaak voor het 50e levensjaar en worden sterk
                    beïnvloed door stress en voeding.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    De darm-hersenas speelt een centrale rol: psychische spanning vertaalt zich
                    rechtstreeks in darmklachten via het enterisch zenuwstelsel. Medicamenteuze
                    behandeling biedt vaak slechts gedeeltelijke verlichting. Acupunctuur, die
                    zowel lichaam als geest benadert, sluit nauw aan bij dit biopsychosociale model.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij PDS?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de Traditionele Chinese Geneeskunde wordt PDS gezien als een disharmonie
                    tussen Lever en Milt. De Lever beheert de vrije doorstroming van Qi; wanneer
                    deze geblokkeerd raakt door stress of emoties, valt de Lever aan op de Milt
                    &mdash; het spijsverteringsorgaan. Het gevolg is buikpijn, wisselende ontlasting
                    en een opgeblazen gevoel.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling richt zich op het ontspannen van Lever-Qi stagnatie, het versterken
                    van de Milt-functie en het herstellen van de harmonieuze doorstroming door het
                    spijsverteringskanaal. Punt ST36 (Zusanli) versterkt de spijsvertering; LV3
                    (Taichong) kalmeert de Lever; CV12 harmoniseert het Midden-Jiao.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Onderzoek toont aan dat acupunctuur de darmmotoriek normaliseert via het autonome
                    zenuwstelsel. De behandeling moduleert serotonineconcentraties in het
                    darmslijmvlies &mdash; bij PDS vaak verstoord &mdash; en verlaagt de viscerale
                    hypersensitiviteit die de buikpijn veroorzaakt.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Bovendien activeert acupunctuur de parasympatische tak van het autonome zenuwstelsel,
                    waardoor de stressreactie wordt gedempt. Dit verklaart de gunstige effecten op
                    zowel de darmsymptomen als de angst en vermoeidheid die PDS vergezellen.
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
                    Tijdens het intakegesprek brengen we uw klachtenpatroon nauwkeurig in kaart:
                    wanneer zijn de klachten het ergst, welke voeding of situaties triggeren ze,
                    hoe is uw stressprofiel en slaapkwaliteit? Op basis hiervan stellen we uw
                    TCG-diagnose vast.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Bij PDS-D met Lever-Qi stagnatie focussen we op het kalmeren van de Lever en
                    het reguleren van de darmperistaltiek. Bij PDS-O met Milt-Qi insufficiëntie
                    versterken we de Milt en bevorderen we de neerwaartse beweging van Qi. De
                    behandelduur per sessie is 30 tot 40 minuten.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Naast acupunctuur geven wij voedings- en leefstijladviezen die aansluiten bij
                    uw TCG-patroon. Bepaalde voedingsmiddelen die de Lever overbelasten of de
                    Milt verzwakken, kunnen de klachten verergeren.
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
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">4&ndash;6</div>
                      <div className="text-sm text-[#4A6559]">Eerste verbetering merkbaar</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">8&ndash;12</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">seizoen</div>
                      <div className="text-sm text-[#4A6559]">Onderhoud bij terugval</div>
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
                      "PDS-D: overwegend diarree met krampen en urgentie",
                      "PDS-O: obstipatie, opgeblazen gevoel en moeilijke stoelgang",
                      "PDS-M: wisselend patroon van diarree en obstipatie",
                      "Stress-gerelateerde darmklachten die verergeren bij spanning",
                      "Mensen bij wie medicatie onvoldoende helpt of bijwerkingen geeft",
                      "Personen die een holistische aanpak van lichaam en geest zoeken",
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
                      href="/behandelingen/acupunctuur-buikpijn"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:heartbeat" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Buikpijn</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-darmklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:spiral" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Darmklachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-stressklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:brain" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Stressklachten</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij PDS in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit de
                    Zaanstreek, Purmerend en Amsterdam-Noord. Als NVA- en TCMA-erkend acupuncturist
                    bieden wij kwalitatieve behandelingen die vergoed worden door de meeste aanvullende
                    verzekeringen. Neem vandaag nog contact op voor een vrijblijvend gesprek.
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
                    Verlicht uw PDS-klachten met acupunctuur. Plan vandaag nog uw eerste sessie.
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
              Veelgestelde vragen over acupunctuur bij PDS
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij prikkelbare darm syndroom?",
                  a: "Ja, acupunctuur kan bij PDS effectief zijn. De behandeling richt zich op het reguleren van de darmmotoriek, verminderen van ontstekingsprikkels en verlichten van de stressreactie. Veel patiënten rapporteren minder buikpijn, minder opgeblazen gevoel en een regelmatiger ontlastingspatroon.",
                },
                {
                  q: "Is acupunctuur veilig bij prikkelbare darm syndroom?",
                  a: "Acupunctuur is veilig bij PDS wanneer uitgevoerd door een erkend acupuncturist. Er zijn geen bijwerkingen op het maagdarmkanaal. De behandeling kan naast dieetadviezen en psychologische begeleiding worden ingezet.",
                },
                {
                  q: "Hoe snel merk je resultaat bij prikkelbare darm syndroom?",
                  a: "Veel patiënten merken na 4 tot 6 sessies een verbetering. Voor chronische PDS adviseren wij een volledige reeks van 8 tot 12 behandelingen. De snelheid van herstel hangt af van het subtype en de stressbelasting.",
                },
                {
                  q: "Wordt acupunctuur voor prikkelbare darm syndroom vergoed?",
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
                Klaar om uw PDS-klachten aan te pakken? Plan direct uw afspraak of neem contact op
                via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_pds"
                  title="Afspraak maken voor prikkelbare darm syndroom"
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
