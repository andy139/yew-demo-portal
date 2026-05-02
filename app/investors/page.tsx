import Link from "next/link";

export const metadata = {
  title: "For investors — Yew",
  description:
    "Vertical SaaS plus payments. ~250k US auto repair shops, near-zero modern-stack penetration.",
};

const stats = [
  {
    n: "~250k",
    label: "Independent auto repair shops, US",
    note: "Vertical TAM. Not counting dealerships, fleet ops, or chains.",
  },
  {
    n: "6%",
    label: "Toast at IPO — restaurant penetration",
    note: "Auto repair has near-zero modern-stack penetration today. Comparable curve, earlier.",
  },
  {
    n: "60/40",
    label: "Software-to-fintech revenue split (target)",
    note: "Toast at IPO benchmark. Software protects the moat, payments funds the growth.",
  },
];

const ladder = [
  {
    yr: "Year 0",
    title: "FAPS Interchange-Plus, resold",
    body: "We resell FAPS IC+ to every shop we sign. Counter-side software is the wedge; payments is the per-merchant economics.",
  },
  {
    yr: "Year 2",
    title: "Finix graduation",
    body: "At ~50 shops, the economics flip — Finix becomes the cheaper acquirer. Yew was built processor-agnostic for exactly this transition.",
  },
  {
    yr: "Year 3+",
    title: "ServiceTitan-comparable take rate",
    body: "ServiceTitan is at ~1.17% blended payments take rate. Auto repair tickets are smaller, so we model 1.8 to 2.0% blended at maturity.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">For investors</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        Vertical SaaS plus payments — <em className="italic text-[color:var(--secondary)]">in a category nobody&apos;s digitized.</em>
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        Independent auto repair runs on legacy POS systems, paper repair orders, and 2.9%+30¢ flat-rate processors. Yew is a modern counter-side software stack with payments built in — wedged in via FAPS Interchange-Plus, graduating to Finix at scale.
      </p>

      {/* Hero stats */}
      <div className="mt-16 grid md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-[color:var(--rule)] bg-white p-7">
            <p className="font-display text-5xl md:text-6xl mb-3">{s.n}</p>
            <p className="font-medium mb-2">{s.label}</p>
            <p className="text-sm text-[color:var(--muted)]">{s.note}</p>
          </div>
        ))}
      </div>

      {/* Take-rate ladder */}
      <div className="mt-20">
        <p className="label mb-4">Take-rate ladder</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-3xl mb-10">
          Three payments postures. <em className="italic text-[color:var(--secondary)]">One software product.</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {ladder.map((l) => (
            <div key={l.yr} className="rounded-2xl border border-[color:var(--rule)] bg-white p-7">
              <p className="label mb-4">{l.yr}</p>
              <p className="font-display text-2xl mb-3">{l.title}</p>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wedge customer */}
      <div className="mt-20 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <p className="label mb-4">Wedge customer</p>
        <p className="font-display text-3xl md:text-4xl leading-snug max-w-3xl">
          A&amp;C Auto Clinic — San Francisco. <em className="italic text-[color:var(--secondary)]">Live since 2026.</em>
        </p>
        <p className="text-[color:var(--muted)] mt-4 max-w-2xl">
          Andy&apos;s dad runs A&amp;C — it&apos;s our customer zero. We measure savings against a real prior-processor statement, not a hypothetical. The /savings page calculator is the same math Andy showed A&amp;C the day they switched.
        </p>
      </div>

      {/* Channel CAC */}
      <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="label mb-4">Channel CAC</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            FAPS reps as a referral motion — <em className="italic text-[color:var(--secondary)]">CAC under SaaS norms.</em>
          </h2>
        </div>
        <div className="text-[color:var(--muted)] space-y-4">
          <p>
            Independent auto repair shops are not on Twitter. They&apos;re on the phone with their FAPS rep. We treat the reseller channel as a primary distribution motion — software is the gift the rep brings their merchant.
          </p>
          <p>
            That trims CAC well under SaaS norms and gives Yew a relationship-first beachhead in a category nobody else has cracked.
          </p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-3">
        <Link href="/talk?audience=investor" className="btn-primary">Talk to Andy →</Link>
        <Link href="/demo" className="btn-secondary">See the live demo</Link>
      </div>
    </div>
  );
}
