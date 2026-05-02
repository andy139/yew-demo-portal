import Link from "next/link";

export const metadata = {
  title: "For channel partners | Yew",
  description:
    "FAPS reps, hardware resellers, and white-label opportunities for vertical-payments software.",
};

const blocks = [
  {
    label: "Reseller economics",
    title: "Built around the FAPS book.",
    body:
      "Yew is reseller-friendly by design. Bring us your FAPS book, we plug into the same merchant accounts, and shop owners keep their existing relationships. Splits are negotiated per partner. not buried under three layers of platform fees.",
  },
  {
    label: "White-label hooks",
    title: "Your brand on the front, our stack underneath.",
    body:
      "The cashier console, customer-facing display, and reconciliation reports all support partner-branded skinning. We&apos;re not trying to be a consumer brand. we&apos;re a counter-side payments stack other people can stand in front of.",
  },
  {
    label: "Processor-agnostic",
    title: "Year-0 FAPS. Year-2 Finix-graduation is a config flip.",
    body:
      "Yew is processor-agnostic at the architecture level. We start on FAPS because that&apos;s where the volume is. but graduating to Finix at scale is a config flip, not a rebuild. That&apos;s deliberate hedging against any single processor's reputational tail.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">For channel partners</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        We don&apos;t want to <em className="italic text-[color:var(--secondary)]">replace</em> your relationships. We want to <em className="italic text-[color:var(--secondary)]">deepen</em> them.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        Yew is a counter-side software product wrapped around FAPS Interchange-Plus pricing. If you&apos;re a FAPS rep or a hardware reseller serving independent auto repair, we&apos;d like to talk.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-4">
        {blocks.map((b) => (
          <div key={b.label} className="rounded-2xl border border-[color:var(--rule)] bg-white p-7">
            <p className="label mb-4">{b.label}</p>
            <p className="font-display text-2xl mb-4 leading-snug">{b.title}</p>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="label mb-4">Why this works</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Software keeps the merchant. <em className="italic text-[color:var(--secondary)]">You keep the residual.</em>
          </h2>
          <p className="text-[color:var(--muted)] mt-6">
            Standalone payments products lose merchants the moment somebody else underprices them. Software-led payments are sticky. and the residual is yours for as long as the shop runs Yew.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-7">
          <p className="label mb-4">Talking points</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><span className="text-[color:var(--secondary)]">·</span><span>Counter-side cashier console. not another tablet POS</span></li>
            <li className="flex gap-3"><span className="text-[color:var(--secondary)]">·</span><span>Multi-bay terminal coverage on a single LAN gateway</span></li>
            <li className="flex gap-3"><span className="text-[color:var(--secondary)]">·</span><span>FAPS resold today; Finix graduation at ~50 shops</span></li>
            <li className="flex gap-3"><span className="text-[color:var(--secondary)]">·</span><span>POSLink semi-integration · SAQ-P2PE scope</span></li>
            <li className="flex gap-3"><span className="text-[color:var(--secondary)]">·</span><span>Live in production with a paying shop, San Francisco</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/talk?audience=partner" className="btn-primary">Become a partner →</Link>
        <Link href="/the-software" className="btn-secondary">See what merchants get</Link>
      </div>
    </div>
  );
}
