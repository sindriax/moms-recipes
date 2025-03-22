import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "La Cocinita de Arancita",
  description: "Encuentra las mejores recetas de Arantxa, tu chef favorita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
