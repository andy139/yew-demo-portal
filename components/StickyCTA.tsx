"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  if (pathname !== "/") return null;
  return (
    <div className={`sticky-cta ${shown ? "is-shown" : ""}`}>
      <span className="stamp">
        <span className="stamp-rule" />
        San Francisco · Est. 2026
      </span>
      <Link href="/demo" className="btn-accent">
        See the live demo <span className="btn-arrow">→</span>
      </Link>
    </div>
  );
}
