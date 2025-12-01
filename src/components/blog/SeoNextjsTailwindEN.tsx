"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsEN";

const currentIndex = posts.findIndex((p) => p.href === "/en/blog/seo-nextjs-tailwindcss");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function SeoNextjsTailwindContentEN() {
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
                        SEO for Next.js Explained with Tailwind
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        Understand how to use metadata, JSON-LD, and semantics to improve ranking with Next.js.
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
                        When we think about SEO, we often remember keywords and well-crafted titles. But in the modern web, especially when using Next.js, a big part of successful SEO comes from properly structured code — and that’s where metadata, semantics, and even Tailwind come in.
                    </p>

                    <p>
                        In this article, you’ll understand how to build optimized, fast, and crawlable pages using the power of the App Router, semantic tags aligned with Tailwind, and organized JSON-LD blocks to boost your application's ranking.
                    </p>
                </motion.section>

                {/* WHY SEO IS DIFFERENT IN NEXT.JS */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🔍 Why SEO is different in Next.js?
                    </h2>

                    <p>
                        Unlike traditional SPAs, Next.js works with hybrid rendering. This gives you more control over how each page is delivered to Google, increasing the accuracy of how your data is crawled.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Server-side rendering makes crawling easier;</li>
                        <li>Persistent layouts prevent unnecessary downloads;</li>
                        <li>Unified metadata improves page consistency;</li>
                        <li>Built-in integration with JSON-LD and microdata.</li>
                    </ul>
                </motion.section>

                {/* METADATA BEST PRACTICES */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🛠️ How to configure metadata correctly
                    </h2>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Use the metadata object in the App Router</h3>
                        <p>
                            This object replaces manual usage of tags in the head file. It organizes and standardizes essential SEO information.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`export const metadata = {
  title: "My optimized article",
  description: "Using metadata in Next.js with modern SEO.",
  openGraph: {
    title: "My optimized article",
    description: "SEO with Next.js explained.",
    images: ["/og-image.png"],
  }
};`}
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">2. Add JSON-LD for Google Rich Results</h3>
                        <p>
                            With JSON-LD, you speak Google’s native language, enabling article cards, breadcrumbs, product cards, recipes, and much more.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`export function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO for Next.js explained",
    author: "Robson Albuquerque",
    datePublished: "2025-01-01"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}`}
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Semantics with Tailwind? Yes!</h3>
                        <p>
                            Tailwind does not harm SEO — it only styles your elements. Semantic responsibility is still yours. Use tags like <strong>header</strong>, <strong>main</strong>, <strong>section</strong>, and <strong>article</strong> to give real meaning to your pages.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<main className="max-w-3xl mx-auto space-y-8">
  <section className="prose">
    <h1 className="font-bold text-3xl">Optimized title</h1>
    <p className="text-gray-700">Structured text with modern semantics.</p>
  </section>
</main>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* APPLIED EXAMPLE */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        ⚡ Final applied example
                    </h2>

                    <p>Here’s a block that combines semantics, metadata, and modern SEO:</p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<article className="max-w-4xl mx-auto space-y-6">
  <header>
    <h1 className="text-4xl font-bold">SEO with Next.js</h1>
  </header>

  <p className="text-gray-700">
    Optimized structure, fast loading, and Google-ready data.
  </p>

  <ArticleJsonLd />
</article>`}
                    </motion.pre>
                </motion.section>

                {/* CONCLUSION */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6 border-t pt-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        🏁 Conclusion
                    </h2>

                    <p>
                        SEO in Next.js is not just about performance — it's about communicating clearly with humans and search engines. With well-structured metadata, JSON-LD, and Tailwind-applied semantics, you create pages ready to compete for top positions.
                    </p>

                    <p>Use every layer in your favor to build beautiful, fast, and discoverable applications.</p>
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
