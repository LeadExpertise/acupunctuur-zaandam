const stappen = [
  {
    nummer: "01",
    titel: "Intakegesprek",
    omschrijving:
      "We beginnen met een uitgebreid gesprek over uw klachten, leefstijl en gezondheidsgeschiedenis. Dit geeft mij een volledig beeld van uw situatie.",
  },
  {
    nummer: "02",
    titel: "Persoonlijk plan",
    omschrijving:
      "Op basis van de intake stel ik een behandelplan op dat aansluit bij uw specifieke klachten en doelen. Geen standaardaanpak, maar maatwerk.",
  },
  {
    nummer: "03",
    titel: "Behandeling",
    omschrijving:
      "De acupunctuurbehandeling zelf duurt 45–60 minuten. U ligt ontspannen terwijl de naalden werken. De meeste mensen ervaren dit als diep ontspannend.",
  },
  {
    nummer: "04",
    titel: "Evaluatie & vervolg",
    omschrijving:
      "Na elke behandeling evalueren we het effect en stemmen het plan bij waar nodig. Transparantie en openheid staan centraal in mijn aanpak.",
  },
];

export default function Werkwijze() {
  return (
    <section id="werkwijze" className="bg-sage-900 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-flex items-center gap-2 text-sage-300 text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <span className="block w-6 h-px bg-sage-500" />
            Hoe het werkt
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
            Van eerste contact<br />tot herstel
          </h2>
          <p className="mt-4 text-sage-300 leading-relaxed">
            Een helder en persoonlijk traject — zodat u precies weet wat u kunt verwachten.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stappen.map((stap, index) => (
            <div key={stap.nummer} className="relative">
              {/* Connector line */}
              {index < stappen.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px border-t border-dashed border-sage-700" />
              )}

              <div className="relative">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage-800 border border-sage-700 mb-6">
                  <span className="font-serif text-gold-400 text-xl font-bold">{stap.nummer}</span>
                </div>

                <h3 className="font-serif text-xl text-white mb-3">{stap.titel}</h3>
                <p className="text-sage-300 text-sm leading-relaxed">{stap.omschrijving}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 pt-12 border-t border-sage-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white font-serif text-xl lg:text-2xl">
            Klaar om de eerste stap te zetten?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-7 py-4 rounded-full font-medium hover:bg-gold-600 active:scale-95 transition-all duration-200 whitespace-nowrap"
          >
            Plan uw intake
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
