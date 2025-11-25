import TermosDeUso from "@/components/termos-de-uso/TermosDeUso";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Termos de Uso — Regras e Condições | Windly",
  },

  description:
    "Leia os Termos de Uso do Windly para entender suas responsabilidades, as nossas políticas, regras de utilização e informações importantes sobre anúncios, afiliados e navegação segura.",

  keywords: [
    "Termos de Uso Windly",
    "Políticas do site",
    "Regras do Windly",
    "Uso do Windly",
    "Afiliados",
    "Google AdSense",
    "Políticas de Privacidade",
    "Next.js",
    "TailwindCSS",
    "SEO",
    "HTML Semântico",
  ],

  alternates: {
    canonical: "https://windly.dev/termos-de-uso",
  },

  openGraph: {
    title: "Termos de Uso — Regras e Condições | Windly",
    description:
      "Conheça as condições de utilização do Windly, incluindo responsabilidade do usuário, direitos autorais, anúncios, políticas de afiliados e regras de navegação.",
    url: "https://windly.dev/termos-de-uso",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa da página de Termos de Uso do Windly",
      },
    ],
    type: "website",
  },
};

export default function TermosDeUsoPage() {
    return (
        <TermosDeUso />
    );
}
