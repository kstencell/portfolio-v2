import type { Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientRoot from "./ClientRoot";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const sfMono = localFont({
  src: "./SF-Mono-Regular.otf",
  variable: "--font-sf-mono",
});

export const metadata = {
  title: "Karl Stencell | Software Engineer",
  description:
    "Portfolio website for Karl Stencell, software engineer and automation enthusiast.",
  icons: {
    icon: [{ url: "/favicon/favicon.ico", sizes: "any" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Karl Stencell | Software Engineer",
    description:
      "Portfolio website for Karl Stencell, software engineer and automation enthusiast.",
    url: "https://karlstencell.com",
    siteName: "Karl Stencell Portfolio",
    images: [
      {
        url: "https://karlstencell.com/portfolio-website-thumbnail-8x5.png",
        width: 1200,
        height: 630,
        alt: "Karl Stencell Portfolio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karl Stencell | Software Engineer",
    description:
      "Portfolio website for Karl Stencell, software engineer and automation enthusiast.",
    images: ["https://karlstencell.com/portfolio-website-thumbnail-8x5.png"],
  },
  alternates: {
    canonical: "https://karlstencell.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${interSans.variable} ${sfMono.variable} antialiased bg-primary-blue`}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
