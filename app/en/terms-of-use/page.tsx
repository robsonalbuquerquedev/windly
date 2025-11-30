import TermosDeUsoEN from "@/components/termos-de-uso/TermosDeUsoEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Use — Rules and Conditions | Windly",
  },

  description:
    "Read Windly’s Terms of Use to understand your responsibilities, our policies, usage rules, and important information about ads, affiliates, and safe browsing.",

  keywords: [
    "Windly Terms of Use",
    "Website policies",
    "Windly rules",
    "Windly usage",
    "Affiliates",
    "Google AdSense",
    "Privacy Policies",
    "Next.js",
    "TailwindCSS",
    "SEO",
    "Semantic HTML",
  ],

  alternates: {
    canonical: "https://windly.com.br/en/terms-of-use",
    languages: {
      "en-US": "https://windly.com.br/en/terms-of-use",
      "pt-BR": "https://windly.com.br/pt/termos-de-uso",
    },
  },

  openGraph: {
    title: "Terms of Use — Rules and Conditions | Windly",
    description:
      "Learn about Windly’s usage conditions, including user responsibility, copyright rules, ads, affiliate policies, and safe browsing guidelines.",
    url: "https://windly.com.br/en/terms-of-use",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Illustrative Terms of Use page image from Windly",
      },
    ],
    type: "website",
  },
};

export default function TermosDeUsoPage() {
    return (
        <TermosDeUsoEN/>
    );
}
