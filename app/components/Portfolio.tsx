"use client";

import { useEffect, useRef } from "react";

/* ── Event data ─────────────────────────────────────────────────────────── */

type WeddingEvent = {
  title: string;
  subtitle: string;
  image: string | null;
  content: React.ReactNode;
};

const events: WeddingEvent[] = [
  {
    title: "Baraat & Swaagat",
    subtitle: "The Groom's Procession",
    image: "/Baraat.jpeg",
    content: (
      <p>
        Rushil and his wedding brigade will dance their way to the wedding,
        showing off their best moves. The groom&apos;s family will be welcomed
        by Monali&apos;s mother.
      </p>
    ),
  },
  {
    title: "Ganesh Puja",
    subtitle: "Prayers to Lord Ganesha",
    image: "/GaneshPuja.jpeg",
    content: (
      <p>
        The wedding ceremony begins with a prayer in honor of Lord Ganesha, the
        remover of all obstacles. Lord Ganesha is always worshiped before the
        start of a new chapter in one&apos;s life.
      </p>
    ),
  },
  {
    title: "Var Puja",
    subtitle: "The Honoring of the Groom",
    image: "/VarPuja.jpeg",
    content: (
      <>
        <p className="mb-3">
          Rushil is welcomed to the mandap by Monali&apos;s parents.
        </p>
        <p className="mb-3">
          Monali&apos;s bridesmaids will try to steal Rushil&apos;s shoes once
          he is seated in the mandap. His shoes will be held as ransom, and
          Rushil will have to dig deep in his pockets to get them back!
        </p>
        <p style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
          Paise de do, Joote le lo!
        </p>
      </>
    ),
  },
  {
    title: "Kanya Aagman",
    subtitle: "The Bride's Entry",
    image: "/Kanya.jpeg",
    content: (
      <p>Monali walks down the aisle to the mandap, where her forever awaits.</p>
    ),
  },
  {
    title: "Kanyadaan & Hast Melap",
    subtitle: "Union of the Couple",
    image: "/Kanyadaan.jpeg",
    content: (
      <p>
        The bride represents a form of the goddess Laxmi, and the groom that of
        Lord Narayana. Monali&apos;s parents are assisting in the union of the
        two &apos;Gods&apos; by placing their daughter&apos;s hand into
        Rushil&apos;s, while everyone bears witness. Rushil&apos;s scarf is
        then tied to Monali&apos;s veil signifying the forever union of their
        souls.
      </p>
    ),
  },
  {
    title: "Agni Puja & Mangal Pheras",
    subtitle: "Circling the Sacred Fire",
    image: "/AgniPuja.jpeg",
    content: (
      <p>
        Monali and Rushil walk around the fire (agni) four times, symbolizing
        the core aspirations of married life — Dharma (Duty), Artha
        (Prosperity), Kama (Family) and Moksha (Salvation). As they are making
        their last round around the fire, Monali and Rushil rush towards their
        seats. It is said that the first to sit down will be the ruler of the
        household.
      </p>
    ),
  },
  {
    title: "Mangalsutra & Sindoor",
    subtitle: "Symbols of Marriage",
    image: "/Sindoor.jpeg",
    content: (
      <>
        <p className="mb-3">
          Rushil puts a mangalsutra (a sacred necklace) around Monali&apos;s
          neck, and sindoor (red vermillion powder) on her hair parting.
        </p>
        <p>
          They exchange rings which are a symbol of their love, everlasting
          commitment, and respect towards each other.
        </p>
      </>
    ),
  },
  {
    title: "Kansar",
    subtitle: "The Couple's First Meal Together",
    image: "/Kansar.jpeg",
    content: (
      <p>
        Monali and Rushil feed each other sweets, symbolizing they will share
        everything they have in life.
      </p>
    ),
  },
  {
    title: "Akhand Saubhagyavati",
    subtitle: "Blessings from Married Women",
    image: "/AkhandSaubhagyavati.jpeg",
    content: (
      <p>
        Married women from Monali&apos;s family chant good wishes to her and
        bless her with a married life filled with happiness and love.
      </p>
    ),
  },
  {
    title: "Saptapadi",
    subtitle: "The Seven Vows of Marital Bliss",
    image: null,
    content: (
      <>
        <p className="mb-4">
          Monali and Rushil take seven sacred steps and recite the following
          vows to one another:
        </p>
        <ol className="space-y-2">
          {[
            "We will share the responsibilities of married life.",
            "We will fill our hearts with strength and courage to accomplish all the needs of our life.",
            "We will prosper and share our worldly goods and work for the prosperity of our family.",
            "We will cherish each other in sickness and in health, in happiness and in sorrow.",
            "We will raise a strong and virtuous family.",
            "We will fill our hearts with great joy, peace, happiness, and spiritual values.",
            "We will remain lifelong partners in matrimony.",
          ].map((vow, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span style={{ color: "var(--color-accent)", fontWeight: 600 }} className="shrink-0">
                {i + 1}.
              </span>
              {vow}
            </li>
          ))}
        </ol>
      </>
    ),
  },
  {
    title: "Aashirvaad & Vidai",
    subtitle: "Blessings to the Couple & the Bride's Farewell",
    image: "/Vidai.jpeg",
    content: (
      <p>
        The Priest declares Rushil and Monali as husband and wife. He asks
        family and friends to join him in showering the couple with blessings
        and good wishes. During the final ritual of the ceremony,
        Monali&apos;s family showers her with well wishes in a farewell filled
        with joy.
      </p>
    ),
  },
];

/* ── Event card content ─────────────────────────────────────────────────── */

function EventContent({ event, center = false }: { event: WeddingEvent; center?: boolean }) {
  return (
    <div style={{ textAlign: center ? "center" : "inherit" }}>
      <p
        className="text-xs tracking-widest uppercase mb-2"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
      >
        {event.subtitle}
      </p>
      <h2
        className="text-2xl sm:text-3xl font-bold mb-3 leading-tight"
        style={{ color: "var(--color-header)" }}
      >
        {event.title}
      </h2>
      <div className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
        {event.content}
      </div>
    </div>
  );
}

/* ── Timeline dot ───────────────────────────────────────────────────────── */

function TimelineDot() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        background: "var(--color-background)",
        padding: "10px",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "var(--color-accent)",
          boxShadow: "0 0 0 2px var(--color-accent)",
        }}
      />
    </div>
  );
}

/* ── Timeline event row ─────────────────────────────────────────────────── */

function TimelineEvent({ event, index }: { event: WeddingEvent; index: number }) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    [desktopRef, mobileRef].forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) { el.classList.add("is-visible"); obs.disconnect(); }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Desktop layout */}
      <div
        className="hidden md:grid items-center py-10"
        style={{ gridTemplateColumns: "1fr 40px 1fr", gap: "0 1rem" }}
      >
        <div className="flex justify-end pr-8">
          {isLeft && (
            <div ref={desktopRef} className="card-animate max-w-sm text-right" data-side="left">
              <EventContent event={event} />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <TimelineDot />
        </div>
        <div className="pl-8">
          {!isLeft && (
            <div ref={desktopRef} className="card-animate max-w-sm" data-side="right">
              <EventContent event={event} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout — dot on left, text to the right */}
      <div className="md:hidden flex items-start py-6" style={{ paddingLeft: "20px" }}>
        <div className="flex flex-col items-center shrink-0" style={{ marginTop: "6px" }}>
          <TimelineDot />
        </div>
        <div ref={mobileRef} className="card-animate ml-5 flex-1" data-side="right">
          <EventContent event={event} />
        </div>
      </div>
    </>
  );
}

/* ── Main page ──────────────────────────────────────────────────────────── */

export default function Portfolio() {
  return (
    <div style={{ background: "var(--color-background)" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="py-24 md:min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="text-5xl sm:text-7xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-header)" }}
        >
          Welcome to the Wedding of
        </h1>
        <h2
          className="text-4xl sm:text-6xl font-bold leading-tight mb-6"
          style={{ color: "var(--color-header)" }}
        >
          Monali and Rushil
        </h2>
        <p
          className="text-sm tracking-widest uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          June 27th, 2026
        </p>
      </div>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <div className="relative max-w-4xl mx-auto md:px-4 pb-32">

        {/* Vertical center line — desktop */}
        <div
          className="hidden md:block absolute top-0 bottom-0"
          style={{ left: "50%", width: "1px", background: "var(--color-accent)", transform: "translateX(-50%)" }}
        />

        {/* Vertical left line — mobile */}
        <div
          className="md:hidden absolute top-0 bottom-0"
          style={{ left: "36px", width: "1px", background: "var(--color-accent)" }}
        />

        {events.map((event, i) => (
          <TimelineEvent key={i} event={event} index={i} />
        ))}
      </div>

    </div>
  );
}
