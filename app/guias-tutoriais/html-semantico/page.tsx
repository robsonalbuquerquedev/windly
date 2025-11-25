import HtmlSemantico from "@/components/guias-tutoriais/HtmlSemantico";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Guia Completo de HTML Semântico — Windly",
    },

    description:
        "Aprenda como aplicar HTML semântico de forma moderna e profissional para melhorar acessibilidade, SEO, organização estrutural e entendimento do conteúdo por usuários e buscadores. Um guia prático com exemplos reais usados em produção.",

    keywords: [
        "HTML Semântico",
        "Semântica HTML5",
        "Estrutura de Página",
        "Boas práticas HTML",
        "Acessibilidade Web",
        "SEO Técnico",
        "Tags Semânticas",
        "Organização de Conteúdo",
        "Desenvolvimento Web",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/guias-tutoriais/html-semantico",
    },

    openGraph: {
        title: "Guia Completo de HTML Semântico — Windly",
        description:
            "Aprenda a construir páginas claras, acessíveis e otimizadas usando HTML semântico moderno. Um guia prático com estrutura, exemplos, checklist e boas práticas reais.",
        url: "https://windly.com.br/guias-tutoriais/html-semantico",
        siteName: "Windly",
        images: [
            {
                url: "/guias-tutoriais/html-semantico/og-html-semantico.png",
                width: 1200,
                height: 630,
                alt: "Capa do guia completo de HTML semântico",
            },
        ],
        type: "article",
    },
};

export default function HtmlSemanticoPage() {
    return (
        <HtmlSemantico />
    );
}
