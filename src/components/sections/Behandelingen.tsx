const behandelingen = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    titel: "Pijn & Spanning",
    omschrijving:
      "Nek-, rug- en gewrichtspijn, hoofdpijn en migraine. Acupunctuur vermindert pijn en herstelt de vrije doorstroom van energie.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titel: "Stress & Burnout",
    omschrijving:
      "Overbelasting, emotionele uitputting en burnout. We brengen uw zenuwstelsel terug in balans en herstellen uw veerkracht.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    titel: "Slaapproblemen",
    omschrijving:
      "Insomnia, onrustig slapen en vermoeidheid. Acupunctuur reguleert uw slaapritme en bevordert een diepe, herstellende rust.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titel: "Sportblessures",
    omschrijving:
      "Spierblessures, overbelasting en herstel na sport. We versnellen het herstelproces en verbeteren uw sportprestaties.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    titel: "Vrouwengezondheid",
    omschrijving:
      "Menstruatieproblemen, vruchtbaarheid, zwangerschap en overgang. Zorgvuldige ondersteuning voor elke fase in het leven.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titel: "Allergie & Hooikoorts",
    omschrijving:
      "Seizoensgebonden klachten, hooikoorts en astma. Versterk uw weerstand en verminder overgevoeligheidsreacties.",
  },
];

export default function Behandelingen() {
  return (
    <section id="behandelingen" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sage-600 text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <span className="block w-6 h-px bg-sage-400" />
            Wat ik behandel
            <span className="block w-6 h-px bg-sage-400" />
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight">
            Behandelingen op maat
          </h2>
          <p className="mt-4 text-stone-500 leading-relaxed">
            Elk lichaam is uniek. Ik stel altijd een persoonlijk behandelplan op,
            afgestemd op uw specifieke klachten en doelen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {behandelingen.map((item) => (
            <div
              key={item.titel}
              className="group p-7 rounded-2xl border border-stone-100 hover:border-sage-200 hover:shadow-lg hover:shadow-sage-100 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-700 flex items-center justify-center mb-5 group-hover:bg-sage-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{item.titel}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{item.omschrijving}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-stone-400 text-sm mt-12">
          Staat uw klacht er niet bij?{" "}
          <a href="#contact" className="text-sage-600 underline underline-offset-2 hover:text-sage-800">
            Neem contact op
          </a>{" "}
          — ik denk graag met u mee.
        </p>
      </div>
    </section>
  );
}
