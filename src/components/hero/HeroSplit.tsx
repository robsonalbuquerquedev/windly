"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnchorButton from "@/components/buttons/AnchorButton";

export default function HeroSplitAnimated() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden px-6 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left Side — Animated Logo */}
                <motion.div
                    className="relative w-full h-64 md:h-96"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/hero-windly.png"
                        alt="Windly Logo Illustration"
                        fill
                        className="object-contain drop-shadow-xl"
                    />
                </motion.div>

                {/* Right Side — Animated Text */}
                <motion.div
                    className="space-y-6 text-gray-800"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                    >
                        Aprenda Tailwind, SEO e Semântica com o poder do
                        <span className="text-sky-600"> Windly</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                    >
                        Construa interfaces elegantes, rápidas e profissionais usando Next.js e boas práticas modernas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        <AnchorButton href="#comece-agora">
                            Começar Agora
                        </AnchorButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}