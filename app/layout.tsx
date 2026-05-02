import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThreeCTAStrip from "@/components/ThreeCTAStrip";
import PageWipe from "@/components/PageWipe";
import StickyCTA from "@/components/StickyCTA";
import BatchFoot from "@/components/BatchFoot";
import ScrollProgress from "@/components/ScrollProgress";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "yew. payments — software for family auto shops",
  description:
    "yew. payments. Drop-in payments + console for shops who'd rather work the counter than work the software. FAPS Interchange-Plus, no reader rental, charge from any bay.",
  metadataBase: new URL("https://demo.yewsoftware.com"),
  openGraph: {
    title: "yew. payments — software for family auto shops",
    description:
      "Drop-in payments + console for shops who'd rather work the counter than work the software.",
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
      className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <PageWipe />
        <Nav />
        <main className="flex-1">{children}</main>
        <ThreeCTAStrip />
        <Footer />
        <BatchFoot />
        <StickyCTA />
      </body>
    </html>
  );
}
