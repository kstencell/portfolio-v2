import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const sfMono = localFont({
  src: "./SF-Mono-Regular.otf",
  variable: "--font-sf-mono",
});

export const metadata: Metadata = {
  title: "Karl Stencell",
  description: "Portfolio website",
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
      <body
        className={`${interSans.variable} ${sfMono.variable} antialiased bg-primary-blue`}
      >
        {children}
      </body>
    </html>
  );
}
