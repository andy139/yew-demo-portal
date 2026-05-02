"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Each button opens a fresh email to Andy with an audience-tagged subject
// so leads route immediately. Real Tally/Calendly forms can replace these
// later by swapping the href; the rest stays the same.
const LINKS = {
  shop: {
    title: "Pilot your shop",
    sub: "Drop-in for FAPS-eligible family auto shops. We do the migration. You keep the counter running.",
    href: "mailto:andy@yewsoftware.com?subject=Pilot%20inquiry%20%E2%80%94%20%5Bshop%20name%5D&body=Shop%20name%3A%0AAddress%3A%0AMonthly%20card%20volume%3A%0ACurrent%20processor%3A%0ABest%20time%20to%20talk%3A%0A",
    cta: "Email about piloting",
  },
  partner: {
    title: "Become a partner",
    sub: "FAPS reps and hardware resellers, let's talk reseller economics + white-label hooks.",
    href: "mailto:andy@yewsoftware.com?subject=Partner%20inquiry%20%E2%80%94%20%5Byour%20name%5D&body=Your%20name%3A%0AYour%20company%3A%0ABook%20size%20(rough)%3A%0AAreas%20you%20cover%3A%0A",
    cta: "Email about partnering",
  },
  investor: {
    title: "Set up a call",
    sub: "Vertical SaaS with payments built in. 30-minute walkthrough of where Yew is and where it's going.",
    href: "mailto:andy@yewsoftware.com?subject=Investor%20call%20%E2%80%94%20%5Byour%20fund%5D&body=Fund%20%2F%20your%20name%3A%0AStage%20%2F%20check%20size%3A%0AAvailability%20next%20two%20weeks%3A%0A",
    cta: "Email to set up a call",
  },
} as const;

type Audience = keyof typeof LINKS;

export default function BookingButtons() {
  const params = useSearchParams();
  const initial = (params.get("audience") as Audience) || null;
  const [highlight, setHighlight] = useState<Audience | null>(initial);

  useEffect(() => {
    if (initial) {
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
            <p className="label mb-4">{aud}</p>
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
