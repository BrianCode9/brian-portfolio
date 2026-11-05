import { ImageResponse } from "next/og";

// Link preview card for LinkedIn, Discord, iMessage, and so on. Next renders
// it to a PNG at build time and wires up the og:image tags automatically.

export const alt = "Brian Ngo - ECE @ WVU, interested in FPGAs and ASIC design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEAL = "#193e52";
const ORANGE = "#ff5733";

// One square wave across the bottom, echoing the hero's clock signals
const PERIOD = 120;
const HIGH = 10;
const LOW = 70;
const wave =
  `M 0 ${LOW} ` +
  Array.from({ length: size.width / PERIOD + 1 }, (_, i) => {
    const x = i * PERIOD;
    const mid = x + PERIOD / 2;
    return `L ${x} ${HIGH} L ${mid} ${HIGH} L ${mid} ${LOW} L ${x + PERIOD} ${LOW}`;
  }).join(" ");

// Uses the built-in sans font: the OG renderer fails to parse the Mozilla
// Headline file, so the display font is left out of the preview card.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: "0.3em",
          color: "#4b5563",
          textTransform: "uppercase",
        }}
      >
        Hello, I&apos;m
      </div>
      <div
        style={{
          fontSize: 150,
          fontWeight: 700,
          color: TEAL,
          lineHeight: 1.1,
          marginTop: 8,
        }}
      >
        Brian Ngo.
      </div>
      <div style={{ width: 160, height: 8, background: ORANGE }} />
      <div style={{ fontSize: 40, color: "black", marginTop: 32 }}>
        ECE @ WVU
      </div>
      <div style={{ fontSize: 32, color: "#4b5563", marginTop: 4 }}>
        Interested in FPGAs and ASIC design
      </div>

      <svg
        width={size.width}
        height={80}
        viewBox={`0 0 ${size.width} 80`}
        style={{ position: "absolute", left: 0, bottom: 24, opacity: 0.35 }}
      >
        <path d={wave} stroke={ORANGE} strokeWidth={4} fill="none" />
      </svg>
    </div>,
    size
  );
}
