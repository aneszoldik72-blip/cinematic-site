import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aether Studio — Cinematic Websites for Modern Brands",
  description:
    "Aether Studio creates premium cinematic websites with elegant structure, refined motion, and custom-coded precision.",
  openGraph: {
    title: "Aether Studio — Cinematic Websites for Modern Brands",
    description:
      "Aether Studio creates premium cinematic websites with elegant structure, refined motion, and custom-coded precision.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aether Studio — Cinematic Websites for Modern Brands",
    description:
      "Aether Studio creates premium cinematic websites with elegant structure, refined motion, and custom-coded precision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}