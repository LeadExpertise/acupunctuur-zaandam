import { ImageResponse } from "next/og";

export const alt = "Acupunctuur Zaandam — Praktijk Sam de Vries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Root Open Graph image — 1200×630 fallback for every page that does not
 * provide its own. Rendered on the edge via @vercel/og.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1F3A36 0%, #4A6559 100%)",
          color: "#FAF8F3",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D4B88A",
            marginBottom: 30,
          }}
        >
          Acupunctuur Zaandam
        </div>
        <div
          style={{
            width: 60,
            height: 2,
            background: "#D4B88A",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 88,
            lineHeight: 1.1,
            textAlign: "center",
            maxWidth: 1000,
            marginBottom: 36,
          }}
        >
          Erkende Praktijk voor Pijn, Stress &amp; Herstel
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(250, 248, 243, 0.85)",
            textAlign: "center",
            maxWidth: 850,
          }}
        >
          Sam de Vries — NVA-geregistreerd acupuncturist
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 50,
            fontSize: 22,
            color: "rgba(250, 248, 243, 0.6)",
            letterSpacing: 2,
          }}
        >
          acupunctuurzaandam.nl
        </div>
      </div>
    ),
    { ...size }
  );
}
