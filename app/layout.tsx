import type { Metadata } from "next";
import { Newsreader, Caveat } from "next/font/google";
import "./globals.css";
import PenObserver from "./components/PenObserver";
import DevAnnotate from "./components/DevAnnotate";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  adjustFontFallback: false,
  variable: "--font-serif",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kirklandgee.com";
const title = "Kirkland Gee — AI for growth";
const description =
  "Kirkland Gee uses AI, software and better workflows to help companies grow, and to fix whatever is slowing them down. Work for Brex, Webflow, Ramp, Vercel and more.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Kirkland Gee",
    locale: "en_US",
    type: "website",
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: "Kirkland Gee" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@KirklandGee",
    images: [`${siteUrl}/opengraph-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${hand.variable}`}>
      <head>
        <meta name="theme-color" content="#f5f0e6" />
      </head>
      <body>
        {children}
        <PenObserver />
        {process.env.NODE_ENV === "development" && <DevAnnotate />}
      </body>
    </html>
  );
}
