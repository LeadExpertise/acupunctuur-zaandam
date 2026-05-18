import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("/algemene-voorwaarden", {
  title: "Algemene Voorwaarden",
  description:
    "Algemene voorwaarden van Acupunctuur Zaandam. Lees hier de voorwaarden rondom afspraken, annulering, tarieven en behandelovereenkomst.",
  robots: { index: true, follow: true },
});

export default function AlgemeneVoorwaardenPage() {
  return (
    <main id="main-content" className="pt-40 pb-24 bg-[#FAF8F3] min-h-screen">
      <div className="max-w-3xl mx-auto px-6">

        {/* Breadcrumb */}
        <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-xs text-[#1F3A36]/50 font-light mb-10">
          <Link href="/" className="hover:text-[#4A6559] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1F3A36]/80">Algemene Voorwaarden</span>
        </nav>

        <header className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-normal text-[#1F3A36] tracking-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Algemene Voorwaarden
          </h1>
          <p className="text-sm text-[#1F3A36]/60 font-light">
            Laatst bijgewerkt: mei 2026
          </p>
        </header>

        <div className="prose-custom text-[#1F3A36]/85 font-light leading-relaxed space-y-8 text-base">

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              1. Toepasselijkheid
            </h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle behandelingen en
              overeenkomsten tussen Acupunctuur Zaandam (handelend onder KvK-nummer 68404441)
              en de cliënt. Door het maken van een afspraak gaat u akkoord met deze voorwaarden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              2. Behandelovereenkomst
            </h2>
            <p>
              Tussen Acupunctuur Zaandam en cliënt komt een behandelovereenkomst tot stand zoals
              bedoeld in de Wet op de geneeskundige behandelingsovereenkomst (WGBO). De
              acupuncturist is gehouden te handelen conform de zorg van een goed hulpverlener
              en de richtlijnen van de beroepsvereniging NVA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              3. Tarieven en betaling
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Intakeconsult (1,5 uur): €80</li>
              <li>Vervolgbehandeling (1 uur): €60</li>
            </ul>
            <p className="mt-4">
              Betaling vindt plaats direct na de behandeling per pin of bankoverschrijving.
              Facturen worden digitaal verstuurd zodat u deze bij uw zorgverzekeraar kunt
              indienen voor (gedeeltelijke) vergoeding vanuit uw aanvullende verzekering.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              4. Annulering
            </h2>
            <p>
              Afspraken kunnen kosteloos tot 24 uur voor het geplande tijdstip geannuleerd of
              verplaatst worden. Bij afmelding korter dan 24 uur vooraf of bij niet verschijnen
              behoudt Acupunctuur Zaandam zich het recht voor het volledige consulttarief in
              rekening te brengen. Deze kosten worden niet vergoed door uw zorgverzekeraar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              5. Verhindering van de acupuncturist
            </h2>
            <p>
              In geval van ziekte of overmacht aan de zijde van de acupuncturist wordt u zo
              spoedig mogelijk geïnformeerd en wordt een nieuwe afspraak gemaakt zonder dat
              hieraan kosten verbonden zijn.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              6. Aansprakelijkheid
            </h2>
            <p>
              Acupunctuur is een veilige behandelmethode wanneer uitgevoerd door een erkend
              acupuncturist. Acupunctuur Zaandam is aangesloten bij de NVA en TCMA en beschikt
              over de vereiste beroepsaansprakelijkheidsverzekering. Aansprakelijkheid voor
              indirecte schade is uitgesloten.
            </p>
            <p className="mt-4">
              De cliënt is verantwoordelijk voor het verstrekken van juiste en volledige
              informatie over de gezondheidstoestand, medicijngebruik en eventuele
              zwangerschap.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              7. Privacy en dossier
            </h2>
            <p>
              Op de verwerking van uw persoonsgegevens is onze{" "}
              <Link href="/privacyverklaring" className="underline hover:text-[#4A6559]">
                privacyverklaring
              </Link>{" "}
              van toepassing. Uw medisch dossier wordt 20 jaar bewaard conform de WGBO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              8. Klachten en geschillen
            </h2>
            <p>
              Klachten over de behandeling kunnen in eerste instantie kenbaar worden gemaakt
              bij de acupuncturist zelf. Komt u er samen niet uit, dan kunt u terecht bij de
              klachtenfunctionaris van de NVA. Voor verdere geschillen geldt het tuchtrecht
              van de NVA. Op deze voorwaarden is Nederlands recht van toepassing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-normal text-[#1F3A36] mt-8 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              9. Contactgegevens
            </h2>
            <p>
              Acupunctuur Zaandam — Sam de Vries<br />
              BedrijvigeBij Kamer A103, Lagendijk 3<br />
              1541 KA Koog aan de Zaan<br />
              Telefoon: <a href="tel:+31657998330" className="underline hover:text-[#4A6559]">+31 6 5799 8330</a><br />
              KvK: 68404441 — BTW: NL002282285B34
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
