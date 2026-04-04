import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur in Zaandam | Praktijk Sam de Vries — NVA Erkend",
  description:
    "Acupunctuurpraktijk in Zaandam. Sam de Vries behandelt pijn, stress, burnout, slaapproblemen en vrouwenklachten. NVA-erkend, vergoed door de meeste zorgverzekeraars. Lagendijk 3, Koog aan de Zaan.",
  keywords: [
    "acupunctuur zaandam",
    "acupuncturist zaandam",
    "acupunctuurpraktijk zaandam",
    "chinese geneeskunde zaandam",
    "pijnbestrijding zaandam",
    "stress behandeling zaandam",
    "burnout acupunctuur zaandam",
    "nva acupunctuur zaandam",
  ],
  openGraph: {
    title: "Acupunctuur in Zaandam | Praktijk Sam de Vries",
    description:
      "NVA-erkende acupunctuurpraktijk in Zaandam. Behandelingen bij pijn, stress, burnout en meer. Lagendijk 3, Koog aan de Zaan.",
    url: "https://www.acupunctuurzaandam.nl/acupunctuur-zaandam",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.acupunctuurzaandam.nl/acupunctuur-zaandam",
      name: "Acupunctuur Zaandam — Sam de Vries",
      description:
        "NVA-erkende acupunctuurpraktijk in Zaandam. Behandelingen bij pijn, stress, burnout, slaapproblemen en vrouwenklachten.",
      url: "https://www.acupunctuurzaandam.nl",
      telephone: "+31657998330",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lagendijk 3",
        addressLocality: "Koog aan de Zaan",
        postalCode: "1541 KA",
        addressCountry: "NL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 52.4387,
        longitude: 4.8293,
      },
      areaServed: { "@type": "City", name: "Zaandam" },
      medicalSpecialty: "Acupuncture",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wordt acupunctuur in Zaandam vergoed door mijn zorgverzekeraar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur door een NVA-erkend acupuncturist wordt vergoed vanuit de aanvullende verzekering. De meeste grote verzekeraars zoals VGZ, Zilveren Kruis, CZ en Menzis vergoeden acupunctuur bij Sam de Vries in Zaandam. Het vergoede bedrag verschilt per polis.",
          },
        },
        {
          "@type": "Question",
          name: "Waar zit de acupunctuurpraktijk in Zaandam precies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De praktijk is gevestigd aan de Lagendijk 3 in Koog aan de Zaan (BedrijvigeBij, kamer A103), vlakbij station Koog-Zaandijk en goed bereikbaar vanuit heel Zaandam. Er is voldoende parkeergelegenheid.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe verloopt een eerste acupunctuurbehandeling in Zaandam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij uw eerste bezoek voert Sam een uitgebreide intake uit: een gesprek over uw klachten, gezondheidsgeschiedenis en leefstijl, gevolgd door pols- en tongdiagnostiek. Op basis daarvan stelt hij een persoonlijk behandelplan op. De eerste sessie duurt ongeveer 75 minuten.",
          },
        },
        {
          "@type": "Question",
          name: "Bij welke klachten kan ik terecht bij de acupuncturist in Zaandam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "U kunt terecht voor een breed scala aan klachten: pijn (rug, nek, schouder, knie), hoofdpijn en migraine, stress en burnout, slaapproblemen, spijsverteringsproblemen, vrouwenklachten (menstruatie, vruchtbaarheid, overgang), allergie en hooikoorts, en meer.",
          },
        },
      ],
    },
  ],
};

export default function AcupunctuurZaandamPage() {
  return (
    <>
      <Script
        id="schema-zaandam"
        type="application/ld+json"
        strategy="afterInteractive"
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
            <span className="text-[#1F3A36]">Acupunctuur Zaandam</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
          />
          <div className="z-10 text-center max-w-4xl mx-auto px-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span
                className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Uw acupuncturist in Zaandam
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Welkom bij de acupunctuurpraktijk van Sam de Vries aan de
              Lagendijk in Koog aan de Zaan, vlakbij Zaandam. Als NVA-erkend acupuncturist
              help ik u met een persoonlijke aanpak bij uiteenlopende klachten —
              van chronische pijn en stress tot slaapproblemen en
              vrouwenklachten. In een rustige, zorgvuldige setting werken we
              samen aan uw herstel.
            </p>
          </div>
        </header>

        {/* Content */}
        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {/* Praktijk intro */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Over de praktijk
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  De praktijk aan de Lagendijk 3 is gevestigd in het
                  BedrijvigeBij-pand in Koog aan de Zaan, op slechts enkele minuten van Zaandam centrum.
                  Sam de Vries combineert traditionele Chinese geneeskunde met
                  een moderne, evidence-based aanpak. Elke behandeling begint met
                  een uitgebreid gesprek en zorgvuldige diagnostiek — want geen
                  twee patiënten zijn hetzelfde.
                </p>
                <p>
                  Als lid van de Nederlandse Vereniging voor Acupunctuur (NVA)
                  voldoet de praktijk aan strenge kwaliteitseisen. Dit betekent
                  ook dat uw behandelingen vergoed worden door de meeste
                  aanvullende zorgverzekeringen, waaronder VGZ, Zilveren Kruis,
                  CZ en Menzis.
                </p>
              </div>
            </section>

            {/* Waarvoor */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Waarvoor kunt u terecht?
              </h2>
              <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Acupunctuur is een veelzijdige behandelmethode. In de praktijk
                in Zaandam ziet Sam patiënten met zeer uiteenlopende klachten.
                Hieronder vindt u de meest voorkomende behandelgebieden.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Pijn & spanning",
                    desc: "Rugpijn, nekklachten, schouderpijn, kniepijn, gewrichtspijn en fibromyalgie. Acupunctuur bevordert de doorbloeding en remt ontstekingsprocessen.",
                    href: "/klachten/lage-rugklachten",
                  },
                  {
                    title: "Stress & burnout",
                    desc: "Overbelasting, prikkelbaarheid, concentratieproblemen en emotionele uitputting. Acupunctuur brengt het zenuwstelsel weer in balans.",
                    href: "/klachten/burn-out",
                  },
                  {
                    title: "Hoofdpijn & migraine",
                    desc: "Spanningshoofdpijn, migraine met en zonder aura. Bewezen effectief volgens Cochrane-onderzoek voor het verlagen van aanvalsfrequentie.",
                    href: "/klachten/migraine",
                  },
                  {
                    title: "Slaapproblemen",
                    desc: "Insomnia, moeilijk inslapen, onrustig slapen en nachtelijk wakker worden. Acupunctuur reguleert uw slaapritme op een natuurlijke manier.",
                    href: "/klachten/slaapproblemen",
                  },
                  {
                    title: "Vrouwenklachten",
                    desc: "Menstruatiepijn, PMS, vruchtbaarheidsproblemen, IVF-ondersteuning en overgangsklachten. Hormonale balans herstellen via acupunctuur.",
                    href: "/klachten/menstruatieklachten",
                  },
                  {
                    title: "Spijsvertering",
                    desc: "Prikkelbare darm (PDS), reflux, opgeblazen gevoel, buikpijn en obstipatie. Acupunctuur ondersteunt het spijsverteringskanaal.",
                    href: "/klachten/darmklachten",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5 hover:border-[#4A6559]/20 transition-colors group"
                  >
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2 group-hover:text-[#4A6559] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="text-sm text-[#1F3A36]/60 font-light mt-6">
                Staat uw klacht er niet bij?{" "}
                <Link
                  href="/welke-klachten"
                  className="text-[#4A6559] underline underline-offset-2 hover:text-[#1F3A36] transition-colors"
                >
                  Bekijk het volledige overzicht
                </Link>{" "}
                of neem vrijblijvend contact op.
              </p>
            </section>

            {/* Bereikbaarheid */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Bereikbaarheid
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  De praktijk is gevestigd aan de <strong>Lagendijk 3</strong> in
                  Koog aan de Zaan (BedrijvigeBij, kamer A103), vlakbij Zaandam.
                  U bent welkom op maandag tot en met vrijdag tussen
                  9:00 en 17:00 uur.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">
                      Met de auto
                    </h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">
                      Goed bereikbaar via de A8 en A7. Gratis parkeren in de
                      straat. Vanuit het centrum van Zaandam bent u er in 5
                      minuten.
                    </p>
                  </div>
                  <div className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">
                      Met het OV
                    </h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">
                      Station Zaandam ligt op 10 minuten loopafstand. Diverse
                      buslijnen stoppen in de buurt. Sprinter vanuit Amsterdam
                      Centraal duurt 12 minuten.
                    </p>
                  </div>
                  <div className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">
                      Met de fiets
                    </h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">
                      Vanuit alle wijken van Zaandam binnen 10 minuten te
                      bereiken. Fiets kan voor de deur gestald worden.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Werkwijze */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hoe werkt een behandeling?
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  Bij uw eerste bezoek neemt Sam uitgebreid de tijd voor een
                  intake: een gesprek over uw klachten, gezondheidsgeschiedenis
                  en leefstijl, aangevuld met pols- en tongdiagnostiek vanuit de
                  traditionele Chinese geneeskunde. Op basis hiervan stelt hij
                  een persoonlijk behandelplan op.
                </p>
                <p>
                  De eerste sessie duurt ongeveer 75 minuten, vervolgsessies
                  duren 45–60 minuten. De meeste patiënten merken al na 2–3
                  behandelingen verschil. Benieuwd naar de tarieven?{" "}
                  <Link
                    href="/tarieven-vergoeding"
                    className="text-[#4A6559] underline underline-offset-2 hover:text-[#1F3A36] transition-colors"
                  >
                    Bekijk tarieven en vergoedingen
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Wordt acupunctuur in Zaandam vergoed door mijn zorgverzekeraar?",
                    a: "Ja, als NVA-erkend acupuncturist worden behandelingen bij Sam de Vries vergoed vanuit uw aanvullende verzekering. De vergoeding verschilt per polis — neem contact op met uw verzekeraar voor de exacte dekking.",
                  },
                  {
                    q: "Waar zit de acupunctuurpraktijk in Zaandam precies?",
                    a: "De praktijk is gevestigd aan de Lagendijk 3 in Koog aan de Zaan (BedrijvigeBij, kamer A103), vlakbij station Koog-Zaandijk en goed bereikbaar vanuit heel Zaandam. Er is voldoende parkeergelegenheid.",
                  },
                  {
                    q: "Hoe verloopt een eerste acupunctuurbehandeling?",
                    a: "Bij uw eerste bezoek voert Sam een uitgebreide intake uit: een gesprek over uw klachten en gezondheidsgeschiedenis, aangevuld met pols- en tongdiagnostiek. Op basis daarvan stelt hij een persoonlijk behandelplan op. De eerste sessie duurt ongeveer 75 minuten.",
                  },
                  {
                    q: "Bij welke klachten kan ik terecht?",
                    a: "U kunt terecht voor een breed scala aan klachten: pijn (rug, nek, schouder, knie), hoofdpijn en migraine, stress en burnout, slaapproblemen, spijsverteringsproblemen, vrouwenklachten, allergie en meer.",
                  },
                ].map((item) => (
                  <details
                    key={item.q}
                    className="group bg-[#FAF8F3] rounded-xl border border-[#1F3A36]/5"
                  >
                    <summary className="cursor-pointer list-none p-5 text-sm font-medium text-[#1F3A36] flex items-center justify-between">
                      {item.q}
                      <span className="ml-4 text-[#8A6B3D] text-lg group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-20 bg-[#1F3A36] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Klaar om een afspraak te maken?
            </h2>
            <p className="text-base font-light text-white/80 mb-8 leading-relaxed">
              Neem vrijblijvend contact op via WhatsApp of bel om een eerste
              afspraak in te plannen. Sam verwelkomt u graag in de praktijk aan
              de Lagendijk in Koog aan de Zaan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/31657998330"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#20bd5a] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="tel:+31657998330"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                Bel 06 5799 8330
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
