import {Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit", // <- important!
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo", // <- important!
});

export const metadata = {
  title: "Portfolio - Cyrus P. Umali",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
