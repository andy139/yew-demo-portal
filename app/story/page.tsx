import Link from "next/link";

export const metadata = {
  title: "Story — Yew",
  description:
    "Yew is named for Andy's sister Yvon. The yew tree means resilience. The product is software for the real economy.",
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <p className="label mb-6">Story</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight">
        I worked the counter <em className="italic text-[color:var(--secondary)]">before I wrote the software.</em>
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--text)]/90">
        <p>
          I&apos;m Andy. Yew is named after my sister Yvon — the yew tree, in Celtic tradition, means resilience. That&apos;s the brand and that&apos;s the bet.
        </p>

        <p>
          For years I worked the counter at A&amp;C Auto Clinic, my dad&apos;s independent repair shop in the Bayview, San Francisco. I rang up customers. I ran cards on a 2009 terminal that still had the carbon-paper imprinter taped to the side. I walked to the back office every time someone wanted to pay with a card from the waiting room.
        </p>

        <p>
          When I started writing the software, I didn&apos;t start with parts catalogs or technician scheduling. I started with the cashier. The receipt printer. The card swipe. The thirty-foot walk back to the manager&apos;s desk. The shop owner squinting at a Square dashboard at midnight trying to figure out why one batch was short.
        </p>

        <p>
          Most software in this category is built by people who&apos;ve toured a shop floor. Yew is built by someone who clocked in on one. That&apos;s the difference, and it&apos;s the only thing I&apos;m really selling.
        </p>

        <p>
          A&amp;C is customer zero. We measure savings against a real prior-processor statement — not a hypothetical, not a model. The calculator on the /savings page is the same math I showed my dad the day we switched.
        </p>

        <p>
          Yew is going to expand — tire shops are next, then detail shops — but the playbook stays the same. Pick a vertical with paper-receipt economics. Show up with software a cashier would actually use. Wrap modern payments around it.
        </p>

        <p>
          Software for the real economy. That&apos;s the whole brief.
        </p>
      </div>

      <div className="mt-16 pt-10 border-t border-[color:var(--rule)] flex flex-wrap gap-3">
        <Link href="/talk?audience=investor" className="btn-primary">Talk to Andy →</Link>
        <Link href="/demo" className="btn-secondary">See the live demo</Link>
      </div>
    </article>
  );
}
