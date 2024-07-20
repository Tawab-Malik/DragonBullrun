"use client"
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbars from "./Components/Navbar";
import Footer from "./Components/Footer";

// Import the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
  
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbars/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
