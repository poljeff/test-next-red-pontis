import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";

import Header from "@/ui/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const RobotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalogo de Productos - Red",
  description: "Test de Next.js con TypeScript y Tailwind CSS",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${RobotoFont.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;