import { chromium } from "@playwright/test";

const URL = process.env.SMOKE_URL || "http://localhost:3000/";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

const errors = [];
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(`console.error: ${m.text()}`);
});

const resp = await page.goto(URL, { waitUntil: "networkidle" });
console.log(`status: ${resp.status()}`);

const checks = {
  "hero h1": await page.locator("h1").first().textContent(),
  "hero sub": await page.locator(".hero p.sub").first().textContent(),
  "eyebrow": await page.locator(".eyebrow").first().textContent(),
  "trust line": await page.locator(".hero-trust span").last().textContent(),
  "nav cta bg": await page.locator(".nav-cta").first().evaluate((el) => getComputedStyle(el).backgroundColor),
  "yew-dot count": await page.locator(".yew-dot").count(),
  "wordmark count": await page.locator(".wordmark").count(),
  "wordmark-pop count": await page.locator(".wordmark-pop").count(),
  "Shopmonkey live chip": await page.locator(".chip.green").first().textContent(),
  "soon chips count": await page.locator(".chip.custard").count(),
  "builton label": await page.locator(".builton-label").first().textContent(),
  "faq items": await page.locator(".faq-item").count(),
  "isnt items": await page.locator(".isnt-item").count(),
  "step items": await page.locator(".step").count(),
  "promise items": await page.locator(".promise-item").count(),
  "hero img loaded": await page.locator(".hero-img").first().evaluate((img) => img.complete && img.naturalWidth > 0),
};

for (const [k, v] of Object.entries(checks)) {
  console.log(`${k}: ${typeof v === "string" ? v.replace(/\s+/g, " ").trim() : v}`);
}

const sliderHandle = page.locator("input[type=range]").first();
await sliderHandle.scrollIntoViewIfNeeded();
await sliderHandle.focus();
await page.keyboard.press("ArrowRight");
await page.keyboard.press("ArrowRight");
const vol = await page.locator("#volDisplay, .vol span").first().textContent();
console.log(`slider after 2x →: ${vol}`);

await page.locator(".faq-q").first().click();
await page.waitForTimeout(400);
const faqOpen = await page.locator(".faq-item.open").count();
console.log(`faq open after click: ${faqOpen}`);

await page.locator("#origin").scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
const popIn = await page.locator(".wordmark-pop.in").count();
console.log(`wordmark-pop with .in after scroll: ${popIn}`);

console.log(`page errors: ${errors.length}`);
errors.forEach((e) => console.log(`  - ${e}`));

await browser.close();
