"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, BarChart2, Target, Link as LinkIcon, TrendingUp } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

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

            <InitialSetup
                sections={[
                    { id: "seo-works-in-practice", label: "How SEO Works in Practice" },
                    { id: "semantics-and-structure", label: "Semantics and Structure" },
                    { id: "content-aligned", label: "Content Aligned With Search Intent" },
                    { id: "technical-optimization", label: "Technical Optimization" },
                    { id: "authority-e-link-building", label: "Authority & Link Building" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="seo-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Section 1 */}
                    <section id="seo-works-in-practice" aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            How SEO Works in Practice
                        </h2>

                        <p>
                            SEO is not just about choosing the right keywords — it is, in fact, a combination of factors
                            that work together to help search engines understand the quality, purpose, and relevance of
                            your page. Elements such as user experience, semantics, accessibility, speed, content
                            architecture, and external authority form the foundation of modern SEO. The clearer and more
                            complete the experience you offer to visitors, the better your site performs in search results.
                        </p>

                        <p className="mt-2">
                            In practical terms, search engines evaluate how the page behaves, how it is structured,
                            how the content matches the user’s intent, and whether navigation is intuitive. They look at
                            everything from heading organization to how internal links connect, as well as readability,
                            scanability, and the overall clarity of information.
                        </p>

                        <p className="mt-2">
                            Beyond that, the algorithm tries to predict whether the content truly solves the user’s
                            problem. To do this, it observes signals such as engagement, time on page, return visits,
                            readability, thematic consistency, and even the level of authority demonstrated by other
                            sites that reference your content.
                        </p>

                        <p className="mt-2">
                            When the structure is semantic, logical, and well-organized, the search engine gains a much
                            clearer understanding of the purpose of each part of the page: what is a title, what is a
                            section, what constitutes the main content, which elements support the message, and how
                            everything connects within the main topic. This makes ranking easier and increases the
                            relevance of your page for related searches.
                        </p>

                        <p className="mt-2">
                            In short: SEO works when your site genuinely helps the user. The clearer, more accessible,
                            organized, fast, and useful your content is, the more search engines reward your page.
                            SEO is, above all, the alignment between user intent and the value you deliver.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section id="semantics-and-structure" aria-labelledby="semantic" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="semantic" className="text-xl font-semibold flex items-center gap-2">
                            <Search size={18} /> Semantics and Structure
                        </h3>

                        <p>
                            The foundation of high-quality HTML lies in its structure. A well-organized page not only
                            helps search engines understand the content more clearly but also improves readability,
                            accessibility, and overall user experience. When every element is placed correctly and
                            used with the proper purpose, the entire ecosystem of the page becomes more predictable,
                            functional, and clear.
                        </p>

                        <p className="mt-2">
                            Semantics adds a layer of meaning that search engines can interpret to understand context,
                            importance, and the relationship between different parts of the content. It's like providing
                            a mental map of what is essential, complementary, navigational, or informational — and this
                            directly reflects in better SEO performance, improved scan-ability, and greater inclusion.
                        </p>

                        <ul className="list-disc pl-5 space-y-1 mt-3">
                            <li>
                                <strong>Use only one <code>&lt;h1&gt;</code> per page.</strong><br />
                                It represents the main theme and serves as a reference point for search engines and
                                screen readers. Multiple <code>h1</code> elements can harm the hierarchy and confuse
                                the algorithm.
                            </li>

                            <li>
                                <strong>Keep a clear hierarchy of headings (<code>h2</code>, <code>h3</code>, etc.).</strong><br />
                                This creates a logical structure of sections and subsections, allowing search engines
                                to understand the order of importance and the narrative flow of the content.
                            </li>

                            <li>
                                <strong>Use appropriate semantic elements.</strong><br />
                                Tags such as <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, and <code>&lt;footer&gt;</code> help organize content blocks and make the experience clearer for any assistive
                                technology — while also improving algorithm interpretation.
                            </li>

                            <li>
                                <strong>Avoid huge blocks of text.</strong><br />
                                Very long paragraphs harm readability and make scanning more difficult. Break content
                                into smaller, objective, and visually lighter pieces.
                            </li>

                            <li>
                                <strong>Give context with descriptions, titles, and grouping.</strong><br />
                                Good naming and good division make understanding easier for both humans and search
                                engines, reinforcing the intention of each block.
                            </li>

                            <li>
                                <strong>Maintain consistency in page structure.</strong><br />
                                Repeating patterns of headings, sections, and information order across different pages
                                improves predictability and creates a more cohesive experience.
                            </li>
                        </ul>

                        <p className="mt-3">
                            When HTML is semantic, navigation becomes more natural, reading more fluid, and search
                            engines gain a clearer view of the content architecture. This strengthens ranking and
                            significantly improves accessibility.
                        </p>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Example of a well-organized semantic structure for SEO"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                A good semantic structure allows search engines and users to navigate more easily,
                                interpreting each part of the page with clarity.
                            </figcaption>
                        </figure>

                        <p className="mt-4 text-sm text-black/70">
                            If you’re taking your first steps and want to learn in a practical way how to structure pages with
                            HTML and CSS—building clear, organized, and scalable layouts—there’s a course that focuses exactly
                            on these essential foundations. It teaches, step by step, how to turn basic concepts into real,
                            well-structured web pages.
                            <a
                                href="https://go.hotmart.com/B103301958J?dp=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                Check out the “From Zero to HTML & CSS for Website Creation” course.
                            </a>
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section id="content-aligned" aria-labelledby="content" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="content" className="text-xl font-semibold flex items-center gap-2">
                            <Target size={18} /> Content Aligned With Search Intent
                        </h3>

                        <p>
                            Every search begins with a purpose: someone wants to understand something, solve a problem,
                            compare options, buy a product, or simply confirm a piece of information. When your content
                            matches exactly what the user expects — and goes beyond the basics — it becomes extremely
                            valuable. This increases dwell time, reduces bounce rate, and sends strong positive signals
                            to search engines that your page truly delivers what it promises.
                        </p>

                        <p className="mt-2">
                            Creating content aligned with search intent is not just about answering questions; it's about
                            anticipating what the user wants to feel, know, validate, or decide. A page that delivers
                            clarity, structure, and depth builds instant trust and is rewarded by algorithms that
                            prioritize real relevance.
                        </p>

                        <ol className="list-decimal pl-5 space-y-2 mt-3">
                            <li>
                                <strong>Identify real questions users ask.</strong><br />
                                Research related terms, Google autocomplete, common forum discussions, video comments,
                                and social media posts. The more you understand the user's natural language, the easier it
                                becomes to create content that speaks directly to them — in the right tone and level of
                                detail.
                            </li>

                            <li>
                                <strong>Provide clear answers right at the beginning.</strong><br />
                                The opening lines should immediately show the user they're in the right place. Summarize
                                the main answer quickly, without unnecessary fluff, and then expand further. This improves
                                engagement and increases the chances of earning rich snippets, such as Google’s
                                well-known featured snippet.
                            </li>

                            <li>
                                <strong>Go deeper with examples, comparisons, lists, and practical guides.</strong><br />
                                After answering the core question, expand with helpful details: steps, demonstrations,
                                analogies, real cases, alternatives, and best practices. Rich content reinforces
                                authority, improves understanding, and keeps the visitor on the page longer — another
                                positive signal for search engines.
                            </li>
                        </ol>

                        <p className="mt-3">
                            When you respect user intent, provide clarity, and deliver real value, your content becomes
                            naturally more competitive and tends to rise in the rankings — even in highly competitive
                            niches. This is one of the strongest foundations of modern SEO.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section id="technical-optimization" aria-labelledby="technical" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="technical" className="text-xl font-semibold flex items-center gap-2">
                            <BarChart2 size={18} /> Technical Optimization
                        </h3>

                        <p>
                            Technical optimization is the foundation that supports the entire SEO strategy. Even with
                            high-quality, highly relevant content, technical issues can compromise user experience,
                            hinder crawler understanding, and ultimately harm your rankings. It is the invisible side
                            of SEO — but absolutely essential.
                        </p>

                        <p className="mt-2">
                            When a website is fast, stable, well-structured, and properly configured, it creates the
                            ideal environment for both users and algorithms to understand, navigate, and value the
                            content. Slow, heavy, or disorganized pages suffer natural penalties because they degrade
                            usability, increase loading time, and generate frustration.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>
                                <strong>Use metadata correctly (title, description, canonical, and OG tags).</strong><br />
                                Well-configured tags help search engines interpret the page’s context, prevent duplicate
                                content issues, improve social media previews, and increase CTR on search results. Small
                                details like these make a significant impact.
                            </li>

                            <li>
                                <strong>Optimize images with <code>next/image</code>.</strong><br />
                                Next.js’s native image component applies compression, lazy loading, modern formats like
                                WebP, and automatic size adjustments. This drastically reduces total page weight and
                                improves LCP (Largest Contentful Paint), one of the most important Core Web Vitals metrics.
                            </li>

                            <li>
                                <strong>Reduce unnecessary CSS and JS.</strong><br />
                                Dead code, heavy libraries, unused styles, and redundant scripts increase loading time
                                and harm performance. Use tree-shaking, dynamic imports, style cleanup, and lightweight
                                dependencies whenever possible.
                            </li>

                            <li>
                                <strong>Avoid CLS and layout shifting.</strong><br />
                                Unexpected layout movement frustrates users and worsens CLS (Cumulative Layout Shift).
                                Always define width and height for images, reserve space for ads, and optimize font
                                loading to prevent visual jumps across the page.
                            </li>

                            <li>
                                <strong>Implement caching and server optimizations.</strong><br />
                                CDNs, page caching, GZIP/Brotli compression, and optimized headers help deliver content
                                faster while reducing server load. This boosts both SEO and overall performance.
                            </li>

                            <li>
                                <strong>Ensure clean and accessible HTML.</strong><br />
                                Accessibility and SEO go hand in hand. A well-structured, semantic, and easy-to-navigate
                                HTML improves crawler understanding and supports assistive technologies.
                            </li>
                        </ul>

                        <p className="mt-3">
                            When technical work is well executed, the website gains speed, stability, and clarity.
                            This creates the perfect foundation for your content to shine and for search engines to
                            recognize the page as a reliable, efficient, high-quality experience — worthy of the best
                            ranking positions.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section id="authority-e-link-building" aria-labelledby="links" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="links" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> Authority & Link Building
                        </h3>

                        <p>
                            Links work like public recommendations: when other websites point to yours,
                            they’re telling search engines that your content is trustworthy, valuable,
                            and deserves visibility. The more these “votes” come from strong, relevant,
                            and well-established domains, the higher your overall authority becomes.
                        </p>

                        <p className="mt-2">
                            Building authority doesn’t happen overnight. It involves partnerships,
                            smart content distribution, presence on websites within your niche, and
                            ongoing strategies to be mentioned naturally—always avoiding artificial
                            practices that may result in penalties.
                        </p>

                        <ul className="list-disc pl-5 mt-3">
                            <li>Seek links from websites with topics similar to yours (relevance is everything).</li>
                            <li>Create content that becomes a reference, increasing chances of natural backlinks.</li>
                            <li>Use guest posts strategically and without excess.</li>
                            <li>Avoid excessive link exchanges—search engines detect artificial patterns.</li>
                            <li>Monitor your backlink profile using tools like Search Console and Ahrefs.</li>
                        </ul>

                        <p className="mt-2 text-sm text-gray-700">
                            Tip: a well-structured internal linking strategy strengthens key pages,
                            distributes authority across the site, and improves the user experience.
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
                                <Link href="/en/guides-tutorials/accessibility" className="underline">
                                    Web Accessibility
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/guides-tutorials/performance" className="underline">
                                    Front-end Performance
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/guides-tutorials/tailwind" className="underline">
                                    Tailwind Organization
                                </Link>
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
