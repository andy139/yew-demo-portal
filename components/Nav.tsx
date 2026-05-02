"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/the-software", label: "Software" },
  { href: "/demo", label: "Demo" },
  { href: "/savings", label: "Savings" },
  { href: "/the-gateway", label: "Gateway" },
  { href: "/shops", label: "Shops" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: "/story", label: "Story" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="nav">
      <div className="max-w-6xl mx-auto px-6 nav-inner">
        <Link href="/" className="nav-logo">
          <span className="word">
            yew<span className="dot">.</span>
          </span>
          <span className="label" style={{ fontSize: 9 }}>payments</span>
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/talk"
          className="btn-primary"
          style={{ padding: "10px 18px", fontSize: 13 }}
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
