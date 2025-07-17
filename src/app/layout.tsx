import type { Metadata } from "next";
import { Archivo  } from "next/font/google";
import { CartProvider } from '@/utils/cartContext'; 
import Header from '@/components/Header';      
import Footer from '@/components/Footer';
import './globals.css';


const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Frontend development test for Apply Digital",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable}`}>
      <body className="font-sans bg-background-main text-text-primary">
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
