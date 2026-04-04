import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur Koog aan de Zaan | Dichtbij in Zaandam",
  description:
    "Woont u in Koog aan de Zaan? Acupunctuurpraktijk Sam de Vries in Zaandam is binnen 5 minuten bereikbaar. NVA-erkend, behandelingen bij hooikoorts, nekpijn, vermoeidheid, migraine en overgangsklachten.",
  keywords: [
    "acupunctuur koog aan de zaan",
    "acupuncturist koog aan de zaan",
    "acupunctuur zaanstad",
    "hooikoorts acupunctuur koog",
    "nekpijn behandeling koog aan de zaan",
    "acupunctuur overgang koog aan de zaan",
    "chinese geneeskunde zaanstreek",
  ],
  openGraph: {
    title: "Acupunctuur Koog aan de Zaan | Praktijk Sam de Vries",
    description:
      "Acupunctuurpraktijk op 5 minuten van Koog aan de Zaan. NVA-erkend, vergoed door de meeste zorgverzekeraars.",
    url: "https://www.acupunctuurzaandam.nl/acupunctuur-koog-aan-de-zaan",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id":
        "https://www.acupunctuurzaandam.nl/acupunctuur-koog-aan-de-zaan",
      name: "Acupunctuur Zaandam — Sam de Vries",
      description:
        "Acupunctuurpraktijk in Zaandam, eenvoudig bereikbaar vanuit Koog aan de Zaan. Behandelingen bij allergie, nekpijn, vermoeidheid en vrouwenklachten.",
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
      areaServed: { "@type": "City", name: "Koog aan de Zaan" },
      medicalSpecialty: "Acupuncture",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe ver is de acupunctuurpraktijk vanaf Koog aan de Zaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De praktijk aan de Lagendijk 3 in Koog aan de Zaan is uitstekend bereikbaar. Met de auto bent u er in een paar minuten, met de fiets net zo snel. Station Koog-Zaandijk ligt vlakbij.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur vergoed voor inwoners van Koog aan de Zaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, vergoeding hangt af van uw aanvullende zorgverzekering, niet van uw woonplaats. Sam de Vries is NVA-erkend, waardoor de meeste verzekeraars (VGZ, Zilveren Kruis, CZ, Menzis) behandelingen vergoeden vanuit de aanvullende polis.",
          },
        },
        {
          "@type": "Question",
          name: "Kan ik ook 's avonds terecht voor acupunctuur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De reguliere openingstijden zijn maandag tot en met vrijdag van 9:00 tot 17:00. Neem contact op via WhatsApp om de mogelijkheden te bespreken als deze tijden niet uitkomen.",
          },
        },
      ],
    },
  ],
};

export default function AcupunctuurKoogAanDeZaanPage() {
  return (
    <>
      <Script
        id="schema-koog"
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
            <span className="text-[#1F3A36]">
              Acupunctuur Koog aan de Zaan
            </span>
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
                Op 5 minuten van Koog aan de Zaan
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1
              className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Acupunctuur voor Koog aan de Zaan
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mx-auto">
              Woont u in Koog aan de Zaan en zoekt u een ervaren acupuncturist
              in de buurt? De praktijk van Sam de Vries aan de Lagendijk in
              Koog aan de Zaan is uitstekend bereikbaar. Dichtbij, persoonlijk
              en NVA-erkend — voor een breed scala aan klachten.
            </p>
          </div>
        </header>

        {/* Content */}
        <article className="py-16 bg-white border-y border-[#1F3A36]/5">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {/* Bereikbaarheid */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Snel bereikbaar vanuit Koog aan de Zaan
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  Koog aan de Zaan en Zaandam liggen vlak naast elkaar — de
                  praktijk aan de Lagendijk 3 ligt midden in Koog aan de Zaan, op slechts enkele minuten
                  afstand. Of u nu via de Provincialeweg of over het fietspad
                  langs de Zaan komt, u bent er zo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">
                      Met de auto
                    </h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">
                      Via de Provincialeweg of de A8 — slechts 5 minuten.
                      Gratis parkeren in de straat bij de praktijk.
                    </p>
                  </div>
                  <div className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">
                      Met het OV
                    </h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">
                      Eén station met de trein van Koog-Zaandijk naar Zaandam.
                      Vanaf station Zaandam is het 10 minuten lopen naar de
                      praktijk.
                    </p>
                  </div>
                  <div className="bg-[#FAF8F3] rounded-xl p-5 border border-[#1F3A36]/5">
                    <h3 className="font-medium text-[#1F3A36] text-sm mb-2">
                      Met de fiets
                    </h3>
                    <p className="text-xs text-[#1F3A36]/70 leading-relaxed">
                      Minder dan 10 minuten fietsen via het fietspad langs de
                      Zaan. Een mooie route door het groen.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Klachten — gevarieerd t.o.v. Zaandam-pagina */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelvoorkomende klachten
              </h2>
              <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                Inwoners van Koog aan de Zaan komen bij Sam voor een breed scala
                aan klachten. Hieronder een selectie van de meest gevraagde
                behandelingen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Hooikoorts & allergie",
                    desc: "Seizoensgebonden klachten als niezen, jeukende ogen en een verstopte neus. Acupunctuur vermindert de overgevoeligheid van uw immuunsysteem en biedt verlichting zonder antihistaminica.",
                    href: "/klachten/hooikoorts",
                  },
                  {
                    title: "Nekklachten",
                    desc: "Stijve nek, uitstralende pijn naar schouders of armen, spanningshoofdpijn door nekproblematiek. Vaak gerelateerd aan een zittend beroep of stress.",
                    href: "/klachten/nekklachten",
                  },
                  {
                    title: "Vermoeidheid & uitputting",
                    desc: "Chronische vermoeidheid, energietekort, long-covid vermoeidheid. Acupunctuur ondersteunt uw energiehuishouding en bijnierfunctie.",
                    href: "/klachten/uitputting",
                  },
                  {
                    title: "Migraine",
                    desc: "Frequente migraineaanvallen met of zonder aura. Cochrane-onderzoek bevestigt: acupunctuur is minstens even effectief als preventieve medicatie.",
                    href: "/klachten/migraine",
                  },
                  {
                    title: "Overgangsklachten",
                    desc: "Opvliegers, nachtzweten, stemmingswisselingen en slaapproblemen in de overgang. Acupunctuur helpt uw hormonale balans te herstellen.",
                    href: "/klachten/overgangsklachten",
                  },
                  {
                    title: "Darmproblemen",
                    desc: "Opgeblazen gevoel, wisselend ontlastingspatroon, buikkrampen. Bij prikkelbare darm (PDS) biedt acupunctuur aantoonbare verlichting.",
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
                  Bekijk alle 70+ klachten
                </Link>{" "}
                waarvoor u terecht kunt.
              </p>
            </section>

            {/* Werkwijze kort */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Persoonlijke aanpak
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  Sam de Vries gelooft in een persoonlijke benadering. Elke
                  behandeling begint met een uitgebreid gesprek en zorgvuldige
                  diagnostiek volgens de traditionele Chinese geneeskunde. Geen
                  standaard protocol, maar een plan dat past bij uw specifieke
                  situatie.
                </p>
                <p>
                  De eerste sessie duurt ongeveer 75 minuten, vervolgsessies
                  45–60 minuten. Benieuwd hoe het werkt?{" "}
                  <Link
                    href="/behandeling-werkwijze"
                    className="text-[#4A6559] underline underline-offset-2 hover:text-[#1F3A36] transition-colors"
                  >
                    Lees meer over de werkwijze
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Vergoeding */}
            <section>
              <h2
                className="text-2xl md:text-3xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Vergoeding & tarieven
              </h2>
              <div className="space-y-4 text-sm text-[#1F3A36]/80 font-light leading-relaxed">
                <p>
                  Als NVA-erkend acupuncturist worden behandelingen bij Sam de
                  Vries vergoed vanuit de meeste aanvullende zorgverzekeringen.
                  Het vergoede bedrag verschilt per verzekeraar en polis.{" "}
                  <Link
                    href="/tarieven-vergoeding"
                    className="text-[#4A6559] underline underline-offset-2 hover:text-[#1F3A36] transition-colors"
                  >
                    Bekijk de tarieven
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
                    q: "Hoe ver is de acupunctuurpraktijk vanaf Koog aan de Zaan?",
                    a: "De praktijk aan de Lagendijk 3 in Koog aan de Zaan is uitstekend bereikbaar. Met de auto of fiets bent u er in een paar minuten. Station Koog-Zaandijk ligt vlakbij.",
                  },
                  {
                    q: "Wordt acupunctuur vergoed voor inwoners van Koog aan de Zaan?",
                    a: "Ja, vergoeding hangt af van uw aanvullende zorgverzekering, niet van uw woonplaats. Sam de Vries is NVA-erkend, waardoor de meeste verzekeraars (VGZ, Zilveren Kruis, CZ, Menzis) behandelingen vergoeden.",
                  },
                  {
                    q: "Kan ik ook 's avonds terecht voor acupunctuur?",
                    a: "De reguliere openingstijden zijn maandag tot en met vrijdag van 9:00 tot 17:00. Neem contact op via WhatsApp om de mogelijkheden te bespreken als deze tijden niet uitkomen.",
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
              Maak een afspraak
            </h2>
            <p className="text-base font-light text-white/80 mb-8 leading-relaxed">
              Benieuwd wat acupunctuur voor u kan betekenen? Neem vrijblijvend
              contact op. Sam verwelkomt u graag in de praktijk in Zaandam —
              op een steenworp afstand van Koog aan de Zaan.
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
