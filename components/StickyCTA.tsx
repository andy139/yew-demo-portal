"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Cta = { href: string; label: string; stamp?: string };

const ROUTE_CTA: Record<string, Cta> = {
  "/": {
    href: "/demo",
    label: "See the live demo",
    stamp: "San Francisco · Est. 2026",
  },
  "/shops": {
    href: "/talk?audience=shop",
    label: "Pilot your shop",
    stamp: "Bay Area · in-shop demo",
  },
  "/partners": {
    href: "/talk?audience=partner",
    label: "Become a partner",
    stamp: "FAPS reps · resellers",
  },
  "/investors": {
    href: "/talk?audience=investor",
    label: "Set up a call",
    stamp: "30-min walkthrough",
  },
  // /savings intentionally excluded — the calculator IS the conversion
  // form with its own 'Send my statement' button. A sticky CTA sitting
  // next to that button reads as duplicate noise on phones.
  "/the-gateway": {
    // Page already has 'See the gateway in action →' as its bottom CTA,
    // so the sticky uses different verb to avoid the duplicate-label
    // moment when both are visible at the same scroll position.
    href: "/demo",
    label: "Try the live demo",
    stamp: "Live preview",
  },
  "/the-kit": {
    href: "/talk?audience=shop",
    label: "Ask about the kit",
    stamp: "FAPS-eligible · drop-in",
  },
  "/the-software": {
    href: "/demo",
    label: "Try the live demo",
    stamp: "6 screens · 60s install",
  },
  // /story intentionally excluded — it's an editorial reading experience.
  // The pull-quote ('I think we're $42 off somewhere. Doesn't matter.
  // Bedtime.') sits at viewport-bottom positions during scroll and the
  // sticky CTA was covering it on phones. The page already has explicit
  // 'Pilot your shop' CTAs at the bottom of the article.
};

export default function StickyCTA() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShown(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cfg = ROUTE_CTA[pathname];
  if (!cfg) return null;

  return (
    <div className={`sticky-cta ${shown ? "is-shown" : ""}`}>
      {cfg.stamp ? (
        <span className="stamp">
          <span className="stamp-rule" />
          {cfg.stamp}
        </span>
      ) : null}
      <Link href={cfg.href} className="btn-accent" aria-label={cfg.label}>
        <span className="sticky-cta-label">{cfg.label}</span>
        <span className="btn-arrow">→</span>
      </Link>
    </div>
  );
}
