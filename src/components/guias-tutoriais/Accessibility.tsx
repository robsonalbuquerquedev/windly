"use client";

import { motion } from "framer-motion";
import { Accessibility as AccessibilityIcon, Eye, Keyboard, Users } from "lucide-react";
import Image from "next/image";

export default function Accessibility() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <AccessibilityIcon size={22} />
                        Web Accessibility (A11y): make your interface inclusive for everyone
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to apply simple and effective accessibility techniques to create more
                    human, inclusive, and easy-to-navigate interfaces. Essential practices to improve
                    SEO, usability, overall user experience, and expand your content reach.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Eye size={16} /> Contrast & Colors
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Keyboard size={16} /> Keyboard Navigation
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Users size={16} /> Digital Inclusion
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="accessibility-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="importance" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="importance" className="text-2xl font-bold">
                            Why accessibility matters
                        </h2>

                        <p>
                            Accessibility ensures that anyone — with or without disabilities — can use,
                            understand, and navigate an interface. It improves quality, inclusion, and
                            mobile experience, while boosting search visibility and overall performance.
                        </p>

                        <p>
                            Beyond social impact, accessibility improves SEO, engagement metrics, and even
                            ad monetization. An accessible site keeps users longer and removes navigation barriers.
                        </p>
                    </section>

                    <section aria-labelledby="keyboard" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="keyboard" className="text-xl font-semibold flex items-center gap-2">
                            <Keyboard size={18} /> Keyboard Navigation
                        </h3>

                        <p>
                            Many accessibility issues involve poor keyboard navigation. Users with reduced mobility
                            rely entirely on the Tab key to access interactive elements.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Ensure logical focus order.</li>
                            <li>Always use <code>&lt;button&gt;</code> for buttons — never <code>&lt;div&gt;</code>.</li>
                            <li>Links must always include an <code>href</code>.</li>
                            <li>Avoid hiding focusable elements using CSS.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/a11y-keyboard.png"
                                alt="Example of keyboard navigation with visible focus indicator"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                A visual focus indicator helps all users, especially those who rely on keyboard navigation.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="color" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="color" className="text-xl font-semibold flex items-center gap-2">
                            <Eye size={18} /> Colors, Contrast & Readability
                        </h3>

                        <p>
                            About 8% of men have some degree of color blindness. Ensuring good contrast improves readability
                            for everyone — including those using low-brightness screens.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Maintain a minimum contrast ratio of 4.5:1 for text.</li>
                            <li>Do not rely on color alone to convey meaning.</li>
                            <li>Use size, weight, and spacing to create visual hierarchy.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="aria" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="aria" className="text-xl font-semibold">Correct ARIA Usage</h3>

                        <p>
                            ARIA is meant to complement HTML, not replace it. Only use it when native elements aren't enough —
                            never to recreate basic components.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefer semantic elements whenever possible.</li>
                            <li>Avoid unnecessary roles — <code>role="button"</code> is rarely required.</li>
                            <li>
                                Use attributes like <code>aria-expanded</code> and <code>aria-controls</code> in collapsible elements.
                            </li>
                        </ul>
                    </section>

                    <section aria-labelledby="test" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="test" className="text-xl font-semibold">Testing & Continuous Auditing</h3>

                        <p>
                            Tools like Lighthouse, Axe DevTools, and WAVE help validate whether your interface is truly accessible.
                            Testing with screen readers and keyboard navigation is essential.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Tip: keep an accessibility checklist as part of your code review process.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick Best Practices</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Clear headings with proper hierarchy</li>
                            <li>Descriptive image alt text</li>
                            <li>Interactive components using native elements</li>
                            <li>Labels and instructions for forms</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Useful Tools</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Axe DevTools</li>
                            <li>• Lighthouse Accessibility</li>
                            <li>• WAVE Evaluation Tool</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="/en/guides-tutorials/performance" className="underline">Front-end Performance</a></li>
                            <li><a href="/en/guides-tutorials/seo" className="underline">SEO Fundamentals</a></li>
                            <li><a href="/en/guides-tutorials/tailwind" className="underline">Tailwind Patterns</a></li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Accessibility is not an optional feature — it’s a continuous improvement. Small adjustments
                    made throughout releases create a more inclusive and complete experience.
                </p>
            </footer>
        </article>
    );
}
