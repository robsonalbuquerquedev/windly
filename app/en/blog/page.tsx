import type { Metadata } from "next";
import BlogHeroEN from "@/components/blog/BlogHeroEN";
import BlogContentEN from "@/components/blog/BlogContentEN";

export const metadata: Metadata = {
    title: {
        absolute: "Blog | Windly — Articles on Web, Code, and Best Practices"
    },

    description:
        "Read concise and insightful articles about Tailwind, Next.js, SEO, semantic HTML, clean code, architecture, performance, and modern best practices to help you grow as a web developer.",

    keywords: [
        "Programming blog",
        "TailwindCSS",
        "Next.js",
        "SEO",
        "Semantic HTML",
        "Clean Code",
        "Software architecture",
        "Web development",
        "Accessibility",
        "Performance",
        "Windly"
    ],

    alternates: {
        canonical: "https://windly.com.br/en/blog",
        languages: {
            "en-US": "https://windly.com.br/en/blog",
            "pt-BR": "https://windly.com.br/pt/blog"
        },
    },

    openGraph: {
        title: "Blog — Windly",
        description:
            "Complete articles on Tailwind, Next.js, architecture, SEO, and best practices for modern developers.",
        url: "https://windly.com.br/en/blog",
        siteName: "Windly",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/en/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Windly — Blog"
            }
        ]
    }
};

export default function BlogPageEN() {
    return (
        <main>
            <BlogHeroEN />

            {/* O ID conecta com o CTA */}
            <div id="posts">
                <BlogContentEN />
            </div>
        </main>
    );
}
