export default function Diensten() {
  return (
    <section aria-labelledby="diensten-titel" className="bg-[#1F3A36] pt-32 pb-32 relative">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#4A6559]/40 via-transparent to-transparent" />
      </div>

      <div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
        <div className="mb-16 md:text-center">
          <h2
            className="md:text-5xl text-4xl font-normal text-[#FAF8F3] tracking-tight mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
            id="diensten-titel"
          >
            Ontdek onze werkwijze en welke klachten we behandelen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Kaart 1 */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#FAF8F3]/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none flex flex-col h-full group focus-within:ring-2 focus-within:ring-[#FAF8F3] focus-within:ring-offset-4 focus-within:ring-offset-[#1F3A36] bg-[#FAF8F3]/5">
            <div className="relative h-60 w-full overflow-hidden shrink-0 border-b border-[#FAF8F3]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1624716346720-6c96dfd07807?w=800&q=80"
                alt="Weergave van acupunctuurnaalden voor pijnbestrijding"
                className="transition-transform duration-1000 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FAF8F3]/10 text-[#FAF8F3] mb-6 group-hover:bg-[#4A6559] group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-all duration-500">
                <iconify-icon icon="solar:heart-pulse-linear" aria-hidden="true" className="text-2xl" stroke-width="1.5" />
              </div>
              <h3
                className="text-2xl font-normal text-[#FAF8F3] tracking-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Deze klachten behandelen we
              </h3>
              <p className="leading-relaxed flex-grow text-sm font-light text-[#FAF8F3]/90 mb-8">
                Ontdek bij welke klachten acupunctuur kan helpen, zoals pijnklachten, stress, vermoeidheid en meer.
              </p>
              <a
                href="/klachten"
                className="inline-flex items-center justify-center hover:bg-[#4A6559] hover:text-[#FAF8F3] transition-all duration-300 hover:border-[#FAF8F3]/20 focus:outline-none text-sm font-medium text-[#1F3A36] bg-[#FAF8F3] w-full border-transparent border rounded-xl mt-auto pt-3.5 pr-6 pb-3.5 pl-6"
              >
                Ontdek alle klachten
              </a>
            </div>
          </div>

          {/* Kaart 2 */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#FAF8F3]/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none flex flex-col h-full group focus-within:ring-2 focus-within:ring-[#FAF8F3] focus-within:ring-offset-4 focus-within:ring-offset-[#1F3A36] bg-[#FAF8F3]/5">
            <div className="relative h-60 w-full overflow-hidden shrink-0 border-b border-[#FAF8F3]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e7cbcd5-0deb-405a-aebf-1ac47d0b5e49_800w.webp"
                alt="Behandelaar die de werkwijze van acupunctuur toepast"
                className="transition-transform duration-1000 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 bg-center w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-10">
              <div className="flex group-hover:bg-[#4A6559] group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-all duration-500 text-[#FAF8F3] bg-[#FAF8F3]/10 w-12 h-12 rounded-full mb-6 items-center justify-center">
                <iconify-icon icon="solar:flow-linear" aria-hidden="true" className="text-2xl" stroke-width="1.5" />
              </div>
              <h3
                className="text-2xl font-normal text-[#FAF8F3] tracking-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Zo werkt een behandeling
              </h3>
              <p className="text-sm text-[#FAF8F3]/90 font-light leading-relaxed mb-8 flex-grow">
                Lees hoe een behandeling verloopt en hoe acupunctuur helpt om het lichaam weer in balans te brengen.
              </p>
              <a
                href="/werkwijze"
                className="inline-flex items-center justify-center hover:bg-[#4A6559] hover:text-[#FAF8F3] transition-all duration-300 hover:border-[#FAF8F3]/20 focus:outline-none text-sm font-medium text-[#1F3A36] bg-[#FAF8F3] w-full border-transparent border rounded-xl mt-auto pt-3.5 pr-6 pb-3.5 pl-6"
              >
                Lees de werkwijze
              </a>
            </div>
          </div>

          {/* Kaart 3 */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#FAF8F3]/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none flex flex-col h-full group focus-within:ring-2 focus-within:ring-[#FAF8F3] focus-within:ring-offset-4 focus-within:ring-offset-[#1F3A36] bg-[#FAF8F3]/5">
            <div className="relative h-60 w-full overflow-hidden shrink-0 border-b border-[#FAF8F3]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acdfc0b-7c17-44c6-9162-cb7b3309a4f2_800w.png"
                alt="Portret van acupuncturist Sam de Vries in de praktijk"
                className="transition-transform duration-1000 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 w-full h-full object-cover bg-center"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-10">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FAF8F3]/10 text-[#FAF8F3] mb-6 group-hover:bg-[#4A6559] group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-all duration-500">
                <iconify-icon icon="solar:user-rounded-linear" aria-hidden="true" className="text-2xl" stroke-width="1.5" />
              </div>
              <h3
                className="text-2xl font-normal text-[#FAF8F3] tracking-tight mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Wie is Sam
              </h3>
              <p className="text-sm text-[#FAF8F3]/90 font-light leading-relaxed mb-8 flex-grow">
                Leer meer over Sam de Vries, zijn achtergrond als psycholoog en zijn visie op Chinese geneeskunde.
              </p>
              <a
                href="/over-sam"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-[#FAF8F3] text-[#1F3A36] text-sm font-medium hover:bg-[#4A6559] hover:text-[#FAF8F3] transition-all duration-300 mt-auto border border-transparent hover:border-[#FAF8F3]/20 focus:outline-none"
              >
                Meer over Sam
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
