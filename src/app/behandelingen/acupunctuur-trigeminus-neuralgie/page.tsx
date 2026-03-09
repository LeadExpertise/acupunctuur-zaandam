import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Trigeminusneuralgie | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij trigeminusneuralgie in Zaandam. Verlicht de hevige aanvalsgewijze pijn langs de trigeminuszenuw op een natuurlijke en erkende manier.",
  keywords: [
    "acupunctuur trigeminusneuralgie",
    "trigeminusneuralgie behandeling Zaandam",
    "aangezichtszenuw pijn acupunctuur",
    "zenuwpijn gezicht acupunctuur",
    "trigeminus neuralgie natuurlijke behandeling",
    "acupunctuur zenuwpijn Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-trigeminus-neuralgie",
      name: "Acupunctuur bij Trigeminusneuralgie | Acupunctuur Zaandam",
      description:
        "Behandeling van trigeminusneuralgie met acupunctuur in Zaandam. Traditionele Chinese geneeskunde voor verlichting van hevige aangezichtspijn.",
      about: [
        { "@type": "MedicalCondition", name: "Trigeminusneuralgie" },
        { "@type": "MedicalCondition", name: "Aangezichtspijn" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Trigeminusneuralgie",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij trigeminusneuralgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan bij trigeminusneuralgie bijdragen aan het verminderen van de aanvalsfrequentie en de pijnintensiteit. Door specifieke acupunctuurpunten rondom het hoofd, gezicht en nek te stimuleren, wordt de doorbloeding verbeterd en het zenuwstelsel gekalmeerd. Veel pati\u00ebnten ervaren na een reeks behandelingen minder en minder hevige aanvallen.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij trigeminusneuralgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is een veilige behandelvorm bij trigeminusneuralgie, mits uitgevoerd door een erkend acupuncturist. De behandeling is niet-invasief, heeft geen bijwerkingen die vergelijkbaar zijn met medicatie, en kan naast reguliere behandelingen worden ingezet.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij trigeminusneuralgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De meeste pati\u00ebnten merken na drie tot vijf behandelingen een verbetering. Bij trigeminusneuralgie is consistentie belangrijk: een reeks van zes tot acht behandelingen geeft doorgaans het beste resultaat. Na de acute fase kan onderhoudsbehandeling de klachtenvrije periode verlengen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor trigeminusneuralgie vergoed?",
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
          name: "Acupunctuur bij Trigeminusneuralgie",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-trigeminus-neuralgie",
        },
      ],
    },
  ],
};

export default function TrigerminusNeuragiePage() {
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
            <Link
              href="/behandelingen"
              className="hover:text-[#1F3A36] transition-colors"
            >
              Behandelingen
            </Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">
              Acupunctuur bij Trigeminusneuralgie
            </span>
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
              Acupunctuur bij Trigeminusneuralgie in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Trigeminusneuralgie wordt omschreven als een van de hevigste pijnvormen die een mens kan ervaren.
              Aanvallen van schietende, elektrische pijn in het gezicht kunnen het dagelijks leven volledig ontwrichten.
              Acupunctuur biedt een veilige, aanvullende aanpak die de aanvalsfrequentie vermindert en het zenuwstelsel
              ondersteunt in herstel.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300"
              >
                Maak een afspraak
              </a>
              <Link
                href="/klachten/trigeminus-neuralgie"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300"
              >
                Meer over trigeminusneuralgie
              </Link>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Wat is trigeminusneuralgie */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is trigeminusneuralgie?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De nervus trigeminus is de vijfde hersenzenuw en de grootste gevoelszenuw van het gezicht. Hij verdeelt
                zich in drie takken die gevoel doorgeven vanuit het voorhoofd, de wang en de kaak. Bij
                trigeminusneuralgie wordt deze zenuw geprikkeld &mdash; vaak door een bloedvat dat op de zenuwwortel
                drukt &mdash; wat resulteert in plots opkomende, brandende of elektrische pijnstoten van enkele seconden
                tot minuten.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De aanvallen kunnen worden uitgelokt door alledaagse handelingen: tandenpoetsen, kauwen, praten of zelfs
                een lichte aanraking van de huid. Tussen de aanvallen door is er vaak een doffe achtergrondpijn of
                juist volledige pijnvrijheid. De aandoening treft vaker vrouwen dan mannen en komt doorgaans voor na
                het vijftigste levensjaar, hoewel jongere mensen evenmin zijn uitgesloten.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Reguliere behandelingen bestaan uit medicatie (zoals carbamazepine), zenuwblokkades of operatieve
                ingrepen. Acupunctuur kan als aanvullende therapie de kwaliteit van leven verbeteren en de
                medicatiebehoefte in sommige gevallen verminderen.
              </p>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe helpt acupunctuur bij trigeminusneuralgie?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit de Traditionele Chinese Geneeskunde (TCG) wordt gezichtspijn gezien als een stagnatie van
                Qi en bloed in de meridianen die door het hoofd en gezicht lopen &mdash; met name de Maag-, Galblaas-
                en Drievoudige Verwarmer-meridiaan. Koude, wind of langdurige spanning kunnen deze stagnatie
                verergeren. Door specifieke acupunctuurpunten te stimuleren, wordt de doorstroming hersteld en de
                prikkeldrempel verhoogd.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit westers perspectief stimuleert acupunctuur de afgifte van endorfines en serotonine, en moduleert
                het de pijnverwerking via het centrale zenuwstelsel. Naaldstimulatie in punten nabij de trigeminustak
                kan de zenuwgeleiding normaliseren en de sensibilisatie verminderen die verantwoordelijk is voor de
                hevige aanvallen.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Tevens richt de behandeling zich op het ontspannen van de kaak- en nekspieren, die bij
                trigeminusneuralgie vaak bijdragen aan de ernst van de klachten. Een ontspannen en goed doorbloede
                omgeving rondom de zenuw verlaagt de kans op aanvalsuitlokking.
              </p>
            </section>

            {/* Behandeling */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De eerste sessie begint altijd met een uitgebreid intakegesprek. De acupuncturist inventariseert de
                aard, frequentie en triggers van de pijnaanvallen, bespreekt uw medische voorgeschiedenis en stelt
                op basis van de TCG-diagnose een persoonlijk behandelplan op.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Tijdens de behandeling zelf worden dunne, steriele naalden gezet op punten in het gezicht, op de
                schedel, in de nek, handen en voeten. De keuze van punten hangt af van welke tak van de
                trigeminuszenuw betrokken is en van uw constitutionele patroon. De naalden blijven gemiddeld
                twintig minuten zitten. De meeste pati&euml;nten ervaren de behandeling als ontspannend.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Na de sessie kunnen adviezen worden gegeven over voeding, leefstijl en eenvoudige
                acupressuurpunten die u thuis zelf kunt stimuleren om aanvallen te voorkomen of te verzachten.
              </p>
            </section>

            {/* Aantal behandelingen */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Bij trigeminusneuralgie wordt doorgaans een startreeks van zes tot acht behandelingen aanbevolen,
                in de beginfase twee keer per week. Na verbetering wordt de frequentie afgebouwd naar wekelijks
                en vervolgens tweewekelijks.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Chronische of al lang bestaande klachten vragen om een langere behandelperiode. Onderhoudsbehandelingen
                eens per vier tot zes weken helpen terugval te voorkomen en de bereikte verbetering te bestendigen.
                Uw acupuncturist evalueert na elke sessie het verloop en past het plan waar nodig aan.
              </p>
            </section>

            {/* Voor wie */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met gediagnosticeerde trigeminusneuralgie",
                  "Pati\u00ebnten die medicatie willen afbouwen of aanvullen",
                  "Mensen met bijwerkingen van pijnstillers",
                  "Personen met herhaalde pijnaanvallen in het gezicht",
                  "Iedereen die een natuurlijke, aanvullende aanpak zoekt",
                  "Mensen met spanning in kaak en nek als bijdragende factor",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[#FAF8F3] rounded-lg p-4 border border-[#1F3A36]/5"
                  >
                    <iconify-icon
                      icon="solar:shield-check-linear"
                      className="text-[#4A6559] shrink-0 mt-0.5 text-lg"
                    />
                    <span className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gerelateerde behandelingen */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-6">
                Trigeminusneuralgie gaat soms samen met andere pijnklachten in het hoofd- en gezichtsgebied.
                Bekijk ook de verwante behandelingen of lees meer over de klacht zelf.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/behandelingen/acupunctuur-aangezichtspijn"
                  className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Acupunctuur bij Aangezichtspijn
                  </span>
                </Link>
                <Link
                  href="/behandelingen/acupunctuur-hoofdpijn"
                  className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Acupunctuur bij Hoofdpijn
                  </span>
                </Link>
                <Link
                  href="/behandelingen/acupunctuur-migraine"
                  className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Acupunctuur bij Migraine
                  </span>
                </Link>
              </div>
            </section>

            {/* Lokale SEO */}
            <section className="bg-[#FAF8F3] rounded-xl p-8 border border-[#1F3A36]/5">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij trigeminusneuralgie in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Acupunctuur Zaandam is centraal gelegen en goed bereikbaar vanuit Zaandam, Zaandijk, Koog aan de Zaan,
                Wormerveer, Krommenie, Assendelft en omgeving. Pati&euml;nten reizen ook vanuit Amsterdam-Noord en
                Purmerend voor een behandeling. Onze praktijk biedt korte wachttijden en flexibele
                afspraakmogelijkheden, zodat u snel geholpen bent bij uw pijnklachten.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen
              </h2>
              <p className="text-base font-light text-[#1F3A36]/70">
                Antwoorden op de meest gestelde vragen over acupunctuur bij trigeminusneuralgie.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij trigeminusneuralgie?",
                  a: "Acupunctuur kan bij trigeminusneuralgie bijdragen aan het verminderen van de aanvalsfrequentie en de pijnintensiteit. Door specifieke acupunctuurpunten rondom het hoofd, gezicht en nek te stimuleren, wordt de doorbloeding verbeterd en het zenuwstelsel gekalmeerd. Veel pati\u00ebnten ervaren na een reeks behandelingen minder en minder hevige aanvallen.",
                },
                {
                  q: "Is acupunctuur veilig bij trigeminusneuralgie?",
                  a: "Ja, acupunctuur is een veilige behandelvorm bij trigeminusneuralgie, mits uitgevoerd door een erkend acupuncturist. De behandeling is niet-invasief, heeft geen bijwerkingen die vergelijkbaar zijn met medicatie, en kan naast reguliere behandelingen worden ingezet.",
                },
                {
                  q: "Hoe snel merk je resultaat bij trigeminusneuralgie?",
                  a: "De meeste pati\u00ebnten merken na drie tot vijf behandelingen een verbetering. Bij trigeminusneuralgie is consistentie belangrijk: een reeks van zes tot acht behandelingen geeft doorgaans het beste resultaat. Na de acute fase kan onderhoudsbehandeling de klachtenvrije periode verlengen.",
                },
                {
                  q: "Wordt acupunctuur voor trigeminusneuralgie vergoed?",
                  a: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium text-[#1F3A36] text-sm">
                    {faq.q}
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-[#4A6559] shrink-0 transition-transform group-open:rotate-180"
                    />
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
        <section
          aria-label="Beroepsverenigingen en verzekeraars"
          className="border-y bg-[#FAF8F3] border-[#1F3A36]/10 py-16"
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
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp"
                alt="NVA Erkend Acupuncturist"
                className="md:h-12 w-auto h-10 object-contain"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png"
                alt="VGZ Vergoeding Acupunctuur"
                className="md:h-10 w-auto h-8 object-contain"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg"
                alt="TCMA Certificering"
                className="md:h-12 w-auto h-10 object-contain"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png"
                alt="Zilveren Kruis Vergoeding"
                className="md:h-12 w-auto h-10 object-contain"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png"
                alt="CZ Vergoeding Acupunctuur"
                className="md:h-10 w-auto h-8 object-contain"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          aria-labelledby="cta-trigeminus-titel"
          className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative"
        >
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  id="cta-trigeminus-titel"
                  className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Verlichting van gezichtspijn begint met een eerste stap
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Plan een intake in Zaandam en ontdek hoe acupunctuur kan bijdragen aan minder en minder hevige
                  trigeminusaanvallen. Geen wachtlijst, geen verwijzing nodig.
                </p>
                <a
                  href="https://wa.me/31657998330"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm px-8 py-3.5 shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  WhatsApp ons
                </a>
              </div>
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  id="D8uouGkFZH4Alr37y5z4_behandeling_trigeminus_neuralgie"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  loading="lazy"
                  title="Afspraak maken voor trigeminusneuralgie behandeling"
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
