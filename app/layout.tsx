import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins } from 'next/font/google';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'], // optional weights
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Portfolio | Sheharyar Shahzad",
  description: "Portfolio to showcase my skills and for viewers to understand me better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
