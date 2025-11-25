import Acessibilidade from "@/components/guias-tutoriais/Acessibilidade";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Guia Completo de Acessibilidade Web (A11y) — Windly",
    },

    description:
        "Aprenda como tornar sua interface verdadeiramente inclusiva aplicando técnicas modernas de acessibilidade: navegação por teclado, ARIA, semântica correta, foco visível, contraste adequado e boas práticas reais usadas em produção.",

    keywords: [
        "Acessibilidade Web",
        "A11y",
        "Boas práticas de acessibilidade",
        "Navegação por teclado",
        "Semântica HTML",
        "ARIA",
        "Inclusão digital",
        "Usabilidade",
        "Design inclusivo",
        "Contraste de cores",
        "Acessibilidade Next.js",
        "Windly",
        "Desenvolvimento Web",
    ],

    alternates: {
        canonical: "https://windly.dev/guias-tutoriais/acessibilidade",
    },

    openGraph: {
        title: "Guia Completo de Acessibilidade Web (A11y) — Windly",
        description:
            "Um guia essencial e prático para desenvolver interfaces inclusivas e acessíveis com foco em navegação por teclado, foco visível, ARIA, semântica e padrões modernos.",
        url: "https://windly.dev/guias-tutoriais/acessibilidade",
        siteName: "Windly",
        images: [
            {
                url: "/guias-tutoriais/acessibilidade/og-acessibilidade.png",
                width: 1200,
                height: 630,
                alt: "Capa do guia de acessibilidade web (A11y)",
            },
        ],
        type: "article",
    },
};

export default function ResponsividadeTailwindPage() {
    return (
        <Acessibilidade />
    );
}
