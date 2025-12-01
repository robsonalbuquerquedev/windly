import HtmlSemanticsMistakes from "@/components/blog/HtmlSemanticsMistakes";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Common HTML Semantics Mistakes Beginners Make — Windly",
    },

    description:
        "Discover the most common mistakes when using HTML semantics and learn how to improve accessibility, SEO, and page structure with modern techniques and real-world practices.",

    keywords: [
        "Semantic HTML",
        "HTML Semantics",
        "HTML5",
        "Web Accessibility",
        "Technical SEO",
        "Web Development",
        "Semantic Tags",
        "Modern Front-end",
        "HTML Best Practices",
        "Page Structure",
        "Windly",
        "HTML Beginner Mistakes",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/blog/html-semantics-mistakes",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog/erros-semantica-html",
            "en-US": "https://windly.com.br/en/blog/html-semantics-mistakes",
        },
    },

    openGraph: {
        title: "Common HTML Semantics Mistakes Beginners Make — Windly",
        description:
            "An in-depth guide revealing the most common mistakes made by beginners learning HTML and how to apply proper semantics to improve SEO, accessibility, and code organization.",
        url: "https://windly.com.br/en/blog/html-semantics-mistakes",
        siteName: "Windly",
        images: [
            {
                url: "/erros-semantica-html/og-erros-semantica-html.png",
                width: 1200,
                height: 630,
                alt: "Cover image for the article about common mistakes when using HTML semantics",
            },
        ],
        type: "article",
    },
};

export default function HtmlSemanticsMistakesPage() {
    return (
        <HtmlSemanticsMistakes />
    );
}