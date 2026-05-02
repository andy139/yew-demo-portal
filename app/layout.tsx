import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThreeCTAStrip from "@/components/ThreeCTAStrip";
import CursorFollower from "@/components/CursorFollower";
import PageWipe from "@/components/PageWipe";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yew. Software for yew.",
  description:
    "Yew. Payments and software for auto shops, designed by someone who worked the counter. Drop-in for FAPS-eligible shops. Charge from any bay. Settle next day.",
  metadataBase: new URL("https://demo.yewsoftware.com"),
  openGraph: {
    title: "Yew. Software for yew.",
    description:
      "Payments and software for auto shops, designed by someone who worked the counter.",
    type: "website",
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
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageWipe />
        <CursorFollower />
        <Nav />
        <main className="flex-1">{children}</main>
        <ThreeCTAStrip />
        <Footer />
      </body>
    </html>
  );
}
