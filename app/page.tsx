import SiteNav from "@/components/SiteNav";
import HeroVisual from "@/components/HeroVisual";
import MathSlider from "@/components/MathSlider";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import PaxA80Terminal from "@/components/PaxA80Terminal";

const ARROW = (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Reveal />
      <SiteNav />

      <main id="main">
        <section className="hero" aria-label="Hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow reveal" data-reveal>
                yew<span className="yew-dot">.</span> pay · san francisco
                &amp; bay area
              </span>

              <h1 className="reveal reveal-d1" data-reveal>
                Card payments for <em>auto shops</em>.
              </h1>

              <p className="sub reveal reveal-d2" data-reveal>
                <b>Honest rates.</b> Set up in person. Live in under an hour.
              </p>

              <div className="cta-row reveal reveal-d3" data-reveal>
                <a href="#book" className="cta-primary">
                  Book a setup call
                  {ARROW}
                </a>
                <a href="tel:14156060656" className="cta-secondary">
                  Or call <span className="phone num">415.606.0656</span>
                </a>
              </div>

              <div className="hero-trust reveal reveal-d4" data-reveal>
                <span className="dot" aria-hidden="true"></span>
                <span>
                  <b>Family-owned. Not AI.</b> We know your pain points &mdash;
                  not some VC or AI cold-calling your shop.
                </span>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="builton" aria-label="Built on">
          <div className="container">
            <div className="builton-row">
              <span className="builton-label">
                integrates with POSLink systems
              </span>
              <div className="builton-marks">
                <span className="builton-mark">
                  PAX <span className="sm">A80 · A920</span>
                </span>
                <span className="builton-mark">
                  <em>POSLink</em>
                </span>
                <span className="builton-mark">
                  <em>Shopmonkey</em>{" "}
                  <span className="sm">integrated</span>
                </span>
                <span className="builton-mark">
                  First American <em>Payment Systems</em>
                </span>
                <span className="builton-mark">
                  Tekmetric <span className="sm">soon</span>
                </span>
                <span className="builton-mark">
                  <em>AutoLeap</em> <span className="sm">soon</span>
                </span>
                <span className="builton-mark">
                  Mitchell1 <span className="sm">soon</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="promise" aria-label="Our promise">
          <div className="container">
            <div className="promise-grid">
              <div className="promise-item reveal" data-reveal>
                <div className="promise-k">No AI front desk.</div>
                <div className="promise-v">
                  When you call, a person picks up. When you email, a person
                  reads it. No bot, no &ldquo;I&apos;m an AI assistant.&rdquo;
                </div>
              </div>
              <div className="promise-item reveal reveal-d1" data-reveal>
                <div className="promise-k">Family-owned.</div>
                <div className="promise-v">
                  A San Francisco company. No VCs, no board, no quarterly
                  growth deck. We answer to the shops we serve.
                </div>
              </div>
              <div className="promise-item reveal reveal-d2" data-reveal>
                <div className="promise-k">We treat you seriously.</div>
                <div className="promise-v">
                  Industry-grade engineering and design. Built for you, not
                  in spite of you.
                </div>
              </div>
              <div className="promise-item reveal reveal-d3" data-reveal>
                <div className="promise-k">We ship with you.</div>
                <div className="promise-v">
                  We talk to shop owners every week and ship improvements fast.
                  You ask for it on Monday, you usually have it by the end of
                  the month.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="problem" aria-label="The problem">
          <div className="container">
            <span className="quote-mark reveal" data-reveal aria-hidden="true">
              &ldquo;
            </span>
            <p className="quote reveal reveal-d1" data-reveal>
              Most flat-rate processors take almost <em>3%</em> on
              every swipe. That&apos;s a transmission rebuild a year, gone.
            </p>
          </div>
        </section>

        <section className="what" id="what" aria-label="What you get">
          <div className="container">
            <span className="eyebrow reveal" data-reveal>
              what you get
            </span>
            <h2 className="h-section reveal reveal-d1" data-reveal>
              Three things, in <em>one box</em>.
            </h2>
            <p className="lede reveal reveal-d2" data-reveal>
              Hardware, rate, and a person on the phone. No upsells, no add-on
              modules, no annual review.
            </p>

            <div className="what-grid">
              <article className="card reveal reveal-d1" data-reveal>
                <span className="num">01 / Terminal</span>
                <h3>
                  The <em>PAX&nbsp;A80</em> on your counter.
                </h3>
                <p>
                  Countertop unit. Wi-Fi plus Ethernet. EMV chip plus tap.
                  Prints receipts. Ships pre-configured for your shop.
                </p>
                <p>
                  Talks to your shop network over <b>PAX POSLink</b>. Live
                  with <em>Shopmonkey</em>{" "}today &mdash; Tekmetric, AutoLeap,
                  and Mitchell1 are next.
                </p>
                <div className="meta">
                  <span className="chip green">Shopmonkey · live</span>
                  <span className="chip">POSLink</span>
                  <span className="chip custard">Tekmetric · soon</span>
                  <span className="chip custard">AutoLeap · soon</span>
                  <span className="chip custard">Mitchell1 · soon</span>
                </div>
              </article>

              <article className="card reveal reveal-d2" data-reveal>
                <span className="num">02 / Rate</span>
                <h3>
                  <em>Half a point</em> cheaper. At least.
                </h3>
                <p>
                  Most shops save <b>0.5 to 1 percentage point</b> versus
                  flat-rate processors at 2.7% to 2.9%. Real number depends
                  on your card mix.
                </p>
                <p>
                  Honest pricing on a single page. No surprise downgrades, no
                  junk fees, no annual rate review you have to remember to opt
                  out of.
                </p>
                <div className="meta">
                  <span className="chip green">save 0.5–1 pp</span>
                  <span className="chip">one-page rate sheet</span>
                  <span className="chip">no junk fees</span>
                </div>
              </article>

              <article className="card reveal reveal-d3" data-reveal>
                <span className="num">03 / Setup</span>
                <h3>
                  A human, on the <em>phone</em>.
                </h3>
                <p>
                  We walk you through plugging it in. By phone. Not by chatbot,
                  not by ticket queue.
                </p>
                <p>
                  Most shops are live and swiping in under an hour. If something
                  goes sideways, you call the same number.
                </p>
                <div className="meta">
                  <span className="chip custard">live in &lt; 1 hour</span>
                  <span className="chip">one phone number</span>
                  <span className="chip">real human</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="how" aria-label="How it works">
          <div className="container">
            <span className="eyebrow reveal" data-reveal>
              how it works
            </span>
            <h2 className="h-section reveal reveal-d1" data-reveal>
              Four steps. <em>No mystery</em>.
            </h2>

            <div className="steps">
              <div className="step reveal reveal-d1" data-reveal>
                <span className="step-num">01</span>
                <h4>Call us.</h4>
                <p>
                  30 minutes. We confirm you&apos;re a fit, walk through your
                  last statement, and quote a real rate.
                </p>
              </div>

              <div className="step reveal reveal-d2" data-reveal>
                <span className="step-num">02</span>
                <h4>We ship the terminal.</h4>
                <p>
                  Pre-configured for your shop. Wi-Fi credentials, business
                  name, receipt header, all set before it arrives.
                </p>
              </div>

              <div className="step reveal reveal-d3" data-reveal>
                <span className="step-num">03</span>
                <h4>
                  Plug it in. <em>Or I&apos;ll come do it.</em>
                </h4>
                <p>
                  We&apos;re on the phone with you while you plug it in. If
                  you&apos;d rather, I&apos;ll drive to your shop and set it up
                  on the counter myself. Bay Area, no charge. Outside the Bay,
                  we&apos;ll work it out.
                </p>
              </div>

              <div className="step reveal reveal-d4" data-reveal>
                <span className="step-num">04</span>
                <h4>You start swiping.</h4>
                <p>
                  Funds in your bank account next business day. No hold periods,
                  no surprise reserves.
                </p>
              </div>
            </div>

            <div className="how-callout reveal reveal-d4" data-reveal>
              <div className="how-callout-k">
                In-person setup, on the house.
              </div>
              <div className="how-callout-v">
                If you&apos;re in the Bay Area, I&apos;ll drive to your shop and
                install the terminal on your counter myself. Free. I&apos;ll
                stand there until your first swipe goes through. That&apos;s not
                a marketing promise, that&apos;s just how this works.
              </div>
            </div>
          </div>
        </section>

        <section className="math" aria-label="The math">
          <div className="container">
            <span className="eyebrow reveal" data-reveal>
              the math
            </span>
            <h2 className="h-section reveal reveal-d1" data-reveal>
              What <em>half a point</em> looks like.
            </h2>
            <p className="lede reveal reveal-d2" data-reveal>
              Half a percentage point sounds small. On a year of card volume
              it isn&apos;t.
            </p>

            <div className="math-grid">
              <div className="math-col reveal reveal-d1" data-reveal>
                <h4>Flat-rate processors</h4>
                <div className="rate">
                  2.7%<span className="pct"> to 2.9%</span>
                </div>
                <p>
                  On every swipe. Same rate whether the card is a debit basic or
                  a high-rewards card. You eat the difference.
                </p>
              </div>

              <div className="math-col win reveal reveal-d2" data-reveal>
                <h4>
                  yew<span className="yew-dot">.</span> pay
                </h4>
                <div className="rate">
                  <em>Around</em> 2%
                </div>
                <p>
                  At least a point cheaper, usually more. Real number depends on
                  your card mix. We&apos;ll show you the exact rate on the call.
                </p>
              </div>
            </div>

            <MathSlider />
          </div>
        </section>

        <section className="cz" id="customer-zero" aria-label="Customer zero">
          <div className="container">
            <span className="eyebrow reveal" data-reveal>
              customer zero
            </span>

            <div className="cz-grid">
              <div className="reveal reveal-d1" data-reveal>
                <PaxA80Terminal />
                <a
                  href="https://pay.yewsoftware.com"
                  rel="noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 20,
                    color: "var(--custard)",
                    fontWeight: 600,
                    fontSize: "14.5px",
                    letterSpacing: "-0.005em",
                    textDecoration: "none",
                  }}
                >
                  See it live on the counter
                  {ARROW}
                </a>
              </div>

              <div>
                <span className="cz-tag reveal" data-reveal>
                  <b>Customer zero.</b>
                </span>
                <h2 className="reveal reveal-d1" data-reveal>
                  A&amp;C Auto Clinic, the shop where the founder grew up{" "}
                  <em>watching the counter</em>.
                </h2>

                <blockquote className="reveal reveal-d2" data-reveal>
                  Replace with real quote.
                  <span className="who">
                    Owner. A&amp;C Auto Clinic. SF
                  </span>
                </blockquote>

                <div className="cz-stats reveal reveal-d3" data-reveal>
                  <div className="stat">
                    <div className="v num">
                      30+<em>yrs</em>
                    </div>
                    <div className="l">in business</div>
                  </div>
                  <div className="stat">
                    <div className="v num">
                      $110k<em>/mo</em>
                    </div>
                    <div className="l">card volume</div>
                  </div>
                  <div className="stat">
                    <div className="v num">
                      $13.2k<em>/yr</em>
                    </div>
                    <div className="l">saved since switching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="origin" id="origin" aria-label="Origin story">
          <div className="container">
            <span className="eyebrow reveal" data-reveal>
              ten years on the register at my dad&apos;s shop
            </span>
            <h2 className="h-section reveal reveal-d1" data-reveal>
              3% off the top. <em>Every swipe.</em>
              <br />
              For a decade.
            </h2>

            <div className="origin-grid">
              <div className="origin-photo reveal reveal-d1" data-reveal>
                <span className="ph-label">
                  photo · Andy at the counter, A&amp;C Auto Clinic
                  <b>Andy Tran, founder</b>
                </span>
              </div>

              <div className="reveal reveal-d2" data-reveal>
                <div className="body">
                  <p>
                    My dad runs an auto shop in SF. I went down recently and
                    watched him work — ringing customers up on an old{" "}
                    <em>PAX S80</em>, then re-keying the same totals into his
                    shop system <em>by hand</em>. Every ticket. Twice.
                  </p>
                  <p>
                    He&apos;d looked at consolidating onto Shopmonkey. The
                    bundled processing was <em>2.9% to 3.5%</em> — fixing the
                    double-entry meant paying a full point more on every
                    swipe. He was stuck.
                  </p>
                  <p>
                    I&apos;d spent three years as a software engineer at a
                    <em> CPQ company</em>, building tiered-pricing systems
                    for major electronic distributors. Interchange-plus is
                    the same shape of problem. So I built him one: terminal
                    that talks straight to the shop system over POSLink,{" "}
                    <em>IC+ pricing</em>, a real human on the phone.{" "}
                    <span
                      className="wordmark wordmark-pop reveal"
                      data-reveal
                      aria-label="yew. pay"
                    >
                      <span>yew</span>
                      <span className="dot" aria-hidden="true"></span>
                      <span className="sub">pay</span>
                    </span>{" "}
                    is what came out of it. Now we&apos;re rolling it out to
                    other shops too.
                  </p>
                </div>
                <div className="signoff">
                  Andy Tran. Founder. San Francisco.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing" aria-label="Pricing">
          <div className="container">
            <span className="eyebrow reveal" data-reveal>
              pricing, on one page
            </span>

            <div className="pricing-card reveal reveal-d1" data-reveal>
              <div className="big">
                <em>Half a point</em> cheaper than <em>you-know-who</em>.
                <br />
                Sometimes more, depending on your card mix.
              </div>
              <p className="sub">
                We&apos;ll send you a written rate sheet before you sign
                anything, in plain English, on one page. Terminal and software
                fees, if any, get spelled out there too &mdash; <b>no junk fees,
                no surprises.</b>
              </p>
              <p className="pricing-fine">
                Real number depends on your card mix. The full rate sheet is
                honest and printable. We&apos;ll walk you through it on the
                call.
              </p>
              <div className="cta-row pricing-cta-row">
                <a href="#book" className="cta-primary">
                  Book a setup call
                  {ARROW}
                </a>
                <a href="tel:14156060656" className="cta-secondary">
                  Or call <span className="phone num">415.606.0656</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq" aria-label="FAQ">
          <div className="container">
            <span className="eyebrow reveal" data-reveal>
              questions
            </span>
            <h2 className="h-section reveal reveal-d1" data-reveal>
              Answered <em>plainly</em>.
            </h2>

            <FAQ />
          </div>
        </section>

        <section className="final" id="book" aria-label="Book a call">
          <div className="container final-row">
            <div>
              <span
                className="eyebrow reveal"
                data-reveal
                style={{ color: "var(--custard)" }}
              >
                book a call
              </span>
              <h2 className="reveal reveal-d1" data-reveal>
                Book a 30-minute <em>setup call</em>.
              </h2>
            </div>
            <div className="reveal reveal-d2" data-reveal>
              <a
                href="tel:14156060656"
                style={{ display: "block", textDecoration: "none" }}
              >
                <span className="phone-line num">415.606.0656</span>
              </a>
              <span className="phone-sub">
                Or just call. <b>A real human picks up.</b> Not an AI, not a
                queue, not an offshore desk.
              </span>
              <div className="cta-row" style={{ marginTop: 24 }}>
                <a href="#" className="cta-primary">
                  Book online
                  {ARROW}
                </a>
                <a href="mailto:hello@yew.dev" className="cta-secondary">
                  Or email
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="foot">
          <div className="container">
            <div className="foot-row">
              <div className="foot-mark">
                <span className="wordmark">
                  <span>yew</span>
                  <span className="dot" aria-hidden="true"></span>
                  <span className="sub">pay</span>
                </span>
                <p>
                  A product of <em>yew<span className="yew-dot">.</span></em>,
                  a family-run software company in San Francisco. The
                  custard-colored dot is named for <em>Yvon</em>, the
                  founder&apos;s sister, after her favorite dessert.
                </p>
              </div>
              <div className="foot-cols">
                <div className="foot-col">
                  <h5>Product</h5>
                  <a href="#what">What you get</a>
                  <a href="#">Pricing</a>
                  <a href="#book">Book a call</a>
                </div>
                <div className="foot-col">
                  <h5>Company</h5>
                  <a href="#origin">About</a>
                  <a href="#">Work</a>
                  <a href="mailto:hello@yew.dev">Contact</a>
                </div>
                <div className="foot-col">
                  <h5>Legal</h5>
                  <a href="#">Privacy</a>
                  <a href="#">Terms</a>
                </div>
              </div>
            </div>
            <div className="foot-bottom">
              <span>
                © 2026 yew<span className="yew-dot">.</span> pay · San
                Francisco
              </span>
              <span>
                <em>
                  Built by a family. On the phone. For shops run by other
                  families.
                </em>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
