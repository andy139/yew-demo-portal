"use client";

import Link from "next/link";
import InView from "./InView";

const cards = [
  {
    href: "/shops",
    eyebrow: "Family auto shops",
    title: "Software that fits the way your shop actually works.",
    body: "Drop-in for FAPS-eligible shops. Charge from any bay. Settle next day. No reader rental. Optional ShopMonkey integration.",
    cta: "How it fits",
  },
  {
    href: "/partners",
    eyebrow: "Channel partners",
    title: "A software product to bring to your book.",
    body: "FAPS reps and hardware resellers. Splits negotiable, deal-reg honored. yew. is processor-agnostic by design.",
    cta: "Reseller economics",
  },
  {
    href: "/investors",
    eyebrow: "Investors",
    title: "Family auto shops, finally on modern software.",
    body: "Roughly 250,000 independent shops in the US, most family-run, most on a decade-old stack. Toast did this for restaurants.",
    cta: "The math",
  },
];

export default function AudienceCards() {
  return (
    <section className="zone-warm">
      <InView className="max-w-6xl mx-auto px-6 section">
        {(audIn) => (
          <>
            <div className="section-head">
              <div>
                <span className="label">Who yew. is for</span>
                <h2 className="section-h2">
                  Family-run shops, the partners who serve them, the investors who back them.
                </h2>
              </div>
              <p className="section-meta">Three doors. Same shop. Pick the one that fits.</p>
            </div>
            <div className="audience-grid">
              {cards.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className={`aud-card ${audIn ? "is-in" : ""}`}
                >
                  <span className="aud-eye">{c.eyebrow}</span>
                  <p className="aud-title">{c.title}</p>
                  <p className="aud-body">{c.body}</p>
                  <span className="aud-arrow">
                    {c.cta} <span className="arrow">→</span>
                  </span>
                  <span className="underline-draw" />
                </Link>
              ))}
            </div>
          </>
        )}
      </InView>
    </section>
  );
}
