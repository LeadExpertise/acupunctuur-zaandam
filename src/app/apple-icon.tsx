import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon (180×180). Shown when users add the site to their iOS
 * home screen. Larger version of the favicon with the full brand name.
 */
export default function AppleIcon() {
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
          color: "#D4B88A",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 500, lineHeight: 1 }}>A</div>
        <div
          style={{
            marginTop: 14,
            fontSize: 14,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(212, 184, 138, 0.8)",
          }}
        >
          Zaandam
        </div>
      </div>
    ),
    { ...size }
  );
}
