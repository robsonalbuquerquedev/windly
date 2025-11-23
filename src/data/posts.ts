import { BookOpen, Layout, Search, AlertTriangle, Boxes } from "lucide-react";
import type { Post } from "@/types/post";

export const posts: Post[] = [
    {
        title: "Como pensar responsividade no mundo real com Tailwind",
        description: "Aprenda como transformar designs em layouts reais usando breakpoints e boas práticas de responsividade.",
        href: "/blog/responsividade-tailwind",
        icon: BookOpen
    },
    {
        title: "className na prática para páginas reais",
        description: "Organização inteligente de classes Tailwind sem bagunça, repetição ou confusão.",
        href: "/blog/classname-na-pratica",
        icon: Layout
    },
    {
        title: "SEO para Next.js explicado com Tailwind",
        description: "Entenda como usar metadata, JSON-LD e semântica para melhorar ranqueamento com Next.js.",
        href: "/blog/seo-nextjs-tailwind",
        icon: Search
    },
    {
        title: "Erros que iniciantes cometem ao usar semântica HTML",
        description: "Os maiores deslizes na hora de estruturar páginas e como evitar problemas reais de acessibilidade e SEO.",
        href: "/blog/erros-semantica-html",
        icon: AlertTriangle
    },
    {
        title: "Como montar sua arquitetura de projeto moderna",
        description: "Guia completo sobre estrutura de pastas, padrões, organização, componentes e práticas usadas em produção.",
        href: "/blog/arquitetura-projeto",
        icon: Boxes
    }
];
