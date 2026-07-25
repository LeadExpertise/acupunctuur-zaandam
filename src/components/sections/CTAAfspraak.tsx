import BookingWidget from "@/components/BookingWidget";

export default function CTAAfspraak() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-titel"
      className="overflow-hidden text-center bg-[#1F3A36] pt-40 pr-6 pb-40 pl-6 relative scroll-mt-28"
    >
      <div className="relative z-20 w-full max-w-6xl mx-auto text-left">

        {/* Radial gradient background effect */}
        <div className="absolute w-[200vw] h-[200vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A6559]/30 via-transparent to-transparent opacity-80 pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: headline & text */}
          <div className="flex flex-col items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#8A6B3D] mb-8"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="m9 16 2 2 4-4" />
            </svg>

            <h2
              id="cta-titel"
              className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Een afspraak maken is simpel
            </h2>
            <p className="leading-relaxed text-base font-light text-[#FAF8F3]/90 max-w-lg mb-10">
              Plan direct uw consult via Whatsapp of via de planner hiernaast. Kies een datum en tijd die u het beste uitkomt. Heeft u vragen? Stuur ons gerust een bericht.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/31657998330"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-white rounded-sm pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                WhatsApp ons
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 border border-[#FAF8F3]/30 hover:bg-[#FAF8F3]/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F3] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1F3A36] text-sm font-medium text-[#FAF8F3] rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                Veelgestelde vragen
              </a>
            </div>
          </div>

          {/* Right: booking planner */}
          <BookingWidget id="cta" autoLoad="visible" />

        </div>
      </div>
    </section>
  );
}
