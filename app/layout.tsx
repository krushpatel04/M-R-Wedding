import type { Metadata } from "next";
import { Style_Script, Oswald } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const styleScript = Style_Script({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "M&R Wedding",
  description: "Rushil and Monali's Wedding — June 27th, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${styleScript.variable} ${oswald.variable} antialiased`}>
        <SmoothScroll>
          <div className="grain" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
