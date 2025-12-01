import ClassnameInPracticeContent from "@/components/blog/ClassnameInPracticeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "className in Practice for Real Pages — Windly",
    },

    description:
        "Learn how to organize className in TailwindCSS in a smart, clean, and professional way. Real techniques for modern pages with less clutter, more clarity, and better maintainability.",

    keywords: [
        "TailwindCSS",
        "className",
        "Class organization",
        "CSS best practices",
        "UI/UX",
        "Web Development",
        "Framer Motion",
        "Windly",
        "Design System",
        "Componentization",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/blog/classname-in-practice",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog/classname-na-pratica",
            "en-US": "https://windly.com.br/en/blog/classname-in-practice",
        },
    },

    openGraph: {
        title: "className in Practice for Real Pages — Windly",
        description:
            "A complete guide on smart className organization with TailwindCSS, professional techniques, real examples, and best practices to keep your layout modern and scalable.",
        url: "https://windly.com.br/en/blog/classname-in-practice",
        siteName: "Windly",
        images: [
            {
                url: "/classname-in-practice/og-classname.png",
                width: 1200,
                height: 630,
                alt: "Cover image of the article about className organization in TailwindCSS",
            },
        ],
        type: "article",
    },
};

export default function ClassnameInPracticePage() {
    return (
        <ClassnameInPracticeContent />
    );
}
