"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: (inView: boolean) => ReactNode;
  className?: string;
  threshold?: number;
};

export default function InView({ children, className, threshold = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {children(inView)}
    </div>
  );
}
