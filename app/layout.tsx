import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magazinul Meu",
  description: "Magazin online customer-centric",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <nav className="flex gap-4 px-6 py-4 bg-white border-b border-zinc-200">
            <Link href="/" className="text-zinc-900 font-medium">Acasă</Link>
            <Link href="/products" className="text-zinc-900 font-medium">Produse</Link>
            <Link href="/cart" className="text-zinc-900 font-medium">Coș</Link>
          </nav>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}