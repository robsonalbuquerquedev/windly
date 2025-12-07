"use client";

import { motion } from "framer-motion";
import { Accessibility as AccessibilityIcon, Eye, Keyboard, Users } from "lucide-react";
import Image from "next/image";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

export default function Accessibility() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <AccessibilityIcon size={22} />
                        Web Accessibility (A11y): make your interface inclusive for everyone
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to apply simple and effective accessibility techniques to create more
                    human, inclusive, and easy-to-navigate interfaces. Essential practices to improve
                    SEO, usability, overall user experience, and expand your content reach.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Eye size={16} /> Contrast & Colors
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Keyboard size={16} /> Keyboard Navigation
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Users size={16} /> Digital Inclusion
                    </span>
                </div>
            </header>

            <InitialSetup
                sections={[
                    { id: "why-accessibility-matters", label: "Why Accessibility Matters" },
                    { id: "keyboard-navigation", label: "Keyboard Navigation" },
                    { id: "colors-contrast-and-readability", label: "Colors, Contrast and Readability" },
                    { id: "correct-use-of-aria", label: "Correct Use of ARIA" },
                    { id: "testing-e-continuous-auditing", label: "Testing & Continuous Auditing" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="accessibility-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    <section id="why-accessibility-matters" aria-labelledby="importance" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="importance" className="text-2xl font-bold">
                            Why Accessibility Matters
                        </h2>

                        <p>
                            Accessibility is like opening the door of your interface to everyone. Just as a ramp does not
                            benefit only wheelchair users, an accessible website helps every type of user — whether someone
                            with a disability, someone using a phone under bright sunlight, or even someone with a slow
                            internet connection. When each element can be understood and used effortlessly, the overall
                            experience improves dramatically.
                        </p>

                        <p className="mt-2">
                            Creating accessible interfaces means thinking about readability, navigation, contrast, structure,
                            and clarity from the very beginning. This prevents frustration, expands your audience, and makes
                            the site more welcoming, intuitive, and easy to use across different contexts and devices.
                        </p>

                        <p className="mt-2">
                            Beyond promoting inclusion, accessibility directly impacts SEO and quality metrics: search
                            engines better interpret well-structured pages, users stay longer when they can interact with
                            content easily, and smooth navigation even boosts monetization results. An accessible site removes
                            barriers, decreases abandonment, and increases conversions.
                        </p>

                        <p className="mt-2">
                            In the end, accessibility is not just a technical requirement — it is a form of respect for the
                            user and a competitive advantage that turns the digital experience into something truly universal.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section id="keyboard-navigation" aria-labelledby="keyboard" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="keyboard" className="text-xl font-semibold flex items-center gap-2">
                            <Keyboard size={18} /> Keyboard Navigation
                        </h3>

                        <p>
                            Keyboard navigation is one of the most essential pillars of accessibility. Many users with
                            reduced mobility, motor difficulties, or even advanced professionals who prefer speed rely
                            entirely on the <strong>Tab</strong> key to move through links, buttons, forms, and other
                            interactive elements. If a website does not respect this flow, it quickly becomes unusable
                            for part of its audience.
                        </p>

                        <p className="mt-2">
                            It’s crucial to ensure that every element is reachable, predictable, and clearly highlighted.
                            A logical and visible focus not only helps users who depend on it but also improves the overall
                            experience — especially on small screens, when using an external keyboard, assistive technology,
                            or navigating in environments with low responsiveness.
                        </p>

                        <ul className="list-disc pl-5 mt-3 space-y-1">
                            <li>
                                <strong>Ensure a logical focus order.</strong><br />
                                The focus should follow the natural reading flow of the page, respecting headings,
                                sections, and interactive elements in expected sequence. Random focus jumps confuse
                                users and interrupt navigation.
                            </li>

                            <li>
                                <strong>Always use <code>&lt;button&gt;</code> for buttons — never <code>&lt;div&gt;</code>.</strong><br />
                                Non-semantic elements do not receive focus correctly and hinder keyboard use and
                                assistive technologies.
                            </li>

                            <li>
                                <strong>Links must always include <code>href</code>.</strong><br />
                                Without it, the link does not enter the natural navigation flow and does not behave
                                like a real link, harming screen reader usability and SEO.
                            </li>

                            <li>
                                <strong>Avoid hiding focusable elements with CSS.</strong><br />
                                If something remains in the focus flow while invisible to the user, navigation breaks.
                                Always remove interactive elements from focus when they are hidden.
                            </li>

                            <li>
                                <strong>Create visible focus styles.</strong><br />
                                The focus indicator should never be removed. Clear highlights prevent loss of context
                                and help every type of user.
                            </li>

                            <li>
                                <strong>Avoid unnecessary manual tabindex values.</strong><br />
                                The natural order is almost always the most accessible. Values greater than 0 disrupt
                                focus flow and create unpredictable navigation.
                            </li>
                        </ul>

                        <p className="mt-3">
                            When keyboard navigation works properly, the site becomes more inclusive, more professional,
                            and much easier to use in different environments. A solid focus flow is a sign of quality —
                            and search engines also detect this through engagement metrics.
                        </p>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/a11y-keyboard.png"
                                alt="Example of keyboard navigation with focus indicator"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                A visible focus indicator helps every user, especially those who rely on keyboard navigation.
                            </figcaption>
                        </figure>

                        {/* Recommended keyboard CTA */}
                        <p className="mt-4 text-sm text-black/70">
                            If you're building your workspace and want a keyboard that truly enhances your experience —
                            whether for coding, studying, or creating — there's a model that delivers comfort,
                            precision, and long-lasting durability. It's the perfect choice for anyone who spends
                            hours at the computer and wants to avoid strain, boost productivity, and upgrade
                            the overall look of the desk.
                            <a
                                href="https://amzn.to/4rGIe61"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                See keyboard details.
                            </a>
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section id="colors-contrast-and-readability" aria-labelledby="color" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="color" className="text-xl font-semibold flex items-center gap-2">
                            <Eye size={18} /> Colors, Contrast and Readability
                        </h3>

                        <p>
                            Proper color choices and adequate contrast directly influence anyone’s ability to understand
                            and interact with an interface. Around 8% of men have some level of color blindness, and in
                            bright-light environments or low-brightness screens, even users without visual impairments
                            face difficulties. Ensuring good readability is not just about aesthetics — it’s functionality,
                            accessibility, and real usability.
                        </p>

                        <p className="mt-2">
                            When contrast is weak, users must put extra effort into reading and distinguishing elements,
                            which increases eye strain and the chances of errors or page abandonment. On the other hand,
                            a good use of colors brings comfort, clarity, and a natural flow, improving engagement metrics
                            and even SEO, as search engines can better interpret well-structured interfaces.
                        </p>

                        <ol className="list-decimal pl-5 mt-3 space-y-2">
                            <li>
                                <strong>Maintain a minimum contrast ratio of 4.5:1 between text and background.</strong><br />
                                This is the WCAG-recommended standard for normal text. For large text, the minimum is 3:1.
                                Tools like Contrast Checker and the Axe extension help test combinations.
                            </li>

                            <li>
                                <strong>Avoid using color alone to convey information.</strong><br />
                                People with color blindness may not distinguish green from red, for example. Use additional
                                cues such as icons, patterns, helper text, or distinct shapes.
                            </li>

                            <li>
                                <strong>Ensure a strong visual hierarchy using size, weight, and spacing.</strong><br />
                                Hierarchy guides the user’s eye, reduces uncertainty, and makes navigation easier. Headings,
                                subtitles, cards, and buttons should have clear and consistent proportions.
                            </li>

                            <li>
                                <strong>Be careful with text over images.</strong><br />
                                Always use overlays, subtle shadows, or semi-opaque boxes to keep reading comfortable even
                                on complex backgrounds.
                            </li>

                            <li>
                                <strong>Use colors with purpose, not only for aesthetics.</strong><br />
                                Colors communicate emotions, direct attention, and help create efficient visual paths.
                                A well-planned palette avoids visual noise and improves the overall experience.
                            </li>
                        </ol>

                        <p className="mt-3 text-sm text-gray-700">
                            Tip: test your design in both light and dark mode — contrast differences become even more
                            evident in these scenarios.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section id="correct-use-of-aria" aria-labelledby="aria" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="aria" className="text-xl font-semibold">Correct Use of ARIA</h3>

                        <p>
                            The ARIA specification exists to fill gaps in HTML — not to replace it. Many beginner
                            developers try to solve accessibility issues by adding <code>role</code> everywhere, but this
                            often creates more confusion than solutions. The core rule is simple: if HTML already offers
                            a native element that does the job, it will always be more accessible than any manually
                            recreated alternative.
                        </p>

                        <p className="mt-2">
                            ARIA should be used with intention, especially in interactive components that do not have
                            direct HTML equivalents, such as complex menus, tabs, carousels, and dynamically updated
                            lists. When applied correctly, it helps assistive technologies — like screen readers —
                            understand states, hierarchies, and relationships between elements, ensuring navigation that
                            is clear, predictable, and free of surprises.
                        </p>

                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                <strong>Prefer semantic HTML elements whenever possible.</strong><br />
                                Tags like <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;ul&gt;</code> carry built-in meaning for screen
                                readers. This reduces the need for ARIA and avoids unnecessary redundancy.
                            </li>

                            <li>
                                <strong>Avoid unnecessary roles: <code>role=&quot;button&quot;</code> is rarely needed.</strong><br />
                                If something should behave like a button, use a real <code>&lt;button&gt;</code>. Creating
                                a button with <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> forces you to manually
                                implement accessibility (keyboard focus, Enter/Space events, ARIA states…), increasing the
                                likelihood of mistakes.
                            </li>

                            <li>
                                <strong>Use attributes like <code>aria-expanded</code>, <code>aria-controls</code> and <code>aria-hidden</code> for collapsible components.</strong><br />
                                These attributes inform screen readers whether a section is open, closed, or hidden.
                                They are essential in accordions, dropdowns, mobile menus, and tooltips.
                            </li>

                            <li>
                                <strong>Ensure ARIA stays in sync with the visual state.</strong><br />
                                If something looks open visually but <code>aria-expanded</code> remains set to
                                <code>false</code>, the auditory experience becomes inconsistent, causing confusion and
                                inaccurate navigation.
                            </li>

                            <li>
                                <strong>Avoid adding ARIA excessively.</strong><br />
                                The official recommendation is: &quot;Do not use ARIA if you are not sure why you need it.&quot;
                                Misused ARIA can make an interface less accessible than using nothing at all.
                            </li>
                        </ul>

                        <p className="mt-3 text-sm text-gray-700">
                            Tip: always check the &quot;ARIA Authoring Practices&quot; — it provides ready-made behavior
                            guidelines for many component types.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section id="testing-e-continuous-auditing" aria-labelledby="test" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="test" className="text-xl font-semibold">Testing & Continuous Auditing</h3>

                        <p>
                            Accessibility is not something you do only once — it's a continuous process. Tools like
                            Lighthouse, Axe DevTools, and WAVE help quickly identify common issues such as low contrast,
                            missing labels, incorrect hierarchy, or inconsistent navigation. These automated audits don't
                            replace human testing, but they are excellent for maintaining a minimum quality standard
                            throughout development.
                        </p>

                        <p className="mt-2">
                            Beyond automated tools, real-world testing is essential: navigating with the keyboard using only <code>Tab</code>, <code>Shift + Tab</code>, <code>Enter</code>, and <code>Space</code>, simulating
                            screen readers, checking behavior in light and dark themes, and ensuring dynamic elements
                            correctly communicate their states. Small inconsistencies that go unnoticed visually can deeply
                            affect users who rely on assistive technologies.
                        </p>

                        <p className="mt-2">
                            Another important practice is integrating accessibility checks into the CI/CD workflow.
                            Linters, automated validation, and accessibility coverage help prevent regressions and ensure
                            that new features do not introduce issues. Teams that adopt continuous auditing drastically
                            reduce rework and increase interface reliability.
                        </p>

                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                Validate headings, structure, and semantics on every deploy.
                            </li>
                            <li>
                                Test focus behavior, tab order, and interactive states.
                            </li>
                            <li>
                                Document recurring issues to prevent them from happening again.
                            </li>
                            <li>
                                Always review colors and contrast when updating global styles.
                            </li>
                        </ul>

                        <p className="mt-3 text-sm text-gray-700">
                            Tip: maintain an accessibility checklist as part of your code review process. It helps reinforce
                            good practices and standardize quality across the team.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick Best Practices</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Clear headings with proper hierarchy</li>
                            <li>Descriptive image alt text</li>
                            <li>Interactive components using native elements</li>
                            <li>Labels and instructions for forms</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Useful Tools</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Axe DevTools</li>
                            <li>• Lighthouse Accessibility</li>
                            <li>• WAVE Evaluation Tool</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><Link href="/en/guides-tutorials/performance" className="underline">Front-end Performance</Link></li>
                            <li><Link href="/en/guides-tutorials/seo" className="underline">SEO Fundamentals</Link></li>
                            <li><Link href="/en/guides-tutorials/tailwind" className="underline">Tailwind Patterns</Link></li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Accessibility is not an optional feature — it’s a continuous improvement. Small adjustments
                    made throughout releases create a more inclusive and complete experience.
                </p>
            </footer>
        </article>
    );
}
