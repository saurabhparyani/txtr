import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Rubik } from "next/font/google"
import Providers from "@/components/Providers";

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TXTR",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}><Providers>{children}</Providers></body>
    </html>
  );
}
