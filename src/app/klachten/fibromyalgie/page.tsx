import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Fibromyalgie Zaandam | Chronische Pijn & Vermoeidheid",
  description:
    "Fibromyalgie met chronische spierpijn, vermoeidheid en slaapproblemen? Acupunctuur in Zaandam verlicht pijn, verbetert slaap en energie bij fibromyalgie.",
  keywords: [
    "acupunctuur fibromyalgie zaandam",
    "fibromyalgie behandeling",
    "chronische spierpijn acupunctuur",
    "fibromyalgie pijn vermoeidheid",
    "acupunctuur chronische pijn zaandam",
    "fibromyalgie slaapproblemen",
    "tender points behandeling",
    "fibromyalgie TCG",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/fibromyalgie",
      name: "Acupunctuur bij Fibromyalgie in Zaandam",
      description:
        "Uitgebreide informatie over de behandeling van fibromyalgie met acupunctuur in Zaandam. Chronische wijdverspreide pijn, vermoeidheid, slaapstoornissen en tender points.",
      about: [
        { "@type": "MedicalCondition", name: "Fibromyalgie" },
        { "@type": "MedicalCondition", name: "Chronische wijdverspreide pijn" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Fibromyalgie",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij fibromyalgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Een Cochrane Review (Deare et al., 2013) vond matig bewijs dat acupunctuur pijn en stijfheid bij fibromyalgie verbetert ten opzichte van geen behandeling. In de klinische praktijk zien we dat acupunctuur naast pijnverlichting ook de slaapkwaliteit en het energieniveau positief beïnvloedt.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen heb ik nodig bij fibromyalgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fibromyalgie is een chronische aandoening die een langere behandelperiode vraagt. Wij adviseren een initieel traject van 10 tot 15 behandelingen, gevolgd door onderhoudssessies op maat. Na de eerste 6 sessies evalueren we de voortgang en stemmen we het plan af op uw respons.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij fibromyalgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur is bij fibromyalgie bijzonder veilig omdat het geen geneesmiddelen gebruikt en geen bijwerkingen heeft die overlappen met de medicatie die fibromyalgiepatiënten vaak al innemen. We werken met flinterdunne, steriele naalden en houden rekening met de verlaagde pijndrempel bij fibromyalgie door voorzichtig te beginnen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij fibromyalgie vergoed door de zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, via de aanvullende verzekering. Acupunctuur Zaandam is aangesloten bij erkende beroepsverenigingen (NVA / TCMA). De meeste aanvullende verzekeringen vergoeden acupunctuur deels of volledig. De vergoeding gaat niet ten koste van uw verplicht eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function FibromyalgiePage() {
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
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">
              Home
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">
              Welke klachten
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/klachten/pijnklachten-en-beweging" className="hover:text-[#1F3A36] transition-colors">
              Pijnklachten &amp; beweging
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Fibromyalgie</span>
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
                Pijnbestrijding &amp; Herstel
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur bij Fibromyalgie in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Overal pijn, altijd moe en &lsquo;s nachts geen rust vinden &mdash; fibromyalgie
              treft het hele lichaam en laat mensen uitgeput en onbegrepen achter. Acupunctuur
              biedt geen wonderoplossing, maar wel aantoonbare, wetenschappelijk onderbouwde
              verlichting van pijn, vermoeidheid en slaapproblemen bij fibromyalgie.
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

            {/* Featured Snippet — targets "Helpt acupunctuur bij fibromyalgie?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur verlicht fibromyalgie door de centrale pijnsensitisatie te moduleren, endorfines vrij te maken en de slaapkwaliteit te verbeteren. Studies tonen aan dat het de wijdverspreide pijn, vermoeidheid en slaapklachten van fibromyalgie significant vermindert — effectief als aanvulling op multidisciplinaire behandeling.
              </p>
            </div>

            {/* Wat is fibromyalgie */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is fibromyalgie?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Fibromyalgie is een chronisch pijnsyndroom dat wordt gekenmerkt door wijdverspreide
                pijn in spieren, pezen en gewrichten, gepaard met een ernstige vermoeidheid en
                slaapstoornissen. Het is een van de meest voorkomende chronische pijnaandoeningen:
                naar schatting 2 tot 4 procent van de bevolking is getroffen, waarbij vrouwen
                significant vaker worden gediagnosticeerd dan mannen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                De exacte oorzaak van fibromyalgie is nog niet volledig opgehelderd. Huidige
                inzichten wijzen op een verstoring van de centrale pijnverwerking
                (centrale sensitisatie), waarbij het zenuwstelsel pijnsignalen versterkt en
                abnormaal verwerkt. Dit verklaart waarom fibromyalgie-pati&euml;nten een sterk
                verlaagde pijndrempel hebben en ook niet-pijnlijke prikkels als pijnlijk ervaren
                (allodynie). Uitlokkende factoren zijn onder meer een doorgemaakte infectie,
                ernstig emotioneel trauma, langdurige stress of een andere pijnaandoening.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                De diagnose wordt gesteld op basis van de criteria van het American College of
                Rheumatology: wijdverspreide pijn gedurende minimaal drie maanden, waarbij
                klassiek 11 van de 18 gedefinieerde tender points gevoelig zijn bij matige druk.
                Moderne diagnostische criteria leggen meer nadruk op de aanwezigheid van
                bijkomende symptomen zoals vermoeidheid, slaapproblemen en cognitieve stoornissen.
              </p>
            </section>

            {/* Symptomen & Oorzaken */}
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
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Wijdverspreide spierpijn en drukgevoeligheid
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Ernstige vermoeidheid, ook na slaap
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Niet-herstellende slaap en slaapstoornissen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Fibro-mist: concentratie- en geheugenproblemen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Ochtendstijfheid van meer dan 15 minuten
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Hoofdpijn, prikkelbaredarmsyndroom, blaasklachten
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Gevoeligheid voor geluid, licht en temperatuur
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Mogelijke uitlokkende factoren
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Centrale sensitisatie van het zenuwstelsel
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Doorgemaakte virale of bacteriële infectie
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Langdurige psychosociale stress of trauma
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Genetische aanleg (familiaire clustering)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Slaapstoornissen als primaire trigger
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Andere chronische pijnaandoeningen
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hoe helpt acupunctuur */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe acupunctuur kan helpen bij fibromyalgie
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Traditionele Chinese Geneeskunde wordt fibromyalgie niet als &eacute;&eacute;n
                    uniforme aandoening gezien, maar als een complex patroon dat individueel wordt
                    gediagnosticeerd. De meest voorkomende patronen zijn een tekort aan Qi en Bloed
                    dat de spieren onvoldoende voedt, gecombineerd met stagnatie van Lever-Qi (door
                    stress en emotionele belasting) en een zwakte van de Nieren (die de basisenergie
                    bewaken). Dit drievoudige patroon verklaart de karakteristieke triade van pijn,
                    uitputtende vermoeidheid en niet-herstellende slaap bij fibromyalgie. Acupunctuur
                    voedt het Qi en Bloed aan, beweegt de stagnatie op en versterkt de Nieren, waarmee
                    alle drie de kernsymptomen tegelijkertijd worden aangepakt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Pijndemping:</strong> Acupunctuur
                      moduleert de centrale pijnverwerking door de activiteit van het dalende
                      pijnremmende systeem te verhogen. Bij fibromyalgie is dit systeem chronisch
                      onderfunctionerend; acupunctuur stimuleert de vrijmaking van serotonine,
                      noradrenaline en endorfinen die de pijnverwerking normaliseren.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Verbetering
                      van de microcirculatie in de pijnlijke spiergebieden vermindert lokale
                      ischemie en de ophoping van pijninducerende stoffen (substance P, bradykinine),
                      wat bijdraagt aan de verlichting van de wijdverspreide spierpijn.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontspanning:</strong> Acupunctuur
                      activeert het parasympathische zenuwstelsel, verlaagt de cortisolspiegels en
                      bevordert de melatonineproductie. Dit vertaalt zich in een diepere, meer
                      herstellende slaap &mdash; cruciaal bij fibromyalgie, omdat slaapgebrek de
                      pijn de volgende dag aanzienlijk verergert.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Wat kunt u verwachten */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat kunt u verwachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Het eerste consult bij fibromyalgie is uitgebreider dan gemiddeld. We brengen het
                complete klachtenpatroon in kaart: de aard en verspreiding van de pijn, de
                slaapkwaliteit, het energieniveau, de emotionele toestand en eventuele bijkomende
                klachten zoals prikkelbare darm of hoofdpijn. Op basis hiervan stellen we een
                individueel TCG-patroon vast. Naalden worden geplaatst op een combinatie van
                systemische punten (die het zenuwstelsel kalmeren en energie aanvullen) en lokale
                punten bij de meest pijnlijke tender points. We beginnen voorzichtig, met een lagere
                stimulering dan gebruikelijk, omdat fibromyalgie-pati&euml;nten vaak gevoeliger
                reageren op acupunctuur.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Fibromyalgie vraagt een langer behandeltraject: wij adviseren een initieel traject
                van 10 tot 15 sessies, gevolgd door onderhoudssessies op maat (maandelijks of om de
                zes weken). Na de eerste 6 behandelingen evalueren we de voortgang op pijn, slaap en
                energie. Acupunctuur werkt het beste als onderdeel van een bredere aanpak, in overleg
                met uw huisarts of reumatoloog.
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
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten met een vastgestelde fibromyalgie-diagnose</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met chronische, wijdverspreide spierpijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten bij wie medicatie onvoldoende werkt of bijwerkingen geeft</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met fibromyalgie en ernstige slaapproblemen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5 sm:col-span-2">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Iedereen die een complementaire, medicijnvrije aanpak zoekt naast reguliere zorg</span>
                </div>
              </div>
            </section>

            {/* Lokale SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij fibromyalgie in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
                Fibromyalgie maakt u dagelijks moe; we houden hier rekening mee bij het plannen van
                afspraken en de intensiteit van de behandelingen. Neem gerust contact op voor een
                vrijblijvend kennismakingsgesprek.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/klachten/pijnklachten-en-beweging"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Pijnklachten overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/spierpijn"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Spierpijn
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/vermoeidheid"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Vermoeidheid
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/slaapproblemen"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Slaapproblemen
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* Wetenschappelijk onderzoek */}
        <section className="py-20 bg-[#F2EDE3] border-y border-[#1F3A36]/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#4A6559] mb-4 shadow-sm">
                <iconify-icon icon="solar:document-text-linear" className="text-2xl" stroke-width="1.5" />
              </span>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wetenschappelijk onderzoek
              </h2>
              <p className="text-base font-light text-[#1F3A36]/70 max-w-2xl mx-auto">
                De effectiviteit van acupunctuur bij fibromyalgie is onderzocht in onafhankelijk,
                internationaal gepubliceerd wetenschappelijk onderzoek.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">
                  Cochrane Review (2013) &mdash; Acupuncture for treating fibromyalgia
                </h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Deare JC et al. (<em>Cochrane Database of Systematic Reviews</em>, 2013;(5):CD007070)
                  analyseerden gerandomiseerde gecontroleerde studies naar acupunctuur bij
                  fibromyalgie. De review vond <strong>matig bewijs</strong> dat acupunctuur pijn en
                  stijfheid bij fibromyalgie verbetert ten opzichte van geen behandeling, en dat het
                  ook het algemeen welbevinden positief be&iuml;nvloedt. De onderzoekers concludeerden
                  dat acupunctuur een zinvolle aanvulling is op de reguliere behandeling van
                  fibromyalgie, met name voor pati&euml;nten bij wie farmacologische therapie
                  onvoldoende werkt of slecht wordt verdragen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">
                  Centrale sensitisatie en acupunctuur
                </h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Neurowetenschappelijk onderzoek laat zien dat acupunctuur de activiteit
                  moduleert in hersengebieden die betrokken zijn bij pijnverwerking, waaronder de
                  insula, het anterieure cingulaire cortex en de thalamus. Bij fibromyalgie zijn
                  juist deze gebieden hyperactief door centrale sensitisatie. Functionele
                  beeldvormingsstudies (fMRI) tonen aan dat acupunctuur de abnormale
                  pijnversterkende activiteit in deze regio&apos;s normaliseert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#FAF8F3] border-b border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen over fibromyalgie
              </h2>
            </div>
            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij fibromyalgie?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Een Cochrane Review (Deare et al., 2013) vond matig bewijs dat acupunctuur
                  pijn en stijfheid bij fibromyalgie verbetert ten opzichte van geen behandeling.
                  In de klinische praktijk zien we dat acupunctuur naast pijnverlichting ook de
                  slaapkwaliteit en het energieniveau positief be&iuml;nvloedt, wat de dagelijkse
                  kwaliteit van leven aanzienlijk verbetert.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen heb ik nodig bij fibromyalgie?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Fibromyalgie is een chronische aandoening die een langere behandelperiode vraagt.
                  Wij adviseren een initieel traject van 10 tot 15 behandelingen, gevolgd door
                  onderhoudssessies op maat (maandelijks of om de zes weken). Na de eerste 6 sessies
                  evalueren we de voortgang op pijn, slaap en energie en stellen we het plan bij.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij fibromyalgie?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Acupunctuur is bij fibromyalgie bijzonder veilig omdat het geen geneesmiddelen
                  gebruikt en geen bijwerkingen heeft die overlappen met de medicatie die
                  fibromyalgie-pati&euml;nten vaak al innemen. We werken met flinterdunne, steriele
                  naalden en houden rekening met de verlaagde pijndrempel bij fibromyalgie door
                  voorzichtig te beginnen en de stimulering geleidelijk op te bouwen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij fibromyalgie vergoed door de zorgverzekering?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, via de aanvullende verzekering. Acupunctuur Zaandam is aangesloten bij erkende
                  beroepsverenigingen (NVA / TCMA). De meeste aanvullende verzekeringen vergoeden
                  acupunctuur deels of volledig. De vergoeding gaat <strong>niet</strong> ten koste
                  van uw verplicht eigen risico. Controleer uw polisvoorwaarden voor de exacte
                  dekkingsomvang.
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section
          aria-label="Beroepsverenigingen en verzekeraars"
          className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16"
        >
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
                { href: "/klachten/chronische-vermoeidheid", label: "Chronische Vermoeidheid" },
                { href: "/klachten/pijnbestrijding", label: "Pijnbestrijding" },
                { href: "/klachten/stressklachten", label: "Stressklachten" },
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
        <section
          id="contact"
          aria-labelledby="cta-titel"
          className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative"
        >
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#8A6B3D] mb-8"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
                <h2
                  id="cta-titel"
                  className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Klaar om verlichting te vinden?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Fibromyalgie hoeft uw leven niet volledig te beheersen. Acupunctuur biedt
                  aantoonbare verlichting van pijn, vermoeidheid en slaapproblemen. Boek een intake
                  in onze praktijk in Zaandam of stuur een WhatsApp-bericht voor een vrijblijvend
                  kennismakingsgesprek.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
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
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">
                      Online Planner
                    </span>
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
                      style={{
                        width: "100%",
                        border: "none",
                        overflow: "auto",
                        minHeight: "650px",
                        height: "100%",
                        position: "relative",
                        zIndex: 10,
                      }}
                      scrolling="yes"
                      id="D8uouGkFZH4Alr37y5z4_fibromyalgie"
                      title="Maak een afspraak"
                    />
                    <Script
                      src="https://link.msgsndr.com/js/form_embed.js"
                      strategy="afterInteractive"
                    />
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
