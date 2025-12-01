"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsEN";

const currentIndex = posts.findIndex((p) => p.href === "/en/blog/responsiveness-tailwind");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function ResponsivenessTailwindContent() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">

            {/* MAIN ARTICLE CONTAINER WITH ENTRY ANIMATION */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-20"
            >

                {/* HERO SECTION */}
                <motion.header className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        How to Think About Real-World Responsiveness with Tailwind
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        Creating responsive layouts is like packing a backpack for different trips:
                        on mobile, you bring only the essentials, and on larger screens you use
                        all the available space. Tailwind makes this adaptation simple — you just
                        need to understand how each piece fits together.
                    </motion.p>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
                        <p className="text-sky-200 font-semibold">
                            🎒 Quick tip: responsive design always starts from the smallest screen.
                        </p>
                    </div>
                </motion.header>

                {/* MOBILE FIRST */}
                <motion.section className="space-y-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        📱 Mobile First as a Philosophy
                    </h2>

                    <p>
                        In Tailwind, everything begins with mobile. That's the default size.
                        From there, you scale the layout as the screen grows.
                        This keeps everything consistent, predictable, and easy to maintain.
                    </p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto">
                        <code className="language-html text-sm">
                            {`<div className="p-4 md:p-8 lg:p-12 bg-blue-500 text-white">
  Responsive content
</div>`}
                        </code>
                    </motion.pre>

                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>p-4</strong>: base (mobile)</li>
                        <li><strong>md:p-8</strong>: medium screens</li>
                        <li><strong>lg:p-12</strong>: large desktops</li>
                    </ul>
                </motion.section>

                {/* RESPONSIVE ZONES */}
                <motion.section className="space-y-10">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">
                        📐 Splitting the Layout into Responsive Zones
                    </h2>

                    <p>
                        A well-planned layout is divided into areas that adapt as the screen size changes.
                        This improves visual clarity, reduces noise, and organizes the experience.
                    </p>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Content Zone</h3>

                        <motion.pre
                            className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                        >
                            <code className="language-html text-sm">
                                {`<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Responsive Title</h2>
  <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-700">
    This text adapts its size based on the screen width.
  </p>
</section>`}
                            </code>
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">2. Image Zone</h3>

                        <motion.pre
                            className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                        >
                            <code className="language-html text-sm">
                                {`<img
  src="/example.jpg"
  alt="Responsive layout example"
  className="w-full max-w-lg mx-auto rounded-xl shadow-md"
/>`}
                            </code>
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Action Zone (CTA)</h3>

                        <motion.pre
                            className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                        >
                            {`<div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
  <a href="#" className="px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold">
    Get Started
  </a>
  <a href="#" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold">
    Learn More
  </a>
</div>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* BEST PRACTICES */}
                <motion.section className="space-y-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        🎯 What Really Matters in Modern Responsiveness
                    </h2>

                    <p>
                        Being responsive is not just “fitting on the screen” —
                        it’s about visual balance, rhythm, hierarchy,
                        and comfortable reading.
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Proportional typographic scales</li>
                        <li>Consistent spacing logic</li>
                        <li>Avoid duplicating unnecessary styles</li>
                        <li>Expanding is better than breaking the layout</li>
                    </ul>
                </motion.section>

                {/* FULL EXAMPLE */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        ⚡ Full Example
                    </h2>

                    <motion.pre
                        className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                    >
                        <code className="language-html text-sm">
                            {`<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
      Build truly responsive layouts
    </h2>

    <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
      Learn how to transform designs into real interfaces using TailwindCSS.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
      <a href="#start" className="px-8 py-4 bg-sky-600 text-white rounded-lg font-semibold">
        Get Started
      </a>
      <a href="#resources" className="px-8 py-4 bg-gray-200 text-gray-800 rounded-lg font-semibold">
        Resources
      </a>
    </div>
  </div>
</section>`}
                        </code>
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
                        Responsiveness is about people — their habits, screens, and rhythms.
                        With Tailwind, this process becomes light, fast, and intuitive.
                        When you combine good organization, typography,
                        and micro-animations, you create interfaces that feel pleasant
                        on any device.
                    </p>
                </motion.section>

                {/* NAVIGATION BETWEEN ARTICLES */}
                <motion.footer className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="text-3xl font-bold">Want to learn more?</h2>
                    <p className="mt-4 text-lg">
                        Explore new content published regularly about development,
                        technology, and modern best practices.
                    </p>

                    <ButtonBlog previous={previous} next={next} />
                </motion.footer>
            </motion.div>
        </article>
    );
}
