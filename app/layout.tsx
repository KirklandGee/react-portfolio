import type { Metadata } from "next";
import { Source_Serif_4, Libre_Franklin, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kirklandgee.com";

export const metadata: Metadata = {
  title: "Kirkland Gee — software engineer, ex-growth",
  description:
    "Kirkland Gee builds sharp AI and product tools. A decade of SEO and growth engineering, now shipping software.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Kirkland Gee — software engineer, ex-growth",
    description:
      "Kirkland Gee builds sharp AI and product tools. A decade of SEO and growth engineering, now shipping software.",
    url: siteUrl,
    siteName: "Kirkland Gee",
    locale: "en_US",
    type: "website",
    images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: "Kirkland Gee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirkland Gee — software engineer, ex-growth",
    description: "Builds sharp AI and product tools. A decade of SEO and growth engineering, now shipping software.",
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
    <html
      lang="en"
      data-type="service"
      data-radius="soft"
      data-buttons="solid"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <meta name="page-type" content="service" />
        <meta name="site-kind" content="other" />
        <meta name="theme-color" content="#e9ddc6" />
      </head>
      <body className="antialiased bg-kraft text-ink">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-kraft focus:px-4 focus:py-2 focus:rounded-sm font-mono text-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
