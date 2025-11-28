import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Windly — Tailwind, SEO and Semantic HTML Done Right",
    },

    description:
        "Learn TailwindCSS, Semantic HTML, modern SEO, and production-ready best practices with Next.js using elegant, accessible, and professional components.",

    keywords: [
        "TailwindCSS",
        "Next.js",
        "SEO",
        "Semantic HTML",
        "Best Practices",
        "Web Development",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/en",
        languages: {
            "pt-BR": "https://windly.com.br/pt",
            "en-US": "https://windly.com.br/en",
        },
    },

    openGraph: {
        title: "Windly — Learn Tailwind, Semantic HTML & SEO",
        description:
            "Build modern and professional interfaces with TailwindCSS and Next.js using elegant components and real-world SEO practices.",
        url: "https://windly.com.br/en",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Windly Hero Image",
            },
        ],
        type: "website",
    },
};

import HeroSplitEN from "@/components/hero/HeroSplitEN";
import CardLayout from "@/components/layout/CardLayout";
import CardContentEN from "@/components/cards/CardContentEN";

export default function HomeEN() {
    return (
        <>
            <HeroSplitEN />
            <CardLayout id="get-started">
                <CardContentEN />
            </CardLayout>
        </>
    );
}
