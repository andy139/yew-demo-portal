"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Placeholder URLs — Andy will swap real Tally / Calendly links later.
const LINKS = {
  shop: {
    title: "Pilot your shop",
    sub: "Drop-in for FAPS-eligible shops. We do the migration. You keep the counter running.",
    href: "https://tally.so/r/yew-pilot",
    cta: "Open the pilot form →",
    icon: "wrench",
  },
  partner: {
    title: "Become a partner",
    sub: "FAPS reps and hardware resellers — let's talk reseller economics + white-label hooks.",
    href: "https://tally.so/r/yew-partner",
    cta: "Open the partner form →",
    icon: "handshake",
  },
  investor: {
    title: "Talk to investors",
    sub: "Vertical SaaS plus payments. 30-minute walkthrough with Andy.",
    href: "https://calendly.com/yew/investor",
    cta: "Book on Andy's calendar →",
    icon: "chart",
  },
} as const;

type Audience = keyof typeof LINKS;

function Icon({ name }: { name: string }) {
  if (name === "wrench") return <span aria-hidden>·</span>;
  if (name === "handshake") return <span aria-hidden>·</span>;
  return <span aria-hidden>·</span>;
}

export default function BookingButtons() {
  const params = useSearchParams();
  const initial = (params.get("audience") as Audience) || null;
  const [highlight, setHighlight] = useState<Audience | null>(initial);

  useEffect(() => {
    if (initial) {
      // Scroll the highlighted card into view on load
      const el = document.getElementById(`book-${initial}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [initial]);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {(Object.keys(LINKS) as Audience[]).map((aud) => {
        const l = LINKS[aud];
        const active = highlight === aud;
        return (
          <a
            id={`book-${aud}`}
            key={aud}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHighlight(aud)}
            className={`group p-7 rounded-2xl border bg-white transition-all ${
              active
                ? "border-[color:var(--text)] shadow-[0_8px_24px_-12px_rgba(26,26,26,0.18)]"
                : "border-[color:var(--rule)] hover:border-[color:var(--text)]"
            }`}
          >
            <p className="label mb-4">
              <Icon name={l.icon} /> {aud}
            </p>
            <p className="font-display text-2xl mb-3">{l.title}</p>
            <p className="text-sm text-[color:var(--muted)] mb-6">{l.sub}</p>
            <span className="text-sm font-medium text-[color:var(--text)] inline-flex items-center gap-1">
              {l.cta}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
