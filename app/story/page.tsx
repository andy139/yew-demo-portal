import Link from "next/link";
import MagicNumber from "@/components/MagicNumber";
import PinnedCanvas from "@/components/PinnedCanvas";

export const metadata = {
  title: "Story | yew. payments",
  description:
    "Yew was built around a specific workflow problem at one auto shop. The math the cashier did every time, and the fix.",
};

export default function Page() {
  return (
    <>
      <article className="story-shell editorial">
        <p className="label fade-up is-in">The story</p>
        <h1 className="story-h1 fade-up is-in" style={{ transitionDelay: "80ms" }}>
          I worked the front counter. <em className="display-em">Then I built Yew.</em>
        </h1>
        <p>
          My family ran an auto shop in the Bayview. I cashed out customers on a Mitchell1 SE terminal that lived at my dad&apos;s desk. Every card sale was a 30-foot walk and a fresh signature.
        </p>
        <p>
          We tried Tekmetric. The cashier app lived on a tablet that paired with one reader. So charging from a different station meant unpairing, walking, repairing — or buying another tablet. We bought another tablet.
        </p>
        <p>
          At end of day my dad would print the batch report and sit at the kitchen table reconciling against the deposit, like he&apos;d done since 1994. Some nights it took an hour.
        </p>
        <p className="pull">
          &ldquo;I think we&apos;re <MagicNumber>$42</MagicNumber> off somewhere. Doesn&apos;t matter. Bedtime.&rdquo;
        </p>
        <p>
          That was the line. He said it almost every night. $42 is what a software company gets to fix.
        </p>
        <p>
          Yew is the thing I wish we&apos;d had. Every terminal on the network. Every charge addressable from anywhere. Settlement that adds up the first time. Built by someone who has actually swiped a greasy card on a Friday at 5:55pm — because I have.
        </p>
        <p style={{ color: "var(--muted)", fontStyle: "italic" }}>— Andy, founder</p>
      </article>

      <div className="max-w-6xl mx-auto px-6">
        <PinnedCanvas />
      </div>

      <div className="max-w-6xl mx-auto px-6" style={{ marginTop: 56, paddingBottom: 64, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/talk?audience=shop" className="btn-primary">
          Pilot your shop <span className="btn-arrow">→</span>
        </Link>
        <Link href="/demo" className="btn-secondary">
          See the live demo
        </Link>
      </div>
    </>
  );
}
