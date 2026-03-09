import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Overprikkeling Zaandam | Sensory Overload",
  description:
    "Last van overprikkeling, sensory overload of een overgevoelig zenuwstelsel? Acupunctuur in Zaandam kalmeert het zenuwstelsel en helpt u herstellen van overstimulatie.",
  keywords: [
    "acupunctuur overprikkeling",
    "overprikkeling behandeling zaandam",
    "sensory overload acupunctuur",
    "HSP acupunctuur zaandam",
    "overgevoelig zenuwstelsel behandeling",
    "overprikkeling autisme acupunctuur",
    "zenuwstelsel kalmeren acupunctuur zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/overprikkeling",
      name: "Acupunctuur bij Overprikkeling en Sensory Overload in Zaandam",
      description:
        "Informatie over de behandeling van overprikkeling, sensory overload en een overgevoelig zenuwstelsel via acupunctuur en Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Overprikkeling" },
        { "@type": "MedicalCondition", name: "Sensory overload" },
        { "@type": "MedicalCondition", name: "Hoog sensitiviteit" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Overprikkeling" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij overprikkeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur is bijzonder geschikt voor mensen met een overgevoelig zenuwstelsel. De behandeling activeert het parasympathische zenuwstelsel, verlaagt de cortisolniveaus en vermindert de algehele activatiedrempel. Mensen met overprikkeling ervaren de behandeling zelf vaak als diep kalmerend. We werken met zachte stimulatie en passen de aanpak aan op de sensitiviteit van de cliënt.",
          },
        },
        {
          "@type": "Question",
          name: "Is overprikkeling hetzelfde als een hoge sensitiviteit (HSP)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Niet helemaal. Hoge sensitiviteit (HSP) is een aangeboren eigenschap waarbij prikkels dieper worden verwerkt. Overprikkeling is de toestand die ontstaat wanneer de verwerkingscapaciteit van het zenuwstelsel wordt overschreden. HSP-ers zijn vaker vatbaar voor overprikkeling, maar overprikkeling kan ook optreden bij mensen zonder uitgesproken hoge sensitiviteit, zoals bij burn-out, autisme of na langdurige stress.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe verloopt een acupunctuurbehandeling bij overprikkeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We werken bij overprikkeling met een kalme behandelomgeving: gedimde verlichting, stille ruimte en zachte, minimale naaldzetting. De behandeling begint met een uitgebreide intake om uw specifieke triggers en patronen te begrijpen. We gebruiken punten die het zenuwstelsel kalmeren en het Lever-Qi vrij maken, en bouwen de intensiteit geleidelijk op.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij overprikkeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute overprikkeling door tijdelijke overbelasting zijn 4 tot 8 behandelingen vaak voldoende. Bij structurele overgevoeligheid — zoals bij HSP of autisme-gerelateerde overprikkeling — is een langer traject gewenst, waarbij de behandeling ook de verwerkingsdrempel langzaam vergroot en de veerkracht versterkt.",
          },
        },
      ],
    },
  ],
};

export default function OverprikkelingPage() {
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
            <span className="text-[#1F3A36]">Overprikkeling</span>
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
              Acupunctuur bij Overprikkeling in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Geluid, licht, drukte, schermen, verwachtingen — voor een overprikkeld zenuwstelsel is de wereld te luid, te snel en te vol. Acupunctuur biedt een diepe, fysiologische rust en helpt het zenuwstelsel om prikkels weer te verwerken zonder overbelast te raken.
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

            {/* Featured Snippet — targets "Helpt acupunctuur bij overprikkeling?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur kalmeert het overprikkelde zenuwstelsel door het parasympathisch systeem te activeren, cortisolniveaus te verlagen en de hersenactiviteit te normaliseren. Effectief bij sensorische overprikkeling, HSP, ADHD-gerelateerde overprikkeling en burn-outklachten — met direct merkbare ontspanning al tijdens de eerste behandeling.
              </p>
            </div>

            {/* Wat is overprikkeling */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is overprikkeling?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Overprikkeling ontstaat wanneer het zenuwstelsel meer informatie en prikkels ontvangt dan het effectief kan verwerken. Het brein raakt als het ware vol: de filterwerking — normaal gesproken verzorgd door de thalamus en de prefrontale cortex — schiet tekort en alle binnenkomende prikkels worden even sterk ervaren. Het gevolg is een toestand van overwhelm, prikkelbaarheid, terugtrekking of emotionele ontlading.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Overprikkeling is geen zwakheid maar een serieuze toestand van het zenuwstelsel. Ze treft mensen met een hoge sensitiviteit (HSP), mensen in het autismespectrum, mensen na een burn-out of trauma, en mensen die langdurig blootstaan aan een hoge informatiedichtheid zoals in de hedendaagse digitale wereld. De klachten kunnen variëren van mild en situatiegebonden tot chronisch en invaliderend.
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
                      "Overgevoeligheid voor geluid, licht of geuren",
                      "Snel geïrriteerd of emotioneel bij drukte",
                      "Behoefte aan terugtrektijd na sociale interacties",
                      "Moeilijk tot rust komen na een drukke dag",
                      "Vermoeidheid die niet herstelt met slaap",
                      "Concentratieproblemen en mentale waas",
                      "Hoofdpijn of gespannen spieren na overprikkeling",
                      "Slaapproblemen door een overactief brein",
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
                      "Hoge sensitiviteit (HSP — highly sensitive person)",
                      "Autismespectrumstoornis (ASS)",
                      "ADHD en prikkelverwerkingsproblemen",
                      "Burn-out of chronische stress",
                      "Trauma of PTSS",
                      "Leven in een prikkelrijke digitale omgeving",
                      "Herstelperiode na ziekte of operatie",
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

            {/* Contexten */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Overprikkeling in verschillende contexten
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "HSP — Hoog sensitiviteit",
                    desc: "Mensen met hoge sensitiviteit verwerken prikkels dieper en uitgebreider. Ze zijn niet ziek, maar hun zenuwstelsel heeft meer hersteltijd nodig. Acupunctuur verlaagt de algehele activatiegraad en vergroot de veerkracht.",
                  },
                  {
                    title: "Autismespectrum en overprikkeling",
                    desc: "Bij autisme is de sensorische filtering anders georganiseerd. Overprikkeling leidt tot meltdowns of shutdowns. Acupunctuur biedt een rustpunt voor het zenuwstelsel en kan helpen de basisspanning te verlagen.",
                  },
                  {
                    title: "Burn-out en overprikkeling",
                    desc: "Na een burn-out is het zenuwstelsel uitgeput en verliest het de capaciteit om prikkels te dempen. Elke prikkel voelt intenser. Acupunctuur ondersteunt het herstel van de regulatiefunctie van het autonome zenuwstelsel.",
                  },
                  {
                    title: "Digitale overprikkeling",
                    desc: "Constante blootstelling aan schermen, meldingen en sociale media overbelast het dopaminesysteem en de aandachtsregulatie. Acupunctuur helpt het systeem te resetten en vergroot de tolerantie voor vertraging en stilte.",
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
                    In de TCG wordt overprikkeling vaak geduid als <em>Lever-Qi-stagnatie</em> in combinatie met <em>Hart-Vuur</em>. De Lever is verantwoordelijk voor de vrije doorstroming van Qi en emoties; bij chronische stress en overbelasting stagneert de Lever-Qi en transformeert dit in Vuur dat opstijgt naar het Hart en het hoofd. Het Hart huisvest de Shen — wanneer Hart-Vuur de Shen verstoort, ontstaan prikkelbaarheid, rusteloosheid, slaapproblemen en een gevoel van overwhelm. Aanvullend zien we bij veel HSP-ers en mensen met autisme een constitutioneel zwakke <em>Nier-Jing</em>, waardoor de basis voor rust en kalmte ontbreekt. De behandeling richt zich op het vrij maken van Lever-Qi, het dalen van Hart-Vuur en het voeden van de diepere reserves.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Zenuwstelsel:</strong> Acupunctuur activeert het parasympathische zenuwstelsel (rust-en-herstel) en remt de sympathische overactiviteit (vecht-vlucht). Dit verlaagt de fysiologische activatiegraad en vergroot de tolerantiedrempel voor prikkels.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Cortisol en stressregulatie:</strong> Via de HPA-as moduleert acupunctuur de cortisolproductie. Chronisch verhoogd cortisol verlaagt de prikkeldrempel; normalisering van cortisolwaarden biedt direct herstel van de sensorische filterwerking.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Verbeterde cerebrovasculaire doorbloeding ondersteunt de prefrontale cortex — het hersengebied dat verantwoordelijk is voor inhibitie, planning en het filteren van prikkels.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Neurotransmitters:</strong> Acupunctuur beïnvloedt GABA (remmende neurotransmitter) en serotoninelevels, wat bijdraagt aan een kalmer, minder reactief zenuwstelsel.
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
                We begrijpen dat mensen met overprikkeling extra gevoelig zijn voor nieuwe omgevingen en ervaringen. Onze praktijkruimte is rustig en prikkelarm ingericht. Bij het eerste gesprek nemen we uitgebreid de tijd om uw ervaringen en triggers in kaart te brengen, zonder haast.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De eerste behandelingen starten met minimale naaldzetting — minder naalden, zachte stimulatie — om het lichaam te laten wennen. We bouwen de intensiteit geleidelijk op naarmate het zenuwstelsel meer capaciteit toont. Veel cliënten ervaren al na de eerste sessie een merkbare kalmte die enkele dagen aanhoudt.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Naast acupunctuur bespreken we strategieën voor dagelijkse ontprikkeling: structuur, ritme, zintuiglijke pauzes en manieren om de hersteltijd te optimaliseren. Dit versterkt het behandeleffect significant.
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
                  "Mensen met hoge sensitiviteit (HSP)",
                  "Mensen met autisme die overprikkeling ervaren",
                  "Mensen in of na een burn-out",
                  "Mensen met ADHD en prikkelverwerkingsproblemen",
                  "Mensen met slaapproblemen door een overactief brein",
                  "Mensen na trauma of PTSS",
                  "Mensen die moeite hebben om tot rust te komen",
                  "Mensen die reguliere begeleiding willen aanvullen",
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
                Onze praktijk is centraal gelegen in Zaandam en bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Overprikkeling, stressklachten en burn-out hangen nauw samen — we behandelen de volledige samenhang in uw persoonlijke context.
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
                <Link href="/klachten/burn-out" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Burn-out
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/concentratieproblemen" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Concentratieproblemen
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
                  q: "Kan acupunctuur helpen bij overprikkeling?",
                  a: "Ja. Acupunctuur is bijzonder geschikt voor mensen met een overgevoelig zenuwstelsel. De behandeling activeert het parasympathische zenuwstelsel, verlaagt de cortisolniveaus en vermindert de algehele activatiedrempel. Mensen met overprikkeling ervaren de behandeling zelf vaak als diep kalmerend. We werken met zachte stimulatie en passen de aanpak aan op de sensitiviteit van de cliënt.",
                },
                {
                  q: "Is overprikkeling hetzelfde als een hoge sensitiviteit (HSP)?",
                  a: "Niet helemaal. Hoge sensitiviteit (HSP) is een aangeboren eigenschap waarbij prikkels dieper worden verwerkt. Overprikkeling is de toestand die ontstaat wanneer de verwerkingscapaciteit van het zenuwstelsel wordt overschreden. HSP-ers zijn vaker vatbaar voor overprikkeling, maar overprikkeling kan ook optreden bij mensen zonder uitgesproken hoge sensitiviteit, zoals bij burn-out, autisme of na langdurige stress.",
                },
                {
                  q: "Hoe verloopt een acupunctuurbehandeling bij overprikkeling?",
                  a: "We werken bij overprikkeling met een kalme behandelomgeving: gedimde verlichting, stille ruimte en zachte, minimale naaldzetting. De behandeling begint met een uitgebreide intake om uw specifieke triggers en patronen te begrijpen. We gebruiken punten die het zenuwstelsel kalmeren en het Lever-Qi vrij maken, en bouwen de intensiteit geleidelijk op.",
                },
                {
                  q: "Hoeveel behandelingen zijn nodig bij overprikkeling?",
                  a: "Bij acute overprikkeling door tijdelijke overbelasting zijn 4 tot 8 behandelingen vaak voldoende. Bij structurele overgevoeligheid — zoals bij HSP of autisme-gerelateerde overprikkeling — is een langer traject gewenst, waarbij de behandeling ook de verwerkingsdrempel langzaam vergroot en de veerkracht versterkt.",
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

        {/* Gerelateerde klachten */}
        <section className="py-16 bg-white border-b border-[#1F3A36]/10">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-2 text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Gerelateerde klachten
            </h2>
            <p className="text-sm text-[#1F3A36]/60 font-light text-center mb-8">
              Acupunctuur helpt ook bij deze verwante klachten
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/slaapproblemen", label: "Slaapproblemen" },
                { href: "/klachten/burn-out", label: "Burn-out" },
                { href: "/klachten/angstklachten", label: "Angstklachten" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="klacht-card-link flex items-center justify-between gap-2 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/10 rounded-xl px-5 py-4 transition-colors duration-200 group"
                >
                  <span className="text-sm font-medium text-[#1F3A36]">{item.label}</span>
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#4A6559] text-base shrink-0 transition-transform duration-200" />
                </Link>
              ))}
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
                  Plan een intake in een rustige omgeving en laat ons uw situatie begrijpen. We nemen de tijd, stellen geen oordeel en stemmen de behandeling volledig af op uw tempo en gevoeligheid.
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
                      id="D8uouGkFZH4Alr37y5z4_overprikkeling"
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
