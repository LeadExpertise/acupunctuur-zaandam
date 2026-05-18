import Image from "next/image";

const BADGES = [
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e20f36d5-fa43-45b0-80bb-6be75fbddc32_800w.webp",
    alt: "NVA Erkend Acupuncturist",
    h: "md:h-12 h-10",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31e0e290-0757-46ba-a865-f2b818683b9d_320w.png",
    alt: "VGZ Vergoeding Acupunctuur",
    h: "md:h-10 h-8",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e5dfdb-34c2-4807-8f43-9cce38479a8d_800w.jpg",
    alt: "TCMA Certificering",
    h: "md:h-12 h-10",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96bebee7-85f9-48b8-b204-1c39cdbc2b0f_320w.png",
    alt: "Zilveren Kruis Vergoeding",
    h: "md:h-12 h-10",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/666c0a54-7103-40a7-a6c5-b75d8c8ff1a6_320w.png",
    alt: "CZ Vergoeding Acupunctuur",
    h: "md:h-10 h-8",
  },
];

/**
 * Shared "Erkend & Vergoed" badge strip used on detail pages (klachten +
 * behandelingen). Replaces inline `<img>` blocks with Next/Image so the badges
 * are served as AVIF/WebP and lazy-loaded.
 */
export default function TrustBadges() {
  return (
    <section
      aria-label="Beroepsverenigingen en verzekeraars"
      className="border-b bg-[#FAF8F3] border-[#1F3A36]/10 py-16"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2
          className="uppercase text-xs font-semibold text-[#1F3A36]/50 tracking-widest text-center mb-10"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Erkend door verenigingen en vergoed door verzekeraars
        </h2>
        <div className="flex flex-wrap gap-10 md:gap-16 transition-all duration-300 mix-blend-multiply w-full justify-center items-center">
          {BADGES.map((b) => (
            <Image
              key={b.src}
              src={b.src}
              alt={b.alt}
              width={160}
              height={48}
              loading="lazy"
              className={`${b.h} w-auto object-contain`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
