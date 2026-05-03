"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeroWorkOrder from "./HeroWorkOrder";

const WORDS = [
  { t: "Software" },
  { t: "for" },
  { t: "the" },
  { t: "family" },
  { t: "shop", em: true, br: true },
  { t: "you", em: true },
  { t: "actually", em: true },
  { t: "run.", em: true },
];

const SAVINGS_TARGET = 10800;

export default function HeroV2() {
  const [isIn, setIsIn] = useState(false);
  const [savings, setSavings] = useState(0);
  const [settled, setSettled] = useState(false);
  const statRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    let triggered = false;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || triggered) return;
        triggered = true;
        io.disconnect();
        const start = performance.now();
        const duration = 1200;
        function step(now: number) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setSavings(Math.round(SAVINGS_TARGET * eased));
          if (t < 1) {
            raf = requestAnimationFrame(step);
          } else {
            setSavings(SAVINGS_TARGET);
            // Settle pulse — brief scale + custard color flash on the
            // count-up's landing beat. Removes after 800ms so the number
            // returns to its resting style.
            setSettled(true);
            setTimeout(() => setSettled(false), 800);
          }
        }
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={`hero-v2 ${isIn ? "is-in" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="hero-v2-grid">
          <div className="hero-rail parallax-text">
            <div className="hero-stamp stamp">
              <span className="stamp-rule" />
              <span>San Francisco · Est. 2026 · No. 001</span>
            </div>

            <h1 className={`hero-h1-v2 ${isIn ? "is-in" : ""}`}>
              {WORDS.map((w, i) => (
                <span key={i}>
                  <span className="w">
                    <span
                      className={`w-i ${w.em ? "em" : ""}`}
                      style={{ transitionDelay: `${80 + i * 70}ms` }}
                    >
                      {w.t}
                    </span>
                  </span>
                  {w.br ? <br className="hero-br-md" /> : " "}
                </span>
              ))}
            </h1>

            <div className="hero-stat" ref={statRef}>
              <div className="num">
                <em className={settled ? "is-settle" : ""}>
                  ${savings.toLocaleString("en-US")}
                </em>
                <span className="num-per">/year</span>
              </div>
              <div className="stat-cap">
                what a shop doing $100k/month on 2.7% effective saves moving to First American Interchange-Plus through yew. A&amp;C runs at 1.68% all-in. Run your own statement through <Link href="/savings" className="stat-link">the calculator</Link>.
              </div>
            </div>

            <div className="hero-cta">
              <Link href="/demo" className="btn-primary">
                See the live demo <span className="btn-arrow">→</span>
              </Link>
              <Link href="/the-gateway" className="btn-secondary">
                How the gateway works
              </Link>
            </div>

            <div className="hero-proof">
              <span className="label">Customer zero</span>
              <p className="shops">
                <em>A&amp;C Auto Clinic</em>
                <span className="loc">Bayview, San Francisco</span>
              </p>
              <p className="proof-meta">
                The next 50 are other family-run mechanic shops. Pilot slots open now.
              </p>
            </div>
          </div>

          <div className="parallax-card" style={{ paddingTop: 64 }}>
            <HeroWorkOrder />
          </div>
        </div>
      </div>
    </section>
  );
}
