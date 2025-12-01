import { BookOpen, Layout, Search, AlertTriangle, Boxes } from "lucide-react";
import type { Post } from "@/types/post";

export const posts: Post[] = [
    {
        title: "How to Think About Responsiveness in the Real World with Tailwind",
        description: "Learn how to turn designs into real layouts using breakpoints and modern responsive practices.",
        href: "/en/blog/responsiveness-tailwind",
        icon: BookOpen
    },
    {
        title: "className in Practice for Real Pages",
        description: "Smart organization of Tailwind classes without mess, repetition, or confusion.",
        href: "/en/blog/classname-in-practice",
        icon: Layout
    },
    {
        title: "SEO for Next.js Explained with Tailwind",
        description: "Understand how to use metadata, JSON-LD, and semantics to improve ranking in Next.js projects.",
        href: "/en/blog/seo-nextjs-tailwindcss",
        icon: Search
    },
    {
        title: "Mistakes Beginners Make When Using HTML Semantics",
        description: "The biggest pitfalls when structuring pages and how to avoid real accessibility and SEO problems.",
        href: "/en/blog/html-semantics-mistakes",
        icon: AlertTriangle
    },
    {
        title: "How to Build Your Modern Project Architecture",
        description: "A complete guide on folder structure, patterns, component organization, and production-level practices.",
        href: "/en/blog/project-architecture",
        icon: Boxes
    }
];
