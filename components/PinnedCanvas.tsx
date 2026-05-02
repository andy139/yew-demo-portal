"use client";

import { useEffect, useRef, useState } from "react";

const FRAMES = [
  { id: 0, kind: "old", cap: "Calculator. Receipt book. Run to the back-office terminal." },
  { id: 1, kind: "old2", cap: "Type the total again. Wait. Sign. Walk back to the bay." },
  { id: 2, kind: "transit", cap: "Then we built the gateway." },
  { id: 3, kind: "new", cap: "One charge. From any computer. To any terminal." },
  { id: 4, kind: "new2", cap: "Settled to FAPS Interchange-Plus the next morning." },
] as const;

export default function PinnedCanvas() {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    let raf = 0;
    function update() {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const scrolled = -r.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      raf = 0;
    }
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const idx = Math.min(FRAMES.length - 1, Math.floor(progress * FRAMES.length));

  return (
    <div className="pin-shell" ref={shellRef}>
      <div className="pin-stage">
        <div className="pin-canvas">
          <div className="pin-side-stamp">
            <span>yew. · before / after</span>
            <span>
              {String(idx + 1).padStart(2, "0")} / {String(FRAMES.length).padStart(2, "0")}
            </span>
          </div>

          {FRAMES.map((f, i) => (
            <div key={f.id} className={`pin-frame ${i === idx ? "is-on" : ""}`}>
              <div className="frame-art">
                {f.kind === "old" && (
                  <div className="art-old">
                    <div className="art-calc">
                      <div className="lcd">487.50</div>
                      <div className="keys">
                        {["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", "0", ".", "=", "+"].map((k) => (
                          <span key={k}>{k}</span>
                        ))}
                      </div>
                    </div>
                    <div className="art-term">
                      <div style={{ color: "var(--text)", marginBottom: 8 }}>VeriFone Vx520</div>
                      AMOUNT? _____<br />
                      &gt; 487.50<br />
                      ENTER PIN.<br />
                      ...<br />
                      APPROVED · CODE 4127<br />
                      PRINT? Y/N
                    </div>
                  </div>
                )}
                {f.kind === "old2" && (
                  <div className="art-old">
                    <div className="art-term">
                      <div style={{ color: "var(--text)", marginBottom: 8 }}>End of day</div>
                      BATCH ID 0240501<br />
                      COUNT 14<br />
                      TOTAL $4,128.30<br />
                      DEPOSIT $4,086.30<br />
                      <br />
                      DELTA $42.00<br />
                      <span style={{ color: "var(--secondary)" }}>RECONCILE? Y/N</span>
                    </div>
                    <div
                      className="art-term"
                      style={{ background: "#FFFFFF", color: "var(--text)" }}
                    >
                      <div style={{ color: "var(--muted)", marginBottom: 8 }}>Kitchen table</div>
                      <span
                        style={{
                          fontFamily: "var(--font-display), serif",
                          fontStyle: "italic",
                          color: "var(--secondary)",
                          fontSize: 16,
                        }}
                      >
                        &ldquo;I think we&apos;re $42 off somewhere. Doesn&apos;t matter. Bedtime.&rdquo;
                      </span>
                    </div>
                  </div>
                )}
                {f.kind === "transit" && (
                  <div style={{ textAlign: "center", padding: "60px 20px" }}>
                    <div
                      className="stamp"
                      style={{ justifyContent: "center", marginBottom: 24 }}
                    >
                      <span className="stamp-rule" />
                      <span>Software, not a box</span>
                      <span className="stamp-rule" />
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), serif",
                        fontStyle: "italic",
                        color: "var(--secondary)",
                        fontSize: 36,
                        lineHeight: 1.2,
                      }}
                    >
                      Then we built the gateway.
                    </div>
                  </div>
                )}
                {f.kind === "new" && (
                  <div className="art-new">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        paddingBottom: 12,
                        borderBottom: "1px solid var(--rule)",
                        marginBottom: 8,
                      }}
                    >
                      <strong style={{ fontFamily: "var(--font-display), serif" }}>
                        RO #4127 · M. Hernandez
                      </strong>
                      <span className="label" style={{ fontSize: 10 }}>Bay 2</span>
                    </div>
                    <div className="row"><span>Brake job</span><span className="amt">$348.00</span></div>
                    <div className="row"><span>Alignment</span><span className="amt">$139.50</span></div>
                    <div className="row" style={{ fontWeight: 600 }}>
                      <span>Total</span>
                      <span className="amt">$487.50</span>
                    </div>
                    <button className="charge-btn">Charge to Bay 2 →</button>
                  </div>
                )}
                {f.kind === "new2" && (
                  <div className="art-new">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        paddingBottom: 12,
                        borderBottom: "1px solid var(--rule)",
                        marginBottom: 8,
                      }}
                    >
                      <strong style={{ fontFamily: "var(--font-display), serif" }}>
                        Settlement · 5/02
                      </strong>
                      <span
                        style={{
                          color: "var(--secondary)",
                          fontFamily: "var(--font-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                        }}
                      >
                        ● settled
                      </span>
                    </div>
                    <div className="row"><span>Gross</span><span className="amt">$4,128.30</span></div>
                    <div className="row">
                      <span>Interchange + assessments</span>
                      <span className="amt" style={{ color: "var(--muted)" }}>−$62.34</span>
                    </div>
                    <div className="row">
                      <span>yew. margin</span>
                      <span className="amt" style={{ color: "var(--muted)" }}>−$8.20</span>
                    </div>
                    <div className="row" style={{ fontWeight: 600 }}>
                      <span>Net deposit</span>
                      <span className="amt">$4,057.76</span>
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono), monospace",
                        letterSpacing: "0.06em",
                        marginTop: 12,
                      }}
                    >
                      Reconciled. No $42 off anywhere.
                    </div>
                  </div>
                )}
              </div>
              <div className="frame-cap">{f.cap}</div>
            </div>
          ))}

          <div className="pin-progress">
            <div className="pin-progress-bar" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
