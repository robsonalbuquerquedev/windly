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

                {/* MOBILE FIRST - ENGLISH */}
                <motion.section className="space-y-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        📱 Mobile First as a philosophy
                    </h2>

                    <p>
                        In Tailwind, the starting point is always mobile. This means that, by default,
                        any class you apply will be used on the smallest screen sizes.
                        From there, you simply add modifiers so the layout expands as the screen
                        becomes larger. This way of thinking prevents layout breaks, creates natural
                        fluidity across different devices, and reduces CSS complexity.
                    </p>

                    <p>
                        The biggest advantage of this philosophy is that you never need to &quot;think backwards.&quot; You don’t design for huge screens first and then try to squeeze everything into
                        a phone layout. Instead, you build the essential parts — clean and straightforward.
                        Then you add only what is necessary for medium, large, and extra-large screens,
                        ensuring clarity and predictability in your code.
                    </p>

                    <p>
                        That’s why, when writing classes like <strong>md:</strong> or <strong>lg:</strong>,
                        you’re essentially saying: &quot;keep the mobile style as the base and change it only
                        when the screen gets larger.&quot; The result? More stable layouts, a consistent
                        experience, and code that is much easier to maintain and evolve.
                    </p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto">
                        <code className="language-html text-sm">
                            {`<div className="p-4 md:p-8 lg:p-12 bg-blue-500 text-white">
  Responsive content
</div>`}
                        </code>
                    </motion.pre>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>p-4</strong>: default style (mobile)</li>
                        <li><strong>md:p-8</strong>: applied only on medium screens and up</li>
                        <li><strong>lg:p-12</strong>: applied only on large screens and wider</li>
                    </ul>

                    <p>
                        You can use this approach for anything: grids, spacing, typography, and even
                        colors. With Mobile First, each step of expanding the layout is conscious
                        and controlled — bringing clarity and preventing conflicting styles.
                    </p>
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
                <motion.section className="space-y-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        🎯 What Really Matters in Modern Responsiveness
                    </h2>

                    <p>
                        Being responsive goes far beyond simply &quot;fitting on the screen.&quot; It’s about ensuring
                        that every element has room to breathe, stays well-organized, and offers comfortable
                        readability on any device. Responsiveness is about visual balance, rhythm between
                        elements, clear hierarchy, and smart adaptation as space expands or shrinks.
                    </p>

                    <p>
                        A good responsive design takes care of proportions, respects component scales,
                        and prioritizes fluidity. Instead of manually adjusting everything for each screen,
                        the idea is to create consistent rules that naturally work across various sizes.
                        This reduces rework, avoids style conflicts, and keeps the visual identity coherent.
                    </p>

                    <p>
                        In other words, modern responsiveness is not about patching the layout when it
                        breaks — it’s about designing from the start so it can grow gracefully.
                        The more predictable and modular the design, the easier it becomes to evolve
                        the interface without compromising user experience.
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Proportional typographic scales:</strong> fonts that grow progressively
                            keep reading comfortable and prevent text from looking huge on mobile or tiny
                            on desktop.
                        </li>

                        <li>
                            <strong>Consistent spacing logic:</strong> using a clear spacing system avoids
                            cramped or unbalanced layouts, creating visual rhythm between sections and
                            components.
                        </li>

                        <li>
                            <strong>Avoid duplicating unnecessary styles:</strong> the simpler the CSS,
                            the easier it is to maintain. Reuse classes, rely on the mobile base, and
                            override only what is essential.
                        </li>

                        <li>
                            <strong>Expand rather than fix:</strong> think about how the layout grows,
                            not how it &quot;breaks.&quot; It’s more efficient to define how each part expands
                            than to create patches for when something goes out of place.
                        </li>
                    </ul>

                    <p>
                        By combining these practices, you build interfaces that are more stable, flexible,
                        and intuitive — ready for any resolution, whether a simple smartphone or an
                        ultrawide monitor. Responsiveness becomes less of a technical challenge and more
                        of a natural extension of the design.
                    </p>
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
                    className="space-y-8 border-t pt-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        🏁 Conclusion
                    </h2>

                    <p>
                        Responsiveness is not just a technique — it's a way of understanding the user.
                        Each person has their own rhythm, their own device, and their own way of browsing.
                        When we embrace this idea, we begin building interfaces that adapt to real life,
                        offering visual comfort, smooth transitions, and predictable behavior across all screens.
                    </p>

                    <p>
                        With Tailwind, this process becomes simpler and more natural. The mobile-first
                        philosophy, the ease of creating harmonic scales, and the clarity in class
                        organization allow you to craft layouts that expand gracefully as the available
                        space grows. This reduces decision fatigue, prevents rework, and keeps the focus
                        on the user's experience.
                    </p>

                    <p>
                        When you combine solid spacing practices, well-planned typography, and subtle
                        micro-animations, you get an interface that not only works but also feels
                        carefully crafted. The user perceives that every part was designed to support
                        their way of navigating — whether they're on a phone while moving or on a large
                        desktop screen at home.
                    </p>

                    <p>
                        In short: modern responsiveness is about creating experiences that adapt to
                        people — not forcing people to adapt to the interface. With the right tools
                        and attention to detail, you build products that are more human, accessible,
                        and pleasant to use in any context.
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
