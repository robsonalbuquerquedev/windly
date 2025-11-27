import type { Metadata } from "next";
import PoliticaDeAfiliados from "@/components/politica-de-afiliados/PoliticaDeAfiliados";

export const metadata: Metadata = {
    title: {
        absolute: "Política de Afiliados — Transparência nas Recomendações | Windly",
    },

    description:
        "Leia a Política de Afiliados do Windly e entenda como funcionam os links de afiliado, comissões, critérios de recomendação e nosso compromisso com transparência e responsabilidade.",

    keywords: [
        "Política de Afiliados Windly",
        "Afiliados",
        "Comissões",
        "Transparência",
        "Links de Afiliado",
        "Amazon Afiliados",
        "Mercado Livre Afiliados",
        "Shopee Afiliados",
        "Privacidade",
        "LGPD",
        "SEO",
        "Next.js",
        "TailwindCSS",
        "HTML Semântico",
    ],

    alternates: {
        canonical: "https://windly.com.br/politica-de-afiliados",
    },

    openGraph: {
        title: "Política de Afiliados — Transparência nas Recomendações | Windly",
        description:
            "Saiba como o Windly utiliza links de afiliados, como funcionam as comissões e como garantimos recomendações honestas e responsáveis.",
        url: "https://windly.com.br/politica-de-afiliados",
        siteName: "Windly",
        images: [
            {
                url: "/hero-windly.png",
                width: 1200,
                height: 630,
                alt: "Imagem ilustrativa da página de Política de Afiliados do Windly",
            },
        ],
        type: "website",
    },
};

export default function PoliticaDeCookiesPage() {
    return <PoliticaDeAfiliados />;
}
