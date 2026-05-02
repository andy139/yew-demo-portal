"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/the-software", label: "Software" },
  { href: "/demo", label: "Demo" },
  { href: "/savings", label: "Savings" },
  { href: "/the-gateway", label: "Gateway" },
  { href: "/shops", label: "Shops" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: "/story", label: "Story" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while drawer is open + close on ESC
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Auto-close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="nav">
        <div className="max-w-6xl mx-auto px-6 nav-inner">
          <Link href="/" className="nav-logo">
            <span className="word">
              yew<span className="dot">.</span><span className="sub">payments</span>
            </span>
          </Link>
          <nav className="nav-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/talk"
            className="btn-primary nav-talk-cta"
            style={{ padding: "10px 18px", fontSize: 13 }}
          >
            Talk to us
          </Link>
          <button
            type="button"
            className={`nav-burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mobile-drawer-inner">
          <nav className="mobile-drawer-links">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "active" : ""}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/talk"
            className="btn-accent"
            style={{ width: "100%", marginTop: 24, justifyContent: "center" }}
          >
            Talk to us <span className="btn-arrow">→</span>
          </Link>
          <p className="mobile-drawer-stamp">San Francisco · Est. 2026</p>
        </div>
      </div>
    </>
  );
}
