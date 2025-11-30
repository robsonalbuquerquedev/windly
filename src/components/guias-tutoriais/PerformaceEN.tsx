"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Image as ImageIcon, Cloud, Zap } from "lucide-react";

export default function PerformanceEN() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Sparkles size={22} />
                        Front-end Performance: how to make your website truly fast and efficient
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn, in a practical way, how to optimize images, scripts, resource loading, and the
                    entire structure of your website to ensure speed, lightness, efficient data usage, and
                    a superior browsing experience — essential factors for SEO, retention, and monetization.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Cpu size={16} /> Critical Rendering Path
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <ImageIcon size={16} /> Image Optimization
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Cloud size={16} /> Advanced Cache & CDN
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="performance-sections"
            >
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="why" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="why" className="text-2xl font-bold">
                            Why performance matters so much
                        </h2>
                        <p>
                            A fast website reduces bounce rate, improves SEO, increases time-on-page,
                            and significantly boosts conversions. Performance is the foundation of any
                            modern digital experience and impacts everything from first impressions
                            to ad monetization.
                        </p>
                        <p>
                            In a competitive landscape where milliseconds matter, optimizing performance
                            means creating a more stable, accessible, and reliable experience across all devices.
                        </p>
                    </section>

                    <section aria-labelledby="images" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="images" className="text-xl font-semibold flex items-center gap-2">
                            <ImageIcon size={18} /> Image Optimization
                        </h3>

                        <p>
                            Images account for much of a page’s total weight and directly affect load times,
                            data usage, and rankings. Working with modern formats and smart loading drastically
                            reduces bandwidth usage and improves Core Web Vitals.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefer AVIF or WebP for photos and SVG for icons/illustrations.</li>
                            <li>Use Next.js <code>Image</code> to serve only the required size.</li>
                            <li>Enable lazy loading for off-screen elements.</li>
                            <li>Compress files and remove unnecessary metadata.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/perf-example.png"
                                alt="Example of image optimization and performance"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Use modern formats and responsive sizes to improve loading.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="js" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="js" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Reducing JavaScript
                        </h3>

                        <p>
                            JavaScript is one of the most expensive parts of loading, especially on low-end
                            devices and unstable connections. Reducing JS sent to the client improves interaction
                            times and reduces rendering blocks.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Remove unnecessary dependencies.</li>
                            <li>Use <code>dynamic()</code> for heavy components.</li>
                            <li>Load only critical code upfront and lazy-load the rest.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="metrics" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="metrics" className="text-xl font-semibold">
                            Core Web Vitals & Essential Metrics
                        </h3>

                        <p>
                            These metrics measure real user perception of speed and stability — directly
                            affecting ranking, experience, and ad performance. Monitoring them is essential
                            to ensure your site is truly fast.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 mt-4">
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>LCP</strong>
                                <p className="text-sm">Largest Contentful Paint — ideal ≤ 2.5s</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>INP</strong>
                                <p className="text-sm">Interaction to Next Paint — ideal ≤ 100ms</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>CLS</strong>
                                <p className="text-sm">Cumulative Layout Shift — ideal ≤ 0.1</p>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="testing" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="testing" className="text-xl font-semibold">Testing & Continuous Monitoring</h3>

                        <p>
                            Use tools like Lighthouse, PageSpeed Insights, and WebPageTest to validate
                            improvements and ensure your site maintains good performance over time.
                            Always test on slow networks, throttled CPUs, and real devices to capture
                            realistic behavior.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Tip: creating a performance checklist per release helps keep improvements consistent.
                        </p>
                    </section>
                </main>

                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick Fixes</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Serve images in AVIF/WebP</li>
                            <li>Enable Brotli compression</li>
                            <li>Use HTTP/2 or HTTP/3</li>
                            <li>Load non-critical JS with <code>defer</code></li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Essential Tools</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Lighthouse</li>
                            <li>• WebPageTest</li>
                            <li>• DevTools Performance</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="/en/guides-tutorials/seo" className="underline">SEO Fundamentals</a></li>
                            <li><a href="/en/guides-tutorials/accessibility" className="underline">Web Accessibility</a></li>
                            <li><a href="/en/guides-tutorials/tailwind" className="underline">Tailwind Patterns</a></li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Keep a performance checklist in your CI to ensure every PR improves your site.
                    Small optimizations over time generate huge results.
                </p>
            </footer>
        </article>
    );
}
