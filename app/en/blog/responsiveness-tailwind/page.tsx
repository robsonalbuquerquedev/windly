import ResponsivenessTailwindContent from "@/components/blog/ResponsivenessTailwindContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Responsiveness in TailwindCSS — Windly",
    },

    description:
        "Learn how responsiveness works in TailwindCSS using breakpoints, mobile-first classes, and practical utilities for modern interfaces.",

    keywords: [
        "TailwindCSS",
        "Responsiveness",
        "Breakpoints",
        "Mobile First",
        "CSS",
        "Web Development",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/blog/responsiveness-tailwind",
        languages: {
            "en-US": "https://windly.com.br/en/blog/responsiveness-tailwind",
            "pt-BR": "https://windly.com.br/pt/blog/responsividade-tailwind",
        },
    },

    openGraph: {
        title: "Responsiveness in TailwindCSS — Windly",
        description:
            "A complete guide on breakpoints, responsive classes, and modern techniques to build adaptive interfaces with TailwindCSS.",
        url: "https://windly.com.br/en/blog/responsiveness-tailwind",
        siteName: "Windly",
        images: [
            {
                url: "/responsiveness-tailwind/og-responsiveness.png",
                width: 1200,
                height: 630,
                alt: "Article cover about responsiveness in TailwindCSS",
            },
        ],
        type: "article",
    },
};

export default function ResponsivenessTailwindPage() {
    return (
        <ResponsivenessTailwindContent />
    );
}
