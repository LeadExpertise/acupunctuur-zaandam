import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Slaapproblemen | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij slaapproblemen in Zaandam. Verbeter uw slaapkwaliteit, pak de oorzaak aan en herstel uw nachtrust op een natuurlijke, effectieve manier.",
  keywords: [
    "acupunctuur slaapproblemen",
    "slaapproblemen behandeling Zaandam",
    "slapeloosheid acupunctuur",
    "acupunctuur insomnie",
    "doorslapen problemen acupunctuur",
    "acupunctuur slaap Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-slaapproblemen",
      name: "Acupunctuur bij Slaapproblemen | Acupunctuur Zaandam",
      description:
        "Behandeling van slaapproblemen met acupunctuur in Zaandam. Verbeter inslapen, doorslapen en slaapkwaliteit via traditionele Chinese geneeskunde.",
      about: [
        { "@type": "MedicalCondition", name: "Slaapproblemen" },
        { "@type": "MedicalCondition", name: "Insomnie" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Slaapproblemen",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij slaapproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur kan slaapproblemen significant verbeteren. Door het zenuwstelsel te kalmeren, de melatonineproductie te bevorderen en onderliggende oorzaken zoals stress, pijn of hormonale disbalans aan te pakken, helpt acupunctuur bij zowel inslapen als doorslapen. Pati\u00ebnten rapporteren na een behandelreeks een diepere, meer herstellende slaap.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij slaapproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is volkomen veilig bij slaapproblemen en heeft geen bijwerkingen of verslavingsrisico, in tegenstelling tot slaapmedicatie. De behandeling is geschikt voor alle leeftijden en kan naast bestaande medicatie worden ingezet.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij slaapproblemen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel pati\u00ebnten slapen al na de eerste twee sessies merkbaar beter. Voor een duurzame verbetering is een reeks van zes tot acht sessies aanbevolen. Leefstijladviezen over slaaphygi\u00ebne ondersteunen het behandelresultaat.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor slaapproblemen vergoed?",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.acupunctuurzaandam.nl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Behandelingen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Acupunctuur bij Slaapproblemen",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-slaapproblemen",
        },
      ],
    },
  ],
};

export default function SlaapproblemenPage() {
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
            <Link href="/behandelingen" className="hover:text-[#1F3A36] transition-colors">Behandelingen</Link>
            <span className="text-[#1F3A36]/30">/</span>
            <span className="text-[#1F3A36]">Acupunctuur bij Slaapproblemen</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Stress, Energie &amp; Mentaal
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Slaapproblemen in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Slaap is de hoeksteen van gezondheid. Chronische slaaptekort ondermijnt uw immuunsysteem, concentratie,
              stemming en fysieke herstelcapaciteit. Acupunctuur pakt de oorzaak van uw slaapproblemen aan en helpt
              uw lichaam zijn natuurlijke slaapritme te herstellen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
              <Link href="/klachten/slaapproblemen" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">
                Meer over slaapproblemen
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat zijn slaapproblemen?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Slaapproblemen omvatten een breed spectrum: moeite met inslapen (de gedachten blijven maar malen),
                te vroeg wakker worden en niet meer kunnen inslapen, veelvuldig wakker worden gedurende de nacht,
                of een slaap die niet verkwikkend aanvoelt ondanks voldoende uren. Ook licht slapen, nachtmerries
                en rusteloze benen vallen onder slaapproblemen.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Oorzaken zijn talrijk: stress en piekergedachten, hormonale veranderingen (menopauze, zwangerschap),
                pijnklachten, angst, depressie, restless legs, schildklierproblemen of het gebruik van stimulerende
                middelen en schermen vlak voor bedtijd. Chronische slapeloosheid (insomnie) wordt vastgesteld
                wanneer de klachten meer dan drie maanden aanhouden en de dagfunctie be&iuml;nvloeden.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                De gevolgen van chronisch slaaptekort zijn ernstig: verhoogd risico op hart- en vaatziekten,
                diabetes type 2, obesitas, depressie en verminderde immuunfunctie. Vroegtijdige behandeling
                is van groot belang.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe helpt acupunctuur bij slaapproblemen?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de Traditionele Chinese Geneeskunde bewaakt het Hart de geestesactiviteit (Shen) en bewaakt
                &rsquo;s nachts de slaap. Wanneer het Hart verstoord is door stress, overdenken of emotionele
                schokken, &ldquo;zweeft&rdquo; de Shen en kan hij niet tot rust komen. Nier-Yin-tekort &mdash;
                waarbij het kalmerende, verkoelende element uitgeput raakt &mdash; leidt tot nachtzweten,
                onrustige slaap en vroeg wakker worden. Acupunctuur voedt het Hart-Bloed, versterkt Nier-Yin
                en ankert de Shen voor diepe, herstellende slaap.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit neurobiologie stimuleert acupunctuur de aanmaak van melatonine (het slaaphormoon) en
                GABA (een remmende neurotransmitter), terwijl het cortisolniveau verlaagt. De behandeling
                verbetert de slaaparchitectuur: meer diepe slaap en REM-slaap, minder nachtelijk wakker worden.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Omdat slaapproblemen altijd een oorzaak hebben, wordt in de behandeling ook de onderliggende
                disbalans aangepakt: pijn, stress, hormonale onbalans of angst worden gelijktijdig meebehandeld
                voor een duurzaam resultaat.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De intake gaat diep in op uw slaappatroon: hoe laat slaapt u in, hoe vaak wordt u wakker, wat
                gaat er door uw hoofd, droomt u veel, hoe voelt u zich bij het opstaan? Tevens worden stress,
                emoties, voeding, lichamelijke klachten en energieniveau in kaart gebracht.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Klassieke slaappunten zijn Hart 7 (Shenmen), Pericardium 6, Yin Tang, Nier 1 (Yongquan) en
                specifieke punten op het hoofd. De combinatie hangt af van het TCG-patroon: &ldquo;te veel
                vuur&rdquo; vraagt om andere punten dan &ldquo;te weinig Yin&rdquo;. De behandeling duurt
                gemiddeld vijfenveertig minuten en is diep ontspannend.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                U ontvangt slaaphygi&euml;neadviezen, ontspanningstechnieken en eventueel voedingstips die
                de melatonineproductie ondersteunen. Praktische, direct toepasbare handvatten maken deel
                uit van elke behandeling.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Voor acute slaapproblemen volstaat doorgaans een reeks van vier tot zes sessies. Bij langdurige
                insomnie of slaapproblemen met een complexe oorzaak wordt zes tot tien sessies aanbevolen.
                De eerste verbetering is vaak al na twee sessies merkbaar.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Onderhoudsbehandelingen eens per maand houden de verbetering in stand en voorkomen terugval,
                zeker in perioden van verhoogde stress of seizoensgebonden veranderingen die de slaap
                be&iuml;nvloeden.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen met moeite met inslapen door piekergedachten",
                  "Pati\u00ebnten die veelvuldig of te vroeg wakker worden",
                  "Personen met slaapproblemen door pijn of ongemak",
                  "Mensen met slaapverstoring door stress of burn-out",
                  "Vrouwen met slaapproblemen door hormonale veranderingen",
                  "Iedereen die slaapmedicatie wil afbouwen of vermijden",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-[#FAF8F3] rounded-lg p-4 border border-[#1F3A36]/5">
                    <iconify-icon icon="solar:shield-check-linear" className="text-[#4A6559] shrink-0 mt-0.5 text-lg" />
                    <span className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Meer informatie &amp; gerelateerde behandelingen
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-6">
                Slaapproblemen hangen vaak samen met stress, burn-out of rusteloze benen. Bekijk ook de verwante behandelingen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/behandelingen/acupunctuur-stressklachten", label: "Acupunctuur bij Stressklachten" },
                  { href: "/behandelingen/acupunctuur-burn-out", label: "Acupunctuur bij Burn-out" },
                  { href: "/behandelingen/acupunctuur-restless-legs", label: "Acupunctuur bij Restless Legs" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="group flex items-center gap-3 bg-[#FAF8F3] hover:bg-[#F2EDE3] border border-[#1F3A36]/5 hover:border-[#1F3A36]/15 rounded-lg p-4 transition-all duration-200">
                    <iconify-icon icon="solar:alt-arrow-right-linear" className="text-[#4A6559] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-sm font-medium text-[#1F3A36]">{link.label}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-[#FAF8F3] rounded-xl p-8 border border-[#1F3A36]/5">
              <h2 className="text-2xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Acupunctuur bij slaapproblemen in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Acupunctuur Zaandam biedt een rustige, vertrouwde omgeving voor mensen die last hebben van
                slaapproblemen. Bereikbaar vanuit Zaandijk, Koog aan de Zaan, Wormerveer, Krommenie, Assendelft,
                Amsterdam-Noord en Purmerend. Vroege avondafspraken zijn beschikbaar voor mensen die vlak voor
                bedtijd willen ontspannen.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-24 bg-[#F2EDE3]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-normal text-[#1F3A36] tracking-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Veelgestelde vragen
              </h2>
              <p className="text-base font-light text-[#1F3A36]/70">
                Antwoorden op de meest gestelde vragen over acupunctuur bij slaapproblemen.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij slaapproblemen?",
                  a: "Ja, acupunctuur kan slaapproblemen significant verbeteren. Door het zenuwstelsel te kalmeren, de melatonineproductie te bevorderen en onderliggende oorzaken zoals stress, pijn of hormonale disbalans aan te pakken, helpt acupunctuur bij zowel inslapen als doorslapen. Pati\u00ebnten rapporteren na een behandelreeks een diepere, meer herstellende slaap.",
                },
                {
                  q: "Is acupunctuur veilig bij slaapproblemen?",
                  a: "Ja, acupunctuur is volkomen veilig bij slaapproblemen en heeft geen bijwerkingen of verslavingsrisico, in tegenstelling tot slaapmedicatie. De behandeling is geschikt voor alle leeftijden en kan naast bestaande medicatie worden ingezet.",
                },
                {
                  q: "Hoe snel merk je resultaat bij slaapproblemen?",
                  a: "Veel pati\u00ebnten slapen al na de eerste twee sessies merkbaar beter. Voor een duurzame verbetering is een reeks van zes tot acht sessies aanbevolen. Leefstijladviezen over slaaphygi\u00ebne ondersteunen het behandelresultaat.",
                },
                {
                  q: "Wordt acupunctuur voor slaapproblemen vergoed?",
                  a: "Ja, Acupunctuur Zaandam is aangesloten bij de NVA en TCMA. De meeste zorgverzekeraars vergoeden de behandeling vanuit de aanvullende verzekering, zonder aantasting van uw eigen risico.",
                },
              ].map((faq) => (
                <details key={faq.q} className="group bg-white rounded-xl border border-[#1F3A36]/10 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-medium text-[#1F3A36] text-sm">
                    {faq.q}
                    <iconify-icon icon="solar:alt-arrow-down-linear" className="text-[#4A6559] shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-sm font-light text-[#1F3A36]/80 leading-relaxed border-t border-[#1F3A36]/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section aria-label="Beroepsverenigingen en verzekeraars" className="border-y bg-[#FAF8F3] border-[#1F3A36]/10 py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <h2 className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
              Erkend door verenigingen en vergoed door verzekeraars
            </h2>
            <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp" alt="NVA Erkend Acupuncturist" className="md:h-12 w-auto h-10 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png" alt="VGZ Vergoeding Acupunctuur" className="md:h-10 w-auto h-8 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg" alt="TCMA Certificering" className="md:h-12 w-auto h-10 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png" alt="Zilveren Kruis Vergoeding" className="md:h-12 w-auto h-10 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png" alt="CZ Vergoeding Acupunctuur" className="md:h-10 w-auto h-8 object-contain" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" aria-labelledby="cta-slaap-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="cta-slaap-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Herstel uw nachtrust &mdash; herstel uw leven
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Maak een afspraak in Zaandam en ontdek hoe acupunctuur uw slaap kan verbeteren zonder
                  bijwerkingen. Geen wachtlijst, geen verwijzing nodig.
                </p>
                <a href="https://wa.me/31657998330" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 text-sm font-medium text-white rounded-sm px-8 py-3.5 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                  WhatsApp ons
                </a>
              </div>
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  id="D8uouGkFZH4Alr37y5z4_behandeling_slaapproblemen"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  title="Afspraak maken voor slaapproblemen behandeling"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
