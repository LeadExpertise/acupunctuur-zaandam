import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Acupunctuur bij Overprikkeling | Acupunctuur Zaandam",
  description:
    "Acupunctuur bij overprikkeling in Zaandam. Kalmeer een overbelast zenuwstelsel, verminder prikkelbaarheid en herstel innerlijke rust op een natuurlijke manier.",
  keywords: [
    "acupunctuur overprikkeling",
    "overprikkeling behandeling Zaandam",
    "zenuwstelsel kalmeren acupunctuur",
    "HSP acupunctuur",
    "sensorische overbelasting behandeling",
    "acupunctuur stress overprikkeling Zaandam",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id":
        "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-overprikkeling",
      name: "Acupunctuur bij Overprikkeling | Acupunctuur Zaandam",
      description:
        "Behandeling van overprikkeling met acupunctuur in Zaandam. Herstel balans in het zenuwstelsel en verminder sensorische overbelasting.",
      about: [
        { "@type": "MedicalCondition", name: "Overprikkeling" },
        { "@type": "MedicalCondition", name: "Sensorische overbelasting" },
      ],
      audience: {
        "@type": "Patient",
        healthCondition: {
          "@type": "MedicalCondition",
          name: "Overprikkeling",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Helpt acupunctuur bij overprikkeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Acupunctuur is bijzonder geschikt voor overprikkeling. De behandeling kalmeert het autonome zenuwstelsel, verschuift de balans van sympathicus (vlucht-of-vechtmodus) naar parasympathicus (rust-en-herstel) en verlaagt de prikkeldrempel. Pati\u00ebnten ervaren meer innerlijke rust, minder prikkelbaarheid en een groter gevoel van controle.",
          },
        },
        {
          "@type": "Question",
          name: "Is acupunctuur veilig bij overprikkeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja, acupunctuur is veilig en mild bij overprikkeling. De behandeling wordt aangepast aan de gevoeligheid van de pati\u00ebnt. Weinig naalden, zachte stimulatie en een rustige omgeving zorgen voor een prettige ervaring, ook voor mensen die sterk gevoelig zijn voor prikkels.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe snel merk je resultaat bij overprikkeling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Veel pati\u00ebnten ervaren al na de eerste sessie een merkbare ontspanning en rust. Voor een structurele verbetering wordt een reeks van zes tot acht behandelingen aanbevolen, gecombineerd met leefstijladviezen.",
          },
        },
        {
          "@type": "Question",
          name: "Wordt acupunctuur voor overprikkeling vergoed?",
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
          name: "Acupunctuur bij Overprikkeling",
          item: "https://www.acupunctuurzaandam.nl/behandelingen/acupunctuur-overprikkeling",
        },
      ],
    },
  ],
};

export default function OverprikkelingPage() {
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
            <span className="text-[#1F3A36]">Acupunctuur bij Overprikkeling</span>
          </div>
        </div>

        {/* Hero */}
        <header className="pt-48 pb-20 relative items-center justify-center overflow-hidden border-b border-[#1F3A36]/5">
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70" />
          <div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
            <div className="inline-flex flex-col items-center justify-center mb-6">
              <span className="uppercase text-xs font-semibold text-[#8A6B3D] tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                Hoofd &amp; Zenuwstelsel
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>
            <h1 className="md:text-6xl text-4xl font-normal text-[#1F3A36] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Acupunctuur bij Overprikkeling in Zaandam
            </h1>
            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-3xl mr-auto ml-auto">
              In een wereld vol geluid, schermen en prikkels kan het zenuwstelsel overbelast raken. Overprikkeling
              leidt tot uitputting, prikkelbaarheid, slaapproblemen en het gevoel dat alles te veel is. Acupunctuur
              helpt uw zenuwstelsel te resetten en brengt u terug in een staat van rust en veerkracht.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-medium hover:bg-[#4A6559] transition-colors duration-300">
                Maak een afspraak
              </a>
              <Link href="/klachten/overprikkeling" className="inline-flex items-center justify-center px-8 py-3 rounded-sm border border-[#1F3A36]/20 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] transition-colors duration-300">
                Meer over overprikkeling
              </Link>
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="py-20 relative z-10 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Wat is overprikkeling?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Overprikkeling ontstaat wanneer het zenuwstelsel meer informatie verwerkt dan het aankan. Geluid,
                licht, drukte, sociale interacties, schermtijd en emotionele belasting kunnen allemaal bijdragen
                aan een overbelast stelsel. De persoon voelt zich overweldigd, prikkelbaar, moe na minimale
                inspanning, en heeft moeite om te ontspannen of te slapen.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Overprikkeling komt vaker voor bij hoogsensitieven (HSP), mensen met autisme, ADHD of angstklachten,
                maar ook bij iedereen die langdurig onder hoge druk staat. In onze huidige maatschappij met
                constante bereikbaarheid en informatie-overload is het een steeds vaker voorkomend probleem.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Chronische overprikkeling kan leiden tot burn-out, angstklachten, fibromyalgie of chronische
                vermoeidheid. Vroeg ingrijpen met acupunctuur kan escalatie voorkomen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe helpt acupunctuur bij overprikkeling?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                In de Traditionele Chinese Geneeskunde wordt overprikkeling gezien als een overvloed aan Yang of
                oprijzend Lever-Vuur: het systeem staat te &ldquo;aan&rdquo;, er is te veel opwaartse energie
                die het hoofd en het zenuwstelsel overstroomt. Acupunctuur koelt dit vuur, verankert de Shen
                (geestesrust) en herstelt de harmonie tussen Hart en Lever.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Vanuit westerse neurowetenschappen activeert acupunctuur de parasympathische tak van het
                autonome zenuwstelsel &mdash; het systeem van rust en herstel &mdash; terwijl de overdreven
                sympathische activiteit (de stressrespons) wordt geremd. Dit verlaagt het cortisolniveau,
                vermindert de hartfrequentie en kalmeert de prikkelbaarheid van het centrale zenuwstelsel.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                De behandeling is bijzonder mild en afgestemd op de gevoeligheid van de pati&euml;nt: minder naalden,
                zachte manipulatie en een rustige therapieomgeving maken de sessie tot een herstellende ervaring
                op zichzelf.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoe ziet een behandeling eruit?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De intake brengt in kaart welke prikkels het meeste impact hebben, hoe u slaapt, hoe uw energieniveau
                verloopt over de dag en of er onderliggende emotionele factoren meespelen. Op basis hiervan wordt een
                behandelplan samengesteld dat inspeelt op uw specifieke patroon.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                Naalden worden gezet op kalmerende punten: specifieke punten op het hoofd, in de nek, op het
                sternum, de polsen en voeten. Punten als Hartmeridiaanpunt 7 (Shenmen) en Pericardmeridiaanpunt 6
                zijn klassiek voor het kalmeren van de geest en het verminderen van angst en onrust.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Na de behandeling ontvangt u adviezen over schermgebruik, prikkelbeheer, ademhalingsoefeningen en
                eventuele kruidenthee of voedingsaanpassingen die uw zenuwstelsel verder ondersteunen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Hoeveel behandelingen zijn nodig?
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed mb-4">
                De meeste pati&euml;nten ervaren al na &eacute;&eacute;n sessie merkbare verlichting. Voor structurele
                verbetering is een reeks van zes tot acht sessies aanbevolen, wekelijks of tweewekelijks. Bij
                ernstige overprikkeling of een lange voorgeschiedenis kan een langer traject nodig zijn.
              </p>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Onderhoudsbehandelingen &eacute;&eacute;n keer per maand helpen de bereikte rust te bestendigen
                en terugval te voorkomen, zeker in perioden van verhoogde stress.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-normal text-[#1F3A36] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Voor wie is deze behandeling geschikt?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Hoogsensitieven (HSP) die overprikkeld raken",
                  "Mensen met ADHD of autisme die behoefte hebben aan rust",
                  "Personen die burn-out willen voorkomen",
                  "Iedereen met slaapproblemen door overactief denken",
                  "Mensen met angstklachten of aanhoudende stress",
                  "Pati\u00ebnten die lichamelijk reageren op emotionele prikkels",
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
                Overprikkeling raakt aan burn-out, angst en slaapproblemen. Bekijk ook de verwante behandelingen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { href: "/behandelingen/acupunctuur-burn-out", label: "Acupunctuur bij Burn-out" },
                  { href: "/behandelingen/acupunctuur-angstklachten", label: "Acupunctuur bij Angstklachten" },
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
                Acupunctuur bij overprikkeling in de regio Zaandam
              </h2>
              <p className="text-base font-light text-[#1F3A36]/80 leading-relaxed">
                Onze praktijk in Zaandam biedt een rustige, prikkelarme behandelomgeving &mdash; ideaal voor mensen
                die gevoelig zijn voor prikkels. Bereikbaar vanuit Zaandijk, Koog aan de Zaan, Wormerveer, Krommenie,
                Assendelft, Amsterdam-Noord en Purmerend. Flexibele afspraken op rustige tijden zijn mogelijk op aanvraag.
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
                Antwoorden op de meest gestelde vragen over acupunctuur bij overprikkeling.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Helpt acupunctuur bij overprikkeling?",
                  a: "Acupunctuur is bijzonder geschikt voor overprikkeling. De behandeling kalmeert het autonome zenuwstelsel, verschuift de balans van sympathicus naar parasympathicus en verlaagt de prikkeldrempel. Pati\u00ebnten ervaren meer innerlijke rust, minder prikkelbaarheid en een groter gevoel van controle.",
                },
                {
                  q: "Is acupunctuur veilig bij overprikkeling?",
                  a: "Ja, acupunctuur is veilig en mild bij overprikkeling. De behandeling wordt aangepast aan de gevoeligheid van de pati\u00ebnt. Weinig naalden, zachte stimulatie en een rustige omgeving zorgen voor een prettige ervaring, ook voor mensen die sterk gevoelig zijn voor prikkels.",
                },
                {
                  q: "Hoe snel merk je resultaat bij overprikkeling?",
                  a: "Veel pati\u00ebnten ervaren al na de eerste sessie een merkbare ontspanning en rust. Voor een structurele verbetering wordt een reeks van zes tot acht behandelingen aanbevolen, gecombineerd met leefstijladviezen.",
                },
                {
                  q: "Wordt acupunctuur voor overprikkeling vergoed?",
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
        <section id="contact" aria-labelledby="cta-overprikkeling-titel" className="overflow-hidden bg-[#1F3A36] pt-32 pb-32 relative">
          <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="cta-overprikkeling-titel" className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Rust in uw zenuwstelsel, rust in uw leven
                </h2>
                <p className="leading-relaxed text-base font-light text-[#FAF8F3]/80 mb-8">
                  Maak een afspraak in Zaandam en ontdek hoe acupunctuur uw overprikkeld zenuwstelsel kan kalmeren.
                  Geen wachtlijst, geen verwijzing nodig.
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
                  id="D8uouGkFZH4Alr37y5z4_behandeling_overprikkeling"
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{ width: "100%", height: "490px", border: "none" }}
                  loading="lazy"
                  title="Afspraak maken voor overprikkeling behandeling"
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
