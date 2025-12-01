import type { Metadata } from "next";
import BlogHeroPT from "@/components/blog/BlogHeroPT";
import BlogContentPT from "@/components/blog/BlogContentPT";

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
        canonical: "https://windly.com.br/pt/blog",
        languages: {
            "pt-BR": "https://windly.com.br/pt/blog",
            "en-US": "https://windly.com.br/en/blog",
        },
    },

    openGraph: {
        title: "Blog — Windly",
        description:
            "Artigos completos sobre Tailwind, Next.js, arquitetura, SEO e boas práticas para desenvolvedores modernos.",
        url: "https://windly.com.br/pt/blog",
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

export default function BlogPagePT() {
    return (
        <main>
            <BlogHeroPT />

            {/* O ID conecta com o CTA */}
            <div id="posts">
                <BlogContentPT />
            </div>
        </main>
    );
}
