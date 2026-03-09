import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Restless Legs | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij restless legs in Zaandam. Verminder de onrustige, pijnlijke sensaties in de benen &rsquo;s avonds en &rsquo;s nachts op een natuurlijke manier.",
  keywords: [
    "acupunctuur restless legs",
    "restless legs behandeling Zaandam",
    "rusteloze benen acupunctuur",
    "RLS acupunctuur",
    "onrustige benen behandeling",
    "acupunctuur slaap zenuwstelsel Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-restless-legs",
      name: "Acupunctuur bij Restless Legs | Acupunctuur Zaandam",
      description:
        "Behandeling van restless legs syndroom met acupunctuur in Zaandam. Verlicht de onrustige sensaties in benen en verbeter de slaapkwaliteit.",
      about: [
        { "@type": "MedicalCondition", name: "Restless Legs Syndroom" },
        { "@type": "MedicalCondition", name: "RLS" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Restless Legs Syndroom",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij restless legs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan de frequentie en intensiteit van restless legs klachten aanzienlijk verminderen. Door de bloedcirculatie in de benen te verbeteren, het zenuwstelsel te kalmeren en eventuele ijzer- of Qi-tekorten aan te pakken, ervaren veel pati\u00ebnten minder onrust en een betere slaapkwaliteit.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij restless legs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is een veilige en niet-medicamenteuze aanpak voor restless legs. De behandeling heeft geen bijwerkingen en kan naast bestaande medicatie worden ingezet. Overleg met uw arts is altijd aan te raden bij het aanpassen van medicatie.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij restless legs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel pati\u00ebnten ervaren al na drie tot vijf sessies een verbetering in de nachtelijke klachten. Voor een blijvend resultaat is een reeks van zes tot tien behandelingen aanbevolen. Aanvullende leefstijladviezen ondersteunen het herstel.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor restless legs vergoed?",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.acupunctuurzaandam.nl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Behandelingen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Acupunctuur bij Restless Legs",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-restless-legs",
        },
      ],
    },
  ],
};

export default function RestlessLegsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div
            className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Acupunctuur bij Restless Legs</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Hoofd &amp; Zenuwstelsel
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Restless Legs in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Het rusteloze-benensyndroom (RLS) verstoort de nachtrust en maakt ontspannen vrijwel onmogelijk.
              De dringende behoefte om de benen te bewegen, samen met tintelingen of brandende sensaties, treft
              miljoenen mensen. Acupunctuur biedt een effectieve, medicatievrije aanvulling op de behandeling.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
              <Link href="/klachten/restless-legs" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">
                Meer over restless legs
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn restless legs?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Het rusteloze-benensyndroom (RLS) is een neurologische aandoening waarbij een onbedwingbare drang
                ontstaat om de benen te bewegen, vaak gepaard met onaangename sensaties als tintelingen,
                &ldquo;kruipende&rdquo; gevoelens, trekken of een branderig gevoel. De klachten treden typisch op
                in rust en nemen toe &rsquo;s avonds en &rsquo;s nachts, waardoor in- en doorslapen moeilijk wordt.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                RLS wordt primair of secundair geclassificeerd. Primaire RLS heeft een genetische component;
                secundaire RLS kan worden veroorzaakt door ijzertekort, nierinsuffici&euml;ntie, zwangerschap
                of het gebruik van bepaalde medicijnen. De aandoening komt vaker voor bij vrouwen en neemt
                toe met de leeftijd.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                De chronische slaapverstoring die RLS veroorzaakt, leidt op zijn beurt tot vermoeidheid,
                stemmingsproblemen en concentratiestoornissen. Een integrale aanpak &mdash; waarbij acupunctuur
                een waardevolle rol speelt &mdash; richt zich op zowel de symptomen als de onderliggende
                disbalans.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe helpt acupunctuur bij restless legs?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de Traditionele Chinese Geneeskunde wordt RLS vaak toegeschreven aan een Bloed- of Yin-tekort
                in de Lever, waardoor de pezen en spieren &rsquo;s avonds onvoldoende gevoed worden. Wanneer
                bloed en Yin afnemen &mdash; zoals van nature bij het ouder worden &mdash; raken de benen
                &ldquo;hongerig&rdquo; en onrustig. Acupunctuur voedt het Leverbloed en kalmeert Wind, een
                TCG-begrip voor onvrijwillige bewegingen en rusteloosheid.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Westerse verklaringen wijzen op de dopaminerge regulatie: acupunctuur beïnvloedt de dopamine-
                transmissie in de hersenen, hetzelfde systeem dat bij RLS verstoord is. Tevens verbetert
                acupunctuur de perifere circulatie in de benen, vermindert spierspanning en bevordert de
                aanmaak van melatonine, wat de slaapkwaliteit ten goede komt.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Bij een vastgesteld ijzertekort als bijdragende factor kunnen voedingsadviezen worden
                meegegeven ter ondersteuning van de acupunctuurbehandeling.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Tijdens de intake bespreekt de acupuncturist wanneer en hoe de klachten zich manifesteren,
                uw slaappatroon, voeding en algehele energieniveau. Op basis van de TCG-diagnose worden
                behandelpunten gekozen in de benen (met name langs de Lever-, Nier- en Maag-meridiaan),
                in de onderrug en op het hoofd.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De behandeling duurt circa vijfenveertig minuten. Na afloop voelen veel pati&euml;nten
                een diepe ontspanning in de benen. Avondbehandelingen kunnen extra gunstig zijn, omdat
                de effecten direct bijdragen aan een betere nachtrust.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Naast de acupunctuur ontvangt u leefstijl- en voedingsadviezen die de behandelresultaten
                ondersteunen en verlengen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Een standaard startreeks bestaat uit zes tot acht sessies, in de eerste weken twee keer per
                week. Na verbetering wordt de frequentie afgebouwd. Bij langdurige klachten is een langer
                traject nodig; onderhoudsbehandelingen eenmaal per maand helpen terugval te voorkomen.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Resultaten worden stap voor stap bereikt: de meeste pati&euml;nten merken eerst een verbeterde
                slaapkwaliteit, gevolgd door minder intensieve klachten en uiteindelijk minder frequente episoden.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met gediagnosticeerd RLS",
                  "Pati\u00ebnten met slaapverstoring door beenklachten",
                  "Personen met tintelingen of krampachtige benen",
                  "Mensen die medicatie willen verminderen of aanvullen",
                  "Pati\u00ebnten met een ijzertekort als bijdragende factor",
                  "Iedereen die een natuurlijke aanpak wil naast reguliere zorg",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-[#FAF8F3] rounded-lg p-4 border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:shield-check-linear" className="text-[#4A6559] shrink-0 mt-0.5 text-lg" />
                    <span className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-6">
                Restless legs gaat vaak samen met slaapproblemen, stress en vermoeidheid. Bekijk ook de verwante behandelingen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/behandelingen/acupunctuur-slaapproblemen", label: "Acupunctuur bij Slaapproblemen" },
                  { href: "/behandelingen/acupunctuur-stressklachten", label: "Acupunctuur bij Stressklachten" },
                  { href: "/behandelingen/acupunctuur-vermoeidheid", label: "Acupunctuur bij Vermoeidheid" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                    <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-sm font-medium text-[#1F3A36]">{link.label}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-[#FAF8F3] rounded-xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij restless legs in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Onze praktijk in Zaandam is centraal bereikbaar vanuit de gehele Zaanstreek: Zaandijk, Koog aan de Zaan,
                Wormerveer, Krommenie, Assendelft en omgeving. Ook vanuit Amsterdam-Noord en Purmerend komen pati&euml;nten
                voor behandeling. Flexibele avondafspraken zijn mogelijk voor mensen die overdag werken.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen
              </h2>
              <p className="text-base font-light text-[#1F3A36]/70">
                Antwoorden op de meest gestelde vragen over acupunctuur bij restless legs.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij restless legs?",
                  a: "Acupunctuur kan de frequentie en intensiteit van restless legs klachten aanzienlijk verminderen. Door de bloedcirculatie in de benen te verbeteren, het zenuwstelsel te kalmeren en eventuele Qi-tekorten aan te pakken, ervaren veel pati\u00ebnten minder onrust en een betere slaapkwaliteit.",
                },
                {
                  q: "Is acupunctuur veilig bij restless legs?",
                  a: "Ja, acupunctuur is een veilige en niet-medicamenteuze aanpak voor restless legs. De behandeling heeft geen bijwerkingen en kan naast bestaande medicatie worden ingezet. Overleg met uw arts is altijd aan te raden bij het aanpassen van medicatie.",
                },
                {
                  q: "Hoe snel merk je resultaat bij restless legs?",
                  a: "Veel pati\u00ebnten ervaren al na drie tot vijf sessies een verbetering in de nachtelijke klachten. Voor een blijvend resultaat is een reeks van zes tot tien behandelingen aanbevolen. Aanvullende leefstijladviezen ondersteunen het herstel.",
                },
                {
                  q: "Wordt acupunctuur voor restless legs vergoed?",
                  a: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
                },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium text-[#1F3A36] text-sm">
                    {faq.q}
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-[#4A6559] shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-sm font-light text-[#1F3A36]/80 leading-relaxed border-t border-[#1F3A36]/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-y bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
              Erkend door verenigingen en vergoed door verzekeraars
            </h2>
            <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp" alt="NVA Erkend Acupuncturist" className="md:h-12 w-auto h-10 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png" alt="VGZ Vergoeding Acupunctuur" className="md:h-10 w-auto h-8 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg" alt="TCMA Certificering" className="md:h-12 w-auto h-10 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png" alt="Zilveren Kruis Vergoeding" className="md:h-12 w-auto h-10 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png" alt="CZ Vergoeding Acupunctuur" className="md:h-10 w-auto h-8 object-contain" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" aria-labelledby="cta-restless-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="cta-restless-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Eindelijk rust in uw benen &mdash; en een goede nachtrust
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Maak een afspraak in Zaandam en ontdek hoe acupunctuur uw restless legs kan verlichten.
                  Geen wachtlijst, geen verwijzing nodig.
                </p>
                <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm px-8 py-3.5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  WhatsApp ons
                </a>
              </div>
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  id="D8uouGkFZH4Alr37y5z4_behandeling_restless_legs"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  loading="lazy"
                  title="Afspraak maken voor restless legs behandeling"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
