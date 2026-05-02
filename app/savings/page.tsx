import Link from "next/link";
import SavingsCalculator from "@/components/SavingsCalculator";

export const metadata = {
  title: "Savings | yew. payments",
  description:
    "Calculate what you'd save on FAPS Interchange-Plus through yew., against your current effective rate.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <p className="label fade-up is-in">Savings calculator</p>
      <h1 className="gw-h1 fade-up is-in" style={{ transitionDelay: "80ms" }}>
        How much would you save on{" "}
        <em className="display-em">FAPS Interchange-Plus</em>?
      </h1>
      <p className="gw-lede fade-up is-in" style={{ transitionDelay: "200ms" }}>
        Punch in your numbers. We&apos;ll math the delta against the typical First American Interchange-Plus rate for auto repair (1.8% all-in). A&amp;C&apos;s actual statement runs 1.68%. No commitment, no hidden setup.
      </p>

      <SavingsCalculator />

      <div className="moat" style={{ marginTop: 96 }}>
        <div>
          <span className="label">Why no headline rate?</span>
          <h2 className="section-h2" style={{ marginTop: 12 }}>
            Because <em className="display-em">your statement</em> is what we&apos;d quote against.
          </h2>
        </div>
        <div style={{ color: "var(--muted)", lineHeight: 1.6, fontSize: 15 }}>
          <p style={{ marginBottom: 16 }}>
            Card processing pricing is tiered, conditional, and full of fine print. We&apos;ve seen shops paying anywhere from 1.6% to 3.4% effective on the same volume. A flat headline rate is meaningless: it either prices us out of low-rate shops or leaves money on the table at high-rate ones.
          </p>
          <p>
            Send us your most recent processor statement. We&apos;ll send back a real Interchange-Plus quote, line by line, with the exact savings on your actual mix.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 56, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/talk?audience=shop" className="btn-primary">
          Send your statement <span className="btn-arrow">→</span>
        </Link>
        <Link href="/the-software" className="btn-secondary">
          See the software
        </Link>
      </div>
    </div>
  );
}
