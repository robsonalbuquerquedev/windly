"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Instagram, Mail, Github } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        pathname === href ? "text-sky-400 font-semibold" : "text-white/70 hover:text-white";

    const year = new Date().getFullYear();

    const footerLinks = [
        { label: "Sobre", href: "/sobre" },
        { label: "Contato", href: "/contato" },
        { label: "Política de Privacidade", href: "/politica-de-privacidade" },
        { label: "Termos de Uso", href: "/termos-de-uso" }
    ];

    return (
        <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-xl mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Logo + texto */}
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="/logo-windly.png"
                        alt="Windly Logo"
                        className="w-20 h-auto drop-shadow-md"
                    />

                    <p className="text-white/70 text-center text-sm max-w-md">
                        Construído com Next.js, TailwindCSS e boas práticas modernas para oferecer
                        performance, acessibilidade e experiência profissional.
                    </p>
                </div>

                {/* Links */}
                <nav className="mt-10">
                    <ul className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
                        {footerLinks.map((link) => (
                            <motion.li
                                key={link.href}
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                            >
                                <Link className={isActive(link.href)} href={link.href}>
                                    {link.label}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Social */}
                <div className="flex justify-center gap-6 mt-10 text-white/70">
                    <Link href="https://instagram.com" target="_blank" aria-label="Instagram do Windly">
                        <Instagram className="w-5 h-5 hover:text-white transition" />
                    </Link>

                    <Link href="mailto:robson.albuquerque.docs@gmail.com" aria-label="E-mail de contato do Windly">
                        <Mail className="w-5 h-5 hover:text-white transition" />
                    </Link>

                    <Link href="https://github.com" target="_blank" aria-label="GitHub do projeto Windly">
                        <Github className="w-5 h-5 hover:text-white transition" />
                    </Link>
                </div>

                {/* Direitos autorais */}
                <p className="text-center text-white/50 text-xs mt-10">
                    © {year} Windly — Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
