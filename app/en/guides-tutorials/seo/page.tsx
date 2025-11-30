import SeoEN from "@/components/guias-tutoriais/SeoEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Modern SEO Practical Guide — Windly",
    },

    description:
        "Learn real and modern SEO techniques to structure optimized pages, improve your rankings, use advanced semantics, complete metadata, and practical strategies that truly work in production.",

    keywords: [
        "SEO",
        "Search Engine Optimization",
        "Technical SEO",
        "Semantic HTML",
        "Content Optimization",
        "Page Structure",
        "Metadata",
        "Google Ranking",
        "SEO Best Practices",
        "Windly",
        "Web Development",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/guides-tutorials/seo",
        languages: {
            "en-US": "https://windly.com.br/en/guides-tutorials/seo",
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/seo",
        },
    },

    openGraph: {
        title: "Modern SEO Practical Guide — Windly",
        description:
            "Learn how to apply structured and technical SEO in practice: semantics, metadata, hierarchical structure, accessibility, and strategies used in professional projects.",
        url: "https://windly.com.br/en/guides-tutorials/seo",
        siteName: "Windly",
        images: [
            {
                url: "/seo/og-seo.png",
                width: 1200,
                height: 630,
                alt: "Cover image of the modern and technical SEO guide",
            },
        ],
        type: "article",
    },
};

export default function SeoPageEN() {
    return (
        <SeoEN />
    );
}
