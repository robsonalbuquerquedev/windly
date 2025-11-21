import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://windly.dev";

    // Lista centralizada de páginas — basta adicionar ou remover aqui
    const pages = [
        "",
        "tailwind",
        "nextjs",
        "html-semantico",
        "seo",
        "acessibilidade",
        "performance",
    ];

    return pages.map((page) => ({
        url: `${baseUrl}/${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1.0 : 0.9,
    }));
}
