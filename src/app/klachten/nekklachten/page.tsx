import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Nekklachten Zaandam | Stijve Nek & Nekpijn",
  description:
    "Effectieve behandeling van nekpijn, stijve nek, uitstralingspijn naar arm en cervicale spondylose met acupunctuur in Zaandam. Ontdek hoe TCG uw nek ontspant.",
  keywords: [
    "acupunctuur nekklachten",
    "nekpijn behandeling zaandam",
    "stijve nek acupunctuur",
    "cervicale spondylose",
    "uitstralingspijn arm nek",
    "whiplash behandeling acupunctuur",
    "acupunctuur nek zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/nekklachten",
      name: "Acupunctuur bij Nekklachten in Zaandam",
      description:
        "Uitgebreide informatie over de behandeling van nekpijn, stijve nek, cervicale spondylose, whiplash en uitstralingspijn naar de arm met acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Nekklachten" },
        { "@type": "MedicalCondition", name: "Cervicale spondylose" },
        { "@type": "MedicalCondition", name: "Whiplash" },
        { "@type": "MedicalCondition", name: "Uitstralingspijn arm" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Nekklachten",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij chronische nekpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Een Cochrane systematische review (Trinh et al., 2006) toonde matig sterk bewijs dat acupunctuur effectief is bij chronische nekpijn. In de klinische praktijk zien we dat de meeste patiënten na een behandeltraject van 6 tot 10 sessies significant minder pijn en meer beweeglijkheid ervaren.",
          },
        },
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij uitstralingspijn naar mijn arm?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, wanneer de uitstralingspijn veroorzaakt wordt door een zenuwwortelprikkeling in de nek (cervicaal, C5–C8), kan acupunctuur effectief zijn. Door te behandelen op de bijbehorende meridianen langs de nek en arm verminderen we de lokale ontsteking rondom de zenuwwortel en ontspannen de omliggende spieren die extra druk geven.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig voor nekklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute nekpijn (zoals na een verkeerde beweging of slaaphouding) volstaan doorgaans 3 tot 6 behandelingen. Bij chronische klachten, whiplash of cervicale spondylose is een langer traject van 8 tot 12 sessies realistischer om structureel herstel te bewerkstelligen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor nekklachten vergoed door de zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen (NVA / TCMA). Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering. Dit gaat niet ten koste van uw verplichte eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function NekklachtenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* Breadcrumb — fixed below shared header (~110px) */}
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
            <span className="text-[#1F3A36]">Nekklachten</span>
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
                Pijnklachten &amp; Beweging
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>

            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur bij Nekklachten in Zaandam
            </h1>

            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Nekpijn, een stijve nek of tintelingen die uitstralen naar uw schouder en arm zijn
              meer dan ongemakkelijk; ze belemmeren uw dagelijks leven van &lsquo;s ochtends wakker
              worden tot &lsquo;s avonds achter een scherm zitten. Acupunctuur lost de diepe
              spierspanning op, vermindert zenuwirritatie en herstelt de soepelheid van uw nek op
              een veilige, medicijnvrije manier.
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

        {/* Deep Dive Content */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            {/* Featured Snippet — targets "Helpt acupunctuur bij nekklachten?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur ontspant verkrampte nekspieren, verbetert de doorbloeding en verlicht zenuwpijn in nek en schouders. Studies tonen aan dat het effectief is bij zowel acute spierspanning als chronische nekklachten door houding, stress of whiplash — ook wanneer reguliere behandelingen onvoldoende resultaat geven.
              </p>
            </div>

            {/* Wat zijn nekklachten */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat zijn nekklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                De nek (cervicale wervelkolom) bestaat uit zeven wervels omgeven door een complex
                netwerk van spieren, pezen, zenuwen en tussenwervelschijven. Dit gebied is
                bijzonder kwetsbaar voor overbelasting en spanning. In onze praktijk in Zaandam
                zien we een aantal terugkerende vormen van nekklachten:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Stijve nek en acute nekpijn
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Een plotselinge blokkering of verkramping van de nekspieren, vaak na een
                      verkeerde slaaphouding of onverwachte beweging. De pijn is scherp en maakt
                      hoofd draaien nauwelijks mogelijk.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Cervicale spondylose (slijtage)
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Slijtage van de tussenwervelschijven en wervels in de halswervelkolom.
                      Veroorzaakt sluimerende pijn, stijfheid en soms uitstralingspijn naar de arm.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Uitstralingspijn naar schouder, arm of hand
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Wanneer een zenuwwortel in de nek geprikkeld of bekneld raakt (cervicale
                      radiculopathie, C5–C8), kan dit tintelingen, gevoelloosheid of brandende pijn
                      langs de gehele arm veroorzaken. Dit staat los van{" "}
                      <Link href="/klachten/schouderklachten" className="underline hover:text-[#4A6559] transition-colors">
                        schouderklachten
                      </Link>
                      , al kunnen beide samen voorkomen.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Whiplash
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Een plotselinge zweepslag-beweging van de nek, typisch na een verkeersongeval.
                      Klachten kunnen weken tot maanden aanhouden en omvatten nekpijn, hoofdpijn,
                      duizeligheid en concentratieproblemen.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Spanningsgerelateerde nekpijn en{" "}
                      <Link href="/klachten/hoofdpijn" className="underline hover:text-[#4A6559] transition-colors">
                        hoofdpijn
                      </Link>
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Chronische spierspanning door stress en langdurig schermwerk trekt omhoog naar
                      de nek en schedelbasis, wat leidt tot terugkerende spanningshoofdpijn.
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
                      Pijn bij het draaien of schuin houden van het hoofd
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Ochtendstijfheid die langzaam loskomt
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Hoofdpijn vanuit de nek naar de schedelbasis
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Tintelingen of gevoelloosheid in arm of hand
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Vermoeidheid in de nekspieren na lichte inspanning
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
                      Langdurig scherm- of bureauwerk
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Verkeerde slaaphouding of kussen
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Stress en chronische spierspanning
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Whiplash of ander trauma
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Slijtage (spondylose) of hernia cervicalis
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
                Hoe acupunctuur kan helpen bij nekklachten
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                    In de Chinese geneeskunde wordt nekpijn gezien als een Bi-syndroom: een
                    blokkade van Qi en Bloed in de meridianen ter hoogte van de nek. De Galblaas-
                    en Dunne Darm-meridianen lopen langs de zijkant en achterkant van de nek en
                    zijn bij nekklachten vrijwel altijd betrokken. Externe pathogenen als Koude,
                    Wind en Vochtigheid kunnen in deze meridianen doordringen na overkoeling of
                    tocht, waardoor de doorstroming blokkeert en pijn ontstaat. Stress en emoties
                    (woede, frustratie, overmatige prestatiedrang) veroorzaken Lever-Qi stagnatie,
                    die de nekspieren verkrampt vanuit binnenuit. Acupunctuur heft deze blokkades
                    op en herstelt de vrije doorstroming van Qi en Bloed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                    Vanuit een westers perspectief werkt acupunctuur bij nekklachten langs
                    meerdere fysiologische mechanismen:
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Ontspanning van hypertone nekspieren:
                      </strong>{" "}
                      De naalden ontspannen verkrampte spierpartijen (trigger points) direct,
                      waardoor de nek soepeler beweegt en de pijn afneemt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Verbetering van lokale doorbloeding:
                      </strong>{" "}
                      Betere microcirculatie in de nekweefsels versnelt herstel en vermindert
                      weefseloedeem rondom geprikkelde zenuwwortels.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Vermindering van zenuwwortelontsteking:
                      </strong>{" "}
                      Bij uitstralingspijn naar de arm remt acupunctuur de lokale
                      ontstekingsreactie rondom de beknelde zenuw, waardoor de pijngeleiding
                      afneemt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Modulatie van pijnsignalen (Gate Control):
                      </strong>{" "}
                      De prikkel van de naald activeert dikke zenuwvezels die &lsquo;de poort
                      sluiten&rsquo; voor pijnsignalen vanuit de nek naar de hersenen.
                    </li>
                  </ul>
                </div>
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
                Wetenschappelijk onderzoek naar acupunctuur bij nekpijn
              </h2>
              <p className="text-base font-light text-[#1F3A36]/70 max-w-2xl mx-auto">
                De effectiviteit van acupunctuur bij nekklachten is vastgelegd in onafhankelijk,
                internationaal erkend onderzoek.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">
                  Cochrane Systematic Review — Acupuncture for Neck Disorders (Trinh et al., 2006)
                </h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Een Cochrane systematische review door Trinh et al. (2006, <em>Cochrane Database
                  of Systematic Reviews</em>) analyseerde meerdere gerandomiseerde gecontroleerde
                  studies naar acupunctuur bij nekpijn. De review vond matig sterk bewijs dat
                  acupunctuur effectief is bij chronische nekpijn, zowel voor pijnvermindering als
                  voor verbetering van de bewegingsvrijheid. De onderzoekers concludeerden dat
                  acupunctuur een waardevolle aanvulling is op de reguliere zorg voor mensen met
                  aanhoudende nekklachten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">
                  WHO-erkenning voor nekpijn
                </h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  De Wereldgezondheidsorganisatie (WHO) erkent nekpijn officieel als een van de
                  aandoeningen waarvoor acupunctuur een bewezen therapeutische indicatie vormt.
                  Dit is gebaseerd op een internationale beoordeling van de beschikbare
                  klinische evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wat kunt u verwachten & Voor wie */}
        <article className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat kunt u verwachten van een behandeling?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Het eerste consult begint met een uitgebreide intake. We bespreken niet alleen
                uw nekpijn, maar ook uw slaap, energieniveau, stressniveau en levensstijl.
                Aangevuld met een traditionele pols- en tongdiagnose geeft dit een volledig beeld
                van de onderliggende oorzaak vanuit TCG-perspectief.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Vervolgens worden flinterdunne, steriele naalden geplaatst op zorgvuldig
                geselecteerde punten: lokaal in de nek en op distale punten langs de armen en
                benen. Bij veel nekklachten combineren we acupunctuur met tuina (Chinese
                therapeutische massage) om de verkrampte spieren direct los te maken voor
                het naaldwerk. Dit vergroot het effect aanzienlijk.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                <strong>Het behandelplan:</strong> Bij acute nekpijn zijn doorgaans 3 tot 6
                wekelijkse sessies voldoende. Voor chronische klachten, whiplash of cervicale
                spondylose is een traject van 8 tot 12 behandelingen realistisch. We evalueren
                het verloop na elke 4 sessies en stellen het plan bij waar nodig.
              </p>
            </section>

            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Voor wie is acupunctuur bij nekklachten geschikt?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Acupunctuur is bijzonder geschikt als u op zoek bent naar een veilige, natuurlijke
                aanpak zonder bijwerkingen van langdurig medicijngebruik. Het is een uitstekende
                keuze voor:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Kantoorwerkers met schermnek</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Whiplash-patiënten</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Chronische nekpijn-lijders</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Tintelingen of gevoelloosheid in arm</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5 sm:col-span-2">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Nekpijn in combinatie met{" "}
                    <Link href="/klachten/lage-rugklachten" className="underline hover:text-[#4A6559] transition-colors">
                      lage rugklachten
                    </Link>{" "}
                    of terugkerende{" "}
                    <Link href="/klachten/hoofdpijn" className="underline hover:text-[#4A6559] transition-colors">
                      hoofdpijn
                    </Link>
                  </span>
                </div>
              </div>
            </section>

            {/* Local SEO */}
            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acupunctuur bij nekklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk ligt centraal aan de Zaan en is uitstekend bereikbaar vanuit de
                gehele Zaanstreek. We behandelen wekelijks patiënten met nekklachten uit{" "}
                <strong>
                  Zaandam, Koog aan de Zaan, Assendelft, Wormerveer en Zaandijk
                </strong>
                . Heeft u moeite met autorijden door uw nekpijn? De praktijk is goed bereikbaar
                met het openbaar vervoer en parkeren is mogelijk vlak bij de ingang.
              </p>
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
                Veelgestelde vragen over nekklachten
              </h2>
            </div>

            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij chronische nekpijn?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Een Cochrane systematische review (Trinh et al., 2006) toonde matig sterk
                  bewijs dat acupunctuur effectief is bij chronische nekpijn. In de klinische
                  praktijk zien we dat de meeste patiënten na 6 tot 10 sessies significant minder
                  pijn ervaren en meer bewegingsvrijheid terugkrijgen. De behandeling werkt het
                  beste wanneer ze vroegtijdig wordt gestart, voordat de klachten volledig
                  chronisch zijn geworden.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur helpen bij uitstralingspijn naar mijn arm?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, wanneer de uitstralingspijn veroorzaakt wordt door een geprikkelde
                  zenuwwortel in de nek (cervicale radiculopathie, C5–C8). Acupunctuurpunten langs
                  de Galblaas-, Dunne Darm- en Drievoudige Verwarmer-meridianen lopen direct langs
                  de getroffen zenuwbanen. Door op deze punten te behandelen, verminderen we de
                  lokale ontsteking rondom de zenuwwortel, ontspannen we de omringende spieren die
                  extra druk veroorzaken, en moduleren we de pijngeleiding. Veel patiënten merken
                  dat de tintelingen en gevoelloosheid in de arm al na enkele sessies afnemen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoeveel behandelingen zijn nodig voor nekklachten?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Dit hangt af van de ernst en duur van uw klachten. Bij acute nekpijn — na een
                  nacht in een verkeerde houding of een plotselinge blokkering — zijn doorgaans 3
                  tot 6 behandelingen voldoende om de nek weer volledig los te krijgen. Bij
                  chronische nekpijn, whiplash of cervicale spondylose is een langer traject van
                  8 tot 12 sessies realistischer. Na elke 4 behandelingen evalueren we samen het
                  verloop en stellen we het plan bij.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor nekklachten vergoed door de zorgverzekering?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja. Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen (NVA /
                  TCMA). Hierdoor vergoeden de meeste zorgverzekeraars in Nederland de behandeling
                  (geheel of gedeeltelijk) vanuit de aanvullende verzekering. Omdat het onder de
                  aanvullende zorg valt, gaat de vergoeding{" "}
                  <strong>niet</strong> ten koste van uw verplichte eigen risico.
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
                { href: "/klachten/schouderklachten", label: "Schouderklachten" },
                { href: "/klachten/hoofdpijn", label: "Hoofdpijn" },
                { href: "/klachten/migraine", label: "Migraine" },
                { href: "/klachten/frozen-shoulder", label: "Frozen shoulder" },
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

        {/* CTA met boekingsplanner */}
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
                  Klaar om uw nek weer vrij te bewegen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Laat nekpijn, een stijve nek of tintelingen in uw arm uw dagelijks leven niet
                  langer beheersen. Boek direct een intake in onze praktijk in Zaandam via de
                  beveiligde online planner. Heeft u specifieke vragen over uw nekklachten? Stuur
                  gerust een WhatsApp bericht voor vrijblijvend advies.
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
                      id="D8uouGkFZH4Alr37y5z4_nekklachten"
                      title="Maak een afspraak"
                      loading="lazy"
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
