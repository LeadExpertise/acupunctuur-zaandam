export default function Hero() {
  return (
    <header className="md:pt-56 md:pb-32 overflow-hidden flex flex-col min-h-[90vh] pt-40 pb-24 relative items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#F2EDE3] rounded-full blur-[120px] -z-10 opacity-70"
      />

      <div className="z-10 text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative">
        <div className="inline-flex flex-col items-center justify-center mb-8">
          <span
            className="uppercase text-xs font-medium text-[#8A6B3D] tracking-widest mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Acupunctuur Zaandam
          </span>
          <div aria-hidden="true" className="h-px w-8 bg-[#8A6B3D]/60" />
        </div>

        <h1
          className="md:text-7xl leading-[1.1] text-5xl font-normal text-[#1F3A36] tracking-tight mb-8"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Uw klachten verlichten met acupunctuur?
        </h1>

        <p className="md:text-lg leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-xl mr-auto mb-12 ml-auto">
          Acupunctuur Zaandam kan mogelijk helpen met lichamelijke klachten, stress of vermoeidheid waarbij lichaam en geest uit balans zijn geraakt.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
    </header>
  );
}
