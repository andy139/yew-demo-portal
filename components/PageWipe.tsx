"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageWipe() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-wiping");
    void el.offsetWidth;
    el.classList.add("is-wiping");
  }, [pathname]);

  return <div ref={ref} className="page-wipe" aria-hidden />;
}
