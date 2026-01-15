import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dmitry Blinov | Senior Fullstack Engineer",
  description:
    "Senior Fullstack Engineer with 17+ years experience building production systems at scale. Node.js, TypeScript, React, AI products. Available for freelance and contract work.",
  keywords: [
    "Fullstack Engineer",
    "Node.js",
    "TypeScript",
    "React",
    "AWS",
    "AI",
    "Software Engineer",
    "Freelance",
    "London",
  ],
  authors: [{ name: "Dmitry Blinov" }],
  openGraph: {
    title: "Dmitry Blinov | Senior Fullstack Engineer",
    description:
      "17+ years building production systems at scale. Node.js, TypeScript, React, AI products.",
    url: "https://dmitryblinov.dev",
    siteName: "Dmitry Blinov",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dmitry Blinov | Senior Fullstack Engineer",
    description:
      "17+ years building production systems at scale. Node.js, TypeScript, React, AI products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
