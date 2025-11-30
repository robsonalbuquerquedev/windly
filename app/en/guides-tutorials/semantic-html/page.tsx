import SemanticHtml from "@/components/guias-tutoriais/SemanticHtml";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Complete Semantic HTML Guide — Windly",
    },

    description:
        "Learn how to apply semantic HTML in a modern and professional way to improve accessibility, SEO, structural organization, and content understanding for users and search engines. A practical guide with real examples used in production.",

    keywords: [
        "Semantic HTML",
        "HTML5 Semantics",
        "Page Structure",
        "HTML Best Practices",
        "Web Accessibility",
        "Technical SEO",
        "Semantic Tags",
        "Content Organization",
        "Web Development",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/guides-tutorials/html-semantico",
        languages: {
            "en-US": "https://windly.com.br/en/guides-tutorials/html-semantico",
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/html-semantico",
        },
    },

    openGraph: {
        title: "Complete Semantic HTML Guide — Windly",
        description:
            "Learn how to build clear, accessible, and optimized pages using modern semantic HTML. A practical guide with structure, examples, checklists, and real best practices.",
        url: "https://windly.com.br/en/guides-tutorials/html-semantico",
        siteName: "Windly",
        images: [
            {
                url: "/html-semantico/og-html-semantico.png",
                width: 1200,
                height: 630,
                alt: "Cover of the complete semantic HTML guide",
            },
        ],
        type: "article",
    },
};

export default function SemanticHtmlPage() {
    return (
        <SemanticHtml />
    );
}
