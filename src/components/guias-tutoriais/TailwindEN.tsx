"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Palette, Layers, Zap, Boxes, Code, } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

export default function TailwindEN() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Zap size={22} />
                        TailwindCSS: speed, consistency, and modern interfaces
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to build modern interfaces using utility classes that make everything
                    fast, lightweight, and easy to maintain. Build consistent, scalable components
                    with maximum productivity using TailwindCSS as your styling layer.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Sparkles size={16} /> Productivity
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Palette size={16} /> Design System
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Componentization
                    </span>
                </div>
            </header>

            <InitialSetup
                sections={[
                    { id: "utility-classes", label: "Utility classes in practice" },
                    { id: "section-design-system-with-tailwind", label: "Building a Design System with Tailwind" },
                    { id: "section-componentization", label: "Efficient Componentization" },
                    { id: "section-advantages", label: "Why use Tailwind?" },
                    { id: "benefits-well-applied", label: "Benefits of a Well-Applied Tailwind Project" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="tailwind-guide"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Section 1 */}
                    <section
                        id="utility-classes"
                        aria-labelledby="utilities"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="utilities" className="text-2xl font-bold flex items-center gap-2">
                            <Code size={20} /> Utility classes in practice
                        </h2>

                        <p>
                            TailwindCSS follows a simple yet powerful rule: each utility class represents a single
                            responsibility, allowing you to build styles directly in your HTML or JSX. This philosophy
                            reduces the need for separate stylesheets and makes the development workflow faster and more
                            intuitive.
                        </p>

                        <p className="mt-3">
                            Instead of switching between files, components, and style sheets, you keep everything in a
                            single and focused flow. This not only accelerates the creation of pages and interfaces but
                            also ensures consistency across all parts of the project. The result is a smoother and more
                            predictable development experience, especially in larger teams or fast-growing applications.
                        </p>

                        <p className="mt-3">
                            Additionally, because it works with an extensive set of predefined utilities, Tailwind avoids
                            naming conflicts, reduces duplicated styles, and makes fine adjustments effortless. Customizing
                            the design is also simple: just configure your own theme, colors, and spacing inside the
                            <code> tailwind.config.js </code> file.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Fewer CSS files to manage:</strong> Most styling is applied directly within components, reducing the need for auxiliary
                                stylesheets and making maintenance easier.
                            </li>

                            <li>
                                <strong>Predictable and consistent styling:</strong> Since utility classes follow clear patterns, the visual behavior of the interface remains
                                consistent across the entire application.
                            </li>

                            <li>
                                <strong>Faster UI and layout creation:</strong> Building styles directly in the markup accelerates prototyping, complex interfaces, and
                                everyday design adjustments.
                            </li>

                            <li>
                                <strong>Less duplicated CSS:</strong> Because utilities are reusable, you avoid creating multiple definitions of similar styles
                                across different files.
                            </li>

                            <li>
                                <strong>Better integration with design systems:</strong> Tailwind adapts easily to design systems, making it simple to create fully standardized
                                components with minimal effort.
                            </li>

                            <li>
                                <strong>Increased productivity:</strong> With no need to switch contexts, you stay focused on the interface and deliver results more
                                quickly.
                            </li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/tailwind-utility.png"
                                alt="Visual example of TailwindCSS utility classes"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Utility classes simplify development, reduce rework, and bring speed to your project.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Section 2 */}
                    <section
                        id="section-design-system-with-tailwind"
                        aria-labelledby="design-system"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="design-system" className="text-xl font-semibold flex items-center gap-2">
                            <Palette size={18} /> Building a Design System with Tailwind
                        </h3>

                        <p>
                            Creating a solid Design System is one of the biggest investments you can make to ensure
                            consistency, scalability, and development speed. With TailwindCSS, this process becomes
                            much simpler because the framework itself already provides a highly structured set of tokens:
                            colors, spacing, typography, shadows, borders, and even animations can be standardized
                            in a centralized way.
                        </p>

                        <p className="mt-3">
                            Instead of reinventing styles for every component, you create a set of rules that the entire
                            interface will follow. This guarantees that buttons, cards, inputs, modals, and any other element
                            share the same look, behavior, and feel — keeping the project coherent, even when several people
                            are collaborating.
                        </p>

                        <p className="mt-3">
                            The secret is turning the <code>tailwind.config.js</code> file into the project’s single source
                            of truth. It's where you organize primary, secondary, and support colors; define spacing scales;
                            create elegant font sizes; and fine-tune shadows and borders to form a unique and professional
                            visual identity.
                        </p>

                        <ol className="list-decimal pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Define colors in <code>tailwind.config.js</code>:</strong> Centralize your palette by creating tokens like <code>primary</code>, <code>secondary</code>,
                                <code>accent</code>, and <code>neutral</code>. This makes future adjustments easier and keeps
                                the entire system aligned.
                            </li>

                            <li>
                                <strong>Standardize spacing, radius, and typography:</strong> Build a consistent visual rhythm by defining proportional spacing, balanced borders
                                (like <code>rounded-md</code>, <code>rounded-xl</code>), and a clear typographic hierarchy
                                for titles, subtitles, body text, and captions.
                            </li>

                            <li>
                                <strong>Use components with reusable classes:</strong> Buttons, inputs, badges, and cards can follow fixed patterns. By creating components with
                                well-defined utility sets, you avoid duplication and keep the project's style clean and
                                predictable.
                            </li>

                            <li>
                                <strong>Document your Design System:</strong> Even something simple — like a reference file or an internal page — helps the team follow
                                the same guidelines and avoids visual inconsistencies.
                            </li>

                            <li>
                                <strong>Create visual variants:</strong> States like <code>hover</code>, <code>active</code>, <code>focus</code>, <code>disabled</code>,
                                and dark mode themes can be standardized to keep uniformity across different interface states.
                            </li>
                        </ol>

                        <p className="mt-4">
                            When the Design System is well structured, development becomes faster, the code stays cleaner,
                            and the application's visual identity remains professional regardless of project size or the
                            number of people working on it.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section
                        id="section-componentization"
                        aria-labelledby="componentization"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3
                            id="componentization"
                            className="text-xl font-semibold flex items-center gap-2"
                        >
                            <Layers size={18} /> Efficient Componentization
                        </h3>

                        <p>
                            Building components intelligently is what transforms a simple interface into a solid,
                            predictable, and easily scalable foundation. When you combine this concept with the
                            power of Tailwind’s utility classes, each component becomes clearer, more direct, and
                            more structured — exactly what a modern project needs to grow without losing quality.
                        </p>

                        <p className="mt-3">
                            Separating structure, behavior, and style helps reduce coupling and prevents the
                            infamous &quot;style chaos&quot; that grows as a project expands. Instead, every part of
                            the interface follows a construction pattern that makes maintenance, testing,
                            layout adjustments, and even future rewrites much easier.
                        </p>

                        <p className="mt-3">
                            With Tailwind, a common approach is to keep the style as explicit as possible
                            inside the JSX, while the logic remains isolated within the component. This offers
                            visual transparency: by simply looking at the component, you immediately understand
                            how it behaves and how it should be displayed.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Compose classes with minimalistic logic:</strong> Keep the component’s logic simple and focused. Let Tailwind handle the visual
                                representation. This separation increases clarity and prevents duplicated
                                responsibilities.
                            </li>

                            <li>
                                <strong>Create reusable visual patterns:</strong> Buttons, alerts, cards, inputs, and navigation elements can all follow consistent
                                structures and styles. This speeds up development and reduces visual inconsistencies.
                            </li>

                            <li>
                                <strong>Maintain consistency across components:</strong> By repeating patterns of layout, color, and spacing, the user experience stays stable,
                                and the code becomes easier for the entire team to understand.
                            </li>

                            <li>
                                <strong>Use smart variants:</strong> Tailwind makes it easy to apply states such as <code>hover</code>, <code>active</code>,
                                <code>focus</code>, and <code>disabled</code> directly in the markup, avoiding extra CSS
                                and keeping style definitions centralized.
                            </li>

                            <li>
                                <strong>Smaller components, bigger projects:</strong> Small, well-defined components are easier to test, replace, version, and scale.
                                This is the foundation of a maintainable and future-proof design system.
                            </li>
                        </ul>

                        <p className="mt-4">
                            When componentization is done efficiently, the project becomes modular, intuitive,
                            and much easier to evolve. Each component becomes an independent, reusable piece,
                            ready to adapt as the interface grows — without future headaches.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section
                        id="section-advantages"
                        aria-labelledby="advantages"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="advantages" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Why use Tailwind?
                        </h3>

                        <p>
                            Tailwind is not just a set of utility classes — it represents a modern way of thinking about
                            design and interface construction. Instead of writing CSS from scratch for every component,
                            you compose styles directly in the markup, which speeds up the workflow, reduces repetition,
                            and makes the code more transparent.
                        </p>

                        <p className="mt-3">
                            The biggest advantage is predictability: each class does exactly one thing, allowing any developer
                            to quickly understand how a layout was built. This removes the need to browse through hundreds of
                            CSS files, simplifies maintenance, and accelerates delivery — especially in larger teams.
                        </p>

                        <p className="mt-3">
                            On top of that, Tailwind provides a uniform foundation for colors, spacing, typography, and visual
                            states. This keeps the project consistent regardless of its size, complexity, or the number of
                            collaborators involved.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Massive productivity:</strong> Building complex layouts becomes fast and straightforward, since everything is based on simple
                                combinations of utility classes.
                            </li>

                            <li>
                                <strong>No more duplicated styles:</strong> Because utility classes follow global patterns, you avoid recreating unnecessary CSS rules and
                                keep your codebase clean.
                            </li>

                            <li>
                                <strong>Guaranteed visual consistency:</strong> The entire project follows the same set of standards, resulting in a strong, professional,
                                and easy-to-maintain visual identity.
                            </li>

                            <li>
                                <strong>Perfect integration with modern frameworks:</strong> Tailwind works flawlessly with React, Next.js, Vue, and other frameworks, enabling a smooth
                                experience when building components.
                            </li>

                            <li>
                                <strong>Highly customizable:</strong> Through the <code>tailwind.config.js</code> file, you can adjust colors, spacing, typography,
                                and even animations to shape the design exactly the way your project needs.
                            </li>

                            <li>
                                <strong>Great for teams:</strong> Since styles are standardized and explicit, collaboration becomes simpler and less prone to
                                mistakes or visual inconsistencies.
                            </li>
                        </ul>

                        <p className="mt-4">
                            Using Tailwind means writing less CSS, gaining more speed, and keeping your design clean and
                            consistent. It’s a tool that evolves with your project and easily adapts to any scale of growth.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section
                        id="benefits-well-applied"
                        aria-labelledby="benefits"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="benefits" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefits of a Well-Applied Tailwind Project
                        </h3>

                        <p>
                            When Tailwind is used strategically, your project gains clarity, speed, and
                            organization. Well-planned utility classes combined with a consistent architecture
                            turn the codebase into something more predictable, lean, and easy to evolve.
                        </p>

                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>
                                <strong>Cleaner code</strong>, without scattered rules or CSS accumulating
                                complexity over time.
                            </li>
                            <li>
                                <strong>Extremely consistent UI</strong>, since every visual pattern follows
                                the same central configuration and shared tokens.
                            </li>
                            <li>
                                <strong>Much faster delivery</strong>, reducing back-and-forth with CSS and
                                eliminating unnecessary creation of repeated classes.
                            </li>
                            <li>
                                <strong>Truly reusable components</strong>, as logic and style become decoupled,
                                allowing the same visual block to be used anywhere in the project.
                            </li>
                            <li>
                                Improved <strong>team readability</strong>, making maintenance and understanding
                                of each interface element far more intuitive.
                            </li>
                            <li>
                                A drastic reduction of <strong>dead or unused styles</strong>, thanks to
                                Tailwind’s built-in purge and natural modularity.
                            </li>
                        </ul>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick checklist</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use utility classes</li>
                            <li>Create tokens in the config</li>
                            <li>Build a lightweight design system</li>
                            <li>Standardize components</li>
                            <li>Avoid unnecessary CSS</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Key features</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Variables and tokens</li>
                            <li>• Simplified responsiveness</li>
                            <li>• Smart utilities</li>
                            <li>• Practical components</li>
                            <li>• Native performance</li>
                        </ul>
                    </div>

                    <nav
                        className="bg-white/60 p-4 rounded-2xl border"
                        aria-label="related-guides"
                    >
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <Link href="/en/guides-tutorials/nextjs" className="underline">
                                    Next.js best practices
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/guides-tutorials/semantic-html" className="underline">
                                    Semantic HTML
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/guides-tutorials/seo" className="underline">
                                    SEO in practice
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    TailwindCSS allows you to create modern and productive interfaces with agility.
                    Less CSS, more clarity, and much more speed — it’s the perfect foundation for
                    professional projects.
                </p>
            </footer>
        </article>
    );
}
