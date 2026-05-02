import Link from "next/link";
import GatewayDiagram from "@/components/GatewayDiagram";

export const metadata = {
  title: "The Gateway | Yew",
  description:
    "Most software in this category puts the cashier on a tablet. Yew puts the terminals on the network.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="gw-hero">
        <p className="label fade-up is-in">The moat</p>
        <h1 className="gw-h1 fade-up is-in" style={{ transitionDelay: "80ms" }}>
          Charge from any bay. Reprint from the front counter.{" "}
          <em className="display-em">Reconcile from home.</em>
        </h1>
        <p className="gw-lede fade-up is-in" style={{ transitionDelay: "200ms" }}>
          Most software in this category puts the cashier on a tablet. Yew&apos;s gateway puts the terminals on the network: every PAX A80 in the shop is addressable from any computer on the LAN.
        </p>
        <p className="gw-lede fade-up is-in" style={{ transitionDelay: "320ms" }}>
          And the gateway itself is software, not a box. Run the installer on any always-on computer in the shop. Most shops use a desktop or mini-PC they already own.{" "}
          <em className="display-em">No dedicated hardware required.</em>
        </p>
      </section>

      <GatewayDiagram />

      <div className="compare-3">
        <div className="card">
          <span className="label">Mitchell1 SE</span>
          <p className="h">Back-office walk required.</p>
          <p>
            The terminal lives at the manager&apos;s desk. Every card sale is a 30-foot walk and a fresh signature.
          </p>
        </div>
        <div className="card">
          <span className="label">Tekmetric · Shopmonkey</span>
          <p className="h">Tablet-bound. One terminal per tablet.</p>
          <p>
            Cashier UI lives on a tablet that pairs with one terminal. Charging from a different station means re-pairing, or a second tablet.
          </p>
        </div>
        <div className="card is-yew">
          <span className="label">Yew</span>
          <p className="h">Any computer drives any terminal.</p>
          <p>
            Front counter, manager&apos;s laptop, the techs&apos; phone. All of them can fire a sale to any A80 on the floor.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 56, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/demo" className="btn-primary">
          See the gateway in action <span className="btn-arrow">→</span>
        </Link>
        <Link href="/the-kit" className="btn-secondary">
          What&apos;s in the box
        </Link>
      </div>
    </div>
  );
}
