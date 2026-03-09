const contactInfo = [
  {
    label: "Telefoon",
    waarde: "075 123 45 67",
    href: "tel:+31751234567",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    waarde: "info@acupunctuur-zaandam.nl",
    href: "mailto:info@acupunctuur-zaandam.nl",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Adres",
    waarde: "Dam 1, 1506 Zaandam",
    href: "https://maps.google.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const openingstijden = [
  { dag: "Maandag", tijd: "09:00 – 18:00" },
  { dag: "Dinsdag", tijd: "09:00 – 18:00" },
  { dag: "Woensdag", tijd: "09:00 – 18:00" },
  { dag: "Donderdag", tijd: "09:00 – 20:00" },
  { dag: "Vrijdag", tijd: "09:00 – 17:00" },
  { dag: "Zaterdag", tijd: "10:00 – 14:00" },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-sage-800 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: CTA text */}
          <div>
            <span className="inline-flex items-center gap-2 text-sage-300 text-xs font-semibold uppercase tracking-[0.15em] mb-6">
              <span className="block w-6 h-px bg-sage-500" />
              Contact
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight mb-6">
              Begin vandaag<br />
              <em className="text-gold-400 not-italic">met herstel</em>
            </h2>
            <p className="text-sage-300 leading-relaxed mb-10 max-w-md">
              Heeft u een vraag of wilt u een afspraak plannen? Neem gerust contact
              op — ik reageer binnen 24 uur. Uw eerste intake duurt 75 minuten en
              is vrijblijvend.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-sage-700 text-sage-200 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-600 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-sage-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-gold-400 transition-colors">{item.waarde}</p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="mailto:info@acupunctuur-zaandam.nl"
              className="inline-flex items-center gap-2 bg-gold-500 text-white px-7 py-4 rounded-full font-medium hover:bg-gold-600 active:scale-95 transition-all duration-200"
            >
              Stuur een bericht
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right: Opening hours + insurance */}
          <div className="space-y-6">
            {/* Opening hours */}
            <div className="bg-sage-900 rounded-2xl p-7">
              <h3 className="font-serif text-xl text-white mb-5">Openingstijden</h3>
              <ul className="space-y-3">
                {openingstijden.map((item) => (
                  <li key={item.dag} className="flex justify-between items-center">
                    <span className="text-sage-300 text-sm">{item.dag}</span>
                    <span className="text-white text-sm font-medium">{item.tijd}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-sage-700">
                <p className="text-sage-400 text-xs">
                  Op vrijdag en zaterdag zijn er beperkte plekken beschikbaar.
                  Bel of mail voor beschikbaarheid.
                </p>
              </div>
            </div>

            {/* Insurance info */}
            <div className="bg-sage-900 rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sage-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-white text-lg mb-2">Vergoeding zorgverzekeraar</h3>
                  <p className="text-sage-300 text-sm leading-relaxed">
                    Mijn praktijk is erkend door alle grote zorgverzekeraars.
                    Behandelingen worden vaak (gedeeltelijk) vergoed vanuit uw
                    aanvullende verzekering. Raadpleeg uw polis voor de
                    exacte voorwaarden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
