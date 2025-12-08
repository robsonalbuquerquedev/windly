"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsEN";

const currentIndex = posts.findIndex((p) => p.href === "/en/blog/project-architecture");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function ProjectArchitectureContent() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">
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
                        How to Build Your Modern Project Architecture
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        A complete guide on folder structure, patterns, organization, components,
                        and practices used in real production environments.
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
                        Building a modern project without a solid architecture is like constructing a building without
                        a clear blueprint: it might stand at first, but any expansion, adjustment, or renovation quickly
                        becomes a nightmare. In software development, architecture defines the path your code follows,
                        organizes how features flow, and creates a predictable foundation that keeps the project healthy
                        as it grows in size, complexity, and contributors.
                    </p>

                    <p>
                        A well-designed architecture eliminates guesswork, reduces scattered decisions, and prevents your
                        codebase from turning into a messy collection of disconnected files. It guides how components should
                        communicate, how business logic is centralized, how data moves between layers, and how each part of
                        the system should — and should not — interact. This is essential to keeping the project flexible,
                        scalable, and ready to receive new features without causing unpredictable side effects.
                    </p>

                    <p>
                        Throughout this article, we’ll explore how to build a modern and truly effective architecture for
                        real-world projects. You’ll learn everything from the fundamental principles used in production to
                        widely adopted patterns in companies — such as responsibility-based organization, modular folder
                        structures, domain separation, and layered architecture (UI, Domain, and Infra). We’ll also walk
                        through practical examples applied to Next.js projects, showing how these ideas work in real life
                        — not just in theory.
                    </p>

                    <p>
                        Our goal is to reshape the way you think about and design your applications. By the end, you’ll
                        have a clear understanding of how to structure your code, reduce rework, simplify maintenance,
                        and create projects that are ready to grow with safety, consistency, and elegance.
                    </p>
                </motion.section>

                {/* Why project architecture matters */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🧠 Why does project architecture matter?
                    </h2>

                    <p>
                        Architecture isn’t about decorating code — it’s about giving direction. It works as the map that
                        guides every decision in the project, from folder structure to how components communicate,
                        how data flows, and how the team evolves the code over time. When well planned, it prevents chaos,
                        reduces unnecessary friction, and builds a solid foundation for the project to grow safely and without headaches.
                    </p>

                    <p>
                        In teams, good architecture removes guesswork, standardizes decisions, and shortens the time new
                        developers need to understand the system. In solo projects, it prevents rework, organizes complex flows,
                        and keeps the code from turning into a patchwork that becomes impossible to understand after a few months.
                    </p>

                    <p>
                        With a consistent architecture, features evolve predictably, bugs become easier to track, and each part
                        of the system knows exactly what it should — and shouldn’t — do. The result is a faster, more stable,
                        and far easier-to-maintain product.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Makes maintenance, continuous evolution, and real scalability easier.</li>
                        <li>Reduces rework, eliminates duplication, and improves consistency.</li>
                        <li>Clarifies boundaries between layers, domains, and responsibilities.</li>
                        <li>Enables the creation of truly independent modules, hooks, services, and components.</li>
                        <li>Improves performance, UI organization, caching strategy, and even SEO.</li>
                        <li>Extends the lifespan of the project and lowers the cost of future changes.</li>
                        <li>Helps teams make faster decisions aligned with the same principles.</li>
                    </ul>

                    <p>
                        At the end of the day, architecture is about sustainability. It’s building today with tomorrow in mind —
                        creating an environment where the project not only works, but evolves with elegance and without friction,
                        whether maintained by a single developer or a full team.
                    </p>
                </motion.section>

                {/* Modern structures */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🛠️ Modern structures to organize your project
                    </h2>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Modular folder structure</h3>
                        <p>
                            A modern architecture begins with separating responsibilities. By
                            splitting your project into independent modules — such as
                            <em> components</em>, <em>hooks</em>, <em>services</em>,
                            <em> utils</em>, <em>features</em> and <em>layouts</em> — your code
                            naturally flows without mixing UI with business logic.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`src/
  app/
  components/
  hooks/
  services/
  utils/
  features/
  layouts/`}
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">2. Domain-based organization</h3>
                        <p>
                            Modern projects use a domain-oriented structure, where each area of the
                            system has its own components, hooks, validations, routes, and services.
                            This isolates contexts, reduces dependencies, and makes the project more
                            scalable.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`src/features/
  auth/
    components/
    services/
    hooks/
    validations/
  dashboard/
    components/
    charts/
    utils/`}
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Layered architecture (UI, Domain, Infra)</h3>
                        <p>
                            Splitting your application into layers helps maintain consistency: the UI
                            handles interface, the domain handles business logic, and the
                            infrastructure manages APIs, databases, authentication, and external
                            integrations.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`// Example isolated service
export async function loginService(credentials) {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return res.json();
}`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* Final applied example */}
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
                        Below is an example applying layers, domain separation, and componentization
                        in a Next.js project, keeping the code clean, fluid, and ready to scale.
                    </p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<section className="max-w-4xl mx-auto space-y-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-6 rounded-2xl shadow-lg bg-white/80
               backdrop-blur-md space-y-4 border border-white/50"
  >
    <h2 className="text-2xl font-bold text-gray-900">
      Modular architecture applied
    </h2>
    <p className="text-gray-700">
      Independent, predictable, and growth-ready structures.
    </p>
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
                        Architecture is not an optional detail or a luxury reserved for huge projects. It is the foundation
                        that allows any application — small, medium, or large — to grow with consistency, safety, and
                        predictability. Without a clear structure, every new feature introduces risks; every adjustment
                        becomes a slow process; and the code gradually becomes harder to understand, test, and maintain.
                    </p>

                    <p>
                        By applying solid principles such as modularization, separation of responsibilities, well-defined
                        patterns, independent layers, and domain-oriented organization, you transform your project into a
                        sustainable ecosystem. This reduces rework, improves scalability, decreases coupling, enhances
                        performance, and prepares the code to handle changes — from small fixes to major structural
                        evolutions.
                    </p>

                    <p>
                        Good architecture also creates alignment among team members, speeds up onboarding,
                        reduces technical disagreements, and avoids different interpretations of the same problem.
                        Additionally, when properly applied, it directly improves areas such as caching, SSR, routing,
                        loading, UI organization, and even SEO in modern projects, especially in frameworks like Next.js.
                    </p>

                    <p>
                        If there is one universal truth in development, it is this: well-structured projects survive and evolve;
                        improvised ones accumulate debt and eventually stall. Choosing a consistent architecture is a
                        strategic decision that impacts the present, the future, and the longevity of your code.
                    </p>

                    <p>
                        Use architecture as your compass. It keeps the project on the right path today — and saves you
                        from headaches tomorrow.
                    </p>
                </motion.section>

                {/* Navigation */}
                <motion.footer className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="text-3xl font-bold">Want to continue learning?</h2>
                    <p className="mt-4 text-lg">
                        Explore new content published regularly about development, technology, and
                        modern best practices.
                    </p>

                    <ButtonBlog previous={previous} next={next} />
                </motion.footer>
            </motion.div>
        </article>
    );
}
