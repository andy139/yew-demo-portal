# yew. pay — marketing site

The marketing / home website for **yew. pay**, the family-run payments + POSLink product for independent auto repair shops.

- **Production:** https://pay.yewsoftware.com
- **Stack:** Next.js 16 (App Router) · React 19 · Tailwind v4

This is the public-facing site (hero, pricing, FAQ). It is **not** the operator console (`/cashier`, `/(dashboard)`) — that lives in `yew-payments-app`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## History

- The previous demo-portal site (multi-page: `/the-software`, `/the-gateway`, `/the-kit`, `/story`, `/talk`, `/savings`, etc.) is preserved on the `old-website` branch.
- This branch (`main`) is the new single-page marketing site implemented from the design bundle (`yew. pay.html`).
