import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Frozen Shoulder Zaandam | Adhesieve Capsulitis",
  description:
    "Last van een bevroren schouder (frozen shoulder)? Acupunctuur in Zaandam verlicht pijn, verbetert de beweeglijkheid en versnelt herstel bij adhesieve capsulitis.",
  keywords: [
    "frozen shoulder acupunctuur",
    "bevroren schouder behandeling zaandam",
    "adhesieve capsulitis acupunctuur",
    "schouder stijfheid behandeling",
    "frozen shoulder zaandam",
    "acupunctuur schouder bewegingsbeperking",
    "bevroren schouder herstel",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/frozen-shoulder",
      name: "Acupunctuur bij Frozen Shoulder in Zaandam",
      description:
        "Uitgebreide informatie over de behandeling van frozen shoulder (adhesieve capsulitis) met acupunctuur in Zaandam. De drie fasen, symptomen, oorzaken en behandelmogelijkheden.",
      about: [
        { "@type": "MedicalCondition", name: "Frozen Shoulder" },
        { "@type": "MedicalCondition", name: "Adhesieve capsulitis" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Frozen shoulder (adhesieve capsulitis)",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur een frozen shoulder versneld laten herstellen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur vermindert pijn en ontsteking in de schouderkapsel, verbetert de doorbloeding van het gewricht en ontspant de omliggende spierspanning. Hierdoor kunnen oefeningen eerder en effectiever worden uitgevoerd, wat het herstelproces significant versnelt.",
          },
        },
        {
          "@type": "Question",
          name: "In welke fase van frozen shoulder helpt acupunctuur het best?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is in alle drie de fasen zinvol, maar het effect verschilt. In de bevriezingsfase (freezing) richt de behandeling zich primair op pijndemping en het afremmen van de ontstekingsreactie. In de bevroren fase (frozen) verbeteren we de bewegingsvrijheid door de kapselspanning te verminderen. In de ontdooifase (thawing) ondersteunen we het herstel en versnellen we de terugkeer van volledige bewegingsvrijheid.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij een bevroren schouder?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dat verschilt per fase en ernst van de klachten. Gemiddeld zijn 8 tot 15 behandelingen nodig, verspreid over 3 tot 5 maanden. We evalueren na elke 4 sessies en stemmen het plan af op uw vooruitgang.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor frozen shoulder vergoed door de zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur Zaandam is aangesloten bij erkende beroepsverenigingen (NVA / TCMA). De meeste aanvullende zorgverzekeringen vergoeden acupunctuurbehandelingen geheel of gedeeltelijk, zonder dat dit ten koste gaat van uw verplicht eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function FrozenShoulderPage() {
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
            <span className="text-[#1F3A36]">Frozen Shoulder</span>
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
              Acupunctuur bij Frozen Shoulder in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een bevroren schouder treft u op het meest onverwachte moment: pijn die u uit uw slaap
              houdt, een arm die u nauwelijks meer kunt heffen. Adhesieve capsulitis is een van de
              meest invaliderende schouderklachten, maar acupunctuur biedt effectieve ondersteuning
              in elke fase &mdash; van pijndemping tot herstel van volledige bewegingsvrijheid.
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

            {/* Wat is frozen shoulder */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is frozen shoulder?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Frozen shoulder, medisch adhesieve capsulitis genaamd, is een aandoening waarbij de
                gewrichtskapsel van het schoudergewricht dikker wordt, krimpt en verklevingen
                (adhesies) vormt. Dit leidt tot ernstige bewegingsbeperking en pijn. De exacte
                oorzaak is in veel gevallen niet duidelijk; de aandoening kan spontaan ontstaan,
                maar wordt vaker gezien na een periode van immobilisatie van de schouder, bij
                diabetes mellitus, schildklieraandoeningen of na een hartinfarct.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Frozen shoulder verloopt klassiek in drie fasen, elk met een eigen karakter en
                duur:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#8A6B3D] pl-6 py-2">
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">
                    Fase 1: De bevriezingsfase (<em>Freezing</em>) &mdash; 2 tot 9 maanden
                  </h3>
                  <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                    Geleidelijk toenemende pijn in de schouder, ook in rust en &lsquo;s nachts. De
                    bewegingsvrijheid neemt snel af. Patiënten kunnen de arm steeds moeilijker
                    opheffen, draaien of achter de rug brengen. De pijn is scherp en wordt erger
                    bij beweging aan het einde van het bereikbare bereik.
                  </p>
                </div>
                <div className="border-l-4 border-[#4A6559] pl-6 py-2">
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">
                    Fase 2: De bevroren fase (<em>Frozen</em>) &mdash; 4 tot 12 maanden
                  </h3>
                  <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                    De hevige pijn neemt enigszins af, maar de schouder is zwaar beperkt in
                    beweging. Dagelijkse handelingen zoals aankleden, haarkammen of iets van een
                    hoge plank pakken zijn nauwelijks of niet mogelijk. De gewrichtskapsel is op
                    zijn stijfst.
                  </p>
                </div>
                <div className="border-l-4 border-[#1F3A36]/30 pl-6 py-2">
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">
                    Fase 3: De ontdooifase (<em>Thawing</em>) &mdash; 5 tot 24 maanden
                  </h3>
                  <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                    De bewegingsvrijheid keert geleidelijk terug. Pijn neemt verder af. Zonder
                    behandeling kan dit proces jaren duren en kan volledige herstel uitblijven.
                    Met gerichte therapie zoals acupunctuur wordt dit proces aanzienlijk versneld.
                  </p>
                </div>
              </div>
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
                      Diepe, zeurende pijn in de schouder en bovenarm
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Nachtelijke pijn die slaap verstoort
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Ernstig beperkte bewegingsvrijheid in alle richtingen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Onmogelijkheid arm boven schouderhoogte te heffen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Pijn bij aankleden of achter de rug reiken
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Spierverlies rondom de schouder door disuse
                    </li>
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
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Idiopathisch (spontaan, oorzaak onbekend)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Immobilisatie na operatie of blessure
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Diabetes mellitus (type 1 en type 2)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Schildklieraandoeningen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Hartinfarct of longaandoening
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Cervicale hernia met referred pain naar schouder
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
                Hoe acupunctuur kan helpen bij frozen shoulder
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de Traditionele Chinese Geneeskunde wordt frozen shoulder beschouwd als een
                    ernstige stagnatie van Qi en Bloed in het schoudergewricht, vaak in combinatie
                    met een indringing van Koude en Wind-Vochtigheid in de meridianen. De Longen-,
                    Dikke Darm-, Dunne Darm- en Drievoudige Verwarmer-meridianen lopen over de
                    schouder en bovenarm en raken geblokkeerd. Bij langere duur van de klachten
                    spreekt de TCG ook van een onderliggende Qi- of Bloed-defici&euml;ntie die de
                    voeding van de gewrichtskapsel vermindert. Acupunctuur opent de meridianen in de
                    schouder, verdrijft de pathogenen en voedt de weefsels aan, waardoor de
                    verklevingen geleidelijk loslaten.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Pijndemping:</strong> Acupunctuur
                      stimuleert de aanmaak van endorfinen en moduleert de verwerking van pijnsignalen
                      in het ruggenmerg en de hersenen, waardoor de ondraaglijke nachtpijn van de
                      bevriezingsfase significant afneemt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Door de
                      microcirculatie in de gewrichtskapsel en het omliggende weefsel te verbeteren,
                      worden ontstekingsmediatoren sneller afgevoerd en wordt de aanmaak van
                      beschadigend littekenweefsel (fibrose) geremd.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Ontspanning:</strong> Trigger
                      point behandeling van de m. infraspinatus, m. subscapularis en m. teres minor
                      ontspant de rotatorenmanchet, waardoor de compressie op het gewricht afneemt
                      en fysiotherapeutische oefeningen beter uitvoerbaar worden.
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
                Het eerste consult begint met een gedetailleerde intake en functionele beoordeling
                van de schouderbewegelijkheid. We stellen vast in welke fase u zich bevindt en
                stemmen het behandelplan hier op af. Naalden worden geplaatst op lokale punten
                rondom de schouder, evenals op specifieke distale punten aan de hand en het been
                die de schoudergerelateerde meridianen activeren. Voor de bevriezingsfase is het
                accent op pijnverlichting; in de bevroren en ontdooifase verschuift de focus naar
                verbetering van de bewegingsvrijheid.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Frozen shoulder vraagt geduld: we adviseren gemiddeld 8 tot 15 behandelingen
                verspreid over 3 tot 5 maanden. In combinatie met gerichte oefeningen thuis levert
                acupunctuur het beste resultaat. We werken regelmatig samen met fysiotherapeuten
                wanneer een gecombineerde aanpak gewenst is.
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
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten in de bevriezingsfase met hevige pijn</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen met een ernstig beperkte schouderbewegelijkheid</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Pati&euml;nten met diabetes die gevoeliger zijn voor frozen shoulder</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Iedereen die het herstelproces wil versnellen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5 sm:col-span-2">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen bij wie injecties of reguliere fysiotherapie onvoldoende resultaat hebben gegeven</span>
                </div>
              </div>
            </section>

            {/* Lokale SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij frozen shoulder in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en goed bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
                Een bevroren schouder maakt autorijden vaak moeilijk; onze praktijk is uitstekend
                bereikbaar met het openbaar vervoer. Neem contact op voor een intake.
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
                  href="/klachten/schouderklachten"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  Schouderklachten
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
                  href="/klachten/rsi"
                  className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors"
                >
                  RSI
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
                Veelgestelde vragen over frozen shoulder
              </h2>
            </div>
            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur een frozen shoulder versneld laten herstellen?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Acupunctuur vermindert pijn en ontsteking in de schouderkapsel, verbetert de
                  doorbloeding van het gewricht en ontspant de omliggende spierspanning. Hierdoor
                  kunnen oefeningen eerder en effectiever worden uitgevoerd, wat het herstelproces
                  significant versnelt ten opzichte van afwachten.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  In welke fase van frozen shoulder helpt acupunctuur het best?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur is in alle drie de fasen zinvol, maar het doel verschilt. In de
                  bevriezingsfase richt de behandeling zich primair op pijndemping en het afremmen
                  van de ontstekingsreactie. In de bevroren fase verbeteren we de bewegingsvrijheid
                  door de kapselspanning te verminderen. In de ontdooifase ondersteunen we het herstel
                  en versnellen we de terugkeer van volledige beweeglijkheid.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig bij een bevroren schouder?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Dat verschilt per fase en ernst van de klachten. Gemiddeld zijn 8 tot 15
                  behandelingen nodig, verspreid over 3 tot 5 maanden. Frozen shoulder is een
                  aandoening die van nature een lange hersteltijd heeft; acupunctuur verkort deze
                  tijd aanzienlijk. We evalueren na elke 4 sessies en stemmen het plan af op uw
                  vooruitgang.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor frozen shoulder vergoed door de zorgverzekering?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Acupunctuur Zaandam is aangesloten bij erkende beroepsverenigingen (NVA / TCMA).
                  De meeste aanvullende zorgverzekeringen vergoeden acupunctuurbehandelingen geheel
                  of gedeeltelijk, zonder dat dit ten koste gaat van uw verplicht eigen risico.
                  Controleer uw polisvoorwaarden voor de exacte dekkingsomvang.
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
                  Wacht niet totdat uw schouder volledig bevroren is. Hoe eerder u start met
                  behandeling, hoe sneller het herstel. Boek een intake in onze praktijk in Zaandam
                  via de online planner, of stuur een WhatsApp-bericht voor vrijblijvend advies over
                  uw situatie.
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
                      id="D8uouGkFZH4Alr37y5z4_frozen_shoulder"
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
