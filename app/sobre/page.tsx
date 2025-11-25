import HeroSplitAbout from "@/components/hero/HeroSplitAbout";
import CardLayout from "@/components/layout/CardLayout";
import CardProject from "@/components/cards/CardProject";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Sobre o Windly — História, Propósito e Profissionalismo",
  },

  description:
    "Conheça a história do Windly: um projeto criado a partir de experiências reais com Next.js, TailwindCSS e SEO. Descubra como ele nasceu da prática, organização e do desejo de compartilhar conhecimento de forma clara e profissional.",

  keywords: [
    "Sobre Windly",
    "História Windly",
    "TailwindCSS",
    "Next.js",
    "SEO",
    "Desenvolvimento Web",
    "HTML Semântico",
    "Boas Práticas",
    "Projetos Web",
  ],

  alternates: {
    canonical: "https://windly.com.br/sobre",
  },

  openGraph: {
    title: "Sobre o Windly — Origem, Propósito e Projetos",
    description:
      "Entenda a origem do Windly, seu propósito e os projetos que moldaram sua construção. Uma plataforma criada com foco em organização, clareza e boas práticas com Next.js e TailwindCSS.",
    url: "https://windly.com.br/sobre",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Imagem do Hero da página Sobre do Windly",
      },
    ],
    type: "website",
  },
};

export default function Sobre() {
  return (
    <>
      <HeroSplitAbout />
      <CardLayout id="ver-projetos">
        <CardProject />
      </CardLayout>
    </>
  );
}
