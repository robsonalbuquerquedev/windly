"use client";

import { useEffect, useState } from "react";
import { BOOKS } from "@/data/books";
import CardRead from "@/components/cards/CardRead";
import { ChevronRight } from "lucide-react";

export default function AmantesDaLeitura() {
    const groupSize = 6;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextGroup = () => {
        setCurrentIndex((prev) =>
            prev + groupSize >= BOOKS.length ? 0 : prev + groupSize
        );
    };

    // Produtos visíveis
    const visibleBooks = BOOKS.slice(currentIndex, currentIndex + groupSize);

    // Caso precise fazer wrap (lista pequena)
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
                    Amantes da Leitura
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto">
                    Uma curadoria especial com livros, ebooks e materiais digitais que
                    considero essenciais para evolução pessoal e técnica.
                </p>

                <p className="text-xs text-gray-500 max-w-xl mx-auto">
                    Todos os links desta seção são afiliados e seguem nossas políticas — sem qualquer impacto para você.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out">
                {finalBooks.map((book) => (
                    <CardRead key={book.id} book={book} />
                ))}
            </div>

            {/* Botão de troca manual */}
            <div className="flex justify-end pr-2">
                <button
                    onClick={nextGroup}
                    className="
                        p-2 rounded-full bg-gray-800 text-white
                        hover:bg-gray-900 hover:scale-110
                        transition-all shadow-md cursor-pointer
                    "
                    aria-label="Mostrar mais livros"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
