import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-titel"
      className="bg-[#F2EDE3] border-[#1F3A36]/10 border-t pt-24 pb-12"
      itemScope
      itemType="http://schema.org/MedicalClinic"
      id="contact"
    >
      <h2 id="footer-titel" className="sr-only">Voettekst en contactinformatie</h2>

      <div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

          {/* Col 1: Brand + social icons */}
          <div className="lg:col-span-1 pr-4">
            <Link
              href="/"
              aria-label="Home Acupunctuur Zaandam"
              itemProp="url"
              className="text-2xl font-normal tracking-tight text-[#1F3A36] block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm w-fit"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span itemProp="name">Acupunctuur Zaandam</span>
            </Link>
            <p
              itemProp="description"
              className="text-sm text-[#1F3A36]/80 font-light leading-relaxed mb-6"
            >
              Een rustgevende praktijk voor natuurlijke genezing, geworteld in Traditionele Chinese Geneeskunde. Gespecialiseerd in behandelingen voor pijn, stress, burn-out en vermoeidheid.
            </p>
            <div className="flex gap-4 text-[#1F3A36]/70">
              <a
                href="#"
                aria-label="Bezoek onze Instagram pagina voor inspiratie en gezondheidstips"
                className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm p-1"
              >
                <iconify-icon icon="solar:camera-linear" aria-hidden="true" className="text-xl" stroke-width="1.5" />
              </a>
              <a
                href="#"
                aria-label="Volg Acupunctuur Zaandam op Facebook"
                className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm p-1"
              >
                <iconify-icon icon="ic:outline-facebook" aria-hidden="true" className="text-xl" stroke-width="1.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Contact & Adres */}
          <div>
            <h3
              className="text-xs font-medium tracking-widest uppercase text-[#1F3A36] mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact &amp; Adres
            </h3>
            <ul className="space-y-2 text-sm text-[#1F3A36]/80 font-light list-none p-0 m-0">
              <li>BedrijvigeBij Kamer: A103 Lagendijk 3 1541 KA Koog aan de Zaan</li>
            </ul>
          </div>

          {/* Col 3: placeholder (Openingstijden) */}
          <div />

          {/* Col 4: Informatie */}
          <div>
            <h3
              className="text-xs font-medium tracking-widest uppercase text-[#1F3A36] mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Informatie
            </h3>
            <nav aria-label="Footer Navigatie">
              <ul className="space-y-3 text-sm text-[#1F3A36]/80 font-light list-none p-0 m-0">
                <li>
                  <a href="/klachten" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5 -ml-1 block w-fit">
                    Klachten &amp; Behandelingen
                  </a>
                </li>
                <li>
                  <a href="/werkwijze" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5 -ml-1 block w-fit">
                    Werkwijze &amp; Tarieven
                  </a>
                </li>
                <li>
                  <a href="/vergoedingen" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5 -ml-1 block w-fit">
                    Vergoedingen Zorgverzekeraar
                  </a>
                </li>
                <li>
                  <a href="/over-ons" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5 -ml-1 block w-fit">
                    Over Sam de Vries
                  </a>
                </li>
                <li>
                  <a href="/veelgestelde-vragen" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5 -ml-1 block w-fit">
                    Veelgestelde Vragen (FAQ)
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1F3A36]/20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-[#1F3A36]/70 font-light text-center lg:text-left">
            <p>© 2026 Acupunctuur Zaandam. Alle rechten voorbehouden.</p>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#1F3A36]/30" />
            <p>KVK: 12345678</p>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#1F3A36]/30" />
            <p>BTW: NL123456789B01</p>
          </div>

          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-[#1F3A36]/70 font-light list-none p-0 m-0">
            <li>
              <a href="/privacyverklaring" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5">
                Privacyverklaring
              </a>
            </li>
            <li>
              <a href="/algemene-voorwaarden" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5">
                Algemene Voorwaarden
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
