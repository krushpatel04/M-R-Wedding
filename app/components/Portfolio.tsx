"use client";

const HEADER = "#9f2436";
const ACCENT = "#D4890A";
const BG = "#f0eee9";

export default function Portfolio() {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "4rem 1.5rem 2rem" }}>
        <h1 style={{ color: HEADER, fontSize: "clamp(1.8rem, 6vw, 3.5rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.5rem" }}>
          Welcome to the Reception of
        </h1>
        <h2 style={{ color: HEADER, fontSize: "clamp(1.5rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem" }}>
          Mona and Rushil
        </h2>
        <p style={{ color: ACCENT, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          June 27th, 2026
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${ACCENT}`, margin: "0 1.5rem" }} />

      {/* Seating chart PDF goes here */}

    </div>
  );
}
