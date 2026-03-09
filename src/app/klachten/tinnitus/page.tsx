import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Tinnitus Zaandam | Oorsuizen Behandelen",
  description:
    "Last van oorsuizen of tinnitus? Acupunctuur in Zaandam ondersteunt het auditieve systeem, vermindert stressgerelateerd oorsuizen en verbetert de doorbloeding van het binnenoor.",
  keywords: [
    "acupunctuur tinnitus",
    "oorsuizen behandeling zaandam",
    "tinnitus acupunctuur",
    "chronisch oorsuizen acupunctuur",
    "stress tinnitus acupunctuur zaandam",
    "tinnitus binnenoor behandeling",
    "acupunctuur oorsuizen zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/tinnitus",
      name: "Acupunctuur bij Tinnitus (Oorsuizen) in Zaandam",
      description:
        "Informatie over de behandeling van tinnitus en oorsuizen via acupunctuur en Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Tinnitus" },
        { "@type": "MedicalCondition", name: "Oorsuizen" },
        { "@type": "MedicalCondition", name: "Chronisch tinnitus" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Tinnitus" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur tinnitus (oorsuizen) verminderen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan bij tinnitus een waardevolle aanvulling zijn, met name wanneer de klachten samenhangen met stress, slaaptekort of gespannen nek- en schoudermusculatuur. We richten ons op het verbeteren van de doorbloeding van het binnenoor, het verlagen van de stressreactie en het ondersteunen van het auditieve systeem vanuit TCG-perspectief. Resultaten variëren per persoon, maar veel cliënten ervaren een afname van de intensiteit of de ervaren overlast.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is het verschil tussen acuut en chronisch tinnitus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acuut tinnitus is korter dan drie maanden aanwezig en reageert over het algemeen beter op behandeling. Chronisch tinnitus duurt langer dan drie maanden. Bij chronische klachten richt acupunctuur zich niet alleen op het geluid zelf, maar ook op de vermindering van de emotionele belasting en de verbetering van de slaapkwaliteit die tinnitus verstoort.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen zijn nodig bij tinnitus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We adviseren een traject van 8 tot 12 behandelingen, wekelijks of tweewekelijks. Bij acuut tinnitus kan het resultaat sneller zichtbaar zijn. Bij chronisch tinnitus is meer geduld nodig; de behandeling richt zich op geleidelijke verbetering van het welbevinden en de vermindering van de overlast die het geluid veroorzaakt.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur bij tinnitus vergoed door de zorgverzekeraar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij de meeste Nederlandse zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function TinnitusPage() {
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
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Welke klachten</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/klachten/hoofd-zenuwstelsel" className="hover:text-[#1F3A36] transition-colors">Hoofd &amp; zenuwstelsel</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Tinnitus</span>
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
              Acupunctuur bij Tinnitus in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een aanhoudend suizend, piepend of ruisend geluid dat nooit stopt — tinnitus kan de slaap verstoren, concentratie ondermijnen en een constante bron van stress zijn. Acupunctuur richt zich op de onderliggende disbalansen die het oorsuizen voeden en ondersteunt het auditieve systeem op zowel oost als west niveau.
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

            {/* Featured Snippet — targets "Helpt acupunctuur bij tinnitus?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur kan tinnitus verlichten door de doorbloeding naar het binnenoor te verbeteren, het zenuwstelsel tot rust te brengen en onderliggende stressfactoren te behandelen. Hoewel tinnitus niet altijd volledig verdwijnt, rapporteren veel patiënten aanzienlijk minder geluidsoverlast en een beter slaappatroon na behandeling.
              </p>
            </div>

            {/* Wat is tinnitus */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is tinnitus?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Tinnitus — in het Nederlands oorsuizen — is het waarnemen van geluid zonder dat er een externe geluidsbron aanwezig is. Het geluid kan zich manifesteren als suizen, piepen, ruisen, kloppen of een hoog- of laagfrequente toon. Naar schatting ervaart 15 tot 20% van de bevolking op enig moment in hun leven tinnitus; voor ongeveer 2% is het een chronisch en invaliderend probleem.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Tinnitus is geen ziekte op zichzelf, maar een symptoom dat kan worden veroorzaakt door uiteenlopende factoren: schade aan haarcellen in het binnenoor, doorbloedingsstoornissen, spierspanning in de kaak of nek, medicijnen, stress of een combinatie van al deze factoren. Omdat tinnitus zo multifactorieel is, biedt een holistische benadering zoals acupunctuur dikwijls meer perspectief dan één enkel behandelspoor.
              </p>
            </section>

            {/* Symptomen & oorzaken */}
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
                    {[
                      "Suizend, piepend of ruisend geluid in één of beide oren",
                      "Geluid dat verergert bij stress of vermoeidheid",
                      "Moeite met inslapen door het geluid",
                      "Concentratieproblemen overdag",
                      "Verhoogde prikkelbaarheid of angst",
                      "Soms gepaard met gehoorverlies of druk op het oor",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
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
                    {[
                      "Gehoorschade door lawaaibeschadiging",
                      "Doorbloedingsstoornis van de cochlea",
                      "Stress en overactivering van het zenuwstelsel",
                      "Kaakklachten (TMJ-disfunctie)",
                      "Nekspanning en cervicogene druk",
                      "Bijwerking van bepaalde medicijnen (ototoxiciteit)",
                      "Leeftijdsgerelateerd gehoorverlies (presbyacusis)",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Vormen */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Acuut versus chronisch tinnitus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "Acuut tinnitus",
                    desc: "Korter dan drie maanden aanwezig. Kan ontstaan na lawaaiblootstelling, een luchtweginfectie of plotselinge stress. Acuut tinnitus reageert het beste op vroegtijdige behandeling; herstel is vaker mogelijk.",
                  },
                  {
                    title: "Chronisch tinnitus",
                    desc: "Langer dan drie maanden aanwezig. Volledige eliminatie is moeilijker, maar de intensiteit en emotionele belasting kunnen via acupunctuur en leefstijlaanpassingen aanzienlijk worden verminderd.",
                  },
                  {
                    title: "Stressgerelateerd tinnitus",
                    desc: "Tinnitus die duidelijk fluctueert met de stressniveaus. Kalmer bij ontspanning, luider bij drukte of deadlines. Dit patroon reageert goed op acupunctuur die het zenuwstelsel reguleert.",
                  },
                  {
                    title: "Tinnitus met gehoorverlies",
                    desc: "Tinnitus die gepaard gaat met verminderd gehoor, zoals bij de ziekte van Menière of presbyacusis. Acupunctuur ondersteunt de doorbloeding van het binnenoor en het cochleaire herstel.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hoe acupunctuur helpt */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe acupunctuur kan helpen
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    De visie vanuit Traditionele Chinese Geneeskunde (TCG)
                  </h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG zijn de oren nauw verbonden met de <em>Nier-meridiaan</em>. De Nieren voeden het Yin van het lichaam; een Nier-Yin-leegte leidt tot relatief teveel Yang en Vuur, wat zich manifesteert als een hoog piepend geluid in de oren, met name&apos;s avonds en bij rust. Bij jongere mensen met stressgerelateerd tinnitus zien we vaker een patroon van <em>Lever-Qi-stagnatie</em> dat opstijgt naar het hoofd en de oren. De <em>Galblaas-meridiaan</em> loopt langs het oor en speelt bij veel patiënten een directe rol. Behandeling richt zich op het voeden van het Nier-Yin, het dalen van opstijgend Vuur en het vrij maken van de meridianen rondom het oor.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Cochleaire doorbloeding:</strong> Acupunctuur stimuleert de microcirculatie in de cochlea via vasodilatatie, wat bijdraagt aan herstel van de haarcellen en vermindering van het oorsuizen.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Stressrespons:</strong> Via het autonome zenuwstelsel verlaagt acupunctuur de HPA-as-activiteit, waardoor cortisolniveaus dalen en het overactieve zenuwstelsel kalmeert — een directe modulatie van stressgerelateerd tinnitus.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Zenuwstelsel:</strong> Lokale punten rondom het oor (zoals SI 19, GB 2, TE 21) stimuleren de sensorische verwerking en kunnen de centrale sensitisatie die chronisch tinnitus in stand houdt, doorbreken.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Nekpunten verbeteren de veneuze afvoer en de arteriële doorbloeding naar de schedelbasis, wat bijdraagt aan vermindering van vasculair tinnitus.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Wat te verwachten */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat kunt u verwachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Tinnitus vereist geduld. Bij chronische klachten stellen we realistische verwachtingen: het doel is de intensiteit van het geluid te verminderen, de emotionele belasting te verlagen en de slaapkwaliteit te verbeteren. Volledige verdwijning is mogelijk bij acuut tinnitus, maar bij langdurige klachten minder voorspelbaar.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                We plaatsen naalden rondom het oor (lokale punten), op de nek, de schouders, de handen en de voeten. Afhankelijk van het patroon voegen we punten toe die het Nier-Yin voeden of het Lever-Vuur doen dalen. Een behandeling duurt gemiddeld 45 minuten en veel cliënten ervaren een merkbare ontspanning na afloop.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                We adviseren ook leefstijlmaatregelen: het vermijden van lawaai, cafeïnevermindering, stressmanagement en voldoende slaap. Deze factoren versterken het effect van de acupunctuurbehandeling aanzienlijk.
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
                {[
                  "Mensen met acuut oorsuizen (korter dan 3 maanden)",
                  "Mensen met chronisch tinnitus die overlast ervaren",
                  "Mensen bij wie stress het oorsuizen verergert",
                  "Mensen met tinnitus én nekklachten of kaakklachten",
                  "Mensen met slaapproblemen door het geluid",
                  "Mensen die reguliere behandeling willen aanvullen",
                  "Mensen met tinnitus bij de ziekte van Menière",
                  "Mensen die hun medicatiegebruik willen verminderen",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span className="text-sm font-medium text-[#1F3A36]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Behandeling in Zaandam */}
            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2
                className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Behandeling in Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam en bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. Tinnitus en duizeligheid gaan regelmatig samen — we behandelen beide klachten in hetzelfde traject.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/hoofd-zenuwstelsel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofd &amp; zenuwstelsel overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/duizeligheid" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Duizeligheid
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/stressklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Stressklachten
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/hoofdpijn" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofdpijn
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
                Veelgestelde vragen
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Kan acupunctuur tinnitus (oorsuizen) verminderen?",
                  a: "Acupunctuur kan bij tinnitus een waardevolle aanvulling zijn, met name wanneer de klachten samenhangen met stress, slaaptekort of gespannen nek- en schoudermusculatuur. We richten ons op het verbeteren van de doorbloeding van het binnenoor, het verlagen van de stressreactie en het ondersteunen van het auditieve systeem vanuit TCG-perspectief. Resultaten variëren per persoon, maar veel cliënten ervaren een afname van de intensiteit of de ervaren overlast.",
                },
                {
                  q: "Wat is het verschil tussen acuut en chronisch tinnitus?",
                  a: "Acuut tinnitus is korter dan drie maanden aanwezig en reageert over het algemeen beter op behandeling. Chronisch tinnitus duurt langer dan drie maanden. Bij chronische klachten richt acupunctuur zich niet alleen op het geluid zelf, maar ook op de vermindering van de emotionele belasting en de verbetering van de slaapkwaliteit die tinnitus verstoort.",
                },
                {
                  q: "Hoeveel behandelingen zijn nodig bij tinnitus?",
                  a: "We adviseren een traject van 8 tot 12 behandelingen, wekelijks of tweewekelijks. Bij acuut tinnitus kan het resultaat sneller zichtbaar zijn. Bij chronisch tinnitus is meer geduld nodig; de behandeling richt zich op geleidelijke verbetering van het welbevinden en de vermindering van de overlast die het geluid veroorzaakt.",
                },
                {
                  q: "Wordt acupunctuur bij tinnitus vergoed door de zorgverzekeraar?",
                  a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij de meeste Nederlandse zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
                },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                    {item.q}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
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
                { href: "/klachten/slaapproblemen", label: "Slaapproblemen" },
                { href: "/klachten/hoofdpijn", label: "Hoofdpijn" },
                { href: "/klachten/nekklachten", label: "Nekklachten" },
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

        {/* CTA */}
        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" />
                </svg>
                <h2
                  id="cta-titel"
                  className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Klaar om verlichting te vinden?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan een intake en laat ons uw tinnitusklachten grondig bespreken. Wilt u eerst weten of acupunctuur bij uw situatie past? Stuur ons gerust een WhatsApp-bericht.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
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
                      id="D8uouGkFZH4Alr37y5z4_tinnitus"
                      title="Maak een afspraak"
                      loading="lazy"
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
