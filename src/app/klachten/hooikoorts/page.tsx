import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Hooikoorts Zaandam | Minder Niezen, Minder Klachten",
  description:
    "Verminder hooikoorts symptomen met acupunctuur in Zaandam. Minder niezen, jeukende ogen en verstopte neus. Onderbouwd door de ACUSAR-studie (Annals of Internal Medicine 2013).",
  keywords: [
    "acupunctuur hooikoorts",
    "hooikoorts behandeling zaandam",
    "acupunctuur allergische rhinitis",
    "hooikoorts zonder antihistamine",
    "acupunctuur pollengriep zaandam",
    "hooikoorts alternatieve behandeling",
    "acupunctuur hooikoorts onderzoek",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/hooikoorts",
      name: "Acupunctuur bij Hooikoorts",
      description:
        "Informatie over de behandeling van hooikoorts en seizoensgebonden allergische rhinitis via Traditionele Chinese Geneeskunde in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Hooikoorts" },
        { "@type": "MedicalCondition", name: "Allergische rhinitis" },
        { "@type": "MedicalCondition", name: "Seizoensgebonden allergie" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Hooikoorts" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is er wetenschappelijk bewijs voor acupunctuur bij hooikoorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. De ACUSAR-studie (Brinkhaus et al., 2013), gepubliceerd in Annals of Internal Medicine, onderzocht 422 patiënten met seizoensgebonden allergische rhinitis. De groep die acupunctuur ontving had significant minder klachten en gebruikte minder antihistaminica dan de controlegroep. Dit is een van de grootste en meest rigoureuze onderzoeken naar acupunctuur bij hooikoorts.",
          },
        },
        {
          "@type": "Question",
          name: "Wanneer moet ik beginnen met acupunctuur voor mijn hooikoorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Het beste moment is vier tot zes weken vóór het pollenseizoen. Door te starten vóórdat de klachten opkomen, bouw je een beschermende basis op. Veel patiënten merken dat ze bij tijdige behandeling aanzienlijk minder last hebben zodra het seizoen begint.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik acupunctuur combineren met antihistaminica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, dat kan veilig. Veel patiënten starten met acupunctuur naast hun reguliere medicatie. Naarmate de klachten afnemen, is het mogelijk — in overleg met uw huisarts — om de medicatie te verminderen. Acupunctuur heeft geen bekende interacties met antihistaminica.",
          },
        },
        {
          "@type": "Question",
          name: "Hoeveel behandelingen heb ik nodig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Een typisch traject bestaat uit zes tot acht behandelingen: wekelijks vóór en tijdens het pollenseizoen. Bij jaarrondse allergie wordt het schema aangepast op uw persoonlijk patroon. Veel patiënten kiezen voor een jaarlijkse onderhoudskuur vóór het seizoen.",
          },
        },
      ],
    },
  ],
};

export default function HooikoortsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="fixed top-[110px] left-0 right-0 z-30 bg-[#FAF8F3]/90 backdrop-blur-sm border-b border-[#1F3A36]/10">
        <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-[#4A6559]">
          <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
          <span className="mx-2 text-[#8A6B3D]">/</span>
          <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Welke klachten</Link>
          <span className="mx-2 text-[#8A6B3D]">/</span>
          <Link href="/klachten/luchtwegen-allergieen" className="hover:text-[#1F3A36] transition-colors">Luchtwegen &amp; allergieën</Link>
          <span className="mx-2 text-[#8A6B3D]">/</span>
          <span className="text-[#1F3A36] font-medium">Hooikoorts</span>
        </div>
      </div>

      <main className="bg-[#FAF8F3] pt-[150px]">
        {/* Hero */}
        <section className="bg-[#1F3A36] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#8A6B3D] text-sm uppercase tracking-widest mb-4 font-medium">
              Luchtwegen &amp; allergieën
            </p>
            <h1
              className="text-4xl md:text-5xl font-light mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Acupunctuur bij Hooikoorts
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Elk voorjaar hetzelfde verhaal: niezen, jeukende ogen, een verstopte neus. Acupunctuur
              helpt uw immuunsysteem rustiger te reageren op pollen — zodat het seizoen draaglijker wordt.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#afspraak"
                className="bg-[#8A6B3D] text-white px-6 py-3 rounded-sm hover:bg-[#7A5B2D] transition-colors"
              >
                Afspraak maken
              </a>
              <a
                href="#aanpak"
                className="border border-white/40 text-white px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
              >
                Hoe werkt het?
              </a>
            </div>
          </div>
        </section>

        {/* Wat is hooikoorts */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-light text-[#1F3A36] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Wat is hooikoorts?
            </h2>
            <div className="prose prose-lg max-w-none text-[#1F3A36]/80 leading-relaxed space-y-4">
              <p>
                Hooikoorts — medisch ook wel <em>seizoensgebonden allergische rhinitis</em> genoemd — is
                een overreactie van het immuunsysteem op pollen van grassen, bomen of kruiden. Zodra u
                pollen inademt, interpreteert uw afweersysteem deze als een bedreiging en geeft het
                histamine vrij. Dat veroorzaakt de bekende klachten: niezen, jeukende en tranende ogen,
                een loopneus of juist een verstopte neus.
              </p>
              <p>
                In Nederland heeft meer dan 15% van de bevolking last van hooikoorts. Het seizoen
                begint doorgaans in februari met elzenpollen, loopt door met berken (april–mei) en
                gras (mei–augustus), en eindigt rond september. Voor mensen met ernstige klachten kan
                dit een aanzienlijke belasting zijn op werk, slaap en kwaliteit van leven.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white rounded-lg p-6 border border-[#1F3A36]/10">
                <iconify-icon icon="\1" className="text-[#8A6B3D] text-3xl mb-3 block" />
                <h3 className="font-semibold text-[#1F3A36] mb-2">Ogen</h3>
                <p className="text-sm text-[#4A6559]">Jeuk, tranende en rode ogen (allergische conjunctivitis)</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#1F3A36]/10">
                <iconify-icon icon="\1" className="text-[#8A6B3D] text-3xl mb-3 block" />
                <h3 className="font-semibold text-[#1F3A36] mb-2">Neus</h3>
                <p className="text-sm text-[#4A6559]">Niezen, loopneus, verstopte neus, verminderd reukvermogen</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#1F3A36]/10">
                <iconify-icon icon="\1" className="text-[#8A6B3D] text-3xl mb-3 block" />
                <h3 className="font-semibold text-[#1F3A36] mb-2">Algemeen</h3>
                <p className="text-sm text-[#4A6559]">Vermoeidheid, concentratieproblemen, prikkelbaarheid</p>
              </div>
            </div>
          </div>
        </section>

        {/* Oorzaken */}
        <section className="py-16 px-4 bg-[#F2EDE3]">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-light text-[#1F3A36] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Oorzaken &amp; achtergrond
            </h2>
            <div className="prose prose-lg max-w-none text-[#1F3A36]/80 leading-relaxed space-y-4">
              <p>
                Hooikoorts ontstaat door een combinatie van genetische aanleg en omgevingsfactoren.
                Uw immuunsysteem heeft op jonge leeftijd een verkeerde &apos;afdruk&apos; gemaakt: het
                beschouwt onschadelijke pollen als gevaarlijk en reageert daar te heftig op.
                Stress, luchtvervuiling en een disbalans in de darmflora kunnen de gevoeligheid
                vergroten of klachten verergeren.
              </p>
              <p>
                Reguliere behandeling richt zich op het onderdrukken van de symptomen via
                antihistaminica, neussprays en oogdruppels. Hoewel die middelen snel verlichting
                geven, pakken ze de onderliggende gevoeligheid van het immuunsysteem niet aan.
                Acupunctuur zoekt een diepere balans.
              </p>
            </div>
          </div>
        </section>

        {/* Aanpak */}
        <section id="aanpak" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-light text-[#1F3A36] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              De acupunctuur aanpak
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3
                  className="text-xl font-light text-[#1F3A36] mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Traditioneel Chinees perspectief
                </h3>
                <p className="text-[#1F3A36]/80 leading-relaxed">
                  In de Traditionele Chinese Geneeskunde (TCG) wordt hooikoorts gezien als een
                  zwakte van het Longmeriidiaan en de beschermende levensenergie (Wei Qi). Wanneer
                  de Wei Qi niet sterk genoeg is, kunnen externe pathogenen — waaronder kou en wind
                  — binnendringen en klachten veroorzaken die lijken op hooikoorts. Acupunctuurpunten
                  op de long- en dikkedarm-meridiaan versterken de verdediging, terwijl punten
                  rondom de neus de lokale klachten verlichten.
                </p>
              </div>
              <div>
                <h3
                  className="text-xl font-light text-[#1F3A36] mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Westers biomedisch perspectief
                </h3>
                <p className="text-[#1F3A36]/80 leading-relaxed">
                  Onderzoek laat zien dat acupunctuur de afgifte van histamine kan remmen, de
                  regulatie van het immuunsysteem beïnvloedt (balans Th1/Th2) en het
                  parasympathisch zenuwstelsel activeert. Dat vertaalt zich in minder en mildere
                  reacties op pollen. Behandeling vóór het seizoen geeft het lichaam de tijd om
                  een rustiger reactiepatroon op te bouwen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wetenschappelijk bewijs */}
        <section className="py-16 px-4 bg-[#1F3A36] text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <iconify-icon icon="\1" className="text-[#8A6B3D] text-4xl flex-shrink-0 mt-1" />
              <div>
                <h2
                  className="text-3xl font-light mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Wetenschappelijk bewijs
                </h2>
                <p className="text-white/70 text-sm">Gepubliceerd onderzoek — geen claims, geen speculatie</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-[#8A6B3D] mb-3">
                ACUSAR-studie — Annals of Internal Medicine (2013)
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Brinkhaus B, et al. <em>Acupuncture in patients with seasonal allergic rhinitis:
                a randomized trial.</em> Ann Intern Med. 2013;158(4):225–234.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                In deze gerandomiseerde studie met <strong>422 patiënten</strong> met
                seizoensgebonden allergische rhinitis (hooikoorts) werden drie groepen vergeleken:
                echte acupunctuur + antihistaminica, sham-acupunctuur + antihistaminica, en
                alleen antihistaminica. De echte acupunctuurgroep scoorde significant beter op
                kwaliteit van leven en gebruikte minder antihistaminica dan beide controlegroepen.
              </p>
              <p className="text-white/70 text-sm">
                Dit is een van de grootste gerandomiseerde studies naar acupunctuur bij hooikoorts
                en werd gepubliceerd in een toonaangevend internationaal tijdschrift.
              </p>
            </div>
          </div>
        </section>

        {/* Behandeling verwachting */}
        <section className="py-16 px-4 bg-[#F2EDE3]">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-light text-[#1F3A36] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Wat kunt u verwachten?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-[#1F3A36]/10">
                <div className="text-[#8A6B3D] text-2xl font-light mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Stap 1
                </div>
                <h3 className="font-semibold text-[#1F3A36] mb-2">Intake &amp; analyse</h3>
                <p className="text-sm text-[#4A6559]">
                  Uitgebreide anamnese: uw pollenallergie, algehele gezondheid, slaap, energie en
                  voeding. Dit vormt de basis voor een persoonlijk behandelplan.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#1F3A36]/10">
                <div className="text-[#8A6B3D] text-2xl font-light mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Stap 2
                </div>
                <h3 className="font-semibold text-[#1F3A36] mb-2">Behandelreeks</h3>
                <p className="text-sm text-[#4A6559]">
                  Zes tot acht sessies, bij voorkeur vóór en tijdens het pollenseizoen. Wekelijkse
                  behandelingen voor optimale opbouw van de immunologische balans.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#1F3A36]/10">
                <div className="text-[#8A6B3D] text-2xl font-light mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Stap 3
                </div>
                <h3 className="font-semibold text-[#1F3A36] mb-2">Onderhoud</h3>
                <p className="text-sm text-[#4A6559]">
                  Veel patiënten kiezen voor een jaarlijkse preventieve kuur vóór het seizoen.
                  Dit houdt de bereikte balans vast en verkort de klachtenperiode.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Voor wie */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-light text-[#1F3A36] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Voor wie is dit geschikt?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Mensen met milde tot ernstige hooikoorts",
                "Mensen die antihistaminica willen verminderen of vermijden",
                "Mensen met jaarrondse allergische rhinitis (huisstofmijt, dierenhaar)",
                "Mensen bij wie medicatie onvoldoende helpt of bijwerkingen geeft",
                "Mensen die preventief willen behandelen vóór het pollenseizoen",
                "Mensen met gelijktijdige astmaklachten of eczeem",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-[#F2EDE3] rounded-lg p-4">
                  <iconify-icon icon="\1" className="text-[#8A6B3D] text-xl flex-shrink-0 mt-0.5" />
                  <span className="text-[#1F3A36]/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lokaal Zaandam */}
        <section className="py-12 px-4 bg-[#F2EDE3]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-[#1F3A36]/10">
              <h2
                className="text-2xl font-light text-[#1F3A36] mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Hooikoorts behandeling in Zaandam
              </h2>
              <p className="text-[#1F3A36]/80 leading-relaxed">
                Onze praktijk in het centrum van Zaandam behandelt jaarlijks vele patiënten
                met hooikoorts uit de regio Zaanstreek-Waterland. We werken met een individueel
                behandelplan afgestemd op uw specifieke pollenallergie en seizoenspatroon.
                Vroegtijdig starten — vóór het hoogseizoen — geeft de beste resultaten.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Zaandam", "Zaandijk", "Koog aan de Zaan", "Wormerveer", "Krommenie", "Assendelft"].map((place) => (
                  <span key={place} className="bg-[#F2EDE3] text-[#4A6559] text-sm px-3 py-1 rounded-full">
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gerelateerde klachten */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl font-light text-[#1F3A36] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Gerelateerde klachten
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/klachten/luchtwegen-allergieen"
                className="klacht-link text-[#4A6559] hover:text-[#1F3A36] transition-colors"
              >
                Luchtwegen &amp; allergieën overzicht
              </Link>
              <span className="text-[#8A6B3D]">·</span>
              <Link
                href="/klachten/astma"
                className="klacht-link text-[#4A6559] hover:text-[#1F3A36] transition-colors"
              >
                Astma
              </Link>
              <span className="text-[#8A6B3D]">·</span>
              <Link
                href="/klachten/sinusitis"
                className="klacht-link text-[#4A6559] hover:text-[#1F3A36] transition-colors"
              >
                Sinusitis
              </Link>
              <span className="text-[#8A6B3D]">·</span>
              <Link
                href="/welke-klachten"
                className="klacht-link text-[#4A6559] hover:text-[#1F3A36] transition-colors"
              >
                Alle klachten
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#F2EDE3]">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-light text-[#1F3A36] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Veelgestelde vragen
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is er wetenschappelijk bewijs voor acupunctuur bij hooikoorts?",
                  a: "Ja. De ACUSAR-studie (Brinkhaus et al., 2013, Annals of Internal Medicine) onderzocht 422 patiënten en vond significant betere resultaten voor echte acupunctuur ten opzichte van sham-acupunctuur en alleen antihistaminica. Patiënten in de acupunctuurgroep hadden minder klachten en gebruikten minder medicatie.",
                },
                {
                  q: "Wanneer moet ik beginnen met acupunctuur voor mijn hooikoorts?",
                  a: "Idealiter vier tot zes weken vóór uw hoogseizoen. Voor mensen met berkenpollen-allergie betekent dat: begin in februari of maart. Door tijdig te starten bouwt u een rustiger immuunrespons op vóórdat de pollen loskomen.",
                },
                {
                  q: "Kan ik acupunctuur combineren met antihistaminica?",
                  a: "Ja, dat is veilig en vaak de beste aanpak. Veel patiënten starten gecombineerd en bouwen naarmate de klachten afnemen hun medicatie af (altijd in overleg met uw huisarts). Er zijn geen bekende interacties.",
                },
                {
                  q: "Hoeveel behandelingen heb ik nodig?",
                  a: "Een standaard traject omvat zes tot acht wekelijkse behandelingen. Veel patiënten herhalen dit jaarlijks preventief vóór het seizoen. Bij jaarrondse allergie (huisstofmijt, dierenhaar) wordt een individueel schema opgesteld.",
                },
              ].map(({ q, a }) => (
                <details key={q} className="bg-white rounded-lg border border-[#1F3A36]/10 group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-medium text-[#1F3A36] pr-4">{q}</span>
                    <iconify-icon
                      icon="ph:caret-down"
                      className="text-[#8A6B3D] text-xl flex-shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-5 pb-5 text-[#4A6559] leading-relaxed">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-10 px-4 bg-white border-y border-[#1F3A36]/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-sm text-[#4A6559] mb-6">
              Vergoed door alle grote zorgverzekeraars (aanvullend pakket)
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp"
                alt="NVA – Nederlandse Vereniging voor Acupunctuur"
                className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png"
                alt="VGZ zorgverzekeraar"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg"
                alt="TCMA – Traditional Chinese Medicine Association"
                className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png"
                alt="Zilveren Kruis zorgverzekeraar"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png"
                alt="CZ zorgverzekeraar"
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* CTA / Afspraak */}
        <section id="afspraak" className="py-20 px-4 bg-[#1F3A36]">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-light text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Begin vóór het pollenseizoen
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Kies een moment dat u schikt en start op tijd met een behandeltraject — zodat u
              het seizoen met minder klachten tegemoet kunt treden.
            </p>
            <div className="bg-white rounded-lg overflow-hidden max-w-2xl mx-auto">
              <iframe
                id="D8uouGkFZH4Alr37y5z4_hooikoorts"
                src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                style={{ width: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
                title="Afspraak maken – hooikoorts behandeling Zaandam"
                height="700"
              />
            </div>
            <Script
              src="https://link.msgsndr.com/js/form_embed.js"
              strategy="afterInteractive"
            />
          </div>
        </section>
      </main>
    </>
  );
}
