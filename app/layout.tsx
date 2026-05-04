import type { Metadata } from "next";
import { Fraunces, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-italic",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "yew. pay · card payments for auto shops",
  description:
    "Card payments for auto repair shops. PAX A80 terminal. Honest rates. Phone-based onboarding.",
  metadataBase: new URL("https://pay.yewsoftware.com"),
  openGraph: {
    title: "yew. pay — card payments for auto shops",
    description:
      "Honest rates. Set up in person. Live in under an hour.",
    type: "website",
    url: "https://pay.yewsoftware.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
