// app/sitemap-en.ts
import { MetadataRoute } from "next";
import { routeMap } from "@/lib/routeMap";

export default function sitemapEn(): MetadataRoute.Sitemap {
    const baseUrl = "https://windly.com.br";

    const data = Object.values(routeMap).map(
        (r: { pt: string; en: string }) => ({
            pt: r.pt,
            en: r.en,
        })
    );

    const unique = Array.from(
        new Map(data.map((item) => [item.en, item])).values()
    );

    return unique.map(({ pt, en }) => ({
        url: `${baseUrl}${en}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: en === "/en" ? 1.0 : 0.9,

        alternates: {
            languages: {
                "pt-BR": `${baseUrl}${pt}`,
                "en-US": `${baseUrl}${en}`,
            },
        },
    }));
}
