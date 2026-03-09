import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Concentratieproblemen | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij concentratieproblemen in Zaandam. Verbeter uw focus, helderheid en mentale uithouding op een natuurlijke en erkende manier.",
  keywords: [
    "acupunctuur concentratieproblemen",
    "concentratieproblemen behandeling Zaandam",
    "acupunctuur focus verbeteren",
    "mentale helderheid acupunctuur",
    "brain fog acupunctuur",
    "acupunctuur hoofd zenuwstelsel Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-concentratieproblemen",
      name: "Acupunctuur bij Concentratieproblemen | Acupunctuur Zaandam",
      description:
        "Behandeling van concentratieproblemen met acupunctuur in Zaandam. Herstel mentale helderheid en focus via traditionele Chinese geneeskunde.",
      about: [
        { "@type": "MedicalCondition", name: "Concentratieproblemen" },
        { "@type": "MedicalCondition", name: "Brain Fog" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Concentratieproblemen",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij concentratieproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan concentratieproblemen verbeteren door het zenuwstelsel te kalmeren, de hersendoorbloeding te stimuleren en energiepatronen te herstellen. Pati\u00ebnten rapporteren na een behandelreeks een verbeterde focus, mentale helderheid en minder last van mentale mist.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij concentratieproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is volkomen veilig bij concentratieproblemen. Het is een niet-invasieve behandeling zonder bijwerkingen die geschikt is voor mensen van alle leeftijden, inclusief studenten en werkende volwassenen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij concentratieproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel pati\u00ebnten merken al na twee tot vier sessies een verbeterd concentratievermogen en meer mentale energie. Voor een duurzaam effect wordt een reeks van zes tot acht behandelingen aanbevolen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor concentratieproblemen vergoed?",
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
          name: "Acupunctuur bij Concentratieproblemen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-concentratieproblemen",
        },
      ],
    },
  ],
};

export default function ConcentratieproblemenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Acupunctuur bij Concentratieproblemen</span>
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
              Acupunctuur bij Concentratieproblemen in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Moeite om taken af te ronden, gedachten die alle kanten opschieten, een gevoel van mentale mist &mdash;
              concentratieproblemen kunnen uw werk, studie en dagelijks leven ernstig beïnvloeden. Acupunctuur
              herstelt de balans in lichaam en geest en geeft uw mentale scherpte terug.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
              <Link href="/klachten/concentratieproblemen" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">
                Meer over concentratieproblemen
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn concentratieproblemen?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Concentratieproblemen uiten zich als moeite om de aandacht bij een taak te houden, snel afleidbaar
                zijn, vergeetachtigheid, traag denken of het gevoel hebben in een waas te leven &mdash; ook wel
                &ldquo;brain fog&rdquo; genoemd. Deze klachten kunnen acuut optreden maar worden ook chronisch,
                waarbij ze maandenlang of langer aanhouden.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Oorzaken zijn divers: slaaptekort, langdurige stress, burn-out, hormonale schommelingen, voedingstekorten,
                schildklierproblemen of de naweeën van een infectie zoals COVID-19. Soms is er geen duidelijke
                medische oorzaak en spreken artsen van functionele klachten.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Onbehandeld leiden concentratieproblemen tot verminderde productiviteit, frustratie, vermijdingsgedrag
                en verdere energiedaling. Een holistische aanpak via acupunctuur pakt zowel de symptomen als de
                onderliggende disbalans aan.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe helpt acupunctuur bij concentratieproblemen?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de Traditionele Chinese Geneeskunde worden concentratieproblemen veelal gezien als een tekort van
                het Hart-Shen (de geestesactiviteit) of een Milt-Qi-tekort, waardoor het denken &ldquo;troebel&rdquo;
                wordt. Het Hart beheert het bewustzijn en de helderheid van gedachten; de Milt is verantwoordelijk
                voor transformatie en transport van voedingsstoffen naar het brein. Acupunctuur versterkt deze
                orgaansystemen en herstelt de mentale helderheid.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit westerse neurowetenschappen verbetert acupunctuur de cerebrale doorbloeding, moduleert
                de HPA-as (de stressrespons) en bevordert de afgifte van neurotransmitters als serotonine en
                dopamine, die essentieel zijn voor focus en motivatie. Tegelijkertijd vermindert acupunctuur
                het cortisolniveau, waardoor de geest ontspant en helderder wordt.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Bij brain fog na ziekte (zoals Long COVID) richt de behandeling zich mede op het herstel van
                Qi en het versterken van het immuunsysteem, wat de energiebalans en mentale functies positief
                beïnvloedt.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De intake omvat vragen over uw slaapkwaliteit, energieniveau door de dag, voeding, stress en
                emotionele toestand. De TCG-diagnose bepaalt welke orgaanpatronen betrokken zijn. Behandelpunten
                worden gekozen op het hoofd (schedelnaalden), in de nek, op de handen en voeten en langs de
                buikmeridianen.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Schedelnaalden &mdash; een techniek waarbij naalden worden geplaatst in specifieke zones van de
                schedel &mdash; zijn bijzonder effectief voor cognitieve klachten. Samen met lichaamsacupunctuur
                ontstaat een krachtige behandeling die zowel het centrale zenuwstelsel als de vitaliteit van
                de organen aanspreekt.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Na afloop ontvangt u adviezen over slaaphygi&euml;ne, voeding (met name voor breinvoeding) en
                eenvoudige ademhalingsoefeningen die uw concentratie dagelijks ondersteunen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Een startreeks van zes tot acht sessies &mdash; wekelijks &mdash; is doorgaans voldoende voor
                meetbare verbetering. Bij langdurige klachten of een onderliggende aandoening als burn-out
                kan een langere behandelperiode nodig zijn.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Pati&euml;nten merken vaak na de derde of vierde sessie al dat hun hoofd &ldquo;lichter&rdquo;
                aanvoelt en dat taken makkelijker volgehouden kunnen worden. Onderhoudsbehandelingen eens per
                vier weken helpen de voortgang te bestendigen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met aanhoudende mentale mist of brain fog",
                  "Studenten en professionals met concentratieklachten",
                  "Pati\u00ebnten herstellende van burn-out of langdurige stress",
                  "Mensen met concentratieproblemen door slaaptekort",
                  "Personen met Long COVID-gerelateerde cognitieve klachten",
                  "Iedereen die mentale scherpte en focus wil herstellen",
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
                Concentratieproblemen hangen vaak samen met burn-out, stress of slaaptekort. Bekijk ook de verwante behandelingen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/behandelingen/acupunctuur-burn-out", label: "Acupunctuur bij Burn-out" },
                  { href: "/behandelingen/acupunctuur-stressklachten", label: "Acupunctuur bij Stressklachten" },
                  { href: "/behandelingen/acupunctuur-slaapproblemen", label: "Acupunctuur bij Slaapproblemen" },
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
                Acupunctuur bij concentratieproblemen in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Acupunctuur Zaandam bedient pati&euml;nten uit de gehele Zaanstreek en omliggende gemeenten: Zaandijk,
                Koog aan de Zaan, Wormerveer, Krommenie, Assendelft, Amsterdam-Noord en Purmerend. Onze praktijk
                biedt persoonlijke aandacht en een rustige omgeving, ideaal voor mensen die herstel en focus zoeken.
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
                Antwoorden op de meest gestelde vragen over acupunctuur bij concentratieproblemen.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij concentratieproblemen?",
                  a: "Acupunctuur kan concentratieproblemen verbeteren door het zenuwstelsel te kalmeren, de hersendoorbloeding te stimuleren en energiepatronen te herstellen. Pati\u00ebnten rapporteren na een behandelreeks een verbeterde focus, mentale helderheid en minder last van mentale mist.",
                },
                {
                  q: "Is acupunctuur veilig bij concentratieproblemen?",
                  a: "Ja, acupunctuur is volkomen veilig bij concentratieproblemen. Het is een niet-invasieve behandeling zonder bijwerkingen die geschikt is voor mensen van alle leeftijden, inclusief studenten en werkende volwassenen.",
                },
                {
                  q: "Hoe snel merk je resultaat bij concentratieproblemen?",
                  a: "Veel pati\u00ebnten merken al na twee tot vier sessies een verbeterd concentratievermogen en meer mentale energie. Voor een duurzaam effect wordt een reeks van zes tot acht behandelingen aanbevolen.",
                },
                {
                  q: "Wordt acupunctuur voor concentratieproblemen vergoed?",
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
        <section id="contact" aria-labelledby="cta-concentratie-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="cta-concentratie-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Herstel uw mentale scherpte en focus
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Maak een afspraak in Zaandam en ontdek hoe acupunctuur uw concentratieproblemen aanpakt.
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
                  id="D8uouGkFZH4Alr37y5z4_behandeling_concentratieproblemen"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  title="Afspraak maken voor concentratieproblemen behandeling"
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
