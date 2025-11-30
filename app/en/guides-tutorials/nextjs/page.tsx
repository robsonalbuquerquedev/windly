import NextjsEN from "@/components/guias-tutoriais/NextjsEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Next.js Best Practices Guide — Windly",
    },

    description:
        "Learn how to structure Next.js projects with professional organization: routes, folders, layouts, reusable components, performance optimization, and modern production-ready patterns.",

    keywords: [
        "Next.js",
        "Next.js best practices",
        "Next.js architecture",
        "Next.js folder structure",
        "Next.js layouts",
        "App Router routes",
        "Componentization",
        "Web development",
        "Next.js performance",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/guides-tutorials/nextjs",
        languages: {
            "en-US": "https://windly.com.br/en/guides-tutorials/nextjs",
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/nextjs",
        },
    },

    openGraph: {
        title: "Next.js Best Practices Guide — Windly",
        description:
            "A complete guide to structuring Next.js projects in a solid and modern way: routes, layouts, component organization, and development patterns that improve quality and efficiency.",
        url: "https://windly.com.br/en/guides-tutorials/nextjs",
        siteName: "Windly",
        images: [
            {
                url: "/nextjs/og-nextjs.png",
                width: 1200,
                height: 630,
                alt: "Cover of the Next.js best practices guide",
            },
        ],
        type: "article",
    },
};

export default function NextjsPageEN() {
    return (
        <NextjsEN />
    );
}
