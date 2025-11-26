// /data/products.ts
import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Echo Dot (Geração mais recente)",
        description: "Som potente, assistente de voz integrada.",
        image: "/images/echodot.jpg",
        url: "https://amzn.to/4p6VdfA"
    },
    {
        id: 2,
        name: "Kindle Paperwhite 16 GB",
        description: "Leitura confortável com iluminação ajustável.",
        image: "/images/kindle.jpg",
        url: "https://amzn.to/4ok0MGo"
    },
    {
        id: 3,
        name: "TECLADO MECÂNICO GAMER",
        description: "Compacto, resistente e ideal para uso diário.",
        image: "/images/redragon.jpg",
        url: "https://amzn.to/49BCZxU"
    },
    {
        id: 4,
        name: "Hub Usb 3.0 Baseus",
        description: "Transforme sua conexão com alta velocidade.",
        image: "/images/baseus.jpg",
        url: "https://amzn.to/484JQPi"
    },
    {
        id: 5,
        name: "Mouse Sem Fio Logitech",
        description: "O mouse favorito dos programadores — ergonomia e precisão.",
        image: "/images/logitech.jpg",
        url: "https://amzn.to/4pBUAuh"
    },
    {
        id: 6,
        name: "Monitor Gamer Samsung Odyssey",
        description: "Mais espaço horizontal para produtividade e multitarefas.",
        image: "/images/odyssey.jpg",
        url: "https://amzn.to/3XRLTjz"
    }
];
