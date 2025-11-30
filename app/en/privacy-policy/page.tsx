import PoliticaDePrivacidadeEN from "@/components/politica-de-privacidade/PoliticaDePrivacidadeEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy — Your Data and Security | Windly",
  },

  description:
    "Read Windly’s Privacy Policy and understand how we handle personal data, cookies, ads, affiliate links, and collected information to ensure full transparency and safe browsing.",

  keywords: [
    "Windly Privacy Policy",
    "Privacy",
    "Data Protection",
    "Cookies",
    "Google AdSense",
    "Affiliates",
    "Security",
    "Personal Data",
    "Next.js",
    "TailwindCSS",
    "SEO",
    "Semantic HTML",
  ],

  alternates: {
    canonical: "https://windly.com.br/en/privacy-policy",
    languages: {
      "en-US": "https://windly.com.br/en/privacy-policy",
      "pt-BR": "https://windly.com.br/pt/politica-de-privacidade",
    },
  },

  openGraph: {
    title: "Privacy Policy — Your Data and Security | Windly",
    description:
      "Learn how your data is handled at Windly, including cookies, ads, affiliate links, and transparency and protection practices.",
    url: "https://windly.com.br/en/privacy-policy",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Illustrative image for Windly's Privacy Policy page",
      },
    ],
    type: "website",
  },
};

export default function PoliticaDePrivacidadePage() {
    return (
        <PoliticaDePrivacidadeEN />
    );
}
