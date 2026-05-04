"use client";

import { useEffect, useState } from "react";

const DELTA_RATE = 0.0075;
const MONTHS = 12;
const LONG_TERM_YEARS = 5;

function fmtUSD(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export default function MathSlider() {
  const [k, setK] = useState(80);

  const monthly = k * 1000;
  const yearly = monthly * MONTHS * DELTA_RATE;
  const fiveYr = yearly * LONG_TERM_YEARS;

  // Avoid hydration mismatch on the formatted strings.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="slider-wrap reveal reveal-d3" data-reveal>
      <div className="slider-head">
        <h4>Your monthly card volume</h4>
        <div className="vol">
          <span>{mounted ? fmtUSD(monthly) : "$80,000"}</span>
          <span className="per">/ month</span>
        </div>
      </div>
      <input
        type="range"
        className="slider"
        min={20}
        max={300}
        step={5}
        value={k}
        onChange={(e) => setK(parseInt(e.target.value, 10))}
        aria-label="Monthly card volume in thousands of dollars"
      />
      <div className="slider-axis">
        <span>$20k</span>
        <span>$80k</span>
        <span>$150k</span>
        <span>$300k</span>
      </div>

      <div className="savings-card">
        <div>
          <div className="lbl">You&apos;d save, per year</div>
          <div className="val">
            <span>{mounted ? fmtUSD(yearly) : "$7,200"}</span>
            <span className="yr">/ year</span>
          </div>
        </div>
        <div>
          <div className="lbl">Over five years</div>
          <div className="val">
            <span>{mounted ? fmtUSD(fiveYr) : "$36,000"}</span>
          </div>
        </div>
      </div>

      <p className="slider-caption">
        Real number depends on your card mix. We&apos;ll show you the exact rate
        on the call.
      </p>
    </div>
  );
}
