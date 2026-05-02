import Link from "next/link";

export const metadata = {
  title: "The Gateway | Yew",
  description:
    "Most software in this category puts the cashier on a tablet. Yew puts the terminals on the network.",
};

export default function Page() {
  const bays = [1, 2, 3, 4];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">The moat</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-4xl">
        Charge from any bay. Reprint from the front counter. Reconcile from home.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        Most software in this category puts the cashier on a tablet. Yew&apos;s gateway puts the terminals on the network: every PAX A80 in the shop is addressable from any computer on the LAN.
      </p>
      <p className="text-base text-[color:var(--muted)] mt-4 max-w-2xl">
        And the gateway itself is software, not a box. Run the installer on any always-on computer in the shop. Most shops use a desktop or mini-PC they already own. <em className="italic">No dedicated hardware required.</em>
      </p>
      <p className="text-sm text-[color:var(--muted)] mt-3 max-w-2xl">
        Under the hood: the gateway speaks POSLink directly to every PAX A80 on the LAN. POSLink is PAX&apos;s standard semi-integration SDK. We didn&apos;t reinvent the wire.
      </p>

      {/* Diagram */}
      <div className="mt-16 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-12">
        <p className="label mb-8">Floor diagram</p>

        <svg viewBox="0 0 800 360" className="w-full h-auto" aria-label="Shop floor diagram showing front counter computer connecting to four bay terminals through the Yew gateway">
          {/* Front counter */}
          <g>
            <rect x="40" y="140" width="140" height="80" rx="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1.5" />
            <text x="110" y="172" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" fill="#6B6760" letterSpacing="2">FRONT COUNTER</text>
            <text x="110" y="195" textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="13" fill="#1A1A1A">PC / laptop</text>
          </g>

          {/* Gateway center */}
          <g>
            <rect x="350" y="150" width="120" height="60" rx="10" fill="#E8B84C" stroke="#D4A13A" strokeWidth="1.5" />
            <text x="410" y="175" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" fill="#1A1A1A" letterSpacing="2">YEW GATEWAY</text>
            <text x="410" y="195" textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="12" fill="#1A1A1A">software</text>
          </g>

          {/* Connector counter -> gateway */}
          <line x1="180" y1="180" x2="350" y2="180" stroke="#D9D3C7" strokeWidth="2" strokeDasharray="4 4" />

          {/* Bays on right */}
          {bays.map((b, i) => {
            const y = 30 + i * 75;
            return (
              <g key={b}>
                <rect x="620" y={y} width="140" height="55" rx="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1.5" />
                <text x={690} y={y + 22} textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" fill="#6B6760" letterSpacing="2">BAY {b}</text>
                <text x={690} y={y + 41} textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="12" fill="#1A1A1A">PAX A80</text>
                <line x1="470" y1="180" x2="620" y2={y + 27} stroke="#D9D3C7" strokeWidth="2" />
              </g>
            );
          })}
        </svg>

        <p className="text-sm text-[color:var(--muted)] mt-8 max-w-2xl">
          One gateway install, any number of terminals. Any computer on the shop network drives any A80. No tablet pairing, no per-station setup, no dedicated box to buy.
        </p>
      </div>

      {/* Comparison */}
      <div className="mt-16 grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-7">
          <p className="label mb-3">Mitchell1 SE</p>
          <p className="font-display text-xl mb-2">Back-office walk required.</p>
          <p className="text-sm text-[color:var(--muted)]">
            The terminal lives at the manager&apos;s desk. Every card sale is a 30-foot walk and a fresh signature.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-7">
          <p className="label mb-3">Tekmetric · Shopmonkey</p>
          <p className="font-display text-xl mb-2">Tablet-bound. One terminal per tablet.</p>
          <p className="text-sm text-[color:var(--muted)]">
            Cashier UI lives on a tablet that pairs with one terminal. Charging from a different station means re-pairing, or a second tablet.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-[color:var(--text)] bg-[color:var(--accent)]/10 p-7">
          <p className="label mb-3">Yew</p>
          <p className="font-display text-xl mb-2 text-[color:var(--secondary)] italic">Any computer drives any terminal.</p>
          <p className="text-sm text-[color:var(--text)]/80">
            Front counter, manager&apos;s laptop, the techs&apos; phone. All of them can fire a sale to any A80 on the floor.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/demo" className="btn-primary">See the gateway in action →</Link>
        <Link href="/the-kit" className="btn-secondary">What&apos;s in the box</Link>
      </div>
    </div>
  );
}
