"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustStrip() {
  const partnersRef = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = partnersRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="trust">
      <div className="max-w-6xl mx-auto px-6 trust-inner">
        <div>
          <span className="trust-live">
            <span className="live-dot" />
            <span className="label">Customer zero</span>
          </span>
          <p className="trust-headline">
            <em className="display-em">A&amp;C Auto Clinic</em>, Bayview SF.
          </p>
          <p className="trust-meta">Born and raised in San Francisco. Family ran.</p>
        </div>
        <div className="trust-partners-wrap" ref={partnersRef}>
          <span className="label trust-partners-label">Built on</span>
          <div className={`trust-partners fade-up ${shown ? "is-in" : ""}`}>
            <span>FIRST AMERICAN PAYMENT SYSTEMS</span>
            <span>·</span>
            <span>PAX TECHNOLOGY</span>
            <span>·</span>
            <span>SHOPMONKEY</span>
            <span>·</span>
            <span>NEON</span>
          </div>
        </div>
      </div>
    </section>
  );
}
