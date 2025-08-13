import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Auth0Provider } from "@auth0/nextjs-auth0";

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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XBLHPS5M93"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XBLHPS5M93');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col w-full">
        <Auth0Provider>
          <Header />
          {children}
          <Footer />
        </Auth0Provider>
      </body>
    </html>
  );
}
