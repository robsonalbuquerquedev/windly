"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsEN";

const currentIndex = posts.findIndex((p) => p.href === "/en/blog/html-semantics-mistakes");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function HtmlSemanticsMistakes() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-20"
            >
                {/* TITLE */}
                <motion.header className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Common Mistakes Beginners Make with HTML Semantics
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        The most common pitfalls when structuring pages and how to avoid real accessibility and SEO issues.
                    </motion.p>
                </motion.header>

                {/* INTRODUCTION */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <p>
                        Although it may seem like a small technical detail, HTML semantics define
                        the true meaning of each part of your page. It helps the browser, Google,
                        and assistive technologies understand the content — and this directly
                        affects accessibility, SEO, and even code maintenance.
                    </p>

                    <p>
                        The problem is that beginners often repeat confusing patterns, use divs
                        for everything, and ignore essential tags. This results in unstructured
                        pages that are hard to navigate and poorly evaluated by search engines.
                    </p>

                    <p>
                        In this article, you'll learn clearly the most common mistakes and how to
                        fix them using modern and meaningful semantics.
                    </p>
                </motion.section>

                {/* MISTAKE 1 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">
                        ❌ 1. Using divs for everything (div soup)
                    </h2>

                    <p>
                        One of the most well-known mistakes: turning the entire page into a bowl
                        of <code>&lt;div&gt;</code>. The code works, but it completely loses meaning.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">Why is this a problem?</h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Screen readers don't understand the purpose of the blocks.</li>
                            <li>Google has a harder time mapping hierarchy.</li>
                            <li>Future maintenance becomes confusing and slow.</li>
                        </ul>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<!-- WRONG -->
<div>
  <div>
    <div>My title</div>
  </div>
</div>`}
                        </motion.pre>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<!-- CORRECT -->
<header>
  <h1>My title</h1>
</header>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* MISTAKE 2 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                        ❌ 2. Using heading tags out of order (jumping from h1 to h4)
                    </h2>

                    <p>
                        Headings create the logical hierarchy of the page. When you “skip levels,”
                        screen readers and search engines interpret that the structure is broken.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">How many beginners do it:</h3>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
{`<h1>Main title</h1>
<h4>Important subsection</h4>`}
                        </motion.pre>

                        <h3 className="text-2xl font-semibold">How it should be:</h3>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
{`<h1>Main title</h1>
<h2>Important subsection</h2>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* MISTAKE 3 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        ❌ 3. Ignoring essential tags like main, nav, article, section
                    </h2>

                    <p>
                        These tags don't just organize visually — they declare the role of each
                        block on the page. They’re the map Google uses to understand context.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>&lt;main&gt;</strong>: main content;</li>
                            <li><strong>&lt;nav&gt;</strong>: navigation;</li>
                            <li><strong>&lt;article&gt;</strong>: independent content;</li>
                            <li><strong>&lt;section&gt;</strong>: grouped content with purpose.</li>
                        </ul>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
{`<!-- RIGHT -->
<main>
  <article>
    <h1>Complete guide to HTML semantics</h1>
  </article>
</main>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* MISTAKE 4 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                        ❌ 4. Using section just to “visually divide” content
                    </h2>

                    <p>
                        A section is not a “styled div.” It needs a clear purpose, usually starting
                        with a heading that represents its content.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
{`<!-- WRONG -->
<section class="mb-10">
  <div>Random text without a title</div>
</section>`}
                        </motion.pre>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
{`<!-- RIGHT -->
<section>
  <h2>About the project</h2>
  <p>This block has real meaning.</p>
</section>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* MISTAKE 5 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                        ❌ 5. Misusing lists, tables, and images
                    </h2>

                    <p>
                        Many people use lists just to create indentation, tables for layout,
                        or images without alternative text.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Lists are for related items.</li>
                        <li>Tables structure tabular data.</li>
                        <li>Images without <code>alt</code> harm accessibility.</li>
                    </ul>

                    <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
{`<!-- WRONG -->
<img src="/banner.png">`}
                    </motion.pre>

                    <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
{`<!-- RIGHT -->
<img src="/banner.png" alt="Promotional banner for XPTO event">`}
                    </motion.pre>
                </motion.section>

                {/* CONCLUSION */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-6 border-t pt-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        🏁 Conclusion
                    </h2>

                    <p>
                        HTML semantics are one of the most effective ways to improve SEO,
                        accessibility, and code organization. Small improvements can create
                        meaningful impact on how users and search engines understand your page.
                    </p>

                    <p>
                        The more you master semantics, the more professional, accessible, and
                        optimized your pages become — increasing your chances of ranking well
                        and succeeding with platforms like AdSense.
                    </p>
                </motion.section>

                {/* NAVIGATION */}
                <motion.footer className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="text-3xl font-bold">Want to learn more?</h2>
                    <p className="mt-4 text-lg">
                        Explore new content published regularly about development, technology, and modern best practices.
                    </p>

                    <ButtonBlog previous={previous} next={next} />
                </motion.footer>
            </motion.div>
        </article>
    );
}
