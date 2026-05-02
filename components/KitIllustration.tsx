type Kind = "terminal" | "gateway" | "console";

export default function KitIllustration({ kind }: { kind: Kind }) {
  if (kind === "terminal") return <Terminal />;
  if (kind === "gateway") return <Gateway />;
  return <Console />;
}

/** PAX A80 silhouette — countertop card terminal */
function Terminal() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" aria-label="PAX A80 terminal illustration">
      <rect width="400" height="300" fill="#F4F1EB" />
      {/* Body */}
      <rect x="120" y="40" width="160" height="220" rx="14" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="1" />
      {/* Screen */}
      <rect x="135" y="60" width="130" height="80" rx="6" fill="#E8B84C" />
      <text x="200" y="98" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="11" fill="#1A1A1A" fontWeight="600">YEW</text>
      <text x="200" y="116" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#1A1A1A" letterSpacing="2">$487.50</text>
      {/* Keypad */}
      {Array.from({ length: 12 }).map((_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <circle
            key={i}
            cx={155 + col * 45}
            cy={170 + row * 22}
            r="7"
            fill="#3A3A3A"
            stroke="#5A5A5A"
            strokeWidth="0.5"
          />
        );
      })}
      {/* Card slot hint */}
      <rect x="140" y="245" width="120" height="3" fill="#5A5A5A" rx="1" />
    </svg>
  );
}

/** Yew gateway — software / installer iconography */
function Gateway() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" aria-label="Yew gateway illustration">
      <rect width="400" height="300" fill="#F4F1EB" />
      {/* Computer monitor */}
      <rect x="80" y="60" width="240" height="150" rx="8" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="80" y="60" width="240" height="22" rx="8" fill="#1A1A1A" />
      {/* Window dots */}
      <circle cx="94" cy="71" r="3" fill="#E8B84C" />
      <circle cx="106" cy="71" r="3" fill="#8A4B2A" />
      <circle cx="118" cy="71" r="3" fill="#D9D3C7" />
      {/* Installer progress */}
      <text x="200" y="115" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="10" fill="#6B6760" letterSpacing="2">INSTALLING YEW GATEWAY</text>
      <rect x="120" y="135" width="160" height="8" rx="4" fill="#D9D3C7" />
      <rect x="120" y="135" width="115" height="8" rx="4" fill="#E8B84C" />
      <text x="200" y="165" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#6B6760">detecting LAN…</text>
      <text x="200" y="180" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#6B6760">found 3 PAX A80 terminals</text>
      <text x="200" y="195" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="#8A4B2A">registering…</text>
      {/* Stand */}
      <rect x="180" y="210" width="40" height="20" fill="#1A1A1A" />
      <rect x="160" y="228" width="80" height="6" rx="2" fill="#1A1A1A" />
    </svg>
  );
}

/** Yew console — browser window with cashier UI */
function Console() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" aria-label="Yew console illustration">
      <rect width="400" height="300" fill="#F4F1EB" />
      {/* Browser frame */}
      <rect x="40" y="40" width="320" height="220" rx="10" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="40" y="40" width="320" height="28" rx="10" fill="#1A1A1A" />
      <circle cx="56" cy="54" r="3.5" fill="#E8B84C" />
      <circle cx="68" cy="54" r="3.5" fill="#8A4B2A" />
      <circle cx="80" cy="54" r="3.5" fill="#D9D3C7" />
      {/* URL bar */}
      <rect x="100" y="46" width="240" height="16" rx="3" fill="#3A3A3A" />
      <text x="110" y="58" fontFamily="ui-monospace, monospace" fontSize="9" fill="#9A9A9A">yew.app/cashier</text>
      {/* Header strip */}
      <rect x="40" y="68" width="320" height="32" fill="#F4F1EB" />
      <text x="58" y="88" fontFamily="ui-monospace, monospace" fontSize="9" fill="#6B6760" letterSpacing="2">CASHIER · BAY 2</text>
      <rect x="290" y="76" width="55" height="16" rx="8" fill="#1A1A1A" />
      <text x="317" y="87" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#F4F1EB" letterSpacing="1">CHARGE</text>
      {/* Work order rows */}
      <rect x="40" y="100" width="320" height="160" fill="#FFFFFF" />
      {[0, 1, 2].map((i) => {
        const y = 115 + i * 38;
        return (
          <g key={i}>
            <line x1="56" x2="344" y1={y - 8} y2={y - 8} stroke="#D9D3C7" strokeWidth="0.8" />
            <text x="56" y={y + 6} fontFamily="Georgia, serif" fontSize="11" fill="#1A1A1A">RO #{4127 + i}</text>
            <text x="120" y={y + 6} fontFamily="Inter, sans-serif" fontSize="9" fill="#6B6760">Brake job + alignment</text>
            <text x="320" y={y + 6} textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="10" fill="#1A1A1A">${[487, 1204, 312][i]}.{[50, 16, 90][i]}</text>
            <text x="344" y={y + 6} textAnchor="end" fontFamily="ui-monospace, monospace" fontSize="9" fill={i === 0 ? "#8A4B2A" : "#9AA3AD"}>{i === 0 ? "✓" : i === 1 ? "•" : "·"}</text>
          </g>
        );
      })}
    </svg>
  );
}
