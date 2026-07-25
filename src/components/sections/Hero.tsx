import BookingWidget from "@/components/BookingWidget";

export default function Hero() {
  return (
    <header className="md:pt-44 md:pb-24 overflow-hidden flex flex-col min-h-[90vh] pt-36 pb-20 relative justify-center">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
      />

      <div className="z-10 w-full max-w-6xl mx-auto pr-6 pl-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text content */}
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <a
              href="tel:+31657998330"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1F3A36] hover:text-[#8A6B3D] transition-colors duration-300 border border-[#1F3A36]/20 rounded-full px-5 py-2 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#8A6B3D]"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Bel direct: +31 6 57 99 83 30
            </a>

            <div className="flex flex-col items-center lg:items-start justify-center mb-8">
              <span
                className="uppercase text-xs font-medium text-[#8A6B3D] tracking-widest mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Acupunctuur Zaandam
              </span>
              <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
            </div>

            <h1
              className="md:text-6xl leading-[1.1] text-5xl font-normal text-[#1F3A36] tracking-tight mb-8"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Uw klachten verlichten met acupunctuur?
            </h1>

            <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-xl mx-auto lg:mx-0 mb-12">
              Acupunctuur Zaandam kan mogelijk helpen met lichamelijke klachten, stress of vermoeidheid waarbij lichaam en geest uit balans zijn geraakt.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-[#1F3A36] text-[#FAF8F3] text-sm font-normal hover:bg-[#4A6559] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3]"
              >
                Maak een afspraak
              </a>
              <a
                href="/tarieven-vergoeding"
                className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#F2EDE3] hover:border-[#1F3A36]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F3] text-sm font-normal text-[#1F3A36] bg-transparent w-full border-[#1F3A36]/30 border rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
              >
                Tarieven &amp; vergoeding
              </a>
            </div>
          </div>

          {/* Right: booking planner (desktop) */}
          <div className="hidden lg:block w-full">
            <BookingWidget id="hero" autoLoad="idle" />
          </div>

        </div>
      </div>
    </header>
  );
}
