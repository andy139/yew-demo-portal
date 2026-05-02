"use client";

import { useMemo, useState } from "react";

// IC+ benchmark: 1.51% effective. We don't show Yew's literal rate;
// the delta vs IC+ is what investors / shops use to negotiate.
const IC_PLUS_BENCHMARK = 0.0151;

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default function SavingsCalculator() {
  const [volume, setVolume] = useState<string>("80000");
  const [ticket, setTicket] = useState<string>("750");
  const [rate, setRate] = useState<string>("2.7");

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const result = useMemo(() => {
    const V = Math.max(0, Number(volume) || 0);
    const T = Math.max(1, Number(ticket) || 1);
    const R = Math.max(0, Number(rate) || 0);

    if (V === 0) return null;

    // Conservative formula — pure rate-delta on volume.
    // monthly_savings = V * (R/100 - IC+ benchmark)
    // Per-transaction $0.10 deltas tend to wash out with FAPS interchange-plus
    // pricing in this category, so we ignore them in the headline.
    const monthly = V * (R / 100 - IC_PLUS_BENCHMARK);
    const annual = monthly * 12;
    const txns = V / T;

    return {
      monthly: Math.round(monthly),
      annual: Math.round(annual),
      txns: Math.round(txns),
      lowRate: R < 1.5,
    };
  }, [volume, ticket, rate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Need a real email so Andy can reply.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          audience: "shop",
          payload: {
            source: "savings-calculator",
            volume: Number(volume),
            ticket: Number(ticket),
            rate: Number(rate),
            estMonthlySavings: result?.monthly,
          },
        }),
      });
      if (!res.ok) throw new Error("submit-failed");
      setSubmitted(true);
    } catch {
      setError("Something broke. Email andy@yewsoftware.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <label className="label block mb-2">Monthly card volume</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--muted)]">$</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full pl-8 pr-4 py-3 rounded-lg border border-[color:var(--rule)] bg-white focus:border-[color:var(--text)] focus:outline-none text-lg font-display"
            />
          </div>
          <p className="text-xs text-[color:var(--muted)] mt-1">Total cards-paid revenue per month.</p>
        </div>

        <div>
          <label className="label block mb-2">Average ticket</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--muted)]">$</span>
            <input
              type="number"
              inputMode="decimal"
              min={1}
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              className="w-full pl-8 pr-4 py-3 rounded-lg border border-[color:var(--rule)] bg-white focus:border-[color:var(--text)] focus:outline-none text-lg font-display"
            />
          </div>
          <p className="text-xs text-[color:var(--muted)] mt-1">Average repair-order amount.</p>
        </div>

        <div>
          <label className="label block mb-2">Current effective rate</label>
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              step="0.01"
              min={0}
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-lg border border-[color:var(--rule)] bg-white focus:border-[color:var(--text)] focus:outline-none text-lg font-display"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[color:var(--muted)]">%</span>
          </div>
          <p className="text-xs text-[color:var(--muted)] mt-1">
            Look on your statement. Industry default for flat-rate processors is ~2.7%.
          </p>
        </div>
      </div>

      {/* Output */}
      <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-8 flex flex-col">
        <p className="label mb-4">Estimated savings</p>

        {!result || result.monthly <= 0 ? (
          <div className="flex-1 flex items-center">
            <p className="text-[color:var(--muted)]">
              Enter your numbers on the left. We&apos;ll show the delta against the FAPS Interchange-Plus benchmark (1.51%).
            </p>
          </div>
        ) : result.lowRate ? (
          <div className="flex-1 flex flex-col justify-center">
            <p className="font-display text-2xl mb-3">Already at IC+ rates?</p>
            <p className="text-[color:var(--muted)] mb-6">
              You&apos;re running tight. Talk to us anyway — we have shop owners switching for the software, not just the rate.
            </p>
            <a href="/talk?audience=shop" className="btn-primary self-start">Talk to us →</a>
          </div>
        ) : (
          <>
            <p className="font-display text-2xl md:text-3xl leading-tight mb-2">
              You&apos;d save <span className="italic text-[color:var(--secondary)]">~${fmt(result.monthly)}/month</span> on FAPS Interchange-Plus through Yew.
            </p>
            <p className="text-[color:var(--muted)] text-lg">
              That&apos;s <span className="text-[color:var(--text)] font-medium">${fmt(result.annual)}</span> a year. Across an estimated {fmt(result.txns)} transactions.
            </p>

            <p className="text-xs text-[color:var(--muted)] mt-6 pt-6 border-t border-[color:var(--rule)]">
              Math: monthly volume × (your rate − 1.51% IC+ benchmark). Rounded. Final pricing is custom-quoted on your actual statement; we keep some negotiation room rather than posting a headline rate.
            </p>
          </>
        )}

        {/* Email capture */}
        <form onSubmit={onSubmit} className="mt-6 pt-6 border-t border-[color:var(--rule)]">
          <p className="label mb-2">Get a custom quote</p>
          {submitted ? (
            <p className="text-sm text-[color:var(--secondary)] py-2">
              Got it. Andy will reply within a business day.
            </p>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@shop.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-[color:var(--rule)] bg-white focus:border-[color:var(--text)] focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary !py-3"
                >
                  {submitting ? "Sending…" : "Send my statement →"}
                </button>
              </div>
              {error ? (
                <p className="text-xs text-[color:var(--secondary)] mt-2">{error}</p>
              ) : (
                <p className="text-xs text-[color:var(--muted)] mt-2">
                  We&apos;ll reply with a real quote based on your statement, no commitment.
                </p>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
