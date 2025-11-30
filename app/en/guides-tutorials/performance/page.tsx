import PerformaceEN from "@/components/guias-tutoriais/PerformaceEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Modern Web Performance Guide — Windly",
    },

    description:
        "Learn how to optimize images, improve loading speed, reduce layout shifts, use modern formats, and apply real performance best practices in professional projects.",

    keywords: [
        "Web Performance",
        "Image Optimization",
        "Core Web Vitals",
        "LCP",
        "CLS",
        "Fast Loading",
        "Next.js",
        "Frontend Performance",
        "Best Practices",
        "Technical SEO",
        "Responsiveness",
        "Windly",
        "Web Development",
    ],

    alternates: {
        canonical: "https://windly.com.br/en/guides-tutorials/performance",
        languages: {
            "pt-BR": "https://windly.com.br/pt/guias-tutoriais/performance",
            "en-US": "https://windly.com.br/en/guides-tutorials/performance",
        },
    },

    openGraph: {
        title: "Modern Web Performance Guide — Windly",
        description:
            "A complete and practical guide on how to improve your website's performance using real production techniques: responsive images, lazy loading, modern formats, and more.",
        url: "https://windly.com.br/en/guides-tutorials/performance",
        siteName: "Windly",
        images: [
            {
                url: "/performance-web/og-performance.png",
                width: 1200,
                height: 630,
                alt: "Cover of the modern web performance guide",
            },
        ],
        type: "article",
    },
};

export default function PerformacePage() {
    return (
        <PerformaceEN />
    );
}
