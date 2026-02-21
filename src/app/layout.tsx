import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#14b8a6",
};

export const metadata: Metadata = {
  title: {
    default: "SAM Health Services - Home Diagnostic Tests in Mumbai",
    template: "%s | SAM Health Services",
  },
  description:
    "Get diagnostic tests at your doorstep with SAM Health Services. NABL certified labs, affordable prices, and quick reports. Book blood tests, health checkups, and more.",
  keywords: [
    "blood test at home",
    "diagnostic tests Mumbai",
    "home sample collection",
    "lab tests",
    "health checkup",
    "pathology services",
    "NABL certified lab",
  ],
  authors: [{ name: "SAM Health Services" }],
  creator: "SAM Health Services",
  publisher: "SAM Health Services",
  metadataBase: new URL("https://samhealthservices.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://samhealthservices.com",
    siteName: "SAM Health Services",
    title: "SAM Health Services - Home Diagnostic Tests in Mumbai",
    description:
      "Get diagnostic tests at your doorstep. NABL certified labs, affordable prices, and quick reports.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAM Health Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAM Health Services - Home Diagnostic Tests in Mumbai",
    description:
      "Get diagnostic tests at your doorstep. NABL certified labs, affordable prices, and quick reports.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
