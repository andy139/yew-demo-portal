"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const steps = [
  { id: 0, label: "Created", time: "12:14p", line: "RO #4127 · Andy's Camry" },
  { id: 1, label: "Charged", time: "12:14p", line: "Brake job + alignment · $487.50" },
  { id: 2, label: "Approved", time: "12:14p", line: "→ Bay 2 terminal · approved" },
  { id: 3, label: "Settled", time: "next day", line: "Settled to FAPS · Interchange-Plus" },
];

export default function HeroWorkOrder() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % (steps.length + 1));
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute -inset-6 bg-gradient-to-br from-[color:var(--accent)]/20 via-transparent to-transparent blur-2xl" aria-hidden />
      <div className="relative bg-white rounded-2xl border border-[color:var(--rule)] shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(26,26,26,0.18)] overflow-hidden">
        <div className="px-5 py-3 border-b border-[color:var(--rule)] flex items-center justify-between bg-[color:var(--bg)]/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[color:var(--accent)]" />
            <span className="label !text-[10px]">Work order · Bay 2</span>
          </div>
          <span className="label !text-[10px]">Live</span>
        </div>

        <div className="p-6">
          <p className="font-display text-xl text-[color:var(--text)]">
            RO #4127 <span className="text-[color:var(--muted)] text-base">· Andy&apos;s Camry</span>
          </p>
          <p className="text-sm text-[color:var(--muted)] mt-1">2018 · LIC 8XYE423</p>

          <ul className="mt-6 space-y-3">
            {steps.map((s, i) => {
              const isActive = active >= i;
              return (
                <li key={s.id} className="flex items-start gap-3">
                  <motion.span
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? "var(--accent)" : "transparent",
                      borderColor: isActive ? "var(--accent)" : "var(--rule)",
                    }}
                    className="mt-1.5 w-3 h-3 rounded-full border flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium text-[color:var(--text)] truncate">
                        {s.line}
                      </p>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.span
                            key="time"
                            initial={{ opacity: 0, y: -2 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="label !text-[10px] !text-[color:var(--secondary)] flex-shrink-0"
                          >
                            ✓ {s.time}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <p className="text-xs text-[color:var(--muted)] mt-0.5">
                      {s.label}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-5 border-t border-[color:var(--rule)] flex items-center justify-between text-sm">
            <span className="label">Total</span>
            <span className="font-display text-2xl">$487.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}
