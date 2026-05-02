import Link from "next/link";

export const metadata = {
  title: "The Kit | Yew",
  description: "Two pieces of software, one piece of hardware. The terminal is the only thing you have to buy from us.",
};

const panels = [
  {
    label: "Hardware",
    title: "PAX A80",
    sub: "EMV chip · contactless · swipe · NFC · POSLink semi-integration",
    body:
      "A countertop terminal certified to FAPS, P2PE-encrypted end to end. Yew talks to the A80 over POSLink — the standard PAX semi-integration protocol — wire-verified against live production. One A80 per bay if you want bay-to-bay charging. No reader rental, no monthly hardware fee. You own the terminal outright.",
  },
  {
    label: "Software",
    title: "Yew gateway",
    sub: "Installer · runs on a computer you already own",
    body:
      "The piece most of this category misses. Yew's gateway is software, not hardware. Run our installer on any always-on computer in the shop (desktop, mini-PC, the office machine) and it auto-detects the LAN, finds your A80s, registers them, and brings the cashier console online. Uptime tracks the host computer. Want set-it-and-forget-it? We'll ship a pre-imaged mini-PC. Most shops use what they have.",
  },
  {
    label: "Software",
    title: "Yew console",
    sub: "Cashier · customer view · dashboard · batch close",
    body:
      "Browser-based, hosted by us. Runs on the front-counter PC, the manager's laptop, or a tablet. Take a sale, fire a refund, tip-adjust, or close the day's batch from anywhere on the network.",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">The kit</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-4xl">
        Two pieces of software. One piece of hardware. Installer-driven setup.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        The terminal is the only thing you have to buy from us. The gateway runs on a computer you already own.
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
            <p className="font-display text-2xl">Setup is one installer.</p>
            <p className="text-[color:var(--muted)] mt-2 max-w-xl">
              Run the Yew gateway installer on the always-on computer of your choice. Plug in the terminals. We run a 15-minute remote walkthrough. You take your first card payment that afternoon.
            </p>
          </div>
          <Link href="/demo" className="btn-primary">Try the live demo →</Link>
        </div>
      </div>
    </div>
  );
}
