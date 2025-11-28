import Performace from "@/components/guias-tutoriais/Performace";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Guia de Performance Web Moderna — Windly",
    },

    description:
        "Aprenda como otimizar imagens, melhorar o carregamento, reduzir layout shifts, usar formatos modernos e aplicar boas práticas reais de performance em projetos profissionais.",

    keywords: [
        "Performance Web",
        "Otimização de Imagens",
        "Core Web Vitals",
        "LCP",
        "CLS",
        "Carregamento Rápido",
        "Next.js",
        "Frontend Performance",
        "Boas práticas",
        "SEO Técnico",
        "Responsividade",
        "Windly",
        "Desenvolvimento Web",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/guias-tutoriais/performance",
        languages: {
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/performance",
            "en-US": "https://windly.com.br/en/guias-tutoriais/performance",
        },
    },

    openGraph: {
        title: "Guia de Performance Web Moderna — Windly",
        description:
            "Um guia completo e prático sobre como melhorar a performance do seu site com técnicas reais usadas em produção: imagens responsivas, lazy loading, formatos modernos e muito mais.",
        url: "https://windly.com.br/pt/guias-tutoriais/performance",
        siteName: "Windly",
        images: [
            {
                url: "/blog/performance-web/og-performance.png",
                width: 1200,
                height: 630,
                alt: "Capa do guia de performance web moderna",
            },
        ],
        type: "article",
    },
};

export default function PerformacePage() {
    return (
        <Performace />
    );
}
