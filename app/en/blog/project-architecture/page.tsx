import ProjectArchitecture from "@/components/blog/ProjectArchitecture";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "How to Build Your Modern Project Architecture — Windly",
    },

    description:
        "Complete guide on modern folder structure, professional patterns, componentization, separation of responsibilities, and organization applied in real production projects.",

    keywords: [
        "Project Architecture",
        "Folder Structure",
        "Best Practices",
        "Clean Architecture",
        "Modern Frontend",
        "Modern Backend",
        "Code Organization",
        "Design Patterns",
        "Scalability",
        "Windly",
        "Componentization",
        "Web Development",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/blog/project-architecture",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog/arquitetura-de-projeto",
            "en-US": "https://windly.com.br/en/blog/project-architecture",
        },
    },

    openGraph: {
        title: "How to Build Your Modern Project Architecture — Windly",
        description:
            "Learn how to build a modern and professional project architecture with organizational patterns used in real, scalable applications.",
        url: "https://windly.com.br/en/blog/project-architecture",
        siteName: "Windly",
        images: [
            {
                url: "/project-architecture/og-project-architecture.png",
                width: 1200,
                height: 630,
                alt: "Cover image of the article about modern project architecture",
            },
        ],
        type: "article",
    },
};

export default function ProjectArchitecturePage() {
    return (
        <ProjectArchitecture />
    );
}
