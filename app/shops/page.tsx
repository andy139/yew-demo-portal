import Link from "next/link";

export const metadata = {
  title: "For shop owners — Yew",
  description: "Counter-side software for independent auto repair shops on FAPS.",
};

const pains = [
  {
    quote: "Software I bought 10 years ago hasn't shipped a feature since.",
    answer:
      "Yew ships weekly. Andy reads every shop owner email. The roadmap is set by what cashiers actually run into, not what looks good in a deck.",
  },
  {
    quote: "I pay 2.9% + 30¢ to my processor and another $300/mo to my SMS.",
    answer:
      "Yew is FAPS Interchange-Plus, resold. Customer messaging — receipts, approvals, ready-for-pickup — comes built in, no extra SaaS line item.",
  },
  {
    quote: "I have to walk to the back office to charge a card.",
    answer:
      "The Yew gateway puts every PAX A80 in the shop on the network. Charge from the bay. Charge from the front counter. Charge from your phone in the parking lot.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">For shop owners</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        Built by someone who <em className="italic text-[color:var(--secondary)]">actually rang up the customer.</em>
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        Andy worked the counter at A&amp;C Auto Clinic before he wrote the first line of Yew. The software is designed for the cashier-side of the shop — receipts, refunds, batch close, customer messaging — not the wrench-side.
      </p>

      <div className="mt-16 space-y-6">
        <p className="label">Three things shop owners told us</p>
        {pains.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[color:var(--rule)] bg-white p-7 md:p-9 grid md:grid-cols-12 gap-6"
          >
            <div className="md:col-span-5">
              <p className="font-display text-2xl italic leading-snug text-[color:var(--secondary)]">
                &ldquo;{p.quote}&rdquo;
              </p>
            </div>
            <div className="md:col-span-7 text-[color:var(--muted)] leading-relaxed">
              {p.answer}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing posture */}
      <div className="mt-20 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
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
    </div>
  );
}
