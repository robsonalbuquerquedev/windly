"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Post } from "@/types/post";

export function ButtonBlog({
    previous,
    next,
}: {
    previous?: Post;
    next?: Post;
}) {
    if (!previous && !next) return null;

    return (
        <nav className="mt-16 border-t border-white/10 pt-10 flex items-center justify-between">
            {previous ? (
                <Link
                    href={previous.href}
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
                >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="font-semibold">{previous.title}</span>
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link
                    href={next.href}
                    className="flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                >
                    <span className="font-semibold">{next.title}</span>
                    <ChevronRight className="h-5 w-5" />
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
