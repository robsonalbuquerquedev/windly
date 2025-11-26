// /data/products.ts
import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Echo Dot 5ª geração",
        description:
            "Som potente, assistente de voz integrada.",
        image: "/images/echodot.jpg",
        url: "https://amazon.com/..."
    },
    {
        id: 2,
        name: "Kindle Paperwhite",
        description:
            "Leitura confortável com iluminação ajustável.",
        image: "/images/kindle.jpg",
        url: "https://amazon.com/..."
    },
    // ⬇️ Adicione quantos quiser
];
