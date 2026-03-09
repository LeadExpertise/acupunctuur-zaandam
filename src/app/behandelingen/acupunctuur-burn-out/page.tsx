import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Burn-out | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij burn-out in Zaandam. Ondersteun uw herstelproces, herstel energie en veerkracht en verlicht klachten als uitputting, angst en slaapproblemen.",
  keywords: [
    "acupunctuur burn-out",
    "burn-out behandeling Zaandam",
    "herstel burn-out acupunctuur",
    "acupunctuur uitputting",
    "burn-out aanvulling behandeling",
    "acupunctuur stress mentaal Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-burn-out",
      name: "Acupunctuur bij Burn-out | Acupunctuur Zaandam",
      description:
        "Acupunctuur als aanvullende ondersteuning bij burn-out in Zaandam. Herstel energie, slaap en veerkracht via traditionele Chinese geneeskunde.",
      about: [
        { "@type": "MedicalCondition", name: "Burn-out" },
        { "@type": "MedicalCondition", name: "Overspanning" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Burn-out",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij burn-out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur kan het herstelproces bij burn-out ondersteunen door het zenuwstelsel te kalmeren, de slaapkwaliteit te verbeteren, uitputting te verlichten en emotionele spanning los te laten. Het is een waardevolle aanvulling op begeleiding door een psycholoog of bedrijfsarts, maar vervangt professionele zorg niet.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij burn-out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig als aanvulling bij burn-out. Het is een milde, niet-invasieve behandeling die geen bijwerkingen heeft. Acupunctuur werkt goed naast psychologische begeleiding en re-integratietrajecten. Raadpleeg bij burn-out altijd ook uw huisarts of bedrijfsarts.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij burn-out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Burn-out herstel is een langdurig proces. Acupunctuur kan al na enkele sessies zorgen voor betere slaap, minder angst en iets meer energie. Een volledig hersteltraject duurt meerdere maanden; acupunctuur ondersteunt en versnelt dit proces.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor burn-out vergoed?",
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
          name: "Acupunctuur bij Burn-out",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-burn-out",
        },
      ],
    },
  ],
};

export default function BurnOutPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Burn-out</span>
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
              Acupunctuur bij Burn-out in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              Burn-out is meer dan vermoeidheid: het is een diepe uitputting van lichaam, geest en ziel na langdurige
              overbelasting. Acupunctuur ondersteunt uw herstelproces door uw zenuwstelsel te kalmeren, slaap te
              herstellen en de levensvlam stap voor stap terug aan te wakkeren.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
              <Link href="/klachten/burn-out" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">
                Meer over burn-out
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            {/* Disclaimer */}
            <div className="bg-[#F2EDE3] border border-[#8A6B3D]/20 rounded-xl p-6">
              <div className="flex gap-3 items-start">
                <iconify-icon icon="solar:info-circle-linear" className="text-[#8A6B3D] text-xl shrink-0 mt-0.5" />
                <p className="text-sm font-light text-[#1F3A36]/80 leading-relaxed">
                  <strong className="font-medium text-[#1F3A36]">Belangrijke noot:</strong> Acupunctuur is een
                  ondersteunende behandeling bij burn-out en vervangt geen professionele psychologische begeleiding
                  of advies van uw huisarts of bedrijfsarts. Raadpleeg altijd een zorgprofessional bij burn-out.
                  Acupunctuur Zaandam werkt graag samen met andere zorgverleners in uw behandelteam.
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is burn-out?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Burn-out is een toestand van ernstige mentale, emotionele en lichamelijke uitputting als gevolg van
                langdurige overbelasting &mdash; doorgaans door werk, maar ook door mantelzorg, chronische ziekte of
                persoonlijke omstandigheden. Het lichaam en de geest zijn letterlijk &ldquo;leeg&rdquo;, en zelfs
                rust herstelt het energieniveau niet meer.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Symptomen zijn onder meer extreme vermoeidheid, emotionele vlakheid of juist huilbuien, angst,
                slaapproblemen, concentratieproblemen, prikkelbaarheid, lichamelijke klachten als hoofdpijn en
                spierpijn, en het gevoel de regie over het eigen leven kwijt te zijn. Burn-out ontstaat geleidelijk
                en wordt vaak te laat herkend.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Herstel duurt gemiddeld zes maanden tot meer dan een jaar en vraagt om een integrale aanpak:
                rust, psychologische begeleiding, leefstijlverandering &eacute;n lichamelijke ondersteuning.
                Acupunctuur speelt in dit herstelproces een waardevolle ondersteunende rol.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe helpt acupunctuur bij burn-out?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de Traditionele Chinese Geneeskunde is burn-out een klassiek beeld van Nier-Jing-uitputting:
                de diepste energiereserves zijn leeggeraakt door jarenlange overbelasting. De Nier is de basis
                van levensenergie (Yuan Qi); wanneer deze uitgeput raakt, kunnen alle orgaansystemen niet meer
                optimaal functioneren. Acupunctuur voedt de Nier, versterkt de Milt (voor voeding en energie)
                en kalmeert het Hart (voor emotionele rust en slaap).
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit westerse fysiologie moduleert acupunctuur de HPA-as &mdash; de centrale stressas van het
                lichaam &mdash; en verlaagt het chronisch verhoogde cortisolniveau. De parasympathische
                activering bevordert diepe ontspanning, verbetert de slaaparchitectuur en herstelt de
                hartratevariabiliteit, een maat voor veerkracht van het zenuwstelsel.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Bijkomende lichamelijke klachten &mdash; spierspanning, hoofdpijn, darmproblemen &mdash; die
                bij burn-out vaak optreden, worden tegelijk meebehandeld, waardoor het algehele welbevinden
                sneller verbetert.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De intake is uitgebreider dan bij acute klachten: er wordt diepgaand ingegaan op uw levensgeschiedenis,
                werkdruk, slaappatroon, eetgewoonten en emotioneel functioneren. De acupuncturist stelt een TCG-patroon
                vast en kiest een behandelplan dat aansluit bij uw fase van burn-out.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de acute fase worden kalmerende, voedende punten gebruikt: lichaam en geest krijgen rust en
                kunnen beginnen te herstellen. In de opbouwfase verschuift de focus naar energieherstel en
                het versterken van de veerkracht. De behandelingen zijn mild en worden zorgvuldig afgestemd
                op uw energieniveau.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Naast de acupunctuur ontvangt u adviezen over slaap, voeding, beweging en grensherkenning &mdash;
                praktische handvatten die uw herstel dagelijks ondersteunen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Burn-out herstel is een marathon, geen sprint. Een startreeks van tien tot twaalf sessies
                &mdash; aanvankelijk wekelijks &mdash; is bij burn-out realistisch. Naarmate de energie
                terugkomt, wordt de frequentie afgebouwd tot tweewekelijks en later maandelijks.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Onderhoudsbehandelingen na herstel helpen terugval te voorkomen en de nieuw gevonden balans
                te bewaken. Veel pati&euml;nten ervaren na de eerste drie tot vijf sessies al een betere
                nachtrust en iets meer mentale ruimte.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mensen in de herstelperiode van burn-out",
                  "Pati\u00ebnten met ernstige vermoeidheid en slaapproblemen",
                  "Personen met angst of emotionele vlakheid door overbelasting",
                  "Mensen die naast psychologische begeleiding lichaamsgericht herstel zoeken",
                  "Iedereen met lichamelijke klachten als gevolg van burn-out",
                  "Pati\u00ebnten die burn-out willen voorkomen bij vroege signalen",
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
                Burn-out hangt nauw samen met chronische stress, slaaptekort en vermoeidheid. Bekijk ook de verwante behandelingen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/behandelingen/acupunctuur-stressklachten", label: "Acupunctuur bij Stressklachten" },
                  { href: "/behandelingen/acupunctuur-chronische-vermoeidheid", label: "Acupunctuur bij Chronische Vermoeidheid" },
                  { href: "/behandelingen/acupunctuur-slaapproblemen", label: "Acupunctuur bij Slaapproblemen" },
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
                Acupunctuur bij burn-out in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Acupunctuur Zaandam biedt een rustige, vertrouwde omgeving voor mensen die herstellen van burn-out.
                Bereikbaar vanuit Zaandijk, Koog aan de Zaan, Wormerveer, Krommenie, Assendelft, Amsterdam-Noord
                en Purmerend. Flexibele afspraken in de ochtend of middag zijn mogelijk voor mensen die
                niet fulltime werken tijdens hun herstel.
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
                Antwoorden op de meest gestelde vragen over acupunctuur bij burn-out.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij burn-out?",
                  a: "Acupunctuur kan het herstelproces bij burn-out ondersteunen door het zenuwstelsel te kalmeren, de slaapkwaliteit te verbeteren, uitputting te verlichten en emotionele spanning los te laten. Het is een waardevolle aanvulling op begeleiding door een psycholoog of bedrijfsarts, maar vervangt professionele zorg niet.",
                },
                {
                  q: "Is acupunctuur veilig bij burn-out?",
                  a: "Ja, acupunctuur is veilig als aanvulling bij burn-out. Het is een milde, niet-invasieve behandeling die geen bijwerkingen heeft. Acupunctuur werkt goed naast psychologische begeleiding en re-integratietrajecten. Raadpleeg bij burn-out altijd ook uw huisarts of bedrijfsarts.",
                },
                {
                  q: "Hoe snel merk je resultaat bij burn-out?",
                  a: "Burn-out herstel is een langdurig proces. Acupunctuur kan al na enkele sessies zorgen voor betere slaap, minder angst en iets meer energie. Een volledig hersteltraject duurt meerdere maanden; acupunctuur ondersteunt en versnelt dit proces.",
                },
                {
                  q: "Wordt acupunctuur voor burn-out vergoed?",
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
        <section id="contact" aria-labelledby="cta-burnout-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="cta-burnout-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Ondersteun uw herstel &mdash; stap voor stap
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Maak een intake-afspraak in Zaandam en ontdek hoe acupunctuur uw burn-out herstel kan
                  ondersteunen. Geen wachtlijst, geen verwijzing nodig.
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
                  id="D8uouGkFZH4Alr37y5z4_behandeling_burn_out"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  loading="lazy"
                  title="Afspraak maken voor burn-out behandeling"
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
