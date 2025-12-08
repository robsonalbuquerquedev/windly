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
                        When you start building real interfaces with Tailwind, a common question appears quickly:
                        &quot;Is there a clear way to organize all these classes?&quot; It’s normal to feel that the
                        <strong> className </strong> grows too fast and loses readability, especially as the layout evolves or
                        when new states, responsive variations, and conditional styles start to pile up.
                    </p>

                    <p>
                        The good news is that organizing classes doesn’t have to be difficult. With a few simple and consistent
                        techniques, you can keep your code clean, predictable, and easy to evolve — even in more complex pages.
                        Small organizational adjustments make the reading smoother, prevent unnecessary repetition, and help you
                        identify patterns that strengthen your project as a whole.
                    </p>

                    <p>
                        In this guide, you’ll learn three practical approaches that truly make a difference in everyday work:
                        <strong> grouping classes by visual responsibility </strong> to create intuitive blocks,
                        <strong> using conditionals with libraries like clsx </strong> to handle states without clutter,
                        and <strong> turning repeated patterns into reusable components </strong> that keep your layout scalable.
                    </p>

                    <p>
                        To complement this, at the end of the page you’ll find a <strong>real applied example</strong> that shows
                        these techniques working together in a complete component — from class organization to a final structure
                        you can use as a reference in your own projects.
                    </p>

                    <p>
                        If organizing your classes has ever felt tiring or confusing, this guide will help you build a solid and
                        easy-to-apply method, making Tailwind even more comfortable, productive, and enjoyable to use.
                    </p>
                </motion.section>

                {/* Section: Why organization matters */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🧠 Why does organizing your className matter?
                    </h2>

                    <p>
                        In small projects, it may seem like keeping classes organized is unnecessary attention to detail.
                        However, as the application grows, every poorly structured block of code becomes wasted time trying
                        to understand what each class does, why it exists, or how it interacts with the rest of the interface.
                        This wasted time turns into rework, increases the chance of visual bugs, and affects the overall
                        evolution of the project.
                    </p>

                    <p>
                        When the code is clear and well organized, developers work with more confidence, make faster decisions,
                        and avoid inconsistencies. And in teams, this organization becomes even more important: it establishes
                        a predictable visual pattern, improves collaboration, and reduces friction when dealing with code
                        written by someone else.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Makes the code easier to read and maintain, even months later.</li>
                        <li>Prevents the creation of duplicated classes that increase markup weight and complexity.</li>
                        <li>Improves onboarding for new developers by providing a standardized structure.</li>
                        <li>Ensures greater consistency when working with modern patterns like design systems and reusable components.</li>
                        <li>Increases visual predictability, reducing style and behavior conflicts.</li>
                        <li>Makes future refactoring faster, safer, and far less exhausting.</li>
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
                        Organizing classes is not just an aesthetic choice — it's a commitment to clarity, maintainability, and
                        constant evolution. When you structure your <strong>className</strong> with intention, every component
                        becomes easier to understand, update, and reuse. The result is a codebase that works for you, not against you.
                    </p>

                    <p>
                        By applying techniques such as grouping by visual responsibility, using smart conditionals, and turning
                        repeated patterns into reusable components, you build interfaces that grow in a healthy way. This reduces
                        rework, removes visual noise, and strengthens the foundation of your design system — even if you don't have
                        an official one yet.
                    </p>

                    <p>
                        This level of care is also reflected in the final user experience. An organized, predictable, and consistent
                        layout builds trust, reduces friction, and helps users navigate your interface effortlessly. Small details
                        create meaningful impact.
                    </p>

                    <p>
                        In short: organization turns chaos into flow. It allows you to focus on what truly matters — creating more
                        human, beautiful, and stable experiences. Use Tailwind as a tool of freedom, not as a source of clutter.
                        Once you master the method, elegance comes naturally.
                    </p>

                    <p>
                        Keep experimenting, refining, and improving. Your code — and your future projects — will thank you.
                    </p>
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
