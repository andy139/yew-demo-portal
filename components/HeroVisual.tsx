"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      const tx = cx * 14;
      const ty = cy * 10;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        img.style.transform = `translate(${tx}px, ${ty}px) rotateX(${
          -cy * 4
        }deg) rotateY(${cx * 4}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      img.style.transform = "";
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-visual reveal reveal-d2" data-reveal ref={wrapRef}>
      <Image
        ref={imgRef}
        src="/a80.png"
        alt="PAX A80 payment terminal"
        className="hero-img"
        width={1462}
        height={1130}
        priority
      />
      <span className="hero-tag" aria-hidden="true">
        <span className="pulse"></span>
        PAX A80 · live
      </span>
    </div>
  );
}
