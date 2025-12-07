"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Image as ImageIcon, Cloud, Zap } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

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

            <InitialSetup
                sections={[
                    { id: "why-performance-matters", label: "Why performance matters so much" },
                    { id: "image-optimization", label: "Image Optimization" },
                    { id: "reducing-javaScript", label: "Reducing JavaScript" },
                    { id: "essential-metrics", label: "Core Web Vitals & Essential Metrics" },
                    { id: "testing-e-continuous-monitoring", label: "Testing & Continuous Monitoring" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="performance-sections"
            >
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Section 1 */}
                    <section id="why-performance-matters" aria-labelledby="why" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="why" className="text-2xl font-bold">
                            Why performance matters so much
                        </h2>

                        <p>
                            Performance is basically the time your website takes to respond to the user. When that response
                            is fast, everything flows naturally: the visitor stays longer, navigates comfortably, and finds
                            what they need without frustration. Fast websites drastically reduce bounce rates, improve search
                            engine ranking, and increase both trust and conversion chances — whether it's a purchase, a signup,
                            or simply continuing to browse.
                        </p>

                        <p className="mt-2">
                            On top of that, speed has a direct impact on SEO. Google and other search engines evaluate metrics
                            like LCP (Largest Contentful Paint), FID/INP, and CLS to understand whether the user experience is
                            smooth. The faster and more stable these metrics are, the greater the chances of your content
                            appearing at the top of search results. This means more organic traffic and more opportunities.
                        </p>

                        <p className="mt-2">
                            In a highly competitive environment — especially on mobile devices, slow connections, and places
                            with limited bandwidth — every millisecond matters. Poor performance harms even simple interactions,
                            increases abandonment, and makes the user feel the website is &quot;heavy&quot; or poorly built. A well-optimized
                            site, on the other hand, conveys professionalism, stability, and attention to user experience from the
                            very first load.
                        </p>

                        <p className="mt-2">
                            And it's not just about pleasing the user. Performance directly affects monetization, especially when
                            ads are involved. Slow pages reduce impressions, decrease ad visibility, and negatively impact CPM
                            value. Meanwhile, a fast site maximizes ad displays, improves campaign distribution, and increases
                            potential earnings.
                        </p>

                        <p className="mt-2">
                            Optimizing performance ultimately means building an inclusive, fast, and reliable experience for
                            any device — from the simplest smartphone to the most powerful desktop.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section id="image-optimization" aria-labelledby="images" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="images" className="text-xl font-semibold flex items-center gap-2">
                            <ImageIcon size={18} /> Image Optimization
                        </h3>

                        <p>
                            Images are, almost always, the largest files loaded on a webpage — which means they are also
                            one of the main factors that can make a site feel fast or slow. When poorly optimized, they
                            increase loading time, consume more mobile data, hurt essential metrics like LCP, and may even
                            cause users to leave the page before seeing any meaningful content.
                        </p>

                        <p className="mt-2">
                            Working correctly with modern formats, intelligent resizing, and efficient compression
                            completely transforms the user experience. Besides drastically reducing file size, it also
                            improves visual stability, prevents layout shifts, and boosts Core Web Vitals scores. Sites
                            that treat images with care are faster, lighter, and far better evaluated by search engines.
                        </p>

                        <p className="mt-2">
                            Another important point is that optimization goes far beyond reducing size: it involves
                            choosing the ideal format for each type of image, controlling quality, defining responsive
                            dimensions, and loading only what actually appears on the screen. This set of practices makes
                            loading smarter and more efficient, especially on mobile devices or slow network connections.
                        </p>

                        <ul className="list-disc pl-5 mt-2">
                            <li>Prefer AVIF or WebP for photos and use SVG for icons, logos, and scalable illustrations.</li>
                            <li>Use the Next.js <code>Image</code> component to automatically deliver the ideal size for each viewport.</li>
                            <li>Enable lazy loading for elements outside the visible area, saving bandwidth and speeding up initial load.</li>
                            <li>Compress images, adjust quality when needed, and remove metadata that only increases file size.</li>
                            <li>Define explicit dimensions to avoid layout shifts and improve CLS.</li>
                            <li>Use <code>srcset</code> and responsive images to deliver smaller files on smaller screens.</li>
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
                                Modern formats, efficient compression, and responsive sizes are essential for fast and stable loading.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Section 3 */}
                    <section id="reducing-javaScript" aria-labelledby="js" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="js" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Reducing JavaScript
                        </h3>

                        <p>
                            JavaScript is one of the heaviest parts of a page’s loading cycle. Beyond downloading the file,
                            the browser still needs to parse, interpret, and execute it — and these steps are especially
                            costly on low-end mobile devices, unstable networks, and older hardware. The more JS you send,
                            the longer it takes for the user to interact, the higher the chance of slowdowns, and the more
                            time the interface spends blocked before becoming usable.
                        </p>

                        <p className="mt-2">
                            Reducing JavaScript doesn’t mean sacrificing functionality — it means delivering it intelligently.
                            Many components ship far more code than they actually use, heavy libraries are imported
                            unnecessarily, or simple behaviors could be handled with HTML and CSS alone. The real goal is
                            finding the balance between capability and performance.
                        </p>

                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li>
                                <strong>Remove unnecessary dependencies.</strong> Large libraries for small tasks inflate the
                                bundle for no reason. Often, a tiny utility or even native JavaScript functions are enough.
                            </li>

                            <li>
                                <strong>Use <code>dynamic()</code> for dynamic imports.</strong> This technique allows you to
                                split the bundle and load heavy components only when they’re truly needed — such as charts,
                                maps, or text editors.
                            </li>

                            <li>
                                <strong>Load only critical code upfront.</strong> Avoid overwhelming the user with a flood of
                                scripts before the first paint. Use lazy loading, code splitting, and script prioritization to
                                ensure that essential parts of the page become interactive as soon as possible.
                            </li>

                            <li>
                                <strong>Prefer native interactions whenever possible.</strong> Features like
                                <code>details/summary</code>, native form validation, and CSS-based animations can replace JS
                                in many cases.
                            </li>

                            <li>
                                <strong>Avoid unnecessary hydration.</strong> In modern frameworks, fully static components
                                can be rendered on the server without sending extra JS to the client.
                            </li>
                        </ol>

                        <p className="mt-3">
                            The less JavaScript the browser needs to process, the faster the user can interact with your page.
                            Reducing, splitting, and loading only what’s essential drastically improves the perception of
                            speed and makes the interface much smoother — especially on lower-end devices.
                        </p>

                        <p className="mt-4 text-sm text-black/70">
                            If you're still taking your first steps with JavaScript and want to learn the language in a
                            clear and straightforward way — without overload, confusion, or unnecessary complexity — there
                            is a complete manual that teaches everything from the ground up. It helps you understand just
                            enough to write less code, avoid heavy dependencies, and make smarter decisions on the
                            front-end.
                            <a
                                href="https://go.hotmart.com/M103302039W?dp=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                Check out the complete guide here.
                            </a>
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section id="essential-metrics" aria-labelledby="metrics" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="metrics" className="text-xl font-semibold">
                            Core Web Vitals & Essential Metrics
                        </h3>

                        <p>
                            Core Web Vitals are a set of metrics created by Google to measure how users actually
                            feel the loading speed, page responsiveness, and visual stability. They are not theoretical:
                            they directly reflect the real usage experience across different devices, slow connections,
                            and common day-to-day situations. A website may look &quot;light,&quot; but if these metrics are poor,
                            users will experience slowness, lagging, or unstable layouts — and this affects ranking,
                            conversions, and even monetization.
                        </p>

                        <p className="mt-2">
                            Continuously monitoring these metrics is essential because they change as your content evolves.
                            Adding an oversized image, including a heavy script, or modifying a component can directly impact
                            these indicators. Even small details can make the experience less fluid, which is why keeping track
                            of these values should be part of the development cycle.
                        </p>

                        <p className="mt-2">
                            Google uses this data not only to understand technical performance but also to evaluate how easily
                            the user can browse without frustration. Good Core Web Vitals mean the page loads fast, reacts fast,
                            and keeps everything visually stable throughout the process — three fundamental pillars for any
                            professional and competitive project.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 mt-4">
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>LCP</strong>
                                <p className="text-sm">
                                    Largest Contentful Paint — measures how long it takes for the main visible element of the page
                                    to fully appear. Ideal ≤ 2.5s.
                                </p>
                                <p className="text-xs mt-1 text-gray-600">
                                    Common improvements: optimize large images, use a CDN, preload fonts, and minimize
                                    render-blocking resources.
                                </p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border">
                                <strong>INP</strong>
                                <p className="text-sm">
                                    Interaction to Next Paint — measures the delay between a user interaction (click, tap, keystroke)
                                    and the page’s visual response. Ideal ≤ 100ms.
                                </p>
                                <p className="text-xs mt-1 text-gray-600">
                                    Common improvements: reduce JavaScript, avoid long tasks, use web workers, and split scripts.
                                </p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border">
                                <strong>CLS</strong>
                                <p className="text-sm">
                                    Cumulative Layout Shift — measures how much the page shifts or moves elements during loading.
                                    Ideal ≤ 0.1.
                                </p>
                                <p className="text-xs mt-1 text-gray-600">
                                    Common improvements: define fixed dimensions for images, ads, iframes, and avoid late-loading
                                    elements without reserved space.
                                </p>
                            </div>
                        </div>

                        <p className="mt-4">
                            The combination of these three metrics gives a very clear picture of how users perceive your page.
                            When all of them remain within the ideal thresholds, navigation becomes smooth, pleasant, and reliable,
                            increasing time on page, reducing bounce rate, and reinforcing credibility. In competitive environments,
                            this is often the difference between users staying on your site or abandoning it within seconds.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section id="testing-e-continuous-monitoring" aria-labelledby="testing" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="testing" className="text-xl font-semibold">Testing & Continuous Monitoring</h3>

                        <p>
                            Ensuring high performance is not a one-time event — it's an ongoing process. As the project grows,
                            new components, scripts, images, and integrations are added, and each change can affect speed.
                            That's why testing regularly is essential to identify bottlenecks before they impact the end user.
                        </p>

                        <p className="mt-2">
                            Tools like Lighthouse, PageSpeed Insights, and WebPageTest allow you to measure site behavior in
                            real-world scenarios, highlighting strengths, weaknesses, and clear improvement recommendations.
                            They reveal network issues, excessive JavaScript, heavy images, accessibility problems, and even
                            impacts on Core Web Vitals — all based on conditions that simulate everyday usage.
                        </p>

                        <p className="mt-2">
                            It is also crucial to test under adverse conditions: slow connections, limited CPUs, and simpler
                            devices. These contexts expose freezes, delayed interactions, and unstable animations that don't
                            appear on powerful machines. Testing like this ensures the experience remains stable and consistent
                            for all users, not just those with high-end devices.
                        </p>

                        <p className="mt-2">
                            Another important point is continuous monitoring. Small changes in the frontend or backend can
                            affect critical metrics over time. Monitoring solutions such as Vercel Analytics, Cloudflare Web
                            Analytics, Datadog, or even custom scripts help track real visitor performance and detect drops
                            before they cause damage.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Tip: creating a performance checklist for every release keeps the team alert, prevents regressions,
                            and turns optimization into a habit rather than an isolated effort.
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
                            <li><Link href="/en/guides-tutorials/seo" className="underline">SEO Fundamentals</Link></li>
                            <li><Link href="/en/guides-tutorials/accessibility" className="underline">Web Accessibility</Link></li>
                            <li><Link href="/en/guides-tutorials/tailwind" className="underline">Tailwind Patterns</Link></li>
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
