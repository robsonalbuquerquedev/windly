import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Windly — Tailwind, SEO e Semântica com Excelência",
    },

    description:
        "Aprenda TailwindCSS, HTML Semântico, SEO moderno e boas práticas com Next.js usando componentes elegantes, acessíveis e profissionais.",

    keywords: [
        "TailwindCSS",
        "Next.js",
        "SEO",
        "HTML Semântico",
        "Boas Práticas",
        "Desenvolvimento Web",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt",
        languages: {
            "pt-BR": "https://windly.com.br/pt",
            "en-US": "https://windly.com.br/en",
        },
    },

    openGraph: {
        title: "Windly — Aprenda Tailwind, Semântica e SEO",
        description:
            "Crie interfaces modernas e profissionais com TailwindCSS e Next.js usando componentes elegantes e práticas reais de SEO.",
        url: "https://windly.com.br/pt",
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

import HeroSplitPT from "@/components/hero/HeroSplitPT";
import CardLayout from "@/components/layout/CardLayout";
import CardContentPT from "@/components/cards/CardContentPT";

export default function HomePT() {
    return (
        <>
            <HeroSplitPT />
            <CardLayout id="comece-agora">
                <CardContentPT />
            </CardLayout>
        </>
    );
}