import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Lage Rugklachten Zaandam | Spit & Hernia",
  description:
    "Natuurlijke behandeling voor lage rugklachten, spit en hernia in Zaandam. Acupunctuur vermindert pijn en stijfheid. Plan direct een effectieve behandeling.",
  keywords: [
    "acupunctuur lage rugpijn",
    "acupunctuur rugklachten",
    "acupunctuur hernia",
    "acupunctuur spit",
    "acupunctuur rugpijn Zaandam",
    "behandeling lage rugpijn acupunctuur",
    "natuurlijke behandeling lage rugpijn",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/lage-rugklachten",
      name: "Acupunctuur bij Lage Rugklachten in Zaandam",
      description:
        "Uitgebreide informatie over de behandeling van lage rugklachten, spit, hernia en chronische stijfheid met acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Lage rugpijn" },
        { "@type": "MedicalCondition", name: "Spit (Lumbago)" },
        { "@type": "MedicalCondition", name: "Hernia (HNP)" },
        { "@type": "MedicalCondition", name: "Chronische rugklachten" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Lage rugklachten",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij een hernia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan zeer effectief zijn bij een hernia. Het geneest de uitstulping van de tussenwervelschijf niet direct, maar het vermindert de zwelling, remt de zenuwontsteking en ontspant de omliggende spieren. Hierdoor neemt de (uitstralende) pijn vaak aanzienlijk af en krijgt het lichaam de ruimte om op natuurlijke wijze te herstellen.",
          },
        },
        {
          "@type": "Question",
          name: "Doet acupunctuur pijn in een al pijnlijke onderrug?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nee. De naaldjes zijn extreem dun. U voelt hooguit een klein prikje of een dof, tintelend gevoel (Qi-sensatie). Omdat de rugspieren bij rugklachten vaak al verkrampt zijn, prikken we heel voorzichtig en oppervlakkig. Vaak merkt u tijdens de behandeling al dat de spieren zich beginnen te ontspannen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je effect bij lage rugpijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij acute rugpijn, zoals spit, ervaren veel mensen na 1 tot 3 behandelingen al verlichting en meer bewegingsvrijheid. Bij chronische rugklachten of een hernia duurt het vaak iets langer en is een traject van 5 tot 8 behandelingen realistisch om structurele verbetering op te bouwen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor rugklachten vergoed door de zorgverzekering?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, indien u aanvullend verzekerd bent voor alternatieve geneeswijzen. Omdat onze praktijk is aangesloten bij de erkende beroepsverenigingen, vergoeden vrijwel alle grote zorgverzekeraars (een deel van) de behandeling. Dit gaat bovendien niet ten koste van uw eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function LageRugklachtenPage() {
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
            <span className="text-[#1F3A36]">Lage rugklachten</span>
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
              Acupunctuur bij Lage Rugklachten in Zaandam
            </h1>

            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Lage rugklachten behoren tot de meest voorkomende, maar ook meest belemmerende
              lichamelijke klachten. Of u nu plotseling bent &lsquo;doorgeschoten&rsquo; (spit),
              kampt met een hernia, of al jarenlang last heeft van een zeurende, stijve onderrug;
              acupunctuur biedt een veilige, natuurlijke en uiterst effectieve behandelmethode om
              pijn te verlichten en uw bewegingsvrijheid terug te krijgen.
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

            {/* Wat zijn lage rugklachten */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat zijn lage rugklachten precies?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Lage rugpijn (ook wel lumbale pijn genoemd) concentreert zich in het gebied tussen
                de onderste ribben en de bilplooien. De pijn kan variëren van een doffe, constant
                aanwezige spanning tot scherpe, stekende pijnscheuten bij specifieke bewegingen.
                Binnen de praktijk in Zaandam zien we grofweg vier hoofdcategorieën:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Spit (Lumbago of acute lage rugpijn)
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Een acute, vaak plotselinge verkramping van de spieren in de onderrug, meestal
                      veroorzaakt door een verkeerde beweging. De pijn is fel en maakt rechtop staan
                      vaak onmogelijk.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Hernia (Hernia Nuclei Pulposi)
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Een uitstulping van een tussenwervelschijf die drukt op een zenuwbaan. Dit
                      veroorzaakt vaak diepe zenuwpijn die uitstraalt naar de bil of het been
                      (vergelijkbaar met{" "}
                      <Link href="/klachten/ischias" className="underline hover:text-[#4A6559] transition-colors">
                        ischias
                      </Link>
                      ).
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Chronische lage rugpijn
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Wanneer de rugpijn langer dan 12 weken aanhoudt, spreken we van chronische
                      klachten. Dit put het lichaam uit en gaat vaak gepaard met vermoeidheid.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">
                      Stijfheid in de onderrug
                    </strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">
                      Een verminderde mobiliteit, vooral merkbaar in de ochtend (startstijfheid) of
                      na langdurig zitten.
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
                      Zeurende of stekende pijn in de onderrug
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Ernstige stijfheid bij het opstaan
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Uitstralende pijn naar bil, dijbeen of kuit (ischias)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Sterk verminderde mobiliteit
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Verergering van pijn bij zitten, bukken of tillen
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
                      Chronische spierspanning
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Een structureel verkeerde werkhouding
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Fysieke overbelasting (zwaar tillen)
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Slijtage of een hernia
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Langdurig zitten / sedentaire levensstijl
                    </li>
                    <li className="flex items-center gap-2">
                      <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559]" />
                      Emotionele stress en spanning
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
                Hoe acupunctuur kan helpen bij lage rugklachten
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                    Volgens de Chinese geneeskunde ontstaan pijn en stijfheid door een verstoring of
                    stagnatie van Qi (levensenergie) en bloed in de meridianen (energiebanen) van de
                    rug. Een bekende uitspraak is:{" "}
                    <em>&ldquo;Als er vrije doorstroming is, is er geen pijn.&rdquo;</em>{" "}
                    Rugklachten kunnen ontstaan door externe invloeden zoals &lsquo;Koude&rsquo; en
                    &lsquo;Vocht&rsquo; die in de spieren trekken, of door een onderliggende leegte
                    van de Nier-energie, wat de basis vormt voor een sterke onderrug en botten.
                    Acupunctuur heft deze stagnaties op en herstelt de balans.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                    Vanuit een Westers, modern medisch perspectief is de werking van een natuurlijke
                    behandeling van lage rugpijn met acupunctuur eveneens goed te verklaren:
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Stimulatie van het zenuwstelsel:
                      </strong>{" "}
                      Het plaatsen van de naalden zendt signalen naar het ruggenmerg en de hersenen,
                      wat de pijnperceptie verandert.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Vrijgave van endorfines:
                      </strong>{" "}
                      Acupunctuur stimuleert het lichaam om eigen, krachtige pijnstillende hormonen
                      (zoals endorfines en serotonine) aan te maken.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Vermindering van ontstekingen:
                      </strong>{" "}
                      Lokale prikkeling bevordert de afgifte van ontstekingsremmende stoffen,
                      cruciaal bij bijvoorbeeld een hernia of spit.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">
                        Verbetering van doorbloeding:
                      </strong>{" "}
                      Verkrampte spieren (vaak de oorzaak van stijfheid) ontspannen zich en krijgen
                      zuurstofrijk bloed aangevoerd, wat het weefselherstel versnelt.
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
                Wetenschappelijk onderzoek naar acupunctuur bij lage rugpijn
              </h2>
              <p className="text-base font-light text-[#1F3A36]/70 max-w-2xl mx-auto">
                Dat acupunctuur bij rugklachten effectief is, wordt steeds vaker bevestigd door
                grootschalig, onafhankelijk Westers wetenschappelijk onderzoek.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">
                  JAMA Internal Medicine (Grootschalige meta-analyse)
                </h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Een van de meest gerenommeerde medische tijdschriften, JAMA, publiceerde een
                  studie onder ruim 17.000 patiënten. De conclusie was helder: acupunctuur is
                  effectief voor de behandeling van chronische pijn, waaronder lage rugpijn, en de
                  effecten zijn niet slechts te danken aan een placebo-effect. Patiënten ervaarden
                  significante vermindering van pijnklachten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">
                  Cochrane Review – Acupuncture for Low Back Pain
                </h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Onafhankelijke Cochrane reviews tonen aan dat acupunctuur, vooral in combinatie
                  met reguliere zorg, resulteert in betere pijnverlichting en een significante
                  verbetering van het functioneren in het dagelijks leven bij mensen met chronische
                  lage rugklachten.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1F3A36]/5">
                <h3 className="text-base font-medium text-[#1F3A36] mb-2">
                  Onderzoek door het NIH (National Institutes of Health)
                </h3>
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  Het Amerikaanse NIH raadt acupunctuur officieel aan als een redelijke
                  behandeloptie voor mensen met chronische lage rugpijn. Studies tonen aan dat de
                  behandeling helpt om stijfheid te verminderen, mobiliteit te vergroten en de
                  afhankelijkheid van zware pijnmedicatie aanzienlijk te verlagen.
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
                Tijdens het eerste consult (intake) bespreken we uw klachten uitgebreid. We kijken
                niet alleen naar de pijn in uw rug, maar naar uw algehele gezondheid, slaap,
                stressniveau en spijsvertering. Hier hoort ook een traditionele pols- en
                tongdiagnose bij.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Daarna volgt de acupunctuurbehandeling. Flinterdunne, steriele naaldjes worden
                geplaatst op specifieke punten, vaak op de benen, voeten, armen en natuurlijk de
                (onder)rug zelf. De behandeling is niet pijnlijk; u voelt hooguit een licht
                tintelend of zwaar gevoel (De-Qi). Patiënten ervaren de behandeling doorgaans als{" "}
                <strong>zeer ontspannend</strong>; velen vallen zelfs even in slaap.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                <strong>Het behandelplan:</strong> Het aantal benodigde behandelingen hangt af van
                de ernst en duur van uw rugklachten. Bij acute spit kan 2 tot 4 keer voldoende
                zijn. Heeft u al jarenlang een versleten rug of een hardnekkige hernia? Dan is een
                langer traject met wekelijkse sessies nodig om de rug structureel te versterken en
                de pijn blijvend te verminderen.
              </p>
            </section>

            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Voor wie is acupunctuur geschikt?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Acupunctuur is een uiterst veilige, natuurlijke therapie zonder de bijwerkingen die
                zware pijnstillers wel hebben. Het is bijzonder geschikt voor mensen met:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acute spit en lumbago</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Hernia klachten &amp; Ischias</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Chronische (onverklaarbare) lage rugpijn
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Extreme stijfheid in de onderrug
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5 sm:col-span-2">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">
                    Rugklachten veroorzaakt door chronische spanning of stress
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
                Acupunctuur bij rugklachten in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen en uitstekend bereikbaar. Wij behandelen wekelijks
                succesvol patiënten met zware rugklachten, spit en hernia&apos;s uit de gehele
                regio. Woont u in{" "}
                <strong>
                  Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of
                  Zaandijk
                </strong>
                ? Dan bent u binnen luttele minuten bij onze praktijk. Parkeren kan voor de deur,
                wat wel zo prettig is als u momenteel moeite heeft met lopen door uw rugpijn.
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
                Veelgestelde vragen over rugklachten
              </h2>
            </div>

            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij een hernia?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur kan zeer effectief zijn bij een hernia. Hoewel het de fysieke
                  uitstulping van de tussenwervelschijf niet direct doet verdwijnen, werkt het sterk
                  in op de gevolgen. Het vermindert de zwelling rondom de beknelde zenuw, remt de
                  lokale ontsteking en ontspant de omliggende spieren (die vaak in kramp schieten ter
                  bescherming). Hierdoor neemt de pijn in de rug en de uitstralingspijn in het been
                  vaak aanzienlijk af, waardoor het lichaam de rust en ruimte krijgt om de hernia op
                  natuurlijke wijze te herstellen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Doet acupunctuur pijn in een al pijnlijke onderrug?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Nee. We begrijpen dat u huiverig kunt zijn als uw rug extreem pijnlijk of stijf
                  is, zoals bij spit. De acupunctuurnaaldjes zijn echter flinterdun. U voelt hooguit
                  een minuscuul prikje, gevolgd door een wat dof of zwaar gevoel. Omdat we de spieren
                  juist willen laten ontspannen, behandelen we zeer zacht. Tijdens de behandeling
                  merkt u vaak al dat de diepe spierspanning in de onderrug begint los te laten.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je effect bij lage rugpijn?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Dit is afhankelijk van of uw klacht acuut of chronisch is. Bij acute klachten
                  (zoals plotselinge spit na het tillen van een doos) zien we vaak na 1 tot 3
                  behandelingen al een aanzienlijke verlichting en toename van beweeglijkheid. Bij
                  een chronische klacht of hernia is er meer tijd nodig. Reken dan op een
                  starttraject van 5 tot 8 behandelingen om de pijncyclus te doorbreken en
                  structurele verbetering te bewerkstelligen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor rugklachten vergoed door de zorgverzekering?
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
                  Klaar om weer pijnvrij te bewegen?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Laat spit, een hernia of chronische lage rugpijn uw dagelijks leven niet langer
                  bepalen. Boek direct een intake in onze praktijk in Zaandam via de beveiligde
                  online planner. Heeft u specifieke vragen over uw rugklachten? Stuur gerust een
                  WhatsApp bericht voor vrijblijvend advies.
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
                      id="D8uouGkFZH4Alr37y5z4_lage_rugklachten"
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
