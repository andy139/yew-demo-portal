"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { line: "RO #4127 · M. Hernandez 2018 Camry", step: "Created", time: "12:14p" },
  { line: "Brake job + alignment · $487.50", step: "Charged", time: "12:14p" },
  { line: "→ Bay 2 terminal · approved ✓", step: "Approved", time: "12:14p" },
  { line: "Settled to FAPS · Interchange-Plus", step: "Settled", time: "next day" },
];

export default function HeroWorkOrder() {
  const [tick, setTick] = useState(0);
  const [loop, setLoop] = useState(0);
  const [pulseIdx, setPulseIdx] = useState(-1);
  const [total, setTotal] = useState(0);
  const offsets = useRef([0, 80, -60, 120]);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function runLoop(loopNum: number) {
      const off = offsets.current[loopNum % 4];
      setTick(0);
      setTotal(0);
      setPulseIdx(-1);

      timers.push(setTimeout(() => !cancelled && setTick(1), 800 + off));
      timers.push(setTimeout(() => !cancelled && setTick(2), 1700 + off));
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setTick(3);
          setPulseIdx(2);
          timers.push(setTimeout(() => setPulseIdx(-1), 700));
        }, 2600 + off),
      );
      timers.push(setTimeout(() => !cancelled && setTick(4), 3700 + off));

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          const start = performance.now();
          const target = 487.5;
          const step = (now: number) => {
            if (cancelled) return;
            const t = Math.min(1, (now - start) / 800);
            const eased = 1 - Math.pow(1 - t, 3);
            setTotal(target * eased);
            if (t < 1) requestAnimationFrame(step);
            else setTotal(target);
          };
          requestAnimationFrame(step);
        }, 1700 + off),
      );

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setLoop((l) => l + 1);
          runLoop(loopNum + 1);
        }, 6800 + off),
      );
    }

    runLoop(0);
    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div className="wo-wrap">
      <div className="wo-glow" aria-hidden />
      <div className="wo-card">
        <div className="wo-head">
          <div className="wo-head-left">
            <span className="wo-dot" />
            <span className="label" style={{ fontSize: 10 }}>Work order · Bay 2</span>
          </div>
          <span className="label" style={{ fontSize: 10 }}>Live · loop {loop + 1}</span>
        </div>
        <div className="wo-body">
          <div className="wo-ro">
            RO #4127 <span className="muted">· M. Hernandez</span>
          </div>
          <div className="wo-meta">2018 Camry · LIC 8XYE423</div>
          <ul className="wo-list">
            {items.map((s, i) => {
              const on = tick > i;
              const pulse = pulseIdx === i;
              return (
                <li
                  key={i}
                  className={`wo-item ${on ? "is-on" : ""} ${pulse ? "is-pulse" : ""}`}
                >
                  <span className="wo-bullet" />
                  <div>
                    <div className="wo-line">{s.line}</div>
                    <div className="wo-step">{s.step}</div>
                  </div>
                  <span className="wo-time">✓ {s.time}</span>
                </li>
              );
            })}
          </ul>
          <div className="wo-rail">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={tick > i ? "is-on" : ""} />
            ))}
          </div>
          <div className="wo-total">
            <span className="label">Total</span>
            <span className="wo-total-amt">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
