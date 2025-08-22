import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderContent from "@/components/web/pages/header";
import { Footer } from "react-day-picker";
import FooterWeb from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyzen dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* You can add external CSS files here using the link tag */}
        {/* For example, adding Bootstrap CSS from a CDN */}
        <link
          href="/public/animatin.css"
          rel="stylesheet"
        />
        <link
          href="Logo-dark.png"
          rel="icon"
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderContent />
        {children}
        <FooterWeb/>
      </body>
    </html>
  );
}
