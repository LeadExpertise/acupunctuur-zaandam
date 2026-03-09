import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Vruchtbaarheidsproblemen | Acupunctuur Zaandam",
  description:
    "Acupunctuur ter ondersteuning van vruchtbaarheid in Zaandam. Hulp bij onverklaarbare subfertiliteit, PCOS, hormonale disbalans en IVF/ICSI-voorbereiding. Erkend NVA-acupuncturist.",
  keywords: [
    "acupunctuur vruchtbaarheid",
    "acupunctuur subfertiliteit",
    "vruchtbaarheidsproblemen behandeling",
    "acupunctuur PCOS",
    "acupunctuur IVF voorbereiding",
    "zwanger worden acupunctuur Zaandam",
    "hormonale disbalans acupunctuur",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-vruchtbaarheidsproblemen",
      name: "Acupunctuur bij Vruchtbaarheidsproblemen",
      description:
        "Acupunctuurondersteuning bij vruchtbaarheidsproblemen in Zaandam: subfertiliteit, PCOS, hormonale disbalans en IVF/ICSI-voorbereiding.",
      about: [{ "@type": "MedicalCondition", name: "Vruchtbaarheidsproblemen (subfertiliteit)" }],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Vruchtbaarheidsproblemen",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij vruchtbaarheidsproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan de vruchtbaarheid ondersteunen door de hormoonbalans te reguleren, de doorbloeding van de baarmoeder te verbeteren en de stressrespons te verminderen. Wetenschappelijk onderzoek (Paulus et al., Fertil Steril 2002) toonde een significant hogere zwangerschapspercentage bij vrouwen die acupunctuur kregen rondom de IVF-embryotransfer (42,5% vs 26,3%).",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij vruchtbaarheidsproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is veilig bij vruchtbaarheidsproblemen wanneer uitgevoerd door een erkend acupuncturist. De behandeling kan gecombineerd worden met medische vruchtbaarheidsbehandelingen zoals IVF, ICSI en hormonale stimulatie zonder negatieve interacties.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij vruchtbaarheidsproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Voor optimaal effect op de hormonale cyclus adviseren wij minimaal 3 maanden behandeling (de rijpingsduur van een eicel). Een behandelreeks bestaat uit wekelijkse sessies, afgestemd op de fase van uw cyclus.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor vruchtbaarheidsproblemen vergoed?",
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Behandelingen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Acupunctuur bij Vruchtbaarheidsproblemen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-vruchtbaarheidsproblemen",
        },
      ],
    },
  ],
};

export default function VruchtbaarheidsproblemenBehandelingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        {/* Breadcrumb */}
        <nav
          aria-label="Kruimelpad"
          className="fixed top-[110px] left-0 right-0 z-10 bg-[#FAF8F3]/90 backdrop-blur-sm border-b border-[#4A6559]/10"
        >
          <ol className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-2 text-sm text-[#4A6559]">
            <li>
              <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-[#8A6B3D]">/</li>
            <li>
              <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            </li>
            <li aria-hidden="true" className="text-[#8A6B3D]">/</li>
            <li className="text-[#1F3A36] font-medium">Vruchtbaarheidsproblemen</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="pt-48 pb-16 bg-[#FAF8F3]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-[#8A6B3D] text-sm font-medium tracking-widest uppercase mb-4">
                Hormonen &amp; Vrouwenklachten
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#1F3A36] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Acupunctuur bij Vruchtbaarheidsproblemen in Zaandam
              </h1>
              <p className="text-lg text-[#4A6559] mb-8 leading-relaxed">
                De weg naar zwangerschap kan lang en emotioneel zwaar zijn. Acupunctuur ondersteunt
                uw vruchtbaarheid door de hormoonbalans te optimaliseren, de baarmoeder beter
                te doorbloeden en de stressreactie te verminderen die een gezonde zwangerschap
                in de weg kan staan &mdash; of u nu op eigen kracht probeert of IVF/ICSI ondergaat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F3A36] text-[#FAF8F3] px-8 py-4 rounded-full font-medium hover:bg-[#4A6559] transition-colors"
                >
                  <iconify-icon icon="ph:calendar-check" className="text-xl" />
                  Maak een afspraak
                </Link>
                <Link
                  href="/klachten/vruchtbaarheidsproblemen"
                  className="inline-flex items-center justify-center gap-2 border border-[#1F3A36] text-[#1F3A36] px-8 py-4 rounded-full font-medium hover:bg-[#1F3A36] hover:text-[#FAF8F3] transition-colors"
                >
                  <iconify-icon icon="ph:info" className="text-xl" />
                  Meer over de klacht
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Vruchtbaarheidsproblemen: oorzaken en achtergrond
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Subfertiliteit wordt gedefinieerd als het niet zwanger worden na 12 maanden
                    onbeschermde gemeenschap. Oorzaken kunnen liggen bij de vrouw (ovulatiestoornis,
                    tubaproblematiek, endometriose, PCOS), bij de man (spermakwaliteit) of zijn
                    onverklaard (idiopathische subfertiliteit). In circa 20 tot 30 procent van de
                    gevallen wordt geen medische oorzaak gevonden.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    PCOS (polycysteus ovariumsyndroom) is de meest voorkomende hormonale
                    aandoening bij vrouwen in de vruchtbare leeftijd en een frequente oorzaak van
                    anovulatoire subfertiliteit. Kenmerken zijn onregelmatige of afwezige
                    menstruatiecycli, verhoogde androgenen en polycysteuze ovaria op echografie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Stress speelt een onderschatte rol bij vruchtbaarheidsproblemen. Cortisol
                    interfereert met de HPA-HPG-as en kan de eisprong onderdrukken. Acupunctuur
                    adresseert zowel de hormonale als de stresscomponent.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe helpt acupunctuur bij vruchtbaarheidsproblemen?
                  </h2>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Traditioneel Chinees perspectief
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    In de TCG is vruchtbaarheid afhankelijk van de kwaliteit van de Nier-essentie
                    (Jing), de vrije doorstroming van Qi en Bloed in de baarmoeder en de harmonie
                    tussen de Chong- en Ren-meridianen (de &ldquo;zee van bloed&rdquo; en de
                    &ldquo;conceptiebaan&rdquo;). Verstoringen in dit systeem leiden tot onregelmatige
                    cycli, dunne baarmoederwand of onvoldoende Nier-essentie voor de eicelrijping.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling wordt afgestemd op de fase van de menstruatiecyclus:
                    folliculaire fase (opbouw baarmoederslijmvlies), ovulatie (bevorderen van de
                    eisprong), luteale fase (ondersteunen van implantatie). Deze cyclus-gerichte
                    aanpak maakt acupunctuur voor vruchtbaarheid zo uniek.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1F3A36] mb-3">
                    Wetenschappelijke onderbouwing
                  </h3>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Een landmark-studie van Paulus et al. (Fertil Steril, 2002) toonde een
                    significant hogere zwangerschapspercentage bij vrouwen die rondom de IVF-
                    embryotransfer acupunctuur kregen: 42,5% vs 26,3% in de controlegroep. Meerdere
                    vervolgstudies bevestigden gunstige effecten op de bloedstroom naar het
                    endometrium en de eicelpopulatie.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    Acupunctuur moduleert de afgifte van GnRH, FSH en LH via de hypothalamus-
                    hypofyse-as, normaliseert androgeen-niveaus bij PCOS en verbetert de
                    insulinegevoeligheid. De verbetering van de uterien doorbloeding (aangetoond
                    via Doppler-onderzoek) vergroot de kans op succesvolle implantatie.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoe verloopt de behandeling?
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    De behandeling begint met een uitgebreide intake over uw cyclus, hormoonwaarden,
                    eerder uitgevoerd fertiliteitsonderzoek en eventuele IVF/ICSI-planning. We
                    maken een behandelschema dat aansluit op de fasen van uw cyclus.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed mb-4">
                    Tijdens IVF- of ICSI-trajecten geven wij bij voorkeur twee sessies rondom de
                    embryotransfer: een voor de transfer (ter ontspanning van het endometrium) en
                    een direct daarna (ter vermindering van uteriene contracties). Daarnaast
                    begeleiden wij u gedurende de stimulatiefase.
                  </p>
                  <p className="text-[#4A6559] leading-relaxed">
                    We combineren acupunctuur met leefstijladviezen (voeding, slaap, beweging) en
                    stressmanagementtechnieken. De emotionele begeleiding is een integraal onderdeel
                    van onze aanpak: de reis naar zwangerschap is ook een innerlijke reis.
                  </p>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Hoeveel behandelingen zijn nodig?
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">3</div>
                      <div className="text-sm text-[#4A6559]">Maanden minimaal voor effect</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">wekelijks</div>
                      <div className="text-sm text-[#4A6559]">Frequentie cyclus-gericht</div>
                    </div>
                    <div className="bg-[#FAF8F3] rounded-2xl p-5 text-center">
                      <div className="text-3xl font-bold text-[#1F3A36] mb-1">IVF</div>
                      <div className="text-sm text-[#4A6559]">Rondom transfer extra sessie</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Voor wie is deze behandeling geschikt?
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "Onverklaarbare vruchtbaarheidsproblemen (idiopathische subfertiliteit)",
                      "PCOS met onregelmatige of afwezige eisprong",
                      "Hormonale disbalans: verhoogd FSH, lage AMH of luteale fase-insufficiëntie",
                      "IVF/ICSI-voorbereiding en ondersteuning rondom embryotransfer",
                      "Vrouwen die hun cyclus willen reguleren voor conceptie",
                      "Mannen die hun spermakwaliteit willen ondersteunen via leefstijl en acupunctuur",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <iconify-icon
                          icon="ph:check-circle-fill"
                          className="text-[#8A6B3D] text-xl mt-0.5 shrink-0"
                        />
                        <span className="text-[#4A6559]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2
                    className="text-3xl font-bold text-[#1F3A36] mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Gerelateerde behandelingen
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Link
                      href="/behandelingen/acupunctuur-ivf-icsi-ondersteuning"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:heart" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">IVF/ICSI ondersteuning</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-hormonale-disbalans"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:chart-line" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Hormonale disbalans</div>
                    </Link>
                    <Link
                      href="/behandelingen/acupunctuur-menstruatieklachten"
                      className="group block bg-[#FAF8F3] rounded-2xl p-5 hover:bg-[#1F3A36] transition-colors"
                    >
                      <iconify-icon icon="ph:calendar" className="text-2xl text-[#8A6B3D] mb-2 group-hover:text-[#FAF8F3]" />
                      <div className="font-medium text-[#1F3A36] group-hover:text-[#FAF8F3]">Menstruatieklachten</div>
                    </Link>
                  </div>
                </section>

                <section className="bg-[#FAF8F3] rounded-2xl p-6">
                  <h2
                    className="text-2xl font-bold text-[#1F3A36] mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Acupunctuur voor vruchtbaarheid in Zaandam
                  </h2>
                  <p className="text-[#4A6559] leading-relaxed">
                    Acupunctuur Zaandam biedt gespecialiseerde begeleiding bij vruchtbaarheidsproblemen
                    voor vrouwen en stellen uit de Zaanstreek, Amsterdam-Noord en Purmerend. Onze
                    acupuncturist heeft uitgebreide ervaring met fertiliteitsacupunctuur en werkt
                    nauw samen met fertiliteitsklinieken in de regio. Als NVA- en TCMA-erkend
                    acupuncturist is vergoeding mogelijk via uw aanvullende verzekering.
                  </p>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-[#1F3A36] text-[#FAF8F3] rounded-2xl p-6 sticky top-36">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Direct een afspraak
                  </h3>
                  <p className="text-[#FAF8F3]/80 text-sm mb-4">
                    Ondersteun uw vruchtbaarheid met acupunctuur. Plan vandaag nog uw intakegesprek.
                  </p>
                  <Link
                    href="#contact"
                    className="block text-center bg-[#FAF8F3] text-[#1F3A36] px-6 py-3 rounded-full font-medium hover:bg-[#F2EDE3] transition-colors mb-3"
                  >
                    Online inplannen
                  </Link>
                  <a
                    href="https://wa.me/31657998330"
                    className="flex items-center justify-center gap-2 border border-[#FAF8F3]/30 text-[#FAF8F3] px-6 py-3 rounded-full font-medium hover:bg-[#FAF8F3]/10 transition-colors"
                  >
                    <iconify-icon icon="ph:whatsapp-logo" className="text-xl" />
                    WhatsApp
                  </a>
                  <div className="mt-6 pt-6 border-t border-[#FAF8F3]/20 space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <iconify-icon icon="ph:shield-check" className="text-[#8A6B3D]" />
                      NVA &amp; TCMA erkend
                    </div>
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <iconify-icon icon="ph:currency-eur" className="text-[#8A6B3D]" />
                      Vergoeding mogelijk
                    </div>
                    <div className="flex items-center gap-2 text-[#FAF8F3]/80">
                      <iconify-icon icon="ph:map-pin" className="text-[#8A6B3D]" />
                      Centrum Zaandam
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3]">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1F3A36] mb-12 text-center"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Veelgestelde vragen over acupunctuur bij vruchtbaarheidsproblemen
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij vruchtbaarheidsproblemen?",
                  a: "Acupunctuur kan de vruchtbaarheid ondersteunen door de hormoonbalans te reguleren, de doorbloeding van de baarmoeder te verbeteren en de stressrespons te verminderen. Wetenschappelijk onderzoek (Paulus et al., Fertil Steril 2002) toonde een significant hogere zwangerschapspercentage bij vrouwen die acupunctuur kregen rondom IVF-embryotransfer (42,5% vs 26,3%).",
                },
                {
                  q: "Is acupunctuur veilig bij vruchtbaarheidsproblemen?",
                  a: "Acupunctuur is veilig bij vruchtbaarheidsproblemen wanneer uitgevoerd door een erkend acupuncturist. De behandeling kan gecombineerd worden met medische vruchtbaarheidsbehandelingen zoals IVF en ICSI zonder negatieve interacties.",
                },
                {
                  q: "Hoe snel merk je resultaat bij vruchtbaarheidsproblemen?",
                  a: "Voor optimaal effect op de hormonale cyclus adviseren wij minimaal 3 maanden behandeling (de rijpingsduur van een eicel). Een behandelreeks bestaat uit wekelijkse sessies, afgestemd op de fase van uw cyclus.",
                },
                {
                  q: "Wordt acupunctuur voor vruchtbaarheidsproblemen vergoed?",
                  a: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-white rounded-2xl shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-medium text-[#1F3A36]">
                    {q}
                    <iconify-icon icon="ph:caret-down" className="text-[#8A6B3D] shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-[#4A6559] leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-10 bg-white border-y border-[#4A6559]/10">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-center text-sm text-[#4A6559] mb-6 font-medium tracking-widest uppercase">
              Erkend &amp; vergoed door
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
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
        <section id="contact" className="py-24 bg-[#1F3A36]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#FAF8F3] mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Maak een afspraak
              </h2>
              <p className="text-[#FAF8F3]/80 max-w-xl mx-auto">
                Zet de eerste stap in uw vruchtbaarheidstraject. Plan uw intakegesprek of neem
                contact op via WhatsApp.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", border: "none", minHeight: "500px" }}
                  id="D8uouGkFZH4Alr37y5z4_behandeling_vrucht"
                  loading="lazy"
                  title="Afspraak maken voor vruchtbaarheidsproblemen"
                />
              </div>
              <div className="space-y-6 text-[#FAF8F3]">
                <div className="bg-[#4A6559]/30 rounded-2xl p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    Liever direct contact?
                  </h3>
                  <p className="text-[#FAF8F3]/80 mb-4">
                    Heeft u vragen of wilt u eerst een vrijblijvend kennismakingsgesprek? App ons
                    via WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center gap-2 bg-[#FAF8F3] text-[#1F3A36] px-6 py-3 rounded-full font-medium hover:bg-[#F2EDE3] transition-colors"
                  >
                    <iconify-icon icon="ph:whatsapp-logo" className="text-xl" />
                    App ons op WhatsApp
                  </a>
                </div>
                <div className="bg-[#4A6559]/30 rounded-2xl p-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="ph:map-pin" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span>Centrum Zaandam, Noord-Holland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="ph:clock" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span>Ma&ndash;Za: 08:00&ndash;20:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <iconify-icon icon="ph:shield-check" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span>NVA &amp; TCMA erkend &mdash; vergoeding mogelijk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </main>
    </>
  );
}
