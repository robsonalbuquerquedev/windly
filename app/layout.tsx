import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import Script from "next/script";
import Cookies from "@/components/cookies/Cookies";

export const metadata: Metadata = {
  metadataBase: new URL("https://windly.com.br/pt"),

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
      url: "https://windly.com.br/pt"
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
    canonical: "https://windly.com.br/pt/",
    languages: {
      "pt-BR": "https://windly.com.br/pt",
      "en-US": "https://windly.com.br/en",
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },

  openGraph: {
    title: "Windly — Tailwind, SEO e Semântica",
    description:
      "Domine TailwindCSS, HTML Semântico, SEO moderno e boas práticas em Next.js para criar interfaces modernas e profissionais.",
    url: "https://windly.com.br/pt/",
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
      <head>
        {/* ✅ Tag de verificação do Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-9360124149047745"></meta>

        {/* 📊 Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CN90517B1X"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CN90517B1X', {
      'anonymize_ip': true,
      'allow_ad_personalization_signals': false
    });
  `}
        </Script>

        {/* 🧠 Google Consent Mode */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });
  `}
        </Script>
      </head>
      <body>
        <StructuredData />
        <main>{children}</main>
        <Cookies />

        {/* ✅ Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9360124149047745"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
