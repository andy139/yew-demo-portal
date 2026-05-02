"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Typical First American Interchange-Plus all-in effective rate for auto repair
// shops (interchange ~1.5% + assessments ~0.13% + processor markup ~0.2-0.4%).
// A&C's actual March statement runs 1.68%. We benchmark against 1.8% as the
// representative figure most shops will land at.
const IC_PLUS_BENCHMARK = 0.018;

function fmt(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

function useCountUp(target: number, duration = 800) {
  const [v, setV] = useState(0);
  const startVal = useRef(0);
  const tStart = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    startVal.current = v;
    tStart.current = performance.now();
    function step(now: number) {
      const t = Math.min(1, (now - tStart.current) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = startVal.current + (target - startVal.current) * eased;
      setV(next);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);
  return v;
}

function MagneticBtn({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const wrap = useRef<HTMLSpanElement | null>(null);
  const inner = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = wrap.current;
    const innerEl = inner.current;
    if (!el || !innerEl) return;

    function onMove(e: MouseEvent) {
      if (!el || !innerEl) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(r.width, r.height) / 2 + 60;
      if (dist < radius) {
        const pull = (1 - dist / radius) * 0.32;
        innerEl.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
      } else {
        innerEl.style.transform = "translate(0,0)";
      }
    }
    function onLeave() {
      if (innerEl) innerEl.style.transform = "translate(0,0)";
    }

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <span className="magnetic-wrap" ref={wrap}>
      <button {...rest} className="btn-primary magnetic" ref={inner}>
        {children}
      </button>
    </span>
  );
}

export default function SavingsCalculator() {
  // Defaults align with the homepage hero claim: $100k/mo on 2.7% effective
  // = $10,800/yr saved at the 1.8% IC+ benchmark. So a shop owner who
  // tapped the calculator from the hero sees the same number that hooked
  // them — continuity + trust. They can adjust to their own statement.
  const [volume, setVolume] = useState("100000");
  const [ticket, setTicket] = useState("750");
  const [rate, setRate] = useState("2.7");

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const lastTarget = useRef(0);

  const result = useMemo(() => {
    const V = Math.max(0, Number(volume) || 0);
    const T = Math.max(1, Number(ticket) || 1);
    const R = Math.max(0, Number(rate) || 0);
    if (V === 0) return null;
    const monthly = V * (R / 100 - IC_PLUS_BENCHMARK);
    const annual = monthly * 12;
    const txns = V / T;
    return {
      monthly: Math.max(0, Math.round(monthly)),
      annual: Math.max(0, Math.round(annual)),
      txns: Math.max(0, Math.round(txns)),
      lowRate: R < 1.5,
    };
  }, [volume, ticket, rate]);

  const target = result?.monthly ?? 0;
  const animated = useCountUp(target, 800);

  useEffect(() => {
    if (target === lastTarget.current || target === 0) return;
    lastTarget.current = target;
    const t = setTimeout(() => setFlash(true), 0);
    const t2 = setTimeout(() => setFlash(false), 760);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [target]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Need a real email so we can reply.");
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
    <div className="calc-grid">
      <div className="calc-input-block">
        <div className="calc-input has-prefix">
          <label className="label">Monthly card volume</label>
          <span className="prefix">$</span>
          <input
            className="field"
            type="number"
            inputMode="decimal"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          <p className="hint">Total cards-paid revenue per month.</p>
        </div>
        <div className="calc-input has-prefix">
          <label className="label">Average ticket</label>
          <span className="prefix">$</span>
          <input
            className="field"
            type="number"
            inputMode="decimal"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
          />
          <p className="hint">Average repair-order amount.</p>
        </div>
        <div className="calc-input">
          <label className="label">Current effective rate</label>
          <input
            className="field"
            type="number"
            inputMode="decimal"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            style={{ paddingRight: 36 }}
          />
          <span className="suffix">%</span>
          <p className="hint">
            Look on your statement. Industry default for flat-rate processors is ~2.7%.
          </p>
        </div>
      </div>

      <div className="calc-output">
        <span className="label">Estimated savings vs FAPS Interchange-Plus</span>

        {!result || result.monthly <= 0 ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              color: "var(--muted)",
              fontSize: 16,
            }}
          >
            Enter your numbers. We&apos;ll show the delta against the FAPS Interchange-Plus benchmark (1.8%).
          </div>
        ) : (
          <>
            <div className={`calc-amount ${flash ? "is-flash" : ""}`} aria-live="polite">
              ${fmt(animated)}<span className="per">/mo</span>
            </div>
            <p className="calc-no-friction">
              No setup fee. No termination fee. No contract.
            </p>
            <p className="calc-explain">
              That&apos;s <span className="strong">${fmt(result.annual)}</span> a year. Across an estimated{" "}
              <span className="strong">{fmt(result.txns)}</span> transactions.
            </p>
            <div className="calc-rule" />
            <p className="calc-fineprint">
              Math: monthly volume × (your rate − 1.8% IC+ benchmark). 1.8% is the typical all-in First American Interchange-Plus rate for auto repair (interchange + assessments + processor markup). A&amp;C runs 1.68% on their actual mix. Final pricing is custom-quoted on your statement.
            </p>
          </>
        )}

        <form onSubmit={onSubmit} className="calc-cta-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@shop.com"
          />
          <MagneticBtn type="submit" disabled={submitting}>
            {submitted
              ? "Sent ✓"
              : submitting
                ? "Sending…"
                : (
                  <>
                    Send my statement <span className="btn-arrow">→</span>
                  </>
                )}
          </MagneticBtn>
        </form>
        {error ? (
          <p className="calc-fineprint" style={{ color: "var(--secondary)", marginTop: 8 }}>
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
