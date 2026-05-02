import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "For family auto shops | yew. payments",
  description:
    "Counter-side payments and software for family-run mechanic shops. FAPS Interchange-Plus. Optional ShopMonkey integration.",
};

const pains = [
  {
    quote: "Software I bought 10 years ago hasn't shipped a feature since.",
    answer:
      "yew. ships weekly. We read every shop owner email. The roadmap is set by what cashiers actually run into, not what looks good in a deck.",
  },
  {
    quote: "I pay 2.9% + 30¢ to my processor and another $300/mo to my SMS.",
    answer:
      "yew. is FAPS Interchange-Plus, resold. Customer messaging (receipts, approvals, ready-for-pickup) comes built in, no extra SaaS line item.",
  },
  {
    quote: "I have to walk to the back office to charge a card.",
    answer:
      "The yew. gateway puts every PAX A80 in the shop on the network. Charge from the bay. Charge from the front counter. Charge from your phone in the parking lot.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">For family auto shops</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        Software that fits the way your shop actually works.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        yew. handles the front-of-house: receipts, refunds, end-of-day, customer messaging. Not the wrench-side. If you read totals off ShopMonkey, do 3% cash-discount math on a calculator, type the result into a card terminal, and reconcile by hand at the end of the night, yew. was built for that.
      </p>
      <p className="text-base text-[color:var(--muted)] mt-4 max-w-2xl">
        <Link href="/story" className="underline decoration-[color:var(--secondary)] underline-offset-2">Read where yew. started →</Link>
      </p>

      <div className="subpage-stat">
        <div className="num"><em>30 min</em></div>
        <div className="cap">
          From box to your <strong>first card sale</strong>. Drop in the PAX A80, run the gateway installer on a computer you already own, take the next customer&apos;s card. No reader rental, no IT step.
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <p className="label">Three things shop owners told us</p>
        {pains.map((p, i) => (
          <Reveal key={i} delay={i * 80} threshold={0.2}>
            <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-7 md:p-9 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5">
                <p className="font-display text-2xl italic leading-snug text-[color:var(--secondary)]">
                  &ldquo;{p.quote}&rdquo;
                </p>
              </div>
              <div className="md:col-span-7 text-[color:var(--muted)] leading-relaxed">
                {p.answer}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* In-person Bay Area demo */}
      <div className="mt-20 rounded-2xl border-2 border-[color:var(--text)] bg-[color:var(--accent)]/15 p-8 md:p-10">
        <p className="label mb-4">Bay Area shops</p>
        <p className="font-display text-3xl md:text-4xl leading-tight max-w-3xl">
          Andy will drive to your shop and run the demo on your counter.
        </p>
        <p className="text-[color:var(--text)]/80 mt-4 max-w-2xl">
          If your shop is in the Bay Area, we don&apos;t do Zoom demos. Andy shows up, plugs in a PAX A80 next to your existing setup, and walks the cashier through a live charge with a real card. You see the math, the network, the receipt, and the reconciliation, on your floor, in 45 minutes. Then you decide.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/talk?audience=shop" className="btn-primary">Book the in-shop demo →</Link>
          <Link href="/savings" className="btn-secondary">Run the calculator first</Link>
        </div>
      </div>

      <Reveal threshold={0.15}>
      {/* ShopMonkey integration */}
      <div className="mt-20 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <p className="label mb-4">ShopMonkey integration · optional</p>
        <p className="font-display text-3xl md:text-4xl leading-tight max-w-3xl">
          Already on ShopMonkey? <em className="italic text-[color:var(--secondary)]">Plug it into yew.</em>
        </p>
        <p className="text-[color:var(--muted)] mt-4 max-w-2xl">
          yew. connects to ShopMonkey over webhooks + API. We wire it up. Your recent work orders show up live in the yew. portal. Cashier picks the order, picks cash or card, fires the charge. Refunds, batch closes, and reconciliations flow back to ShopMonkey. No tab-switching. No double entry.
        </p>
        <p className="text-sm text-[color:var(--muted)] mt-4 max-w-2xl italic">
          (Shopmonkey-on-its-own works fine. The integration is for shops that want both dashboards in one place.)
        </p>
      </div>

      </Reveal>

      <Reveal threshold={0.15}>
      {/* Pricing posture */}
      <div className="mt-10 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <p className="label mb-4">Pricing</p>
        <p className="font-display text-3xl md:text-4xl leading-tight max-w-2xl">
          No headline rate. <em className="italic text-[color:var(--secondary)]">Calculator above, custom quote on your actual statement.</em>
        </p>
        <p className="text-[color:var(--muted)] mt-4 max-w-2xl">
          Send your most recent processor statement, we send back a real Interchange-Plus quote line by line. No commitments, no contracts, no termination fees.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/talk?audience=shop" className="btn-primary">Pilot your shop →</Link>
          <Link href="/savings" className="btn-secondary">Run the calculator</Link>
        </div>
      </div>
      </Reveal>
    </div>
  );
}
