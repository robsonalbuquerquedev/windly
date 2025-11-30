import type { Metadata } from "next";
import PoliticaDeAfiliadosEN from "@/components/politica-de-afiliados/PoliticaDeAfiliadosEN";

export const metadata: Metadata = {
    title: {
        absolute: "Affiliate Policy — Transparency in Recommendations | Windly",
    },

    description:
        "Read Windly's Affiliate Policy and understand how affiliate links work, how commissions are generated, our recommendation criteria, and our commitment to transparency and responsibility.",

    keywords: [
        "Windly Affiliate Policy",
        "Affiliate Links",
        "Commissions",
        "Transparency",
        "Amazon Associates",
        "Mercado Livre Affiliates",
        "Shopee Affiliates",
        "Privacy",
        "GDPR",
        "SEO",
        "Next.js",
        "TailwindCSS",
        "Semantic HTML",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/affiliate-policy",
        languages: {
            "en-US": "https://windly.com.br/en/affiliate-policy",
            "pt-BR": "https://windly.com.br/pt/politica-de-afiliados",
        },
    },

    openGraph: {
        title: "Affiliate Policy — Transparency in Recommendations | Windly",
        description:
            "Learn how Windly uses affiliate links, how commissions work, and how we ensure honest and responsible recommendations.",
        url: "https://windly.com.br/en/affiliate-policy",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Illustrative image from Windly's Affiliate Policy page",
            },
        ],
        type: "website",
    },
};

export default function PoliticaDeCookiesPage() {
    return <PoliticaDeAfiliadosEN />;
}
