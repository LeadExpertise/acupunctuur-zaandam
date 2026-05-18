const reviews = [
  {
    name: "Koen Lindeman",
    initial: "K",
    bg: "#1a73e8",
    meta: "Google Review",
    timeAgo: "Een maand geleden",
    text: "In de voorbereiding op mijn eerste marathon kwam een oude enkelblessure meer opspelen. Drie behandelingen in drie weken en het had meteen al een enorm merkbaar effect. Ik kon probleemloos doortrainen en heb de marathon met plezier en zonder pijn uitgelopen. Een aanrader!",
  },
  {
    name: "Irene de Vries",
    initial: "I",
    bg: "#ea4335",
    meta: "Google Review",
    timeAgo: "2 maanden geleden",
    text: "Prima behandeld. Ik ben belast met een chronische kwaal en ben met een behandeling per drie weken goed geholpen.",
  },
  {
    name: "Guntug Yardimci",
    initial: "G",
    bg: "#34a853",
    meta: "Google Review",
    timeAgo: "3 maanden geleden",
    text: "Ik had nooit eerder acupunctuur geprobeerd. Ik had last van vermoeidheidsklachten en stress. Sam luistert heel goed alvorens hij een behandeling toepast. Door hem ben ik heel snel opgeknapt!",
  },
  {
    name: "Jasper Nederhoff",
    initial: "J",
    bg: "#fbbc04",
    meta: "Google Review",
    timeAgo: "4 maanden geleden",
    text: "Fijne ervaring, open gesprekken, veilige setting en een resultaat meer dan ik had verwacht! Ben heel erg blij met Sam, zijn werk en passie.",
  },
  {
    name: "Olga Steffhaan",
    initial: "O",
    bg: "#673ab7",
    meta: "Google Review",
    timeAgo: "5 maanden geleden",
    text: "Ik kwam vorige week heel slecht lopend en met heel veel pijn bij Sam binnen. Na de behandeling stond ik op van de behandeltafel en kon ik tot mijn grote verbazing rechtop en met redelijk weinig pijn lopen.",
  },
];

export default function Reviews() {
  return (
    <section
      id="ervaringen"
      aria-labelledby="reviews-titel"
      className="py-32 bg-[#FAF8F3]"
    >
      <div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">

        <div className="mb-20 md:text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#F2EDE3] border border-[#1F3A36]/5 mb-6">
            <iconify-icon icon="solar:star-bold" className="text-[#8A6B3D] text-sm" stroke-width="1.5" />
            <iconify-icon icon="solar:star-bold" className="text-[#8A6B3D] text-sm" stroke-width="1.5" />
            <iconify-icon icon="solar:star-bold" className="text-[#8A6B3D] text-sm" stroke-width="1.5" />
            <iconify-icon icon="solar:star-bold" className="text-[#8A6B3D] text-sm" stroke-width="1.5" />
            <iconify-icon icon="solar:star-bold" className="text-[#8A6B3D] text-sm" stroke-width="1.5" />
            <span className="text-xs font-medium text-[#1F3A36] ml-2 tracking-widest uppercase">5.0/5 op Google</span>
          </div>
          <h2
            id="reviews-titel"
            className="text-4xl md:text-5xl font-normal tracking-tight text-[#1F3A36] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ervaringen uit de praktijk
          </h2>
          <p className="md:mx-auto leading-relaxed text-base font-light text-[#1F3A36]/80 max-w-2xl">
            Niets spreekt meer voor zich dan de verhalen van degenen die u voorgingen. Ontdek hoe eerdere cliënten de stap naar herstel hebben ervaren en hun natuurlijke balans hervonden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col h-full hover:shadow-md transition-shadow duration-300"
              style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 shrink-0 rounded-full text-white flex items-center justify-center text-base font-medium"
                    style={{ backgroundColor: r.bg }}
                  >
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{r.meta}</p>
                  </div>
                </div>
                <iconify-icon icon="logos:google-icon" className="text-xl mt-1" aria-label="Google" />
              </div>
              <div className="flex items-center gap-0.5 mb-3" aria-label="5 van 5 sterren">
                <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
                <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
                <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
                <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
                <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
                <span className="text-xs text-gray-500 ml-2">{r.timeAgo}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed flex-grow">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col text-center mt-20 items-center">
          <p className="text-sm text-[#1F3A36]/80 font-light mb-6 max-w-lg">
            Om de hoogste kwaliteit en persoonlijke aandacht te garanderen, nemen wij momenteel slechts een beperkt aantal nieuwe intakes per maand aan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 hover:bg-[#4A6559] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 sm:w-auto text-sm font-medium text-[#FAF8F3] bg-[#1F3A36] w-full rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
            >
              Plan een afspraak
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-transparent border border-[#1F3A36]/30 text-[#1F3A36] text-sm font-medium hover:bg-[#F2EDE3] hover:border-[#1F3A36]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              Veelgestelde vragen
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
