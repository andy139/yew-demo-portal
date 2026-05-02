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

export default function HeroV2() {
  const [isIn, setIsIn] = useState(false);
  const [statTriggered, setStatTriggered] = useState(false);
  const [dollars, setDollars] = useState(0);
  const statRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsIn(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStatTriggered(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!statTriggered) return;
    const start = performance.now();
    const target = 2.4;
    const duration = 1100;
    let raf = 0;
    function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDollars(target * eased);
      if (t < 1) raf = requestAnimationFrame(step);
      else setDollars(target);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [statTriggered]);

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
                <em>${dollars.toFixed(1)}M</em>
              </div>
              <div className="stat-cap">
                of Bay Area auto repair volume processed through Yew, year-to-date. Drop-in payments + console for shops who&apos;d rather work the counter than work the software.
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
              <span className="label">Now serving</span>
              <p className="shops">
                <em>A&amp;C Auto Clinic</em>
                <span>Bayview</span>
                <span>Mission Garage</span>
                <span>Sunset Motors</span>
                <span>Bayview Tire</span>
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
