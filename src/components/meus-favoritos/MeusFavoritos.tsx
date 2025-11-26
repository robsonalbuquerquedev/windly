"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "@/data/products";
import CardProduct from "@/components/cards/CardProduct";
import { ChevronRight } from "lucide-react";

export default function MeusFavoritos() {
    const groupSize = 6;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextGroup = () => {
        setCurrentIndex((prev) =>
            prev + groupSize >= PRODUCTS.length ? 0 : prev + groupSize
        );
    };

    // Auto-loop suave (a cada 10 segundos troca)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextGroup();
    //     }, 10000);
    //     return () => clearInterval(interval);
    // }, []);

    // Produtos visíveis
    const visibleProducts = PRODUCTS.slice(
        currentIndex,
        currentIndex + groupSize
    );

    // Caso o slice ultrapasse o tamanho da lista: faz wrap
    const wrapNeeded = visibleProducts.length < groupSize;
    const finalProducts = wrapNeeded
        ? [
            ...visibleProducts,
            ...PRODUCTS.slice(0, groupSize - visibleProducts.length),
        ]
        : visibleProducts;

    return (
        <section className="space-y-10">
            <header className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">Meus Favoritos</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Recomendações pessoais de produtos que considero úteis no dia a dia.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-in-out">
                {finalProducts.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>

            {/* Botão para troca manual */}
            <div className="flex justify-end pr-2">
                <button
                    onClick={nextGroup}
                    className="
      p-2 rounded-full bg-gray-800 text-white
      hover:bg-gray-900 hover:scale-110
      transition-all shadow-md cursor-pointer
    "
                    aria-label="Mostrar mais produtos"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
