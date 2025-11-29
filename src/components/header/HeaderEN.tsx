"use client";

import NavbarEn from "@/components/header/NavbarEn";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeaderEN() {
    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href="/">
                        <Image
                            src="/logo-windly.png"
                            alt="Windly Logo"
                            width={140}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </motion.div>

                {/* Navbar */}
                <NavbarEn />

                <LanguageSwitcher />
            </div>
        </header>
    );
}