import SeoNextjsTailwindEN from "@/components/blog/SeoNextjsTailwindEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "SEO for Next.js explained with Tailwind — Windly",
    },

    description:
        "Learn how to use metadata, JSON-LD, and modern semantics to improve the ranking of pages built with Next.js. A complete guide to precise technical SEO in practice.",

    keywords: [
        "Next.js",
        "SEO",
        "TailwindCSS",
        "Metadata",
        "JSON-LD",
        "Open Graph",
        "Web Development",
        "Semantic Web",
        "Google Rich Results",
        "App Router",
        "Windly",
        "Page Optimization",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/blog/seo-nextjs-tailwindcss",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog/seo-nextjs-tailwind",
            "en-US": "https://windly.com.br/en/blog/seo-nextjs-tailwindcss",
        },
    },

    openGraph: {
        title: "SEO for Next.js explained with Tailwind — Windly",
        description:
            "Definitive guide on how to use metadata, JSON-LD, and semantics to boost SEO in Next.js projects with Tailwind. Learn real techniques applied with the App Router.",
        url: "https://windly.com.br/en/blog/seo-nextjs-tailwindcss",
        siteName: "Windly",
        images: [
            {
                url: "/seo-nextjs-tailwind/og-seo-nextjs.png",
                width: 1200,
                height: 630,
                alt: "Cover image for the article about SEO with Next.js and TailwindCSS",
            },
        ],
        type: "article",
    },
};

export default function SeoNextjsTailwindPageEN() {
    return (
        <SeoNextjsTailwindEN />
    );
}
