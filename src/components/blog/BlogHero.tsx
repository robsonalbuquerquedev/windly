"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogHero() {
    return (
        <header className="relative w-full bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 text-white py-24 px-6 overflow-hidden">

            {/* 🔹 Efeito suave de brilho */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent)]" />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                {/* Ícone grande (opcional, estiloso) */}
                <div className="flex justify-center mb-6">
                    <BookOpen className="w-16 h-16 text-white/90" />
                </div>

                {/* Título principal */}
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    Blog da Windly
                </h1>

                {/* Subtítulo */}
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                    Artigos sobre desenvolvimento, boas práticas, arquitetura e tecnologia para evoluir seu código e sua carreira.
                </p>

                {/* CTA opcional */}
                <motion.a
                    href="#posts"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-8 px-6 py-3 bg-white text-sky-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition"
                >
                    Ver conteúdos
                </motion.a>
            </motion.div>
        </header>
    );
}
