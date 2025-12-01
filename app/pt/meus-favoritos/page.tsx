import MeusFavoritos from "@/components/meus-favoritos/MeusFavoritos";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Meus Favoritos — Produtos Recomendados | Windly",
    },

    description:
        "Conheça a lista pessoal de produtos recomendados pelo Windly. Itens úteis, testados e selecionados para o dia a dia, com renovação automática e visual moderno.",

    keywords: [
        "Meus Favoritos Windly",
        "Produtos Recomendados",
        "Lista de Favoritos",
        "Afiliados",
        "Produtos Úteis",
        "Recomendações",
        "Next.js",
        "TailwindCSS",
        "SEO",
        "HTML Semântico",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/meus-favoritos",
        languages: {
            "pt-BR": "https://windly.com.br/pt/meus-favoritos",
            "en-US": "https://windly.com.br/en/my-favorites",
        },
    },

    openGraph: {
        title: "Meus Favoritos — Produtos Recomendados | Windly",
        description:
            "Explore os produtos favoritos selecionados pelo Windly — uma curadoria pessoal com itens úteis e recomendados.",
        url: "https://windly.com.br/pt/meus-favoritos",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Imagem ilustrativa da página Meus Favoritos do Windly",
            },
        ],
        type: "website",
    },
};

export default function MeusFavoritosPage() {
    return (
        <MeusFavoritos />
    );
}
