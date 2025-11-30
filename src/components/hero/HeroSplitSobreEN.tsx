"use client";

import Image from "next/image";
import AnchorButton from "@/components/buttons/AnchorButton";

export default function HeroSplitSobreEN() {
    return (
        <section
            className="
                w-full
                pt-10 md:pt-20
                pb-16
                flex flex-col md:flex-row
                items-center
                gap-12
            "
        >
            {/* Left: Text */}
            <article className="flex-1 space-y-6">
                <header className="space-y-3">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        The story behind Windly
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700">
                        A project born from real practice and shaped into a modern guide
                        about Tailwind, SEO, semantics, and Next.js — all with a focus on
                        organization, clarity, and professionalism.
                    </p>
                </header>

                <section className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                        Windly emerged while I was creating and maintaining projects such as{" "}
                        <strong>cantosjsm.com.br</strong> and{" "}
                        <strong>aprenderviolaoonline.com.br</strong>. During this process, I realized
                        I needed a place where I could apply, study, and refine modern development
                        techniques.
                    </p>

                    <p>
                        That’s how Windly was born: an environment designed to be extremely
                        organized, modular, and scalable — reflecting everything Next.js and
                        Tailwind can offer when used with care and intention.
                    </p>

                    <p>
                        Then came the inevitable question:{" "}
                        <em>
                            “If this is helping me so much, why not help other people too?”
                        </em>{" "}
                        And so, Windly stopped being just a study project and became a platform
                        that shares clear, practical, and accessible knowledge.
                    </p>

                    <p>
                        Here you’ll find structured content written with dedication — always
                        evolving, expanding, and focused on delivering real value to anyone
                        looking to learn and grow in the world of technology.
                    </p>
                </section>

                <footer>
                    <AnchorButton href="#see-projects">
                        Explore other projects
                    </AnchorButton>
                </footer>
            </article>

            {/* Right: Image */}
            <figure className="flex-1 flex justify-center">
                <Image
                    src="/robson.png"
                    alt="Photo of Robson Albuquerque, creator of Windly"
                    width={480}
                    height={480}
                    className="
                        rounded-2xl
                        shadow-xl
                        object-cover
                        max-w-xs md:max-w-sm
                    "
                    priority
                />
            </figure>
        </section>
    );
}
