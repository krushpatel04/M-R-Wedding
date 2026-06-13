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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');const prefersLight=window.matchMedia('(prefers-color-scheme: light)').matches;if(t==='light'||(t===null&&prefersLight)){document.documentElement.setAttribute('data-theme','light')}}catch(e){}requestAnimationFrame(()=>document.body.classList.add('theme-ready'));`,
          }}
        />
      </head>
      <body className={`${styleScript.variable} ${oswald.variable} antialiased`}>
        <SmoothScroll>
          <div className="grain" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
