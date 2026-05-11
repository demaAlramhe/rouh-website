import type { Metadata } from "next";
import { Cairo, Noto_Naskh_Arabic } from "next/font/google";
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

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-naskh",
  weight: ["400", "500", "700"],
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
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${naskh.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
