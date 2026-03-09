import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Migraine | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij migraine vermindert de frequentie en intensiteit van migraineaanvallen. Wetenschappelijk aangetoond effectief als profylaxe. Erkende behandeling in Zaandam.",
  keywords: [
    "acupunctuur migraine",
    "acupunctuur migraine Zaandam",
    "behandeling migraine acupunctuur",
    "migraine preventie acupunctuur",
    "migraineaanvallen verminderen acupunctuur",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-migraine",
      name: "Acupunctuur bij Migraine | Acupunctuur Zaandam",
      description:
        "Acupunctuur bij migraine vermindert de frequentie en intensiteit van migraineaanvallen. Wetenschappelijk aangetoond effectief als profylaxe.",
      about: [{ "@type": "MedicalCondition", name: "migraine" }],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "migraine" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij migraine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is wetenschappelijk aangetoond effectief bij de preventie van episodische migraine. Een Cochrane review (Linde K et al., 2016) concludeerde dat acupunctuur minstens zo effectief is als profylactische medicamenteuze behandeling bij het verminderen van de frequentie van migraineaanvallen, met minder bijwerkingen.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij migraine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig bij migraine. Bijwerkingen zijn zeldzaam en licht van aard. Acupunctuur heeft geen risico op rebound-hoofdpijn (medicatieovergebruikshoofdpijn) dat bij langdurig gebruik van pijnstillers kan optreden.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij migraine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De meeste mensen merken na vier tot zes behandelingen een vermindering in de frequentie van migraineaanvallen. Een volledig preventief traject beslaat doorgaans tien tot twaalf sessies. Het effect van acupunctuur als profylaxe blijft bij veel mensen ook na het beëindigen van de behandeling aantoonbaar aanwezig.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor migraine vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
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
          name: "Acupunctuur bij Migraine",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-migraine",
        },
      ],
    },
  ],
};

export default function MigrainePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">

        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Acupunctuur bij Migraine</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Hoofd &amp; Zenuwstelsel
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Migraine in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Migraine is meer dan hoofdpijn: het zijn invalide aanvallen van hevige pijn, misselijkheid, lichtgevoeligheid en soms aura die uw leven ernstig kunnen ontwrichten. Acupunctuur is wetenschappelijk aangetoond effectief als preventieve behandeling bij episodische migraine &mdash; minstens zo effectief als profylactische medicatie, maar zonder bijwerkingen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
              <Link href="/klachten/migraine" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">
                Meer over migraine
              </Link>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is migraine?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Migraine is een neurologische aandoening die wordt gekenmerkt door terugkerende aanvallen van ernstige, vaak eenzijdige hoofdpijn, gepaard gaande met misselijkheid, braken en extreme gevoeligheid voor licht en geluid. Aanvallen duren vier tot tweeënzeventig uur en kunnen het normale functioneren volledig onmogelijk maken.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Ongeveer twintig procent van de migrainepati&euml;nten ervaart ook een aura: tijdelijke neurologische symptomen zoals visuele verstoring (lichtflitsen, blinde vlek), tintelingen of spraakproblemen die de aanval aankondigen. Migraine treft vrouwen vaker dan mannen en heeft een sterke genetische component.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Migraine zonder aura</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Hevige, kloppende hoofdpijn meestal aan één zijde, misselijkheid en licht- en geluidsovergevoeligheid.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Migraine met aura</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Voorafgegaan door neurologische verschijnselen zoals visuele aura, tintelingen in gezicht of hand, of tijdelijke spraakproblemen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]">
                    <iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" />
                  </span>
                  <div>
                    <strong className="font-medium text-[#1F3A36] block text-base">Chronische migraine</strong>
                    <span className="text-sm text-[#1F3A36]/70 font-light">Vijftien of meer hoofdpijndagen per maand gedurende meer dan drie maanden, waarvan minstens acht dagen migraine.</span>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur helpt bij migraine
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG wordt migraine beschouwd als een opstijging van Lever-Yang of Lever-Vuur naar het hoofd, vaak gecombineerd met stagnatie van Qi en Xue in de Galblaas- en Levermeridiaan. Stress, hormonale wisselingen en slaapgebrek zijn bekende uitlokkende factoren die de Lever-Qi in onbalans brengen. De behandeling richt zich op het afvoeren van het opstijgende Vuur, het reguleren van de Lever en het vrijmaken van de blokkades in het hoofd.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Serotoninregulatie:</strong> Acupunctuur moduleert de serotoninespiegel, een sleutelneurotransmitter bij migraine. Lage serotoninewaarden worden geassocieerd met migraineaanvallen.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Corticale spreading depression (CSD):</strong> Acupunctuur kan de drempel voor CSD verhogen, het neurale mechanisme dat aan de basis ligt van de migraireaura en de aanval zelf.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Trigeminusactiviteit dempen:</strong> Naalding vermindert de activiteit van het trigeminovasculaire systeem, dat verantwoordelijk is voor de pijnuitstraling bij migraine.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Stressresponse normaliseren:</strong> Door regulatie van het autonome zenuwstelsel wordt de stressgevoeligheid verminderd, een belangrijke uitlokkende factor bij migraine.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Bij het eerste consult wordt een gedetailleerd beeld opgebouwd van uw migrainepatroon: frequentie, duur, zijdigheid, uitlokkende factoren, bijkomende klachten en eventueel gebruik van profylactische medicatie. Dit beeld bepaalt de TCG-diagnose en het behandelplan.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De naalden worden geplaatst op punten in het hoofd (zoals GB-20 en GB-21 aan de schedelbasis), de handen (LI-4), de voeten (LR-3) en soms op het been. Dit zijn klassieke punten voor het reguleren van Lever-Yang en het verlichten van hoofdpijn. De behandelingen richten zich primair op profylaxe &mdash; het voorkomen van aanvallen &mdash; maar kunnen ook tijdens een aanval worden ingezet voor snellere verlichting.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Naast naalding wordt vaak advies gegeven over slaaphygiëne, voeding (vermijden van triggers zoals alcohol, cafeïne, bepaalde kaassoorten) en stressmanagement, want een holistische aanpak geeft de beste resultaten bij migraine.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn meestal nodig?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Voor migraineprofylaxe wordt een traject van tien tot twaalf behandelingen aanbevolen, aanvankelijk wekelijks. De meeste mensen merken na vier tot zes sessies een vermindering in aanvalsfrequentie en intensiteit. Na het initiële traject zijn periodieke onderhoudsbehandelingen (eens per maand of per kwartaal) voor veel mensen voldoende om de bereikte verbetering te handhaven.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is acupunctuur bij migraine geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Episodische migraine (profylaxe)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Chronische migraine</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Mensen die profylactische medicatie willen afbouwen</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Hormonale migraine (menstrueel)</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Aanvulling op reguliere migrainebehandeling</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" />
                  <span className="text-sm font-medium text-[#1F3A36]">Zwangere vrouwen met migraine</span>
                </div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/migraine" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over migraine</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-hoofdpijn" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij hoofdpijn</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-stressklachten" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij stressklachten</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-slaapproblemen" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij slaapproblemen</span>
                </Link>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij migraine in de regio Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar. Woont u in{" "}
                <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>?
                Dan bent u binnen enkele minuten bij onze praktijk.
              </p>
            </section>

          </div>
        </article>

        {/* Science section */}
        <section className="py-20 bg-[#F2EDE3] border-y border-[#1F3A36]/10">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-start gap-4 mb-8">
              <div className="shrink-0 mt-1">
                <iconify-icon icon="solar:diploma-linear" className="text-3xl text-[#8A6B3D]" />
              </div>
              <div>
                <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Wetenschappelijk bewijs voor acupunctuur bij migraine
                </h2>
                <p className="text-sm text-[#1F3A36]/60 font-light">Peer-reviewed klinisch bewijs</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-[#1F3A36]/10 p-6">
              <p className="text-sm font-medium text-[#1F3A36] mb-2">
                Linde K, Allais G, Brinkhaus B, et al. &ldquo;Acupuncture for the prevention of episodic migraine.&rdquo;
              </p>
              <p className="text-sm text-[#1F3A36]/70 font-light mb-4">
                <em>Cochrane Database of Systematic Reviews.</em> 2016;(6):CD001218.
              </p>
              <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                Deze Cochrane review analyseerde 22 gerandomiseerde gecontroleerde studies met in totaal 4.985 pati&euml;nten. De conclusie was dat acupunctuur bij de preventie van episodische migraine minstens even effectief is als profylactische farmacologische behandeling (zoals bètablokkers of topiramaat). Acupunctuur verminderde het aantal migrainedagen significant vergeleken met zowel sham-acupunctuur als met reguliere zorg. De reviewers concludeerden dat acupunctuur een valide optie is voor pati&euml;nten die migraineprofylaxe zoeken, met als bijkomend voordeel een gunstiger bijwerkingenprofiel dan medicamenteuze profylaxe.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#FAF8F3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over acupunctuur bij migraine
              </h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij migraine?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is wetenschappelijk aangetoond effectief bij de preventie van episodische migraine. Een Cochrane review (Linde K et al., 2016) concludeerde dat acupunctuur minstens zo effectief is als profylactische medicamenteuze behandeling bij het verminderen van de frequentie van migraineaanvallen, met minder bijwerkingen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij migraine?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is veilig bij migraine. Bijwerkingen zijn zeldzaam en licht van aard. Acupunctuur heeft geen risico op rebound-hoofdpijn (medicatieovergebruikshoofdpijn) dat bij langdurig gebruik van pijnstillers kan optreden.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij migraine?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  De meeste mensen merken na vier tot zes behandelingen een vermindering in de frequentie van migraineaanvallen. Een volledig preventief traject beslaat doorgaans tien tot twaalf sessies. Het effect van acupunctuur als profylaxe blijft bij veel mensen ook na het beëindigen van de behandeling aantoonbaar aanwezig.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor migraine vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. Hierdoor vergoeden de meeste zorgverzekeraars de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
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

        {/* CTA / Booking */}
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Minder migraineaanvallen, meer vrijheid
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  U hoeft migraine niet te accepteren als een vast onderdeel van uw leven. Plan een eerste afspraak in en ontdek hoe een preventief acupunctuurtraject de frequentie en intensiteit van uw aanvallen significant kan verminderen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
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
                  <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b pr-4 pl-4 -items-center justify-between">
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
                      id="D8uouGkFZH4Alr37y5z4_behandeling_migraine"
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
