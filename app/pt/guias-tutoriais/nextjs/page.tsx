import Nextjs from "@/components/guias-tutoriais/Nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Guia de Boas Práticas em Next.js — Windly",
    },

    description:
        "Aprenda como estruturar projetos em Next.js com organização profissional: rotas, pastas, layouts, componentes reutilizáveis, otimização de performance e padrões modernos usados em produção.",

    keywords: [
        "Next.js",
        "Boas práticas Next.js",
        "Arquitetura Next.js",
        "Estrutura de pastas Next.js",
        "Layouts Next.js",
        "Rotas App Router",
        "Componentização",
        "Desenvolvimento Web",
        "Performance Next.js",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/guias-tutoriais/nextjs",
        languages: {
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/nextjs",
            "en-US": "https://windly.com.br/en/guias-tutoriais/nextjs",
        },
    },

    openGraph: {
        title: "Guia de Boas Práticas em Next.js — Windly",
        description:
            "Um guia completo para estruturar projetos em Next.js de forma sólida e moderna: rotas, layouts, organização de componentes e padrões que aumentam qualidade e velocidade no desenvolvimento.",
        url: "https://windly.com.br/pt/guias-tutoriais/nextjs",
        siteName: "Windly",
        images: [
            {
                url: "/guias-tutoriais/nextjs/og-nextjs.png",
                width: 1200,
                height: 630,
                alt: "Capa do guia de boas práticas em Next.js",
            },
        ],
        type: "article",
    },
};

export default function NextjsPage() {
    return (
        <Nextjs />
    );
}
