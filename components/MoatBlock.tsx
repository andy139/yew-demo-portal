"use client";

import Link from "next/link";
import InView from "./InView";

export default function MoatBlock() {
  return (
    <InView className="max-w-6xl mx-auto px-6 section" threshold={0.2}>
      {(moatIn) => (
        <div className="moat">
          <div className={`fade-up ${moatIn ? "is-in" : ""}`}>
            <span className="label">The moat</span>
            <h2 className="section-h2" style={{ marginTop: 12 }}>
              Most software in this category puts the cashier on a tablet.{" "}
              <em className="display-em">Yew puts the terminals on the network.</em>
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginTop: 20,
                maxWidth: "44ch",
                lineHeight: 1.6,
              }}
            >
              Charge from any bay. Reprint a receipt from the front counter. Reconcile from home. The Yew gateway makes every PAX A80 in the shop addressable from any computer on the LAN.
            </p>
            <Link
              href="/the-gateway"
              className="btn-secondary"
              style={{ marginTop: 28 }}
            >
              See how the gateway works <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div
            className={`compare-card fade-up ${moatIn ? "is-in" : ""}`}
            style={{ transitionDelay: moatIn ? "180ms" : "0ms" }}
          >
            <span className="label" style={{ display: "block", marginBottom: 14 }}>
              Compare
            </span>
            <ul className="compare-list">
              <li>
                <span>Mitchell1 SE</span>
                <span className="right">back-office walk required</span>
              </li>
              <li>
                <span>Tekmetric / Shopmonkey</span>
                <span className="right">tablet-bound, one terminal per tablet</span>
              </li>
              <li className="is-yew">
                <span>Yew</span>
                <span className="right">any computer drives any terminal</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </InView>
  );
}
