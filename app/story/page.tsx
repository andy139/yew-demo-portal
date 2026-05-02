import Link from "next/link";
import MagicNumber from "@/components/MagicNumber";

export const metadata = {
  title: "Story | Yew",
  description:
    "Yew was built around a specific workflow problem at one auto shop. The math the cashier did every time, and the fix.",
};

export default function Page() {
  return (
    <article className="story-shell">
      <p className="label fade-up is-in">Story</p>
      <h1 className="story-h1 fade-up is-in" style={{ transitionDelay: "80ms" }}>
        Yew was built around <em className="display-em">one specific workflow problem</em> at one specific auto shop.
      </h1>

      <p>
        A&amp;C Auto Clinic, Bayview, San Francisco. Frank&apos;s shop. A 2014 Camry rolls in at eight in the morning with a brake job. By noon the work is done and the customer is back at the counter. ShopMonkey is open on the laptop in the back office. The PAX A80 card terminal sits next to the receipt printer. The two are not talking to each other.
      </p>
      <p>The cashier&apos;s actual sequence, every time:</p>
      <ol style={{ paddingLeft: 24, margin: "0 0 24px" }}>
        <li>Open ShopMonkey, find the work order, read the total off the screen.</li>
        <li>Ask the customer how they&apos;re paying.</li>
        <li>If cash, apply the 3% cash discount.</li>
        <li>Type the discounted figure into a calculator. Verify.</li>
        <li>Type the final number into the PAX A80 by hand.</li>
        <li>Run the card. Wait. Print the receipt.</li>
        <li>Walk back to ShopMonkey and mark the work order paid.</li>
      </ol>
      <p>Seven steps. Two screens. One calculator. Every customer.</p>

      <p>
        The math is not hard. It is just constant. A &#36;487.50 ticket becomes &#36;472.88. A &#36;1,204.16 ticket becomes &#36;1,168.04. None of that math lives inside the terminal. The PAX A80 only knows the number you typed. So the cashier types it. Per transaction. Every time.
      </p>

      <p>
        End of day, two batch totals: one off the terminal, one off ShopMonkey. They are supposed to match. They almost never do.
      </p>

      <p className="pull">
        &ldquo;I think we&apos;re <MagicNumber>&#36;42</MagicNumber> off somewhere. Doesn&apos;t matter. Bedtime.&rdquo;
      </p>

      <p>
        That was the line. The note went into a notebook. Nobody ever found the &#36;42. Frank&apos;s been a mechanic for over thirty years and running A&amp;C on that workflow for over a decade.
      </p>

      <p>
        ShopMonkey sells a way out of the typing. Its native integrated payments push the total straight to a terminal: no calculator, no double entry, no end-of-day mismatch. The catch is the rate. Switching to ShopMonkey&apos;s payments product would have cost A&amp;C roughly <strong>[$X/yr]</strong> more than what they pay through First American on Interchange-Plus.
      </p>

      <p>
        Yew threads the needle: ShopMonkey integration without the ShopMonkey markup. The cashier picks the work order in Yew, picks cash or card, and the price recalculates correctly. The terminal lives on the network, not glued to one machine. The end-of-day report reconciles itself, because both sides came from the same system.
      </p>

      <p>
        Andy sat behind that counter long enough to ring up a couple hundred customers. Long enough to do the cash-discount math by hand more times than anyone should. Long enough to see that the shop owner, Frank, shouldn&apos;t still be doing it on his own a decade in.
      </p>

      <p>
        The first version of Yew was for Frank: one shop, one cashier, one calculator we wanted to throw out a window. A&amp;C is customer zero. The next 50 are other family-run mechanic shops.
      </p>

      <p>
        Born and raised in San Francisco. Family ran. Yew is built here, for shops here.
      </p>

      <p style={{ color: "var(--muted)", fontStyle: "italic", marginTop: 32 }}>
        — Andy, founder
      </p>

      <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--rule)", display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/talk?audience=shop" className="btn-primary">
          Pilot your shop <span className="btn-arrow">→</span>
        </Link>
        <Link href="/demo" className="btn-secondary">
          See the live demo
        </Link>
      </div>
    </article>
  );
}
