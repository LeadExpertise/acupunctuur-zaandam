import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Voedselintoleranties | Acupunctuur Zaandam",
  description:
    "Last van voedselintoleranties? Acupunctuur in Zaandam verlicht symptomen van lactose-intolerantie, glutengevoeligheid en fructose-malabsorptie. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur voedselintoleranties",
    "voedselintolerantie behandeling",
    "lactose intolerantie acupunctuur",
    "glutengevoeligheid acupunctuur",
    "fructose malabsorptie behandeling",
    "acupunctuur spijsvertering Zaandam",
    "chronische spijsverteringsklachten acupunctuur",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-voedselintoleranties",
      name: "Acupunctuur bij Voedselintoleranties",
      description:
        "Behandeling van voedselintoleranties en chronische spijsverteringsreacties met acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Voedselintoleranties" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Voedselintoleranties" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij voedselintoleranties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan de symptomen van voedselintoleranties verlichten door de darmmotoriteit te reguleren, de slijmvliesintegriteit te ondersteunen en de immuunrespons te moduleren. Patiënten rapporteren minder buikklachten, minder opgeblazen gevoel en een betere tolerantie na een behandelreeks. Acupunctuur lost de intolerantie zelf niet op maar vermindert de reactie erop.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij voedselintoleranties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij voedselintoleranties wanneer uitgevoerd door een erkend acupuncturist. De behandeling heeft geen bijwerkingen op het maagdarmkanaal en kan naast dieetaanpassingen en diëtistbegeleiding worden ingezet.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij voedselintoleranties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De meeste patiënten merken na 4 tot 6 sessies een vermindering van de hevigheid van de klachten na blootstelling aan triggerende voeding. Voor duurzame verbetering adviseren wij een reeks van 8 tot 10 behandelingen gecombineerd met dieetbegeleiding.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor voedselintoleranties vergoed?",
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
          name: "Acupunctuur bij Voedselintoleranties",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-voedselintoleranties",
        },
      ],
    },
  ],
};

export default function VoedselintolerantiesBehandelingPage() {
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
            <li className="text-[#1F3A36] font-medium">Voedselintoleranties</li>
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
                Acupunctuur bij Voedselintoleranties in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Voedselintoleranties kunnen uw dagelijks leven sterk beperken: wat na het eten
                komt is onzeker, sociaal eten wordt stress en uw voedingspatroon wordt steeds
                beperkter. Acupunctuur ondersteunt de spijsvertering, kalmeert de overreagerende
                darm en helpt uw lichaam beter om te gaan met triggerende voedingsmiddelen.
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
                  href="/klachten/voedselintoleranties"
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
                    Wat zijn voedselintoleranties?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Voedselintoleranties zijn niet-immunologische reacties op bepaalde voedingsstoffen.
                    In tegenstelling tot een voedselallergie (waarbij IgE-antilichamen betrokken
                    zijn) gaat het bij een intolerantie om een afwijkende reactie van het
                    spijsverteringsstelsel, vaak door een tekort aan enzymen of een overgevoelig
                    darmslijmvlies.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Veelvoorkomende vormen zijn: lactose-intolerantie (tekort aan lactase waardoor
                    melksuiker niet wordt afgebroken), glutengevoeligheid (niet-coeliakie
                    glutensensitiviteit), fructose-malabsorptie (onvermogen om fructose volledig
                    op te nemen in de dunne darm) en histamine-intolerantie (tekort aan
                    diamine-oxidase).
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Klachten zijn buikpijn, opgeblazen gevoel, diarree, winderigheid, misselijkheid
                    en soms ook extraintestinale symptomen als hoofdpijn, huidklachten en
                    vermoeidheid. De diagnose wordt gesteld via eliminatiedieet en/of ademtests.
                    Acupunctuur is een waardevolle aanvulling op dieetmanagement.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij voedselintoleranties?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG berust de spijsvertering primair bij de Milt (transformatie en
                    transport van voedsel) en de Maag (ontvangst en afbraak). Een zwakke
                    Milt-Qi leidt tot onvolledige vertering en ophoping van Vochtigheid in het
                    Midden-Jiao, hetgeen resulteert in de typische klachten van voedselintoleranties:
                    opgeblazen gevoel, losse stoelgang en vermoeidheid na het eten.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling richt zich op het versterken van de Milt-Qi, het verwijderen
                    van Vochtigheid uit het Midden-Jiao en het harmoniseren van de Maag-functie.
                    Sleutelpunten zijn ST36 (Zusanli), SP9 (Yinlingquan voor vochtdrainage),
                    CV12 (Zhongwan, voor het Midden-Jiao) en BL20 (back-shu van de Milt).
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Acupunctuur moduleert het enterisch zenuwstelsel &mdash; het &ldquo;tweede brein&rdquo;
                    in de darmwand &mdash; via de darm-hersenas. Dit normaliseert de darmmotoriteit,
                    vermindert viscerale hypersensitiviteit en ondersteunt de slijmvliesbarrière.
                    Een verbeterde darmbarrière vermindert de ophoping van onverteerde stoffen die
                    de intolerantiereactie uitlokken.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Tevens heeft acupunctuur anti-inflammatoire effecten op het darmslijmvlies
                    via regulatie van pro-inflammatoire cytokinen. Bij histamine-intolerantie kan
                    acupunctuur bijdragen aan de regulatie van de mestcelactiviteit, waardoor de
                    histamine-vrijstelling wordt geremd.
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
                    We starten met een uitgebreide intake over uw voedingspatroon, klachtengeschiedenis,
                    de triggerende voedingsmiddelen en uw spijsverteringsstatus. Op basis hiervan
                    stellen we het TCG-patroon vast en bepalen we de behandelstrategie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Naast acupunctuur geven wij TCG-voedingsadviezen die aansluiten bij uw
                    constitutie. Bepaalde voedingsmiddelen versterken de Milt-Qi (gerstkorrel,
                    gember, zoete aardappel); anderen verzwakken haar (rauw voedsel, ijskoude
                    dranken, suiker). Deze adviezen zijn complementair aan de adviezen van uw
                    diëtist.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    We houden samen een voedings- en klachtendagboek bij om patronen te herkennen
                    en het behandelplan zo nodig bij te sturen. Stressmanagement is een belangrijk
                    onderdeel, omdat stress de spijsvertering direct verstoort.
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
                      <div className="text-sm text-[#4A6559]">Eerste klachtenvermindering</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">8&ndash;10</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">seizoen</div>
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
                      "Lactose-intolerantie symptomen: buikpijn, winderigheid, diarree na zuivel",
                      "Glutengevoeligheid (niet-coeliakie): buikklachten na tarwe of gluten",
                      "Fructose-malabsorptie klachten: opgeblazen gevoel na fruit of HFCS",
                      "Histamine-intolerantie: hoofdpijn, huidklachten of maagklachten na histamine-rijk eten",
                      "Chronische spijsverteringsreacties waarbij dieet alleen onvoldoende helpt",
                      "Mensen die hun darmslijmvlies en spijsvertering willen versterken",
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
                      href="/behandelingen/acupunctuur-prikkelbare-darm-syndroom"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:spiral" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Prikkelbare darm</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-darmklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:heartbeat" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Darmklachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-allergische-klachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:leaf" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Allergische klachten</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij voedselintoleranties in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Onze praktijk in het centrum van Zaandam is goed bereikbaar vanuit de
                    Zaanstreek, Purmerend en Amsterdam-Noord. Wij bieden een integrale aanpak
                    van voedselintoleranties die acupunctuur, TCG-voedingsadvies en leefstijl
                    combineert. Als NVA- en TCMA-erkend acupuncturist is vergoeding door de
                    meeste aanvullende verzekeringen mogelijk.
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
                    Meer controle over uw spijsvertering. Plan vandaag nog uw sessie.
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
              Veelgestelde vragen over acupunctuur bij voedselintoleranties
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij voedselintoleranties?",
                  a: "Acupunctuur kan de symptomen van voedselintoleranties verlichten door de darmmotoriek te reguleren, de slijmvliesintegriteit te ondersteunen en de immuunrespons te moduleren. Patiënten rapporteren minder buikklachten en een betere tolerantie na een behandelreeks.",
                },
                {
                  q: "Is acupunctuur veilig bij voedselintoleranties?",
                  a: "Acupunctuur is veilig bij voedselintoleranties wanneer uitgevoerd door een erkend acupuncturist. De behandeling heeft geen bijwerkingen op het maagdarmkanaal en kan naast dieetaanpassingen en diëtistbegeleiding worden ingezet.",
                },
                {
                  q: "Hoe snel merk je resultaat bij voedselintoleranties?",
                  a: "De meeste patiënten merken na 4 tot 6 sessies een vermindering van de hevigheid van de klachten. Voor duurzame verbetering adviseren wij een reeks van 8 tot 10 behandelingen gecombineerd met dieetbegeleiding.",
                },
                {
                  q: "Wordt acupunctuur voor voedselintoleranties vergoed?",
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
                Klaar om uw spijsvertering te versterken? Plan direct uw afspraak of neem contact
                op via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_voedsel"
                  title="Afspraak maken voor voedselintoleranties"
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
