import ArquiteturaProjeto from "@/components/blog/ArquiteturaProjeto";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Como montar sua arquitetura de projeto moderna — Windly",
    },

    description:
        "Guia completo sobre estrutura moderna de pastas, padrões profissionais, componentização, separação de responsabilidades e organização aplicada em projetos reais de produção.",

    keywords: [
        "Arquitetura de Projeto",
        "Estrutura de Pastas",
        "Boas práticas",
        "Clean Architecture",
        "Frontend moderno",
        "Backend moderno",
        "Organização de código",
        "Design Patterns",
        "Escalabilidade",
        "Windly",
        "Componentização",
        "Desenvolvimento Web",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/blog/arquitetura-de-projeto",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog/arquitetura-de-projeto",
            "en-US": "https://windly.com.br/en/blog/project-architecture",
        },
    },

    openGraph: {
        title: "Como montar sua arquitetura de projeto moderna — Windly",
        description:
            "Aprenda como montar uma arquitetura de projeto moderna e profissional, com padrões de organização usados em aplicações reais e escaláveis.",
        url: "https://windly.com.br/pt/blog/arquitetura-de-projeto",
        siteName: "Windly",
        images: [
            {
                url: "/arquitetura-de-projeto/og-arquitetura.png",
                width: 1200,
                height: 630,
                alt: "Capa do artigo sobre arquitetura moderna de projetos",
            },
        ],
        type: "article",
    },
};

export default function ArquiteturaProjetoPage() {
    return (
        <ArquiteturaProjeto />
    );
}
