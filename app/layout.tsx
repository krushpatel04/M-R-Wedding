import type { Metadata } from "next";
import { Style_Script } from "next/font/google";
import "./globals.css";

const styleScript = Style_Script({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "M&R Reception",
  description: "Rushil and Monali's Reception — June 27th, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${styleScript.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
