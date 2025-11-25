import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://windly.com.br"),

  title: {
    default: "Windly — Aprenda Tailwind, SEO e HTML Semântico",
    template: "%s | Windly"
  },

  description:
    "Aprenda TailwindCSS, HTML Semântico, SEO moderno e boas práticas com Next.js usando componentes acessíveis e elegantes.",

  keywords: [
    "TailwindCSS",
    "Next.js",
    "HTML Semântico",
    "SEO",
    "Componentes",
    "Windly",
    "Desenvolvimento Web"
  ],

  category: "technology",

  authors: [
    {
      name: "Robson Albuquerque",
      url: "https://windly.com.br"
    }
  ],

  creator: "Robson Albuquerque",
  publisher: "Windly",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  alternates: {
    canonical: "https://windly.com.br/"
  },

  openGraph: {
    title: "Windly — Tailwind, SEO e Semântica",
    description:
      "Domine TailwindCSS, HTML Semântico, SEO moderno e boas práticas em Next.js para criar interfaces modernas e profissionais.",
    url: "https://windly.com.br/",
    siteName: "Windly",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Banner do Windly"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StructuredData />
        <MainLayout>
          <main>{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
