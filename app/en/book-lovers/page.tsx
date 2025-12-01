import BookLovers from "@/components/amantes-da-leitura/BookLovers";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Book Lovers — Recommended Books | Windly",
    },

    description:
        "Discover a curated selection of books, ebooks, and reading materials recommended by Windly. Valuable content for those who want to grow in technology, programming, and personal development.",

    keywords: [
        "Book Lovers Windly",
        "Recommended Books",
        "Ebooks",
        "PDFs",
        "Tech Reading",
        "Programming Books",
        "Web Development",
        "Next.js",
        "TailwindCSS",
        "SEO",
        "Semantic HTML",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/book-lovers",
        languages: {
            "en-US": "https://windly.com.br/en/book-lovers",
            "pt-BR": "https://windly.com.br/pt/amantes-da-leitura",
        },
    },

    openGraph: {
        title: "Book Lovers — Recommended Books | Windly",
        description:
            "Explore Windly’s favorite books and ebooks — a special curation for those seeking knowledge in technology.",
        url: "https://windly.com.br/en/book-lovers",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Illustrative image of Windly's Book Lovers page",
            },
        ],
        type: "website",
    },
};

export default function BookLoversPage() {
    return (
        <BookLovers />
    );
}
