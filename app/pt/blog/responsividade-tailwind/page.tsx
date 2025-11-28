import ResponsividadeTailwindContent from "@/components/blog/ResponsividadeTailwindContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Responsividade no TailwindCSS — Windly",
    },

    description:
        "Aprenda como funciona a responsividade no TailwindCSS usando breakpoints, classes móveis-first e utilitários reais para interfaces modernas.",

    keywords: [
        "TailwindCSS",
        "Responsividade",
        "Breakpoints",
        "Mobile First",
        "CSS",
        "Desenvolvimento Web",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/blog/responsividade-tailwind",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog/responsividade-tailwind",
            "en-US": "https://windly.com.br/en/blog/responsividade-tailwind",
        },
    },

    openGraph: {
        title: "Responsividade no TailwindCSS — Windly",
        description:
            "Guia completo sobre breakpoints, classes responsivas e técnicas modernas para criar interfaces adaptáveis com TailwindCSS.",
        url: "https://windly.com.br/pt/blog/responsividade-tailwind",
        siteName: "Windly",
        images: [
            {
                url: "/blog/responsividade-tailwind/og-responsividade.png",
                width: 1200,
                height: 630,
                alt: "Capa do artigo sobre responsividade no TailwindCSS",
            },
        ],
        type: "article",
    },
};

export default function ResponsividadeTailwindPage() {
    return (
        <ResponsividadeTailwindContent />
    );
}
