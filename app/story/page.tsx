import Link from "next/link";

export const metadata = {
  title: "Story | Yew",
  description:
    "Yew was built around a specific workflow problem at one auto shop. The math the cashier did every time, and the fix.",
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <p className="label mb-6">Story</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight">
        Yew was built around one specific workflow problem at one specific auto shop.
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--text)]/90">
        {/* 1. The scene */}
        <p>
          A&amp;C Auto Clinic, Bayview, San Francisco. Frank&apos;s shop. A 2014 Camry rolls in at eight in the morning with a brake job. By noon the work is done and the customer is back at the counter. ShopMonkey is open on the laptop in the back office. The PAX A80 card terminal sits next to the receipt printer. The two are not talking to each other.
        </p>
        <p>
          The cashier&apos;s actual sequence, every time:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-[color:var(--text)]/90">
          <li>Open ShopMonkey, find the work order, read the total off the screen.</li>
          <li>Ask the customer how they&apos;re paying.</li>
          <li>If cash, apply the 3% cash discount, sometimes against the pre-tax subtotal, sometimes against the post-tax total, depending on how the order was written.</li>
          <li>Type the discounted figure into a calculator. Verify.</li>
          <li>Type the final number into the PAX A80 by hand.</li>
          <li>Run the card. Wait. Print the receipt.</li>
          <li>Walk back to ShopMonkey and mark the work order paid.</li>
        </ol>
        <p>
          Seven steps. Two screens. One calculator. Every customer.
        </p>

        {/* 2. The math */}
        <p>
          The math is not hard. It is just constant. Cash discount means listed price minus 3%, which the cashier owes the customer the moment they say &ldquo;cash.&rdquo; A &#36;487.50 ticket becomes &#36;472.88. A &#36;1,204.16 ticket becomes &#36;1,168.04. <em className="italic">Sometimes</em> the discount is on the subtotal and tax recomputes. <em className="italic">Sometimes</em> it&apos;s on the total. The rule depends on how the work order was written, and the cashier has to remember which.
        </p>
        <p>
          None of that math lives inside the terminal. The PAX A80 only knows the number you typed. So the cashier types it. Per transaction. Every time.
        </p>

        {/* 3. The reconciliation */}
        <p>
          End of day, two batch totals: one off the terminal, one off ShopMonkey. They are supposed to match. They almost never do. A typo on transaction four, a missed cash-discount on transaction nine, a refund on transaction eleven that got entered twice. The cashier prints both reports, lays them side by side, and hand-matches line items.
        </p>
        <p>
          The most common end-of-day at A&amp;C, long before I ever sat behind that counter, was a sentence that started with <em className="italic">&ldquo;I think we&apos;re &#36;42 off somewhere.&rdquo;</em> The note went into a notebook. Nobody ever found the &#36;42. Frank&apos;s been running the shop on that workflow for over a decade.
        </p>

        {/* 4. The native-terminal trap */}
        <p>
          ShopMonkey sells a way out of the typing. Its native integrated payments push the total straight to a terminal: no calculator, no double entry, no end-of-day mismatch. The catch is the rate. Switching to ShopMonkey&apos;s payments product would have cost A&amp;C roughly <strong>[$X/yr]</strong> more than what they pay through First American on Interchange-Plus. The convenience came priced as a tax on every card transaction for the rest of the shop&apos;s life.
        </p>
        <p>
          A&amp;C couldn&apos;t take the easy way out without giving up margin. So the typing continued.
        </p>

        {/* 5. The fix */}
        <p>
          Yew threads the needle: ShopMonkey integration without the ShopMonkey markup. The cashier picks the work order in Yew, picks <em className="italic">cash</em> or <em className="italic">card</em>, and the price recalculates correctly: discount applied, tax aligned, no calculator. The terminal lives on the network, not glued to one machine, so any computer in the shop can charge any bay&apos;s PAX A80. The end-of-day report reconciles itself, because both sides of the report came from the same system.
        </p>
        <p>
          Pricing stays on First American Interchange-Plus. The savings calculator on this site is the same math A&amp;C ran the day they switched.
        </p>

        {/* 6. Why this matters for Yew */}
        <p>
          Andy sat behind that counter for less than three months. Long enough to ring up a couple hundred customers. Long enough to do the cash-discount math by hand more times than anyone should. Long enough to see that the shop owner, Frank, shouldn&apos;t still be doing it on his own a decade in.
        </p>
        <p>
          The first version of Yew was for Frank: one shop, one cashier, one calculator we wanted to throw out a window. A&amp;C is customer zero. The next 50 are other family-run mechanic shops. Yew is the company that ships software for them.
        </p>
        <p>
          Born and raised in San Francisco. Family ran. Yew is built here, for shops here. This isn&apos;t a YC pitch deck and it&apos;s not an AI vibes-coded MVP. It&apos;s a software company talking to shop owners on their floor, not their LinkedIn.
        </p>
      </div>

      <div className="mt-16 pt-10 border-t border-[color:var(--rule)] flex flex-wrap gap-3">
        <Link href="/talk?audience=shop" className="btn-primary">Pilot your shop →</Link>
        <Link href="/demo" className="btn-secondary">See the live demo</Link>
      </div>
    </article>
  );
}
