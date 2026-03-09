export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-titel"
      className="bg-[#F2EDE3] border-[#1F3A36]/10 border-t pt-24 pb-12"
      id="contact"
    >
      <h2 id="footer-titel" className="sr-only">Voettekst en contactinformatie</h2>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

          {/* Brand column */}
          <div className="md:col-span-2 pr-8">
            <a
              href="#"
              aria-label="Home"
              className="text-2xl font-normal tracking-tighter text-[#1F3A36] block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm w-fit"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              AZ.
            </a>
            <p className="text-sm text-[#1F3A36]/80 font-light max-w-sm leading-relaxed mb-8">
              Acupunctuur Zaandam – Sam de Vries.<br />
              Een kalme ruimte voor natuurlijke genezing, geworteld in eeuwenoude wijsheid en gericht op duurzame balans.
            </p>
          </div>

          {/* Praktijk column */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase text-[#1F3A36] mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Praktijk
            </h3>
            <ul className="space-y-4 text-sm text-[#1F3A36]/80 font-light list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#4A6559]">
                  <iconify-icon icon="solar:map-point-linear" aria-hidden="true" className="text-lg" stroke-width="1.5" />
                </span>
                Ruststraat 12,{" "}<br />
                1506 AA Zaandam
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#4A6559]">
                  <iconify-icon icon="solar:phone-linear" aria-hidden="true" className="text-lg" stroke-width="1.5" />
                </span>
                <a
                  href="tel:0751234567"
                  className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm pt-0.5 pr-1 pb-0.5 pl-1"
                >
                  075 - 123 45 67
                </a>
              </li>
            </ul>
          </div>

          {/* Informatie column */}
          <div>
            <h3
              className="text-xs font-semibold tracking-widest uppercase text-[#1F3A36] mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Informatie
            </h3>
            <ul className="space-y-4 text-sm text-[#1F3A36]/80 font-light list-none p-0 m-0">
              <li>
                <a href="#" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5 block w-fit">
                  Vergoedingen 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4A6559] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm px-1 py-0.5 block w-fit">
                  Werkwijze &amp; Tarieven
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1F3A36]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#1F3A36]/70 font-light">
            © 2024 Acupunctuur Zaandam. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4 text-[#1F3A36]/70">
            <a
              href="#"
              aria-label="Bezoek onze Instagram pagina"
              className="hover:text-[#4A6559] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] rounded-sm p-1"
            >
              <iconify-icon icon="solar:camera-linear" aria-hidden="true" className="text-xl" stroke-width="1.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
