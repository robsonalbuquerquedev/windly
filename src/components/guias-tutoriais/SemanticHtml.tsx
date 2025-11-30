"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Layers,
    Landmark,
    Blocks,
    Accessibility,
    Shapes,
    Link as LinkIcon,
} from "lucide-react";

export default function SemanticHtml() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Landmark size={22} />
                        Semantic HTML: write clearer, more accessible and optimized code
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to use modern tags to improve accessibility, SEO, structure and
                    code clarity. Turn loose blocks into well-defined pages that are easy to
                    navigate and ready for search engines and assistive technologies.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Accessibility size={16} /> Accessibility
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Logical Structure
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Blocks size={16} /> Componentization
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="semantic-html-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            What is semantic HTML?
                        </h2>

                        <p>
                            Semantic HTML is the practice of using tags that carry meaning. Instead
                            of building everything with <code>&lt;div&gt;</code>, you use elements
                            that describe their role: <code>&lt;header&gt;</code>,
                            <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
                            <code>&lt;section&gt;</code> and more.
                        </p>

                        <p>
                            This improves SEO, accessibility, code understanding and how search
                            engines interpret your page.
                        </p>
                    </section>

                    <section aria-labelledby="structure" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="structure" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Clear and organized structure
                        </h3>

                        <p>
                            A well-organized page follows a logical hierarchy. Each area has its
                            purpose and helps assistive tech and search engines understand the content.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Use <code>&lt;header&gt;</code> to introduce a page or section.</li>
                            <li><code>&lt;nav&gt;</code> should represent sets of links.</li>
                            <li><code>&lt;main&gt;</code> contains the main content of the page.</li>
                            <li><code>&lt;section&gt;</code> divides content into themed blocks.</li>
                            <li><code>&lt;article&gt;</code> represents independent content.</li>
                            <li><code>&lt;aside&gt;</code> is ideal for complementary info.</li>
                            <li><code>&lt;footer&gt;</code> closes and contextualizes content.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Diagram illustrating modern semantic structure in HTML5"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Visual example of how semantic HTML organizes key areas of a page.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="hierarchy" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="hierarchy" className="text-xl font-semibold flex items-center gap-2">
                            <Shapes size={18} /> Heading hierarchy
                        </h3>

                        <p>
                            The correct heading hierarchy helps both humans and search engines
                            understand the flow of your content.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Use only one <code>&lt;h1&gt;</code> per page.</li>
                            <li>Organize content with <code>h2</code>, <code>h3</code>, <code>h4</code>…</li>
                            <li>Avoid skipping levels unnecessarily.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="accessibility" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="accessibility" className="text-xl font-semibold flex items-center gap-2">
                            <Accessibility size={18} /> Accessibility benefits
                        </h3>

                        <p>
                            When HTML follows semantic standards, screen readers navigate better,
                            people with cognitive challenges understand faster and navigation becomes
                            more efficient.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Correct tag = clear meaning.</li>
                            <li>Less need for manual ARIA.</li>
                            <li>Better keyboard navigation.</li>
                        </ul>
                    </section>

                    <section aria-labelledby="seo" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="seo" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> SEO improvements
                        </h3>

                        <p>
                            Semantic tags help search engines understand which parts of the page are
                            more relevant, what the title is, what is the main content and what is context.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            The clearer the structure, the easier it is to rank well.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick checklist</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use meaningful tags</li>
                            <li>Correct heading hierarchy</li>
                            <li>Avoid divs without purpose</li>
                            <li>Structure sections logically</li>
                            <li>Keep consistency</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Important tags</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• header, nav, main, footer</li>
                            <li>• section, article, aside</li>
                            <li>• figure and figcaption</li>
                            <li>• time, mark, strong, em</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="/en/guides-tutorials/accessibility" className="underline">
                                    Web Accessibility
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/seo" className="underline">
                                    SEO in Practice
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/performance" className="underline">
                                    Front-end Performance
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Semantic HTML is a long-term investment: the clearer your structure,
                    the more your code grows with quality and impact.
                </p>
            </footer>
        </article>
    );
}
