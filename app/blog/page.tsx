import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
    title: {
        absolute: "Blog | Windly — Artigos sobre Web, Código e Boas Práticas"
    },

    description:
        "Leia artigos profundos e objetivos sobre Tailwind, Next.js, SEO, HTML semântico, clean code, arquitetura, desempenho e boas práticas modernas para evoluir no desenvolvimento web.",

    keywords: [
        "Blog de programação",
        "TailwindCSS",
        "Next.js",
        "SEO",
        "HTML semântico",
        "Clean Code",
        "Arquitetura de software",
        "Desenvolvimento Web",
        "Acessibilidade",
        "Performance",
        "Windly"
    ],

    alternates: {
        canonical: "https://windly.dev/blog"
    },

    openGraph: {
        title: "Blog — Windly",
        description:
            "Artigos completos sobre Tailwind, Next.js, arquitetura, SEO e boas práticas para desenvolvedores modernos.",
        url: "https://windly.dev/blog",
        siteName: "Windly",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Windly — Blog"
            }
        ]
    }
};

export default function BlogPage() {
    return (
        <main>
            <BlogHero />

            {/* O ID conecta com o CTA */}
            <div id="posts">
                <BlogContent />
            </div>
        </main>
    );
}
