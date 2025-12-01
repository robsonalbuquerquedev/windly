import Image from "next/image";
import type { Product } from "@/types/product";

export interface CardProductProps {
    product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
    return (
        <article className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
            {product.image && (
                <div className="w-full h-40 relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <div className="p-5 space-y-3">
                <h2 className="text-lg font-semibold text-gray-900">
                    {product.name}
                </h2>

                <p className="text-gray-600 text-sm">{product.description}</p>

                <a
                    href={product.url}
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
                    Ver Produto
                </a>
            </div>
        </article>
    );
}
