import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Líder Magnético | Diego Knebel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#201747",
          fontFamily: "system-ui, sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F1DAB2",
              fontWeight: 600,
            }}
          >
            ✱ Diego Knebel apresenta
          </span>
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            / Imersão presencial · Cascavel/PR · 04 e 05 jul 2026
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 144,
              fontWeight: 900,
              lineHeight: 0.95,
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Líder</span>
            <span style={{ color: "#D3451E" }}>Magnético</span>
          </div>
          <span
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              fontStyle: "italic",
              maxWidth: 900,
            }}
          >
            Comunique-se para atrair, engajar e melhorar resultados.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #D3451E",
            paddingTop: 24,
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <span>50 vagas · 2 dias · Hotel Deville</span>
          <span style={{ color: "#F1DAB2" }}>diegoknebel.com.br</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
