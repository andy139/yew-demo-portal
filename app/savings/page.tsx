import Link from "next/link";
import SavingsCalculator from "@/components/SavingsCalculator";

export const metadata = {
  title: "Savings | Yew",
  description:
    "Calculate what you'd save on FAPS Interchange-Plus through Yew, against your current effective rate.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">Savings</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        Your $1,000 ticket costs <em className="italic text-[color:var(--secondary)]">$9.50 less</em> to settle.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        Plug in your numbers. We&apos;ll show the delta against the FAPS Interchange-Plus benchmark. no headline rate, no commitment.
      </p>

      <div className="mt-16">
        <SavingsCalculator />
      </div>

      {/* Why no headline rate */}
      <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="label mb-4">Why no headline rate?</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug">
            Because <em className="italic text-[color:var(--secondary)]">your statement</em> is what we&apos;d quote against.
          </h2>
        </div>
        <div className="text-[color:var(--muted)] space-y-4">
          <p>
            Card processing pricing is tiered, conditional, and full of fine print. We&apos;ve seen shops paying anywhere from 1.6% to 3.4% effective on the same volume. A flat headline rate is meaningless. it either prices us out of low-rate shops or leaves money on the table at high-rate ones.
          </p>
          <p>
            Send us your most recent processor statement. We&apos;ll send back a real Interchange-Plus quote, line by line, with the exact savings on your actual mix.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/talk?audience=shop" className="btn-primary">Send your statement →</Link>
        <Link href="/the-software" className="btn-secondary">See the software</Link>
      </div>
    </div>
  );
}
