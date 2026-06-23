"use client";

const HEADER = "#9f2436";
const ACCENT = "#D4890A";
const SECONDARY = "#C9A84C";
const BG = "#f0eee9";

/* ── Seating data ───────────────────────────────────────────────────────── */

const tables = Array.from({ length: 36 }, (_, i) => ({
  number: i + 1,
  guests: Array.from({ length: 10 }, (_, j) => `Name ${j + 1}`),
}));

/* ── Table card ─────────────────────────────────────────────────────────── */

function TableCard({ table }: { table: (typeof tables)[0] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 320, margin: "0 auto", padding: "2rem 1rem" }}>

      {/* Circle */}
      <div style={{
        width: 260,
        height: 260,
        borderRadius: "50%",
        border: `2px solid ${ACCENT}`,
        background: BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1.25rem",
        flexShrink: 0,
      }}>
        <span style={{ color: HEADER, fontSize: "1.6rem", fontWeight: 700 }}>
          Table {table.number}
        </span>
      </div>

      {/* Guest list */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%", textAlign: "center" }}>
        {table.guests.map((name, i) => (
          <li key={i} style={{ color: SECONDARY, fontSize: "0.9rem", padding: "0.2rem 0" }}>
            {name}
          </li>
        ))}
      </ul>

    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────────────────── */

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

      {/* Seating label */}
      <p style={{ color: ACCENT, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", margin: "2rem 0 0" }}>
        Seating Chart
      </p>

      {/* Tables */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "5rem" }}>
        {tables.map((table, i) => (
          <div key={table.number} style={{ width: "100%" }}>
            {i > 0 && <div style={{ borderTop: `1px solid rgba(212,137,10,0.2)`, margin: "0 2rem" }} />}
            <TableCard table={table} />
          </div>
        ))}
      </div>

    </div>
  );
}
