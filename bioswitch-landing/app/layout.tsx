import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BioSwitch — Your fingerprint is your card",
  description:
    "Biometric payment infrastructure replacing physical cards with a single fingerprint, connecting all your Visa cards across all banks — at ATMs, POS, and online.",
  keywords: ["biometric payment", "fingerprint payment", "Visa", "HSM", "EMVCo", "fintech"],
  openGraph: {
    title: "BioSwitch — Your fingerprint is your card",
    description: "Pay anywhere on the Visa network with a single fingerprint. No card needed.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
