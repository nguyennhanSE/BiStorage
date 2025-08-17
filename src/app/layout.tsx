import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GlobalLoader } from "@/components/common/GlobalLoader";
import { AOSInitClient } from "@/components/common/AosInitClient";
import { LoginExpired } from "@/components/common/LoginExpired";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BiStorage",
  description: "The only file storage platform that you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitClient></AOSInitClient>
        {children}
        <Toaster richColors position="bottom-right"/>
        <GlobalLoader></GlobalLoader>
        <LoginExpired></LoginExpired>
      </body>
    </html>
  );
}
