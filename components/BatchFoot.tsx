"use client";

import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/": "Index",
  "/demo": "Demo",
  "/savings": "Savings",
  "/the-gateway": "The Gateway",
  "/story": "Story",
  "/the-software": "Software",
  "/the-kit": "The Kit",
  "/shops": "Shops",
  "/partners": "Partners",
  "/investors": "Investors",
  "/talk": "Talk",
};

const ORDER = Object.keys(TITLES);

export default function BatchFoot() {
  const pathname = usePathname();
  const idx = Math.max(0, ORDER.indexOf(pathname));
  const no = String(idx + 1).padStart(3, "0");
  const title = TITLES[pathname] || "404";

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="batch-foot">
        <span>yew. payments · SF · Est. 2026</span>
        <span className="batch-no">No. {no} · {title}</span>
        <span>Counter-side software</span>
      </div>
    </div>
  );
}
