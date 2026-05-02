import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="max-w-6xl mx-auto px-6 foot-inner">
        <div>
          <span className="foot-mark">
            yew<span className="dot">.</span>
          </span>
          <p className="foot-tag">Software for yew.</p>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><Link href="/the-kit">The Kit</Link></li>
            <li><Link href="/the-gateway">The Gateway</Link></li>
            <li><Link href="/the-software">Software</Link></li>
            <li><Link href="/savings">Savings</Link></li>
            <li><Link href="/demo">Live Demo</Link></li>
          </ul>
        </div>
        <div>
          <h4>Audience</h4>
          <ul>
            <li><Link href="/shops">Family auto shops</Link></li>
            <li><Link href="/partners">Channel partners</Link></li>
            <li><Link href="/investors">Investors</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/story">Story</Link></li>
            <li><Link href="/talk">Talk to us</Link></li>
            <li><a href="https://yewsoftware.com" target="_blank" rel="noreferrer">yewsoftware.com</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 foot-bottom">
        <p>© {year} Yew. Born and Raised in San Francisco. Family ran.</p>
        <p className="label" style={{ fontSize: 10 }}>Counter-side software</p>
      </div>
    </footer>
  );
}
