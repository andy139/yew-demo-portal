import Link from "next/link";
import HeroWorkOrder from "@/components/HeroWorkOrder";
import AudienceCards from "@/components/AudienceCards";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <p className="label mb-6">Yew · payments + software for family auto shops</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
              Counter-side payments and software,{" "}
              <em className="italic text-[color:var(--secondary)]">for family auto shops.</em>
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--muted)] mt-6 max-w-xl leading-relaxed">
              Drop-in for FAPS-eligible shops. Charge from any bay. Settle next day. No reader rental. Optional ShopMonkey integration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary">Try the live demo →</Link>
              <Link href="/savings" className="btn-secondary">Calculate your savings</Link>
            </div>
            <p className="text-xs text-[color:var(--muted)] mt-6">
              Live in production at A&amp;C Auto Clinic, San Francisco.
            </p>
          </div>

          <div className="md:col-span-5">
            <HeroWorkOrder />
          </div>
        </div>
      </section>

      <TrustStrip />
      <AudienceCards />

      {/* Mid section. the moat preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="label mb-4">The moat</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Most software in this category puts the cashier on a tablet. <em className="italic text-[color:var(--secondary)]">Yew puts the terminals on the network.</em>
            </h2>
            <p className="text-[color:var(--muted)] mt-6 max-w-lg">
              Charge from any bay. Reprint a receipt from the front counter. Reconcile from home. The Yew gateway makes every PAX A80 in the shop addressable from any computer on the LAN.
            </p>
            <Link href="/the-gateway" className="btn-secondary mt-8">See how the gateway works →</Link>
          </div>
          <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-8">
            <p className="label mb-4">Compare</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-baseline justify-between gap-4 pb-3 border-b border-[color:var(--rule)]">
                <span>Mitchell1 SE</span>
                <span className="text-[color:var(--muted)] text-right">back-office walk required</span>
              </li>
              <li className="flex items-baseline justify-between gap-4 pb-3 border-b border-[color:var(--rule)]">
                <span>Tekmetric / Shopmonkey</span>
                <span className="text-[color:var(--muted)] text-right">tablet-bound, one terminal per tablet</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="font-medium">Yew</span>
                <span className="text-[color:var(--secondary)] text-right">any computer drives any terminal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
