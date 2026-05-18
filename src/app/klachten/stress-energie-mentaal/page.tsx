import type { Metadata } from "next";
import Link from "next/link";
import BookingWidget from "@/components/BookingWidget";
import TrustBadges from "@/components/TrustBadges";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/klachten/stress-energie-mentaal", {
  title: "Acupunctuur bij Stress, Burn-out & Vermoeidheid | Zaandam",
  description:
    "Herstel van stress, burn-out, chronische vermoeidheid en slaapproblemen met acupunctuur in Zaandam. Natuurlijke ondersteuning voor uw zenuwstelsel en energie.",
  keywords: [
    "acupunctuur stress",
    "burn-out behandeling acupunctuur",
    "acupunctuur vermoeidheid zaandam",
    "slaapproblemen acupunctuur",
    "acupunctuur burn-out",
    "angstklachten behandeling",
    "chronische vermoeidheid",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/stress-energie-mentaal",
      name: "Acupunctuur bij Stress, Burn-out & Vermoeidheid",
      description:
        "Overzicht en behandelingsinformatie voor stress, burn-out, chronische vermoeidheid en slaapproblemen via Traditionele Chinese Geneeskunde en acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Burn-out" },
        { "@type": "MedicalCondition", name: "Stressklachten" },
        { "@type": "MedicalCondition", name: "Chronische vermoeidheid" },
        { "@type": "MedicalCondition", name: "Slaapproblemen" },
        { "@type": "MedicalCondition", name: "Angstklachten" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Stress en burn-out" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij burn-out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan een waardevolle aanvulling zijn bij herstel van burn-out. Het stimuleert het parasympathisch zenuwstelsel (rust-en-herstel modus), verlaagt cortisol en helpt het lichaam de stressreactie te reguleren. Het is geen snelle oplossing, maar ondersteunt het langzame hertelproces op fysiek en energetisch niveau.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur geschikt bij angstklachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, voor functionele angstklachten en stress-gerelateerde spanning zien we in de praktijk goede resultaten. Acupunctuur neemt niet de oorzaak van angst weg, maar helpt het zenuwstelsel te kalmeren zodat u beter kunt functioneren. Een combinatie met psychologische begeleiding of coaching is vaak het meest effectief.",
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
          name: "Welke klachten",
          item: "https://www.acupunctuurzaandam.nl/welke-klachten",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Stress Energie Mentaal",
          item: "https://www.acupunctuurzaandam.nl/klachten/stress-energie-mentaal",
        },
      ],
    },
  ],
};

export default function StressEnergieMentaalPage() {
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
            <span className="text-[#1F3A36]">Stress, Energie &amp; Mentaal</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden">
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
                Stress, Energie &amp; Mentaal
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>

            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur bij Stress, Burn-out &amp; Vermoeidheid
            </h1>

            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Stress, burn-out en chronische vermoeidheid zijn in de moderne samenleving de grootste
              oorzaak van langdurig verzuim en verlies aan vitaliteit. Waar de reguliere geneeskunde
              zich richt op symptoombestrijding, kijkt de Traditionele Chinese Geneeskunde (TCG)
              naar de energetische uitputting achter de klachten — en pakt die bij de wortel aan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#klachten-index"
                className="text-sm font-medium text-[#1F3A36] border-b border-[#1F3A36]/30 hover:border-[#1F3A36] pb-1 transition-colors"
              >
                Bekijk alle stress- en energieklachten
              </a>
            </div>
          </div>
        </header>

        {/* Featured Snippet — targets "Helpt acupunctuur bij stress, energie en mentale klachten?" */}
        <div className="max-w-4xl mx-auto px-6 pt-12">
          <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6">
            <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
            <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
              Ja. Acupunctuur herstelt de balans tussen stress en energie door het zenuwstelsel te reguleren, de bijnierfunctie te ondersteunen en herstel te bevorderen. Effectief bij mentale vermoeidheid, concentratieproblemen, overprikkeling en energietekort — met direct merkbare ontspanning en op de lange termijn meer veerkracht.
            </p>
          </div>
        </div>

        {/* Waarom werkt acupunctuur bij stress en burn-out? */}
        <section className="py-16 bg-white relative z-10 border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#F2EDE3] flex items-center justify-center text-[#4A6559]">
                <iconify-icon icon="solar:info-circle-linear" className="text-xl" stroke-width="1.5" />
              </div>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Waarom werkt acupunctuur bij stress en burn-out?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <h3 className="font-medium text-[#1F3A36] text-base mb-2">
                  De Oosterse Visie: Qi-leegte &amp; Shen-verstoring
                </h3>
                <p>
                  In de TCG is burn-out en chronische stress een toestand van diepe Qi-leegte,
                  waarbij de Nier-essentie (Jing) wordt aangesproken. De Shen (geest/bewustzijn),
                  die zijn thuis heeft in het Hart, raakt verstoord wanneer de voedende onderstroom
                  opdroogt. Dit uit zich in slaapproblemen, angst, emotionele labiliteit en
                  futloosheid. Acupunctuur voedt de Nier-Qi, kalmeert de Shen en herstelt het
                  vermogen van het lichaam om energie te regenereren.
                </p>
              </div>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <h3 className="font-medium text-[#1F3A36] text-base mb-2">
                  De Westerse Visie: HPA-as &amp; Parasympathicus
                </h3>
                <p>
                  Chronische stress activeert de HPA-as (hypothalamus-hypofyse-bijnier-as) en houdt
                  het lichaam in een permanente staat van alertheid. Dit verhoogt cortisol en
                  verlaagt herstelcapaciteit. Acupunctuur moduleert de HPA-as, activeert het{" "}
                  <strong>parasympathisch zenuwstelsel</strong> en bevordert de aanmaak van GABA en
                  serotonine — neurotransmitters die essentieel zijn voor rust, slaap en emotioneel
                  evenwicht.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Klachten index */}
        <section id="klachten-index" aria-labelledby="klachten-lijst-titel" className="py-24 relative z-10 bg-[#FAF8F3]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                id="klachten-lijst-titel"
                className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Kies uw specifieke klacht
              </h2>
              <p className="text-sm font-light text-[#1F3A36]/70 max-w-2xl mx-auto">
                Klik op een aandoening voor meer uitgebreide informatie over de oorzaken, symptomen
                en onze specifieke behandelmethode in de praktijk in Zaandam.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

              <a href="/klachten/stressklachten" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Stressklachten &amp; Spanning</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Chronische spanning, spierpijn, prikkelbaarheid</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/burn-out" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Burn-out</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Uitputting, emotionele afvlakking, herstel</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/vermoeidheid" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Vermoeidheid</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Aanhoudende moeheid, gebrek aan energie</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/chronische-vermoeidheid" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Chronische vermoeidheid (CVS)</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">ME/CVS, post-viraal herstel</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/slaapproblemen" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Slaapproblemen</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Insomnia, doorslapen, vroeg wakker</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/angstklachten" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Angstklachten</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Spanning, piekeren, sociale angst</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/somberheid" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Somberheid</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Neerslachtigheid, gebrek aan levensvreugde</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

              <a href="/klachten/uitputting" className="klacht-card-link group bg-white rounded-xl p-6 border border-[#1F3A36]/5 shadow-sm hover:shadow-md hover:border-[#4A6559]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#1F3A36] mb-1">Uitputting</h3>
                  <p className="text-xs font-light text-[#1F3A36]/60">Totale energieleegte na langdurige overbelasting</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="arrow-icon text-[#8A6B3D] text-xl transition-transform" stroke-width="1.5" />
              </a>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen over stress, burn-out en vermoeidheid
              </h2>
            </div>

            <div className="space-y-4">

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan ik acupunctuur combineren met psychologische begeleiding of medicatie?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, acupunctuur is complementair en werkt goed naast therapie of medicatie zoals
                  SSRI&apos;s en slaaptabletten. Het versterkt het effect van andere behandelingen
                  eerder dan dat het ermee conflicteert. Informeer uw behandelaar wel altijd over
                  alle lopende behandelingen, zodat er goed op elkaar afgestemd kan worden.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Kan acupunctuur helpen bij burn-out?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Acupunctuur kan een waardevolle aanvulling zijn bij herstel van burn-out. Het
                  stimuleert het parasympathisch zenuwstelsel (rust-en-herstel modus), verlaagt
                  cortisol en helpt het lichaam de stressreactie te reguleren. Het is geen snelle
                  oplossing, maar ondersteunt het langzame herstelproces op fysiek en energetisch
                  niveau, en maakt de ruimte vrij om echt bij te komen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel herstel ik van burn-out met acupunctuur?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Burn-out is een proces van maanden tot soms een jaar. Acupunctuur ondersteunt elk
                  stadium van dit herstelproces — van de acute uitputtingsfase tot de geleidelijke
                  opbouw van energie en veerkracht — maar vervangt niet rust, bewuste
                  levensstijlaanpassingen en psychologische begeleiding. Samen vormen ze de sterkste
                  combinatie voor duurzaam herstel.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Worden behandelingen voor stress en burn-out vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                  Ja, omdat Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen
                  NVA en TCMA, worden behandelingen door vrijwel alle Nederlandse zorgverzekeraars
                  (deels) vergoed vanuit het{" "}
                  <strong>aanvullende pakket</strong>. Omdat het vanuit de aanvullende verzekering
                  komt, gaat dit <em>niet</em> ten koste van uw eigen risico.
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBadges />

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
                { href: "/klachten/stressklachten", label: "Stressklachten" },
                { href: "/klachten/burn-out", label: "Burn-out" },
                { href: "/klachten/vermoeidheid", label: "Vermoeidheid" },
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

        {/* CTA met boekingsplanner */}
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
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
                  Klaar om uw energie en rust terug te vinden?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Zet vandaag de eerste stap naar herstel. Plan direct een intake of consult via
                  onze online planner. Twijfelt u of acupunctuur geschikt is voor uw situatie?
                  Stuur ons dan even een WhatsApp bericht — we denken graag vrijblijvend met u mee.
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

              <BookingWidget id="stress_mentaal" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
