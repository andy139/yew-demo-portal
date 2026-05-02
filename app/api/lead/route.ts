import { NextResponse } from "next/server";

type LeadBody = {
  email?: string;
  audience?: "shop" | "partner" | string;
  payload?: Record<string, unknown>;
};

const OPS_NOTIFY_URL = process.env.OPS_NOTIFY_URL;
const OPS_INTERNAL_KEY = process.env.OPS_INTERNAL_KEY;

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  const email = (body.email || "").trim();
  const audience = (body.audience || "unknown").toString();
  const payload = body.payload ?? {};

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 400 });
  }

  // Always console-log so local dev sees the lead even without OPS env set.
  console.log("[lead]", { email, audience, payload, ts: new Date().toISOString() });

  // If ops endpoint configured, forward.
  if (OPS_NOTIFY_URL && OPS_INTERNAL_KEY) {
    try {
      const res = await fetch(OPS_NOTIFY_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-internal-key": OPS_INTERNAL_KEY,
        },
        body: JSON.stringify({
          channel: "demo-portal",
          source: "yew-demo-portal",
          email,
          audience,
          payload,
          ts: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        console.error("[lead] ops-notify failed", res.status);
      }
    } catch (e) {
      console.error("[lead] ops-notify error", e);
    }
  }

  return NextResponse.json({ ok: true });
}
