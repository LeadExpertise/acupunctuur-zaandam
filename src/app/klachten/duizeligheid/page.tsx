import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Duizeligheid Zaandam | Vertigo & Evenwichtsproblemen",
  description:
    "Last van duizeligheid, vertigo of evenwichtsproblemen? Acupunctuur in Zaandam biedt een holistische aanpak voor BPPV, de ziekte van Menière en cervicogene duizeligheid.",
  keywords: [
    "acupunctuur duizeligheid",
    "duizeligheid behandeling zaandam",
    "vertigo acupunctuur",
    "evenwichtsproblemen acupunctuur",
    "BPPV acupunctuur",
    "ziekte van menière acupunctuur",
    "cervicogene duizeligheid acupunctuur zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/duizeligheid",
      name: "Acupunctuur bij Duizeligheid in Zaandam",
      description:
        "Informatie over de behandeling van duizeligheid, vertigo en evenwichtsproblemen via acupunctuur en Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Duizeligheid" },
        { "@type": "MedicalCondition", name: "Vertigo" },
        { "@type": "MedicalCondition", name: "BPPV" },
        { "@type": "MedicalCondition", name: "Ziekte van Menière" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Duizeligheid" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij vertigo en duizeligheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur wordt al eeuwenlang ingezet bij duizeligheidsklachten. Vanuit westerse fysiologie stimuleert acupunctuur de doorbloeding van het binnenoor en de hersenstam, moduleert het vestibulaire systeem en vermindert spierspanning in de nek die cervicogene duizeligheid veroorzaakt. In de praktijk zien we regelmatig dat de frequentie en intensiteit van duizeligheidsepisodes afnemen na een behandeltraject.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het verschil tussen duizeligheid en vertigo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duizeligheid is een breed begrip: het kan gaan om een gevoel van licht in het hoofd, onvastheid of een zweverig gevoel. Vertigo is een specifieke vorm waarbij u of de omgeving lijkt te draaien, ook als u stilstaat of -zit. Vertigo wijst vaak op een probleem in het vestibulaire systeem (binnenoor of hersenstam). Beide klachten kunnen met acupunctuur worden behandeld.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij duizeligheid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dit hangt af van de onderliggende oorzaak en de duur van de klachten. Bij acute of recent ontstane duizeligheid zien we soms al na 3 tot 5 behandelingen merkbaar resultaat. Bij chronische klachten zoals de ziekte van Menière adviseren we een traject van 8 tot 12 sessies om het evenwichtssysteem structureel te ondersteunen.",
          },
        },
        {
          "@type": "Question",
          name: "Worden behandelingen voor duizeligheid vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende zorgpakket bij vrijwel alle Nederlandse zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function DuizeligheidPage() {
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
            <span className="text-[#1F3A36]">Duizeligheid</span>
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
              Acupunctuur bij Duizeligheid in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Duizeligheid kan uw dagelijks leven ernstig beperken. Of u nu last heeft van plotselinge vertigoaanvallen, een chronisch zweverig gevoel of evenwichtsproblemen bij beweging — acupunctuur biedt een effectieve, holistische aanpak die het vestibulaire systeem, de doorbloeding en de nek- en hoofdspieren tegelijkertijd ondersteunt.
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

            {/* Featured Snippet — targets "Helpt acupunctuur bij duizeligheid?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur kan duizeligheid significant verminderen door de doorbloeding naar het evenwichtsorgaan en de hersenstam te verbeteren en het zenuwstelsel te kalmeren. Effectief bij benigne paroxysmale positieduizeligheid (BPPD), cervicogene duizeligheid (door nekklachten), Ménière en stress-gerelateerde duizelingen.
              </p>
            </div>

            {/* Wat is duizeligheid */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is duizeligheid?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Duizeligheid is geen enkelvoudige aandoening, maar een symptoom dat veroorzaakt kan worden door uiteenlopende problemen in het evenwichtssysteem, de doorbloeding of het zenuwstelsel. Het vestibulaire systeem — bestaande uit het binnenoor, de ogen en het cerebellum — verwerkt continu signalen over de positie en beweging van het lichaam. Als deze signalen niet goed worden afgestemd, ontstaat het gevoel van duizeligheid of vertigo.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Duizeligheid treft mensen van alle leeftijden, maar komt vaker voor naarmate men ouder wordt. Naast de fysieke ongemakken leidt het dikwijls tot angst voor vallen, beperking van dagelijkse activiteiten en een verminderde kwaliteit van leven. Een grondige intake helpt ons de onderliggende oorzaak te bepalen en de behandeling daarop af te stemmen.
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
                      "Rotatievertigo: gevoel dat de ruimte draait",
                      "Licht in het hoofd bij opstaan of bewegen",
                      "Misselijkheid en soms braken bij aanvallen",
                      "Onzeker gevoel bij lopen of staan",
                      "Oorsuizen of gedaald gehoor (bij Menière)",
                      "Hoofdpijn of nekklachten in combinatie met duizeligheid",
                      "Angst voor beweging of open ruimtes",
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
                      "BPPV (benigne paroxysmale positievertigo)",
                      "Ziekte van Menière (endolymfatische hydrops)",
                      "Cervicogene duizeligheid vanuit de nek",
                      "Lage bloeddruk of orthostatische hypotensie",
                      "Stress en overprikkeling van het zenuwstelsel",
                      "Doorbloedingsstoornis van het binnenoor",
                      "Vestibulaire neuritis of labyrintitis",
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
                Verschillende vormen van duizeligheid
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "BPPV",
                    desc: "De meest voorkomende vorm van vertigo. Kleine kristalletjes (otolieten) in het binnenoor raken los en verstoren de balans bij houdingsveranderingen. Kenmerkt zich door kortdurende, heftige vertigoaanvallen.",
                  },
                  {
                    title: "Ziekte van Menière",
                    desc: "Een aandoening van het binnenoor waarbij episoden van hevige vertigo, gehoorverlies en oorsuizen optreden. Aanvallen kunnen minuten tot uren duren en zijn zeer invaliderend.",
                  },
                  {
                    title: "Cervicogene duizeligheid",
                    desc: "Duizeligheid die voortkomt uit spierspanning of gewrichtsklachten in de bovenste nekwervels. Vaak in combinatie met nekpijn en hoofdpijn. Acupunctuur is bijzonder effectief voor deze vorm.",
                  },
                  {
                    title: "Orthostatische hypotensie",
                    desc: "Een plotse bloeddrukdaling bij opstaan die leidt tot een zwart voor de ogen gevoel en licht in het hoofd. Kan worden ondersteund door acupunctuur op punten die de bloeddrukregulatie bevorderen.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5"
                  >
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
                    In de Traditionele Chinese Geneeskunde wordt duizeligheid vanuit meerdere patronen benaderd. Een van de meest voorkomende is <em>opstijgend Lever-Yang</em>: een overschot aan Yang-energie dat naar omhoog stijgt en het hoofd verstoort, vaak gevoed door stress, frustratie of overwerk. Daarnaast speelt een <em>Nier-leegte</em> een rol — de Nieren voeden in de TCG het Merg en de Hersenen; een verzwakking leidt tot onvoldoende voeding van het hoofd en resulteert in duizeligheid, met name bij ouderen of na langdurige ziekte. Ten slotte kan <em>Slijm-ophoping</em> het hoofd afsluiten en een zwaar, beneveld gevoel veroorzaken. De behandeling wordt afgestemd op het individuele patroon.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Vestibulaire modulatie:</strong> Acupunctuurpunten zoals GB 20, GB 21 en BL 10 stimuleren de doorbloeding van de hersenstam en het cerebellum, waardoor de verwerking van vestibulaire signalen wordt ondersteund.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Naalden op specifieke punten bevorderen de microcirculatie in het binnenoor, wat relevant is bij Menière en vestibulaire neuritis.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Nekspanning:</strong> Bij cervicogene duizeligheid vermindert acupunctuur de spierspanning in de bovenste trapezius en suboccipitale spieren, waardoor de proprioceptieve signalen vanuit de nek worden genormaliseerd.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Autonome regulatie:</strong> Acupunctuur beïnvloedt het autonome zenuwstelsel, wat bijdraagt aan een betere bloeddrukregulatie en vermindering van stressgerelateerde duizeligheid.
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
                In de eerste intake bespreken we uitvoerig het karakter van uw duizeligheid: wanneer het optreedt, hoe lang aanvallen duren, of er bijkomende klachten zijn zoals oorsuizen of nekpijn. Op basis daarvan stellen we een behandelplan op.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij acute of recente duizeligheid adviseren we wekelijkse behandelingen gedurende de eerste vier tot zes weken. De naalden worden geplaatst op punten in de nek, schedelbasis, handen, voeten en soms het oor, afhankelijk van het patroon. De behandeling duurt circa 45 tot 60 minuten en is ontspannend van aard.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij de ziekte van Menière werken we met een langduriger traject en richten we ons op het reduceren van de aanvalsfrequentie en het herstel van het binnenoor-evenwicht. Veel cliënten ervaren na enkele behandelingen al een vermindering van de angst die met duizeligheid gepaard gaat.
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
                  "Mensen met terugkerende vertigoaanvallen",
                  "Mensen met cervicogene duizeligheid vanuit de nek",
                  "Mensen met de ziekte van Menière",
                  "Mensen met een chronisch zweverig of onvast gevoel",
                  "Mensen bij wie stress de duizeligheid verergert",
                  "Ouderen met evenwichtsproblemen",
                  "Mensen die medicatie willen aanvullen of afbouwen",
                  "Mensen na een hersenschudding of whiplash",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"
                  >
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
                Onze praktijk is centraal gelegen in Zaandam en bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. We behandelen regelmatig cliënten met duizeligheids- en evenwichtsklachten die samenhangen met nekklachten of stress.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/hoofd-zenuwstelsel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofd &amp; zenuwstelsel overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/tinnitus" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Tinnitus
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/hoofdpijn" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofdpijn
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/nekklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Nekklachten
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
                  q: "Kan acupunctuur helpen bij vertigo en duizeligheid?",
                  a: "Ja. Acupunctuur wordt al eeuwenlang ingezet bij duizeligheidsklachten. Vanuit westerse fysiologie stimuleert acupunctuur de doorbloeding van het binnenoor en de hersenstam, moduleert het vestibulaire systeem en vermindert spierspanning in de nek die cervicogene duizeligheid veroorzaakt. In de praktijk zien we regelmatig dat de frequentie en intensiteit van duizeligheidsepisodes afnemen na een behandeltraject.",
                },
                {
                  q: "Wat is het verschil tussen duizeligheid en vertigo?",
                  a: "Duizeligheid is een breed begrip: het kan gaan om een gevoel van licht in het hoofd, onvastheid of een zweverig gevoel. Vertigo is een specifieke vorm waarbij u of de omgeving lijkt te draaien, ook als u stilstaat of -zit. Vertigo wijst vaak op een probleem in het vestibulaire systeem (binnenoor of hersenstam). Beide klachten kunnen met acupunctuur worden behandeld.",
                },
                {
                  q: "Hoeveel behandelingen zijn nodig bij duizeligheid?",
                  a: "Dit hangt af van de onderliggende oorzaak en de duur van de klachten. Bij acute of recent ontstane duizeligheid zien we soms al na 3 tot 5 behandelingen merkbaar resultaat. Bij chronische klachten zoals de ziekte van Menière adviseren we een traject van 8 tot 12 sessies om het evenwichtssysteem structureel te ondersteunen.",
                },
                {
                  q: "Worden behandelingen voor duizeligheid vergoed?",
                  a: "Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende zorgpakket bij vrijwel alle Nederlandse zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden"
                >
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
                { href: "/klachten/nekklachten", label: "Nekklachten" },
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/tinnitus", label: "Tinnitus" },
                { href: "/klachten/slaapproblemen", label: "Slaapproblemen" },
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
                  Plan een intake en laat ons uw duizeligheidsklachten grondig in kaart brengen. Heeft u vragen over uw specifieke situatie? Stuur ons gerust een WhatsApp-bericht — we reageren snel.
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
                      id="D8uouGkFZH4Alr37y5z4_duizeligheid"
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
