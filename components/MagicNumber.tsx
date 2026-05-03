"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function MagicNumber({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let triggered = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !triggered) {
          triggered = true;
          el.classList.add("is-pop");
          setTimeout(() => el.classList.remove("is-pop"), 900);
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className="magic-num">
      {children}
    </span>
  );
}
