"use client";

export default function Portfolio() {
  return (
    <div
      style={{ background: "var(--bg)", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Title */}
        <h1
          style={{ color: "var(--fg)" }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight mb-12"
        >
          Rushil and Mona Wedding
        </h1>

        {/* M&R monogram */}
        <div
          style={{
            color: "var(--accent)",
            border: "2px solid var(--accent)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: "50%",
          }}
          className="text-5xl font-extrabold tracking-tight mb-12"
        >
          M&amp;R
        </div>

        {/* Welcome text */}
        <p
          style={{ color: "var(--body)" }}
          className="text-base leading-relaxed mb-3"
        >
          Welcome to Rushil and Mona&apos;s Wedding.
        </p>

        {/* Date */}
        <p
          style={{ color: "var(--accent)" }}
          className="text-sm font-semibold tracking-wide"
        >
          June 27th
        </p>
      </div>
    </div>

      {/* ── Baraat & Swaagat ─────────────────────────────────────────────── */}
      <section
        style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
        className="w-full px-6 py-20"
      >
        <div className="max-w-2xl mx-auto">
          <p
            style={{ color: "var(--muted)" }}
            className="text-xs font-mono tracking-widest uppercase mb-3"
          >
            The Groom&apos;s Procession
          </p>
          <h2
            style={{ color: "var(--fg)" }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
          >
            Baraat &amp; Swaagat
          </h2>
          <p
            style={{ color: "var(--body)" }}
            className="text-sm leading-relaxed max-w-lg"
          >
            Rushil and his wedding brigade will dance their way to the wedding,
            showing off their best moves. The groom&apos;s family will be
            welcomed by Mona&apos;s mother.
          </p>
        </div>
      </section>
  );
}
