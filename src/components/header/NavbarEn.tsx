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
// 📌 Route Organization + Icons
// ---------------------------

// 🔹 Institutional routes (Blog, About, Contact)
const institutionalRoutes = [
    { label: "Blog", href: "/en/blog", icon: BookOpen },
    { label: "About", href: "/en/about", icon: Info },
    { label: "Contact", href: "/en/contact", icon: Mail },
];

// 🔹 Extra content routes (curation)
const contentExtraRoutes = [
    { label: "My Favorites", href: "/en/my-favorites", icon: Heart },
    { label: "Book Lovers", href: "/en/book-lovers", icon: Library },
];

// 🔹 Guides & Tutorials
const prefix = "/en/guides-tutorials/";

const tutorialRoutes = [
    { label: "Tailwind", href: `${prefix}tailwind`, icon: Sparkles },
    { label: "Next.js", href: `${prefix}nextjs`, icon: Layers },
    { label: "Semantic HTML", href: `${prefix}semantic-html`, icon: LayoutTemplate },
    { label: "SEO", href: `${prefix}seo`, icon: Search },
    { label: "Accessibility", href: `${prefix}accessibility`, icon: Accessibility },
    { label: "Performance", href: `${prefix}performance`, icon: Gauge },
];

export default function NavbarEN() {
    const pathname = usePathname();

    // Estilo de rota ativa
    const isActive = (href: string) =>
        pathname === href
            ? "text-sky-400 font-semibold"
            : "text-white/80 hover:text-white";

    return (
        <nav aria-label="Menu principal" className="flex items-center gap-6">
            {/* ---------------------------------------------------- */}
            {/* 📌 DESKTOP NAVBAR — Visual organization applied */}
            {/* ---------------------------------------------------- */}
            <div className="hidden md:flex items-center gap-6 text-sm">

                {/* 🔹 Single link: Home */}
                <Link href="/en" className={isActive("/en")}>
                    <Home className="w-4 h-4 mr-2 inline-block" />
                    Home
                </Link>

                {/* 🔹 Dropdown — Guides & Tutorials */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 text-white/80 hover:text-white outline-none cursor-pointer">
                        <BookOpenText className="w-4 h-4" />
                        Guides & Tutorials
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

                {/* 🔹 Institutional: Blog, About, Contact */}
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

                {/* 🔹 Extra Content: Favorites + Reading */}
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

                                {/* 🔹 Home */}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Link href="/en" className={`${isActive("/en")} block py-1`}>
                                        <Home className="w-4 h-4 mr-2 inline-block" />
                                        Home
                                    </Link>
                                </motion.li>

                                {/* 🔹 Guides & Tutorials */}
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="tutorials">
                                        <AccordionTrigger className="py-1 flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-sky-400" />
                                            Guides & Tutorials
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

                                {/* 🔹 Institutional: Blog, About, Contact */}
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

                                {/* 🔹 Extra Content: Favorites + Reading */}
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
