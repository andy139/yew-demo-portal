import Link from "next/link";
import KitIllustration from "@/components/KitIllustration";

export const metadata = {
  title: "The Kit | Yew",
  description: "Two pieces of software, one piece of hardware. The terminal is the only thing you have to buy from us.",
};

const panels = [
  {
    label: "Hardware",
    title: "PAX A80",
    sub: "EMV chip · contactless · swipe · NFC · PCI PTS 5.x",
    illustration: "terminal" as const,
    body:
      "A countertop terminal with EMV L1/L2/L3-certified hardware and PCI PTS 5.x. Yew is built on the PAX POSLink SDK with a Semi-Integrated architecture, which means card data flows from the terminal straight to the processor — never through Yew's servers. One A80 per bay if you want bay-to-bay charging. No reader rental, no monthly hardware fee. You own the terminal outright.",
  },
  {
    label: "Software",
    title: "Yew gateway",
    sub: "Installer · runs on a computer you already own",
    illustration: "gateway" as const,
    body:
      "The piece most of this category misses. Yew's gateway is software, not hardware. Run our installer on any always-on computer in the shop (desktop, mini-PC, the office machine) and it auto-detects the LAN, finds your A80s, registers them, and brings the cashier console online. Uptime tracks the host computer. Want set-it-and-forget-it? We'll ship a pre-imaged mini-PC. Most shops use what they have.",
  },
  {
    label: "Software",
    title: "Yew console",
    sub: "Cashier · customer view · dashboard · batch close",
    illustration: "console" as const,
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
            {/* Illustration — swap for real product photo when ready */}
            <div className="aspect-[4/3] rounded-xl bg-[color:var(--bg)] border border-[color:var(--rule)] mb-6 overflow-hidden">
              <KitIllustration kind={p.illustration} />
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

      {/* Pre-built Yew device — separate option */}
      <div className="mt-6 rounded-2xl border-2 border-[color:var(--text)] bg-[color:var(--accent)]/15 p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="label mb-3">Or, skip the install</p>
            <p className="font-display text-2xl">We&apos;ll ship you the whole thing pre-built.</p>
            <p className="text-[color:var(--text)]/80 mt-2 max-w-xl">
              Want a turnkey Yew device? We send a pre-imaged mini-PC with the gateway and console already running. No installation. No IT step. Plug it into your shop network, plug in the terminals, you&apos;re live. Bay Area shops, we&apos;ll drop it off and set it up on your counter.
            </p>
          </div>
          <Link href="/talk?audience=shop" className="btn-secondary">Ask about pre-built →</Link>
        </div>
      </div>
    </div>
  );
}
