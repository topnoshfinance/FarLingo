import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farlingo | Translate Farcaster Casts",
  description: "Translate Farcaster casts across 29 languages. Earn points. Share translations.",
};

export default function RootLayout({
  children,
}: Readonly<{  
  children: React.ReactNode;  
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
          {children}
        </main>
      </body>
    </html>
  );
}