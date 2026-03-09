import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Stressklachten | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij stressklachten in Zaandam. Verminder spanning, herstel de balans en leer uw lichaam weer te ontspannen op een natuurlijke, erkende manier.",
  keywords: [
    "acupunctuur stressklachten",
    "stressklachten behandeling Zaandam",
    "acupunctuur stress verminderen",
    "chronische stress acupunctuur",
    "lichamelijke stressklachten acupunctuur",
    "acupunctuur stress mentaal Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-stressklachten",
      name: "Acupunctuur bij Stressklachten | Acupunctuur Zaandam",
      description:
        "Behandeling van stressklachten met acupunctuur in Zaandam. Herstel balans en verlichting van spanning via traditionele Chinese geneeskunde.",
      about: [
        { "@type": "MedicalCondition", name: "Stressklachten" },
        { "@type": "MedicalCondition", name: "Chronische stress" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Stressklachten",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij stressklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is een bewezen effectieve methode om stressklachten te verminderen. De behandeling activeert het parasympathische zenuwstelsel, verlaagt het cortisolniveau en bevordert de aanmaak van ontspannende neurotransmitters. Pati\u00ebnten rapporteren na enkele sessies al een rustiger hoofd, minder lichamelijke spanning en betere slaap.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij stressklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is volkomen veilig bij stressklachten. Het is een milde, niet-invasieve behandeling zonder bijwerkingen, geschikt voor alle leeftijden. De behandeling kan zelfstandig worden ingezet of als aanvulling op psychologische begeleiding.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij stressklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De meeste pati\u00ebnten ervaren al na de eerste sessie een diepgaande ontspanning. Voor een structurele verbetering bij chronische stress wordt een reeks van zes tot acht sessies aanbevolen. Veel pati\u00ebnten rapporteren na drie sessies al een merkbare daling van hun stressniveau.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor stressklachten vergoed?",
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
          name: "Acupunctuur bij Stressklachten",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-stressklachten",
        },
      ],
    },
  ],
};

export default function StressklachtenPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Stressklachten</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Stress, Energie &amp; Mentaal
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Stressklachten in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Stress is een normale reactie op uitdagingen, maar wanneer het chronisch wordt, tast het uw gezondheid
              aan: van slaapproblemen en hoofdpijn tot darmproblemen, hoge bloeddruk en emotionele uitputting.
              Acupunctuur helpt uw lichaam en geest terug te keren naar een staat van balans en rust.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
              <Link href="/klachten/stressklachten" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">
                Meer over stressklachten
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn stressklachten?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Stress is de fysiologische en psychologische respons van het lichaam op druk en uitdagingen. In
                acute situaties is stress functioneel: het mobiliseert energie om te presteren of gevaar te
                ontwijken. Maar wanneer de stressrespons chronisch actief blijft &mdash; door werkdruk, relatieproblemen,
                financiële zorgen of gezondheidsproblemen &mdash; ontstaan stressklachten.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Lichamelijke stressklachten zijn onder meer: gespannen schouders en nek, hoofdpijn, slaapverstoring,
                maag- en darmklachten, vermoeidheid, hartkloppingen en een verhoogde bloeddruk. Mentale klachten
                omvatten piekergedachten, prikkelbaarheid, angst, moeite met concentreren en het gevoel de controle
                te verliezen.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Onbehandeld vormt chronische stress de voedingsbodem voor ernstigere aandoeningen zoals burn-out,
                angststoornissen, hart- en vaatziekten en immuunstoornissen. Vroegtijdig ingrijpen met acupunctuur
                kan escalatie voorkomen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe helpt acupunctuur bij stressklachten?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de Traditionele Chinese Geneeskunde veroorzaakt stress vooral Lever-Qi-stagnatie: de vrije
                doorstroming van energie wordt geblokkeerd, wat leidt tot spanning, prikkelbaarheid, verzuring
                en slaapproblemen. Wanneer dit langdurig aanhoudt, kan de Nier (de energiereserves) uitgeput raken.
                Acupunctuur beweegt de Qi, kalmeert de Lever en versterkt de Nier.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit westerse geneeskunde is het mechanisme goed onderzocht: acupunctuur verlaagt het
                cortisolniveau, activeert de parasympathische tak van het zenuwstelsel en bevordert de aanmaak
                van serotonine en endorfines &mdash; de lichaamseigen kalmerende stoffen. De hartratevariabiliteit
                verbetert, wat een maat is voor de veerkracht van het zenuwstelsel.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Omdat stress altijd meerdere lichamelijke systemen tegelijkertijd beïnvloedt, wordt de behandeling
                individueel afgestemd: spijsverteringsklachten, spierspanning, slaapproblemen en emotionele
                ontregeling worden integraal meebehandeld.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De eerste sessie begint met een uitgebreide intake: wat zijn uw stressbronnen, hoe reageert uw
                lichaam op stress, hoe slaapt u, hoe is uw energieniveau en hoe ervaart u emoties. Op basis van
                de TCG-diagnose worden de behandelpunten gekozen.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Typische punten voor stressklachten zijn: Yin Tang (punt tussen de wenkbrauwen, voor kalmering),
                Hart 7 (Shenmen, voor geestrust), Pericardium 6 (voor angst en hartkloppingen), Lever 3 (voor
                Qi-stagnatie) en Nier 1 (voor verankering en rust). De combinatie wordt afgestemd op uw persoonlijk
                patroon.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Na de behandeling ontvangt u praktische adviezen over stressmanagement, ademhalingstechnieken,
                voeding en slaaphygi&euml;ne die u direct kunt toepassen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Voor acute stressklachten volstaat doorgaans een reeks van vier tot zes sessies. Bij chronische
                stress of bij stressklachten die al lang aanwezig zijn, worden zes tot tien sessies aanbevolen.
                Onderhoudsbehandelingen eens per vier tot zes weken helpen de balans te bewaren.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Veel pati&euml;nten rapporteren na de eerste sessie al een gevoel van diepe ontspanning dat
                aanhoudt tot de volgende behandeling. De opgebouwde spanning in het lichaam wordt stap voor
                stap losgelaten.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met chronische werkgerelateerde stress",
                  "Pati\u00ebnten met lichamelijke stressklachten",
                  "Personen die piekeren en moeilijk kunnen ontspannen",
                  "Iedereen die burn-out wil voorkomen",
                  "Mensen met slaapproblemen door stress",
                  "Pati\u00ebnten met hartkloppingen of hoge bloeddruk door stress",
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
                Stressklachten hangen nauw samen met burn-out, slaaptekort en angstklachten. Bekijk ook de verwante behandelingen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/behandelingen/acupunctuur-burn-out", label: "Acupunctuur bij Burn-out" },
                  { href: "/behandelingen/acupunctuur-slaapproblemen", label: "Acupunctuur bij Slaapproblemen" },
                  { href: "/behandelingen/acupunctuur-angstklachten", label: "Acupunctuur bij Angstklachten" },
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
                Acupunctuur bij stressklachten in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Acupunctuur Zaandam biedt een rustige haven voor mensen die dagelijks te maken hebben met hoge druk.
                Bereikbaar vanuit Zaandijk, Koog aan de Zaan, Wormerveer, Krommenie, Assendelft, Amsterdam-Noord
                en Purmerend. Afspraken zijn ook mogelijk in de vroege ochtend of &rsquo;s avonds voor mensen met
                een druk werkrooster.
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
                Antwoorden op de meest gestelde vragen over acupunctuur bij stressklachten.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij stressklachten?",
                  a: "Ja, acupunctuur is een bewezen effectieve methode om stressklachten te verminderen. De behandeling activeert het parasympathische zenuwstelsel, verlaagt het cortisolniveau en bevordert de aanmaak van ontspannende neurotransmitters. Pati\u00ebnten rapporteren na enkele sessies al een rustiger hoofd, minder lichamelijke spanning en betere slaap.",
                },
                {
                  q: "Is acupunctuur veilig bij stressklachten?",
                  a: "Ja, acupunctuur is volkomen veilig bij stressklachten. Het is een milde, niet-invasieve behandeling zonder bijwerkingen, geschikt voor alle leeftijden. De behandeling kan zelfstandig worden ingezet of als aanvulling op psychologische begeleiding.",
                },
                {
                  q: "Hoe snel merk je resultaat bij stressklachten?",
                  a: "De meeste pati\u00ebnten ervaren al na de eerste sessie een diepgaande ontspanning. Voor een structurele verbetering bij chronische stress wordt een reeks van zes tot acht sessies aanbevolen. Veel pati\u00ebnten rapporteren na drie sessies al een merkbare daling van hun stressniveau.",
                },
                {
                  q: "Wordt acupunctuur voor stressklachten vergoed?",
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
        <section id="contact" aria-labelledby="cta-stress-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="cta-stress-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Minder stress, meer balans &mdash; begin vandaag
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Maak een afspraak in Zaandam en ervaar hoe acupunctuur uw stressniveau verlaagt en uw veerkracht herstelt.
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
                  id="D8uouGkFZH4Alr37y5z4_behandeling_stressklachten"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  loading="lazy"
                  title="Afspraak maken voor stressklachten behandeling"
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
