import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Overactieve Blaas | Acupunctuur Zaandam",
  description:
    "Last van een overactieve blaas? Acupunctuur in Zaandam helpt bij frequente aandrang, urgency-incontinentie en nachtelijk plassen. Erkend NVA-acupuncturist, vergoeding mogelijk.",
  keywords: [
    "acupunctuur overactieve blaas",
    "overactieve blaas behandeling",
    "urgency incontinentie acupunctuur",
    "nycturie acupunctuur",
    "nachtelijk plassen behandeling",
    "acupunctuur blaasklachten Zaandam",
    "frequente aandrang behandeling",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-overactieve-blaas",
      name: "Acupunctuur bij Overactieve Blaas",
      description:
        "Behandeling van overactieve blaas, frequente aandrang en urgency-incontinentie met acupunctuur in Zaandam.",
      about: [{ "@type": "MedicalCondition", name: "Overactieve blaas" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Overactieve blaas" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij overactieve blaas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan effectief zijn bij overactieve blaas. De behandeling richt zich op het kalmeren van de detrusorspier, het reguleren van het zenuwstelsel rondom de blaas en het herstellen van de balans in het waterhuishoudingssysteem volgens de TCG. Veel patiënten ervaren minder aandrangepisodes en betere blaasfunctie na een behandelreeks.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij overactieve blaas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is een veilige behandeling voor overactieve blaas wanneer uitgevoerd door een erkend acupuncturist. Bij Acupunctuur Zaandam werken wij met steriele eenmalige naalden. De behandeling kan goed gecombineerd worden met bestaande medische behandelingen en bekkenbodemfysiotherapie.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij overactieve blaas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De meeste patiënten merken na 3 tot 5 behandelingen een verbetering in de frequentie en intensiteit van de aandrang. Een volledige behandelreeks bestaat doorgaans uit 8 tot 10 sessies. Resultaten variëren per persoon, afhankelijk van de oorzaak en duur van de klachten.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor overactieve blaas vergoed?",
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
          name: "Acupunctuur bij Overactieve Blaas",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-overactieve-blaas",
        },
      ],
    },
  ],
};

export default function OveractieveBlaasBehandelingPage() {
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
              <Link href="/" className="hover:text-[#1F3A36] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#8A6B3D]">/</li>
            <li>
              <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">
                Behandelingen
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#8A6B3D]">/</li>
            <li className="text-[#1F3A36] font-medium">Overactieve Blaas</li>
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
                Acupunctuur bij Overactieve Blaas in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                Een overactieve blaas kan uw dagelijks leven sterk beperken. Steeds weer naar het
                toilet, &apos;s nachts wakker worden en de angst voor ongelukken: het sloopt uw
                energie en zelfvertrouwen. Acupunctuur biedt een natuurlijke, holistische benadering
                die de oorzaak aanpakt en uw blaasfunctie herstelt.
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
                  href="/klachten/overactieve-blaas"
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
                {/* Wat is */}
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Wat is een overactieve blaas?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Een overactieve blaas (OAB) is een aandoening waarbij de blaas onverwacht samentrekt,
                    ook als hij niet vol is. Dit leidt tot een plotselinge, moeilijk te onderdrukken
                    aandrang om te plassen. De detrusorspier &mdash; de spier in de blaaswand &mdash;
                    is overactief en reageert overdreven sterk op kleine hoeveelheden urine.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De klachten manifesteren zich als frequente mictie (meer dan 8 keer per dag),
                    urgency-incontinentie (onvrijwillig urineverlies bij plotselinge aandrang) en
                    nycturie (nachtelijk plassen). Vrouwen worden vaker getroffen dan mannen, maar
                    ook mannen met prostaatproblemen kennen soortgelijke symptomen.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Conventionele behandelingen omvatten blaastraining, bekkenbodemoefeningen en
                    medicatie (anticholinergica). Deze helpen niet altijd voldoende en hebben vaak
                    bijwerkingen. Acupunctuur biedt een waardevolle aanvulling of alternatief.
                  </p>
                </section>

                {/* Hoe helpt */}
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij overactieve blaas?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de Traditionele Chinese Geneeskunde (TCG) wordt de blaas beheerst door de
                    Nier-energie en het Qi-systeem. Een overactieve blaas wijst vaak op een
                    insufficiëntie van het Nier-Yang (verwarmende kracht) of een stagnatie van
                    Lever-Qi die de blaas overprikkelt. De behandeling richt zich op het versterken
                    van de Nier-energie, het kalmeren van de Lever en het herstel van de
                    Qi-doorstroming in de blaasmeridiaan.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Veelgebruikte acupunctuurpunten zijn SP6 (kruising van drie yin-meridianen),
                    BL23 (back-shu punt van de Nier), CV3 (alarm punt van de blaas) en KD3 (bron
                    punt van de Nier). Deze punten reguleren gezamenlijk de blaasfunctie en verminderen
                    overactiviteit.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Moderne wetenschappelijke verklaring
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Vanuit westerse perspectief werkt acupunctuur op de blaas via het autonome
                    zenuwstelsel. De behandeling moduleert de activiteit van parasympatische en
                    sympatische zenuwvezels die de detrusorspier aansturen. Naaldstimulusatie nabij
                    sacraal segment S3 &mdash; vergelijkbaar met tibiale zenuwstimulatie &mdash;
                    kalmeert de overactieve reflexboog van de blaas.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Tevens worden endorfinen en andere neuromodulatoren vrijgegeven die de
                    pijngewaarwording verminderen en de spierspanning in de bekkenbodem normaliseren.
                    Dit verklaart waarom acupunctuur ook effectief is bij de angst- en stresscomponent
                    die overactieve blaas vaak begeleidt.
                  </p>
                </section>

                {/* Behandeling */}
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe verloopt de behandeling?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De eerste sessie begint altijd met een uitgebreid intakegesprek. We bespreken uw
                    klachten, slaappatroon, dieet, stressniveau en medische voorgeschiedenis. Dit
                    geeft ons een volledig beeld van uw constitutie volgens de TCG, zodat de
                    behandeling op maat gemaakt kan worden.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Tijdens de behandeling liggen de naalden doorgaans 20 tot 30 minuten in. De
                    plaatsing varieert afhankelijk van het TCG-patroon: bij Nier-Yang-insufficiëntie
                    combineren we buikpunten met sacrale punten en beenpunten. Bij een Lever-Qi
                    stagnatie voegen we ribbenrandpunten en polspunten toe.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Een behandelreeks bestaat uit 8 tot 10 sessies, aanvankelijk wekelijks, later
                    eens per twee weken. Tussentijds evalueren we de voortgang aan de hand van een
                    plasdagboek dat u bijhoudt.
                  </p>
                </section>

                {/* Hoeveel */}
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoeveel behandelingen zijn nodig?
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">1&ndash;3</div>
                      <div className="text-sm text-[#4A6559]">Eerste verbetering merkbaar</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">8&ndash;10</div>
                      <div className="text-sm text-[#4A6559]">Volledige behandelreeks</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">1&times;</div>
                      <div className="text-sm text-[#4A6559]">Onderhoud per kwartaal</div>
                    </div>
                  </div>
                </section>

                {/* Voor wie */}
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Voor wie is deze behandeling geschikt?
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Frequente aandrang overdag (meer dan 8x plassen per dag)",
                      "Urgency-incontinentie: onverwacht urineverlies bij plotselinge aandrang",
                      "Nycturie: &apos;s nachts meerdere malen wakker worden om te plassen",
                      "Overactieve detrusorspier (vastgesteld via urodynmamisch onderzoek)",
                      "Onvoldoende respons op medicatie of blaastraining",
                      "Personen die medicatie willen vermijden vanwege bijwerkingen",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <iconify-icon
                          icon="ph:check-circle-fill"
                          className="text-[#8A6B3D] text-xl mt-0.5 shrink-0"
                        />
                        <span
                          className="text-[#4A6559]"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Related links */}
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Gerelateerde behandelingen
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Link
                      href="/behandelingen/acupunctuur-blaasklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon
                        icon="ph:drop"
                        className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]"
                      />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">
                        Blaasklachten
                      </div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-urineverlies"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon
                        icon="ph:waves"
                        className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]"
                      />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">
                        Urineverlies
                      </div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-stressklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon
                        icon="ph:brain"
                        className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]"
                      />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">
                        Stressklachten
                      </div>
                    </Link>
                  </div>
                </section>

                {/* Local SEO */}
                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur bij overactieve blaas in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Acupunctuur Zaandam is gevestigd in het hart van Zaandam en goed bereikbaar
                    vanuit Zaanstreek, Purmerend, Amsterdam-Noord en omstreken. Wij zijn erkend door
                    de NVA en TCMA, zodat uw behandeling vergoed kan worden door de meeste
                    zorgverzekeraars. Bel of app ons voor een vrijblijvend kennismakingsgesprek.
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
                    Klaar om uw blaasklachten aan te pakken? Maak vandaag nog een afspraak.
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
              Veelgestelde vragen over acupunctuur bij overactieve blaas
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij overactieve blaas?",
                  a: "Ja, acupunctuur kan effectief zijn bij overactieve blaas. De behandeling richt zich op het kalmeren van de detrusorspier, het reguleren van het zenuwstelsel rondom de blaas en het herstellen van de balans in het waterhuishoudingssysteem. Veel patiënten ervaren minder aandrangepisodes en betere blaasfunctie na een behandelreeks.",
                },
                {
                  q: "Is acupunctuur veilig bij overactieve blaas?",
                  a: "Acupunctuur is een veilige behandeling voor overactieve blaas wanneer uitgevoerd door een erkend acupuncturist. Bij Acupunctuur Zaandam werken wij met steriele eenmalige naalden. De behandeling kan goed gecombineerd worden met bestaande medische behandelingen en bekkenbodemfysiotherapie.",
                },
                {
                  q: "Hoe snel merk je resultaat bij overactieve blaas?",
                  a: "De meeste patiënten merken na 3 tot 5 behandelingen een verbetering in de frequentie en intensiteit van de aandrang. Een volledige behandelreeks bestaat doorgaans uit 8 tot 10 sessies. Resultaten variëren per persoon, afhankelijk van de oorzaak en duur van de klachten.",
                },
                {
                  q: "Wordt acupunctuur voor overactieve blaas vergoed?",
                  a: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-medium text-[#1F3A36]">
                    {q}
                    <iconify-icon
                      icon="ph:caret-down"
                      className="text-[#8A6B3D] shrink-0 transition-transform group-open:rotate-180"
                    />
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
                Klaar om uw overactieve blaas aan te pakken? Plan direct een afspraak in of stuur
                ons een bericht via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_overactief_blaas"
                  title="Afspraak maken voor overactieve blaas"
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
