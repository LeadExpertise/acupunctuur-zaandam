import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Aangezichtspijn Zaandam | Gezichtspijn & TMJ",
  description:
    "Last van aangezichtspijn, kaakpijn of gezichtspijn door sinusproblemen of TMJ? Acupunctuur in Zaandam biedt gerichte pijnverlichting en behandelt de onderliggende oorzaak.",
  keywords: [
    "acupunctuur aangezichtspijn",
    "aangezichtspijn behandeling zaandam",
    "kaakpijn acupunctuur",
    "TMJ acupunctuur zaandam",
    "gezichtspijn behandeling",
    "sinuspijn acupunctuur",
    "kaakgewricht pijn acupunctuur zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/aangezichtspijn",
      name: "Acupunctuur bij Aangezichtspijn in Zaandam",
      description:
        "Informatie over de behandeling van aangezichtspijn, kaakpijn en gezichtspijn via acupunctuur en Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Aangezichtspijn" },
        { "@type": "MedicalCondition", name: "Kaakpijn" },
        { "@type": "MedicalCondition", name: "TMJ-disfunctie" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Aangezichtspijn" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij aangezichtspijn en kaakpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur is bijzonder geschikt voor aangezichtspijn die samenhangt met spierspanning, kaakgewrichtsproblemen (TMJ), sinusdruk of zenuwprikkeling. We behandelen zowel lokaal in het gezicht als op distale punten die de betrokken meridianen reguleren. Veel cliënten ervaren al na enkele sessies een merkbare vermindering van de pijnintensiteit.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is TMJ-disfunctie en hoe hangt het samen met aangezichtspijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TMJ staat voor temporomandibulaire joint — het kaakgewricht dat de onderkaak verbindt met de schedel. Bij TMJ-disfunctie is er een disbalans in het gewricht of de omringende spieren, wat leidt tot kaakpijn, klikken bij het kauwen, hoofdpijn en uitstraling naar het oor of de slaap. Stress en tandenknarsen (bruxisme) zijn veelvoorkomende oorzaken. Acupunctuur vermindert de spierspanning rondom het kaakgewricht en kalmeert de pijnoverdracht.",
          },
        },
        {
          "@type": "Question",
          name: "Is aangezichtspijn altijd te onderscheiden van trigeminusneuralgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Niet altijd — het onderscheid wordt gemaakt op basis van de pijneigenschappen. Trigeminusneuralgie kenmerkt zich door plotse, elektrische schokken van enkele seconden. Andere aangezichtspijn is vaker doffend, kloppend, aanhoudend of samenhangend met spierspanning of sinusproblemen. Beide aandoeningen kunnen worden behandeld met acupunctuur, zij het met een andere aanpak.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij aangezichtspijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dit hangt af van de oorzaak en duur van de klachten. Bij acute aangezichtspijn door sinusinfectie of spierspanning zijn vaak 4 tot 6 behandelingen voldoende. Bij chronische kaakpijn of TMJ-disfunctie adviseren we een traject van 8 tot 12 sessies.",
          },
        },
      ],
    },
  ],
};

export default function AangezichtspijnPage() {
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
            <span className="text-[#1F3A36]">Aangezichtspijn</span>
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
              Acupunctuur bij Aangezichtspijn in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Pijn in het gezicht heeft vele gedaanten: een kloppende druk achter de jukbeenderen, een stekende kaakpijn die uitstraalt naar het oor, of een zeurende spanning rond de neus en ogen. Acupunctuur behandelt de onderliggende oorzaak — of dat nu spierspanning, kaakgewrichtsproblemen, sinusdruk of zenuwprikkeling is.
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

            {/* Wat is aangezichtspijn */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is aangezichtspijn?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Aangezichtspijn is pijn die gelokaliseerd is in het gezicht en kan voortkomen uit uiteenlopende structuren: de kaakspieren en het kaakgewricht, de sinussen, de tanden en kiezen, de zenuwen van het gezicht of de spieren rondom de ogen en het voorhoofd. De pijn kan eenzijdig of tweezijdig zijn, acuut of chronisch, scherp, kloppend, drukkend of brandend van karakter.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Het multifactoriële karakter van aangezichtspijn maakt een grondige intake essentieel. Soms ligt de oorzaak voor de hand, zoals bij een sinusinfectie of na een tandheelkundige ingreep. Vaker echter is er sprake van een complexe samenloop van spierspanning, zenuwovergevoeligheid en stress die met een holistische benadering het beste wordt aangepakt.
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
                      "Druk- of kloppende pijn in de jukbeenderen of voorhoofd",
                      "Kaakpijn of pijn bij het kauwen",
                      "Klikken of knappen van het kaakgewricht",
                      "Uitstralende pijn naar het oor, slaap of nek",
                      "Pijn rondom de ogen of neussinus",
                      "Branderig of tintelend gevoel in het gezicht",
                      "Hoofdpijn in combinatie met gezichtspijn",
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
                      "TMJ-disfunctie (kaakgewrichtsklachten)",
                      "Bruxisme (tandenknarsen of klemmen)",
                      "Sinusitis of chronische sinusklachten",
                      "Tandheelkundige problemen of na ingrepen",
                      "Spierspanning door stress of houdingsproblemen",
                      "Trigeminusneuralgie of andere zenuwpijn",
                      "Cluster- of spanningshoofdpijn met uitstraling",
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
                Verschillende vormen van aangezichtspijn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "TMJ-disfunctie (kaakpijn)",
                    desc: "Pijn en disfunctie van het kaakgewricht en de omliggende spieren. Vaak gepaard met klikken bij het kauwen, beperkte mondopening en uitstraling naar het oor of de slaap.",
                  },
                  {
                    title: "Sinusgerelateerde gezichtspijn",
                    desc: "Druk en pijn in het voorhoofd of de jukbeenderen door sinusontsteking of chronische congestie. Verergert vaak bij vooroverbuigen en bij weersveranderingen.",
                  },
                  {
                    title: "Myofasciale aangezichtspijn",
                    desc: "Pijn door triggerpoints in de kauwspieren (masseter, temporalis), met uitstraling naar de wang, kies of slaap. Stress en bruxisme zijn veelvoorkomende oorzaken.",
                  },
                  {
                    title: "Neuropathische aangezichtspijn",
                    desc: "Branderige, tintelende of elektrische pijn door overgevoelige of beschadigde zenuwen in het gezicht. Kan optreden na tandheelkundige ingrepen of als gevolg van een herpesinfectie.",
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
                    In de TCG lopen de meridianen van de <em>Maag</em> (ST) en de <em>Galblaas</em> (GB) langs het gezicht en spelen een centrale rol bij aangezichtspijn. Stiknatie van Qi en Bloed in deze meridianen leidt tot pijn, druk of gevoelloosheid. Externe pathogenen zoals Wind en Hitte kunnen deze stagnatie verergeren. Bij TMJ-klachten zien we vaak een patroon van <em>Lever-Qi-stagnatie</em> dat samengaat met kaakspanning; stress voedt dit patroon direct. De behandeling richt zich op het vrij maken van de yangmeridianen van het hoofd, het verminderen van spierspanning in de kauwspieren en het reguleren van Qi en Bloed in het gezicht.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Zenuwstelsel:</strong> Acupunctuur moduleert de centrale sensitisatie in de trigeminovasculaire routes. Pijnverwerking in het ruggemerg en de hersenstam wordt beïnvloed via endorfine- en serotonine-afgifte, wat de pijndrempel verhoogt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Spierspanning:</strong> Directe naaldzetting in triggerpoints van de kauwspieren (masseter, temporalis) normaliseert de spierspanning en verbreekt de pijncirkel die TMJ-disfunctie in stand houdt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Verbetering van de lokale microcirculatie helpt bij de afvoer van ontstekingsmediatoren en ondersteunt het herstel van beschadigde of geïrriteerde weefselstructuren rond het kaakgewricht.
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
                In de intake brengen we de aard, locatie en mogelijke oorzaak van uw aangezichtspijn nauwkeurig in kaart. Op basis hiervan kiezen we een combinatie van lokale en distale naaldzetting. Lokale punten worden geplaatst rondom het kaakgewricht, de jukbeenderen, de sinus en de wangen; distale punten op handen en voeten ondersteunen de meridianen vanuit een afstand.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij TMJ-disfunctie besteden we extra aandacht aan de kauwspieren en adviseren we aanvullend ontspanningsoefeningen en een bewuste kaakhoudingscorrectie. Eventueel verwijzen we u door naar een tandarts of gnatoloog voor verdere diagnostiek.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                De meeste cliënten ervaren na 4 tot 6 behandelingen al een duidelijke vermindering van de pijn en een verbetering van de kaakbeweging.
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
                  "Mensen met kaakpijn of TMJ-disfunctie",
                  "Mensen die tandenknarsen (bruxisme) door stress",
                  "Mensen met sinusgerelateerde gezichtspijn",
                  "Mensen met pijn na tandheelkundige ingrepen",
                  "Mensen met chronische spanning in het gezicht",
                  "Mensen met neuropathische aangezichtspijn",
                  "Mensen bij wie stress de pijn verergert",
                  "Mensen die reguliere zorg willen aanvullen",
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
                Onze praktijk is centraal gelegen in Zaandam en bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Aangezichtspijn gaat regelmatig samen met hoofd- en nekklachten die wij in hetzelfde traject meenemen.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/hoofd-zenuwstelsel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofd &amp; zenuwstelsel overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/trigeminus-neuralgie" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Trigeminusneuralgie
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/hoofdpijn" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofdpijn
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
                  q: "Kan acupunctuur helpen bij aangezichtspijn en kaakpijn?",
                  a: "Ja. Acupunctuur is bijzonder geschikt voor aangezichtspijn die samenhangt met spierspanning, kaakgewrichtsproblemen (TMJ), sinusdruk of zenuwprikkeling. We behandelen zowel lokaal in het gezicht als op distale punten die de betrokken meridianen reguleren. Veel cliënten ervaren al na enkele sessies een merkbare vermindering van de pijnintensiteit.",
                },
                {
                  q: "Wat is TMJ-disfunctie en hoe hangt het samen met aangezichtspijn?",
                  a: "TMJ staat voor temporomandibulaire joint — het kaakgewricht dat de onderkaak verbindt met de schedel. Bij TMJ-disfunctie is er een disbalans in het gewricht of de omringende spieren, wat leidt tot kaakpijn, klikken bij het kauwen, hoofdpijn en uitstraling naar het oor of de slaap. Stress en tandenknarsen (bruxisme) zijn veelvoorkomende oorzaken. Acupunctuur vermindert de spierspanning rondom het kaakgewricht en kalmeert de pijnoverdracht.",
                },
                {
                  q: "Is aangezichtspijn altijd te onderscheiden van trigeminusneuralgie?",
                  a: "Niet altijd — het onderscheid wordt gemaakt op basis van de pijneigenschappen. Trigeminusneuralgie kenmerkt zich door plotse, elektrische schokken van enkele seconden. Andere aangezichtspijn is vaker doffend, kloppend, aanhoudend of samenhangend met spierspanning of sinusproblemen. Beide aandoeningen kunnen worden behandeld met acupunctuur, zij het met een andere aanpak.",
                },
                {
                  q: "Hoeveel behandelingen zijn nodig bij aangezichtspijn?",
                  a: "Dit hangt af van de oorzaak en duur van de klachten. Bij acute aangezichtspijn door sinusinfectie of spierspanning zijn vaak 4 tot 6 behandelingen voldoende. Bij chronische kaakpijn of TMJ-disfunctie adviseren we een traject van 8 tot 12 sessies.",
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
                  Plan een intake en laat ons uw aangezichtspijn grondig in kaart brengen. Heeft u vragen? Stuur ons gerust een WhatsApp-bericht — we reageren snel.
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
                      id="D8uouGkFZH4Alr37y5z4_aangezichtspijn"
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
