import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Concentratieproblemen Zaandam | Brain Fog",
  description:
    "Last van concentratieproblemen, brain fog of geheugenproblemen? Acupunctuur in Zaandam ondersteunt de cognitieve helderheid door het zenuwstelsel, de slaap en de stressreactie te reguleren.",
  keywords: [
    "acupunctuur concentratieproblemen",
    "brain fog behandeling zaandam",
    "concentratieproblemen acupunctuur",
    "geheugenklachten acupunctuur zaandam",
    "burn-out concentratie acupunctuur",
    "mentale vermoeidheid acupunctuur",
    "cognitieve klachten acupunctuur zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/concentratieproblemen",
      name: "Acupunctuur bij Concentratieproblemen en Brain Fog in Zaandam",
      description:
        "Informatie over de behandeling van concentratieproblemen, brain fog en geheugenklachten via acupunctuur en Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Concentratieproblemen" },
        { "@type": "MedicalCondition", name: "Brain fog" },
        { "@type": "MedicalCondition", name: "Mentale vermoeidheid" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Concentratieproblemen" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij concentratieproblemen en brain fog?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan effectief zijn bij concentratieproblemen die voortkomen uit stress, slaaptekort, overbelasting of een burn-out. De behandeling kalmeert het overprikkelde zenuwstelsel, verbetert de slaapkwaliteit en reguleert de HPA-as (stress-as), waardoor de cognitieve functies geleidelijk herstellen. In de TCG richten we ons op het voeden van Hart-Shen en het versterken van Milt-Qi — beide essentieel voor concentratie en helder denken.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het verschil tussen concentratieproblemen en ADHD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADHD is een neurobiologische aandoening die van jongs af aan aanwezig is. Concentratieproblemen door stress, burn-out of slaaptekort zijn verworven klachten die direct samenhangen met de belasting van het zenuwstelsel. Acupunctuur is bijzonder geschikt voor de tweede categorie. Bij gediagnosticeerde ADHD kan acupunctuur een aanvullende ondersteuning zijn, maar vervangt het geen gedragstherapeutische of medicamenteuze behandeling.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij concentratieproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dit hangt sterk af van de onderliggende oorzaak. Bij concentratieproblemen door acute stress of slaaptekort zijn 4 tot 6 behandelingen vaak voldoende. Bij langdurige overbelasting of een burn-out adviseren we een traject van 10 tot 15 sessies als onderdeel van een breder herstelplan.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur worden gecombineerd met psychologische begeleiding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absoluut — en dat wordt ook aanbevolen. Acupunctuur ondersteunt het lichaam en reguleert de fysiologische stressreactie, terwijl psychologische begeleiding ingaat op de cognitieve en gedragsmatige aspecten. De combinatie versterkt het herstel op beide niveaus.",
          },
        },
      ],
    },
  ],
};

export default function ConcentratieprobemenPage() {
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
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Welke klachten</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/klachten/hoofd-zenuwstelsel" className="hover:text-[#1F3A36] transition-colors">Hoofd &amp; zenuwstelsel</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Concentratieproblemen</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
          />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span
                className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Hoofd &amp; Zenuwstelsel
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur bij Concentratieproblemen in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Moeite met focussen, gedachten die afdwalen, een hoofd dat aanvoelt als watten — concentratieproblemen en brain fog kunnen uw werk en dagelijks leven ernstig beïnvloeden. Acupunctuur ondersteunt het cognitieve herstel door het zenuwstelsel te kalmeren, de slaapkwaliteit te verbeteren en de onderliggende disbalansen aan te pakken.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300"
              >
                Maak een afspraak
              </a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat zijn concentratieproblemen */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat zijn concentratieproblemen?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Concentratieproblemen is de moeite om de aandacht te richten en vast te houden. Het gaat verder dan incidentele afleiding; mensen met concentratieproblemen ervaren structurele moeilijkheden bij het lezen, schrijven, plannen of voeren van gesprekken. Brain fog — een veelgehoorde term — beschrijft het gevoel van mentale traagheid, wazig denken en verminderd geheugen dat bij uitstek gepaard gaat met vermoeidheid, stress of overbelasting.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Concentratieproblemen kunnen een symptoom zijn van verschillende onderliggende oorzaken: chronische stress, een burn-out, slaaptekort, hormonale disbalansen, voedingstekorten of een overprikkeld zenuwstelsel. De behandeling is het meest effectief wanneer de oorzaak helder is — daarom begint elke behandeling bij ons met een uitgebreide intake.
              </p>
            </section>

            {/* Symptomen & oorzaken */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Veelvoorkomende symptomen
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Moeite met focussen op taken of gesprekken",
                      "Gedachten die snel afdwalen of springen",
                      "Vergeetachtigheid of moeite met onthouden",
                      "Mentale traagheid of wazig gevoel in het hoofd",
                      "Moeite met beslissingen nemen",
                      "Vermoeidheid na geestelijke inspanning",
                      "Prikkelbaarheid bij ongewenste afleiding",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Mogelijke oorzaken
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Chronische stress en overbelasting",
                      "Burn-out of dreigend burn-out",
                      "Slaaptekort of niet-herstellende slaap",
                      "Hormonale disbalansen (schildklier, overgang)",
                      "IJzer- of vitamine B12-tekort",
                      "Overprikkeling door digitale omgeving",
                      "Post-COVID cognitieve klachten (long-COVID)",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Vormen */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Contexten van concentratieproblemen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "Werkgerelateerde overbelasting",
                    desc: "Langdurige hoge werkdruk leidt tot cognitieve uitputting. Het brein kan niet langer adequaat filteren en prioriteren, wat resulteert in productiviteitsverlies en mentale vermoeidheid.",
                  },
                  {
                    title: "Brain fog bij burn-out",
                    desc: "Bij een burn-out raken de cognitieve functies aangetast door chronisch verhoogde cortisolniveaus. Geheugen, verwerking en planningsvermogen zijn aangedaan. Acupunctuur ondersteunt het herstelproces van het zenuwstelsel.",
                  },
                  {
                    title: "Slaapgerelateerde concentratieproblemen",
                    desc: "Chronisch slaaptekort schaadt de prefrontale cortex, verantwoordelijk voor planning, aandacht en werkgeheugen. Verbetering van de slaap is een van de meest directe wegen naar beter concentratievermogen.",
                  },
                  {
                    title: "Post-COVID cognitieve klachten",
                    desc: "Veel mensen ervaren na COVID-19 aanhoudende brain fog, concentratieproblemen en geheugenklachten. Acupunctuur kan het autonome zenuwstelsel ondersteunen en de energetische basis herstellen.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe acupunctuur kan helpen
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG huisvest het <em>Hart</em> de Shen — de geest, het bewustzijn en het denken. Een onrustige of onvoldoende gevoede Hart-Shen leidt tot concentratieproblemen, vergeetachtigheid en slaapproblematiek. De <em>Milt</em> is in de TCG verantwoordelijk voor het transformeren van voedsel in Qi en Bloed dat de hersenen voedt; een zwakke Milt-Qi resulteert in mentale traagheid en een zwaar, wazig gevoel in het hoofd. Bij burn-out en langdurige overbelasting zien we ook een <em>Nier-Jing-leegte</em> — een uitputting van de diepste energetische reserves die als basis dienen voor de hersenfuncties. De behandeling voedt en kalmeert de Hart-Shen, versterkt de Milt-Qi en — indien aanwezig — vult het Nier-Jing aan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">HPA-as regulatie:</strong> Acupunctuur moduleert de hypothalamus-hypofyse-bijnieras (HPA-as) die centraal staat in de stressreactie. Chronisch verhoogd cortisol schaadt de hippocampus (geheugen en leren); acupunctuur helpt cortisolniveaus te normaliseren.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Slaapkwaliteit:</strong> Door de melatonineproductie te ondersteunen en het autonome zenuwstelsel te reguleren, verbetert acupunctuur de slaapdiepte en -duur, wat direct bijdraagt aan cognitief herstel.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Acupunctuur verbetert de cerebrovasculaire doorbloeding, wat zorgt voor betere zuurstof- en glucosetoevoer naar de hersenen — essentieel voor concentratie en verwerkingssnelheid.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Wat te verwachten */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat kunt u verwachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                In de intake bespreken we de geschiedenis van uw klachten, de context (werk, privé, leefstijl), uw slaappatroon en andere begeleidende symptomen. We beoordelen het TCG-patroon en stemmen de behandeling hierop af.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De naaldzetting bij concentratieproblemen omvat doorgaans punten op het hoofd en de schedelbasis (zoals GV 20, GV 24, BL 10), punten die de Milt versterken en punten die het Hart kalmeren. De behandelingen zijn diep ontspannend van aard en veel cliënten vallen in slaap op de behandeltafel.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                We adviseren ook aandacht voor slaaphygiëne, schermtijdreductie en voedingsgewoonten als onderdeel van het herstelplan.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Voor wie is dit geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met brain fog door stress of overbelasting",
                  "Mensen in of na een burn-out",
                  "Mensen met concentratieproblemen door slaaptekort",
                  "Mensen met post-COVID cognitieve klachten",
                  "Mensen met geheugenklachten door hormonale veranderingen",
                  "Mensen die cognitieve prestaties willen verbeteren",
                  "Mensen die reguliere begeleiding willen aanvullen",
                  "Mensen met vermoeidheid in combinatie met brain fog",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span className="text-sm font-medium text-[#1F3A36]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Behandeling in Zaandam */}
            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Behandeling in Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Concentratieproblemen gaan vaak samen met stressklachten en slaapproblemen — we behandelen de volledige samenhang.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/hoofd-zenuwstelsel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofd &amp; zenuwstelsel overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/stressklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Stressklachten
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/slaapproblemen" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Slaapproblemen
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/burn-out" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Burn-out
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Kan acupunctuur helpen bij concentratieproblemen en brain fog?",
                  a: "Acupunctuur kan effectief zijn bij concentratieproblemen die voortkomen uit stress, slaaptekort, overbelasting of een burn-out. De behandeling kalmeert het overprikkelde zenuwstelsel, verbetert de slaapkwaliteit en reguleert de HPA-as (stress-as), waardoor de cognitieve functies geleidelijk herstellen. In de TCG richten we ons op het voeden van Hart-Shen en het versterken van Milt-Qi — beide essentieel voor concentratie en helder denken.",
                },
                {
                  q: "Wat is het verschil tussen concentratieproblemen en ADHD?",
                  a: "ADHD is een neurobiologische aandoening die van jongs af aan aanwezig is. Concentratieproblemen door stress, burn-out of slaaptekort zijn verworven klachten die direct samenhangen met de belasting van het zenuwstelsel. Acupunctuur is bijzonder geschikt voor de tweede categorie. Bij gediagnosticeerde ADHD kan acupunctuur een aanvullende ondersteuning zijn, maar vervangt het geen gedragstherapeutische of medicamenteuze behandeling.",
                },
                {
                  q: "Hoeveel behandelingen zijn nodig bij concentratieproblemen?",
                  a: "Dit hangt sterk af van de onderliggende oorzaak. Bij concentratieproblemen door acute stress of slaaptekort zijn 4 tot 6 behandelingen vaak voldoende. Bij langdurige overbelasting of een burn-out adviseren we een traject van 10 tot 15 sessies als onderdeel van een breder herstelplan.",
                },
                {
                  q: "Kan acupunctuur worden gecombineerd met psychologische begeleiding?",
                  a: "Absoluut — en dat wordt ook aanbevolen. Acupunctuur ondersteunt het lichaam en reguleert de fysiologische stressreactie, terwijl psychologische begeleiding ingaat op de cognitieve en gedragsmatige aspecten. De combinatie versterkt het herstel op beide niveaus.",
                },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                    {item.q}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2
              className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Erkend door verenigingen en vergoed door verzekeraars
            </h2>
            <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full justify-center items-center">
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
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" />
                </svg>
                <h2
                  id="cta-titel"
                  className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Klaar om verlichting te vinden?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan een intake en laat ons uw situatie goed begrijpen. We nemen de tijd voor een uitgebreid gesprek over uw klachten, context en doelen — en stellen een behandelplan op dat past bij uw leven.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/30 to-[#4A6559]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300" />
                <div className="relative w-full bg-[#FAF8F3] rounded-xl shadow-2xl border border-[#1F3A36]/10 overflow-hidden flex flex-col">
                  <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b pr-4 pl-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">Online Planner</span>
                    <div className="w-10" />
                  </div>
                  <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="animate-spin h-8 w-8 text-[#4A6559]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    </div>
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                      style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }}
                      scrolling="yes"
                      id="D8uouGkFZH4Alr37y5z4_concentratieproblemen"
                      title="Maak een afspraak"
                    />
                    <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
