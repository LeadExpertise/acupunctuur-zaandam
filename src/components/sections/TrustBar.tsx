import Image from "next/image";

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
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp"
            alt="NVA - Nederlandse Vereniging voor Acupunctuur"
            width={160}
            height={48}
            loading="lazy"
            className="md:h-12 w-auto h-10 object-cover bg-center"
          />

          {/* VGZ */}
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png"
            alt="VGZ"
            width={120}
            height={40}
            loading="lazy"
            className="md:h-10 bg-center w-auto h-8 object-cover"
          />

          {/* TCMA */}
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg"
            alt="TCMA - Traditional Chinese Medicine Academy"
            width={160}
            height={48}
            loading="lazy"
            className="md:h-12 w-auto h-10 object-contain"
          />

          {/* Zilveren Kruis */}
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png"
            alt="Zilveren Kruis"
            width={160}
            height={48}
            loading="lazy"
            className="md:h-12 w-auto h-10 object-cover bg-center"
          />

          {/* CZ */}
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png"
            alt="CZ"
            width={120}
            height={40}
            loading="lazy"
            className="md:h-10 bg-center w-auto h-8 object-cover"
          />

          {/* Menzis */}
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9d7f8ec-453f-43d5-b95b-c8e49400962d_original.gif"
            alt="Menzis"
            width={120}
            height={40}
            loading="lazy"
            className="md:h-10 w-auto h-8 object-cover bg-center"
            unoptimized
          />

          {/* Overige verzekeraars */}
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[#1F3A36]/20 bg-[#FAF8F3] px-5 py-2.5 text-sm font-medium text-[#1F3A36]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="text-[#8A6B3D] font-semibold">+30</span>
            andere zorgverzekeraars
          </span>

        </div>

        <p className="text-sm font-light text-[#1F3A36]/70 text-center max-w-2xl mt-10">
          Acupunctuur wordt door vrijwel alle Nederlandse zorgverzekeraars geheel of
          gedeeltelijk vergoed vanuit de aanvullende verzekering — dus ook als uw
          verzekeraar hier niet bij staat.{" "}
          <a
            href="/tarieven-vergoeding"
            className="text-[#8A6B3D] underline underline-offset-4 hover:text-[#1F3A36] transition-colors duration-300"
          >
            Bekijk uw vergoeding
          </a>
        </p>
      </div>
    </section>
  );
}
