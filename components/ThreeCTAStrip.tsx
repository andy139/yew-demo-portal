import Link from "next/link";

const ctas = [
  {
    href: "/talk?audience=shop",
    title: "Pilot your shop",
    sub: "Drop-in setup. No reader rental.",
    stat: "30 min",
    statLabel: "to first sale",
  },
  {
    href: "/talk?audience=partner",
    title: "Become a partner",
    sub: "FAPS reps and hardware resellers.",
    stat: "0",
    statLabel: "deal-reg conflicts",
  },
  {
    href: "/talk?audience=investor",
    title: "Set up a call",
    sub: "Vertical SaaS with payments built in.",
    stat: "6%",
    statLabel: "Toast at IPO",
  },
];

export default function ThreeCTAStrip() {
  return (
    <section className="three-cta">
      <div className="max-w-6xl mx-auto px-6" style={{ padding: "72px 24px" }}>
        <span className="label">Three doors</span>
        <h2 className="section-h2" style={{ marginTop: 12, maxWidth: "20ch" }}>
          Pick the one that fits.
        </h2>
        <div className="cta-grid">
          {ctas.map((c) => (
            <Link key={c.href} href={c.href} className="cta-card">
              <div className="step-row">
                <span className="label">Step in</span>
              </div>
              <p className="cta-title">{c.title}</p>
              <p className="cta-sub">{c.sub}</p>
              <div className="cta-stat">
                <span className="cta-stat-num"><em>{c.stat}</em></span>
                <span className="cta-stat-lbl">{c.statLabel}</span>
              </div>
              <span className="corner-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
