"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

/* shadcn/ui accordion imports (assumed available in the project)
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"; */

const ROUTES = [
    { title: "Início", href: "/" },
    { title: "Tailwind", href: "/tailwind" },
    { title: "Next.js", href: "/nextjs" },
    { title: "HTML Semântico", href: "/html-semantico" },
    { title: "SEO", href: "/seo" },
    { title: "Acessibilidade", href: "/acessibilidade" },
    { title: "Performance", href: "/performance" },
    { title: "Blog", href: "/blog" },
    { title: "Sobre", href: "/sobre" },
    { title: "Termos de Uso", href: "/termos-de-uso" },
    { title: "Política de Privacidade", href: "/politica-de-privacidade" },
    { title: "Contato", href: "/contato" },
];

export default function Navbar({ onNavigate }: { onNavigate?: () => void }) {
    return (
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6">
            {ROUTES.slice(0, 8).map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    onClick={onNavigate}
                    className="text-gray-700 hover:text-sky-600 transition font-medium"
                >
                    {route.title}
                </Link>
            ))}

            {/* Grouped menu for institucional */}
            <div className="relative">
                <details className="group">
                    <summary className="list-none cursor-pointer flex items-center gap-2 text-gray-700 font-medium">
                        Mais
                        <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
                    </summary>

                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 p-3 z-30">
                        {ROUTES.slice(8).map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className="block px-3 py-2 rounded hover:bg-gray-50 text-gray-700"
                            >
                                {route.title}
                            </Link>
                        ))}
                    </div>
                </details>
            </div>
        </nav>
    );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.aside
                    key="mobile-menu"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.28 }}
                    className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md p-6 overflow-auto"
                    aria-label="Menu móvel"
                >
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-6">
                            <Link href="/" onClick={onClose} aria-label="Ir para a página inicial">
                                <Image src="/logo-windly.png" alt="Windly" width={120} height={40} />
                            </Link>

                            <button
                                onClick={onClose}
                                aria-label="Fechar menu"
                                className="p-2 rounded-md hover:bg-gray-100"
                            >
                                <X />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Primary links */}
                            {ROUTES.slice(0, 8).map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    onClick={onClose}
                                    className="block w-full rounded-md px-4 py-3 hover:bg-gray-50 text-gray-800 font-medium"
                                >
                                    {route.title}
                                </Link>
                            ))}

                            {/* Accordion for institucional */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="institucional">
                                    <AccordionTrigger className="w-full text-left px-4 py-3">Institucional</AccordionTrigger>
                                    <AccordionContent className="space-y-2 px-4 py-2">
                                        {ROUTES.slice(8).map((route) => (
                                            <Link
                                                key={route.href}
                                                href={route.href}
                                                onClick={onClose}
                                                className="block rounded-md px-3 py-2 hover:bg-gray-50 text-gray-700"
                                            >
                                                {route.title}
                                            </Link>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            {/* CTA */}
                            <div className="mt-6">
                                <Link
                                    href="#comece-agora"
                                    onClick={onClose}
                                    className="w-full block text-center px-4 py-3 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
                                >
                                    Começar Agora
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}