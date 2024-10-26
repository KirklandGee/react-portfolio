import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeWrapper from "./components/ThemeWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kirklandgee.com';

export const metadata: Metadata = {
  title: "Technical SEO Consultant & Developer | Kirkland Gee",
  description: "Kirkland Gee is a technical SEO consultant and developer with a passion for creating fast, accessible, and secure websites.",
  openGraph: {
    title: "Technical SEO Consultant & Developer | Kirkland Gee",
    description: "Kirkland Gee is a technical SEO consultant and developer with a passion for creating fast, accessible, and secure websites.",
    url: siteUrl,
    siteName: 'Kirkland Gee',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Kirkland Gee - Technical SEO Consultant & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technical SEO Consultant & Developer | Kirkland Gee",
    description: "Kirkland Gee is a technical SEO consultant and developer with a passion for creating fast, accessible, and secure websites.",
    creator: '@KirklandGee',
    images: [`${siteUrl}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Kirkland Gee" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
