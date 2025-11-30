"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, BarChart2, Target, Link as LinkIcon, TrendingUp } from "lucide-react";

export default function SeoEN() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Search size={22} />
                        SEO in Practice: optimize your pages to grow in search engines
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn real techniques to improve your organic ranking: semantic structure, relevant
                    content, performance, accessibility, and modern strategies that strengthen your
                    presence in search engines consistently and sustainably.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <BarChart2 size={16} /> Technical SEO
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Target size={16} /> Search Intent
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <TrendingUp size={16} /> Organic Growth
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="seo-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            How SEO works in practice
                        </h2>

                        <p>
                            SEO is not only about keywords — it's a combination of user experience,
                            content quality, semantics, performance, accessibility, and authority.
                            The more your site matches the user's intent, the better it performs.
                        </p>

                        <p>
                            The secret is understanding how search engines interpret your page: structure,
                            context, hierarchy, relationship between elements, and clarity of information.
                        </p>
                    </section>

                    <section aria-labelledby="semantic" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="semantic" className="text-xl font-semibold flex items-center gap-2">
                            <Search size={18} /> Semantics & Structure
                        </h3>

                        <p>
                            A well-structured page makes understanding easier for both search engines and
                            people. Using semantic tags improves content readability and automatically
                            enhances accessibility.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Use only one <code>&lt;h1&gt;</code> per page.</li>
                            <li>Follow clear hierarchy with <code>h2</code>, <code>h3</code>, and so on.</li>
                            <li>Use <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;header&gt;</code> when appropriate.</li>
                            <li>Avoid large blocks of text without division.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Example of a well-organized semantic structure for SEO"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                A clear structure helps search engines understand your content and improves
                                navigation for all users.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="content-section" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="content-section" className="text-xl font-semibold flex items-center gap-2">
                            <Target size={18} /> Content with search intent
                        </h3>

                        <p>
                            Every search has a purpose. When your content answers exactly what the user
                            expects, engagement increases — and search engines reward your page.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Identify real questions users ask.</li>
                            <li>Deliver clear answers early.</li>
                            <li>Expand with examples, guides, or lists.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="technical" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="technical" className="text-xl font-semibold flex items-center gap-2">
                            <BarChart2 size={18} /> Technical Optimization
                        </h3>

                        <p>
                            Technical SEO is the foundation. Even with great content, a slow or poorly
                            structured page loses rankings quickly.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Use metadata correctly (title, description and OG tags).</li>
                            <li>Optimize images with <code>next/image</code>.</li>
                            <li>Reduce unnecessary CSS and JS.</li>
                            <li>Avoid CLS and layout shifts.</li>
                        </ul>
                    </section>

                    <section aria-labelledby="links" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="links" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> Authority & Link Building
                        </h3>

                        <p>
                            Links are votes of trust. When your site receives relevant and reliable links,
                            your authority increases — and so does your ranking.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Tip: well-organized internal links provide context and reduce bounce rate.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick Checklist</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use a clear title with keyword</li>
                            <li>Benefit-driven description</li>
                            <li>Organized semantic structure</li>
                            <li>Content matching search intent</li>
                            <li>Optimized images</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">SEO Tools</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Google Search Console</li>
                            <li>• Ahrefs / SEMrush</li>
                            <li>• PageSpeed Insights</li>
                            <li>• Screaming Frog SEO</li>
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
                                <a href="/en/guides-tutorials/performance" className="underline">
                                    Front-end Performance
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/tailwind" className="underline">
                                    Tailwind Organization
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    SEO is an ongoing process: small, consistent adjustments build solid and long-lasting
                    results over time.
                </p>
            </footer>
        </article>
    );
}
