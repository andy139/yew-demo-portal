import Link from "next/link";

export const metadata = {
  title: "The Kit — Yew",
  description: "Three pieces. One per shop. Plug-in install in under 30 minutes.",
};

const panels = [
  {
    label: "Hardware",
    title: "PAX A80",
    sub: "EMV chip · contactless · swipe · NFC",
    body:
      "A countertop terminal certified to FAPS, P2PE-encrypted end to end. We ship one A80 per bay. No reader rental, no monthly hardware fee — you own the terminal outright.",
  },
  {
    label: "Network",
    title: "Yew gateway",
    sub: "Small Linux box on the shop LAN",
    body:
      "The piece nobody else ships. The gateway sits on the same network as the terminals and exposes them to every cashier console in the shop. Marginal hardware cost: $0 — the box runs on the same hardware as your existing router.",
  },
  {
    label: "Software",
    title: "Yew console",
    sub: "Cashier · customer view · dashboard · batch close",
    body:
      "Browser-based, runs on the front-counter PC, the manager's laptop, or a tablet. Take a sale, fire a refund, tip-adjust, or close the day's batch from anywhere on the network.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">The kit</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        Three pieces. One per shop. <em className="italic text-[color:var(--secondary)]">Plug-in install in under 30 minutes.</em>
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        We bring the hardware, the network bridge, and the software to your floor. You bring the bays.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {panels.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-[color:var(--rule)] bg-white p-7 flex flex-col"
          >
            <p className="label mb-5">{p.label}</p>
            {/* Photo placeholder */}
            <div className="aspect-[4/3] rounded-xl bg-[color:var(--bg)] border border-[color:var(--rule)] mb-6 flex items-center justify-center">
              <span className="label">photo · {p.title}</span>
            </div>
            <h2 className="font-display text-2xl mb-1">{p.title}</h2>
            <p className="text-sm text-[color:var(--secondary)] italic mb-4">{p.sub}</p>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-display text-2xl">Setup is the same on every shop floor.</p>
            <p className="text-[color:var(--muted)] mt-2 max-w-xl">
              We ship the gateway pre-configured, you plug in the terminals, we run a 15-minute remote walkthrough. You take your first card payment that afternoon.
            </p>
          </div>
          <Link href="/demo" className="btn-primary">Try the live demo →</Link>
        </div>
      </div>
    </div>
  );
}
