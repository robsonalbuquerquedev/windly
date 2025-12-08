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
                        When we think about SEO, we usually remember keywords, eye-catching titles, and good descriptions.
                        However, in today's landscape — especially when working with Next.js — the foundation of effective
                        SEO is much more connected to how your page is built. This includes structure, semantics, visual
                        organization, and the smart use of native features like metadata and structured data blocks.
                    </p>

                    <p>
                        With the App Router, you stop focusing only on content and gain fine-grained control over how
                        each technical detail is delivered to search engines. When you combine this with proper semantic
                        markup, Tailwind integration, and standards like JSON-LD, your page not only becomes easier to crawl
                        but also gains context — something essential for achieving rich results in search engines.
                    </p>

                    <p>
                        Throughout this article, you will learn how to configure metadata the right way, implement structured
                        data to increase your chances of appearing in rich results, apply modern semantics even when using
                        Tailwind utility classes, and finally assemble a complete example showing all of this working inside
                        a real page.
                    </p>

                    <p>
                        SEO is no longer just a matter of &quot;writing well.&quot; Today, it’s deeply influenced by your application's
                        architecture, the way Next.js prepares the HTML for the crawler, and even how your components are
                        organized. When all these layers work together, your application gains speed, ranking accuracy,
                        and a strong structure capable of scaling in a healthy way.
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
                        🔍 Why is SEO different in Next.js?
                    </h2>

                    <p>
                        Unlike traditional SPAs, where most of the content only exists after the JavaScript bundle loads,
                        Next.js works with a <strong>hybrid rendering</strong> model. This means you can decide how each page
                        is delivered to the browser — fully server-rendered, pre-generated, or rendered on demand. In practice,
                        this flexibility greatly increases the accuracy with which Google interprets your pages and improves
                        how they are indexed.
                    </p>

                    <p>
                        Instead of relying entirely on the client to assemble the content, Next.js delivers pages with real HTML
                        from the very beginning. This reduces ambiguity for crawlers, improves perceived performance, and helps
                        search engines better understand the structure of your site. You also gain direct control over metadata,
                        routes, persistent layouts, and structured data — creating a strong foundation for more strategic SEO.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Server-side rendering</strong> makes the crawler’s job easier and delivers ready-to-index HTML.</li>
                        <li><strong>Persistent layouts</strong> reduce repeated downloads and strengthen structural consistency across pages.</li>
                        <li><strong>Centralized metadata</strong> avoids inconsistencies between pages and ensures clear information for search engines.</li>
                        <li><strong>Native support for JSON-LD and microdata</strong>, allowing you to enrich pages with structured data effortlessly.</li>
                        <li><strong>Routing and segmentation control</strong>, helping you create clean, semantic, SEO-friendly URLs.</li>
                        <li><strong>Better performance experience</strong>, which directly impacts rankings — especially in Core Web Vitals.</li>
                    </ul>

                    <p>
                        When you combine smart rendering with well-defined metadata and structured data, Next.js stands out as
                        one of the most complete tools for modern SEO — especially for projects that demand flexibility,
                        performance, and scalability.
                    </p>
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
                        SEO in Next.js goes far beyond optimizing speed: it’s about building pages that are easy to
                        understand for both people and crawlers. When you combine well-structured metadata, organized
                        JSON-LD, and semantic markup applied with Tailwind, you create a solid foundation that guides
                        search engines with precision while offering users a clearer, more predictable, and intuitive
                        experience.
                    </p>

                    <p>
                        Every detail matters. How the HTML reaches the crawler, how the content is described in the
                        metadata, and how your visual hierarchy is constructed all influence your ranking. Well-structured
                        pages have a higher chance of earning rich results, maintaining consistency across sections, and
                        conveying authority — even in smaller projects.
                    </p>

                    <p>
                        By applying these layers consciously, your project becomes something that not only works but
                        stands out. Search engines better understand the purpose of your page, users navigate with more
                        comfort, and development becomes more organized and scalable. This creates a positive cycle of
                        quality throughout the entire application.
                    </p>

                    <p>
                        Take advantage of Next.js native features, use semantics to your favor, and treat SEO as part of
                        your architecture — not as a final add-on. The result is a site that is beautiful, fast,
                        technically solid, and, above all, easy to be found.
                    </p>

                    <p>
                        Keep refining your approach, testing improvements, and exploring the full potential of the
                        App Router. The future of your SEO begins with the small decisions you make in each component.
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
