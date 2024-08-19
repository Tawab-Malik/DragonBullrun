"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define paths where the footer should be hidden
  const hideFooterPaths = ["/how-to-buy"];

  // Check if the current path is in the list of paths to hide the footer
  const showFooter = !hideFooterPaths.includes(pathname);

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <title>Dragon Bull Run</title>
        <meta name="description" content="This is a brief description of the page content." />
      </head>
      <body>
        <Header />
        {children}
        {showFooter && <Footer />} {/* Conditionally render the footer */}
      </body>
    </html>
  );
}
