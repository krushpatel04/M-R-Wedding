"use client";

/* ── Seating data ───────────────────────────────────────────────────────── */

const tables = [
  {
    number: 1,
    guests: [],
  },
  {
    number: 2,
    guests: [],
  },
  {
    number: 3,
    guests: [],
  },
];

/* ── Table card ─────────────────────────────────────────────────────────── */

function TableCard({ table }: { table: (typeof tables)[0] }) {
  return (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto py-8">
      {/* Circle */}
      <div
        className="flex items-center justify-center rounded-full mb-6"
        style={{
          width: 140,
          height: 140,
          border: "2px solid var(--color-accent)",
          background: "var(--color-background)",
        }}
      >
        <span
          style={{
            color: "var(--color-header)",
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
          }}
        >
          Table {table.number}
        </span>
      </div>

      {/* Guest list */}
      <ul className="w-full text-center space-y-2">
        {table.guests.map((name, i) => (
          <li
            key={i}
            className="text-sm"
            style={{ color: "var(--color-secondary)" }}
          >
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
    <div style={{ background: "var(--color-background)", minHeight: "100vh" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="py-16 flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="text-4xl sm:text-6xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-header)" }}
        >
          Welcome to the Reception of
        </h1>
        <h2
          className="text-3xl sm:text-5xl font-bold leading-tight mb-6"
          style={{ color: "var(--color-header)" }}
        >
          Mona and Rushil
        </h2>
        <p
          className="text-sm tracking-widest uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          June 27th, 2026
        </p>
      </div>

      {/* ── Seating chart ────────────────────────────────────────────────── */}
      <div
        className="px-6 pb-24"
        style={{ borderTop: "1px solid var(--color-accent)" }}
      >
        <h3
          className="text-center text-lg tracking-widest uppercase mt-10 mb-6"
          style={{ color: "var(--color-accent)" }}
        >
          Seating Chart
        </h3>

        <div className="flex flex-col items-center divide-y"
          style={{ borderColor: "rgba(159,36,54,0.1)" }}
        >
          {tables.map((table) => (
            <TableCard key={table.number} table={table} />
          ))}
        </div>
      </div>

    </div>
  );
}
