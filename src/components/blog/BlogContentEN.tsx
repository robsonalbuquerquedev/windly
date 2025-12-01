"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { posts } from "@/data/postsEN";

export default function BlogContentEN() {
    return (
        <section className="px-6 py-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
                Blog Content
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => {
                    const Icon = post.icon;
                    return (
                        <motion.article
                            key={post.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                        >
                            <Link href={post.href}>
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon className="w-6 h-6 text-sky-600" />
                                    <h3 className="text-lg font-bold">
                                        {post.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    {post.description}
                                </p>

                                <span className="text-sky-600 font-semibold">
                                    Read article →
                                </span>
                            </Link>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
