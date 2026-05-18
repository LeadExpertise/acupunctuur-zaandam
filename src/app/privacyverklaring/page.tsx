import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/privacyverklaring", {
  title: "Privacyverklaring",
  description:
    "Privacyverklaring van Acupunctuur Zaandam: hoe wij omgaan met uw persoonsgegevens, conform de AVG/GDPR.",
  robots: { index: true, follow: true },
});

export default function PrivacyverklaringPage() {
  return (
    <main id="main-content" className="pt-40 pb-24 bg-[#FAF8F3] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">

        {/* Breadcrumb */}
        <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-xs text-[#1F3A36]/50 font-light mb-10">
          <Link href="/" className="hover:text-[#4A6559] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1F3A36]/80">Privacyverklaring</span>
        </nav>

        <header className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-normal text-[#1F3A36] tracking-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Privacyverklaring
          </h1>
          <p className="text-sm text-[#1F3A36]/60 font-light">
            Laatst bijgewerkt: mei 2026
          </p>
        </header>

        <div className="prose-custom text-[#1F3A36]/85 font-light leading-relaxed space-y-8 text-base">
          <section>
            <p>
              Acupunctuur Zaandam, gevestigd aan BedrijvigeBij Kamer A103, Lagendijk 3, 1541 KA
              Koog aan de Zaan, is verantwoordelijk voor de verwerking van persoonsgegevens
              zoals weergegeven in deze privacyverklaring.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Contactgegevens
            </h2>
            <p>
              Acupunctuur Zaandam — Sam de Vries<br />
              BedrijvigeBij Kamer A103, Lagendijk 3<br />
              1541 KA Koog aan de Zaan<br />
              Telefoon: <a href="tel:+31657998330" className="underline hover:text-[#4A6559]">+31 6 5799 8330</a><br />
              KvK: 68404441
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Persoonsgegevens die wij verwerken
            </h2>
            <p>
              Acupunctuur Zaandam verwerkt uw persoonsgegevens doordat u gebruik maakt van onze
              diensten en/of omdat u deze gegevens zelf aan ons verstrekt. Hieronder vindt u een
              overzicht van de persoonsgegevens die wij verwerken:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Voor- en achternaam</li>
              <li>Geslacht en geboortedatum</li>
              <li>Adresgegevens</li>
              <li>Telefoonnummer en e-mailadres</li>
              <li>Gezondheids- en behandelgegevens (medisch dossier)</li>
              <li>Gegevens van uw zorgverzekering</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bijzondere persoonsgegevens
            </h2>
            <p>
              Onze praktijk verwerkt medische (bijzondere) persoonsgegevens uitsluitend in het
              kader van uw behandeling. Wij zijn op grond van de Wet op de geneeskundige
              behandelingsovereenkomst (WGBO) en de beroepscode verplicht een medisch dossier
              bij te houden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Met welk doel verwerken wij persoonsgegevens
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Het uitvoeren van uw acupunctuurbehandeling</li>
              <li>Het bijhouden van uw medisch dossier</li>
              <li>Het verzenden van facturen en het afhandelen van betalingen</li>
              <li>Het onderhouden van contact rondom afspraken</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Bewaartermijn
            </h2>
            <p>
              Wij bewaren uw medisch dossier 20 jaar na de laatste behandeling, conform de WGBO.
              Financiële gegevens worden 7 jaar bewaard conform de fiscale bewaarplicht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Delen met derden
            </h2>
            <p>
              Acupunctuur Zaandam verkoopt uw gegevens niet aan derden. Gegevens worden
              uitsluitend gedeeld met derden als dit noodzakelijk is voor de uitvoering van
              onze diensten of om te voldoen aan een wettelijke verplichting. Met partijen die
              uw gegevens in onze opdracht verwerken (zoals onze online afsprakenplanner)
              sluiten wij een verwerkersovereenkomst.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Cookies en webstatistieken
            </h2>
            <p>
              Onze website gebruikt analytische cookies (Google Analytics) om geanonimiseerd
              inzicht te krijgen in het gebruik van de website. Daarnaast gebruiken wij Google
              Tag Manager. Er worden geen tracking cookies geplaatst die uw gedrag op andere
              websites volgen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Uw rechten
            </h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te
              verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de
              gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking. U kunt
              een verzoek hiertoe sturen naar{" "}
              <a href="tel:+31657998330" className="underline hover:text-[#4A6559]">
                +31 6 5799 8330
              </a>
              . Wij reageren binnen vier weken op uw verzoek.
            </p>
            <p className="mt-4">
              U heeft tevens het recht een klacht in te dienen bij de Autoriteit
              Persoonsgegevens via{" "}
              <a
                href="https://autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#4A6559]"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Beveiliging
            </h2>
            <p>
              Acupunctuur Zaandam neemt de bescherming van uw gegevens serieus en treft
              passende technische en organisatorische maatregelen om misbruik, verlies of
              ongeoorloofde toegang tegen te gaan.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1F3A36]/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-light text-[#1F3A36]/60 hover:text-[#4A6559] transition-colors"
          >
            ← Terug naar home
          </Link>
        </div>

      </div>
    </main>
  );
}
