type GoogleMapProps = {
  className?: string;
  heightClassName?: string;
  title?: string;
};

// Plain address + exact coordinates — including the business name made Google
// resolve to the wrong location (Zaandam-Oost) on some pages.
const MAP_SRC =
  "https://maps.google.com/maps?q=Lagendijk+3,+1541+KA+Koog+aan+de+Zaan&ll=52.465186,4.810891&hl=nl&z=16&output=embed";

export default function GoogleMap({
  className = "",
  heightClassName = "h-72 md:h-80",
  title = "Kaart: Acupunctuur Zaandam — Lagendijk 3, Koog aan de Zaan",
}: GoogleMapProps) {
  return (
    <div
      className={`overflow-hidden rounded-sm border border-[#1F3A36]/10 ${className}`}
    >
      <iframe
        title={title}
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={`w-full block border-0 ${heightClassName}`}
      />
    </div>
  );
}
