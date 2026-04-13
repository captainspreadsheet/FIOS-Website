import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/site/CustomCursor";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SmoothScrollProvider } from "@/components/site/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIOS Studio",
  description: "A modern editorial hybrid website for premium brand storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="film-grain min-h-full bg-[var(--brand-cream)] text-[var(--brand-ink)]">
        <SmoothScrollProvider>
          <SiteHeader />
          <div className="flex min-h-[calc(100vh-65px)] flex-col">{children}</div>
          <CustomCursor />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
