import Link from "next/link";
import MagicNumber from "@/components/MagicNumber";
import PinnedCanvas from "@/components/PinnedCanvas";

export const metadata = {
  title: "Story | yew. payments",
  description:
    "yew. was built around a specific workflow problem at one auto shop. The math the cashier did every time, and the fix.",
};

export default function Page() {
  return (
    <>
      <article className="story-shell editorial">
        <p className="label fade-up is-in">Story</p>
        <h1 className="story-h1 fade-up is-in" style={{ transitionDelay: "80ms" }}>
          <em className="display-em">yew.</em> was built around one specific workflow problem at one specific auto shop.
        </h1>

        <p>
          A&amp;C Auto Clinic, Bayview, San Francisco. Frank&apos;s shop. A 2014 Camry rolls in at eight in the morning with a brake job. By noon the work is done and the customer is back at the counter. ShopMonkey is open on the laptop in the back office. The PAX A80 card terminal sits next to the receipt printer. The two are not talking to each other.
        </p>

        <p>The cashier&apos;s actual sequence, every time:</p>

        <ol style={{ paddingLeft: 24, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 6 }}>
          <li>Open ShopMonkey, find the work order, read the total off the screen.</li>
          <li>Ask the customer how they&apos;re paying.</li>
          <li>If cash, apply the 3% cash discount, sometimes against the pre-tax subtotal, sometimes against the post-tax total, depending on how the order was written.</li>
          <li>Type the discounted figure into a calculator. Verify.</li>
          <li>Type the final number into the PAX A80 by hand.</li>
          <li>Run the card. Wait. Print the receipt.</li>
          <li>Walk back to ShopMonkey and mark the work order paid.</li>
        </ol>

        <p>Seven steps. Two screens. One calculator. Every customer.</p>

        <p>
          The math is not hard. It is just constant. Cash discount means listed price minus 3%, which the cashier owes the customer the moment they say &ldquo;cash.&rdquo; A $487.50 ticket becomes $472.88. A $1,204.16 ticket becomes $1,168.04. <em className="italic">Sometimes</em> the discount is on the subtotal and tax recomputes. <em className="italic">Sometimes</em> it&apos;s on the total. The rule depends on how the work order was written, and the cashier has to remember which.
        </p>

        <p>
          None of that math lives inside the terminal. The PAX A80 only knows the number you typed. So the cashier types it. Per transaction. Every time.
        </p>

        <p>
          End of day, two batch totals: one off the terminal, one off ShopMonkey. They are supposed to match. They almost never do. A typo on transaction four, a missed cash-discount on transaction nine, a refund on transaction eleven that got entered twice. The cashier prints both reports, lays them side by side, and hand-matches line items.
        </p>

        <p className="pull">
          The most common end-of-day at A&amp;C, long before I ever sat behind that counter, was a sentence that started with &ldquo;I think we&apos;re <MagicNumber>$42</MagicNumber> off somewhere.&rdquo;
        </p>

        <p>
          The note went into a notebook. Nobody ever found the $42. Frank&apos;s been a mechanic for over thirty years and running A&amp;C on that workflow for over a decade.
        </p>

        <p>
          ShopMonkey sells a way out of the typing. Its native integrated payments push the total straight to a terminal: no calculator, no double entry, no end-of-day mismatch. The catch is the rate. Switching to ShopMonkey&apos;s payments product would have cost A&amp;C roughly <strong>[$X/yr]</strong> more than what they pay through First American on Interchange-Plus. The convenience came priced as a tax on every card transaction for the rest of the shop&apos;s life.
        </p>

        <p>
          A&amp;C couldn&apos;t take the easy way out without giving up margin. So the typing continued.
        </p>

        <p>
          yew. threads the needle: ShopMonkey integration without the ShopMonkey markup. The cashier picks the work order in yew., picks <em className="italic">cash</em> or <em className="italic">card</em>, and the price recalculates correctly: discount applied, tax aligned, no calculator. The terminal lives on the network, not glued to one machine, so any computer in the shop can charge any bay&apos;s PAX A80. The end-of-day report reconciles itself, because both sides of the report came from the same system.
        </p>

        <p>
          Pricing stays on First American Interchange-Plus. The savings calculator on this site is the same math A&amp;C ran the day they switched.
        </p>

        <p>
          Andy sat behind that counter for less than three months. Long enough to ring up a couple hundred customers. Long enough to do the cash-discount math by hand more times than anyone should. Long enough to see that the shop owner, Frank, shouldn&apos;t still be doing it on his own a decade in.
        </p>

        <p>
          The first version of yew. was for Frank: one shop, one cashier, one calculator we wanted to throw out a window. A&amp;C is customer zero. The next 50 are other family-run mechanic shops. yew. is the company that ships software for them.
        </p>

        <p>
          Born and raised in San Francisco. Family ran. yew. is built here, for shops here. This isn&apos;t a YC pitch deck and it&apos;s not an AI vibes-coded MVP. It&apos;s a software company talking to shop owners on their floor, not their LinkedIn.
        </p>

        <p style={{ color: "var(--muted)", fontStyle: "italic", marginTop: 32 }}>— Andy, founder</p>
      </article>

      <div className="max-w-6xl mx-auto px-6">
        <PinnedCanvas />
      </div>

      <div
        className="max-w-6xl mx-auto px-6"
        style={{ marginTop: 56, paddingBottom: 64, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
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
