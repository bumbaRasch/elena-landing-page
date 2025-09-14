import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AOSProvider } from "@/components/aos-provider";
import { StructuredData } from "@/components/structured-data";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Max Mustermann - Professioneller Musikunterricht in Musterstadt",
    template: "%s | Max Mustermann - Musikunterricht"
  },
  description: "Individueller Musikunterricht für Klavier, Gitarre, Gesang und Musiktheorie mit erfahrenem Lehrer. Über 10 Jahre Erfahrung, flexible Termine, Online- und Präsenzunterricht in Musterstadt.",
  keywords: [
    "Musikunterricht",
    "Klavierunterricht",
    "Gitarrenunterricht",
    "Gesangsunterricht",
    "Musiktheorie",
    "Musiklehrer",
    "Musterstadt",
    "Online-Unterricht",
    "Einzelunterricht"
  ],
  authors: [{ name: "Max Mustermann" }],
  creator: "Max Mustermann",
  publisher: "Max Mustermann Music Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://max-mustermann-musik.de",
    siteName: "Max Mustermann - Musikunterricht",
    title: "Max Mustermann - Professioneller Musikunterricht in Musterstadt",
    description: "Individueller Musikunterricht für Klavier, Gitarre, Gesang und Musiktheorie mit erfahrenem Lehrer. Über 10 Jahre Erfahrung.",
    images: [
      {
        url: "./images/example-hero.webp",
        width: 1200,
        height: 630,
        alt: "Max Mustermann - Musiklehrer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Mustermann - Professioneller Musikunterricht in Musterstadt",
    description: "Individueller Musikunterricht für Klavier, Gitarre, Gesang und Musiktheorie mit erfahrenem Lehrer.",
    images: ["./image/example-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Добавьте когда будет домен
    // yandex: "your-yandex-verification-code", // Добавьте для Яндекса
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <AOSProvider>
              {children}
            </AOSProvider>
          </LanguageProvider>
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
