const ervaringen = [
  {
    naam: "Marieke V.",
    behandeling: "Burnout & stress",
    sterren: 5,
    tekst:
      "Na maanden van uitputting en stress voelde ik me na slechts vier behandelingen al een stuk beter. De aanpak is heel persoonlijk en zorgzaam. Ik kan de praktijk van harte aanbevelen aan iedereen die zoekt naar herstel.",
  },
  {
    naam: "Joop de B.",
    behandeling: "Chronische rugpijn",
    sterren: 5,
    tekst:
      "Jarenlang last van rugpijn — reguliere artsen konden me niet verder helpen. Dankzij de acupunctuurbehandelingen in Zaandam heb ik mijn leven weer terug. De kennis en betrokkenheid zijn indrukwekkend.",
  },
  {
    naam: "Sandra K.",
    behandeling: "Slaapproblemen",
    sterren: 5,
    tekst:
      "Ik sliep jarenlang slecht en was overdag altijd moe. Na een behandeltraject slaap ik eindelijk diep en word ik uitgerust wakker. De behandelingen zijn aangenaam en ik voel me altijd welkom.",
  },
];

function Sterren({ aantal }: { aantal: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < aantal ? "text-gold-500" : "text-stone-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Ervaringen() {
  return (
    <section id="ervaringen" className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sage-600 text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <span className="block w-6 h-px bg-sage-400" />
            Ervaringen
            <span className="block w-6 h-px bg-sage-400" />
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 leading-tight">
            Wat patiënten zeggen
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Sterren aantal={5} />
            <span className="text-stone-500 text-sm">
              Gemiddeld 9.4/10 op basis van 200+ beoordelingen
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ervaringen.map((ervaring) => (
            <div
              key={ervaring.naam}
              className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 flex flex-col"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-sage-200 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-stone-600 leading-relaxed text-sm flex-1 italic">
                &ldquo;{ervaring.tekst}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{ervaring.naam}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{ervaring.behandeling}</p>
                </div>
                <Sterren aantal={ervaring.sterren} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
