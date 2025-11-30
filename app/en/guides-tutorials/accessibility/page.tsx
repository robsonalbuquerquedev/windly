import Accessibility from "@/components/guias-tutoriais/Accessibility";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Complete Web Accessibility Guide (A11y) — Windly",
    },

    description:
        "Learn how to make your interface truly inclusive by applying modern accessibility techniques: keyboard navigation, ARIA, proper semantics, visible focus, adequate contrast, and real-world best practices used in production.",

    keywords: [
        "Web Accessibility",
        "A11y",
        "Accessibility Best Practices",
        "Keyboard Navigation",
        "HTML Semantics",
        "ARIA",
        "Digital Inclusion",
        "Usability",
        "Inclusive Design",
        "Color Contrast",
        "Next.js Accessibility",
        "Windly",
        "Web Development",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/guides-tutorials/accessibility",
        languages: {
            "en-US": "https://windly.com.br/en/guides-tutorials/accessibility",
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/acessibilidade",
        },
    },

    openGraph: {
        title: "Complete Web Accessibility Guide (A11y) — Windly",
        description:
            "An essential and practical guide to building inclusive and accessible interfaces with a focus on keyboard navigation, visible focus, ARIA, semantics, and modern standards.",
        url: "https://windly.com.br/en/guides-tutorials/accessibility",
        siteName: "Windly",
        images: [
            {
                url: "/accessibility/og-accessibility.png",
                width: 1200,
                height: 630,
                alt: "Cover of the web accessibility (A11y) guide",
            },
        ],
        type: "article",
    },
};

export default function AccessibilityPage() {
    return (
        <Accessibility />
    );
}
