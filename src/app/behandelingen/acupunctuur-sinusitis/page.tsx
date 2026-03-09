import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Sinusitis | Acupunctuur Zaandam",
  description:
    "Last van chronische of recidiverende sinusitis? Acupunctuur in Zaandam verlicht bijholteontsteking, verstopte neus en aangezichtspijn. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur sinusitis",
    "bijholteontsteking acupunctuur",
    "chronische sinusitis behandeling",
    "acupunctuur verstopte neus Zaandam",
    "sinusitis natuurlijke behandeling",
    "allergische sinusitis acupunctuur",
    "acupunctuur luchtwegen",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-sinusitis",
      name: "Acupunctuur bij Sinusitis",
      description:
        "Behandeling van chronische en recidiverende sinusitis met acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Sinusitis (bijholteontsteking)" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Sinusitis" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij sinusitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan effectief zijn bij sinusitis. De behandeling verbetert de drainage van de neusbijholten, versterkt het immuunsysteem en vermindert de neiging tot terugkerende ontstekingen. Veel patiënten ervaren minder congestie, minder aangezichtspijn en een betere doorgankelijkheid van de neus na een behandelreeks.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij sinusitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij sinusitis wanneer uitgevoerd door een erkend acupuncturist. De behandeling kan goed gecombineerd worden met medische behandeling zoals antibiotica bij acute infecties. Voor chronische sinusitis biedt acupunctuur een duurzamere oplossing dan herhaaldelijk antibioticagebruik.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij sinusitis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel patiënten ervaren al na 2 tot 3 behandelingen verlichting van de nasale congestie en drukpijn. Voor chronische sinusitis adviseren wij een volledige reeks van 8 tot 10 sessies om de onderliggende vatbaarheid te verminderen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor sinusitis vergoed?",
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
          name: "Acupunctuur bij Sinusitis",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-sinusitis",
        },
      ],
    },
  ],
};

export default function SinusitisBehandelingPage() {
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
            <li className="text-[#1F3A36] font-medium">Sinusitis</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-48 pb-16 bg-[#FAF8F3]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-[#8A6B3D] text-sm font-medium tracking-widest uppercase mb-4">
                Luchtwegen &amp; Allergieën
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#1F3A36] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Acupunctuur bij Sinusitis in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Chronische sinusitis &mdash; de steeds terugkerende bijholteontsteking met drukpijn
                in het gezicht, verstopte neus en verminderde reuk &mdash; beïnvloedt uw kwaliteit
                van leven fors. Acupunctuur versterkt uw luchtweegverdediging, bevordert de drainage
                en vermindert de vatbaarheid voor terugkerende infecties.
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
                  href="/klachten/sinusitis"
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
                    Wat is sinusitis?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Sinusitis is een ontsteking van het slijmvlies in de neusbijholten. De acute
                    vorm ontstaat meestal na een verkoudheid of griep; chronische sinusitis wordt
                    gedefinieerd als klachten die langer dan 12 weken aanhouden. De kaakholten
                    (sinus maxillaris), voorhoofdsholten (sinus frontalis) en zeefbeenholten
                    (sinus ethmoidalis) zijn het vaakst aangetast.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Typische symptomen zijn drukpijn en pijn in het gezicht, neusverstopping, postnasal
                    drip (slijm in de keel), verminderde reuk en vermoeidheid. Bij allergische
                    sinusitis spelen ook histamine-reacties een rol, waardoor de klachten
                    seizoensgebonden kunnen zijn.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Standaardbehandeling omvat neusspoeling, decongestiva en antibiotica bij bacteriële
                    infectie. Bij terugkerende sinusitis biedt acupunctuur een aanpak die de
                    onderliggende vatbaarheid aanpakt in plaats van alleen de symptomen te bestrijden.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij sinusitis?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG valt sinusitis onder aandoeningen van de Long-meridiaan, die verantwoordelijk
                    is voor de verdediging van het lichaam tegen externe pathogenen en de beheersing
                    van de neuspassages. Chronische sinusitis wijst op een zwakke Wei-Qi (beschermende
                    levenskracht) gecombineerd met ophoping van Vochtigheid en Hitte in het hoofd.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling richt zich op het versterken van de Long- en Milt-Qi om
                    vochtigheidsophoping te voorkomen, het verwijderen van pathogenen uit de sinussen
                    en het openen van de neuspassages. Punt LI20 (Yingxiang, naast de neusvleugels)
                    is het klassieke punt voor nasale doorgankelijkheid; LU7 versterkt de Long-Qi;
                    ST36 tonificeert de Wei-Qi.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Acupunctuur moduleert de immuunrespons door de activiteit van T-helpercellen en
                    natural killer-cellen te reguleren. Bij allergische sinusitis vermindert
                    acupunctuur de histamine-gemedieerde reactie en verlaagt de concentratie van
                    IgE-antilichamen die verantwoordelijk zijn voor de allergische ontsteking.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Lokale stimulatie rondom de neusbijholten vergroot de doorbloeding van het
                    slijmvlies en bevordert de mucociliaire klaring &mdash; het mechanisme waarmee
                    trilhaarepitheel slijm en pathogenen afvoert. Dit versnelt het herstel bij
                    acute infecties en vermindert het risico op chronificering.
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
                    Bij de intake bespreken we de aard van uw sinusitisklachten: zijn ze
                    seizoensgebonden (allergisch), volgen ze verkoudheid, of zijn ze chronisch
                    aanwezig? We brengen ook uw immunologisch profiel in kaart via de TCG-diagnose.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling omvat naalden in het gezicht (nabij sinusholten en neusvleugels),
                    op de handen en armen (Long-meridiaan) en op de benen (Milt-meridiaan voor
                    vochtregulatie). Sommige patiënten ervaren directe ontlasting van de
                    neusverstopping al tijdens de behandelsessie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Naast acupunctuur adviseren we over neusspoeling met fysiologisch zout, het
                    mijden van vochtproducerende voeding (zuivel, suiker) en ademhalingsoefeningen
                    om de Long-functie te versterken.
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
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">2&ndash;3</div>
                      <div className="text-sm text-[#4A6559]">Eerste verlichting congestie</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">8&ndash;10</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">seizoen</div>
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
                      "Chronische sinusitis met persistente neusverstopping en drukpijn",
                      "Recidiverende bijholteontsteking (meerdere episoden per jaar)",
                      "Post-infectieuze sinusitis na doorgemaakte verkoudheid of COVID",
                      "Allergische sinusitis als onderdeel van hooikoorts of huisstofmijtallergie",
                      "Mensen die antibioticakuren willen verminderen of vermijden",
                      "Sinusitis gecombineerd met vermoeidheid en verminderde weerstand",
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
                      href="/behandelingen/acupunctuur-hooikoorts"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:flower" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Hooikoorts</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-allergische-klachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:leaf" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Allergische klachten</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-aangezichtspijn"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:smiley-sad" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Aangezichtspijn</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij sinusitis in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Onze praktijk in het centrum van Zaandam is goed bereikbaar voor bewoners van
                    de Zaanstreek, Purmerend en Amsterdam-Noord. Als NVA- en TCMA-erkend acupuncturist
                    behandelen wij sinusitis met een holistische aanpak die zowel de acute klacht als
                    de onderliggende vatbaarheid aanpakt. Vergoeding door de meeste aanvullende
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
                    Bevrijd uw neus en bijholten. Plan vandaag nog uw eerste sessie.
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
              Veelgestelde vragen over acupunctuur bij sinusitis
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij sinusitis?",
                  a: "Ja, acupunctuur kan effectief zijn bij sinusitis. De behandeling verbetert de drainage van de neusbijholten, versterkt het immuunsysteem en vermindert de neiging tot terugkerende ontstekingen. Veel patiënten ervaren minder congestie en minder aangezichtspijn.",
                },
                {
                  q: "Is acupunctuur veilig bij sinusitis?",
                  a: "Acupunctuur is veilig bij sinusitis wanneer uitgevoerd door een erkend acupuncturist. De behandeling kan goed gecombineerd worden met medische behandeling. Voor chronische sinusitis biedt acupunctuur een duurzamere oplossing dan herhaaldelijk antibioticagebruik.",
                },
                {
                  q: "Hoe snel merk je resultaat bij sinusitis?",
                  a: "Veel patiënten ervaren al na 2 tot 3 behandelingen verlichting van de nasale congestie en drukpijn. Voor chronische sinusitis adviseren wij een volledige reeks van 8 tot 10 sessies om de onderliggende vatbaarheid te verminderen.",
                },
                {
                  q: "Wordt acupunctuur voor sinusitis vergoed?",
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
                Klaar om uw sinusitis aan te pakken? Plan direct uw afspraak of neem contact op
                via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_sinusitis"
                  loading="lazy"
                  title="Afspraak maken voor sinusitis"
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
