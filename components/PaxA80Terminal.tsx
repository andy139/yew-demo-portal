"use client";

import { useEffect, useRef, useState } from "react";

type Row = {
  id: number;
  time: string;
  desc: string;
  amount: number;
  status: "approved" | "pending";
  fresh: boolean;
};

const SAMPLES: Omit<Row, "id" | "time" | "fresh">[] = [
  { desc: "Diagnostic · check engine", amount: 120.0, status: "approved" },
  { desc: "Brake pad replacement", amount: 340.0, status: "approved" },
  { desc: "Synthetic oil change", amount: 89.5, status: "approved" },
  { desc: "Coolant flush", amount: 78.0, status: "approved" },
  { desc: "Tire rotation", amount: 45.0, status: "approved" },
  { desc: "Wheel alignment", amount: 110.0, status: "approved" },
  { desc: "Cabin air filter", amount: 52.5, status: "approved" },
  { desc: "Battery test & replace", amount: 185.0, status: "pending" },
  { desc: "Spark plugs (set of 4)", amount: 96.0, status: "approved" },
  { desc: "Transmission service", amount: 215.0, status: "approved" },
  { desc: "AC recharge · R-1234yf", amount: 168.0, status: "approved" },
];

const fmtTime = (m: number) => {
  const hour = (4 + Math.floor(m / 60)) % 12 || 12;
  const min = String(m % 60).padStart(2, "0");
  return `${hour}:${min} PM`;
};
const fmtAmt = (n: number) => "$" + n.toFixed(2);
const fmtClock = (d: Date) => {
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, "0");
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m} ${ap}`;
};

export default function PaxA80Terminal() {
  const totalRef = useRef<HTMLSpanElement>(null);
  const deltaRef = useRef<HTMLSpanElement>(null);
  const feeSavedRef = useRef<HTMLSpanElement>(null);

  const [clock, setClock] = useState("9:14 AM");
  const [hotStep, setHotStep] = useState<number>(-1);
  const [rows, setRows] = useState<Row[]>(() => {
    let m = 12;
    const seeded: Row[] = [];
    for (let i = 0; i < 3; i++) {
      const s = SAMPLES[i % SAMPLES.length];
      m += 4;
      seeded.unshift({ ...s, id: i, time: fmtTime(m), fresh: false });
    }
    return seeded;
  });

  useEffect(() => {
    const tick = () => setClock(fmtClock(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    const runFlow = () => {
      timers.forEach(clearTimeout);
      timers = [];
      for (let i = 0; i < 4; i++) {
        timers.push(setTimeout(() => setHotStep(i), i * 350));
      }
      timers.push(setTimeout(() => setHotStep(-1), 4 * 350 + 400));
    };
    runFlow();
    const id = setInterval(runFlow, 5200);
    return () => {
      clearInterval(id);
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    let idx = 0;
    let baseMin = 24;
    let total = 487.5;
    let feeSaved = 12.34;

    const animateTotal = (from: number, to: number) => {
      if (!totalRef.current) return;
      const start = performance.now();
      const dur = 700;
      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const v = from + (to - from) * ease(t);
        if (totalRef.current) totalRef.current.textContent = "$" + v.toFixed(2);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const push = () => {
      const s = SAMPLES[idx % SAMPLES.length];
      idx += 1;
      baseMin += Math.floor(Math.random() * 3) + 2;
      const next: Row = {
        ...s,
        id: Date.now() + idx,
        time: fmtTime(baseMin),
        fresh: true,
      };
      setRows((prev) => {
        const merged = [next, ...prev.map((r) => ({ ...r, fresh: false }))];
        return merged.slice(0, 4);
      });
      setTimeout(() => {
        setRows((prev) => prev.map((r) => ({ ...r, fresh: false })));
      }, 900);

      if (next.status === "approved") {
        const old = total;
        total += next.amount;
        if (deltaRef.current) {
          deltaRef.current.textContent = "+" + fmtAmt(next.amount);
          deltaRef.current.classList.add("show");
        }
        animateTotal(old, total);
        setTimeout(() => deltaRef.current?.classList.remove("show"), 1800);
      }
      feeSaved += next.amount * 0.0078;
      if (feeSavedRef.current) feeSavedRef.current.textContent = "$" + feeSaved.toFixed(2);
    };

    const id = setInterval(push, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div data-pax-a80 className="pax-card">
      <style>{styles}</style>

      {/* header */}
      <div className="pax-head">
        <div>
          <div className="pax-head-eb">
            <span className="pax-needle pax-needle-g" />
            <span className="pax-label" style={{ color: "var(--pax-green)", fontSize: 10 }}>
              Cashier · Counter
            </span>
          </div>
          <div className="pax-head-title">
            Charge <em>RO #4127</em>
          </div>
          <div className="pax-label pax-head-sub">M. Hernandez · 2018 Camry</div>
        </div>
        <div className="pax-head-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/a80.png"
            alt="PAX A80 terminal"
            className="pax-device-thumb"
            width={1462}
            height={1130}
          />
          <div className="pax-head-time">
            <div className="pax-now pax-mono">{clock}</div>
            <div>3 min ago</div>
          </div>
        </div>
      </div>

      {/* payment flow */}
      <div className="pax-flow" aria-label="Payment flow">
        <div className="pax-flow-head">
          <div className="pax-flow-title">
            Swipe to settled — <em>1.4s</em>, end to end
          </div>
          <div className="pax-flow-savings">
            −<span ref={feeSavedRef}>$12.34</span> saved on fees today
          </div>
        </div>
        <div className="pax-flow-track">
          <div className="pax-flow-line" />
          {[
            { ring: "▤", b: "Card", s: "swipe" },
            { ring: "A80", b: "PAX A80", s: "POSLink" },
            { ring: "y.", b: "yew. ledger", s: "idempotent" },
            { ring: "▶", b: "Processor", s: "IC+ rates" },
          ].map((n, i) => (
            <div key={i} className={`pax-flow-node${hotStep === i ? " hot" : ""}`}>
              <div className="pax-ring">{n.ring}</div>
              <div className="pax-lab">
                <b>{n.b}</b>
                {n.s}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* live ticker */}
      <div className="pax-ticker">
        <div className="pax-ticker-head">
          <div className="pax-ticker-title">
            Today&apos;s <em>line items</em>
          </div>
          <div className="pax-stream">Streaming</div>
        </div>
        <div className="pax-ticker-rows" aria-live="polite" aria-atomic="false">
          {rows.map((r) => (
            <div
              key={r.id}
              className={`pax-row${r.status === "pending" ? " pending" : ""}${r.fresh ? " fresh" : ""}`}
            >
              <span className="pax-spark" />
              <span className="pax-t">{r.time}</span>
              <span className="pax-desc">{r.desc}</span>
              <span className="pax-amt">{fmtAmt(r.amount)}</span>
              <span className="pax-stat">{r.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* running total footer */}
      <div className="pax-footer">
        <div className="pax-footer-l">
          <div className="pax-footer-k">Counter Terminal · #4127</div>
          <div className="pax-footer-sub">Running total today</div>
        </div>
        <div className="pax-footer-r">
          <span ref={totalRef} className="pax-footer-total pax-mono">
            $487.50
          </span>
          <span ref={deltaRef} className="pax-footer-delta pax-mono">
            +$0.00
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,400..600,30..100,0..1;1,9..144,400..600,30..100,0..1&family=JetBrains+Mono:wght@400;500;600&display=swap');

[data-pax-a80]{
  --pax-paper:#fbf4e4;
  --pax-paper-2:#f6ecd4;
  --pax-rule:rgba(31,19,8,0.10);
  --pax-custard:#e8b84c;
  --pax-custard-deep:#d4a13a;
  --pax-umber:#8a4b2a;
  --pax-green:#2f6b3d;
  --pax-ink:#1f1308;
  --pax-ink-soft:#2a1810;
  --pax-muted:#5b4632;
  --pax-muted-2:#9b7e62;
  --pax-serif:'Fraunces', ui-serif, Georgia, serif;
  --pax-mono:'JetBrains Mono', ui-monospace, monospace;
  font-family:var(--pax-serif);
  color:var(--pax-ink);
}
[data-pax-a80] *,[data-pax-a80] *::before,[data-pax-a80] *::after{box-sizing:border-box}

[data-pax-a80].pax-card{
  position:relative;
  background:var(--pax-paper);
  border:1px solid rgba(80,55,20,0.18);
  border-radius:18px;
  padding:32px 32px 28px;
  display:flex;flex-direction:column;gap:32px;
  box-shadow:
    0 1px 0 rgba(255,250,235,0.6) inset,
    0 1px 2px rgba(40,24,8,0.05),
    0 8px 20px -8px rgba(40,24,8,0.18),
    0 28px 60px -24px rgba(40,24,8,0.35);
  overflow:hidden;
  isolation:isolate;
}
[data-pax-a80].pax-card::before{
  content:"";position:absolute;inset:0;pointer-events:none;border-radius:18px;
  background:radial-gradient(120% 80% at 0% 0%, rgba(232,184,76,0.10), transparent 55%);
}

[data-pax-a80] .pax-label{font-family:var(--pax-mono);font-size:11px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:var(--pax-muted-2)}
[data-pax-a80] .pax-mono{font-family:var(--pax-mono);font-variant-numeric:tabular-nums slashed-zero}
[data-pax-a80] .pax-needle{display:inline-block;width:1px;height:14px;background:linear-gradient(to bottom, transparent, var(--pax-custard) 12%, var(--pax-custard) 88%, transparent)}
[data-pax-a80] .pax-needle-g{background:linear-gradient(to bottom, transparent, var(--pax-green) 12%, var(--pax-green) 88%, transparent)}

@keyframes paxPulseY{0%{box-shadow:0 0 0 0 rgba(232,184,76,0.55)}70%{box-shadow:0 0 0 9px rgba(232,184,76,0)}100%{box-shadow:0 0 0 0 rgba(232,184,76,0)}}
@keyframes paxPulseG{0%{box-shadow:0 0 0 0 rgba(47,107,61,0.55)}70%{box-shadow:0 0 0 9px rgba(47,107,61,0)}100%{box-shadow:0 0 0 0 rgba(47,107,61,0)}}

/* head */
[data-pax-a80] .pax-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;position:relative;z-index:1}
[data-pax-a80] .pax-head-right{display:flex;flex-direction:column;align-items:flex-end;gap:8px;flex-shrink:0}
[data-pax-a80] .pax-device-thumb{width:96px;height:auto;display:block;filter:drop-shadow(0 6px 14px rgba(40,24,8,0.25)) drop-shadow(0 1px 2px rgba(40,24,8,0.18))}
[data-pax-a80] .pax-head-eb{display:flex;align-items:center;gap:8px}
[data-pax-a80] .pax-head-title{font-family:var(--pax-serif);font-weight:500;font-size:30px;line-height:1.05;letter-spacing:-0.02em;color:var(--pax-ink);margin-top:8px;font-variation-settings:'opsz' 96}
[data-pax-a80] .pax-head-title em{font-style:italic;font-variation-settings:'opsz' 96,'SOFT' 100,'WONK' 1;color:var(--pax-green)}
[data-pax-a80] .pax-head-sub{margin-top:4px;color:var(--pax-muted)}
[data-pax-a80] .pax-head-time{font-family:var(--pax-mono);font-size:11px;color:var(--pax-muted-2);text-align:right;line-height:1.5}
[data-pax-a80] .pax-now{color:var(--pax-ink)}
[data-pax-a80] .pax-now::after{content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--pax-green);margin-left:6px;vertical-align:middle;box-shadow:0 0 0 0 rgba(47,107,61,0.5);animation:paxPulseG 2.4s cubic-bezier(.4,0,.6,1) infinite}

/* devices/chips */
[data-pax-a80] .pax-devices{position:relative;z-index:1;border:1px solid rgba(31,19,8,0.08);border-radius:10px;background:rgba(255,250,235,0.55);padding:11px 13px;display:flex;flex-direction:column;gap:9px}
[data-pax-a80] .pax-devices-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
[data-pax-a80] .pax-devices-count{font-family:var(--pax-mono);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:var(--pax-green);font-weight:500;display:inline-flex;align-items:center;gap:6px}
[data-pax-a80] .pax-devices-count::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--pax-green);animation:paxPulseG 2.4s cubic-bezier(.4,0,.6,1) infinite}
[data-pax-a80] .pax-devices-row{display:flex;flex-wrap:wrap;gap:6px}
[data-pax-a80] .pax-chip{
  display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:999px;
  background:#fbf4e4;border:1px solid rgba(31,19,8,0.10);
  font-family:var(--pax-mono);font-size:11px;letter-spacing:0.04em;color:var(--pax-ink);font-weight:500;
  transition:transform .25s, box-shadow .25s, border-color .25s, background .25s;
  position:relative;animation:paxChipIn .5s cubic-bezier(.2,.8,.2,1) both;
}
@keyframes paxChipIn{from{opacity:0;transform:translateY(8px) scale(.95)}to{opacity:1;transform:none}}
[data-pax-a80] .pax-chip-d{width:5px;height:5px;border-radius:50%;background:var(--pax-green)}
[data-pax-a80] .pax-chip:hover{border-color:var(--pax-custard-deep);background:#fff7e0;transform:translateY(-1px)}
[data-pax-a80] .pax-chip.beat{animation:paxBeat .9s cubic-bezier(.2,.8,.2,1)}
@keyframes paxBeat{0%{box-shadow:0 0 0 0 rgba(232,184,76,0)}20%{box-shadow:0 0 0 0 rgba(232,184,76,0.6);background:#fbe5a8;border-color:var(--pax-custard-deep)}100%{box-shadow:0 0 0 10px rgba(232,184,76,0);background:#fbf4e4;border-color:rgba(31,19,8,0.10)}}

/* terminal callout */
[data-pax-a80] .pax-terminal{
  position:relative;z-index:1;
  display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:10px;
  background:linear-gradient(180deg, rgba(232,184,76,0.18), rgba(232,184,76,0.06));
  border:1px solid rgba(212,161,58,0.36);overflow:hidden;
}
[data-pax-a80] .pax-terminal::after{content:"";position:absolute;top:0;left:-50%;width:50%;height:100%;background:linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);transform:skewX(-20deg);animation:paxSheen 3.6s ease-in-out 1.2s infinite}
@keyframes paxSheen{0%{left:-50%}55%{left:120%}100%{left:120%}}
[data-pax-a80] .pax-term-mark{position:relative;width:32px;height:32px;border-radius:7px;background:#1f1308;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 4px 10px -4px rgba(31,19,8,0.6),inset 0 1px 0 rgba(255,235,180,0.18)}
[data-pax-a80] .pax-term-dot{width:9px;height:9px;border-radius:50%;background:var(--pax-custard);box-shadow:0 0 10px rgba(232,184,76,0.85);animation:paxPulseY 2.2s cubic-bezier(.4,0,.6,1) infinite}
[data-pax-a80] .pax-term-body{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}
[data-pax-a80] .pax-term-eb{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
[data-pax-a80] .pax-term-status{font-family:var(--pax-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--pax-custard-deep);font-weight:600;display:inline-flex;align-items:center;gap:5px}
[data-pax-a80] .pax-term-ld{width:5px;height:5px;border-radius:50%;background:var(--pax-custard-deep);animation:paxPulseY 2.4s cubic-bezier(.4,0,.6,1) infinite}
[data-pax-a80] .pax-term-name{font-family:var(--pax-serif);font-size:18px;font-weight:500;letter-spacing:-0.018em;color:var(--pax-ink);line-height:1.15;font-variation-settings:'opsz' 96}
[data-pax-a80] .pax-term-name em{font-style:italic;font-variation-settings:'opsz' 96,'SOFT' 100,'WONK' 1;color:var(--pax-ink)}
[data-pax-a80] .pax-term-sub{font-family:var(--pax-mono);font-style:normal;font-size:10px;letter-spacing:0.04em;color:var(--pax-muted);font-weight:400}

/* flow */
[data-pax-a80] .pax-flow{
  position:relative;z-index:1;border-radius:10px;border:1px solid rgba(31,19,8,0.08);
  background:linear-gradient(180deg, rgba(255,250,235,0.6), rgba(246,236,212,0.4));
  padding:12px 14px;display:flex;flex-direction:column;gap:10px;overflow:hidden;
}
[data-pax-a80] .pax-flow-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
[data-pax-a80] .pax-flow-title{font-family:var(--pax-serif);font-weight:500;font-size:13px;color:var(--pax-ink)}
[data-pax-a80] .pax-flow-title em{font-style:italic;font-variation-settings:'opsz' 96,'SOFT' 100,'WONK' 1;color:var(--pax-umber)}
[data-pax-a80] .pax-flow-savings{font-family:var(--pax-mono);font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:var(--pax-green);display:inline-flex;align-items:center;gap:5px;font-weight:600}
[data-pax-a80] .pax-flow-track{position:relative;height:48px;display:flex;align-items:center;justify-content:space-between}
[data-pax-a80] .pax-flow-line{position:absolute;left:24px;right:24px;top:50%;height:2px;background:repeating-linear-gradient(90deg, rgba(31,19,8,0.18) 0 4px, transparent 4px 8px);transform:translateY(-50%)}
[data-pax-a80] .pax-flow-line::after{content:"";position:absolute;left:0;top:-1px;height:4px;width:24px;border-radius:3px;background:linear-gradient(90deg, transparent, var(--pax-custard) 50%, transparent);box-shadow:0 0 10px rgba(232,184,76,0.7);animation:paxFlowPulse 2.8s linear infinite}
@keyframes paxFlowPulse{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 24px);opacity:0}}
[data-pax-a80] .pax-flow-node{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:5px;background:var(--pax-paper);padding:0 5px}
[data-pax-a80] .pax-ring{width:30px;height:30px;border-radius:50%;background:#fffaec;border:1.5px solid rgba(31,19,8,0.18);display:inline-flex;align-items:center;justify-content:center;color:var(--pax-ink);font-family:var(--pax-serif);font-style:italic;font-size:11px;font-weight:500;transition:all .35s cubic-bezier(.2,.8,.2,1)}
[data-pax-a80] .pax-flow-node.hot .pax-ring{background:linear-gradient(180deg,#fbe5a8,#f4d27a);border-color:var(--pax-custard-deep);box-shadow:0 0 0 3px rgba(232,184,76,0.25),0 0 12px rgba(232,184,76,0.6);transform:scale(1.08)}
[data-pax-a80] .pax-lab{font-family:var(--pax-mono);font-size:8px;letter-spacing:0.14em;text-transform:uppercase;color:var(--pax-muted-2);white-space:nowrap;text-align:center;line-height:1.2}
[data-pax-a80] .pax-lab b{display:block;color:var(--pax-ink);font-weight:600;font-size:8px}
[data-pax-a80] .pax-flow-node.hot .pax-lab b{color:var(--pax-umber)}
[data-pax-a80] .pax-flow-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;border-top:1px dashed rgba(31,19,8,0.10);padding-top:8px}
[data-pax-a80] .pax-m{display:flex;flex-direction:column;gap:2px}
[data-pax-a80] .pax-k{font-family:var(--pax-mono);font-size:8px;letter-spacing:0.14em;text-transform:uppercase;color:var(--pax-muted-2)}
[data-pax-a80] .pax-v{font-family:var(--pax-serif);font-weight:500;font-size:15px;color:var(--pax-ink);font-variation-settings:'opsz' 96;letter-spacing:-0.01em;font-variant-numeric:tabular-nums slashed-zero}
[data-pax-a80] .pax-v em{font-style:italic;font-variation-settings:'opsz' 96,'SOFT' 100,'WONK' 1;color:var(--pax-green)}

/* ticker */
[data-pax-a80] .pax-ticker{position:relative;z-index:1;display:flex;flex-direction:column;border:1px solid rgba(31,19,8,0.06);border-radius:10px;background:var(--pax-paper);overflow:hidden;min-height:170px}
[data-pax-a80] .pax-ticker-head{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid rgba(31,19,8,0.06);background:rgba(255,250,235,0.5);gap:8px}
[data-pax-a80] .pax-ticker-title{font-family:var(--pax-serif);font-weight:500;font-size:13px;color:var(--pax-ink)}
[data-pax-a80] .pax-ticker-title em{font-style:italic;font-variation-settings:'opsz' 96,'SOFT' 100,'WONK' 1;color:var(--pax-umber)}
[data-pax-a80] .pax-stream{font-family:var(--pax-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--pax-green);display:inline-flex;align-items:center;gap:6px}
[data-pax-a80] .pax-stream::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--pax-green);animation:paxPulseG 2.4s cubic-bezier(.4,0,.6,1) infinite}
[data-pax-a80] .pax-ticker-rows{display:flex;flex-direction:column;font-family:var(--pax-mono);font-size:11px;position:relative}
[data-pax-a80] .pax-row{
  display:grid;grid-template-columns:60px 1fr 80px 80px;gap:10px;align-items:center;
  padding:9px 13px;border-top:1px solid rgba(31,19,8,0.04);color:var(--pax-muted);line-height:1.4;font-size:11px;
  transition:background .25s;position:relative;
}
[data-pax-a80] .pax-row:first-child{border-top:0}
[data-pax-a80] .pax-t{color:var(--pax-muted-2);font-size:10px}
[data-pax-a80] .pax-desc{color:var(--pax-ink-soft)}
[data-pax-a80] .pax-amt{color:var(--pax-ink);text-align:right;font-variant-numeric:tabular-nums slashed-zero}
[data-pax-a80] .pax-stat{display:inline-flex;align-items:center;gap:5px;font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:var(--pax-green);font-weight:500;justify-self:end}
[data-pax-a80] .pax-stat::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--pax-green)}
[data-pax-a80] .pax-row.pending .pax-stat{color:var(--pax-custard-deep)}
[data-pax-a80] .pax-row.pending .pax-stat::before{background:var(--pax-custard-deep)}
[data-pax-a80] .pax-row.fresh{animation:paxRowin .65s cubic-bezier(.2,.7,.2,1) both}
@keyframes paxRowin{0%{opacity:0;transform:translateY(-12px);background:rgba(232,184,76,0.28)}50%{background:rgba(232,184,76,0.18)}100%{opacity:1;transform:none;background:transparent}}
[data-pax-a80] .pax-row.fresh .pax-amt{animation:paxCountup .8s cubic-bezier(.2,.8,.2,1) .15s both}
@keyframes paxCountup{from{color:var(--pax-custard-deep);transform:translateX(4px)}to{color:var(--pax-ink);transform:none}}
[data-pax-a80] .pax-spark{position:absolute;left:0;top:50%;width:3px;height:0;border-radius:0 2px 2px 0;background:var(--pax-custard);transform:translateY(-50%)}
[data-pax-a80] .pax-row.fresh .pax-spark{animation:paxSpark 1.4s cubic-bezier(.2,.8,.2,1) both}
@keyframes paxSpark{0%{height:80%;box-shadow:0 0 12px var(--pax-custard)}100%{height:0;box-shadow:0 0 0 var(--pax-custard)}}

/* footer (running total) */
[data-pax-a80] .pax-footer{
  position:relative;z-index:1;
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  padding:14px 16px;border-radius:10px;
  background:linear-gradient(180deg,#0e1f17,#061008);
  border:1px solid rgba(48,30,10,0.5);
  box-shadow:inset 0 1px 0 rgba(255,250,235,0.08);
}
[data-pax-a80] .pax-footer-l{display:flex;flex-direction:column;gap:2px;min-width:0}
[data-pax-a80] .pax-footer-k{font-family:var(--pax-mono);font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(232,184,76,0.95);text-shadow:0 0 6px rgba(232,184,76,0.3)}
[data-pax-a80] .pax-footer-sub{font-family:var(--pax-mono);font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(232,184,76,0.5)}
[data-pax-a80] .pax-footer-r{display:flex;flex-direction:column;align-items:flex-end;gap:2px}
[data-pax-a80] .pax-footer-total{font-family:var(--pax-serif);font-variant-numeric:tabular-nums slashed-zero;font-weight:500;font-size:30px;color:var(--pax-custard);letter-spacing:-0.012em;text-shadow:0 0 10px rgba(232,184,76,0.5);font-variation-settings:'opsz' 96;line-height:1}
[data-pax-a80] .pax-footer-delta{font-family:var(--pax-mono);font-size:10px;letter-spacing:0.14em;color:#7fa776;text-shadow:0 0 6px rgba(127,167,118,0.4);opacity:0;transition:opacity .3s}
[data-pax-a80] .pax-footer-delta.show{opacity:1}

@media (max-width: 560px){
  [data-pax-a80].pax-card{padding:20px 18px 18px;gap:22px;border-radius:14px}
  [data-pax-a80] .pax-head{align-items:flex-start;gap:10px}
  [data-pax-a80] .pax-head-right{align-items:flex-end;gap:6px}
  [data-pax-a80] .pax-device-thumb{width:72px}
  [data-pax-a80] .pax-head-time{text-align:right}
  [data-pax-a80] .pax-head-title{font-size:24px}
  [data-pax-a80] .pax-flow{padding:12px 10px}
  [data-pax-a80] .pax-flow-head{gap:6px}
  [data-pax-a80] .pax-flow-title{font-size:12px}
  [data-pax-a80] .pax-flow-track{height:44px}
  [data-pax-a80] .pax-flow-line{left:18px;right:18px}
  [data-pax-a80] .pax-ring{width:26px;height:26px;font-size:10px}
  [data-pax-a80] .pax-lab,[data-pax-a80] .pax-lab b{font-size:7px;letter-spacing:0.10em}
  [data-pax-a80] .pax-row{grid-template-columns:48px 1fr 64px;gap:6px;padding:9px 12px;font-size:10.5px}
  [data-pax-a80] .pax-row .pax-stat{display:none}
  [data-pax-a80] .pax-t{font-size:9.5px}
  [data-pax-a80] .pax-footer{padding:12px 14px;flex-wrap:wrap;gap:8px}
  [data-pax-a80] .pax-footer-total{font-size:24px}
}
@media (prefers-reduced-motion: reduce){
  [data-pax-a80] *,[data-pax-a80] *::before,[data-pax-a80] *::after{animation-duration:.001ms!important;transition-duration:.001ms!important}
}
`;
