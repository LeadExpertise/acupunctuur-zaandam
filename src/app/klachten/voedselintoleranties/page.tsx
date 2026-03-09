import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Voedselintoleranties Zaandam | Gevoelig Spijsverteringsstelsel",
  description:
    "Last van voedselintoleranties, lactose- of glutengevoeligheid? Acupunctuur in Zaandam ondersteunt de spijsvertering en moduleert de immuunrespons op voeding.",
  keywords: [
    "acupunctuur voedselintoleranties zaandam",
    "lactose-intolerantie acupunctuur",
    "glutengevoeligheid acupunctuur zaandam",
    "histamine intolerantie acupunctuur",
    "gevoelig spijsverteringsstelsel acupunctuur",
    "voedselovergevoeligheid behandeling zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.acupunctuurzaandam.nl/klachten/voedselintoleranties",
      name: "Acupunctuur bij Voedselintoleranties in Zaandam",
      description:
        "Informatie over de behandeling van voedselintoleranties, lactose-intolerantie, glutengevoeligheid en histamine-intolerantie via acupunctuur in Zaandam.",
      about: [
        { "@type": "MedicalCondition", name: "Voedselintolerantie" },
        { "@type": "MedicalCondition", name: "Lactose-intolerantie" },
        { "@type": "MedicalCondition", name: "Niet-coeliakie glutengevoeligheid" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: { "@type": "MedicalCondition", name: "Voedselintoleranties" },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kan acupunctuur voedselintoleranties behandelen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur richt zich niet op het verwijderen van de intolerantie zelf, maar op het versterken van de spijsverteringsfunctie en het moduleren van de immuunrespons. Dit kan de ernst van reacties verminderen en de darmgezondheid verbeteren. Bij coeliakie is strikte glutenvrije voeding altijd noodzakelijk.",
          },
        },
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij histamine-intolerantie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bij histamine-intolerantie is er onvoldoende afbraak van histamine in de darm. Acupunctuur kan via immuunmodulatie en versterking van de darmbarrière ondersteunend werken. Combinatie met dieetbegeleiding (histamine-arme voeding) is bij histamine-intolerantie sterk aanbevolen.",
          },
        },
        {
          "@type": "Question",
          name: "Wat is de rol van darmpermeabiliteit bij voedselintoleranties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Een verhoogde darmpermeabiliteit ('leaky gut') laat onvolledig verteerde voedingsdeeltjes door de darmwand passeren, wat immuunreacties uitlokt. Acupunctuur kan via immuunmodulatie en stressreductie bijdragen aan het herstel van de darmbarrièrefunctie.",
          },
        },
        {
          "@type": "Question",
          name: "Worden behandelingen vergoed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij de meeste zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
          },
        },
      ],
    },
  ],
};

export default function VoedselintolerantiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        {/* Breadcrumb */}
        <div className="fixed top-[110px] left-0 right-0 z-40 bg-[#F2EDE3]/95 backdrop-blur-md border-b border-[#1F3A36]/10 py-2">
          <div className="max-w-6xl mx-auto px-6 w-full flex gap-2 text-[11px] font-medium tracking-wide text-[#1F3A36]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/" className="hover:text-[#1F3A36] transition-colors">Home</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/welke-klachten" className="hover:text-[#1F3A36] transition-colors">Welke klachten</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <Link href="/klachten/spijsvertering-buik" className="hover:text-[#1F3A36] transition-colors">Spijsvertering &amp; buik</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Voedselintoleranties</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Spijsvertering &amp; Buik
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Voedselintoleranties in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Een gevoelig spijsverteringsstelsel dat reageert op bepaalde voedingsstoffen — lactose, gluten, histamine of andere triggers — legt grote beperkingen op aan het dagelijks leven. Acupunctuur ondersteunt de spijsverteringsfunctie en moduleert de immuunrespons, zodat het lichaam voeding beter kan verdragen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
            </div>
          </div>
        </header>

        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            {/* Featured Snippet — targets "Helpt acupunctuur bij voedselintoleranties?" */}
            <div className="bg-[#F2EDE3] border-l-4 border-[#4A6559] rounded-r-xl p-6 -mb-4">
              <p className="text-[10px] font-semibold text-[#8A6B3D] tracking-widest uppercase mb-2">Kort antwoord</p>
              <p className="text-base text-[#1F3A36]/90 font-light leading-relaxed">
                Ja. Acupunctuur ondersteunt bij voedselintoleranties door de darmwand te versterken, het immuunsysteem te moduleren en de spijsverteringsenzymproductie te ondersteunen. Effectief bij lactose-intolerantie, histamine-intolerantie, fructose-malabsorptie en leaky gut — als aanvulling op dieetbegeleiding en het verminderen van darmontsteking.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn voedselintoleranties?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                Voedselintoleranties verschillen van voedselallergieen: bij een intolerantie is er geen IgE-gemedieerde immuunrespons maar een niet-allergische gevoeligheid die tot spijsverteringsklachten leidt. Voorbeelden zijn lactose-intolerantie (onvermogen om lactose te splitsen), niet-coeliakie glutengevoeligheid (reactie op gluten zonder auto-immuunbeschadiging van de dunne darm), fructosemalabsorptie en histamine-intolerantie. De klachten variëren van opgeblazen gevoel, diarree, buikpijn en misselijkheid tot huidreacties, vermoeidheid en hoofdpijn. Darmpermeabiliteit — de doorlaatbaarheid van de darmwand — speelt bij veel intoleranties een rol: een beschadigde darmbarrière maakt de reacties erger.
              </p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#FAF8F3] p-8 rounded-xl border border-[#1F3A36]/5">
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Veelvoorkomende symptomen
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Opgeblazen gevoel na het eten",
                      "Diarree of losse ontlasting",
                      "Buikpijn en krampen",
                      "Misselijkheid na bepaalde voeding",
                      "Vermoeidheid na maaltijden",
                      "Huidreacties (roodheid, jeuk)",
                      "Hoofdpijn en wazig denken",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Veelvoorkomende triggers
                  </h3>
                  <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light">
                    {[
                      "Lactose (melksuiker)",
                      "Gluten (niet-coeliakie)",
                      "Histamine (oude kaas, wijn, vis)",
                      "Fructose en FODMAP-rijke voeding",
                      "Additieven en conserveringsmiddelen",
                      "Koffie en zure voeding",
                      "Ei en soja",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe acupunctuur kan helpen
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">De visie vanuit Traditionele Chinese Geneeskunde (TCG)</h3>
                  <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                    In de TCG worden voedselintoleranties en een gevoelig spijsverteringsstelsel primair gezien als een Milt-deficiëntie-patroon. De Milt is verantwoordelijk voor de transformatie en het transport van voedingsstoffen; wanneer zij verzwakt is, wordt voeding niet goed verwerkt en hoopt vochtigheid en slijm (Tan) zich op in de spijsverteringskanalen. Dit geeft aanleiding tot het opgeblazen gevoel, diarree en vermoeidheid na het eten. Behandeling richt zich op het versterken van de Milt-Qi, het opdrogen van vochtigheid en het verbeteren van de verwerkingscapaciteit van de spijsverteringsorganen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1F3A36] mb-3">Moderne fysiologische verklaringen</h3>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#8A6B3D]/30">
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Darmpermeabiliteit:</strong> Chronische stress en dysbiose verhogen de darmpermeabiliteit, waardoor voedingsdeeltjes de darmwand passeren en immuunreacties uitlokken. Acupunctuur kan via stressreductie bijdragen aan herstel van de darmbarrière.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Immuunmodulatie:</strong> Acupunctuur beïnvloedt de balans tussen Th1- en Th2-immuunrespons en kan de overgevoeligheidsreactie op voedingsstoffen matigen.
                    </li>
                    <li className="text-base text-[#1F3A36]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#1F3A36]">Digestieve enzymproductie:</strong> Stimulatie van het parasympathische zenuwstelsel via de vagusnervus bevordert de aanmaak van spijsverteringsenzymen en maagzuur, wat de vertering van moeilijk verteerbare voedingsstoffen verbetert.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat kunt u verwachten?
              </h2>
              <p className="text-base text-[#1F3A36]/80 font-light leading-relaxed mb-4">
                Voedselintoleranties vragen om een integrale aanpak. Acupunctuur is doorgaans een aanvulling op dieetbegeleiding, niet een vervanging. We adviseren een traject van 8 tot 12 behandelingen, gecombineerd met aandacht voor het eetpatroon. Bij vermoeden van coeliakie of allergie verwijzen we altijd door naar de huisarts voor diagnostiek.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is dit geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met lactose-intolerantie",
                  "Mensen met niet-coeliakie glutengevoeligheid",
                  "Mensen met histamine-intolerantie",
                  "Mensen met fructosemalabsorptie",
                  "Mensen met een gevoelig spijsverteringsstelsel",
                  "Mensen met PDS en voedingsgerelateerde klachten",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#FAF8F3] p-4 rounded border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:shield-check-linear" className="text-[#8A6B3D] text-xl shrink-0" />
                    <span className="text-sm font-medium text-[#1F3A36]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#1F3A36]/10 pt-16">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Behandeling in Zaandam
              </h2>
              <p className="text-sm text-[#1F3A36]/70 font-light leading-relaxed">
                Onze praktijk is centraal gelegen in Zaandam, bereikbaar vanuit{" "}
                <strong>Zaanstad, Wormerveer, Koog aan de Zaan, Assendelft en Zaandijk</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/klachten/spijsvertering-buik" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Spijsvertering &amp; buik overzicht
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/opgeblazen-gevoel" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Opgeblazen gevoel
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/klachten/darmklachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Darmklachten
                </Link>
                <span className="text-[#8A6B3D]">·</span>
                <Link href="/welke-klachten" className="text-[#4A6559] hover:text-[#1F3A36] underline underline-offset-2 transition-colors">
                  Alle klachten
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3] border-y border-[#1F3A36]/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen over voedselintoleranties
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Kan acupunctuur voedselintoleranties behandelen?",
                  a: "Acupunctuur richt zich niet op het verwijderen van de intolerantie zelf, maar op het versterken van de spijsverteringsfunctie en het moduleren van de immuunrespons. Dit kan de ernst van reacties verminderen en de darmgezondheid verbeteren. Bij coeliakie is strikte glutenvrije voeding altijd noodzakelijk.",
                },
                {
                  q: "Helpt acupunctuur bij histamine-intolerantie?",
                  a: "Bij histamine-intolerantie is er onvoldoende afbraak van histamine in de darm. Acupunctuur kan via immuunmodulatie en versterking van de darmbarrière ondersteunend werken. Combinatie met dieetbegeleiding (histamine-arme voeding) is bij histamine-intolerantie sterk aanbevolen.",
                },
                {
                  q: "Wat is de rol van darmpermeabiliteit bij voedselintoleranties?",
                  a: "Een verhoogde darmpermeabiliteit ('leaky gut') laat onvolledig verteerde voedingsdeeltjes door de darmwand passeren, wat immuunreacties uitlokt. Acupunctuur kan via immuunmodulatie en stressreductie bijdragen aan het herstel van de darmbarrièrefunctie.",
                },
                {
                  q: "Worden behandelingen vergoed?",
                  a: "Ja. Behandelingen bij Acupunctuur Zaandam worden vergoed vanuit het aanvullende pakket bij de meeste zorgverzekeraars, waaronder VGZ, Zilveren Kruis en CZ. Dit gaat niet ten koste van uw eigen risico.",
                },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-[#1F3A36] font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F3A36]">
                    {item.q}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <iconify-icon icon="solar:alt-arrow-down-linear" className="text-xl text-[#8A6B3D]" stroke-width="1.5" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm font-light leading-relaxed text-[#1F3A36]/80 border-t border-[#1F3A36]/5 pt-4">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
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
                { href: "/klachten/darmklachten", label: "Darmklachten" },
                { href: "/klachten/opgeblazen-gevoel", label: "Opgeblazen Gevoel" },
                { href: "/klachten/allergische-klachten", label: "Allergische Klachten" },
                { href: "/klachten/maagklachten", label: "Maagklachten" },
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
                <h2 id="cta-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Klaar voor een eerste stap?
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
                  Een gevoelig spijsverteringsstelsel vraagt om een gerichte aanpak. Plan een intake en ontdek hoe acupunctuur uw darmfunctie en tolerantie voor voeding kan verbeteren.
                </p>
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
                      id="D8uouGkFZH4Alr37y5z4_voedselintoleranties"
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
