import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Windly — Tailwind, SEO e Semântica com Classe",
  },

  description:
    "Aprenda TailwindCSS, HTML Semântico, SEO moderno e boas práticas com Next.js usando componentes elegantes, acessíveis e profissionais.",

  keywords: [
    "TailwindCSS",
    "Next.js",
    "SEO",
    "HTML Semântico",
    "Boas Práticas",
    "Desenvolvimento Web",
    "Windly",
  ],

  alternates: {
    canonical: "https://windly.dev/",
  },

  openGraph: {
    title: "Windly — Aprenda Tailwind, Semântica e SEO",
    description:
      "Crie interfaces modernas e profissionais com TailwindCSS e Next.js usando componentes elegantes e práticas reais de SEO.",
    url: "https://windly.dev/",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Windly Hero Image",
      },
    ],
    type: "website",
  },
};

import HeroSplit from "@/components/hero/HeroSplit";
import CardLayout from "@/components/layout/CardLayout";
import CardContent from "@/components/cards/CardContent";

export default function Home() {
  return (
    <>
      <HeroSplit />
      <CardLayout id="comece-agora">
        <CardContent />
      </CardLayout>
    </>
  );
}
