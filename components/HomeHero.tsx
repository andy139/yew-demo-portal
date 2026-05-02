"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeroWorkOrder from "./HeroWorkOrder";

export default function HomeHero() {
  const [heroIn, setHeroIn] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (textRef.current) textRef.current.style.transform = `translateY(${-y * 0.15}px)`;
        if (cardRef.current) cardRef.current.style.transform = `translateY(${-y * 0.08}px)`;
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`hero ${heroIn ? "is-in" : ""}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="hero-grid">
          <div ref={textRef} style={{ willChange: "transform" }}>
            <p className="label hero-eyebrow">
              <span className="live-dot" />
              Yew · payments + software for family auto shops
            </p>
            <h1 className={`hero-h1 font-display ${heroIn ? "is-in" : ""}`}>
              <span className="line"><span className="line-inner">Payments and</span></span>
              <span className="line"><span className="line-inner">software for</span></span>
              <span className="line"><span className="line-inner"><em className="display-em">family</em> auto shops.</span></span>
            </h1>
            <p className="hero-sub">
              Built for the way your shop actually rings up customers. Charge from any bay. Settle next day. No reader rental. Optional ShopMonkey integration.
            </p>
            <div className="hero-cta-row">
              <Link href="/demo" className="btn-primary">
                Try the live demo <span className="btn-arrow">→</span>
              </Link>
              <Link href="/savings" className="btn-secondary">
                Calculate your savings
              </Link>
            </div>
            <p className="hero-foot">
              Live in production with a paying shop, San Francisco. Bay Area? We come to you for the demo.
            </p>
          </div>
          <div ref={cardRef} style={{ willChange: "transform" }}>
            <HeroWorkOrder />
          </div>
        </div>
      </div>
    </section>
  );
}
