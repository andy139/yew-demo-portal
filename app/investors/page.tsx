import Link from "next/link";

export const metadata = {
  title: "For investors | Yew",
  description:
    "Yew is family auto shops, finally on modern software. The wedge, the math, where we're going.",
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="label mb-6">For investors and partners</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        Yew is family auto shops, finally on modern software.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        The independent auto repair industry in the US is roughly 250,000 shops. Most are family-run. Most are on software they bought a decade ago. Toast did this for restaurants. Yew is doing it for the wrench-side of Main Street.
      </p>

      {/* Wedge */}
      <div className="mt-16 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <p className="label mb-4">The wedge</p>
        <p className="font-display text-2xl md:text-3xl leading-tight max-w-2xl">
          One shop in San Francisco. One paying customer. One workflow nobody else in the category fixes.
        </p>
        <p className="text-[color:var(--muted)] mt-5 max-w-2xl">
          Frank runs A&amp;C Auto Clinic in the Bayview. Before Yew: every card sale meant reading totals off ShopMonkey, doing 3% cash-discount math on a calculator, typing the result into a PAX A80 by hand. End of day, two reports never matched. He kept a notebook of <em className="italic">&ldquo;we&apos;re &#36;42 off somewhere.&rdquo;</em>
        </p>
        <p className="text-[color:var(--muted)] mt-4 max-w-2xl">
          Yew fixes the workflow without giving up the margin. We resell First American on Interchange-Plus, layer the software on top, and integrate with ShopMonkey for shops that want both. <Link href="/story" className="underline decoration-[color:var(--secondary)] underline-offset-2">Read the full origin →</Link>
        </p>
      </div>

      {/* Plan */}
      <div className="mt-10 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <p className="label mb-6">Where we&apos;re going</p>
        <ul className="space-y-5">
          <li className="grid md:grid-cols-12 gap-4 items-baseline">
            <span className="label md:col-span-2">Year 0</span>
            <span className="md:col-span-10 text-[color:var(--text)]/90">One shop live, paying customer. A&amp;C, today.</span>
          </li>
          <li className="grid md:grid-cols-12 gap-4 items-baseline">
            <span className="label md:col-span-2">Year 1</span>
            <span className="md:col-span-10 text-[color:var(--text)]/90">~50 family-run mechanic shops on Yew, resold through First American.</span>
          </li>
          <li className="grid md:grid-cols-12 gap-4 items-baseline">
            <span className="label md:col-span-2">Year 2</span>
            <span className="md:col-span-10 text-[color:var(--text)]/90">Graduate to a direct processor (Finix). Take rate expands. Software ARR compounds.</span>
          </li>
        </ul>
      </div>

      {/* What we're looking for */}
      <div className="mt-10 rounded-2xl border border-[color:var(--rule)] bg-white p-8 md:p-10">
        <p className="label mb-6">Who we want to talk to</p>
        <ul className="space-y-4 text-[color:var(--text)]/90">
          <li className="flex gap-3">
            <span className="text-[color:var(--secondary)] mt-1">·</span>
            <span><span className="font-medium">Family-shop owners</span> who already know the workflow problem and want to switch. Drop a statement, get a real quote.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[color:var(--secondary)] mt-1">·</span>
            <span><span className="font-medium">FAPS reps</span> who want a software product to bring to their book. Splits negotiable, deal-reg honored.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[color:var(--secondary)] mt-1">·</span>
            <span><span className="font-medium">Investors</span> who like Toast / ServiceTitan-shaped vertical SaaS with payments built in.</span>
          </li>
        </ul>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/talk?audience=investor" className="btn-primary">Talk to us →</Link>
        <Link href="/story" className="btn-secondary">Read the origin</Link>
      </div>
    </div>
  );
}
