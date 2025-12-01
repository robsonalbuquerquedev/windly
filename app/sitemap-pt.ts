// app/sitemap-pt.ts
import { MetadataRoute } from "next";
import { routeMap } from "@/lib/routeMap";

export default function sitemapPt(): MetadataRoute.Sitemap {
    const baseUrl = "https://windly.com.br";

    const data = Object.values(routeMap).map(
        (r: { pt: string; en: string }) => ({
            pt: r.pt,
            en: r.en,
        })
    );

    const unique = Array.from(
        new Map(data.map((item) => [item.pt, item])).values()
    );

    return unique.map(({ pt, en }) => ({
        url: `${baseUrl}${pt}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: pt === "/pt" ? 1.0 : 0.9,

        alternates: {
            languages: {
                "pt-BR": `${baseUrl}${pt}`,
                "en-US": `${baseUrl}${en}`,
            },
        },
    }));
}
