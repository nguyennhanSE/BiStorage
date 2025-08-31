import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed,Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GlobalLoader } from "@/components/common/GlobalLoader";
import { AOSInitClient } from "@/components/common/AosInitClient";
import { LoginExpired } from "@/components/common/LoginExpired";
// import PageTransition from "@/components/common/PageTransition";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  weight: ["400","500","600","700","800","900"],
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: ["400","500","600","700"],
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
        className={`${dancingScript.variable} ${robotoCondensed.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitClient></AOSInitClient>
        <Toaster richColors position="bottom-right"/>
        {/* <PageTransition /> */}
        <GlobalLoader></GlobalLoader>
        <LoginExpired></LoginExpired>
        {children}
      </body>
    </html>
  );
}
