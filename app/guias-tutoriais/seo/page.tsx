import Seo from "@/components/guias-tutoriais/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Guia Prático de SEO Moderno — Windly",
    },

    description:
        "Aprenda técnicas reais e modernas de SEO para estruturar páginas otimizadas, melhorar seu ranqueamento, usar semântica avançada, metadados completos e estratégias práticas que funcionam em produção.",

    keywords: [
        "SEO",
        "Search Engine Optimization",
        "SEO Técnico",
        "HTML Semântico",
        "Otimização de Conteúdo",
        "Estrutura de Página",
        "Metadados",
        "Google Ranking",
        "Boas práticas de SEO",
        "Windly",
        "Desenvolvimento Web",
    ],

    alternates: {
        canonical: "https://windly.com.br/guias-tutoriais/seo",
    },

    openGraph: {
        title: "Guia Prático de SEO Moderno — Windly",
        description:
            "Aprenda como aplicar SEO técnico e estruturado na prática: semântica, metadados, estrutura hierárquica, acessibilidade e estratégias usadas em projetos profissionais.",
        url: "https://windly.com.br/guias-tutoriais/seo",
        siteName: "Windly",
        images: [
            {
                url: "/guias-tutoriais/seo/og-seo.png",
                width: 1200,
                height: 630,
                alt: "Capa do guia de SEO moderno e técnico",
            },
        ],
        type: "article",
    },
};

export default function SeoPage() {
    return (
        <Seo />
    );
}
