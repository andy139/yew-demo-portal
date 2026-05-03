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
  "/savings": {
    href: "/talk?audience=shop",
    label: "Send your statement",
    stamp: "Custom quote · no commitment",
  },
  "/the-gateway": {
    href: "/demo",
    label: "See the gateway in action",
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
  "/story": {
    href: "/talk?audience=shop",
    label: "Pilot your shop",
    stamp: "A&C · Bayview SF",
  },
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
      <Link href={cfg.href} className="btn-accent">
        {cfg.label} <span className="btn-arrow">→</span>
      </Link>
    </div>
  );
}
