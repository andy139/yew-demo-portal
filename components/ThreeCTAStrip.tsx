import Link from "next/link";

const ctas = [
  {
    href: "/talk?audience=shop",
    title: "Pilot your shop",
    sub: "Drop-in setup. No reader rental.",
    icon: "wrench",
  },
  {
    href: "/talk?audience=partner",
    title: "Become a partner",
    sub: "FAPS reps and hardware resellers.",
    icon: "handshake",
  },
  {
    href: "/talk?audience=investor",
    title: "Set up a call",
    sub: "Vertical SaaS with payments built in.",
    icon: "chart",
  },
];

function Icon({ name }: { name: string }) {
  if (name === "wrench") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6a4 4 0 0 0-.6 0Z" />
      </svg>
    );
  }
  if (name === "handshake") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 17l3 3 7-7-3-3" />
        <path d="M3 10l7-7 3 3-7 7z" />
        <path d="M9 13l3 3" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <rect x="5" y="13" width="3" height="6" />
      <rect x="11" y="9" width="3" height="10" />
      <rect x="17" y="5" width="3" height="14" />
    </svg>
  );
}

export default function ThreeCTAStrip() {
  return (
    <section className="border-t border-[color:var(--rule)] bg-[color:var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="label mb-6">Three doors</p>
        <h2 className="font-display text-3xl md:text-4xl mb-10 max-w-2xl">
          Pick the one that fits.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ctas.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative p-6 rounded-2xl border border-[color:var(--rule)] hover:border-[color:var(--text)] transition-colors bg-white/40"
            >
              <div className="flex items-center gap-3 mb-4 text-[color:var(--secondary)] group-hover:text-[color:var(--text)] transition-colors">
                <Icon name={c.icon} />
                <span className="label !text-[color:var(--secondary)]">Step in</span>
              </div>
              <p className="font-display text-2xl mb-2">{c.title}</p>
              <p className="text-sm text-[color:var(--muted)]">{c.sub}</p>
              <span className="absolute top-6 right-6 text-[color:var(--muted)] group-hover:text-[color:var(--text)] group-hover:translate-x-1 transition-all">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
