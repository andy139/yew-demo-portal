"use client";

import { useRef, useState } from "react";

type Item = { q: string; a: React.ReactNode };

const ITEMS: Item[] = [
  {
    q: "Do I have to switch banks?",
    a: "No. Funds settle into your existing business checking. We don't touch your bank relationship.",
  },
  {
    q: "What if my Wi-Fi goes down?",
    a: "The PAX A80 has Ethernet failover. If Wi-Fi drops, the terminal keeps running over a wired line. Most shops plug both in and forget about it.",
  },
  {
    q: "How fast is funding?",
    a: "Next business day. No rolling reserves, no hold periods, no first-month delays.",
  },
  {
    q: "What about chargebacks?",
    a: (
      <>
        We handle the dispute paperwork <em>with</em> you, not against you. Send
        us the work order and the signed receipt. We do the response.
      </>
    ),
  },
  {
    q: "Is it PCI compliant?",
    a: "Yes. The PAX A80 is fully PCI-validated. Card data never touches your computer or your network. The terminal handles encryption end to end.",
  },
];

function FAQItem({ q, a }: Item) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button
        className="faq-q"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{q}</span>
        <span className="ic" aria-hidden="true"></span>
      </button>
      <div
        className="faq-a"
        ref={ref}
        style={{ maxHeight: open ? ref.current?.scrollHeight : 0 }}
      >
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="faq-list">
      {ITEMS.map((it) => (
        <FAQItem key={it.q} {...it} />
      ))}
    </div>
  );
}
