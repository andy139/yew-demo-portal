"use client";

import { useEffect, useRef, useState } from "react";

type Packet = { id: number; bay: number };
type LogRow = { id: number; bay: number; amt: number; svc: string; ts: string; state: "in" | "stay" | "out" };

const BAY_POS: Record<number, { x: number; y: number }> = {
  1: { x: 700, y: 60 },
  2: { x: 700, y: 145 },
  3: { x: 700, y: 230 },
  4: { x: 700, y: 315 },
};

const SVCS = ["Brake job", "Alignment", "Oil + filter", "Diagnostic", "Battery"];
const AMTS = [187.5, 248.0, 412.75, 89.95, 624.0, 156.4, 348.2, 92.5];

function nowStr() {
  const d = new Date();
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: false });
}

export default function GatewayDiagram() {
  const [packets, setPackets] = useState<Packet[]>([]);
  const [log, setLog] = useState<LogRow[]>([]);
  const idRef = useRef(0);
  const logIdRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function drop() {
      if (cancelled) return;
      const bay = 1 + Math.floor(Math.random() * 4);
      const id = ++idRef.current;
      setPackets((ps) => [...ps, { id, bay }]);

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setPackets((ps) => ps.filter((p) => p.id !== id));
          const logId = ++logIdRef.current;
          const amt = AMTS[Math.floor(Math.random() * AMTS.length)];
          const svc = SVCS[Math.floor(Math.random() * SVCS.length)];
          setLog((rows) => [
            { id: logId, bay, amt, svc, ts: nowStr(), state: "in" },
            ...rows.slice(0, 2).map((r) => ({ ...r, state: "stay" as const })),
          ]);
        }, 2400),
      );

      timers.push(setTimeout(drop, 3200 + Math.random() * 1800));
    }

    timers.push(setTimeout(drop, 800));
    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div className="diagram-card">
      <div className="diagram-head">
        <span className="label">Floor diagram · live</span>
        <div className="diagram-meta">
          <span className="live-dot" />
          <span>POSLink · 4 terminals</span>
          <span>·</span>
          <span>{packets.length} in flight</span>
        </div>
      </div>

      <svg viewBox="0 0 820 400" className="diagram-svg" aria-label="Floor diagram">
        <defs>
          <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Front counter */}
        <g>
          <rect x="60" y="155" width="160" height="80" rx="12" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1.5" />
          <text x="140" y="186" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" fill="#6B6760" letterSpacing="2">
            FRONT COUNTER
          </text>
          <text x="140" y="210" textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="14" fill="#1A1A1A">
            PC / laptop
          </text>
        </g>

        <line x1="220" y1="195" x2="380" y2="195" stroke="#D9D3C7" strokeWidth="1.5" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.4s" repeatCount="indefinite" />
        </line>

        <g>
          <rect x="380" y="165" width="180" height="62" rx="14" fill="#E8B84C" stroke="#D4A13A" strokeWidth="1.5" />
          <text x="470" y="190" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="10" fill="#1A1A1A" letterSpacing="2">
            YEW GATEWAY
          </text>
          <text x="470" y="212" textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="13" fill="#1A1A1A" fontStyle="italic">
            software, not a box
          </text>
        </g>

        {[1, 2, 3, 4].map((b) => {
          const pos = BAY_POS[b];
          return (
            <line
              key={`conn-${b}`}
              x1="560"
              y1="195"
              x2={pos.x}
              y2={pos.y + 22}
              stroke="#D9D3C7"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.4s" repeatCount="indefinite" />
            </line>
          );
        })}

        {[1, 2, 3, 4].map((b) => {
          const pos = BAY_POS[b];
          const lit = packets.some((p) => p.bay === b);
          return (
            <g key={`bay-${b}`}>
              <rect
                x={pos.x}
                y={pos.y}
                width="100"
                height="44"
                rx="10"
                fill={lit ? "#E8B84C" : "#FFFFFF"}
                stroke={lit ? "#D4A13A" : "#1A1A1A"}
                strokeWidth="1.5"
                style={{ transition: "fill 220ms cubic-bezier(0.16,1,0.3,1), stroke 220ms cubic-bezier(0.16,1,0.3,1)" }}
              />
              <text x={pos.x + 50} y={pos.y + 18} textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" fill="#6B6760" letterSpacing="2">
                BAY {b}
              </text>
              <text x={pos.x + 50} y={pos.y + 33} textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="11" fill="#1A1A1A">
                PAX A80
              </text>
            </g>
          );
        })}

        {packets.map((p) => {
          const pos = BAY_POS[p.bay];
          const path = `M200,195 L470,195 L${pos.x + 10},${pos.y + 22}`;
          return (
            <g key={p.id}>
              <circle r="7" fill="#E8B84C" filter="url(#packetGlow)" opacity="0">
                <animateMotion dur="2.4s" fill="freeze" path={path} />
                <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.1;0.85;1" dur="2.4s" fill="freeze" />
              </circle>
              <circle r="4" fill="#1A1A1A" opacity="0">
                <animateMotion dur="2.4s" fill="freeze" path={path} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.4s" fill="freeze" />
              </circle>
            </g>
          );
        })}

        <text x="305" y="180" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" fill="#8A4B2A" letterSpacing="2">
          CHARGE
        </text>
        <text x="630" y="180" textAnchor="middle" fontFamily="var(--font-mono), monospace" fontSize="9" fill="#8A4B2A" letterSpacing="2">
          DISPATCH
        </text>
      </svg>

      <div className="charge-log">
        {log.map((row) => (
          <div
            key={row.id}
            className={`row ${row.state === "in" || row.state === "stay" ? "is-on" : "is-out"}`}
          >
            <span>{row.ts}</span>
            <span>BAY {row.bay}</span>
            <span>{row.svc}</span>
            <span>
              <span className="amt">${row.amt.toFixed(2)}</span> · <span className="ok">approved ✓</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
