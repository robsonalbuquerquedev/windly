import PoliticaDePrivacidadePT from "@/components/politica-de-privacidade/PoliticaDePrivacidadePT";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Política de Privacidade — Seus Dados e Segurança | Windly",
  },

  description:
    "Leia a Política de Privacidade do Windly e entenda como tratamos dados pessoais, cookies, anúncios, links de afiliados e informações coletadas para garantir total transparência e segurança na navegação.",

  keywords: [
    "Política de Privacidade Windly",
    "Privacidade",
    "Proteção de Dados",
    "Cookies",
    "Google AdSense",
    "Afiliados",
    "Segurança",
    "Dados Pessoais",
    "Next.js",
    "TailwindCSS",
    "SEO",
    "HTML Semântico",
  ],

  alternates: {
    canonical: "https://windly.com.br/pt/politica-de-privacidade",
    languages: {
            "pt-BR": "https://windly.com.br/pt/politica-de-privacidade",
            "en-US": "https://windly.com.br/en/politica-de-privacidade",
        },
  },

  openGraph: {
    title: "Política de Privacidade — Seus Dados e Segurança | Windly",
    description:
      "Saiba como seus dados são tratados no Windly, incluindo cookies, anúncios, links de afiliados e políticas de proteção e transparência.",
    url: "https://windly.com.br/pt/politica-de-privacidade",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa da página de Política de Privacidade do Windly",
      },
    ],
    type: "website",
  },
};

export default function PoliticaDePrivacidadePage() {
    return (
        <PoliticaDePrivacidadePT />
    );
}
