import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";

const dosis = Dosis({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ["latin"],
  display: 'swap'
 });

export const metadata: Metadata = {
  title: "Fígaro",
  description: "Extremely simple barbershop helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
