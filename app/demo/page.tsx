import DemoEmbed from "@/components/DemoEmbed";

export const metadata = {
  title: "Live Demo | Yew",
  description:
    "A live, sandboxed Yew cashier console paired with a mock PAX A80. Fire scenarios, watch the wire, refresh hourly.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 demo-shell">
      <p className="label fade-up is-in">Live demo · refreshes every hour</p>
      <h1 className="gw-h1 fade-up is-in" style={{ transitionDelay: "80ms", maxWidth: "20ch" }}>
        The Yew console, <em className="display-em">running real charges</em>.
      </h1>
      <p className="gw-lede fade-up is-in" style={{ transitionDelay: "200ms" }}>
        This is the same dashboard our pilot shop, A&amp;C Auto Clinic, uses every day. Browse the screens. The numbers are real, the charges are real, only the names are masked.
      </p>

      <DemoEmbed />
    </div>
  );
}
