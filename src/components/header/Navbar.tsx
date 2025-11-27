"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    Home, BookOpen, Info, Mail, Heart, Library,
    Sparkles, Layers, LayoutTemplate, Search, Accessibility, Gauge, BookOpenText
} from "lucide-react";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// ---------------------------
// 📌 Organização de Rotas + Ícones
// ---------------------------

// 🔹 Rotas institucionais (Blog, Sobre, Contato)
const institutionalRoutes = [
    { label: "Blog", href: "/blog", icon: BookOpen },
    { label: "Sobre", href: "/sobre", icon: Info },
    { label: "Contato", href: "/contato", icon: Mail },
];

// 🔹 Rotas de conteúdo extra (curadoria)
const contentExtraRoutes = [
    { label: "Meus Favoritos", href: "/meus-favoritos", icon: Heart },
    { label: "Amantes da Leitura", href: "/amantes-da-leitura", icon: Library },
];

// 🔹 Guias & Tutoriais
const prefix = "/guias-tutoriais/";

const tutorialRoutes = [
    { label: "Tailwind", href: `${prefix}tailwind`, icon: Sparkles },
    { label: "Next.js", href: `${prefix}nextjs`, icon: Layers },
    { label: "HTML Semântico", href: `${prefix}html-semantico`, icon: LayoutTemplate },
    { label: "SEO", href: `${prefix}seo`, icon: Search },
    { label: "Acessibilidade", href: `${prefix}acessibilidade`, icon: Accessibility },
    { label: "Performance", href: `${prefix}performance`, icon: Gauge },
];

export default function Navbar() {
    const pathname = usePathname();

    // Estilo de rota ativa
    const isActive = (href: string) =>
        pathname === href
            ? "text-sky-400 font-semibold"
            : "text-white/80 hover:text-white";

    return (
        <nav aria-label="Menu principal" className="flex items-center gap-6">
            {/* ---------------------------------------------------- */}
            {/* 📌 DESKTOP NAVBAR — Organização visual aplicada */}
            {/* ---------------------------------------------------- */}
            <div className="hidden md:flex items-center gap-6 text-sm">

                {/* 🔹 Link sozinho: Início */}
                <Link href="/" className={isActive("/")}>
                    <Home className="w-4 h-4 mr-2 inline-block" />
                    Início
                </Link>

                {/* 🔹 Dropdown — Guias & Tutoriais */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 text-white/80 hover:text-white outline-none cursor-pointer">
                        <BookOpenText className="w-4 h-4" />
                        Guias & Tutoriais
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="start"
                        className="w-56 bg-zinc-900/90 backdrop-blur-xl border border-white/10"
                    >
                        {tutorialRoutes.map((route) => {
                            const Icon = route.icon;

                            return (
                                <DropdownMenuItem key={route.href} asChild>
                                    <Link
                                        href={route.href}
                                        className={`flex items-center px-2 py-1.5 gap-2 ${isActive(route.href)} cursor-pointer`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {route.label}
                                    </Link>
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* 🔹 Institucional: Blog, Sobre, Contato */}
                {institutionalRoutes.map((route) => {
                    const Icon = route.icon;

                    return (
                        <motion.li
                            key={route.href}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 220, damping: 14 }}
                            className="list-none"
                        >
                            <Link
                                href={route.href}
                                className={`${isActive(route.href)} flex items-center gap-2`}
                            >
                                <Icon className="w-4 h-4 inline-block" />
                                {route.label}
                            </Link>
                        </motion.li>
                    );
                })}

                {/* 🔹 Conteúdo Extra: Favoritos + Leitura */}
                {contentExtraRoutes.map((route) => {
                    const Icon = route.icon;

                    return (
                        <motion.li
                            key={route.href}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 220, damping: 14 }}
                            className="list-none"
                        >
                            <Link
                                href={route.href}
                                className={`${isActive(route.href)} flex items-center gap-2`}
                            >
                                <Icon className="w-4 h-4 inline-block" />
                                {route.label}
                            </Link>
                        </motion.li>
                    );
                })}
            </div>

            {/* ------------------------- */}
            {/* 📱 MOBILE */}
            {/* ------------------------- */}
            <div className="md:hidden w-full">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full text-white bg-black/30 rounded-xl backdrop-blur-md border border-white/10"
                >
                    <AccordionItem value="menu">
                        <AccordionTrigger className="px-4 py-3">
                            Menu
                        </AccordionTrigger>

                        <AccordionContent>
                            <ul className="flex flex-col gap-3 px-4 pb-4 text-sm">

                                {/* 🔹 Início */}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Link href="/" className={`${isActive("/")} block py-1`}>
                                        <Home className="w-4 h-4 mr-2 inline-block" />
                                        Início
                                    </Link>
                                </motion.li>

                                {/* 🔹 Guias & Tutoriais */}
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="tutorials">
                                        <AccordionTrigger className="py-1 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-sky-400" />
                                            Guias & Tutoriais
                                        </AccordionTrigger>

                                        <AccordionContent>
                                            <ul className="flex flex-col gap-2 pl-4 border-l border-white/10">
                                                {tutorialRoutes.map((route) => {
                                                    const Icon = route.icon;

                                                    return (
                                                        <motion.li
                                                            key={route.href}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                        >
                                                            <Link
                                                                href={route.href}
                                                                className={`${isActive(route.href)} flex items-center gap-2 py-1`}
                                                            >
                                                                <Icon className="w-4 h-4" />
                                                                {route.label}
                                                            </Link>
                                                        </motion.li>
                                                    );
                                                })}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                {/* 🔹 Institucional — Blog, Sobre, Contato */}
                                {institutionalRoutes.map((route) => {
                                    const Icon = route.icon;

                                    return (
                                        <motion.li
                                            key={route.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <Link
                                                href={route.href}
                                                className={`${isActive(route.href)} flex items-center gap-2 py-1`}
                                            >
                                                <Icon className="w-4 h-4" />
                                                {route.label}
                                            </Link>
                                        </motion.li>
                                    );
                                })}

                                {/* 🔹 Conteúdo Extra — Favoritos + Leitura */}
                                {contentExtraRoutes.map((route) => {
                                    const Icon = route.icon;

                                    return (
                                        <motion.li
                                            key={route.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <Link
                                                href={route.href}
                                                className={`${isActive(route.href)} flex items-center gap-2 py-1`}
                                            >
                                                <Icon className="w-4 h-4" />
                                                {route.label}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </nav>
    );
}
