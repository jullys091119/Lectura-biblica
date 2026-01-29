import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0b0b" />
        <title>Lectura Bíblica</title>
        <meta name="description" content="Lectura bíblica con texto grande" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
