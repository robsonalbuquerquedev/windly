// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = "https://windly.com.br";

  return [
    {
      url: `${baseUrl}/sitemap-pt.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-en.xml`,
      lastModified: new Date(),
    },
  ];
}
