import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Site favicon (32×32). Generated at the edge so no static binary is needed.
 * Displays a serif "A" on the brand green — readable at small sizes in
 * browser tabs, bookmarks and Google search results.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1F3A36",
          color: "#D4B88A",
          fontFamily: "Georgia, serif",
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: -1,
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
