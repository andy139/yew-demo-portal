import DemoEmbed from "@/components/DemoEmbed";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Live Demo | yew. payments",
  description:
    "A live, sandboxed yew. cashier console paired with a mock PAX A80. Fire scenarios, watch the wire, refresh hourly.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 demo-shell">
      <p className="label fade-up is-in">Console preview</p>
      <h1 className="gw-h1 fade-up is-in" style={{ transitionDelay: "80ms", maxWidth: "20ch" }}>
        The <em className="display-em">yew.</em> console, in preview.
      </h1>
      <p className="gw-lede fade-up is-in" style={{ transitionDelay: "200ms" }}>
        This is the cashier console A&amp;C will be running on. The screens, the layout, the flow are real. The data below is a sample shaped on a typical day — not a live feed yet. Live console + mock A80 wiring up this weekend.
      </p>

      <Reveal threshold={0.05}>

      <DemoEmbed />
      </Reveal>
    </div>
  );
}
