"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function StructuredData() {
    const pathname = usePathname();
    const baseUrl = "https://windly.dev";

    const [pageTitle, setPageTitle] = useState("Windly — Aprenda Tailwind, SEO e HTML Semântico");

    // Garante que só usamos document.title no ambiente do cliente
    useEffect(() => {
        if (typeof document !== "undefined") {
            setPageTitle(document.title);
        }
    }, []);

    // Monta URL completa
    const currentUrl = `${baseUrl}${pathname === "/" ? "" : pathname}`;

    // Gera breadcrumbs a partir das partes da URL
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

    // Estrutura final do Graph Schema
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

    // Insere o script JSON-LD no head
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "structured-data-windly";
        script.textContent = JSON.stringify(data);

        // Remove versão antiga para evitar duplicações
        const oldScript = document.getElementById("structured-data-windly");
        if (oldScript) oldScript.remove();

        document.head.appendChild(script);

        return () => {
            script.remove();
        };
    }, [pathname, pageTitle]);

    return null;
}
