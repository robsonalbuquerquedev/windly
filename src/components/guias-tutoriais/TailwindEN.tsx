"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Sparkles,
    Palette,
    Layers,
    Zap,
    Boxes,
    Code,
} from "lucide-react";

export default function TailwindEN() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Zap size={22} />
                        TailwindCSS: speed, consistency, and modern interfaces
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to build modern interfaces using utility classes that make everything
                    fast, lightweight, and easy to maintain. Build consistent, scalable components
                    with maximum productivity using TailwindCSS as your styling layer.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Sparkles size={16} /> Productivity
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Palette size={16} /> Design System
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Componentization
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="tailwind-guide"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Section 1 */}
                    <section
                        aria-labelledby="utilities"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="utilities" className="text-2xl font-bold flex items-center gap-2">
                            <Code size={20} /> Utility classes in practice
                        </h2>

                        <p>
                            TailwindCSS works with a simple approach: each class does a single thing,
                            and you compose the style directly in your HTML or JSX. This keeps the
                            workflow fast and reduces the need for CSS files.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Fewer CSS files to manage.</li>
                            <li>Predictable and consistent styles.</li>
                            <li>Fast creation of layouts and UI.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/tailwind-utility.png"
                                alt="Visual example of TailwindCSS utilities"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Utility classes simplify development and increase speed.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Section 2 */}
                    <section
                        aria-labelledby="design-system"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="design-system" className="text-xl font-semibold flex items-center gap-2">
                            <Palette size={18} /> Building a Design System with Tailwind
                        </h3>

                        <p>
                            Tailwind provides powerful tokens for colors, spacing, typography,
                            and shadows. This allows you to create a consistent visual identity
                            without reinventing the wheel for every component.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Define colors in <code>tailwind.config.js</code>.</li>
                            <li>Standardize spacing, radius, and typography.</li>
                            <li>Use components with reusable classes.</li>
                        </ol>
                    </section>

                    {/* Section 3 */}
                    <section
                        aria-labelledby="componentization"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3
                            id="componentization"
                            className="text-xl font-semibold flex items-center gap-2"
                        >
                            <Layers size={18} /> Efficient componentization
                        </h3>

                        <p>
                            Components combined with Tailwind make your interface clean
                            and easy to maintain. Separating structure from style keeps
                            everything scalable and reduces coupling.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Compose classes with minimal logic.</li>
                            <li>Create reusable visual patterns.</li>
                            <li>Maintain consistency across components.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section
                        aria-labelledby="advantages"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="advantages" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Why use Tailwind?
                        </h3>

                        <p>
                            Tailwind is more than a utility tool — it's a modern development workflow
                            that eliminates repetitive CSS and brings clarity to your code.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Huge productivity boost.</li>
                            <li>Fewer duplicated styles.</li>
                            <li>Guaranteed visual standardization.</li>
                            <li>Perfect integration with React, Next.js, and Vue.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section
                        aria-labelledby="benefits"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="benefits" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefits of a well-applied Tailwind project
                        </h3>

                        <p>Applying Tailwind with best practices gives direct advantages:</p>

                        <ul className="list-disc pl-5">
                            <li>Cleaner code.</li>
                            <li>More consistent UI.</li>
                            <li>Faster delivery.</li>
                            <li>Truly reusable components.</li>
                        </ul>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick checklist</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use utility classes</li>
                            <li>Create tokens in the config</li>
                            <li>Build a lightweight design system</li>
                            <li>Standardize components</li>
                            <li>Avoid unnecessary CSS</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Key features</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Variables and tokens</li>
                            <li>• Simplified responsiveness</li>
                            <li>• Smart utilities</li>
                            <li>• Practical components</li>
                            <li>• Native performance</li>
                        </ul>
                    </div>

                    <nav
                        className="bg-white/60 p-4 rounded-2xl border"
                        aria-label="related-guides"
                    >
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="/en/guides-tutorials/nextjs" className="underline">
                                    Next.js best practices
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/semantic-html" className="underline">
                                    Semantic HTML
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/seo" className="underline">
                                    SEO in practice
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    TailwindCSS allows you to create modern and productive interfaces with agility.
                    Less CSS, more clarity, and much more speed — it’s the perfect foundation for
                    professional projects.
                </p>
            </footer>
        </article>
    );
}
