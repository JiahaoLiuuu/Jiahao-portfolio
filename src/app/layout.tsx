import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/component/theme-provider"
import { Analytics } from '@vercel/analytics/react';

const pressStart2P = Press_Start_2P({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-pixel-header" 
});

const vt323 = VT323({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-pixel-body" 
});

export const metadata: Metadata = {
  title: "Jiahao's Portfolio",
  description: "Level 1 Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pressStart2P.variable} ${vt323.variable} font-pixel-body`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
    </html>
  );
}
