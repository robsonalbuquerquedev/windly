"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FolderTree, Layers, GitBranch, Component, Boxes, Workflow, LayoutTemplate, Grid, CheckCircle, Package } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";

export default function NextjsEN() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <FolderTree size={22} />
                        Next.js Best Practices: structure, organization and efficiency
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Learn how to organize routes, layouts, components and architecture
                    in Next.js to build scalable, fast and easy-to-maintain projects.
                    Gain clarity, consistency and development speed.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Workflow size={16} /> Architecture
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Organization
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Component size={16} /> Componentization
                    </span>
                </div>
            </header>

            <InitialSetup
                title="Initial Setup"
                sections={[
                    { id: "efficient-folder-structure", label: "Efficient folder structure" },
                    { id: "reusable-layouts", label: "Reusable layouts" },
                    { id: "smart-componentization", label: "Smart componentization" },
                    { id: "development-flow", label: "Development flow (Git Flow)" },
                    { id: "project-benefits", label: "Benefits of a well-structured project" },
                    { id: "section-componentization-patterns", label: "Componentization patterns" },
                    { id: "essential-dependencies", label: "Essential dependencies" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="nextjs-best-practices"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Section 1 */}
                    <section
                        id="efficient-folder-structure"
                        aria-labelledby="folder-structure"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="folder-structure" className="text-2xl font-bold flex items-center gap-2">
                            <FolderTree size={20} /> Efficient folder structure
                        </h2>

                        <p>
                            Next.js works extremely well when your project structure is organized
                            with purpose. Well-defined folders bring clarity and reduce coupling.
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>app/</strong>: routes, layouts and pages.</li>
                            <li><strong>components/</strong>: shared components.</li>
                            <li><strong>lib/</strong>: utility functions and business logic.</li>
                            <li><strong>hooks/</strong>: custom hooks.</li>
                            <li><strong>styles/</strong>: global styles.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/next-structure.png"
                                alt="Well-organized folder structure in Next.js"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Visual example of a modern and organized folder structure in Next.js.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Section 2 */}
                    <section
                        id="reusable-layouts"
                        aria-labelledby="layouts"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="layouts" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Reusable layouts
                        </h3>

                        <p>
                            The <code>app/</code> folder allows you to create route-based layouts,
                            making the interface much more modular. Components such as headers,
                            sidebars and footers can be declared once and reused.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Create a layout for each area of the site.</li>
                            <li>Avoid duplicating visual structure.</li>
                            <li>Centralize wrappers and fixed UI elements.</li>
                        </ol>
                    </section>

                    {/* Section 3 */}
                    <section
                        id="smart-componentization"
                        aria-labelledby="smart-componentization"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="componentization" className="text-xl font-semibold flex items-center gap-2">
                            <Component size={18} /> Smart componentization
                        </h3>

                        <p>
                            Components should be small, clear and reusable. In Next.js, prioritize
                            server components whenever possible—they are lighter and reduce the
                            JavaScript sent to the client.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefer Server Components.</li>
                            <li>Use Client Components only when required.</li>
                            <li>Keep UI and logic clearly separated.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section
                        id="development-flow"
                        aria-labelledby="git-flow"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="git-flow" className="text-xl font-semibold flex items-center gap-2">
                            <GitBranch size={18} /> Development workflow (Git Flow)
                        </h3>

                        <p>
                            Structured projects follow a branch pattern to maintain stability:
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>main</strong>: stable version.</li>
                            <li><strong>dev</strong>: development branch.</li>
                            <li><strong>feature/*</strong>: new features.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section
                        id="project-benefits"
                        aria-labelledby="benefits"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="benefits" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefits of a well-structured project
                        </h3>

                        <p>Organizing your Next.js project provides direct advantages:</p>

                        <ul className="list-disc pl-5">
                            <li>Easier maintenance.</li>
                            <li>Cleaner components.</li>
                            <li>Consistent layout.</li>
                            <li>Better scalability.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section
                        id="section-componentization-patterns"
                        aria-labelledby="componentization-patterns"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3
                            id="componentization-patterns"
                            className="text-xl font-semibold flex items-center gap-2"
                        >
                            <Layers size={18} /> Componentization Patterns
                        </h3>

                        <p>
                            A professional interface starts with well-defined components separated between
                            structure (layout) and content. This ensures organization, proper semantics and
                            scalability. Below you’ll find three essential patterns used in modern projects.
                        </p>

                        {/* HeroSplit */}
                        <div className="mt-6 space-y-3">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <LayoutTemplate size={16} /> HeroSplit
                            </h4>

                            <p>
                                The most visually striking block on the page. It presents the purpose of the
                                interface, creates identity and sets the tone of the site right at the top.
                            </p>

                            <ul className="list-disc pl-5">
                                <li>Splits content between image and text.</li>
                                <li>Quickly communicates the main focus of the site.</li>
                                <li>Works as the first visual impression.</li>
                            </ul>

                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`export function HeroSplit() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-16">
      <div>
        <h1 className="text-4xl font-bold">Master Next.js in a simple way</h1>
        <p className="mt-4 text-gray-600">
          Learn modern patterns, folder organization and professional componentization.
        </p>
      </div>

      <img
        src="/hero-image.png"
        alt="Illustration of the Next.js guide"
        className="rounded-xl"
      />
    </section>
  );
}`}
                            </pre>
                        </div>

                        {/* CardLayout */}
                        <div className="mt-8 space-y-3">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <Grid size={16} /> CardLayout
                            </h4>

                            <p>
                                The layout responsible for the spatial organization of cards. It defines the
                                grid, columns, spacing and responsiveness. It is completely independent from
                                the content.
                            </p>

                            <ul className="list-disc pl-5">
                                <li>Visually distributes elements.</li>
                                <li>Keeps consistency across different sections.</li>
                                <li>Can be reused on any page.</li>
                            </ul>

                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`export function CardLayout({ children }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {children}
    </div>
  );
}`}
                            </pre>
                        </div>

                        {/* CardContent */}
                        <div className="mt-8 space-y-3">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <Component size={16} /> CardContent
                            </h4>

                            <p>
                                The internal content of the card: icons, titles, descriptions and links. This
                                is where you define the actual information, keeping it separate from the outer
                                layout.
                            </p>

                            <ul className="list-disc pl-5">
                                <li>Isolates information from the rest of the interface.</li>
                                <li>Makes maintenance and content updates easier.</li>
                                <li>Prevents duplication and keeps the code clean.</li>
                            </ul>

                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`export function CardContent({ icon: Icon, title, description, href }) {
  return (
    <article className="p-5 rounded-xl border bg-white hover:shadow transition">
      <Icon className="size-6 text-blue-600" />

      <h3 className="font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>

      <a
        href={href}
        className="text-blue-600 text-sm font-medium mt-3 inline-block"
      >
        Read more →
      </a>
    </article>
  );
}`}
                            </pre>
                        </div>

                        {/* Why this works so well */}
                        <div className="mt-10">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <CheckCircle size={16} /> Why does this work so well?
                            </h4>

                            <p className="mt-2">
                                Separating layout and content brings immediate advantages to any project:
                            </p>

                            <ul className="list-disc pl-5 mt-2">
                                <li>Correct use of Next.js with efficient componentization.</li>
                                <li>Extreme reuse — less code and more organization.</li>
                                <li>Clean and accessible semantics.</li>
                                <li>Responsiveness ensured by the layout.</li>
                                <li>Easy maintenance and high scalability.</li>
                                <li>Improved SEO thanks to clear structure.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section
                        id="essential-dependencies"
                        aria-labelledby="next-dependencies"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3
                            id="next-dependencies"
                            className="text-xl font-semibold flex items-center gap-2"
                        >
                            <Package size={18} /> Essential dependencies for Next.js projects
                        </h3>

                        <p>
                            Before starting development, it’s common to install some libraries that speed
                            up the workflow. The list below brings together frequently used dependencies
                            in professional Next.js projects.
                        </p>

                        <div className="mt-4 space-y-4">
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`npx create-next-app@latest .
npm install lucide-react
npm install react-icons
npm install react-hot-toast
npm install axios
npm install date-fns
npm install monitor
npm install prismjs
npm install --save-dev @types/prismjs
npm install framer-motion
npm install chart.js
npm install react-chartjs-2`}
                            </pre>

                            {/* Explanations */}
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li>
                                    <strong>create-next-app</strong>: initializes a Next.js project configured with TypeScript, ESLint, and the default structure.
                                </li>
                                <li>
                                    <strong>lucide-react</strong>: modern, lightweight and fully customizable icons.
                                </li>
                                <li>
                                    <strong>react-icons</strong>: a huge collection of icon libraries (FontAwesome, Feather, etc.).
                                </li>
                                <li>
                                    <strong>react-hot-toast</strong>: elegant and easy-to-use notification system.
                                </li>
                                <li>
                                    <strong>axios</strong>: HTTP client for safer, more reliable typed requests.
                                </li>
                                <li>
                                    <strong>date-fns</strong>: lightweight and modular date manipulation.
                                </li>
                                <li>
                                    <strong>monitor</strong>: real-time monitoring and logging (when compatible).
                                </li>
                                <li>
                                    <strong>prismjs</strong>: code highlighting for pages like blogs and documentation.
                                </li>
                                <li>
                                    <strong>@types/prismjs</strong>: TypeScript typings for PrismJS.
                                </li>
                                <li>
                                    <strong>framer-motion</strong>: fluid, declarative animations for React.
                                </li>
                                <li>
                                    <strong>chart.js</strong>: professional, responsive, and feature-rich charts.
                                </li>
                                <li>
                                    <strong>react-chartjs-2</strong>: direct integration between React and Chart.js.
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Quick checklist</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use proper layouts</li>
                            <li>Organize your routes</li>
                            <li>Prioritize Server Components</li>
                            <li>Structure folders with purpose</li>
                            <li>Standardize your development flow</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Main folders</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• app/</li>
                            <li>• components/</li>
                            <li>• lib/</li>
                            <li>• hooks/</li>
                            <li>• styles/</li>
                        </ul>
                    </div>

                    <nav
                        className="bg-white/60 p-4 rounded-2xl border"
                        aria-label="related-guides"
                    >
                        <h4 className="font-semibold">Related Guides</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="/en/guides-tutorials/semantic-html" className="underline">
                                    Semantic HTML
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/seo" className="underline">
                                    Practical SEO
                                </a>
                            </li>
                            <li>
                                <a href="/en/guides-tutorials/accessibility" className="underline">
                                    Web Accessibility
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Well-structured Next.js projects grow with stability, clarity and speed.
                    Solid architecture is the foundation for code that scales.
                </p>
            </footer>
        </article>
    );
}
