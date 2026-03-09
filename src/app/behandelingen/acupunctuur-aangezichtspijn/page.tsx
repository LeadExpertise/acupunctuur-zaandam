import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Aangezichtspijn | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij aangezichtspijn in Zaandam. Verlicht pijn in het gezicht veroorzaakt door zenuwprikkeling, sinusitis of spierspanning op een natuurlijke manier.",
  keywords: [
    "acupunctuur aangezichtspijn",
    "aangezichtspijn behandeling Zaandam",
    "pijn in gezicht acupunctuur",
    "acupunctuur gezichtspijn",
    "aangezichtspijn natuurlijke behandeling",
    "acupunctuur hoofd zenuwstelsel Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-aangezichtspijn",
      name: "Acupunctuur bij Aangezichtspijn | Acupunctuur Zaandam",
      description:
        "Behandeling van aangezichtspijn met acupunctuur in Zaandam. TCG-aanpak voor pijn in het gezicht van diverse oorzaak.",
      about: [
        { "@type": "MedicalCondition", name: "Aangezichtspijn" },
        { "@type": "MedicalCondition", name: "Gezichtspijn" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Aangezichtspijn",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij aangezichtspijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan effectief zijn bij verschillende vormen van aangezichtspijn. Door punten in het gezicht, op de schedel en in de nek te behandelen, wordt de pijndrempel verhoogd, wordt spierspanning ontspannen en verbetert de doorbloeding van het gezichtsweefsel. Pati\u00ebnten rapporteren vaak vermindering van pijnfrequentie en -intensiteit na een behandelreeks.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij aangezichtspijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig bij aangezichtspijn. Steriele eenmalige naalden worden voorzichtig geplaatst door een erkend acupuncturist. De behandeling kan worden gecombineerd met reguliere zorg en is vrij van ernstige bijwerkingen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij aangezichtspijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel pati\u00ebnten ervaren al na twee tot vier sessies verlichting. Voor een duurzaam resultaat is een reeks van vijf tot acht behandelingen aan te raden. De mate van verbetering hangt samen met de onderliggende oorzaak en de duur van de klachten.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor aangezichtspijn vergoed?",
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
          name: "Acupunctuur bij Aangezichtspijn",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-aangezichtspijn",
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
            <span className="text-[#1F3A36]">Acupunctuur bij Aangezichtspijn</span>
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
              Pijn in het gezicht kan vele oorzaken hebben: van geprikkelde gezichtszenuwen en overbelaste kaakspieren
              tot ontstoken bijholten of spanning in de nek. Acupunctuur pakt de klacht aan bij de wortel en geeft
              verlichting zonder bijwerkingen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300"
              >
                Maak een afspraak
              </a>
              <Link
                href="/klachten/aangezichtspijn"
                className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300"
              >
                Meer over aangezichtspijn
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
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
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Aangezichtspijn is een verzamelterm voor pijn die zich manifesteert in het gezicht: rondom de ogen,
                wangen, kaak, mond of voorhoofd. De pijn kan stomp en voortdurend zijn, maar ook aanvalsgewijs,
                scherp of branderig. Oorzaken lopen uiteen van problemen met de trigeminuszenuw en kaakgewricht
                (TMJD) tot bijholteontsteking, tandpijn of zelfs spierspanning door stress.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Idiopathische aangezichtspijn &mdash; waarbij geen duidelijke medische oorzaak wordt gevonden &mdash;
                is een veelvoorkomend en frustrerend probleem. Mensen worden soms van arts naar specialist gestuurd
                zonder afdoende verklaring of oplossing. Acupunctuur biedt in dergelijke gevallen een holistische
                benadering die symptomen en onderliggende patronen tegelijk aanpakt.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Afhankelijk van de oorzaak kan aangezichtspijn gepaard gaan met hoofdpijn, oorpijn, nekklachten of
                gevoelloosheid in het gezicht. Een grondige intake bij de acupuncturist brengt het volledige patroon
                in kaart.
              </p>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe helpt acupunctuur bij aangezichtspijn?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de Traditionele Chinese Geneeskunde lopen de Maag-, Galblaas- en Dikkedarm-meridianen door het
                gezicht. Stagnatie in deze meridianen door koude, hitte of emotionele spanning leidt tot pijn en
                spanningsgevoelens. Acupunctuur herstelt de vrije doorstroming van Qi en bloed, waardoor de pijn
                verlicht en het weefsel beter gevoed wordt.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit westerse geneeskunde moduleert acupunctuur het pijnsignaal via het centrale en perifere
                zenuwstelsel. Naaldstimulatie in lokale punten en op afstand gelegen punten (bijv. handen en voeten)
                stimuleert de afgifte van endorfines en reguleert ontstekingsprocessen. Bij spiergerelateerde
                aangezichtspijn kan dry needling van triggerpoints in de kaak- en nekspieren directe verlichting geven.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Is de aangezichtspijn mede veroorzaakt door bijholteontsteking, dan werkt acupunctuur ook op de
                luchtwegen en het immuunsysteem om ontsteking te verminderen en de afvoer van slijm te bevorderen.
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
                De intake begint met een uitgebreid gesprek over de locatie, aard en uitlokkende factoren van uw pijn,
                evenals uw algehele gezondheid, slaap, spijsvertering en emotionele toestand. Op basis hiervan stelt
                de acupuncturist een TCG-diagnose en behandelplan op.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Naalden worden geplaatst in het gezicht (wangen, kaakrand, voorhoofd, rondom ogen), in de schedel
                en in punten op handen, polsen en voeten. De combinatie van lokale en distale punten zorgt voor een
                breed en effectief effect. De sessie duurt gemiddeld vijfenveertig minuten.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Na afloop ontvangt u adviezen over warmte- of koudetherapie, ontspanningsoefeningen en eventuele
                voedingsaanpassingen die de behandeling ondersteunen.
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
                Voor acute aangezichtspijn volstaan doorgaans vier tot zes sessies, wekelijks gepland. Bij chronische
                of complexe klachten wordt een langere reeks aanbevolen. Na de startreeks wordt geëvalueerd of
                onderhoudsbehandelingen wenselijk zijn.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Pati&euml;nten met een bijholteontsteking als oorzaak ervaren vaak al na twee sessies een duidelijke
                verbetering in de druk- en pijnklachten. Bij zenuwgerelateerde aangezichtspijn is meer geduld nodig.
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
                  "Mensen met chronische of terugkerende pijn in het gezicht",
                  "Pati\u00ebnten met kaakklachten of TMJD",
                  "Personen met bijholteontsteking als pijnoorzaak",
                  "Mensen bij wie geen duidelijke medische oorzaak is gevonden",
                  "Iedereen met spanning in kaak, nek of hoofd",
                  "Pati\u00ebnten die medicatiegebruik willen verminderen",
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

            {/* Gerelateerd */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-6">
                Aangezichtspijn kan samenhangen met trigeminusneuralgie, hoofdpijn of sinusitis. Bekijk ook de
                verwante behandelingen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="/behandelingen/acupunctuur-trigeminus-neuralgie"
                  className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Acupunctuur bij Trigeminusneuralgie
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
                  href="/behandelingen/acupunctuur-sinusitis"
                  className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-right-linear"
                    className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Acupunctuur bij Sinusitis
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
                Acupunctuur bij aangezichtspijn in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Acupunctuur Zaandam is bereikbaar vanuit de gehele Zaanstreek, inclusief Zaandijk, Koog aan de Zaan,
                Wormerveer, Krommenie en Assendelft. Ook inwoners van Amsterdam-Noord en Purmerend vinden de weg naar
                onze praktijk. U kunt rekenen op een persoonlijk behandelplan en korte wachttijden.
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
                Antwoorden op de meest gestelde vragen over acupunctuur bij aangezichtspijn.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij aangezichtspijn?",
                  a: "Acupunctuur kan effectief zijn bij verschillende vormen van aangezichtspijn. Door punten in het gezicht, op de schedel en in de nek te behandelen, wordt de pijndrempel verhoogd, wordt spierspanning ontspannen en verbetert de doorbloeding van het gezichtsweefsel. Pati\u00ebnten rapporteren vaak vermindering van pijnfrequentie en -intensiteit na een behandelreeks.",
                },
                {
                  q: "Is acupunctuur veilig bij aangezichtspijn?",
                  a: "Ja, acupunctuur is veilig bij aangezichtspijn. Steriele eenmalige naalden worden voorzichtig geplaatst door een erkend acupuncturist. De behandeling kan worden gecombineerd met reguliere zorg en is vrij van ernstige bijwerkingen.",
                },
                {
                  q: "Hoe snel merk je resultaat bij aangezichtspijn?",
                  a: "Veel pati\u00ebnten ervaren al na twee tot vier sessies verlichting. Voor een duurzaam resultaat is een reeks van vijf tot acht behandelingen aan te raden. De mate van verbetering hangt samen met de onderliggende oorzaak en de duur van de klachten.",
                },
                {
                  q: "Wordt acupunctuur voor aangezichtspijn vergoed?",
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
        <section
          id="contact"
          aria-labelledby="cta-aangezichtspijn-titel"
          className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative"
        >
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  id="cta-aangezichtspijn-titel"
                  className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Verlichting van aangezichtspijn begint hier
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Plan een intake in Zaandam en ontdek wat acupunctuur voor uw aangezichtspijn kan betekenen.
                  Geen verwijzing nodig, geen wachtlijst.
                </p>
                <a
                  href="https://wa.me/31657998330"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm px-8 py-3.5 shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  WhatsApp ons
                </a>
              </div>
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  id="D8uouGkFZH4Alr37y5z4_behandeling_aangezichtspijn"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  title="Afspraak maken voor aangezichtspijn behandeling"
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
