import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muskas (Hainan) Trading Company Ltd",
  description:
    "Professional trading company specializing in construction materials, import & export, and general trading services based in Hainan, China.",
  keywords: [
    "Muskas",
    "Trading Company",
    "Hainan",
    "Construction Materials",
    "Import Export",
    "General Trading",
    "China",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Muskas (Hainan) Trading Company Ltd",
    description:
      "Professional trading company specializing in construction materials, import & export, and general trading.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}