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

const txns = [
  { id: "ch_4127", ro: "RO #4127 · M. Hernandez", svc: "Brake job + alignment", amt: 487.5, status: "ok", time: "12:14 PM" },
  { id: "ch_4126", ro: "RO #4126 · J. Park", svc: "Oil + filter", amt: 89.95, status: "ok", time: "11:42 AM" },
  { id: "ch_4125", ro: "RO #4125 · D. Reyes", svc: "Battery + diagnostic", amt: 314.2, status: "ok", time: "11:08 AM" },
  { id: "ch_4124", ro: "RO #4124 · S. Wong", svc: "Tire rotation", amt: 64.0, status: "pend", time: "10:51 AM" },
  { id: "ch_4123", ro: "RO #4123 · L. Brewer", svc: "AC service", amt: 248.0, status: "ok", time: "10:22 AM" },
];

function FallbackPreview() {
  const [active, setActive] = useState("transactions");
  return (
    <div className="max-w-6xl mx-auto px-6 demo-shell">
      <div className="demo-banner">
        <span className="live-dot" />
        Preview · live console + mock A80 wiring up this weekend
      </div>

      <div className="demo-frame">
        <div className="demo-side">
          <div className="group label">Operate</div>
          {[
            ["Transactions", "transactions"],
            ["Batches", "batches"],
            ["Invoices", "invoices"],
          ].map(([n, k]) => (
            <div
              key={k}
              className={`item ${active === k ? "is-active" : ""}`}
              onClick={() => setActive(k)}
            >
              {n}
            </div>
          ))}
          <div className="group label">Configure</div>
          {[
            ["Terminals", "terminals"],
            ["Webhooks", "webhooks"],
            ["Audit log", "audit"],
          ].map(([n, k]) => (
            <div
              key={k}
              className={`item ${active === k ? "is-active" : ""}`}
              onClick={() => setActive(k)}
            >
              {n}
            </div>
          ))}
        </div>
        <div className="demo-main">
          <h3>
            {active === "transactions"
              ? "Transactions · today"
              : active.charAt(0).toUpperCase() + active.slice(1)}
          </h3>
          <p>
            {active === "transactions"
              ? "5 charges · 1 pending. Net to be deposited tomorrow."
              : "Browse this view in the live console."}
          </p>

          {active === "transactions" && (
            <>
              <div className="stats">
                <div className="stat">
                  <div className="l">Volume today</div>
                  <div className="v">$1,203.65</div>
                </div>
                <div className="stat">
                  <div className="l">Transactions</div>
                  <div className="v">5</div>
                </div>
                <div className="stat">
                  <div className="l">Avg ticket</div>
                  <div className="v">$240.73</div>
                </div>
              </div>
              <div className="table-scroll">
                <table style={{ minWidth: 540 }}>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Repair order</th>
                      <th>Service</th>
                      <th style={{ textAlign: "right" }}>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {txns.map((t) => (
                      <tr key={t.id}>
                        <td>{t.time}</td>
                        <td>{t.ro}</td>
                        <td style={{ color: "var(--muted)" }}>{t.svc}</td>
                        <td className="amt" style={{ textAlign: "right" }}>
                          ${t.amt.toFixed(2)}
                        </td>
                        <td>
                          <span className={`pill ${t.status}`}>
                            <span className="dot" />
                            {t.status === "ok" ? "approved" : "pending"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      <p style={{ marginTop: 24, fontSize: 13, color: "var(--muted)", maxWidth: "60ch" }}>
        Live sandboxed cashier console + mock A80 are spinning up on Vercel + Fly.io. The view above mirrors the production console at A&amp;C.{" "}
        <a href="/talk?audience=shop" style={{ color: "var(--secondary)" }}>
          Book a guided demo →
        </a>
      </p>
    </div>
  );
}

export default function DemoEmbed() {
  const [toast, setToast] = useState<string | null>(null);
  const [running, setRunning] = useState<string | null>(null);

  if (!APP_URL || !MOCK_URL) {
    return <FallbackPreview />;
  }

  async function fire(s: Scenario) {
    setRunning(s.name);
    setToast(null);
    try {
      await fetch(`${MOCK_URL}/scenario`, {
        method: "POST",
        mode: "cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: s.name }),
      });
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
    <div className="max-w-6xl mx-auto px-6 demo-shell">
      <div className="demo-banner">
        <span className="live-dot" />
        Live preview · sandboxed. Nothing here touches real money.
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-6">
        <div className="rounded-2xl border border-[color:var(--rule)] bg-white overflow-hidden">
          <div className="px-4 py-2 border-b border-[color:var(--rule)] flex items-center justify-between">
            <span className="label">Cashier console</span>
            <a href={APP_URL} target="_blank" rel="noreferrer" className="text-xs text-[color:var(--muted)] hover:text-[color:var(--text)]">
              Open ↗
            </a>
          </div>
          <iframe src={APP_URL} title="Yew cashier console" className="w-full h-[640px] bg-white" />
        </div>

        <div className="rounded-2xl border border-[color:var(--rule)] bg-white overflow-hidden">
          <div className="px-4 py-2 border-b border-[color:var(--rule)] flex items-center justify-between">
            <span className="label">Mock A80 terminal</span>
            <a href={MOCK_URL} target="_blank" rel="noreferrer" className="text-xs text-[color:var(--muted)] hover:text-[color:var(--text)]">
              Open ↗
            </a>
          </div>
          <iframe src={MOCK_URL} title="Mock PAX A80 terminal screen" className="w-full h-[640px] bg-white" />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-[color:var(--rule)] bg-white p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <p className="label">Try these scenarios</p>
          {toast ? <span className="text-xs text-[color:var(--secondary)]">{toast}</span> : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {scenarios.map((s) => (
            <button
              key={s.name}
              type="button"
              disabled={running === s.name}
              onClick={() => fire(s)}
              className="btn-secondary"
              style={{ padding: "8px 16px", fontSize: 13 }}
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
