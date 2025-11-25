import HeroSplitContato from "@/components/hero/HeroSplitContato";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contato — Fale Diretamente Comigo | Windly",
  },

  description:
    "Entre em contato diretamente comigo para dúvidas, sugestões, feedbacks ou ideias sobre desenvolvimento web, Next.js, TailwindCSS e o projeto Windly. Respondo pessoalmente todas as mensagens.",

  keywords: [
    "Contato Windly",
    "Fale comigo",
    "Contato desenvolvimento web",
    "Next.js",
    "TailwindCSS",
    "SEO",
    "Desenvolvimento Web",
    "HTML Semântico",
    "Boas Práticas",
    "Suporte Windly",
  ],

  alternates: {
    canonical: "https://windly.com.br/contato",
  },

  openGraph: {
    title: "Contato — Fale Diretamente Comigo | Windly",
    description:
      "Envie sua mensagem diretamente para mim. Tire dúvidas, compartilhe ideias ou envie sugestões sobre Next.js, TailwindCSS e o projeto Windly.",
    url: "https://windly.com.br/contato",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Imagem ilustrativa da página de Contato do Windly",
      },
    ],
    type: "website",
  },
};

export default function ContatoPage() {
    return (
        <HeroSplitContato />
    );
}
