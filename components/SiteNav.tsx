"use client";

import { useEffect, useState } from "react";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="container nav-row">
        <a href="#" className="wordmark nav-mark" aria-label="yew. payments home">
          <span>yew</span>
          <span className="dot" aria-hidden="true"></span>
          <span className="sub">payments</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a
            href="https://demo.yewsoftware.com"
            target="_blank"
            rel="noopener"
            className="nav-demo hide-sm"
          >
            <span className="pulse" aria-hidden="true"></span>see it live
          </a>
          <a href="#what" className="hide-sm">
            payments
          </a>
          <a href="#origin" className="hide-sm">
            about
          </a>
          <a
            href="https://app.yew.software/"
            className="nav-signin"
            target="_blank"
            rel="noopener"
          >
            sign in
          </a>
          <a href="#book" className="nav-cta">
            book a call
          </a>
        </nav>
      </div>
    </header>
  );
}
