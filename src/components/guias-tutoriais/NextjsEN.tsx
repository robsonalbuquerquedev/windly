"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FolderTree,
    Layers,
    GitBranch,
    Component,
    Boxes,
    Workflow,
} from "lucide-react";

export default function NextjsEN() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <FolderTree size={22} />
                        Next.js Best Practices: structure, organization and efficiency
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to organize routes, layouts, components and architecture
                    in Next.js to build scalable, fast and easy-to-maintain projects.
                    Gain clarity, consistency and development speed.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Workflow size={16} /> Architecture
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Organization
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Component size={16} /> Componentization
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="nextjs-best-practices"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Section 1 */}
                    <section
                        aria-labelledby="folder-structure"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="folder-structure" className="text-2xl font-bold flex items-center gap-2">
                            <FolderTree size={20} /> Efficient folder structure
                        </h2>

                        <p>
                            Next.js works extremely well when your project structure is organized
                            with purpose. Well-defined folders bring clarity and reduce coupling.
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>app/</strong>: routes, layouts and pages.</li>
                            <li><strong>components/</strong>: shared components.</li>
                            <li><strong>lib/</strong>: utility functions and business logic.</li>
                            <li><strong>hooks/</strong>: custom hooks.</li>
                            <li><strong>styles/</strong>: global styles.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/next-structure.png"
                                alt="Well-organized folder structure in Next.js"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Visual example of a modern and organized folder structure in Next.js.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Section 2 */}
                    <section
                        aria-labelledby="layouts"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="layouts" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Reusable layouts
                        </h3>

                        <p>
                            The <code>app/</code> folder allows you to create route-based layouts,
                            making the interface much more modular. Components such as headers,
                            sidebars and footers can be declared once and reused.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Create a layout for each area of the site.</li>
                            <li>Avoid duplicating visual structure.</li>
                            <li>Centralize wrappers and fixed UI elements.</li>
                        </ol>
                    </section>

                    {/* Section 3 */}
                    <section
                        aria-labelledby="componentization"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="componentization" className="text-xl font-semibold flex items-center gap-2">
                            <Component size={18} /> Smart componentization
                        </h3>

                        <p>
                            Components should be small, clear and reusable. In Next.js, prioritize
                            server components whenever possible—they are lighter and reduce the
                            JavaScript sent to the client.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefer Server Components.</li>
                            <li>Use Client Components only when required.</li>
                            <li>Keep UI and logic clearly separated.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section
                        aria-labelledby="git-flow"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="git-flow" className="text-xl font-semibold flex items-center gap-2">
                            <GitBranch size={18} /> Development workflow (Git Flow)
                        </h3>

                        <p>
                            Structured projects follow a branch pattern to maintain stability:
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>main</strong>: stable version.</li>
                            <li><strong>dev</strong>: development branch.</li>
                            <li><strong>feature/*</strong>: new features.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section
                        aria-labelledby="benefits"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="benefits" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefits of a well-structured project
                        </h3>

                        <p>Organizing your Next.js project provides direct advantages:</p>

                        <ul className="list-disc pl-5">
                            <li>Easier maintenance.</li>
                            <li>Cleaner components.</li>
                            <li>Consistent layout.</li>
                            <li>Better scalability.</li>
                        </ul>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick checklist</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use proper layouts</li>
                            <li>Organize your routes</li>
                            <li>Prioritize Server Components</li>
                            <li>Structure folders with purpose</li>
                            <li>Standardize your development flow</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Main folders</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• app/</li>
                            <li>• components/</li>
                            <li>• lib/</li>
                            <li>• hooks/</li>
                            <li>• styles/</li>
                        </ul>
                    </div>

                    <nav
                        className="bg-white/60 p-4 rounded-2xl border"
                        aria-label="related-guides"
                    >
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="/en/guides-tutorials/semantic-html" className="underline">
                                    Semantic HTML
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/seo" className="underline">
                                    Practical SEO
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/accessibility" className="underline">
                                    Web Accessibility
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Well-structured Next.js projects grow with stability, clarity and speed.
                    Solid architecture is the foundation for code that scales.
                </p>
            </footer>
        </article>
    );
}
