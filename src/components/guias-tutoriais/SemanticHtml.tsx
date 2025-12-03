"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Landmark, Blocks, Accessibility, Shapes, Link as LinkIcon, } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";

export default function SemanticHtml() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Landmark size={22} />
                        Semantic HTML: write clearer, more accessible and optimized code
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to use modern tags to improve accessibility, SEO, structure and
                    code clarity. Turn loose blocks into well-defined pages that are easy to
                    navigate and ready for search engines and assistive technologies.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Accessibility size={16} /> Accessibility
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Logical Structure
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Blocks size={16} /> Componentization
                    </span>
                </div>
            </header>

            <InitialSetup
                sections={[
                    { id: "semantic-html", label: "What is Semantic HTML?" },
                    { id: "clear-and-well-organized-structure", label: "Clear and well-organized structure" },
                    { id: "heading-hierarchy", label: "Heading hierarchy" },
                    { id: "accessibility-benefits", label: "Accessibility Benefits" },
                    { id: "seo-benefits", label: "SEO Benefits" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="semantic-html-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Section 1 */}
                    <section id="semantic-html" aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            What is Semantic HTML?
                        </h2>

                        <p>
                            Semantic HTML is the practice of building pages using elements that carry real meaning.
                            Instead of structuring everything with <code>&lt;div&gt;</code> — which tells nothing to the
                            browser — you use tags that describe the purpose of the content, such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
                            <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code>.
                            Each one provides clear intent and context for both the browser and the user.
                        </p>

                        <p className="mt-3">
                            The goal of semantic HTML is to make it obvious what each part of the page represents. This
                            improves code readability, simplifies maintenance, helps assistive technologies, and guides
                            search engines in understanding the logical structure of your document. In other words,
                            you’re not just creating a page — you’re giving it meaning.
                        </p>

                        <p className="mt-3">
                            By using proper markup, search engines can better identify content sections, understand
                            hierarchies, and assess relevance. This results in stronger SEO. Screen readers also gain
                            accuracy when interpreting the document, which significantly improves accessibility and
                            inclusiveness.
                        </p>

                        <p className="mt-3">
                            Another major advantage is clarity for developers themselves: semantic structures make the
                            code self-descriptive, reducing ambiguity and removing the need for comments explaining
                            &quot;what that div is supposed to be.&quot; A well-semanticized project ages better, scales more
                            safely, and makes onboarding easier for anyone working on the code later.
                        </p>

                        <p className="mt-3">
                            In short, semantic HTML isn’t just a recommended practice — it’s a fundamental pillar for
                            accessibility, SEO, organization, and the overall professional quality of any web
                            application.
                        </p>
                    </section>


                    {/* Section 2 */}
                    <section id="clear-and-well-organized-structure" aria-labelledby="structure" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="structure" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Clear and well-organized structure
                        </h3>

                        <p>
                            A good semantic structure creates a natural flow for users and also for the tools
                            that interpret the content. When each block of the page has a defined purpose, the code
                            becomes more readable, more efficient, and much smarter for SEO and accessibility.
                        </p>

                        <p className="mt-2">
                            Using semantic HTML is not just a modern recommendation — it is a way to ensure that the page
                            communicates its meaning correctly, even without visual styles. This helps screen readers,
                            search engines, and other systems understand priorities and relationships between elements.
                        </p>

                        <ul className="list-disc pl-5 space-y-1 mt-3">
                            <li>
                                Use <code>&lt;header&gt;</code> to introduce a page or section, presenting titles,
                                menus or identification information.
                            </li>
                            <li>
                                <code>&lt;nav&gt;</code> should represent groups of links that guide the user to other
                                important areas, such as primary or secondary menus.
                            </li>
                            <li>
                                <code>&lt;main&gt;</code> holds the central content of the page. There should be only one per page.
                            </li>
                            <li>
                                <code>&lt;section&gt;</code> helps divide thematic blocks, working like chapters inside
                                the content.
                            </li>
                            <li>
                                <code>&lt;article&gt;</code> represents independent content such as a post, news article,
                                tutorial or any piece that could exist outside the page.
                            </li>
                            <li>
                                <code>&lt;aside&gt;</code> is used for complementary information: extra links, callouts,
                                banners, notes or supporting content.
                            </li>
                            <li>
                                <code>&lt;footer&gt;</code> closes and contextualizes the page or section — credits,
                                legal links, additional information and more.
                            </li>
                        </ul>

                        <p className="mt-3">
                            Think of semantic structure as a way of &quot;mapping&quot; your page. When this map is clear,
                            the entire experience improves: maintenance becomes simpler, screen readers gain fluidity,
                            and even search engines start to better understand the value of your content.
                        </p>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Diagram illustrating modern semantic HTML5 structure"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Visual example showing how semantic HTML organizes and defines the main areas of a modern page.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Section 3 */}
                    <section id="heading-hierarchy" aria-labelledby="hierarchy" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="hierarchy" className="text-xl font-semibold flex items-center gap-2">
                            <Shapes size={18} /> Heading hierarchy
                        </h3>

                        <p>
                            The heading hierarchy works as the &quot;logical skeleton&quot; of your page. It shows which parts of the
                            content are more important and how each section relates to the others. When this structure is
                            followed correctly, human readers understand the flow much more easily, and search engines interpret
                            the page with far greater accuracy.
                        </p>

                        <p className="mt-2">
                            Each heading, from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, represents a different level
                            of importance. They are not meant to simply make text bigger — they define a clear structure,
                            allowing assistive technologies to create a &quot;virtual index&quot; that users can navigate.
                        </p>

                        <ol className="list-decimal pl-5 space-y-1 mt-3">
                            <li>
                                Use only one <code>&lt;h1&gt;</code> per page.
                                It represents the main subject of the document and should function as the overall title.
                            </li>
                            <li>
                                Organize the rest of the content using <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>,
                                <code>&lt;h4&gt;</code>…
                                Each level introduces a new subdivision. <code>h2</code> defines major sections, <code>h3</code> expands on them, and so on.
                            </li>
                            <li>
                                Avoid skipping levels without a good reason.
                                For example, do not jump from <code>h2</code> to <code>h4</code> if a <code>h3</code> naturally
                                fits between them. This break confuses screen readers and harms structural clarity.
                            </li>
                            <li>
                                Use headings to organize ideas, not to style text.
                                If the goal is only to make something larger or more visually prominent, rely on CSS classes
                                or utility frameworks — headings exist to define structure, not appearance.
                            </li>
                            <li>
                                Keep a clear relationship between headings and the content that follows.
                                Each section should sit &quot;under&quot; the heading that represents it, just like chapters and
                                subchapters in a book.
                            </li>
                        </ol>

                        <p className="mt-3">
                            Following this hierarchy correctly makes the page much easier to navigate — both for users and
                            for algorithms. Screen readers allow the user to jump directly to specific headings, and search
                            engines understand which sections carry more weight within the overall structure.
                        </p>

                        <p className="mt-2">
                            Ultimately, thinking about heading hierarchy means thinking about the entire experience: clarity,
                            accessibility, scannability and professional organization for your project.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section id="accessibility-benefits" aria-labelledby="accessibility" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="accessibility" className="text-xl font-semibold flex items-center gap-2">
                            <Accessibility size={18} /> Accessibility Benefits
                        </h3>

                        <p>
                            A well-structured and semantic HTML makes the web more inclusive for everyone. When each element
                            is used according to its meaning, screen readers can interpret the page with far more accuracy.
                            This benefits people with visual, cognitive, or motor disabilities, allowing a smoother,
                            clearer, and more predictable browsing experience.
                        </p>

                        <p className="mt-2">
                            In addition, semantic elements already carry native functions and behaviors that reduce the need
                            for hacks, extra attributes, or manual ARIA definitions. This keeps your code cleaner, easier to
                            maintain, and more friendly to any assistive technology.
                        </p>

                        <ul className="list-disc pl-5 space-y-1 mt-3">
                            <li>
                                <strong>Correct tag = clear meaning.</strong><br />
                                A <code>&lt;button&gt;</code> automatically tells a screen reader that it is a button,
                                a <code>&lt;nav&gt;</code> indicates a navigation region, and a <code>&lt;main&gt;</code>
                                immediately represents the main content of the page.
                            </li>

                            <li>
                                <strong>Less need for manual ARIA.</strong><br />
                                Since many elements already include native roles, ARIA becomes complementary — used only in
                                specific cases. This helps avoid common mistakes such as conflicting, unnecessary, or
                                inconsistent roles.
                            </li>

                            <li>
                                <strong>Better keyboard navigation.</strong><br />
                                With a clear semantic structure, users can navigate using Tab, Shift+Tab, and even screen
                                reader shortcuts to jump between headings, regions, and links.
                            </li>

                            <li>
                                <strong>More logical reading order.</strong><br />
                                Proper structure guarantees that screen readers follow a natural reading flow, avoiding
                                confusion, repetitions, or strange jumps in the content.
                            </li>

                            <li>
                                <strong>More predictable interactions.</strong><br />
                                Semantic elements have expected behaviors — for example, a button can be triggered with
                                Enter/Space, while a link takes the user to another page. This creates a more consistent
                                experience for every type of user.
                            </li>
                        </ul>

                        <p className="mt-3">
                            In the end, using semantic HTML means building more human-friendly interfaces. The page becomes
                            clearer, easier to navigate, and fairer for everyone — regardless of the tools they use or the
                            limitations they may have.
                        </p>

                        <p className="mt-2">
                            Accessibility is not just a technical detail: it is a commitment to inclusion,
                            respect, and quality in development.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section id="seo-benefits" aria-labelledby="seo" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="seo" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> SEO Benefits
                        </h3>

                        <p>
                            Semantic tags are essential for search engines to accurately understand the hierarchy
                            and importance of each part of the page. When an HTML document follows a logical
                            structure, engines like Google, Bing, and others can clearly distinguish what is a title,
                            subtitle, main content, navigation, footer, and other key sections.
                        </p>

                        <p className="mt-2">
                            This helps algorithms interpret the context of the content, identify relevance patterns,
                            and connect your page to specific searches with much more confidence. In other words:
                            the more semantic and well-organized the structure is, the easier it becomes to show
                            search engines exactly what your page is about.
                        </p>

                        <p className="mt-2">
                            Additionally, semantic elements like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>, and <code>&lt;footer&gt;</code> help structure content blocks that Google can interpret as
                            independent entities. This opens opportunities for rich snippets, featured snippets,
                            and even better interpretation in voice search results.
                        </p>

                        <p className="mt-2">
                            Proper use of heading tags (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>)
                            also helps search engines understand the priority of each piece of information,
                            reducing ambiguity and reinforcing the central topic of the page.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            The clearer, more coherent, and more logical the structure is, the stronger your ranking
                            potential becomes. Semantics is not just organization — it is SEO strategy.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick checklist</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use meaningful tags</li>
                            <li>Correct heading hierarchy</li>
                            <li>Avoid divs without purpose</li>
                            <li>Structure sections logically</li>
                            <li>Keep consistency</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Important tags</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• header, nav, main, footer</li>
                            <li>• section, article, aside</li>
                            <li>• figure and figcaption</li>
                            <li>• time, mark, strong, em</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="/en/guides-tutorials/accessibility" className="underline">
                                    Web Accessibility
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/seo" className="underline">
                                    SEO in Practice
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/performance" className="underline">
                                    Front-end Performance
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Semantic HTML is a long-term investment: the clearer your structure,
                    the more your code grows with quality and impact.
                </p>
            </footer>
        </article>
    );
}
