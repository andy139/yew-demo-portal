import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--rule)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-xl text-[color:var(--text)]">Yew</p>
          <p className="text-[color:var(--muted)] mt-2 max-w-xs italic">
            Software for yew.
          </p>
        </div>
        <div>
          <p className="label mb-3">Product</p>
          <ul className="space-y-2 text-[color:var(--text)]/80">
            <li><Link href="/the-kit">The Kit</Link></li>
            <li><Link href="/the-gateway">The Gateway</Link></li>
            <li><Link href="/the-software">Software</Link></li>
            <li><Link href="/savings">Savings</Link></li>
            <li><Link href="/demo">Live Demo</Link></li>
          </ul>
        </div>
        <div>
          <p className="label mb-3">Audience</p>
          <ul className="space-y-2 text-[color:var(--text)]/80">
            <li><Link href="/shops">Family auto shops</Link></li>
            <li><Link href="/partners">Channel partners</Link></li>
          </ul>
        </div>
        <div>
          <p className="label mb-3">Company</p>
          <ul className="space-y-2 text-[color:var(--text)]/80">
            <li><Link href="/story">Story</Link></li>
            <li><Link href="/talk">Talk to us</Link></li>
            <li><a href="https://yewsoftware.com" target="_blank" rel="noreferrer">yewsoftware.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--rule)]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-[color:var(--muted)]">
          <p>© {year} Yew. Built in San Francisco.</p>
          <p className="label !text-[10px]">Counter-side software</p>
        </div>
      </div>
    </footer>
  );
}
