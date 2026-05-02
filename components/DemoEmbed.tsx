"use client";

import { useState } from "react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
const MOCK_URL = process.env.NEXT_PUBLIC_MOCK_URL;

type Scenario = {
  name: string;
  label: string;
  endpoint: "send-test-sale" | "send-batch-close";
  body?: Record<string, unknown>;
};

const scenarios: Scenario[] = [
  { name: "approve-25", label: "Approve $25", endpoint: "send-test-sale", body: { amount: 2500, outcome: "approved" } },
  { name: "decline-1c", label: "Decline 1¢", endpoint: "send-test-sale", body: { amount: 1, outcome: "declined" } },
  { name: "stolen-card", label: "Stolen card", endpoint: "send-test-sale", body: { amount: 4900, outcome: "pickup" } },
  { name: "close-batch", label: "Close batch", endpoint: "send-batch-close" },
];

export default function DemoEmbed() {
  const [toast, setToast] = useState<string | null>(null);
  const [running, setRunning] = useState<string | null>(null);

  if (!APP_URL || !MOCK_URL) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-[color:var(--rule)] bg-white p-12 text-center">
          <p className="label mb-3">Status</p>
          <h2 className="font-display text-3xl mb-3">Live demo is deploying.</h2>
          <p className="text-[color:var(--muted)] max-w-lg mx-auto">
            The sandboxed cashier console + mock A80 simulator are spinning up on Vercel + Fly.io. Watch this space — or skip the wait and book a guided walkthrough.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="/talk?audience=investor" className="btn-primary">Book a guided demo →</a>
            <a href="/the-software" className="btn-secondary">See the software tour</a>
          </div>
        </div>
      </div>
    );
  }

  async function fire(s: Scenario) {
    setRunning(s.name);
    setToast(null);
    try {
      // Set scenario state on the mock first
      await fetch(`${MOCK_URL}/scenario`, {
        method: "POST",
        mode: "cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: s.name }),
      });
      // Then trigger
      const res = await fetch(`${MOCK_URL}/${s.endpoint}`, {
        method: "POST",
        mode: "cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(s.body ?? {}),
      });
      if (!res.ok) throw new Error("scenario-failed");
      setToast(`Fired: ${s.label}`);
    } catch {
      setToast(`Couldn't reach the mock. Refresh and retry.`);
    } finally {
      setRunning(null);
      setTimeout(() => setToast(null), 3500);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Top banner */}
      <div className="mb-4 flex items-center gap-3 rounded-xl border border-[color:var(--rule)] bg-[color:var(--accent)]/15 px-4 py-3">
        <span className="w-2 h-2 rounded-full bg-[color:var(--accent-deep)]" />
        <p className="text-sm">
          <span className="font-medium">Demo refreshes every hour.</span>{" "}
          <span className="text-[color:var(--muted)]">Try anything. Nothing here touches real money.</span>
        </p>
      </div>

      {/* iframe pair */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-[color:var(--rule)] bg-white overflow-hidden">
          <div className="px-4 py-2 border-b border-[color:var(--rule)] flex items-center justify-between">
            <span className="label">Cashier console</span>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="text-xs text-[color:var(--muted)] hover:text-[color:var(--text)]">
              Open ↗
            </a>
          </div>
          <iframe
            src={APP_URL}
            title="Yew cashier console"
            className="w-full h-[640px] bg-white"
          />
        </div>

        <div className="rounded-2xl border border-[color:var(--rule)] bg-white overflow-hidden">
          <div className="px-4 py-2 border-b border-[color:var(--rule)] flex items-center justify-between">
            <span className="label">Mock A80 terminal</span>
            <a href={MOCK_URL} target="_blank" rel="noreferrer" className="text-xs text-[color:var(--muted)] hover:text-[color:var(--text)]">
              Open ↗
            </a>
          </div>
          <iframe
            src={MOCK_URL}
            title="Mock PAX A80 terminal screen"
            className="w-full h-[640px] bg-white"
          />
        </div>
      </div>

      {/* Scenario panel */}
      <div className="mt-4 rounded-2xl border border-[color:var(--rule)] bg-white p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <p className="label">Try these scenarios</p>
          {toast ? (
            <span className="text-xs text-[color:var(--secondary)]">{toast}</span>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {scenarios.map((s) => (
            <button
              key={s.name}
              type="button"
              disabled={running === s.name}
              onClick={() => fire(s)}
              className="px-4 py-2 rounded-full border border-[color:var(--rule)] hover:border-[color:var(--text)] text-sm transition-colors disabled:opacity-60"
            >
              {running === s.name ? "Firing…" : s.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-[color:var(--muted)] mt-4">
          Each scenario sends a control frame to the mock terminal, then triggers a sale through the cashier console. Watch the right pane mirror what a real PAX A80 would show on the shop floor.
        </p>
      </div>
    </div>
  );
}
