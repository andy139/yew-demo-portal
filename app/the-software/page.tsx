import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "The Software | yew. payments",
  description:
    "A guided tour of yew.'s cashier console, customer view, batch close, refunds, and diagnostics.",
};

const tour = [
  {
    n: "01",
    title: "Take a sale",
    sub: "Cashier console",
    body:
      "Pick a repair order. Pick a terminal. Hit charge. The selected A80 wakes up, the cardholder taps or dips, and the console flips to authorized. Most shops take their first card sale on yew. within 60 seconds of install.",
  },
  {
    n: "02",
    title: "Customer-facing display",
    sub: "Dual-screen flow",
    body:
      "The customer sees the same line items the cashier sees, on a second screen at the counter. No surprises at the bottom of the receipt. and no awkward squinting at the cashier's monitor.",
  },
  {
    n: "03",
    title: "Daily batch close",
    sub: "Reconciliation",
    body:
      "End of day, hit close batch. yew. tallies every authorization, deposits to your bank in the morning, and sends the reconciliation report straight to your accountant.",
  },
  {
    n: "04",
    title: "Refund a charge",
    sub: "One click",
    body:
      "Find the original sale, click refund, choose full or partial. The customer's card is credited, the books are squared, and the next day's settlement reflects it. No phone call to the processor.",
  },
  {
    n: "05",
    title: "Tip-adjust post-signature",
    sub: "Service-industry-grade",
    body:
      "Customer signed for $100, then handed a tip in cash? Adjust the authorization before settlement. Most processors charge a fee for this; yew. does not.",
  },
  {
    n: "06",
    title: "Diagnostics drawer",
    sub: "When something goes sideways",
    body:
      "Sim status, terminal latency, recent frames. The same drawer we use to debug a wedged terminal in production. Every shop owner gets it. No black-box payments.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">The software</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-4xl">
        Six steps. A full day on the floor.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        A guided tour. every screen a cashier touches between opening the doors and closing the batch.
      </p>

      <div className="subpage-stat">
        <div className="num"><em>60 sec</em></div>
        <div className="cap">
          <strong>from install to first card sale.</strong> Drop the gateway installer on a computer you already own. Plug in a PAX A80. The next customer&apos;s card runs through the console. That&apos;s how A&amp;C went live, on a Tuesday at 11:42 AM.
        </div>
      </div>

      <div className="mt-16 space-y-12">
        {tour.map((t, i) => (
          <Reveal key={t.n} threshold={0.2}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="label mb-3">{t.n} · {t.sub}</p>
                <h2 className="font-display text-3xl md:text-4xl mb-4">{t.title}</h2>
                <p className="text-[color:var(--muted)] leading-relaxed">{t.body}</p>
              </div>
              <div className={`rounded-2xl border border-[color:var(--rule)] bg-white aspect-video flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <span className="label">screencast · {t.n}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-display text-2xl">Want to drive it yourself?</p>
            <p className="text-[color:var(--muted)] mt-2 max-w-xl">
              The live demo is a real cashier console pointed at a real (mock) terminal. Fire a sale, decline a card, close a batch.
            </p>
          </div>
          <Link href="/demo" className="btn-primary">Try the live demo →</Link>
        </div>
      </div>
    </div>
  );
}
