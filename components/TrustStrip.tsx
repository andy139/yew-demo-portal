export default function TrustStrip() {
  const partners = ["First American Payment Systems", "PAX Technology", "Shopmonkey", "Neon"];
  return (
    <section className="border-y border-[color:var(--rule)] bg-white/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6">
          <div>
            <p className="label mb-2">Now serving</p>
            <p className="font-display text-lg">
              <span className="text-[color:var(--secondary)] italic">Bay Area</span> auto shops.
            </p>
            <p className="text-sm text-[color:var(--muted)] mt-2">
              Born and raised in San Francisco. Family ran.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            {partners.map((p) => (
              <span
                key={p}
                className="text-xs text-[color:var(--muted)] tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
