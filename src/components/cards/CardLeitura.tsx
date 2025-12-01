import Image from "next/image";
import type { Book } from "@/types/book";

export interface CardLeituraProps {
    book: Book;
}

export default function CardLeitura({ book }: CardLeituraProps) {
    return (
        <article className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
            {book.image && (
                <div className="w-full h-40 relative">
                    <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <div className="p-5 space-y-3">
                <h2 className="text-lg font-semibold text-gray-900">
                    {book.title}
                </h2>

                <p className="text-gray-600 text-sm">{book.description}</p>

                <a
                    href={book.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="
                        inline-block
                        px-4 py-2
                        bg-indigo-600 text-white text-sm font-medium
                        rounded-lg shadow-md
                        hover:bg-indigo-700
                        transition
                    "
                >
                    Ver Livro
                </a>
            </div>
        </article>
    );
}
