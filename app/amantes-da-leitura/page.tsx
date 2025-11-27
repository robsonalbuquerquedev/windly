import AmantesDaLeitura from "@/components/amantes-da-leitura/AmantesDaLeitura";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Amantes da Leitura — Livros Recomendados | Windly",
    },

    description:
        "Descubra uma seleção especial de livros, ebooks e materiais de leitura recomendados pelo Windly. Conteúdo valioso para quem deseja evoluir em tecnologia, programação e desenvolvimento pessoal.",

    keywords: [
        "Amantes da Leitura Windly",
        "Livros Recomendados",
        "Ebooks",
        "PDFs",
        "Leitura de Tecnologia",
        "Livros de Programação",
        "Desenvolvimento Web",
        "Next.js",
        "TailwindCSS",
        "SEO",
        "HTML Semântico",
    ],

    alternates: {
        canonical: "https://windly.com.br/amantes-da-leitura",
    },

    openGraph: {
        title: "Amantes da Leitura — Livros Recomendados | Windly",
        description:
            "Explore os livros e ebooks favoritos selecionados pelo Windly — uma curadoria especial para quem busca conhecimento em tecnologia.",
        url: "https://windly.com.br/amantes-da-leitura",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Imagem ilustrativa da página Amantes da Leitura do Windly",
            },
        ],
        type: "website",
    },
};

export default function AmantesDaLeiturasage() {
    return (
        <AmantesDaLeitura />
    );
}
