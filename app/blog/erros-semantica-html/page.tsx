import ErrosSemanticaHtml from "@/components/blog/ErrosSemanticaHtml";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Erros que iniciantes cometem ao usar Semântica HTML — Windly",
    },

    description:
        "Descubra os erros mais comuns ao usar semântica HTML e aprenda como melhorar acessibilidade, SEO e a estrutura das suas páginas com técnicas modernas e práticas reais.",

    keywords: [
        "HTML Semântico",
        "Semântica HTML",
        "HTML5",
        "Acessibilidade Web",
        "SEO Técnico",
        "Desenvolvimento Web",
        "Tags Semânticas",
        "Front-end Moderno",
        "Boas Práticas HTML",
        "Estruturação de Páginas",
        "Windly",
        "Erros de Iniciantes HTML",
    ],

    alternates: {
        canonical: "https://windly.dev/blog/erros-semantica-html",
    },

    openGraph: {
        title: "Erros que iniciantes cometem ao usar Semântica HTML — Windly",
        description:
            "Um guia profundo revelando os erros mais comuns de quem está aprendendo HTML e como aplicar semântica da forma correta para melhorar SEO, acessibilidade e organização do código.",
        url: "https://windly.dev/blog/erros-semantica-html",
        siteName: "Windly",
        images: [
            {
                url: "/blog/erros-semantica-html/og-erros-semantica-html.png",
                width: 1200,
                height: 630,
                alt: "Capa do artigo sobre erros comuns ao usar semântica HTML",
            },
        ],
        type: "article",
    },
};

export default function ResponsividadeTailwindPage() {
    return (
        <ErrosSemanticaHtml />
    );
}