import PoliticaDeCookiesEN from "@/components/politica-de-cookies/PoliticaDeCookiesEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Cookie Policy — Transparency and Control | Windly",
    },

    description:
        "Read Windly’s Cookie Policy to understand how we use essential, analytics, advertising, personalization cookies and related technologies to enhance your experience.",

    keywords: [
        "Windly Cookie Policy",
        "Cookies",
        "Consent",
        "Google Consent Mode",
        "Google AdSense",
        "Privacy",
        "Personal Data",
        "GDPR",
        "Next.js",
        "TailwindCSS",
        "SEO",
        "Semantic HTML",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/cookie-policy",
        languages: {
            "en-US": "https://windly.com.br/en/cookie-policy",
            "pt-BR": "https://windly.com.br/pt/politica-de-cookies",
        },
    },

    openGraph: {
        title: "Cookie Policy — Transparency and Control | Windly",
        description:
            "Learn how Windly uses cookies for analytics, advertising, personalization, and essential site functionality with full transparency and security.",
        url: "https://windly.com.br/en/cookie-policy",
        siteName: "Windly",
        images: [
            {
                url: "/hero-wwindly.png",
                width: 1200,
                height: 630,
                alt: "Illustrative image of Windly's Cookie Policy page",
            },
        ],
        type: "website",
    },
};

export default function PoliticaDeCookiesPage() {
    return (
        <PoliticaDeCookiesEN />
    );
}
