import PoliticaDeCookiesPT from "@/components/politica-de-cookies/PoliticaDeCookiesPT";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Política de Cookies — Transparência e Controle | Windly",
    },

    description:
        "Leia a Política de Cookies do Windly e saiba como utilizamos cookies essenciais, de análise, publicidade, personalização e tecnologias relacionadas para melhorar sua experiência.",

    keywords: [
        "Política de Cookies Windly",
        "Cookies",
        "Consentimento",
        "Google Consent Mode",
        "Google AdSense",
        "Privacidade",
        "Dados Pessoais",
        "LGPD",
        "Next.js",
        "TailwindCSS",
        "SEO",
        "HTML Semântico",
    ],

    alternates: {
        canonical: "https://windly.com.br/pt/politica-de-cookies",
        languages: {
            "pt-BR": "https://windly.com.br/pt/politica-de-cookies",
            "en-US": "https://windly.com.br/en/politica-de-cookies",
        },
    },

    openGraph: {
        title: "Política de Cookies — Transparência e Controle | Windly",
        description:
            "Entenda como o Windly utiliza cookies para análise, publicidade, personalização e funcionamento do site, garantindo total transparência e segurança.",
        url: "https://windly.com.br/pt/politica-de-cookies",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Imagem ilustrativa da página de Política de Cookies do Windly",
            },
        ],
        type: "website",
    },
};

export default function PoliticaDeCookiesPage() {
    return (
        <PoliticaDeCookiesPT />
    );
}
