import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Urineverlies | Acupunctuur Zaandam",
  description:
    "Last van urineverlies of incontinentie? Acupunctuur in Zaandam helpt bij stress-incontinentie, urgency-incontinentie en bekkenbodemklachten. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur urineverlies",
    "incontinentie behandeling acupunctuur",
    "stress incontinentie acupunctuur",
    "acupunctuur bekkenbodem Zaandam",
    "urgency incontinentie behandeling",
    "postpartum urineverlies acupunctuur",
    "acupunctuur blaasklachten",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-urineverlies",
      name: "Acupunctuur bij Urineverlies",
      description:
        "Behandeling van urineverlies en incontinentie met acupunctuur in Zaandam: stress-incontinentie, urgency-incontinentie en bekkenbodemklachten.",
      about: [{ "@type": "MedicalCondition", name: "Urineverlies (incontinentie)" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Urineverlies" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij urineverlies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan effectief zijn bij urineverlies. De behandeling versterkt de bekkenbodemfunctie, reguleert de blaasspier en normaliseert het zenuwstelsel dat de mictie aanstuurt. Bij stress-incontinentie, urgency-incontinentie en postpartum urineverlies rapporteren patiënten verbetering na een behandelreeks.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij urineverlies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij urineverlies wanneer uitgevoerd door een erkend acupuncturist. De behandeling kan goed worden gecombineerd met bekkenbodemfysiotherapie voor een maximaal resultaat. Er zijn geen bijwerkingen op de blaasfunctie.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij urineverlies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel patiënten merken na 4 tot 6 behandelingen een verbetering in de frequentie en hoeveelheid van het urineverlies. Een volledige behandelreeks van 8 tot 10 sessies geeft de beste kansen op duurzame verbetering.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor urineverlies vergoed?",
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
          name: "Acupunctuur bij Urineverlies",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-urineverlies",
        },
      ],
    },
  ],
};

export default function UrineverliesBehandelingPage() {
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
            <li className="text-[#1F3A36] font-medium">Urineverlies</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-48 pb-16 bg-[#FAF8F3]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-[#8A6B3D] text-sm font-medium tracking-widest uppercase mb-4">
                Blaas &amp; Urogenitaal
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#1F3A36] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Acupunctuur bij Urineverlies in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Urineverlies &mdash; of het nu bij hoesten, niezen, sporten of een plotselinge
                aandrang is &mdash; kan uw zelfvertrouwen en vrijheid ernstig aantasten. Acupunctuur
                versterkt de bekkenbodem, reguleert de blaaszenuw en herstelt de controle over
                de mictie op een natuurlijke, holistische manier.
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
                  href="/klachten/urineverlies"
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
                    Wat is urineverlies?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Urineverlies (urine-incontinentie) is het ongewild lekken van urine. Er zijn
                    verschillende vormen: stress-incontinentie treedt op bij plotselinge
                    drukverhoging in de buikholte (hoesten, niezen, lachen, sporten); urgency-
                    incontinentie gaat gepaard met een plotselinge sterke aandrang die niet kan
                    worden onderdrukt; gemengde incontinentie is een combinatie van beide.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Urineverlies treft naar schatting 25 tot 40 procent van de vrouwen op enig
                    moment in hun leven. Zwangerschap en bevalling zijn de voornaamste risicofactoren
                    voor stress-incontinentie door verzwakking van de bekkenbodem. Ook mannen
                    kunnen last krijgen van incontinentie, veelal na prostaatproblematiek.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Bekkenbodemoefeningen (Kegel) zijn de eerste behandelingslijn; acupunctuur is
                    een waardevolle aanvulling die de zenuwregulatie van de blaas herstelt en de
                    effectiviteit van fysiotherapie vergroot.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij urineverlies?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG wordt urineverlies geassocieerd met een verzwakking van de Nier-Yang
                    energie en een insufficiëntie van de sluitfunctie van de Nier (de poortwachter
                    van de mictie). De behandeling richt zich op het versterken van het Nier-Yang,
                    het tonificeren van de spieren en ligamenten in het bekken en het stabiliseren
                    van de Qi in de blaasmeridiaan.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Sacrale punten (BL23, BL32) versterken de Nier-functie en activeren de
                    blaaszenuw vanuit het sacrale kanaal. CV4 en SP6 versterken het Yin en de
                    sluitfunctie van de blaas. KD3 voedt de Nier-essentie en herstelt de
                    constitutionele energie van het bekken.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Acupunctuur bij het sacrale niveau stimuleert de nervus pudendus en de
                    sacrale parasympatische vezels die de bekkenbodem en de urethrale sphincter
                    innerveren. Dit is vergelijkbaar met sacrale neurostimulatie, een medisch
                    erkende behandeling voor incontinentie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Tibiale zenuwstimulatie &mdash; via het acupunctuurpunt SP6 aan de binnenkant
                    van het onderbeen &mdash; moduleert de mictiereflex via het ruggenmerg en heeft
                    in klinische studies aangetoonde effectiviteit bij overactieve blaas en
                    urgency-incontinentie.
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
                    Tijdens de intake bespreken we het type incontinentie, de situaties waarbij
                    het verlies optreedt, uw obstetrie-anamnese (bevallingsgeschiedenis), hormonale
                    status en eventuele bekkenbodemfysiotherapie. Dit bepaalt de behandelstrategie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De acupunctuurbehandeling combineert sacrale punten (u ligt op de buik voor
                    dit deel) met buikpunten en beenpunten. De sessie duurt 30 tot 40 minuten.
                    We stellen een plasdagboek op om voortgang objectief te meten.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Wij adviseren nadrukkelijk om acupunctuur te combineren met bekkenbodemoefeningen
                    onder begeleiding van een gespecialiseerde fysiotherapeut. De synergie van
                    beide behandelingen geeft de beste resultaten.
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
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">8&ndash;10</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">kwartaal</div>
                      <div className="text-sm text-[#4A6559]">Onderhoud indien nodig</div>
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
                      "Stress-incontinentie bij hoesten, niezen, sporten of lachen",
                      "Urgency-incontinentie met plotselinge, niet te onderdrukken aandrang",
                      "Bekkenbodemklachten na zwangerschap en bevalling (postpartum)",
                      "Urineverlies bij vrouwen in de overgang door verminderd oestrogeen",
                      "Mensen bij wie bekkenbodemoefeningen alleen onvoldoende resultaat geven",
                      "Personen die operatieve behandeling willen uitstellen of vermijden",
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
                      href="/behandelingen/acupunctuur-overactieve-blaas"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:drop" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Overactieve blaas</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-blaasklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:waves" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Blaasklachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-bekkenklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:person" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Bekkenklachten</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij urineverlies in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Acupunctuur Zaandam behandelt urineverlies in een vertrouwde, respectvolle
                    setting. Onze praktijk in het centrum van Zaandam is bereikbaar vanuit de
                    gehele Zaanstreek en Amsterdam-Noord. Als NVA- en TCMA-erkend acupuncturist
                    bieden wij een holistische aanpak met vergoeding door de meeste aanvullende
                    verzekeringen.
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
                    Herstel uw controle en zelfvertrouwen. Plan vandaag nog uw eerste sessie.
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
              Veelgestelde vragen over acupunctuur bij urineverlies
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij urineverlies?",
                  a: "Ja, acupunctuur kan effectief zijn bij urineverlies. De behandeling versterkt de bekkenbodemfunctie, reguleert de blaasspier en normaliseert het zenuwstelsel dat de mictie aanstuurt. Bij stress-incontinentie, urgency-incontinentie en postpartum urineverlies rapporteren patiënten verbetering na een behandelreeks.",
                },
                {
                  q: "Is acupunctuur veilig bij urineverlies?",
                  a: "Acupunctuur is veilig bij urineverlies wanneer uitgevoerd door een erkend acupuncturist. De behandeling kan goed worden gecombineerd met bekkenbodemfysiotherapie voor een maximaal resultaat. Er zijn geen bijwerkingen op de blaasfunctie.",
                },
                {
                  q: "Hoe snel merk je resultaat bij urineverlies?",
                  a: "Veel patiënten merken na 4 tot 6 behandelingen een verbetering in de frequentie en hoeveelheid van het urineverlies. Een volledige behandelreeks van 8 tot 10 sessies geeft de beste kansen op duurzame verbetering.",
                },
                {
                  q: "Wordt acupunctuur voor urineverlies vergoed?",
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
                Klaar om uw urineverlies aan te pakken? Plan direct uw afspraak of neem contact op
                via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_urine"
                  title="Afspraak maken voor urineverlies"
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
