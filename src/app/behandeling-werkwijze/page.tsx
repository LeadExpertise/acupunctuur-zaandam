import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur Behandeling Zaandam | Intake & Werkwijze | Sam de Vries",
  description:
    "Ontdek hoe een acupunctuur behandeling werkt bij Acupunctuur Zaandam. Lees over de intake, kosten, het verloop van een sessie en plan direct uw afspraak.",
  keywords: [
    "acupunctuur behandeling",
    "hoe werkt acupunctuur",
    "acupunctuur behandeling zaandam",
    "eerste acupunctuur consult",
    "acupunctuur intake",
    "acupunctuur kosten",
    "acupunctuur sessie verloop",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandeling-werkwijze",
      name: "Acupunctuur Behandeling & Werkwijze Zaandam",
      description:
        "Uitgebreide informatie over hoe een acupunctuurbehandeling verloopt bij Acupunctuur Zaandam: intake, kosten, voorbereiding en veelgestelde vragen.",
      url: "https://www.acupunctuurzaandam.nl/behandeling-werkwijze",
      about: { "@type": "MedicalTherapy", name: "Acupunctuur" },
      audience: { "@type": "Patient" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Doet acupunctuur pijn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nee, over het algemeen doet een acupunctuurbehandeling geen pijn. Wij werken met naaldjes die zo dun zijn als een haar. U voelt wellicht een klein prikje wanneer de naald de huid passeert, gevolgd door een licht tintelend, zwaar of warm gevoel rondom het punt (het 'De Qi' gevoel). Dit is een teken dat de energie gaat stromen en wordt zelden als pijnlijk ervaren.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn er nodig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dit is erg afhankelijk van de aard van uw klachten. Bij acute, recente klachten merkt u vaak al na 2 tot 4 behandelingen een aanzienlijke verbetering. Bij chronische klachten die al jaren spelen, heeft het lichaam vaak meer tijd nodig en kan een traject van 6 tot 10 sessies nodig zijn. Tijdens de intake geven wij u hier een realistische inschatting van.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sommige patiënten voelen direct na de eerste sessie al verlichting van pijn of een diepe ontspanning. Bij anderen is er na een dag of twee dagen effect merkbaar. Soms treedt er na de eerste behandeling een lichte beginverergering op; dit is onschuldig en betekent dat het lichaam reageert op de prikkel. Vaak treedt de echte verbetering op na enkele opeenvolgende sessies.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, in de handen van een goed opgeleide professional is acupunctuur een zeer veilige behandelmethode. Wij gebruiken uitsluitend steriele, eenmalig te gebruiken wegwerpnaalden om infecties uit te sluiten. Als aangesloten lid bij erkende beroepsverenigingen voldoen wij aan strenge hygiëne- en veiligheidseisen.",
          },
        },
        {
          "@type": "Question",
          name: "Moet ik iets voorbereiden voor de behandeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Zorg ervoor dat u niet met een volledig lege maag naar de praktijk komt, maar vermijd ook een zeer zware maaltijd net voor uw afspraak. Probeer indien mogelijk extreme stress of zware fysieke inspanning vlak voor uw sessie te vermijden, zodat uw lichaam optimaal kan reageren op de behandeling. Neem een grote handdoek mee en eventueel een overzicht van uw medicatie.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik na de behandeling gewoon werken of sporten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "U kunt na de behandeling uw normale dagelijkse bezigheden vaak gewoon hervatten. Wel is het raadzaam om op de dag van de behandeling zware fysieke of emotionele inspanning (zoals intensief sporten) te vermijden. Uw lichaam is bezig met het verwerken van de prikkels en het herstellen van de balans; rust ondersteunt dit proces.",
          },
        },
        {
          "@type": "Question",
          name: "Wat moet ik aantrekken naar de afspraak?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Draag bij voorkeur makkelijke, loszittende kleding. Veelgebruikte acupunctuurpunten liggen op de onderarmen (tot de elleboog) en onderbenen (tot de knie). Kleding die u makkelijk kunt oprollen is daarom ideaal.",
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
          name: "Behandeling & werkwijze",
          item: "https://www.acupunctuurzaandam.nl/behandeling-werkwijze",
        },
      ],
    },
  ],
};

export default function BehandelingWerkwijzePage() {
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
            <span className="text-[#1F3A36]">Behandeling &amp; werkwijze</span>
          </div>
        </div>

        {/* Hero / Title Section */}
        <header className="py-16 md:py-24 relative overflow-hidden flex flex-col items-center text-center px-6 pt-48">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-60"
          />

          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2EDE3]/80 border border-[#1F3A36]/10 mb-8 backdrop-blur-sm">
              <iconify-icon
                icon="solar:leaf-linear"
                className="text-[#4A6559] text-sm"
                stroke-width="1.5"
              />
              <span className="text-xs font-medium text-[#1F3A36]/80 tracking-widest uppercase">
                Patiënteninformatie
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Behandeling Acupunctuur in Zaandam
            </h1>

            <p className="text-base md:text-xl font-light text-[#1F3A36]/80 max-w-2xl mx-auto leading-relaxed">
              Ontdek hoe een acupunctuur behandeling werkt, wat u kunt
              verwachten tijdens een sessie en hoe wij samen werken aan uw
              natuurlijke herstel.
            </p>
          </div>
        </header>

        {/* Main Content Article */}
        <article className="max-w-3xl mx-auto px-6 pb-24 prose-custom">

          {/* Introductie */}
          <section className="mb-16">
            <p className="text-base md:text-lg font-light text-[#1F3A36]/90 leading-relaxed">
              Welkom. Wanneer u overweegt om met acupunctuur te starten, is het
              volkomen normaal dat u zich afvraagt wat u precies te wachten
              staat. Wat is acupunctuur eigenlijk? Hoe verloopt een sessie? En
              wat zijn de kosten?
            </p>
            <p className="text-base md:text-lg font-light text-[#1F3A36]/90 leading-relaxed">
              Bij <strong>Acupunctuur Zaandam</strong> kunt u terecht voor
              professionele, veilige en persoonlijke acupunctuurbehandelingen.
              Op deze pagina leggen wij u stap voor stap en in alle rust uit hoe
              een behandeling werkt, wat u kunt verwachten van uw eerste bezoek
              (de intake) en hoe u eenvoudig een afspraak kunt maken in onze
              praktijk in Zaandam.{" "}
              <Link
                href="/welke-klachten"
                className="text-[#4A6559] underline hover:text-[#1F3A36]"
              >
                Bekijk bij welke klachten acupunctuur kan helpen
              </Link>
              .
            </p>
          </section>

          {/* Hoe werkt acupunctuur? */}
          <section className="mb-16 scroll-mt-32" id="hoe-werkt-het">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Hoe werkt acupunctuur?
            </h2>
            <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
              Acupunctuur is een eeuwenoude geneeswijze die zijn oorsprong vindt
              in de Traditionele Chinese Geneeskunde (TCG). Het fundament van
              deze geneeswijze is de gedachte dat fysieke en mentale klachten
              ontstaan door een verstoring of blokkade in de natuurlijke
              energiehuishouding van het lichaam.
            </p>
            <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
              Volgens de TCG stroomt levensenergie, ook wel <em>Qi</em> genoemd,
              door een netwerk van onzichtbare banen in ons lichaam: de
              meridianen. Wanneer deze doorstroming soepel verloopt, bent u in
              balans en gezond. Ontstaat er een blokkade—bijvoorbeeld door
              stress, overbelasting, voeding of trauma—dan kunnen er
              pijnklachten, vermoeidheid of andere aandoeningen optreden. Een{" "}
              <strong>acupunctuur behandeling</strong> is erop gericht om deze
              doorstroming van energie te herstellen.
            </p>

            <div className="bg-[#F2EDE3]/50 border-l-2 border-[#8A6B3D] p-6 my-8 rounded-r-lg">
              <h3 className="text-sm font-medium tracking-widest uppercase text-[#1F3A36] mb-3">
                De moderne wetenschap over acupunctuur
              </h3>
              <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed m-0">
                Ook vanuit een modern westers, medisch perspectief is de werking
                van acupunctuur steeds beter te verklaren. Wetenschappelijk
                onderzoek toont aan dat het plaatsen van de naaldjes het
                zenuwstelsel stimuleert. Dit proces activeert de afgifte van
                lichaamseigen pijnstillers (zoals endorfines) en beïnvloedt de
                pijnregulatie en doorbloeding in weefsels en spieren positief.
                Hierdoor wordt het zelfherstellend vermogen van uw lichaam
                aangesproken.
              </p>
            </div>
          </section>

          {/* Hoe verloopt een acupunctuur behandeling? */}
          <section className="mb-20 scroll-mt-32" id="verloop-behandeling">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Hoe verloopt een acupunctuur behandeling?
            </h2>
            <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-10">
              Wij vinden het belangrijk dat u zich op uw gemak voelt. Een
              behandeling bij Acupunctuur Zaandam verloopt altijd in een rustige
              sfeer, met volledige aandacht voor uw persoonlijke situatie. Het
              proces ziet er doorgaans als volgt uit:
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#1F3A36]/10 before:to-transparent">

              {/* Step 1 */}
              <div className="relative flex items-start md:justify-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#1F3A36]/20 text-[#4A6559] z-10 shadow-sm">
                  <iconify-icon
                    icon="solar:home-smile-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <div className="w-full pl-16 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-2">
                    1. Binnenkomst in de praktijk
                  </h3>
                  <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                    U wordt rustig ontvangen in onze sfeervolle praktijk in
                    Zaandam. Neem even plaats met een kopje thee of water om aan
                    te komen.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start md:justify-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#1F3A36]/20 text-[#4A6559] z-10 shadow-sm">
                  <iconify-icon
                    icon="solar:clipboard-text-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <div className="hidden md:block md:w-1/2 md:pr-12" />
                <div className="w-full pl-16 md:pl-12 md:w-1/2 text-left">
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-2">
                    2. Het intakegesprek
                  </h3>
                  <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                    Bij uw eerste bezoek (de acupunctuur intake) nemen we ruim
                    de tijd. We bespreken uw klachten uitvoerig. Er worden
                    vragen gesteld over uw algehele gezondheid, leefstijl,
                    slaappatroon, voeding en medische geschiedenis. Dit is
                    essentieel om de wortel van de klacht te vinden, niet alleen
                    het symptoom.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start md:justify-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#1F3A36]/20 text-[#4A6559] z-10 shadow-sm">
                  <iconify-icon
                    icon="solar:bed-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <div className="w-full pl-16 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-2">
                    3. Plaatsnemen op de behandelbank
                  </h3>
                  <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                    Na het gesprek en eventueel een pols- of tongdiagnose
                    (onderdeel van Chinese geneeskunde), mag u comfortabel
                    plaatsnemen op de behandelbank. U hoeft enkel uw schoenen en
                    sokken uit te doen en eventueel kleding op te rollen om
                    polsen, onderbenen of buik/rug vrij te maken.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start md:justify-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#1F3A36]/20 text-[#4A6559] z-10 shadow-sm">
                  <iconify-icon
                    icon="solar:magic-stick-3-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <div className="hidden md:block md:w-1/2 md:pr-12" />
                <div className="w-full pl-16 md:pl-12 md:w-1/2 text-left">
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-2">
                    4. Plaatsen van de naaldjes
                  </h3>
                  <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                    Er worden zeer dunne, steriele naaldjes geplaatst op
                    specifieke acupunctuurpunten op uw lichaam. U voelt wellicht
                    een klein prikje, gevolgd door een licht tintelend of zwaar
                    gevoel. Dit betekent dat de energie wordt geactiveerd.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start md:justify-center">
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F3] border-2 border-[#1F3A36]/20 text-[#4A6559] z-10 shadow-sm">
                  <iconify-icon
                    icon="solar:clock-circle-linear"
                    className="text-xl"
                    stroke-width="1.5"
                  />
                </div>
                <div className="w-full pl-16 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-2">
                    5. Ontspannen en inwerken
                  </h3>
                  <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                    De naaldjes blijven ongeveer 20 tot 30 minuten zitten. Dit
                    is een moment voor u. De meeste mensen ervaren de behandeling
                    als zeer rustgevend en ontspannend; het is niet ongebruikelijk
                    dat patiënten even in slaap vallen tijdens een{" "}
                    <strong>acupunctuur sessie</strong>.
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>
            </div>
          </section>

          {/* Intake en behandelingen (Tarieven) */}
          <section className="mb-16 scroll-mt-32" id="tarieven">
            <h2
              className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Intake, behandelingen en kosten
            </h2>
            <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-8">
              Transparantie over de{" "}
              <strong>acupunctuur behandeling kosten</strong> is belangrijk.
              Omdat we zijn aangesloten bij de erkende beroepsverenigingen,
              komen onze behandelingen in aanmerking voor vergoeding vanuit uw
              aanvullende zorgverzekering.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Pricing Card 1 */}
              <div className="bg-white rounded-xl border border-[#1F3A36]/10 p-8 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#8A6B3D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3
                  className="text-xl font-normal text-[#1F3A36] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Eerste consult (Intake)
                </h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-light text-[#1F3A36]">
                    €80
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm font-light text-[#1F3A36]/80">
                    <iconify-icon
                      icon="solar:clock-circle-linear"
                      className="text-[#4A6559]"
                    />
                    Duur: ongeveer 90 minuten
                  </li>
                  <li className="flex items-center gap-3 text-sm font-light text-[#1F3A36]/80">
                    <iconify-icon
                      icon="solar:chat-round-check-linear"
                      className="text-[#4A6559]"
                    />
                    Uitgebreide anamnese
                  </li>
                  <li className="flex items-center gap-3 text-sm font-light text-[#1F3A36]/80">
                    <iconify-icon
                      icon="solar:document-text-linear"
                      className="text-[#4A6559]"
                    />
                    Opstellen behandelplan
                  </li>
                  <li className="flex items-center gap-3 text-sm font-light text-[#1F3A36]/80">
                    <iconify-icon
                      icon="solar:magic-stick-3-linear"
                      className="text-[#4A6559]"
                    />
                    Inclusief eerste behandeling
                  </li>
                </ul>
              </div>

              {/* Pricing Card 2 */}
              <div className="bg-white rounded-xl border border-[#1F3A36]/10 p-8 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#4A6559] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3
                  className="text-xl font-normal text-[#1F3A36] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Vervolgbehandeling
                </h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-light text-[#1F3A36]">
                    €60
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm font-light text-[#1F3A36]/80">
                    <iconify-icon
                      icon="solar:clock-circle-linear"
                      className="text-[#4A6559]"
                    />
                    Duur: ongeveer 45–60 minuten
                  </li>
                  <li className="flex items-center gap-3 text-sm font-light text-[#1F3A36]/80">
                    <iconify-icon
                      icon="solar:refresh-circle-linear"
                      className="text-[#4A6559]"
                    />
                    Korte evaluatie voortgang
                  </li>
                  <li className="flex items-center gap-3 text-sm font-light text-[#1F3A36]/80">
                    <iconify-icon
                      icon="solar:magic-stick-3-linear"
                      className="text-[#4A6559]"
                    />
                    Acupunctuur sessie
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm font-light text-[#1F3A36]/80 italic">
              Tijdens de intake wordt er altijd uitgebreid naar uw klachten
              gekeken, zodat we een gericht en passend behandelplan kunnen
              opstellen. Mocht u verhinderd zijn, verzoeken wij u dit uiterlijk
              24 uur van tevoren door te geven.
            </p>
          </section>

          {/* Wat moet je meenemen */}
          <section className="mb-16 bg-[#F2EDE3]/40 rounded-2xl p-8 border border-[#1F3A36]/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#1F3A36] text-[#FAF8F3] flex items-center justify-center">
                <iconify-icon icon="solar:bag-3-linear" className="text-lg" />
              </div>
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight m-0"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat moet u meenemen naar de behandeling?
              </h2>
            </div>
            <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
              Om de behandeling zo soepel en hygiënisch mogelijk te laten
              verlopen, vragen wij u het volgende mee te nemen:
            </p>
            <ul className="list-none space-y-3 m-0 p-0 text-base font-light text-[#1F3A36]/80">
              <li className="flex items-start gap-3">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  className="text-[#4A6559] text-xl shrink-0 mt-0.5"
                />
                <span>
                  <strong>Een eigen (grote) handdoek:</strong> Voor op de
                  behandelbank, uit hygiënisch oogpunt.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  className="text-[#4A6559] text-xl shrink-0 mt-0.5"
                />
                <span>
                  <strong>Relevante medische informatie:</strong> Gebruikt u
                  medicijnen of heeft u uitslagen van recent medisch onderzoek?
                  Neem een overzichtje mee, dit helpt ons bij het vormen van een
                  compleet beeld.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  className="text-[#4A6559] text-xl shrink-0 mt-0.5"
                />
                <span>
                  <strong>Comfortabele kleding:</strong> Draag kleding die niet
                  knelt en waarbij u gemakkelijk uw onderarmen en onderbenen
                  (tot de knie) kunt ontbloten. Veel acupunctuurpunten bevinden
                  zich op deze plekken.
                </span>
              </li>
            </ul>
          </section>

          {/* Hoe maak je een afspraak & Betaling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <section>
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe maakt u een afspraak?
              </h2>
              <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Een afspraak inplannen voor uw behandeling met acupunctuur is
                eenvoudig. U heeft twee opties:
              </p>
              <ol className="list-decimal pl-4 space-y-2 text-sm font-light text-[#1F3A36]/80 mb-6">
                <li className="pl-2">
                  <strong>Direct online plannen:</strong> Gebruik de{" "}
                  <a
                    href="#afspraak-maken"
                    className="text-[#4A6559] underline hover:text-[#1F3A36]"
                  >
                    online agenda
                  </a>{" "}
                  onderaan deze pagina om zelf een datum en tijd te kiezen die u
                  uitkomt.
                </li>
                <li className="pl-2">
                  <strong>Via WhatsApp:</strong> Heeft u eerst nog vragen of
                  overlegt u liever even? Stuur gerust een berichtje via
                  WhatsApp. Wij reageren zo snel mogelijk.
                </li>
              </ol>
              <a
                href="https://wa.me/31657998330"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-sm bg-[#25D366] text-white text-xs font-medium hover:bg-[#128C7E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              >
                <iconify-icon
                  icon="solar:chat-round-dots-bold"
                  className="text-base"
                />
                Stuur een WhatsApp
              </a>
            </section>

            <section>
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Betaling
              </h2>
              <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                We houden de administratie rondom uw acupunctuur sessie graag zo
                overzichtelijk mogelijk.
              </p>
              <ul className="space-y-3 text-sm font-light text-[#1F3A36]/80">
                <li className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:card-linear"
                    className="text-[#8A6B3D] text-lg"
                  />
                  Betaling gebeurt direct na de behandeling in de praktijk.
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:wallet-linear"
                    className="text-[#8A6B3D] text-lg"
                  />
                  U kunt ter plekke eenvoudig met PIN betalen.
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon
                    icon="solar:document-add-linear"
                    className="text-[#8A6B3D] text-lg mt-0.5"
                  />
                  U ontvangt de factuur digitaal per e-mail. Deze kunt u
                  vervolgens zelf indienen bij uw zorgverzekeraar indien u
                  aanvullend verzekerd bent.
                </li>
              </ul>
            </section>
          </div>

          {/* Internal links */}
          <section className="mb-8 p-6 bg-[#F2EDE3]/40 rounded-xl border border-[#1F3A36]/5">
            <h3
              className="text-lg font-normal text-[#1F3A36] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Meer informatie
            </h3>
            <ul className="space-y-2 text-sm font-light text-[#1F3A36]/80">
              <li>
                <Link
                  href="/welke-klachten"
                  className="text-[#4A6559] underline hover:text-[#1F3A36]"
                >
                  Bekijk bij welke klachten acupunctuur kan helpen
                </Link>
              </li>
              <li>
                <Link
                  href="/behandelingen/acupunctuur-migraine"
                  className="text-[#4A6559] underline hover:text-[#1F3A36]"
                >
                  Lees meer over acupunctuur bij migraine
                </Link>
              </li>
              <li>
                <Link
                  href="/behandelingen/acupunctuur-lage-rugklachten"
                  className="text-[#4A6559] underline hover:text-[#1F3A36]"
                >
                  Lees meer over acupunctuur bij lage rugklachten
                </Link>
              </li>
            </ul>
          </section>
        </article>

        {/* FAQ Section */}
        <section id="faq" className="bg-[#FAF8F3] py-24 border-t border-[#1F3A36]/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-5xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen over acupunctuur
              </h2>
              <p className="text-base text-[#1F3A36]/80 max-w-2xl mx-auto font-light leading-relaxed">
                Antwoorden op de meest gestelde vragen rondom uw behandeling en
                voorbereiding.
              </p>
            </div>

            <div className="space-y-4">
              <details
                className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300"
                open
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-xl">
                  <span>Doet acupunctuur pijn?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Nee, over het algemeen doet een acupunctuurbehandeling geen
                  pijn. Wij werken met naaldjes die zo dun zijn als een haar. U
                  voelt wellicht een klein prikje wanneer de naald de huid
                  passeert, gevolgd door een licht tintelend, zwaar of warm
                  gevoel rondom het punt (het &lsquo;De Qi&rsquo; gevoel). Dit
                  is een teken dat de energie gaat stromen en wordt zelden als
                  pijnlijk ervaren.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-xl">
                  <span>Hoeveel behandelingen zijn er nodig?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Dit is erg afhankelijk van de aard van uw klachten. Bij acute,
                  recente klachten merkt u vaak al na 2 tot 4 behandelingen een
                  aanzienlijke verbetering. Bij chronische klachten die al jaren
                  spelen, heeft het lichaam vaak meer tijd nodig en kan een
                  traject van 6 tot 10 sessies nodig zijn. Tijdens de intake
                  geven wij u hier een realistische inschatting van.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-xl">
                  <span>Hoe snel merk je resultaat?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Sommige patiënten voelen direct na de eerste sessie al
                  verlichting van pijn of een diepe ontspanning. Bij anderen is
                  er na een dag of twee dagen effect merkbaar. Soms treedt er na
                  de eerste behandeling een lichte beginverergering op; dit is
                  onschuldig en betekent dat het lichaam reageert op de prikkel.
                  Vaak treedt de echte verbetering op na enkele opeenvolgende
                  sessies.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-xl">
                  <span>Is acupunctuur veilig?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Ja, in de handen van een goed opgeleide professional is
                  acupunctuur een zeer veilige behandelmethode. Wij gebruiken
                  uitsluitend steriele, eenmalig te gebruiken wegwerpnaalden om
                  infecties uit te sluiten. Als aangesloten lid bij erkende
                  beroepsverenigingen voldoen wij aan strenge hygiëne- en
                  veiligheidseisen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-xl">
                  <span>Moet ik iets voorbereiden voor de behandeling?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Zorg ervoor dat u niet met een volledig lege maag naar de
                  praktijk komt, maar vermijd ook een zeer zware maaltijd net
                  voor uw afspraak. Probeer indien mogelijk extreme stress of
                  zware fysieke inspanning vlak voor uw sessie te vermijden,
                  zodat uw lichaam optimaal kan reageren op de behandeling. Neem
                  een grote handdoek mee en eventueel een overzicht van uw
                  medicatie.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-xl">
                  <span>Kan ik na de behandeling gewoon werken of sporten?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  U kunt na de behandeling uw normale dagelijkse bezigheden
                  vaak gewoon hervatten. Wel is het raadzaam om op de dag van de
                  behandeling zware fysieke of emotionele inspanning (zoals
                  intensief sporten) te vermijden. Uw lichaam is bezig met het
                  verwerken van de prikkels en het herstellen van de balans;
                  rust ondersteunt dit proces.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-xl">
                  <span>Wat moet ik aantrekken naar de afspraak?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Draag bij voorkeur makkelijke, loszittende kleding.
                  Veelgebruikte acupunctuurpunten liggen op de onderarmen (tot
                  de elleboog) en onderbenen (tot de knie). Kleding die u
                  makkelijk kunt oprollen is daarom ideaal.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#1F3A36] text-[#FAF8F3] py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Waarom kiezen voor Acupunctuur Zaandam?
              </h2>
              <ul className="space-y-4 font-light text-[#FAF8F3]/90 text-sm md:text-base mb-8">
                <li className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:star-fall-minimalistic-2-linear"
                    className="text-[#8A6B3D] text-xl shrink-0"
                  />
                  <span>
                    <strong>Persoonlijke aandacht:</strong> We kijken verder dan
                    de klacht alleen en nemen de tijd voor uw verhaal.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:shield-check-linear"
                    className="text-[#8A6B3D] text-xl shrink-0"
                  />
                  <span>
                    <strong>Professionele behandeling:</strong> Behandelingen
                    gebaseerd op een gedegen opleiding in TCG en westerse
                    medische basiskennis.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:sofa-linear"
                    className="text-[#8A6B3D] text-xl shrink-0"
                  />
                  <span>
                    <strong>Rustige behandelomgeving:</strong> Een veilige haven
                    in de drukte waar u volledig tot rust kunt komen.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:map-point-wave-linear"
                    className="text-[#8A6B3D] text-xl shrink-0"
                  />
                  <span>
                    <strong>Centrale praktijk in Zaandam:</strong> Makkelijk
                    bereikbaar.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FAF8F3]/5 p-8 rounded-2xl border border-[#FAF8F3]/10 backdrop-blur-sm">
              <h3 className="text-sm font-medium tracking-widest uppercase text-[#8A6B3D] mb-4">
                Onze patiënten komen uit de hele regio
              </h3>
              <p className="text-sm font-light text-[#FAF8F3]/80 leading-relaxed mb-4">
                Onze acupunctuur praktijk trekt mensen aan die op zoek zijn naar
                een betrouwbare en natuurlijke manier van genezen. Wij
                verwelkomen dagelijks patiënten uit:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full border border-[#FAF8F3]/20 text-xs font-light">
                  Zaandam
                </span>
                <span className="px-3 py-1 rounded-full border border-[#FAF8F3]/20 text-xs font-light">
                  Zaanstad
                </span>
                <span className="px-3 py-1 rounded-full border border-[#FAF8F3]/20 text-xs font-light">
                  Wormerveer
                </span>
                <span className="px-3 py-1 rounded-full border border-[#FAF8F3]/20 text-xs font-light">
                  Koog aan de Zaan
                </span>
                <span className="px-3 py-1 rounded-full border border-[#FAF8F3]/20 text-xs font-light">
                  Assendelft
                </span>
                <span className="px-3 py-1 rounded-full border border-[#FAF8F3]/20 text-xs font-light">
                  Zaandijk
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="afspraak-maken"
          className="overflow-hidden text-center bg-[#F2EDE3] py-24 relative"
        >
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F3A36] text-[#FAF8F3] mb-6">
                  <iconify-icon
                    icon="solar:calendar-add-linear"
                    className="text-2xl"
                  />
                </div>

                <h2
                  className="md:text-5xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Plan direct uw acupunctuur behandeling
                </h2>
                <p className="leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-lg mb-10">
                  Bent u klaar om de stap naar herstel te zetten? Plan direct
                  een afspraak via de online agenda hiernaast. Kies het gewenste
                  consult en een tijdstip dat voor u past.
                  <br />
                  <br />
                  Heeft u toch eerst nog vragen over acupunctuur therapie? Stuur
                  gerust een WhatsApp bericht.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF8F3] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
                  >
                    <iconify-icon
                      icon="solar:chat-round-dots-bold"
                      className="text-lg"
                    />
                    WhatsApp ons
                  </a>
                </div>
              </div>

              {/* GHL Planner */}
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/20 to-[#4A6559]/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300" />
                <div className="relative w-full bg-white rounded-xl shadow-xl border border-[#1F3A36]/5 overflow-hidden flex flex-col">
                  <div className="flex shrink-0 bg-[#FAF8F3] h-10 border-[#1F3A36]/5 border-b pr-4 pl-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                    </div>
                    <span className="text-[10px] font-medium tracking-widest uppercase text-[#1F3A36]/40">
                      Online Agenda
                    </span>
                    <div className="w-10" />
                  </div>

                  <div className="w-full bg-white min-h-[600px] flex-grow relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg
                        className="animate-spin h-8 w-8 text-[#4A6559]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
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
                      loading="lazy"
                      id="D8uouGkFZH4Alr37y5z4_1772903081790"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
