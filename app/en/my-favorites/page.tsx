import MyFavorites from "@/components/meus-favoritos/MyFavorites";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "My Favorites — Recommended Products | Windly",
    },

    description:
        "Discover Windly’s personal list of recommended products. Useful, tested, and curated items for everyday use, with automatic updates and a modern look.",

    keywords: [
        "My Favorites Windly",
        "Recommended Products",
        "Favorites List",
        "Affiliates",
        "Useful Products",
        "Recommendations",
        "Next.js",
        "TailwindCSS",
        "SEO",
        "Semantic HTML",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/my-favorites",
        languages: {
            "en-US": "https://windly.com.br/en/my-favorites",
            "pt-BR": "https://windly.com.br/pt/meus-favoritos",
        },
    },

    openGraph: {
        title: "My Favorites — Recommended Products | Windly",
        description:
            "Explore Windly’s curated selection of favorite products — a personal list of useful and recommended items.",
        url: "https://windly.com.br/en/my-favorites",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Illustrative image of Windly's My Favorites page",
            },
        ],
        type: "website",
    },
};

export default function MyFavoritesPage() {
    return (
        <MyFavorites />
    );
}
