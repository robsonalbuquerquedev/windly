"use client";

import { useEffect, useState } from "react";
import { BOOKS } from "@/data/books";
import CardRead from "@/components/cards/CardRead";
import { ChevronRight } from "lucide-react";

export default function BookLovers() {
    const groupSize = 6;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextGroup = () => {
        setCurrentIndex((prev) =>
            prev + groupSize >= BOOKS.length ? 0 : prev + groupSize
        );
    };

    const visibleBooks = BOOKS.slice(currentIndex, currentIndex + groupSize);

    const wrapNeeded = visibleBooks.length < groupSize;

    const finalBooks = wrapNeeded
        ? [
            ...visibleBooks,
            ...BOOKS.slice(0, groupSize - visibleBooks.length),
        ]
        : visibleBooks;

    return (
        <section className="space-y-10">
            <header className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">
                    Book Lovers
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    A curated selection of books, ebooks, and digital material I
                    consider essential for both personal and technical growth.
                </p>

                <p className="text-xs text-gray-500 max-w-xl mx-auto">
                    All links in this section are affiliate links and follow our transparency policies — with no impact on you.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out">
                {finalBooks.map((book) => (
                    <CardRead key={book.id} book={book} />
                ))}
            </div>

            <div className="flex justify-end pr-2">
                <button
                    onClick={nextGroup}
                    className="
                        p-2 rounded-full bg-gray-800 text-white
                        hover:bg-gray-900 hover:scale-110
                        transition-all shadow-md cursor-pointer
                    "
                    aria-label="Show more books"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
