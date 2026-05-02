import DemoEmbed from "@/components/DemoEmbed";

export const metadata = {
  title: "Live Demo — Yew",
  description:
    "A live, sandboxed Yew cashier console paired with a mock PAX A80. Fire scenarios, watch the wire, refresh hourly.",
};

export default function Page() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 pt-20">
        <p className="label mb-6">Live sandbox</p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-4xl">
          A real console. A mock A80. <em className="italic text-[color:var(--secondary)]">Fire whatever you want.</em>
        </h1>
        <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
          Pre-loaded with the A&amp;C demo shop and three demo terminals. Hit a scenario button, watch the right pane mirror what a real PAX A80 would show on the shop floor. State resets at the top of every hour.
        </p>
      </section>

      <DemoEmbed />

      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-8">
          <p className="label mb-3">What you&apos;re looking at</p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-medium mb-1">Left: cashier console</p>
              <p className="text-[color:var(--muted)]">
                The same Yew app a counter person uses. Pick a repair order, pick a terminal, charge. This instance is sandboxed — no real money moves.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">Right: mock PAX A80</p>
              <p className="text-[color:var(--muted)]">
                A faithful simulator of the actual terminal we ship — same prompts, same frames, same approval flow. Hosted on Fly.io.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">Below: scenarios</p>
              <p className="text-[color:var(--muted)]">
                Pre-canned situations so you don&apos;t have to learn the UI. Approve, decline, stolen-card pickup, batch close.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
