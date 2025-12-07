"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FolderTree, Layers, GitBranch, Component, Boxes, Workflow, LayoutTemplate, Grid, CheckCircle, Package } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

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
                sections={[
                    { id: "efficient-folder-structure", label: "Efficient folder structure" },
                    { id: "reusable-layouts", label: "Reusable layouts" },
                    { id: "smart-componentization", label: "Smart componentization" },
                    { id: "development-flow", label: "Development flow (Git Flow)" },
                    { id: "project-structure-benefits", label: "Benefits of a well-structured project" },
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
                            A Next.js application becomes much easier to maintain when its folder structure is planned
                            with intention. A clear organization reduces coupling, improves readability, and allows
                            new features to be added without confusion or unnecessary rework.
                        </p>

                        <p className="mt-3">
                            When each directory has a clear purpose, the team quickly understands where to place or
                            find every part of the project. This prevents duplication, improves communication between
                            developers, and keeps the code scalable as the system grows.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>
                                <strong>app/</strong>: concentrates routes, layouts, pages, segments, and all logic
                                derived from the App Router. It is the heart of the application and defines how
                                navigation is organized.
                            </li>

                            <li>
                                <strong>components/</strong>: stores reusable and independent components, ensuring
                                visual consistency and reducing duplication across the project.
                            </li>

                            <li>
                                <strong>lib/</strong>: contains utility functions, validations, formatters, business
                                logic modules, and integrations. Everything that represents pure logic and can be reused
                                anywhere.
                            </li>

                            <li>
                                <strong>hooks/</strong>: holds custom hooks that encapsulate reusable behaviors,
                                abstracting details and keeping components smaller and easier to read.
                            </li>

                            <li>
                                <strong>styles/</strong>: centralizes global styles, variables, and resets. Even with
                                Tailwind, this directory remains useful for broad rules or global themes.
                            </li>

                            <li>
                                <strong>config/</strong>: ideal for centralizing configurations such as constants,
                                schemas, environment settings, and external integrations.
                            </li>

                            <li>
                                <strong>services/</strong>: contains services such as API calls, database access
                                (in server-side environments), or external communication logic.
                            </li>

                            <li>
                                <strong>types/</strong>: repository for global types, interfaces, and shared contracts.
                                Keeps TypeScript clean and organized.
                            </li>
                        </ul>

                        <p className="mt-4">
                            Structuring your project this way ensures that each part of the application has a clear place,
                            avoiding oversized folders or unclear responsibilities. This leads to faster development and
                            reduces the risk of inconsistent decisions as the project evolves.
                        </p>

                        <figure className="mt-6 rounded-lg overflow-hidden">
                            <Image
                                src="/images/next-structure.png"
                                alt="Organized folder structure in Next.js"
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
                            The <code>app/</code> directory introduces one of the most powerful features in Next.js:
                            the ability to define <strong>route-specific layouts</strong>. This approach makes the
                            application's architecture far more modular, standardized, and easier to scale.
                            Instead of replicating headers, sidebars, footers, or navigation structures across pages,
                            these elements live in a single centralized location and are automatically applied
                            to all dependent routes.
                        </p>

                        <p className="mt-3">
                            Beyond reducing code duplication, layouts ensure visual consistency, streamline daily
                            maintenance, and improve the overall user experience — since fixed interface sections
                            remain stable during navigation. As a result, your application becomes more organized,
                            predictable, and aligned with modern development best practices.
                        </p>

                        <p className="mt-3">
                            Use layouts to structure major areas of the website, separate visual contexts, and
                            create independent layers that may include anything from sidebars and internal menus
                            to global wrappers, breadcrumbs, or section-specific behaviors.
                        </p>

                        <ol className="list-decimal pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Create a layout for each logical area of the site.</strong> Sections like blogs, admin dashboards, or authenticated areas can have their own visual structures.
                            </li>

                            <li>
                                <strong>Avoid duplicating visual structure.</strong> Whenever you notice repeated patterns across pages, move them into a shared layout.
                            </li>

                            <li>
                                <strong>Centralize wrappers and fixed elements.</strong> Components such as containers, top bars, footers, and static columns belong inside
                                the layout, leaving pages responsible only for their unique content.
                            </li>

                            <li>
                                <strong>Use nested layouts when needed.</strong> They allow you to build complex sections where each level introduces its own visual layer.
                            </li>

                            <li>
                                <strong>Standardize common behaviors.</strong> Meta data, theme context, breadcrumbs, and internal navigation can live inside the section’s layout.
                            </li>
                        </ol>
                    </section>

                    {/* Section 3 */}
                    <section
                        id="smart-componentization"
                        aria-labelledby="componentization"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="componentization" className="text-xl font-semibold flex items-center gap-2">
                            <Component size={18} /> Smart componentization
                        </h3>

                        <p>
                            Components should be small, objective, and highly reusable. In Next.js, this philosophy
                            becomes even more powerful thanks to <strong>Server Components</strong>, which allow you to
                            deliver lighter, faster, and more secure pages. By delegating most of the processing to the
                            server, we reduce the amount of JavaScript sent to the client, improving performance and
                            initial load times.
                        </p>

                        <p className="mt-3">
                            Smart componentization also involves clearly separating responsibilities: visuals in the
                            right place, logic in the right place, and interactivity only where it is truly necessary.
                            This separation keeps the project clean, predictable, and easier to evolve, especially as
                            the number of components grows.
                        </p>

                        <p className="mt-3">
                            Use pure components for visual structures, build interfaces from small and independent
                            units, and rely on Client Components only when there is direct interaction with the
                            browser — such as events, controlled animations, local state, or DOM access.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Prefer Server Components.</strong> They reduce the payload sent to the client and improve performance with almost no extra work.
                            </li>

                            <li>
                                <strong>Use Client Components only when necessary.</strong> State, forms, user events, and direct interface manipulation should be the exception,
                                not the rule.
                            </li>

                            <li>
                                <strong>Clearly separate UI and logic.</strong> Keep the presentation layer focused solely on visuals, moving calculations, validations,
                                and data access into isolated functions or server components.
                            </li>

                            <li>
                                <strong>Avoid oversized components.</strong> Whenever something starts to grow too much, break it down into smaller and more specific pieces.
                            </li>

                            <li>
                                <strong>Reuse visual patterns.</strong> Creating small components such as buttons, cards, badges, and wrappers helps keep the interface
                                consistent and standardized.
                            </li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section
                        id="development-flow"
                        aria-labelledby="git-flow"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="git-flow" className="text-xl font-semibold flex items-center gap-2">
                            <GitBranch size={18} /> Development Flow (Git Flow)
                        </h3>

                        <p>
                            Well-structured projects follow a consistent branch pattern to ensure stability,
                            organization, and safety throughout the development process. Git Flow is one of the
                            most widely adopted models because it offers a clear workflow for creating new
                            features, fixing bugs, and preparing releases without compromising what is already in production.
                        </p>

                        <p className="mt-3">
                            The main idea is to separate environments and assign each branch a specific purpose.
                            This allows teams to work in parallel, review code more efficiently, and avoid
                            unexpected conflicts during critical development stages. Below are the most common
                            branches used in this workflow:
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>main</strong>:
                                Contains the stable production-ready version of the project. Nothing is merged here
                                without proper review and testing. It is the project's &quot;safe point.&quot;
                            </li>

                            <li>
                                <strong>dev</strong>:
                                The development environment, where new resources are integrated before moving on
                                to more extensive testing. Everything currently in progress lives here.
                            </li>

                            <li>
                                <strong>feature/*</strong>:
                                Branches created for each new feature, improvement, or experiment. They keep
                                development isolated until the work is ready to be merged into <code>dev</code>.
                            </li>

                            <li>
                                <strong>hotfix/*</strong>:
                                Used for urgent fixes that need to go directly into the production version.
                                After the fix is applied, the branch is merged into both <code>main</code> and
                                <code>dev</code> to keep everything synchronized.
                            </li>

                            <li>
                                <strong>release/*</strong>:
                                Created when the project is about to receive a new stable update. These branches
                                allow final adjustments, reviews, and documentation before merging into <code>main</code>.
                            </li>
                        </ul>

                        <p className="mt-4">
                            Following this workflow helps prevent complex merge conflicts, improves team
                            communication, and creates a cleaner, more readable timeline in the repository.
                            It is one of the most effective practices for keeping code quality high, especially
                            in projects with multiple contributors.
                        </p>

                        <p className="mt-4 text-sm text-black/70">
                            For those who want to deepen their daily workflow with Git and GitHub, there is a simple and
                            straightforward material that shows, in practice, how to apply these concepts without
                            complication. It works very well as a complement for anyone organizing larger projects or
                            looking to improve their development flow.
                            <a
                                href="https://go.hotmart.com/Y103300869V"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                Check out the “Git in Action” eBook.
                            </a>
                        </p>

                        <p className="mt-3 text-sm text-black/70">
                            And if the goal is to follow a more complete path — understanding everything from the basics to
                            a real workflow with examples and best practices applied in everyday work — there is also a
                            course that explores all of this in more detail.
                            <a
                                href="https://go.hotmart.com/T103301411T"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                See the “Understand Git” course.
                            </a>
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section
                        id="project-structure-benefits"
                        aria-labelledby="benefits"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="benefits" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefits of a Well-Structured Project
                        </h3>

                        <p>
                            Keeping your project structure organized brings practical and noticeable advantages to daily
                            development. When each part of the system is in the right place, the workflow becomes more
                            efficient, the team collaborates better, and the code becomes much easier to evolve over time.
                        </p>

                        <p className="mt-3">
                            In Next.js applications, good organization helps with everything from page loading to component
                            reuse and implementing new features. This reduces rework, prevents confusion, and gives the
                            project a solid foundation to grow.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Easier maintenance:</strong> Locating files and understanding the purpose of each part becomes quick, enabling smooth
                                fixes and improvements.
                            </li>

                            <li>
                                <strong>Cleaner components:</strong> With clear responsibilities, each component does only what it needs to do, resulting in
                                more readable, reusable, and easier-to-test code.
                            </li>

                            <li>
                                <strong>Consistent layout:</strong> A solid structure encourages visual and behavioral patterns, ensuring the interface feels
                                unified across the entire application.
                            </li>

                            <li>
                                <strong>Better scalability:</strong> Organized projects grow without losing quality. You can add pages, modules, and new
                                features without creating chaos or needing to refactor everything.
                            </li>

                            <li>
                                <strong>Faster onboarding:</strong> New developers understand the architecture quickly, reducing adaptation time and boosting
                                productivity.
                            </li>

                            <li>
                                <strong>Fewer bugs and less rework:</strong> Structural clarity reduces mistakes caused by misplaced files, duplicated logic, or
                                component conflicts.
                            </li>

                            <li>
                                <strong>Improved performance and mental clarity:</strong> Working in a clean environment lowers cognitive load, increasing focus and enabling
                                smarter decisions.
                            </li>
                        </ul>

                        <p className="mt-4">
                            In the end, structure is the foundation of the project. The more solid it is, the more
                            confidence you’ll have to evolve, scale, and maintain healthy code—even in complex applications.
                        </p>
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
                                <Link href="/en/guides-tutorials/semantic-html" className="underline">
                                    Semantic HTML
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/guides-tutorials/seo" className="underline">
                                    Practical SEO
                                </Link>
                            </li>
                            <li>
                                <Link href="/en/guides-tutorials/accessibility" className="underline">
                                    Web Accessibility
                                </Link>
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
