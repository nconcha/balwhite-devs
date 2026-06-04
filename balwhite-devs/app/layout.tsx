import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BalWhite Devs | Code · Craft · Quest",
  description:
    "Software house en Concepción, Chile. Desarrollo web, apps móviles, sistemas a medida y arquitecturas cloud. Where Code Becomes Craft.",
  keywords: [
    "desarrollo web",
    "apps móviles",
    "cloud",
    "integraciones",
    "software Chile",
    "Concepción",
    "Biobío",
    "BalWhite Devs",
  ],
  authors: [{ name: "BalWhite Devs SpA" }],
  openGraph: {
    title: "BalWhite Devs | Code · Craft · Quest",
    description:
      "Transformamos ideas en soluciones digitales robustas y escalables.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080808] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
