import SeoNextjsTailwind from "@/components/blog/SeoNextjsTailwind";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "SEO para Next.js explicado com Tailwind — Windly",
    },

    description:
        "Aprenda como usar metadata, JSON-LD e semântica moderna para melhorar o ranqueamento de páginas feitas com Next.js. Guia completo para SEO técnico aplicado com precisão.",

    keywords: [
        "Next.js",
        "SEO",
        "TailwindCSS",
        "Metadata",
        "JSON-LD",
        "Open Graph",
        "Desenvolvimento Web",
        "Web Semântica",
        "Google Rich Results",
        "App Router",
        "Windly",
        "Otimização de páginas",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/blog/seo-nextjs-tailwind",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog/seo-nextjs-tailwind",
            "en-US": "https://windly.com.br/en/blog/seo-nextjs-tailwind",
        },
    },

    openGraph: {
        title: "SEO para Next.js explicado com Tailwind — Windly",
        description:
            "Guia definitivo sobre como usar metadata, JSON-LD e semântica para potencializar o SEO em projetos Next.js com Tailwind. Aprenda técnicas reais aplicadas ao App Router.",
        url: "https://windly.com.br/pt/blog/pt/seo-nextjs-tailwind",
        siteName: "Windly",
        images: [
            {
                url: "/blog/seo-nextjs-tailwind/og-seo-nextjs.png",
                width: 1200,
                height: 630,
                alt: "Capa do artigo sobre SEO com Next.js e TailwindCSS",
            },
        ],
        type: "article",
    },
};

export default function SeoNextjsTailwindPage() {
    return (
        <SeoNextjsTailwind />
    );
}
