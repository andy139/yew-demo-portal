import Link from "next/link";

const cards = [
  {
    href: "/shops",
    eyebrow: "Family auto shops",
    title: "Software that fits the way your shop actually works.",
    body: "Drop-in for FAPS-eligible shops. Charge from any bay. Settle next day. No reader rental. Optional ShopMonkey integration.",
  },
  {
    href: "/partners",
    eyebrow: "Channel partners",
    title: "A software product to bring to your book.",
    body: "FAPS reps and hardware resellers. Splits negotiable, deal-reg honored. Yew is processor-agnostic by design.",
  },
  {
    href: "/investors",
    eyebrow: "Investors",
    title: "Family auto shops, finally on modern software.",
    body: "Roughly 250,000 independent shops in the US, most family-run, most on a decade-old stack. Toast did this for restaurants.",
  },
];

export default function AudienceCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between mb-10 gap-6">
        <div>
          <p className="label mb-3">Who Yew is for</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl">
            Family-run shops, the partners who serve them, the investors who back them.
          </h2>
        </div>
        <p className="hidden md:block text-sm text-[color:var(--muted)] max-w-xs">
          Three doors. Same shop. Pick the one that fits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group p-7 rounded-2xl border border-[color:var(--rule)] hover:border-[color:var(--text)] bg-white transition-all hover:-translate-y-0.5"
          >
            <p className="label mb-4">{c.eyebrow}</p>
            <p className="font-display text-2xl mb-4 leading-snug">{c.title}</p>
            <p className="text-sm text-[color:var(--muted)] mb-6">{c.body}</p>
            <span className="text-sm font-medium text-[color:var(--text)] inline-flex items-center gap-1">
              Read more
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
