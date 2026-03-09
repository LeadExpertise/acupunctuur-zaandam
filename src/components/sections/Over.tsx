const kwalificaties = [
  "ZHONG gecertificeerd acupuncturist",
  "BAG-geregistreerd (zorgverzekeraar erkend)",
  "Gediplomeerd in Traditionele Chinese Geneeskunde",
  "Gespecialiseerd in westerse en oosterse integratieve zorg",
  "Lid van de Nederlandse Vereniging voor Acupunctuur (NVA)",
];

export default function Over() {
  return (
    <section id="over" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo placeholder */}
          <div className="relative order-2 lg:order-1">
            {/* Background shape */}
            <div className="absolute -inset-4 rounded-3xl bg-sage-50" />

            {/* Photo placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl bg-sage-100 overflow-hidden flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-sage-400">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-sm font-medium">Foto acupuncturist</p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-sage-200/60 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-white rounded-2xl shadow-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-stone-900">9.4 / 10</p>
                  <p className="text-xs text-stone-500">gemiddelde beoordeling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-sage-600 text-xs font-semibold uppercase tracking-[0.15em] mb-6">
              <span className="block w-6 h-px bg-sage-400" />
              Over mij
            </span>

            <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight mb-6">
              Persoonlijke zorg,<br />
              <em className="text-sage-700 not-italic">vanuit het hart</em>
            </h2>

            <div className="space-y-4 text-stone-500 leading-relaxed">
              <p>
                Ik ben acupuncturist in Zaandam met meer dan 15 jaar ervaring in de
                Traditionele Chinese Geneeskunde. Mijn doel is om u te helpen uw
                gezondheid te herstellen en te behouden — op een holistische,
                persoonlijke manier.
              </p>
              <p>
                Ik geloof dat elk mens uniek is. Daarom werk ik nooit met standaard
                protocollen, maar altijd met een behandelplan dat volledig op u is
                afgestemd — uw klachten, uw lichaam, uw leven.
              </p>
              <p>
                Mijn praktijk is erkend door alle grote zorgverzekeraars. U kunt uw
                behandelingen vaak (gedeeltelijk) vergoed krijgen via uw
                aanvullende verzekering.
              </p>
            </div>

            {/* Qualifications */}
            <ul className="mt-8 space-y-3">
              {kwalificaties.map((kwalificatie) => (
                <li key={kwalificatie} className="flex items-start gap-3 text-sm text-stone-600">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {kwalificatie}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 text-sage-700 font-medium hover:text-sage-900 transition-colors group"
            >
              Maak kennis
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
