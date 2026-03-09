import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Whiplash Zaandam | Nekletsel & Sportblessures",
  description:
    "Whiplash na verkeersongeval of sportblessure? Acupunctuur in Zaandam verlicht nekpijn, hoofdpijn, duizeligheid en cognitieve klachten na een zweepslagletsel.",
  keywords: [
    "acupunctuur whiplash zaandam",
    "whiplash behandeling",
    "nekletsel acupunctuur",
    "zweepslagletsel behandeling zaandam",
    "sportblessure acupunctuur",
    "whiplash hoofdpijn duizeligheid",
    "acupunctuur na verkeersongeval",
    "cervicaal acceleratie-deceleratietrauma",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/whiplash",
      name: "Acupunctuur bij Whiplash in Zaandam",
      description:
        "Informatie over de behandeling van whiplash (cervicaal acceleratie-deceleratietrauma), sportblessures aan de nek en bijbehorende klachten zoals hoofdpijn, duizeligheid en cognitieve problemen met acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Whiplash" },
        { "@type": "MedicalCondition", name: "Cervicaal acceleratie-deceleratietrauma" },
        { "@type": "MedicalCondition", name: "Sportblessure nek" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Whiplash en cervicale sportblessures",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij whiplash?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur is effectief voor de behandeling van nekpijn, hoofdpijn en spierspanning na whiplash. De behandeling vermindert de lokale ontsteking, ontspant de verkrampte nekspieren en moduleert de pijngeleiding. Ook bij langer bestaande whiplash-klachten kan acupunctuur significante verlichting bieden.",
          },
        },
        {
          "@type": "Question",
          name: "Wanneer kan ik starten met acupunctuur na een whiplash?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "U kunt starten zodra de acute fase voorbij is, doorgaans na enkele dagen tot een week. Vroeg starten is aan te bevelen: hoe eerder de behandeling begint, hoe groter de kans dat klachten niet chronisch worden. Bij ernstige symptomen zoals aanhoudende duizeligheid of neurologische uitval raadpleeg eerst uw arts.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij whiplash?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij een ongecompliceerde whiplash zijn doorgaans 6 tot 10 behandelingen voldoende. Bij langer bestaande of complexe klachten met cognitieve symptomen is een traject van 10 tot 15 sessies realistischer. We evalueren na elke 4 behandelingen het verloop.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij whiplash vergoed door de zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, via de aanvullende verzekering. Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen NVA en TCMA. In geval van een verkeersongeval kan de behandeling mogelijk ook worden vergoed door de WA-verzekering van de tegenpartij. Neem voor meer informatie contact met ons op.",
          },
        },
      ],
    },
  ],
};

export default function WhiplashPage() {
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
            <span className="text-[#1F3A36]">Whiplash</span>
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
              Acupunctuur bij Whiplash in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Na een plotselinge zweepslagbeweging van de nek &mdash; of dit nu door een
              verkeersongeval, een val of een sportbotsing komt &mdash; kunnen nekpijn, aanhoudende
              hoofdpijn, duizeligheid en concentratieproblemen weken of maanden aanhouden. Acupunctuur
              ondersteunt het herstel op meerdere niveaus tegelijk: van spierspanning tot
              zenuwgeleiding.
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
            {/* Featured Snippet — targets "Helpt acupunctuur bij whiplash?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur verlicht whiplash-klachten door nekspieren te ontspannen, zenuwprikkeling te verminderen en de doorbloeding te verbeteren. Onderzoek toont aan dat acupunctuur nekpijn, hoofdpijn en stijfheid na whiplash significant vermindert — ook bij langdurige klachten die niet reageren op reguliere behandelingen.
              </p>
            </div>

            {/* Wat is whiplash */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is whiplash?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Whiplash, medisch aangeduid als cervicaal acceleratie-deceleratietrauma (CADT), is
                een letsel aan de zachte weefsels van de nek dat ontstaat door een plotselinge,
                ongecontroleerde voor-achterwaartse of zij-waartse beweging van het hoofd. Het meest
                voorkomende mechanisme is de achteraanrijding bij een verkeersongeval, maar ook
                sportongevallen (rugby, paardrijden, vechtsporten, ski&euml;n) of een val kunnen
                identiek letsel veroorzaken.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                De klachten na een whiplash zijn veelzijdiger dan alleen nekpijn. Veel pati&euml;nten
                beschrijven een breed spectrum van symptomen dat weken tot maanden na het letsel kan
                aanhouden of zelfs toenemen:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Nekpijn en stijfheid
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      De meest directe klacht na het trauma. De nekspieren (m. sternocleidomastoideus,
                      m. trapezius, diepe cervicale flexoren) verkrampen als beschermingsreactie en
                      veroorzaken een pijnlijke, beperkte bewegingsvrijheid.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Hoofdpijn
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Post-traumatische hoofdpijn is het op &eacute;&eacute;n na meest gerapporteerde
                      symptoom na whiplash. Typisch is een drukkend gevoel in het achterhoofd of
                      slapen, soms aanleiding gevend tot migraine-achtige aanvallen.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Duizeligheid en evenwichtsproblemen
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Prikkeling van de proprioceptoren in de nekgewrichten en cervicale zenuwen kan
                      leiden tot duizeligheid, wazig zicht en evenwichtsproblemen die het dagelijks
                      functioneren ernstig beperken.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Cognitieve klachten (whiplash brain fog)
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Concentratieproblemen, geheugenproblemen, mentale vermoeidheid en een gevoel
                      van &ldquo;watten in het hoofd&rdquo; komen voor bij een aanzienlijk deel van
                      de whiplash-pati&euml;nten, met name bij langere klachtenduur.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Sportblessures aan nek en bovenrug
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Naast verkeersongevallen behandelen we ook nekblessures ontstaan bij contact-
                      en krachtsport: rugby-tackles, judovallen, gym-ongelukken of zwemslagletsel.
                      Het behandelprincipe is vergelijkbaar met whiplash-herstel.
                    </span>
                  </div>
                </li>
              </ul>
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
                      Nekpijn en ochtendstijfheid
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Aanhoudende hoofdpijn of migraine
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Duizeligheid en evenwichtsproblemen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Tintelingen of gevoelloosheid in arm of hand
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Concentratie- en geheugenproblemen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Vermoeidheid en slaapproblemen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Pijn in schouders en bovenrug
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Veelvoorkomende oorzaken
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Achteraanrijding bij verkeersongeval
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Zijdelingse botsing of frontale aanrijding
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Contactsportblessure (rugby, judo, boksen)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Val van paard, fiets of ski
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Duikongeval (zwembad, zee)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Gewelddadig incident of val van hoogte
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
                Hoe acupunctuur kan helpen bij whiplash
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Traditionele Chinese Geneeskunde wordt een whiplash-trauma gezien als een
                    acute blokkade van Qi en Bloed in de nek-meridianen door extern geweld. Het
                    plotselinge trauma veroorzaakt een stagnatie in de Galblaas-, Dunne Darm- en
                    Blaas-meridianen langs de nek en achterhoofd, wat leidt tot pijn en stijfheid.
                    Tegelijkertijd kan het trauma de Shen (de geest, gezeteld in het Hart) verstoren,
                    wat de cognitieve klachten en slaapproblemen verklaart. Acupunctuur opent de
                    geblokkeerde meridianen, beweegt het gestagneerde Bloed en kalmeert de Shen,
                    waardoor zowel de fysieke als de mentale symptomen worden aangepakt.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Pijndemping:</strong> Acupunctuur
                      stimuleert de vrijmaking van endorfinen en activeert het dalende pijnremmende
                      systeem vanuit de hersenstam, waardoor de chronische pijn na whiplash
                      significant afneemt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Verbetering
                      van de microcirculatie in de beschadigde nekspieren en ligamenten bevordert het
                      weefselerstel, versnelt de resorptie van zwelling en vermindert de druk op
                      cervicale zenuwen die verantwoordelijk zijn voor uitstraling naar arm of hoofd.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontspanning:</strong> Trigger
                      point behandeling van de hypertone nekspieren na een whiplash (m.
                      sternocleidomastoideus, m. upper trapezius, suboccipitale spieren) verlicht
                      direct de spanning die bijdraagt aan hoofdpijn en duizeligheid.
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
                Bij de eerste afspraak brengen we het volledige klachtenpatroon in kaart: niet
                alleen de nekpijn, maar ook hoofdpijn, duizeligheid, slaapkwaliteit en cognitief
                functioneren. Bij whiplash is een holistische aanpak cruciaal. De acupunctuurpunten
                worden zorgvuldig geselecteerd: lokaal in de nek en achterhoofd, distaal langs de
                betrokken meridianen en systemisch om het zenuwstelsel te kalmeren.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Bij een ongecompliceerde whiplash zijn doorgaans 6 tot 10 behandelingen voldoende.
                Bij langer bestaande klachten of een complex klachtenpatroon met cognitieve
                symptomen is een traject van 10 tot 15 sessies realistischer. Vroeg starten is
                essentieel: hoe eerder met behandeling wordt begonnen, hoe groter de kans op
                volledig herstel.
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
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten na een verkeersongeval</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Sporters na een nekblessure</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met chronische whiplash-klachten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten met post-traumatische hoofdpijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5 sm:col-span-2">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Iedereen met cognitieve klachten na een nektrauma</span>
                </div>
              </div>
            </section>

            {/* Lokale SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij whiplash in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
                Na een verkeersongeval is de praktijk ook goed bereikbaar met het openbaar vervoer.
                Bij een schadeverzekering (WAM) kunnen de behandelkosten soms worden verhaald op de
                verzekeraar van de tegenpartij. Wij helpen u graag met de benodigde documentatie.
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
                  href="/klachten/nekklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Nekklachten
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/hoofdpijn"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Hoofdpijn
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link
                  href="/klachten/schouderklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Schouderklachten
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
                Veelgestelde vragen over whiplash
              </h2>
            </div>
            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij whiplash?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Acupunctuur is effectief voor de behandeling van nekpijn, hoofdpijn en
                  spierspanning na whiplash. De behandeling vermindert de lokale ontsteking,
                  ontspant de verkrampte nekspieren en moduleert de pijngeleiding. Ook bij langer
                  bestaande whiplash-klachten kan acupunctuur significante verlichting bieden.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wanneer kan ik starten met acupunctuur na een whiplash?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  U kunt starten zodra de acute fase voorbij is, doorgaans enkele dagen tot een week
                  na het trauma. Vroeg starten is aan te bevelen: hoe eerder de behandeling begint,
                  hoe groter de kans dat klachten niet chronisch worden. Bij ernstige symptomen zoals
                  aanhoudende duizeligheid, neurologische uitval, een aangezichtsletsel of
                  bewusteloosheid na het trauma raadpleeg eerst uw arts of huisarts.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig bij whiplash?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Bij een ongecompliceerde whiplash zijn doorgaans 6 tot 10 behandelingen voldoende.
                  Bij langer bestaande of complexe klachten met cognitieve symptomen, hoofdpijn of
                  duizeligheid is een traject van 10 tot 15 sessies realistischer. We evalueren na
                  elke 4 behandelingen het verloop en stellen het plan bij.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur bij whiplash vergoed door de zorgverzekering?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, via de aanvullende verzekering. Acupunctuur Zaandam is aangesloten bij de
                  erkende beroepsverenigingen NVA en TCMA. In geval van een verkeersongeval waarbij
                  een derde aansprakelijk is, kan de behandeling bovendien worden vergoed via de
                  WA-verzekering van de tegenpartij. Neem voor meer informatie contact met ons op,
                  wij helpen u graag bij het aanvragen van vergoeding.
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
        <section className="py-16 bg-[#FAF8F3] border-t border-[#1F3A36]/10">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Gerelateerde klachten
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/klachten/nekklachten", label: "Nekklachten" },
                { href: "/klachten/hoofdpijn", label: "Hoofdpijn" },
                { href: "/klachten/schouderklachten", label: "Schouderklachten" },
                { href: "/klachten/duizeligheid", label: "Duizeligheid" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#1F3A36]/10 hover:border-[#4A6559]/40 hover:bg-[#F2EDE3] transition-colors group"
                  >
                    <iconify-icon
                      icon="solar:alt-arrow-right-linear"
                      className="text-[#4A6559] group-hover:translate-x-0.5 transition-transform"
                    />
                    <span className="text-sm font-light text-[#1F3A36]">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
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
                  Wacht niet tot uw whiplash-klachten chronisch worden. Hoe eerder u start, hoe
                  groter de kans op volledig herstel. Boek een intake in onze praktijk in Zaandam
                  via de online planner, of stuur een WhatsApp-bericht voor vrijblijvend advies.
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
                      id="D8uouGkFZH4Alr37y5z4_whiplash"
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
