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
                        Building a modern project without a good architecture is like constructing a
                        building without blueprints: it might stand, but any renovation becomes a
                        headache. In development, architecture organizes the project flow, defines
                        patterns, and keeps maintenance predictable even as the project grows.
                    </p>

                    <p>
                        In this article, we dive into how to create a solid, modular, and scalable
                        architecture for real-world projects. You’ll learn about folder structure,
                        responsibility separation, company-adopted standards, and complete examples
                        applied in Next.js projects.
                    </p>
                </motion.section>

                {/* Why architecture matters */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🧠 Why project architecture matters
                    </h2>

                    <p>
                        Architecture is not just aesthetics. It’s the compass that guides how the
                        code is created, grows, and stays healthy over time. In teams, it reduces
                        friction between developers, speeds up onboarding, and avoids random
                        decisions that lead to tightly coupled, hard-to-extend code.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Facilitates maintenance and scalability.</li>
                        <li>Reduces rework and duplicated code.</li>
                        <li>Improves clarity between layers and responsibilities.</li>
                        <li>Enables independent modules and components.</li>
                        <li>Helps with SEO, performance, caching, and UI organization.</li>
                    </ul>
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
                        Architecture is not a luxury — it’s the foundation of every project that
                        intends to grow without becoming a mess. By adopting modular organization,
                        independent layers, standardization, and domain separation, you build
                        scalable, maintainable, production-ready systems.
                    </p>

                    <p>Use architecture as your compass. Your code — and your future — will thank you.</p>
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
