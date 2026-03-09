import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tarieven & Vergoeding Acupunctuur 2026 | Acupunctuur Zaandam",
  description:
    "Bekijk de tarieven voor acupunctuur in Zaandam. Intake €80, vervolgbehandeling €60. Vaak (deels) vergoed via uw aanvullende zorgverzekering. Geen eigen risico.",
  keywords: [
    "acupunctuur kosten",
    "acupunctuur prijs",
    "acupunctuur vergoeding",
    "acupunctuur verzekering",
    "acupunctuur kosten zaandam",
    "acupunctuur tarieven 2026",
    "zorgverzekering acupunctuur",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/tarieven-vergoeding",
      name: "Tarieven & Vergoeding Acupunctuur | Acupunctuur Zaandam",
      description:
        "Overzicht van tarieven en zorgverzekeringsvergoedingen voor acupunctuurbehandelingen bij Acupunctuur Zaandam.",
      url: "https://www.acupunctuurzaandam.nl/tarieven-vergoeding",
      about: { "@type": "MedicalTherapy", name: "Acupunctuur" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Gaat acupunctuur ten koste van mijn eigen risico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nee. Acupunctuur wordt vergoed vanuit de aanvullende zorgverzekering. Het wettelijk eigen risico is uitsluitend van toepassing op zorg uit de basisverzekering. Dit betekent dat u uw eigen risico niet hoeft aan te spreken voor acupunctuurbehandelingen.",
          },
        },
        {
          "@type": "Question",
          name: "Heb ik een verwijzing nodig van de huisarts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "U heeft in principe geen verwijzing van uw huisarts of specialist nodig om een afspraak te maken voor acupunctuur, en ook niet om in aanmerking te komen voor vergoeding door de zorgverzekeraar. U kunt direct contact met ons opnemen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe betaal ik en hoe declareer ik de factuur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Na afloop van de behandeling kunt u bij ons in de praktijk afrekenen via PIN of contant. U ontvangt vervolgens de factuur per e-mail. Deze factuur kunt u zelf direct indienen via de app of online omgeving van uw zorgverzekeraar. U ontvangt de vergoeding dan op uw eigen rekening.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt ook Chinese kruidentherapie vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "De vergoeding voor Chinese kruiden of voedingssupplementen valt vaak onder andere voorwaarden of een ander budget dan de acupunctuurconsulten. Sommige verzekeraars vergoeden deze middelen wel mits voorgeschreven door een erkend therapeut, maar veel verzekeraars vergoeden alleen de consulten. Wij raden u aan dit specifiek na te vragen bij uw zorgverzekeraar.",
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
          name: "Tarieven & Vergoeding",
          item: "https://www.acupunctuurzaandam.nl/tarieven-vergoeding",
        },
      ],
    },
  ],
};

export default function TarievenVergoedingPage() {
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
            <span className="text-[#1F3A36]">Tarieven &amp; Vergoeding</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="md:pt-48 md:pb-24 overflow-hidden flex flex-col min-h-[50vh] pt-40 pb-16 relative items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
          />

          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-8">
              <span
                className="uppercase text-xs font-medium text-[#8A6B3D] tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Transparant &amp; Helder
              </span>
              <div
                aria-hidden="true"
                className="h-px w-8 bg-[#8A6B3D]/60"
              />
            </div>

            <h1
              className="md:text-6xl leading-[1.1] text-5xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Tarieven &amp; Vergoedingen
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-2xl mr-auto mb-12 ml-auto">
              Ontdek onze heldere tarieven voor 2026. Doordat wij zijn
              aangesloten bij de NVA, wordt uw behandeling vaak (deels) vergoed
              vanuit uw aanvullende zorgverzekering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#tarieven"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-normal hover:bg-[#4A6559] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3]"
              >
                Bekijk de tarieven
              </a>
              <a
                href="#vergoedingen"
                className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#F2EDE3] hover:border-[#1F3A36]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3] text-sm font-normal text-[#1F3A36] bg-transparent w-full border-[#1F3A36]/30 border rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
              >
                Bekijk vergoedingen 2026
              </a>
            </div>
          </div>
        </header>

        {/* Tarieven Section */}
        <section id="tarieven" aria-labelledby="tarieven-titel" className="pt-16 pb-24 relative">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left: Uitleg */}
              <div className="lg:col-span-5 flex flex-col pt-4">
                <h2
                  id="tarieven-titel"
                  className="text-3xl md:text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Onze behandel&shy;tarieven
                </h2>
                <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed mb-6">
                  Bij Acupunctuur Zaandam geloven we in de kracht van
                  persoonlijke aandacht. Uw eerste afspraak (intake) duurt
                  altijd wat langer, zodat we uw klachten en achtergrond grondig
                  in kaart kunnen brengen en direct een eerste behandeling kunnen
                  starten.{" "}
                  <Link
                    href="/behandeling-werkwijze"
                    className="text-[#4A6559] underline hover:text-[#1F3A36]"
                  >
                    Lees meer over hoe een behandeling verloopt
                  </Link>
                  .
                </p>
                <p className="text-sm text-[#1F3A36]/80 font-light leading-relaxed mb-8">
                  Na elke behandeling ontvangt u digitaal een factuur. Deze kunt
                  u, indien u aanvullend verzekerd bent, direct indienen bij uw
                  zorgverzekeraar. U kunt bij ons in de praktijk afrekenen met
                  PIN of contant.
                </p>

                <div className="p-6 bg-[#F2EDE3] rounded-xl border border-[#1F3A36]/5">
                  <div className="flex items-start gap-4">
                    <iconify-icon
                      icon="solar:info-circle-linear"
                      className="text-[#8A6B3D] text-2xl shrink-0 mt-0.5"
                      stroke-width="1.5"
                    />
                    <div>
                      <h3 className="text-sm font-medium text-[#1F3A36] mb-1">
                        Afspraak annuleren?
                      </h3>
                      <p className="text-xs text-[#1F3A36]/70 font-light leading-relaxed">
                        Tot 24 uur van tevoren kunt u kosteloos annuleren of
                        verzetten. Binnen 24 uur zijn we genoodzaakt de
                        gereserveerde tijd voor 100% in rekening te brengen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Internal link */}
                <p className="text-sm text-[#1F3A36]/70 font-light mt-6">
                  <Link
                    href="/welke-klachten"
                    className="text-[#4A6559] underline hover:text-[#1F3A36]"
                  >
                    Bekijk bij welke klachten acupunctuur kan helpen
                  </Link>
                </p>
              </div>

              {/* Right: Tarief Kaarten */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Tarief 1: Intake */}
                <div className="bg-white rounded-2xl p-8 border border-[#1F3A36]/10 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#F2EDE3] rounded-full blur-2xl opacity-50 group-hover:bg-[#8A6B3D]/10 transition-colors duration-500" />

                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-2 relative z-10"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Intake + 1e Behandeling
                  </h3>
                  <div className="flex items-end gap-2 mb-6 relative z-10">
                    <span className="text-4xl font-light tracking-tighter text-[#1F3A36]">
                      €80
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#1F3A36]/60 uppercase tracking-widest mb-6 border-b border-[#1F3A36]/10 pb-4 relative z-10">
                    <iconify-icon
                      icon="solar:clock-circle-linear"
                      className="text-lg"
                    />
                    <span>Ca. 90 minuten</span>
                  </div>

                  <ul className="flex-grow space-y-3 relative z-10">
                    <li className="flex items-start gap-3 text-sm text-[#1F3A36]/80 font-light">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        className="text-[#8A6B3D] text-lg shrink-0 mt-0.5"
                      />
                      <span>Uitgebreide anamnese en pols-/tongdiagnostiek</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-[#1F3A36]/80 font-light">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        className="text-[#8A6B3D] text-lg shrink-0 mt-0.5"
                      />
                      <span>Opstellen van een persoonlijk behandelplan</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-[#1F3A36]/80 font-light">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        className="text-[#8A6B3D] text-lg shrink-0 mt-0.5"
                      />
                      <span>Directe start met de eerste acupunctuursessie</span>
                    </li>
                  </ul>
                </div>

                {/* Tarief 2: Vervolg */}
                <div className="bg-white rounded-2xl p-8 border border-[#1F3A36]/10 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#F2EDE3] rounded-full blur-2xl opacity-50 group-hover:bg-[#4A6559]/10 transition-colors duration-500" />

                  <h3
                    className="text-xl font-normal text-[#1F3A36] tracking-tight mb-2 relative z-10"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Vervolgbehandeling
                  </h3>
                  <div className="flex items-end gap-2 mb-6 relative z-10">
                    <span className="text-4xl font-light tracking-tighter text-[#1F3A36]">
                      €60
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#1F3A36]/60 uppercase tracking-widest mb-6 border-b border-[#1F3A36]/10 pb-4 relative z-10">
                    <iconify-icon
                      icon="solar:clock-circle-linear"
                      className="text-lg"
                    />
                    <span>Ca. 60 minuten</span>
                  </div>

                  <ul className="flex-grow space-y-3 relative z-10">
                    <li className="flex items-start gap-3 text-sm text-[#1F3A36]/80 font-light">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        className="text-[#8A6B3D] text-lg shrink-0 mt-0.5"
                      />
                      <span>Korte evaluatie van de voortgang</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-[#1F3A36]/80 font-light">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        className="text-[#8A6B3D] text-lg shrink-0 mt-0.5"
                      />
                      <span>
                        Acupunctuurbehandeling gericht op uw balans
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-[#1F3A36]/80 font-light">
                      <iconify-icon
                        icon="solar:check-circle-linear"
                        className="text-[#8A6B3D] text-lg shrink-0 mt-0.5"
                      />
                      <span>
                        Eventueel gecombineerd met cupping of moxa
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar: Beroepsverenigingen */}
        <section
          aria-labelledby="trust-titel"
          className="border-y bg-[#F2EDE3] border-[#1F3A36]/10 pt-16 pb-16"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2
              className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
              id="trust-titel"
            >
              Erkend door alle grote zorgverzekeraars
            </h2>

            <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp"
                alt="NVA - Nederlandse Vereniging voor Acupunctuur"
                className="md:h-12 w-auto h-10 object-cover bg-center"
                title="Aangesloten bij de NVA"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png"
                alt="Zilveren Kruis"
                className="md:h-12 w-auto h-10 object-cover bg-center"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png"
                alt="VGZ"
                className="md:h-10 bg-center w-auto h-8 object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png"
                alt="CZ"
                className="md:h-10 bg-center w-auto h-8 object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9d7f8ec-453f-43d5-b95b-c8e49400962d_original.gif"
                alt="Menzis"
                className="md:h-10 w-auto h-8 object-cover bg-center"
              />
            </div>
          </div>
        </section>

        {/* Vergoedingen Tabel Section */}
        <section
          id="vergoedingen"
          aria-labelledby="vergoedingen-titel"
          className="pt-24 pb-32"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                id="vergoedingen-titel"
                className="md:text-5xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Vergoedingen Zorgverzekeraars 2026
              </h2>
              <p className="text-base text-[#1F3A36]/80 max-w-2xl mx-auto font-light leading-relaxed">
                Acupunctuur valt onder &lsquo;Alternatieve Geneeswijzen&rsquo;.
                Omdat wij zijn aangesloten bij de NVA (Nederlandse Vereniging
                voor Acupunctuur), wordt uw behandeling door vrijwel alle
                zorgverzekeraars (deels) vergoed vanuit het{" "}
                <strong>aanvullende pakket</strong>. Het eigen risico is{" "}
                <strong>niet</strong> van toepassing.
              </p>
            </div>

            {/* Tabel */}
            <div className="bg-white rounded-2xl border border-[#1F3A36]/10 shadow-sm overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-[#FAF8F3] border-b border-[#1F3A36]/10 text-xs uppercase tracking-widest text-[#1F3A36]/60 font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-5 font-medium">
                        Zorgverzekeraar
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-5 font-medium hidden md:table-cell"
                      >
                        Aanvullend Pakket (Voorbeeld)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-5 font-medium text-right"
                      >
                        Max. per dag
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-5 font-medium text-right"
                      >
                        Max. per jaar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F3A36]/5 text-[#1F3A36]/80 font-light">
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        Zilveren Kruis
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        Aanvullend 2 t/m 4 sterren
                      </td>
                      <td className="px-6 py-4 text-right">€ 40,00</td>
                      <td className="px-6 py-4 text-right">€ 250 - € 650</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        VGZ
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        Aanvullend Beter / Best
                      </td>
                      <td className="px-6 py-4 text-right">€ 40,00</td>
                      <td className="px-6 py-4 text-right">€ 300 - € 500</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        CZ
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        Aanvullend (Basis t/m Top)
                      </td>
                      <td className="px-6 py-4 text-right">€ 40,00</td>
                      <td className="px-6 py-4 text-right">€ 250 - € 450</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        Menzis
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        ExtraVerzorgd 2 / 3
                      </td>
                      <td className="px-6 py-4 text-right">€ 40,00</td>
                      <td className="px-6 py-4 text-right">€ 300 - € 500</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        ONVZ
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        Benfit / Optifit / Topfit
                      </td>
                      <td className="px-6 py-4 text-right">€ 65,00</td>
                      <td className="px-6 py-4 text-right">€ 250 - € 1000</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        DSW
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        AV-Compact / AV-Standaard / Top
                      </td>
                      <td className="px-6 py-4 text-right">€ 30,00</td>
                      <td className="px-6 py-4 text-right">€ 250 - € 450</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        Univé
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        Aanvullend Beter / Best
                      </td>
                      <td className="px-6 py-4 text-right">€ 40,00</td>
                      <td className="px-6 py-4 text-right">€ 300 - € 500</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F3]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1F3A36]">
                        FBTO
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        Module Alternatieve Geneeswijzen
                      </td>
                      <td className="px-6 py-4 text-right">
                        100% (max budget)
                      </td>
                      <td className="px-6 py-4 text-right">€ 250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 sm:p-6 rounded-xl border border-[#1F3A36]/5">
              <iconify-icon
                icon="solar:danger-triangle-linear"
                className="text-[#8A6B3D] text-xl shrink-0 mt-0.5"
                stroke-width="1.5"
              />
              <p className="text-xs sm:text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                <strong className="font-medium text-[#1F3A36]">
                  Disclaimer:
                </strong>{" "}
                Aan deze tabel kunnen geen rechten worden ontleend. De genoemde
                bedragen zijn indicaties voor 2026. Vergoedingen verschillen
                sterk per gekozen (aanvullend) pakket. Controleer voor u een
                afspraak maakt altijd de actuele polisvoorwaarden van uw eigen
                zorgverzekering, of neem contact op met uw verzekeraar.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          aria-labelledby="cta-titel"
          className="overflow-hidden text-center bg-[#1F3A36] pt-40 pr-6 pb-40 pl-6 relative"
          id="contact"
        >
          <div className="relative z-20 w-full max-w-6xl mx-auto text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Column */}
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
                  Een afspraak maken is simpel
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Plan direct uw consult via Whatsapp of via de planner
                  hiernaast. Kies een datum en tijd die u het beste uitkomt.
                  Heeft u vragen over uw vergoeding? Stuur ons gerust een
                  bericht.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="https://wa.me/31657998330"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                    WhatsApp ons
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center gap-2 border border-[#FAF8F3]/30 hover:bg-[#FAF8F3]/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F3] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-[#FAF8F3] rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                    Veelgestelde vragen
                  </a>
                </div>
              </div>

              {/* Right Column: GHL Planner */}
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
                      id="D8uouGkFZH4Alr37y5z4_tarieven_vergoeding"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          aria-labelledby="faq-titel"
          className="bg-[#FAF8F3] pt-32 pb-32 border-t border-[#1F3A36]/5"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                id="faq-titel"
                className="md:text-5xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Veelgestelde vragen over kosten
              </h2>
              <p className="text-base text-[#1F3A36]/80 max-w-2xl mx-auto font-light leading-relaxed">
                Hier vindt u antwoorden op de meest gestelde vragen rondom
                betalingen, facturen en uw zorgverzekering.
              </p>
            </div>

            <div className="space-y-4">
              <details
                className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300"
                open
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                  <span>Gaat acupunctuur ten koste van mijn eigen risico?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Nee. Acupunctuur wordt vergoed vanuit de{" "}
                  <strong>aanvullende zorgverzekering</strong>. Het wettelijk
                  eigen risico is uitsluitend van toepassing op zorg uit de
                  basisverzekering. Dit betekent dat u uw eigen risico niet
                  hoeft aan te spreken voor acupunctuurbehandelingen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                  <span>Heb ik een verwijzing nodig van de huisarts?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  U heeft in principe <strong>geen verwijzing</strong> van uw
                  huisarts of specialist nodig om een afspraak te maken voor
                  acupunctuur, en ook niet om in aanmerking te komen voor
                  vergoeding door de zorgverzekeraar. U kunt direct contact met
                  ons opnemen.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                  <span>Hoe betaal ik en hoe declareer ik de factuur?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  Na afloop van de behandeling kunt u bij ons in de praktijk
                  afrekenen via PIN of contant. U ontvangt vervolgens de factuur
                  per e-mail (of indien gewenst uitgeprint). Deze factuur kunt u
                  zelf direct indienen via de app of online omgeving van uw
                  zorgverzekeraar. U ontvangt de vergoeding dan op uw eigen
                  rekening.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-[#1F3A36]/5 shadow-sm open:bg-[#F2EDE3]/30 transition-colors duration-300">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-[#1F3A36] [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 rounded-xl">
                  <span>Wordt ook Chinese kruidentherapie vergoed?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#8A6B3D]">
                    <iconify-icon
                      icon="solar:alt-arrow-down-linear"
                      className="text-xl"
                    />
                  </span>
                </summary>
                <div className="text-[#1F3A36]/80 text-sm font-light px-6 pb-6 leading-relaxed">
                  De vergoeding voor Chinese kruiden of voedingssupplementen
                  valt vaak onder andere voorwaarden of een ander budget dan de
                  acupunctuurconsulten. Sommige verzekeraars vergoeden deze
                  middelen wel mits voorgeschreven door een erkend therapeut,
                  maar veel verzekeraars vergoeden alleen de consulten. Wij
                  raden u aan dit specifiek na te vragen bij uw
                  zorgverzekeraar.
                </div>
              </details>
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
