type GoogleMapProps = {
  className?: string;
  heightClassName?: string;
  title?: string;
};

const MAP_SRC =
  "https://maps.google.com/maps?q=Acupunctuur+Zaandam,+Lagendijk+3,+1541+KA+Koog+aan+de+Zaan&hl=nl&z=16&output=embed";

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
