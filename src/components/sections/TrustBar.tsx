export default function TrustBar() {
  return (
    <section
      aria-labelledby="trust-titel"
      className="border-y bg-[#F2EDE3] border-[#1F3A36]/10 pt-16 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2
          className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10"
          style={{ fontFamily: "Inter, sans-serif" }}
          id="trust-titel"
        >
          Aangesloten Beroepsverenigingen en zorgverzekeraars
        </h2>

        <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full gap-x-10 gap-y-10 items-center justify-center">

          {/* NVA */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp"
            alt="NVA - Nederlandse Vereniging voor Acupunctuur"
            className="md:h-12 w-auto h-10 object-cover bg-center"
          />

          {/* VGZ */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png"
            alt="VGZ"
            className="md:h-10 bg-center w-auto h-8 object-cover"
          />

          {/* TCMA */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg"
            alt="TCMA - Traditional Chinese Medicine Academy"
            className="md:h-12 w-auto h-10 object-contain"
          />

          {/* Zilveren Kruis */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png"
            alt="Zilveren Kruis"
            className="md:h-12 w-auto h-10 object-cover bg-center"
          />

          {/* CZ */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png"
            alt="CZ"
            className="md:h-10 bg-center w-auto h-8 object-cover"
          />

          {/* Menzis */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9d7f8ec-453f-43d5-b95b-c8e49400962d_original.gif"
            alt="Menzis"
            className="md:h-10 w-auto h-8 object-cover bg-center"
          />

        </div>
      </div>
    </section>
  );
}
