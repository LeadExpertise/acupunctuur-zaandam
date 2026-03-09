export default function Reviews() {
  return (
    <section aria-labelledby="reviews-titel" className="py-32 bg-[#FAF8F3]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

          {/* Review 1 */}
          <div
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col h-full hover:shadow-md transition-shadow duration-300"
            style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-base font-medium">M</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Marieke V.</p>
                  <p className="text-xs text-gray-500 mt-0.5">2 reviews</p>
                </div>
              </div>
              <iconify-icon icon="logos:google-icon" className="text-xl mt-1" />
            </div>
            <div className="flex items-center gap-0.5 mb-3">
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <span className="text-xs text-gray-500 ml-2">3 maanden geleden</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed flex-grow">
              Na maanden rondlopen met aanhoudende stress en spanningshoofdpijn, bracht Sam direct verlichting. Zijn rustige, observerende aanpak wekt direct vertrouwen. Een verademing in een gejaagde wereld.
            </p>
          </div>

          {/* Review 2 */}
          <div
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col h-full hover:shadow-md transition-shadow duration-300"
            style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#34a853] text-white flex items-center justify-center text-base font-medium">J</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Koen L.</p>
                  <p className="text-xs text-gray-500 mt-0.5">Google Review</p>
                </div>
              </div>
              <iconify-icon icon="logos:google-icon" className="text-xl mt-1" />
            </div>
            <div className="flex items-center gap-0.5 mb-3">
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <span className="text-xs text-gray-500 ml-2">Een maand geleden</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed flex-grow">
              In de voorbereiding op mijn eerste marathon kwam een oude enkelblessure meer opspelen.
              Drie behandeling ben ik ondergaan in drie weken en het had meteen al een enorm merkbaar effect na de eerste behandeling. Ik kon probleemloos verder gaan trainen voor de marathon en deze heb ik uiteindelijk met plezier en zonder pijn uitgelopen.
            </p>
          </div>

          {/* Review 3 */}
          <div
            className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm relative flex flex-col h-full hover:shadow-md transition-shadow duration-300"
            style={{ fontFamily: "'Roboto', system-ui, sans-serif" }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#ea4335] text-white flex items-center justify-center text-base font-medium">L</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Lisa K.</p>
                  <p className="text-xs text-gray-500 mt-0.5">Lokaal gids · 12 reviews</p>
                </div>
              </div>
              <iconify-icon icon="logos:google-icon" className="text-xl mt-1" />
            </div>
            <div className="flex items-center gap-0.5 mb-3">
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <iconify-icon icon="ic:round-star" className="text-[#fbbc04] text-base" />
              <span className="text-xs text-gray-500 ml-2">5 maanden geleden</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed flex-grow">
              Wat een fijne, veilige plek. Sam luistert écht naar de signalen van je lichaam in plaats van alleen symptomen te bestrijden. Mijn overgangsklachten zijn aanzienlijk afgenomen.
            </p>
          </div>

        </div>

        <div className="flex flex-col text-center mt-20 items-center">
          <p className="text-sm text-[#1F3A36]/80 font-light mb-6 max-w-lg">
            Om de hoogste kwaliteit en persoonlijke aandacht te garanderen, nemen wij momenteel slechts een beperkt aantal nieuwe intakes per maand aan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#ervaringen"
              className="inline-flex items-center justify-center gap-2 hover:bg-[#4A6559] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F3A36] focus-visible:ring-offset-2 sm:w-auto text-sm font-medium text-[#FAF8F3] bg-[#1F3A36] w-full rounded-sm pt-3.5 pr-8 pb-3.5 pl-8"
            >
              Lees alle ervaringen
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
