import TailwindEN from "@/components/guias-tutoriais/TailwindEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Complete TailwindCSS Guide — Windly",
    },

    description:
        "Learn how to build modern interfaces with TailwindCSS using utility classes, professional patterns, clean components, and a fast, consistent and efficient development workflow.",

    keywords: [
        "TailwindCSS",
        "Utility CSS",
        "Utility classes",
        "Modern UI",
        "Fast styling",
        "Responsive design",
        "Tailwind best practices",
        "CSS componentization",
        "Web Development",
        "Windly",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/guides-tutorials/tailwind",
        languages: {
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/tailwind",
            "en-US": "https://windly.com.br/en/guides-tutorials/tailwind",
        },
    },

    openGraph: {
        title: "Complete TailwindCSS Guide — Windly",
        description:
            "Learn how to use TailwindCSS to create modern interfaces with speed, clarity and organization. A practical guide full of real examples used in production.",
        url: "https://windly.com.br/en/guides-tutorials/tailwind",
        siteName: "Windly",
        images: [
            {
                url: "/tailwind/og-tailwind.png",
                width: 1200,
                height: 630,
                alt: "Cover of the complete TailwindCSS guide",
            },
        ],
        type: "article",
    },
};

export default function TailwindPageEN() {
    return (
        <TailwindEN />
    );
}
