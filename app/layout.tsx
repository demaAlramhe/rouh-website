import type { Metadata } from "next";
import { Amiri, Cairo } from "next/font/google";
import { AccessibilityWidget } from "@/components/accessibility/AccessibilityWidget";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteMeta } from "@/data/siteContent";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL("https://rouh.example.com"),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    locale: "ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
