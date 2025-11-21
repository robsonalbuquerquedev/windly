"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function StructuredData() {
    const pathname = usePathname();
    const baseUrl = "https://windly.dev";

    // Monta a URL completa automaticamente
    const currentUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

    // Monta título dinâmico conforme metadata
    const pageTitle =
        document.title || "Windly — Aprenda Tailwind, SEO e HTML Semântico";

    // Gera breadcrumb automaticamente a partir da URL
    const segments = pathname.split("/").filter(Boolean);

    const breadcrumbItems = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: baseUrl
        },
        ...segments.map((segment, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: segment.charAt(0).toUpperCase() + segment.slice(1),
            item: `${baseUrl}/${segments.slice(0, index + 1).join("/")}`
        }))
    ];

    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: "Windly",
                url: baseUrl,
                logo: `${baseUrl}/logo-windly.png`,
                sameAs: [
                    "https://instagram.com/robson.albuquerque_cm",
                    "https://facebook.com/robson.albuquerque098"
                ]
            },
            {
                "@type": "WebSite",
                name: "Windly",
                url: baseUrl,
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${baseUrl}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: breadcrumbItems
            },
            {
                "@type": "WebPage",
                name: pageTitle,
                url: currentUrl,
                description:
                    "Aprenda TailwindCSS, HTML Semântico, SEO moderno e boas práticas com Next.js usando componentes acessíveis e elegantes.",
                inLanguage: "pt-BR",
                isPartOf: {
                    "@id": baseUrl
                }
            }
        ]
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(data);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [pathname]);

    return null;
}

export default StructuredData;
