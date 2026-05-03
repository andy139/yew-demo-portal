"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  target: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  format?: "comma" | "plain";
  threshold?: number;
};

export default function CountUp({
  target,
  duration = 1100,
  decimals = 0,
  prefix = "",
  suffix = "",
  format = "comma",
  threshold = 0.3,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let triggered = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || triggered) return;
        triggered = true;
        io.disconnect();
        const start = performance.now();
        function step(now: number) {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setV(target * eased);
          if (t < 1) raf = requestAnimationFrame(step);
          else setV(target);
        }
        raf = requestAnimationFrame(step);
      },
      { threshold },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration, threshold]);

  const display =
    format === "comma"
      ? v.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : v.toFixed(decimals);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
