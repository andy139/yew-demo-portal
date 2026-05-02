import Link from "next/link";

const links = [
  { href: "/the-software", label: "Software" },
  { href: "/demo", label: "Live Demo" },
  { href: "/savings", label: "Savings" },
  { href: "/the-kit", label: "The Kit" },
  { href: "/the-gateway", label: "The Gateway" },
  { href: "/shops", label: "For shops" },
  { href: "/partners", label: "For partners" },
  { href: "/story", label: "Story" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] border-b border-[color:var(--rule)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight text-[color:var(--text)] group-hover:text-[color:var(--secondary)] transition-colors">
            Yew
          </span>
          <span className="label hidden sm:inline">demo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[color:var(--text)]/80 hover:text-[color:var(--text)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/talk" className="btn-primary !py-2 !px-4 text-sm">
          Talk to us
        </Link>
      </div>
    </header>
  );
}
