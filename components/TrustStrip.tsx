export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="max-w-6xl mx-auto px-6 trust-inner">
        <div>
          <span className="trust-live">
            <span className="live-dot" />
            <span className="label">Now serving</span>
          </span>
          <p className="trust-headline">
            <em className="display-em">Bay Area</em> auto shops.
          </p>
          <p className="trust-meta">Born and raised in San Francisco. Family ran.</p>
        </div>
        <div className="trust-partners">
          <span>FIRST AMERICAN PAYMENT SYSTEMS</span>
          <span>·</span>
          <span>PAX TECHNOLOGY</span>
          <span>·</span>
          <span>SHOPMONKEY</span>
          <span>·</span>
          <span>NEON</span>
        </div>
      </div>
    </section>
  );
}
