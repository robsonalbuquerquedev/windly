import ClassnameNaPraticaContent from "@/components/blog/ClassnameNaPraticaContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "className na prática para páginas reais — Windly",
    },

    description:
        "Aprenda como organizar className no TailwindCSS de forma inteligente, limpa e profissional. Técnicas reais para páginas modernas com menos bagunça, mais clareza e melhor manutenção.",

    keywords: [
        "TailwindCSS",
        "className",
        "Organização de classes",
        "Boas práticas CSS",
        "UI/UX",
        "Desenvolvimento Web",
        "Framer Motion",
        "Windly",
        "Design System",
        "Componentização",
    ],

    alternates: {
        canonical: "https://windly.dev/blog/classname-na-pratica",
    },

    openGraph: {
        title: "className na prática para páginas reais — Windly",
        description:
            "Guia completo sobre organização inteligente de className com TailwindCSS, técnicas profissionais, exemplos reais e boas práticas para deixar seu layout moderno e escalável.",
        url: "https://windly.dev/blog/classname-na-pratica",
        siteName: "Windly",
        images: [
            {
                url: "/blog/classname-na-pratica/og-classname.png",
                width: 1200,
                height: 630,
                alt: "Capa do artigo sobre organização de className no TailwindCSS",
            },
        ],
        type: "article",
    },
};

export default function ResponsividadeTailwindPage() {
    return (
        <ClassnameNaPraticaContent />
    );
}
