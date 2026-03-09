import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Tinnitus | Acupunctuur Zaandam",
  description:
    "Last van tinnitus of oorsuizen? Acupunctuur in Zaandam helpt bij subjectieve tinnitus, stress-gerelateerd oorsuizen en tinnitus na gehoorschade. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur tinnitus",
    "oorsuizen behandeling acupunctuur",
    "tinnitus natuurlijke behandeling",
    "acupunctuur tinnitus Zaandam",
    "stress tinnitus acupunctuur",
    "subjectieve tinnitus behandeling",
    "acupunctuur hoofd zenuwstelsel",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-tinnitus",
      name: "Acupunctuur bij Tinnitus",
      description:
        "Behandeling van tinnitus (oorsuizen) met acupunctuur in Zaandam: subjectieve tinnitus, stress-gerelateerd oorsuizen en tinnitus na gehoorschade.",
      about: [{ "@type": "MedicalCondition", name: "Tinnitus (oorsuizen)" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Tinnitus" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij tinnitus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan bij een deel van de tinnitus-patiënten verlichting bieden. Het is het meest effectief bij subjectieve tinnitus met een stresscomponent en tinnitus in een vroeg stadium. De behandeling richt zich op het kalmeren van het zenuwstelsel, het verbeteren van de doorbloeding in het innerlijk oor en het verminderen van de stressreactie die tinnitus verergert.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij tinnitus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is een veilige behandeling voor tinnitus. Er zijn geen bekende bijwerkingen op het gehoor. De behandeling kan gecombineerd worden met tinnitus-retraining therapie, mindfulness en stressmanagement voor een integraal resultaat.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij tinnitus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Resultaten bij tinnitus variëren sterk per persoon. Sommige patiënten merken al na 4 tot 6 sessies vermindering van de luidheid of hinderlijkheid. Een volledige reeks van 10 tot 12 behandelingen geeft de beste kansen op duurzame verbetering.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor tinnitus vergoed?",
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
          name: "Acupunctuur bij Tinnitus",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-tinnitus",
        },
      ],
    },
  ],
};

export default function TinnitusBehandelingPage() {
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
            <li className="text-[#1F3A36] font-medium">Tinnitus</li>
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
                Acupunctuur bij Tinnitus in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Tinnitus &mdash; een voortdurend suizen, piepen of gonzen in de oren zonder externe
                geluidsbron &mdash; kan uw leven drastisch beïnvloeden. Slaapproblemen, concentratiemoeilijkheden
                en angst zijn veelvoorkomende gevolgen. Acupunctuur kalmeert het zenuwstelsel,
                verbetert de doorbloeding in het innerlijk oor en vermindert de stressreactie die
                tinnitus verergert.
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
                  href="/klachten/tinnitus"
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
                    Wat is tinnitus?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Tinnitus is de waarneming van geluid zonder externe bron. Het kan zich uiten
                    als suizen, piepen, gonzen, klikken of ruisen. Subjectieve tinnitus &mdash;
                    verreweg de meest voorkomende vorm &mdash; is alleen hoorbaar voor de patiënt
                    zelf en heeft een neurologische oorsprong in de auditieve verwerkingsgebieden
                    van de hersenen.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Oorzaken zijn gehoorschade door lawaai, ouderdomsslechthorendheid (presbyacusis),
                    stress en burn-out, medicijngebruik (ototoxiciteit), en aandoeningen als de
                    ziekte van Ménière. Bij veel patiënten is er geen duidelijke oorzaak te vinden.
                    Stress en slaaptekort verergeren de klachten vrijwel altijd.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Conventioneel zijn de behandelingsopties beperkt: geluidsmaskering,
                    tinnitus-retraining therapie en cognitieve gedragstherapie helpen bij acceptatie
                    maar lossen de klacht niet op. Acupunctuur biedt een aanpak die de onderliggende
                    disbalans &mdash; ook de stresscomponent &mdash; adresseert.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij tinnitus?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG horen de oren bij de Nier-meridiaan. Tinnitus wijst in de TCG-theorie
                    op een Nier-Yin deficiëntie of een opstijgen van Lever-Yang naar het hoofd.
                    Plotseling optredende tinnitus (acuut, hoog piepen) wijst vaker op een Lever-Yang
                    overmacht door stress; geleidelijk ontstane tinnitus (laag suizen) op Nier-Yin
                    uitputting.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling richt zich op het voeden van het Nier-Yin, het dalen van het
                    opstijgende Lever-Yang en het kalmeren van de Geest (Shen). Acupunctuurpunten
                    rondom het oor (GB2, TB21, SI19) worden gecombineerd met lichaamspunten
                    als KD3 (tonificeert Nier-Yin) en LV3 (dempt Lever-Yang).
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Acupunctuur moduleert de neuronale activiteit in de auditieve cortex die bij
                    tinnitus overactief is. Door het activeren van het parasympatische zenuwstelsel
                    vermindert de algehele stressrespons &mdash; een sleutelfactor die bepaalt in
                    hoeverre tinnitus als hinderlijk wordt ervaren.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Verbeterde doorbloeding in de cochleaire structuren kan bij vasculair-gerelateerde
                    tinnitus bijdragen aan vermindering van de klachten. De vrijgave van serotonine
                    en endorfinen draagt bij aan een beter slaappatroon, waardoor de vicieuze cirkel
                    van slaaptekort en verergerende tinnitus wordt doorbroken.
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
                    Bij de intake bespreken we het karakter van de tinnitus (hoog/laag, continu/
                    intermitterend), de startomstandigheden, uw slaapkwaliteit en stressniveau.
                    Dit bepaalt het TCG-patroon en de behandelstrategie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Naalden worden geplaatst rondom het oor, op de schedelbasis en nek (voor
                    vasculaire toevoer), en op lichaamspunten die het Nier-systeem voeden en
                    Lever-Yang dempten. De behandeling is ontspannend en pijnloos; veel patiënten
                    vallen bijna in slaap.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    We integreren de acupunctuurbehandeling graag met adviezen over stressmanagement,
                    slaaphygiëne en geluidhygiëne. Een multidisciplinaire benadering geeft de
                    beste resultaten bij tinnitus.
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
                      <div className="text-sm text-[#4A6559]">Eerste verbetering mogelijk</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">10&ndash;12</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">kwartaal</div>
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
                      "Subjectieve tinnitus (alleen door patiënt waarneembaar)",
                      "Stress-gerelateerde tinnitus die verergert bij spanning of slaaptekort",
                      "Tinnitus na gehoorschade door lawaai of ototoxische medicijnen",
                      "Tinnitus gecombineerd met slaapproblemen en concentratiemoeilijkheden",
                      "Patiënten bij wie geen medisch-oorzakelijke behandeling meer mogelijk is",
                      "Tinnitus in vroeg stadium (beste kansen op herstel)",
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
                      href="/behandelingen/acupunctuur-duizeligheid"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:arrows-clockwise" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Duizeligheid</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-stressklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:brain" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Stressklachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-slaapproblemen"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:moon" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Slaapproblemen</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij tinnitus in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Onze praktijk in het centrum van Zaandam behandelt tinnitus-patiënten uit
                    de Zaanstreek, Amsterdam-Noord en Purmerend. We nemen de tijd voor een
                    uitgebreide anamnese en stellen een behandelplan op maat op. Als NVA- en
                    TCMA-erkend acupuncturist zijn wij aangesloten bij de meeste zorgverzekeraars
                    voor vergoeding vanuit de aanvullende verzekering.
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
                    Klaar om uw tinnitus aan te pakken? Plan vandaag nog uw sessie.
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
              Veelgestelde vragen over acupunctuur bij tinnitus
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij tinnitus?",
                  a: "Acupunctuur kan bij een deel van de tinnitus-patiënten verlichting bieden. Het is het meest effectief bij subjectieve tinnitus met een stresscomponent en tinnitus in een vroeg stadium. De behandeling richt zich op het kalmeren van het zenuwstelsel, het verbeteren van de doorbloeding en het verminderen van de stressreactie.",
                },
                {
                  q: "Is acupunctuur veilig bij tinnitus?",
                  a: "Acupunctuur is een veilige behandeling voor tinnitus. Er zijn geen bekende bijwerkingen op het gehoor. De behandeling kan gecombineerd worden met tinnitus-retraining therapie en stressmanagement voor een integraal resultaat.",
                },
                {
                  q: "Hoe snel merk je resultaat bij tinnitus?",
                  a: "Resultaten bij tinnitus variëren sterk per persoon. Sommige patiënten merken al na 4 tot 6 sessies vermindering van de luidheid of hinderlijkheid. Een volledige reeks van 10 tot 12 behandelingen geeft de beste kansen op duurzame verbetering.",
                },
                {
                  q: "Wordt acupunctuur voor tinnitus vergoed?",
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
                Klaar om uw tinnitus aan te pakken? Plan direct uw afspraak of neem contact op
                via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_tinnitus"
                  loading="lazy"
                  title="Afspraak maken voor tinnitus"
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
