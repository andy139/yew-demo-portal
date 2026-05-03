import { Suspense } from "react";
import BookingButtons from "@/components/BookingButtons";

export const metadata = {
  title: "Talk to us | yew. payments",
  description: "Three doors: pilot your shop, become a partner, or talk to investors.",
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="label mb-6">Talk to us</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-3xl">
        Three doors. Pick the one that fits.
      </h1>
      <p className="text-lg text-[color:var(--muted)] mt-6 max-w-2xl">
        Every form goes straight to the team. Replies usually within a business day, Pacific time.
      </p>
      <p className="text-base text-[color:var(--muted)] mt-3 max-w-2xl">
        <span className="font-medium text-[color:var(--text)]">Bay Area shops:</span> Andy will drive to you and run the demo on your counter. No Zoom, no slides, no remote screenshare. Mention your zip code on the form.
      </p>

      <div className="mt-16">
        <Suspense
          fallback={
            <div className="text-[color:var(--muted)] text-sm">Loading…</div>
          }
        >
          <BookingButtons />
        </Suspense>
      </div>

      <div className="mt-20 rounded-2xl border border-[color:var(--rule)] bg-white p-6 sm:p-8 md:p-10">
        <p className="label mb-3">Prefer email?</p>
        <p
          className="font-display"
          style={{
            fontSize: "clamp(18px, 5.6vw, 28px)",
            overflowWrap: "anywhere",
            lineHeight: 1.2,
          }}
        >
          <a href="mailto:andy@yewsoftware.com" className="hover:text-[color:var(--secondary)] transition-colors">
            andy@yewsoftware.com
          </a>
        </p>
        <p className="text-[color:var(--muted)] mt-2 text-sm">
          Mention which door you&apos;re coming through (shop · partner · investor) so the reply goes to the right person.
        </p>
      </div>
    </div>
  );
}
