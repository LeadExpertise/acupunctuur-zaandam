import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Long COVID | Acupunctuur Zaandam",
  description: "Aanhoudende vermoeidheid, brain fog of ademhalingsklachten na COVID-19? Ontdek hoe acupunctuur herstel ondersteunt bij Post-COVID syndroom in Zaandam.",
  keywords: ["acupunctuur long covid", "acupunctuur long covid Zaandam", "behandeling long covid", "acupunctuur post-covid klachten"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-long-covid",
      name: "Acupunctuur bij Long COVID | Acupunctuur Zaandam",
      description: "Acupunctuur ondersteunt het herstel bij Long COVID door vermoeidheid te verminderen, brain fog te verlichten en de algehele vitaliteit te herstellen.",
      about: [{ "@type": "MedicalCondition", name: "Long COVID" }],
      audience: { "@type": "Patient", healthCondition: { "@type": "MedicalCondition", name: "Long COVID" } },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij Long COVID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur wordt wereldwijd ingezet ter ondersteuning van herstel bij Long COVID. De behandeling richt zich op het verminderen van vermoeidheid, het verlichten van brain fog, het verbeteren van de ademhaling en het herstel van de algehele vitaliteit. Meerdere klinische studies tonen positieve resultaten bij post-virale vermoeidheidssyndromen.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij Long COVID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig als aanvullende behandeling bij Long COVID. Wij werken met steriele eenmalige naalden en passen de intensiteit van de behandeling aan uw draagkracht aan, zodat overbelasting wordt vermeden.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij Long COVID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Long COVID is een complex en individueel syndroom. Sommige patiënten merken al na drie tot vijf behandelingen een verbetering in hun energieniveau en cognitief functioneren. Een volledige behandelcyclus van acht tot twaalf sessies biedt doorgaans het meeste resultaat.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor Long COVID vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden acupunctuur vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.acupunctuurzaandam.nl" },
        { "@type": "ListItem", position: 2, name: "Behandelingen", item: "https://www.acupunctuurzaandam.nl/behandelingen" },
        { "@type": "ListItem", position: 3, name: "Acupunctuur bij Long COVID", item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-long-covid" },
      ],
    },
  ],
};

export default function LongCovidBehandelingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content">

        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Acupunctuur bij Long COVID</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Immuunsysteem &amp; Herstel</span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij Long COVID in Zaandam</h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">Maanden na een COVID-19-infectie worstelen veel mensen nog met uitputtende vermoeidheid, brain fog, ademhalingsklachten en een verminderd uithoudingsvermogen. Acupunctuur ondersteunt het herstel bij Post-COVID syndroom door de vitaliteit te herstellen, ontsteking te moduleren en het zenuwstelsel te kalmeren.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">Maak een afspraak</a>
              <Link href="/klachten/long-covid" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">Meer over Long COVID</Link>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Wat is Long COVID?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Long COVID, ook wel Post-COVID syndroom of post-acute sequelae of COVID-19 (PASC) genoemd, is een aandoening waarbij symptomen aanhouden of nieuw optreden meer dan vier weken na de acute COVID-19-infectie. De klachten kunnen mild of ernstig zijn en worden gekenmerkt door hun variabiliteit: goede en slechte dagen wisselen elkaar af, en overbelasting kan leiden tot terugval (post-exertionele malaise).</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Wereldwijd hebben tientallen miljoenen mensen Long COVID. De meest gerapporteerde klachten zijn vermoeidheid (in 58% van de gevallen), cognitieve problemen (brain fog, concentratieproblemen), kortademigheid, slaapstoornissen, hartkloppingen, angst en depressie. De onderliggende mechanismen zijn complex en omvatten chronische ontstekingen, auto-immuunreacties, microbioom-disbalans en schade aan het zenuwstelsel.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-6">Acupunctuur biedt een holistische benadering die meerdere van deze mechanismen tegelijkertijd aanpakt en het herstel bevordert.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Aanhoudende vermoeidheid na COVID-19</strong><span className="text-sm text-[#1F3A36]/70 font-light">Extreme uitputting die niet verbetert met rust en disproportioneel is aan de geleverde inspanning.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Brain fog en cognitieve klachten</strong><span className="text-sm text-[#1F3A36]/70 font-light">Concentratieproblemen, geheugenproblemen, mentale mist en moeite met verwerken van informatie.</span></div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-[#8A6B3D]"><iconify-icon icon="solar:check-circle-linear" className="text-xl" stroke-width="1.5" /></span>
                  <div><strong className="font-medium text-[#1F3A36] block text-base">Ademhalingsklachten en benauwdheid</strong><span className="text-sm text-[#1F3A36]/70 font-light">Aanhoudende kortademigheid, een benauwd gevoel of verminderd uithoudingsvermogen na de acute infectie.</span></div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe acupunctuur helpt bij Long COVID</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">In de TCG wordt Long COVID beschreven als een restant van pathogene factoren die zich na de acute infectie hebben vastgezet in de diepere lagen van het lichaam, gecombineerd met een ernstig tekort aan Qi en Yin — de basisvoeding en vochtige, voedende substantie van het lichaam. Dit tekort manifesteert zich als uitputting, droogte, hitte-sensaties en cognitieve klachten. De behandeling richt zich op het verdrijven van resterende pathogene factoren, het herstel van Qi en Yin, en het kalmeren van het zenuwstelsel (Shen).</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Modulering van neuro-inflammatie:</strong> Acupunctuur vermindert neuroinflammatie die bijdraagt aan brain fog, door pro-inflammatoire cytokines in het centraal zenuwstelsel te reguleren.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Herstel van mitochondriale functie:</strong> De behandeling stimuleert de energieproductie op cellulair niveau, wat direct bijdraagt aan herstel van de post-COVID vermoeidheid.</li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed"><strong className="font-medium text-[#1F3A36]">Regulering van het autonome zenuwstelsel:</strong> Acupunctuur herstelt de balans tussen het sympathische en parasympathische zenuwstelsel, wat relevant is bij de dysautonomie die veel Long COVID-patiënten ervaren.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoe ziet een behandeling eruit?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">Bij Long COVID-patiënten is het eerste consult bijzonder uitgebreid. We bespreken uw klachtenpatroon in detail, hoe de infectie verliep, welke klachten sindsdien zijn blijven bestaan en uw huidige draagkracht. Pacing — het zorgvuldig doseren van activiteiten — is een essentieel onderdeel van de begeleiding bij Long COVID.</p>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">De acupunctuurbehandeling bij Long COVID is over het algemeen milder en rustiger dan bij andere aandoeningen. Minder naalden, kortere behandeltijd en een lagere stimulatieintensiteit zijn kenmerkend. Rust en herstel staan centraal. Naarmate uw conditie verbetert, wordt de behandeling geleidelijk aangepast.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Hoeveel behandelingen zijn meestal nodig?</h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">Long COVID is een complex syndroom waarvoor geduld en een gedegen aanpak nodig zijn. Doorgaans zijn acht tot twaalf behandelingen nodig voor een significante verbetering. Sommige patiënten merken al na drie tot vijf sessies een verbetering in hun energieniveau en cognitief functioneren. We adviseren wekelijkse sessies in de beginfase, later te verlengen naar om de twee weken naarmate het herstel vordert.</p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Voor wie is acupunctuur bij Long COVID geschikt?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Aanhoudende vermoeidheid na COVID-19</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Brain fog en cognitieve klachten</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Ademhalingsklachten na COVID</span></div>
                <div className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5"><iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl" /><span className="text-sm font-medium text-[#1F3A36]">Post-COVID syndroom</span></div>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Meer informatie &amp; gerelateerde behandelingen</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/klachten/long-covid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Alles over Long COVID</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-chronische-vermoeidheid" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij chronische vermoeidheid</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-herstel-na-ziekte" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij herstel na ziekte</span>
                </Link>
                <Link href="/behandelingen/acupunctuur-ademhalingsproblemen" className="flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                  <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0" />
                  <span className="text-sm font-medium text-[#1F3A36]">Acupunctuur bij ademhalingsproblemen</span>
                </Link>
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-10">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Acupunctuur bij Long COVID in de regio Zaandam</h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">Onze praktijk is centraal gelegen in Zaandam en uitstekend bereikbaar voor patiënten met Long COVID. Woont u in <strong>Zaandam, de gemeente Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft of Zaandijk</strong>? Dan bent u binnen enkele minuten bij onze praktijk.</p>
            </section>

          </div>
        </article>

        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Veelgestelde vragen over acupunctuur bij Long COVID</h2>
            </div>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Helpt acupunctuur bij Long COVID?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur wordt wereldwijd ingezet ter ondersteuning van herstel bij Long COVID. De behandeling richt zich op het verminderen van vermoeidheid, het verlichten van brain fog, het verbeteren van de ademhaling en het herstel van de algehele vitaliteit. Meerdere klinische studies tonen positieve resultaten bij post-virale vermoeidheidssyndromen.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Is acupunctuur veilig bij Long COVID?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja, acupunctuur is veilig als aanvullende behandeling bij Long COVID. Wij werken met steriele eenmalige naalden en passen de intensiteit van de behandeling aan uw draagkracht aan, zodat overbelasting wordt vermeden.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Hoe snel merk je resultaat bij Long COVID?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Long COVID is een complex en individueel syndroom. Sommige patiënten merken al na drie tot vijf behandelingen een verbetering in hun energieniveau en cognitief functioneren. Een volledige behandelcyclus van acht tot twaalf sessies biedt doorgaans het meeste resultaat.</div>
              </details>
              <details className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                  Wordt acupunctuur voor Long COVID vergoed?
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" /></span>
                </summary>
                <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">Ja. Acupunctuur Zaandam is aangesloten bij de erkende beroepsverenigingen (NVA / TCMA). Hierdoor vergoeden de meeste zorgverzekeraars in Nederland de behandeling vanuit de aanvullende verzekering. De vergoeding gaat <strong>niet</strong> ten koste van uw verplichte eigen risico.</div>
              </details>
            </div>
          </div>
        </section>

        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>Erkend door verenigingen en vergoed door verzekeraars</h2>
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

        <section id="contact" aria-labelledby="cta-titel" className="overflow-hidden text-center bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-left">
            <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="flex flex-col items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8A6B3D] mb-8"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Zet de eerste stap naar herstel</h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">Long COVID is een zware last, maar herstel is mogelijk. Maak een afspraak via onze online planner of stuur ons een WhatsApp. Wij begeleiden u met geduld en zorg op uw herstelpad.</p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                    WhatsApp ons
                  </a>
                </div>
              </div>
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/30 to-[#4A6559]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300" />
                <div className="relative w-full bg-[#FAF8F3] rounded-xl shadow-2xl border border-[#1F3A36]/10 overflow-hidden flex flex-col">
                  <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b pr-4 pl-4 items-center justify-between">
                    <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /><div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" /></div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">Online Planner</span>
                    <div className="w-10" />
                  </div>
                  <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="animate-spin h-8 w-8 text-[#4A6559]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    </div>
                    <iframe src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4" style={{ width: "100%", border: "none", overflow: "auto", minHeight: "650px", height: "100%", position: "relative", zIndex: 10 }} scrolling="yes" id="D8uouGkFZH4Alr37y5z4_behandeling_long_covid" title="Maak een afspraak"
                      loading="lazy" />
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
