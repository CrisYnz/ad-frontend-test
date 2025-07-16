import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from '@/utils/cartContext'; 
import Header from '@/components/Header';      
import Footer from '@/components/Footer';
import './globals.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="">
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
