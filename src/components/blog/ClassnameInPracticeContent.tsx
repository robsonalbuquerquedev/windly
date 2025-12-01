"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsEN";

const currentIndex = posts.findIndex((p) => p.href === "/en/blog/classname-in-practice");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function ClassnameInPracticeContent() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">
            {/* ANIMATED CONTAINER FOR THE WHOLE ARTICLE */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-20"
            >
                {/* Title */}
                <motion.header className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        className in practice for real pages
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        Smart Tailwind class organization without mess, repetition, or confusion.
                    </motion.p>
                </motion.header>

                {/* Introduction */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <p>
                        When we start building real pages with Tailwind, one of the first questions is:
                        “How do I organize my classes without turning everything into a word soup?” Tailwind is
                        powerful, but without structure, your code quickly loses readability.
                    </p>

                    <p>
                        In this article, we explore how to structure <strong>className</strong> cleanly and
                        professionally, following modern practices that actually work in real projects. You’ll also
                        see examples of organization, Framer Motion animations, and semantic tags that help both SEO
                        and user experience.
                    </p>
                </motion.section>

                {/* Why organization matters */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🧠 Why className organization matters
                    </h2>

                    <p>
                        In small projects, it's easy to believe organization is optional. But as a page grows,
                        every minute wasted trying to understand messy classes becomes a maintenance problem.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Cleaner and easier-to-maintain code</li>
                        <li>Reduction of unnecessary repeated classes</li>
                        <li>Better onboarding experience for new developers</li>
                        <li>High compatibility with modern reusable component patterns</li>
                    </ul>
                </motion.section>

                {/* Effective techniques */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🛠️ Effective techniques for class organization
                    </h2>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Group by visual responsibility</h3>
                        <p>
                            A very useful technique is to order classes by category: layout, spacing, typography,
                            colors, and so on. This creates a clear visual pattern.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<div
  className="flex items-center justify-between
             p-4 md:p-6
             bg-white shadow-md rounded-xl
             text-gray-800"
>`}
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">
                            2. Use conditionals with libraries like clsx
                        </h3>
                        <p>
                            In real pages, elements change appearance based on state, props, or screen size.
                            Avoid building giant strings with ternaries directly inside className.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`import clsx from "clsx";

const buttonClass = clsx(
  "px-4 py-2 rounded-xl font-semibold transition",
  isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800",
  disabled && "opacity-50 cursor-not-allowed"
);`}
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Create reusable components</h3>
                        <p>
                            When you notice the same group of classes appearing repeatedly, it's a sign that it
                            should become a component. This reduces bugs and avoids repetition.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`export function Card({ children }) {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white text-gray-900">
      {children}
    </div>
  );
}`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* Full Example */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        ⚡ Final applied example
                    </h2>

                    <p>
                        Here’s a snippet that showcases clear organization, animation, and modern semantic
                        structure:
                    </p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<section className="max-w-4xl mx-auto space-y-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md
               space-y-4 border border-white/50"
  >
    <h2 className="text-2xl font-bold text-gray-900">Block title</h2>
    <p className="text-gray-700">Organized and elegant explanatory content.</p>
  </motion.div>
</section>`}
                    </motion.pre>
                </motion.section>

                {/* Conclusion */}
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
                        Organizing classes isn’t unnecessary — it's essential to build professional, modern,
                        scalable interfaces. By using these techniques, your code becomes clearer, your layout comes
                        alive, and your performance as a developer grows.
                    </p>

                    <p>Use Tailwind to your advantage. Leave the mess behind and embrace elegance.</p>
                </motion.section>

                {/* Navigation */}
                <motion.footer className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="text-3xl font-bold">Want to learn more?</h2>
                    <p className="mt-4 text-lg">
                        Explore new content published regularly about development, technology, and modern best
                        practices.
                    </p>

                    <ButtonBlog previous={previous} next={next} />
                </motion.footer>
            </motion.div>
        </article>
    );
}
