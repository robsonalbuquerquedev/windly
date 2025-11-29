import Tailwind from "@/components/guias-tutoriais/Tailwind";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Guia Completo de TailwindCSS — Windly",
    },

    description:
        "Aprenda a criar interfaces modernas com TailwindCSS usando classes utilitárias, padrões profissionais, componentes limpos e um fluxo de desenvolvimento rápido, consistente e eficiente.",

    keywords: [
        "TailwindCSS",
        "CSS utilitário",
        "Classes utilitárias",
        "Interface moderna",
        "Estilização rápida",
        "Design responsivo",
        "Boas práticas Tailwind",
        "Componentização CSS",
        "Desenvolvimento Web",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/guias-tutoriais/tailwind",
        languages: {
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/tailwind",
            "en-US": "https://windly.com.br/en/guias-tutoriais/tailwind",
        },
    },

    openGraph: {
        title: "Guia Completo de TailwindCSS — Windly",
        description:
            "Aprenda como usar TailwindCSS para criar interfaces modernas com velocidade, clareza e organização. Um guia prático cheio de exemplos reais usados em produção.",
        url: "https://windly.com.br/pt/guias-tutoriais/tailwind",
        siteName: "Windly",
        images: [
            {
                url: "/guias-tutoriais/tailwind/og-tailwind.png",
                width: 1200,
                height: 630,
                alt: "Capa do guia completo de TailwindCSS",
            },
        ],
        type: "article",
    },
};

export default function TailwindPage() {
    return (
        <Tailwind />
    );
}
