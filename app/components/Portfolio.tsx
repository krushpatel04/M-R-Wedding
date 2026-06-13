"use client";

function Section({
  subtitle,
  title,
  children,
}: {
  subtitle: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
      className="w-full px-6 py-20"
    >
      <div className="max-w-2xl mx-auto">
        <p
          style={{ color: "var(--muted)" }}
          className="text-xs font-mono tracking-widest uppercase mb-3"
        >
          {subtitle}
        </p>
        <h2
          style={{ color: "var(--fg)" }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <h1
            style={{ color: "var(--fg)" }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight mb-12"
          >
            Rushil and Mona Wedding
          </h1>

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

          <p
            style={{ color: "var(--body)" }}
            className="text-base leading-relaxed mb-3"
          >
            Welcome to Rushil and Mona&apos;s Wedding.
          </p>
          <p
            style={{ color: "var(--accent)" }}
            className="text-sm font-semibold tracking-wide"
          >
            June 27th
          </p>
        </div>
      </div>

      {/* ── Baraat & Swaagat ─────────────────────────────────────────────── */}
      <Section subtitle="The Groom's Procession" title="Baraat & Swaagat">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          Rushil and his wedding brigade will dance their way to the wedding,
          showing off their best moves. The groom&apos;s family will be
          welcomed by Mona&apos;s mother.
        </p>
      </Section>

      {/* ── Ganesh Puja ──────────────────────────────────────────────────── */}
      <Section subtitle="Prayers to Lord Ganesha" title="Ganesh Puja">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          The wedding ceremony begins with a prayer in honor of Lord Ganesha,
          the remover of all obstacles. Lord Ganesha is always worshiped
          before the start of a new chapter in one&apos;s life.
        </p>
      </Section>

      {/* ── Var Puja ─────────────────────────────────────────────────────── */}
      <Section subtitle="The Honoring of the Groom" title="Var Puja">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg mb-4">
          Rushil is welcomed to the mandap by Mona&apos;s parents.
        </p>
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg mb-6">
          Mona&apos;s bridesmaids will try to steal Rushil&apos;s shoes once
          he is seated in the mandap. His shoes will be held as ransom, and
          Rushil will have to dig deep in his pockets to get them back!
        </p>
        <p style={{ color: "var(--accent)" }} className="text-sm font-semibold italic">
          Paise de do, Joote le lo!
        </p>
      </Section>

      {/* ── Kanya Aagman ─────────────────────────────────────────────────── */}
      <Section subtitle="The Bride's Entry" title="Kanya Aagman">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          Mona walks down the aisle to the mandap, where her forever awaits.
        </p>
      </Section>

    </div>
  );
}
