import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Trigeminusneuralgie Zaandam | Aangezichtspijn",
  description:
    "Trigeminusneuralgie veroorzaakt hevige, schietende pijn in het gezicht. Acupunctuur in Zaandam biedt ondersteuning bij pijnverlichting en vermindering van aanvalsfrequentie.",
  keywords: [
    "acupunctuur trigeminusneuralgie",
    "trigeminusneuralgie behandeling zaandam",
    "aangezichtspijn acupunctuur",
    "trigeminuszenuw pijn acupunctuur",
    "gezichtspijn behandeling zaandam",
    "acupunctuur trigeminuspijn",
    "trigeminusneuralgie holistische behandeling",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/trigeminus-neuralgie",
      name: "Acupunctuur bij Trigeminusneuralgie in Zaandam",
      description:
        "Informatie over de behandeling van trigeminusneuralgie en ernstige aangezichtspijn via acupunctuur en Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Trigeminusneuralgie" },
        { "@type": "MedicalCondition", name: "Aangezichtspijn" },
        { "@type": "MedicalCondition", name: "Trigeminuspijn" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Trigeminusneuralgie" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur helpen bij trigeminusneuralgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur wordt ingezet als aanvullende behandeling bij trigeminusneuralgie. Vanuit TCG-perspectief richt de behandeling zich op het uitdrijven van Wind-Hitte uit de yangmeridianen van het gezicht en het vrij maken van de meridianen. Vanuit westerse fysiologie moduleert acupunctuur de pijnverwerking via endorfine-afgifte en het zenuwstelsel. Veel patiënten ervaren een vermindering van de aanvalsfrequentie en -intensiteit, al zijn de resultaten individueel.",
          },
        },
        {
          "@type": "Question",
          name: "Wat zijn de trigeminustakken en welke is aangedaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De trigeminuszenuw heeft drie takken: V1 (oogtak, voorhoofd), V2 (bovenkaaktak, wang en bovenste kies) en V3 (onderkaaktak, onderkies en kin). De meeste mensen met trigeminusneuralgie hebben pijn in V2 of V3. In de intake bepalen we welke tak betrokken is en passen de naaldzetting hierop aan.",
          },
        },
        {
          "@type": "Question",
          name: "Moet ik stoppen met mijn medicatie als ik acupunctuur volg?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absoluut niet. Acupunctuur is complementair aan uw neurologische behandeling, inclusief carbamazepine of andere anticonvulsiva. We werken graag samen met uw neuroloog. Naarmate de pijn afneemt, kunt u in overleg met uw specialist bekijken of aanpassing van de medicatie gewenst is.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel werkt acupunctuur bij trigeminusneuralgie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dit varieert sterk per persoon en per stadium van de aandoening. Sommige cliënten ervaren al na enkele behandelingen een vermindering van de aanvalsfrequentie. Bij langdurige of ernstige trigeminusneuralgie adviseren we een traject van 10 tot 15 sessies voor een eerlijke evaluatie van het effect.",
          },
        },
      ],
    },
  ],
};

export default function TrigeminusNeuralgiePage() {
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
            <span className="text-[#1F3A36]">Trigeminusneuralgie</span>
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
              Acupunctuur bij Trigeminusneuralgie in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Trigeminusneuralgie wordt beschreven als een van de hevigste pijnen die een mens kan ervaren. Plotselinge, elektrische schokken van pijn die door het gezicht schieten — soms getriggerd door het meest alledaagse, zoals eten, praten of een zuchtje wind. Acupunctuur biedt ondersteuning bij het verminderen van de aanvalsfrequentie en het verlagen van de pijnintensiteit.
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

            {/* Wat is TN */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wat is trigeminusneuralgie?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Trigeminusneuralgie (TN) is een chronische pijnaandoening van de nervus trigeminus — de vijfde hersenzenuw die verantwoordelijk is voor de gevoel in het gezicht. Bij TN worden plotselinge, ernstige pijnaanvallen ervaren: elektrische schokken of steken die seconden tot minuten duren en door de wang, kaak, tanden of lippen schieten. De pijn is doorgaans eenzijdig.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                De aandoening wordt ook wel <em>tic douloureux</em> genoemd. Ze treft vaker vrouwen dan mannen en komt het meest voor na het vijftigste levensjaar, hoewel ze op elke leeftijd kan optreden. Aanvallen kunnen worden uitgelokt door lichte aanraking, eten, drinken, tandenpoetsen, een koud windje of zelfs praten.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Klassieke TN (type 1) kenmerkt zich door korte aanvallen met pijnvrije intervallen. Atypische TN (type 2) gaat gepaard met een achtergrondbrandpijn die constant aanwezig is. Beide vormen kunnen worden ondersteund met acupunctuur, al reageren ze vaak verschillend op behandeling.
              </p>
            </section>

            {/* Symptomen & triggers */}
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
                      "Plotselinge, ernstige stekende pijn in het gezicht",
                      "Pijn die voelt als een elektrische schok",
                      "Aanvallen van enkele seconden tot minuten",
                      "Eenzijdige pijn in wang, kaak, tanden of lippen",
                      "Kramp of spiertrekking tijdens een aanval (tic)",
                      "Angst voor eten, praten of buitenkomen",
                      "Bij atypische TN: constante brandende achtergrondpijn",
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
                      "Compressie van de trigeminuszenuw door een bloedvat",
                      "Demyelinisatie van de zenuwschede (zoals bij MS)",
                      "Tumor of cyste nabij de trigeminuszenuw",
                      "Idiopathisch (oorzaak onduidelijk)",
                      "Traumatisch letsel aan het aangezicht of de schedelbasis",
                      "Ontstekingsreacties na tandheelkundige ingrepen",
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

            {/* De drie takken */}
            <section>
              <h2
                className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                De drie takken van de trigeminuszenuw
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    title: "V1 — Oogtak",
                    desc: "Voorziet het voorhoofd, de hoofdhuid, de bovenste oogleden en het puntje van de neus van gevoel. Minder vaak aangedaan bij klassieke TN.",
                  },
                  {
                    title: "V2 — Bovenkaaktak",
                    desc: "Voorziet de wang, de onderlip van de neus, de bovenste kiezen en het gehemelte. Vaak betrokken bij klassieke TN, pijn in de wang en bovenste kaken.",
                  },
                  {
                    title: "V3 — Onderkaaktak",
                    desc: "Voorziet de onderkaken, de ondertanden, de tong en de kin. Meest frequent aangedaan bij TN, met name in combinatie met V2.",
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
                    In de TCG wordt trigeminusneuralgie beschouwd als een invasie van <em>Wind-Hitte</em> of <em>Wind-Koude</em> in de yang-meridianen van het gezicht — met name de Maagmeridiaan (ST), de Galblaasmeridiaan (GB) en de Dikke Darmmeridiaan (LI). Deze pathogene factoren blokkeren de vrije doorstroom van Qi en Bloed, wat leidt tot hevige, scherpe pijn. Bij chronische gevallen speelt ook <em>stagnatie van Qi en Bloed</em> een rol, waarbij de meridianen in het gezicht als het ware vastlopen. De behandeling richt zich op het uitdrijven van Wind, het vrij maken van de meridianen en het kalmeren van het Yang in het hoofd.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">
                    Moderne fysiologische verklaringen
                  </h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Zenuwstelsel:</strong> Acupunctuur moduleert de pijnverwerking in het trigeminovasculaire systeem via de afgifte van endorfines, enkefalines en serotonine. Dit verhoogt de pijndrempel en vermindert de centrale sensitisatie die TN in stand houdt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Doorbloeding:</strong> Lokale naaldzetting rondom de trigeminustakken verbetert de microcirculatie, wat bijdraagt aan ontstekingsvermindering en mogelijk de zenuwschede ondersteunt.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Autonome modulatie:</strong> Acupunctuur kalmeert de overactieve pijnrespons via het parasympathische zenuwstelsel, waardoor de aanvalsgevoeligheid van de trigeminuszenuw wordt verlaagd.
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
                Bij trigeminusneuralgie werken we voorzichtig en afgestemd op uw pijnniveau. In de beginfase behandelen we voornamelijk op distale punten (handen, voeten) en vermijden we directe prikkeling van het aangezicht totdat de gevoeligheid is afgenomen. Naarmate de behandeling vordert, kunnen lokale punten op het gezicht en de schedelbasis worden toegevoegd.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                We adviseren een traject van 10 tot 15 behandelingen in de eerste fase, met wekelijkse sessies. Acupunctuur wordt altijd in combinatie met uw reguliere behandeling uitgevoerd en vervangt nooit neurochirurgische of neurologische zorg bij ernstige gevallen.
              </p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Naast naalden kunnen we ook gebruik maken van moxibustie (warmtebehandeling) bij patronen waarbij Koude de oorzaak is, of van auriculotherapie (ooracupunctuur) ter ondersteuning.
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
                  "Mensen met gediagnosticeerde trigeminusneuralgie",
                  "Mensen die medicatie willen aanvullen met acupunctuur",
                  "Mensen bij wie medicatie onvoldoende werkt of bijwerkingen geeft",
                  "Mensen met atypische TN en aanhoudende brandpijn",
                  "Mensen die na tandheelkundige ingrepen gezichtspijn hebben",
                  "Mensen die een operatie willen uitstellen of vermijden",
                  "Mensen met MS die TN ervaren als complicatie",
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
                Onze praktijk is centraal gelegen in Zaandam en bereikbaar vanuit <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>. We behandelen ook verwante klachten zoals aangezichtspijn en hoofdpijn in hetzelfde traject.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/hoofd-zenuwstelsel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofd &amp; zenuwstelsel overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/aangezichtspijn" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Aangezichtspijn
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/hoofdpijn" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Hoofdpijn
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/nekklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Nekklachten
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
                  q: "Kan acupunctuur helpen bij trigeminusneuralgie?",
                  a: "Acupunctuur wordt ingezet als aanvullende behandeling bij trigeminusneuralgie. Vanuit TCG-perspectief richt de behandeling zich op het uitdrijven van Wind-Hitte uit de yangmeridianen van het gezicht en het vrij maken van de meridianen. Vanuit westerse fysiologie moduleert acupunctuur de pijnverwerking via endorfine-afgifte en het zenuwstelsel. Veel patiënten ervaren een vermindering van de aanvalsfrequentie en -intensiteit, al zijn de resultaten individueel.",
                },
                {
                  q: "Wat zijn de trigeminustakken en welke is aangedaan?",
                  a: "De trigeminuszenuw heeft drie takken: V1 (oogtak, voorhoofd), V2 (bovenkaaktak, wang en bovenste kies) en V3 (onderkaaktak, onderkies en kin). De meeste mensen met trigeminusneuralgie hebben pijn in V2 of V3. In de intake bepalen we welke tak betrokken is en passen de naaldzetting hierop aan.",
                },
                {
                  q: "Moet ik stoppen met mijn medicatie als ik acupunctuur volg?",
                  a: "Absoluut niet. Acupunctuur is complementair aan uw neurologische behandeling, inclusief carbamazepine of andere anticonvulsiva. We werken graag samen met uw neuroloog. Naarmate de pijn afneemt, kunt u in overleg met uw specialist bekijken of aanpassing van de medicatie gewenst is.",
                },
                {
                  q: "Hoe snel werkt acupunctuur bij trigeminusneuralgie?",
                  a: "Dit varieert sterk per persoon en per stadium van de aandoening. Sommige cliënten ervaren al na enkele behandelingen een vermindering van de aanvalsfrequentie. Bij langdurige of ernstige trigeminusneuralgie adviseren we een traject van 10 tot 15 sessies voor een eerlijke evaluatie van het effect.",
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
                  Plan een intake en bespreek uw situatie met ons. We nemen de tijd om uw pijnpatroon goed te begrijpen en stellen een behandelplan op dat aansluit bij uw specifieke klachten.
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
                      id="D8uouGkFZH4Alr37y5z4_trigeminus_neuralgie"
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
