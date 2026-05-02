"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [link, setLink] = useState(false);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const active = pathname === "/";

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }
    let raf = 0;

    function onMove(e: MouseEvent) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
      const t = e.target as HTMLElement | null;
      const isLink = !!(t && t.closest("a, button, [data-link]"));
      setLink(isLink);
    }
    function onLeave() {
      setVisible(false);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    function tick() {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;
  return (
    <div
      ref={ref}
      className={`cursor-follow ${visible ? "is-visible" : ""} ${link ? "is-link" : ""}`}
      aria-hidden
    />
  );
}
