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
            className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight mb-4"
          >
            Welcome to the Wedding of
          </h1>
          <h2
            style={{ color: "var(--fg)" }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-12"
          >
            Rushil and Monali
          </h2>


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
          welcomed by Monali&apos;s mother.
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
          Rushil is welcomed to the mandap by Monali&apos;s parents.
        </p>
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg mb-6">
          Monali&apos;s bridesmaids will try to steal Rushil&apos;s shoes once
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
          Monali walks down the aisle to the mandap, where her forever awaits.
        </p>
      </Section>

      {/* ── Kanyadaan & Hast Melap ───────────────────────────────────────── */}
      <Section subtitle="Union of the Couple" title="Kanyadaan & Hast Melap">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          The bride represents a form of the goddess Laxmi, and the groom that
          of Lord Narayana. Monali&apos;s parents are assisting in the union of
          the two &apos;Gods&apos; by placing their daughter&apos;s hand into
          Rushil&apos;s, while everyone bears witness. Rushil&apos;s scarf is
          then tied to Monali&apos;s veil signifying the forever union of their
          souls.
        </p>
      </Section>

      {/* ── Agni Puja & Mangal Pheras ────────────────────────────────────── */}
      <Section subtitle="Circling the Sacred Fire" title="Agni Puja & Mangal Pheras">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          Monali and Rushil walk around the fire (agni) four times, symbolizing
          the core aspirations of married life — Dharma (Duty), Artha
          (Prosperity), Kama (Family) and Moksha (Salvation). As they are
          making their last round around the fire, Monali and Rushil rush towards
          their seats. It is said that the first to sit down will be the ruler
          of the household.
        </p>
      </Section>

      {/* ── Mangalsutra & Sindoor ────────────────────────────────────────── */}
      <Section subtitle="Symbols of Marriage" title="Mangalsutra & Sindoor">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg mb-4">
          Rushil puts a mangalsutra (a sacred necklace) around Monali&apos;s
          neck, and sindoor (red vermillion powder) on her hair parting.
        </p>
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          They exchange rings which are a symbol of their love, everlasting
          commitment, and respect towards each other.
        </p>
      </Section>

      {/* ── Kansar ───────────────────────────────────────────────────────── */}
      <Section subtitle="The Couple's First Meal Together" title="Kansar">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          Monali and Rushil feed each other sweets, symbolizing they will share
          everything they have in life.
        </p>
      </Section>

      {/* ── Akhand Saubhagyavati ─────────────────────────────────────────── */}
      <Section subtitle="Blessings from Married Women" title="Akhand Saubhagyavati">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          Married women from Monali&apos;s family chant good wishes to her and
          bless her with a married life filled with happiness and love.
        </p>
      </Section>

      {/* ── Saptapadi ────────────────────────────────────────────────────── */}
      <Section subtitle="The Seven Vows of Marital Bliss" title="Saptapadi">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg mb-6">
          Monali and Rushil take seven sacred steps and recite the following
          vows to one another:
        </p>
        <ol className="space-y-3 max-w-lg">
          {[
            "We will share the responsibilities of married life.",
            "We will fill our hearts with strength and courage to accomplish all the needs of our life.",
            "We will prosper and share our worldly goods and work for the prosperity of our family.",
            "We will cherish each other in sickness and in health, in happiness and in sorrow.",
            "We will raise a strong and virtuous family.",
            "We will fill our hearts with great joy, peace, happiness, and spiritual values.",
            "We will remain lifelong partners in matrimony.",
          ].map((vow, i) => (
            <li key={i} style={{ color: "var(--body)" }} className="text-sm leading-relaxed flex gap-3">
              <span style={{ color: "var(--accent)" }} className="font-semibold shrink-0">
                {i + 1}.
              </span>
              {vow}
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Aashirvaad & Vidai ───────────────────────────────────────────── */}
      <Section subtitle="Blessings to the Couple & the Bride's Farewell" title="Aashirvaad & Vidai">
        <p style={{ color: "var(--body)" }} className="text-sm leading-relaxed max-w-lg">
          The Priest declares Rushil and Monali as husband and wife. He asks
          family and friends to join him in showering the couple with blessings
          and good wishes. During the final ritual of the ceremony,
          Monali&apos;s family showers her with well wishes in a farewell
          filled with joy.
        </p>
      </Section>

    </div>
  );
}
