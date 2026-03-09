import Script from "next/script";

export default function CTAAfspraak() {
  return (
    <section
      aria-labelledby="cta-titel"
      className="overflow-hidden text-center bg-[#1F3A36] pt-40 pr-6 pb-40 pl-6 relative"
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
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6B3D]/30 to-[#4A6559]/30 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300" />
            <div className="relative w-full bg-[#FAF8F3] rounded-xl shadow-2xl border border-[#1F3A36]/10 overflow-hidden flex flex-col">

              {/* Branding header */}
              <div className="flex shrink-0 bg-[#F2EDE3] h-10 border-[#1F3A36]/5 border-b pr-4 pl-4 items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1F3A36]/20" />
                </div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1F3A36]/40">Online Planner</span>
                <div className="w-10" />
              </div>

              {/* Planner embed */}
              <div className="w-full bg-[#FAF8F3] min-h-[600px] flex-grow relative">
                {/* Loading spinner (shown until iframe loads) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg className="animate-spin h-8 w-8 text-[#4A6559]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>

                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/D8uouGkFZH4Alr37y5z4"
                  style={{
                    width: "100%",
                    border: "none",
                    overflow: "auto",
                    minHeight: "650px",
                    height: "100%",
                    position: "relative",
                    zIndex: 10,
                  }}
                  id="D8uouGkFZH4Alr37y5z4_1772903081790"
                  data-initial-iframe-hidden="true"
                  data-unique-id-mapped="true"
                  data-iframe-resizer-initialized="true"
                />

                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
