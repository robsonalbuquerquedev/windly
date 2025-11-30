// src/lib/routeMap.ts

export const routeMap: Record<string, { pt: string; en: string }> = {
    // =======================
    // Páginas principais
    // =======================
    "/": { pt: "/pt", en: "/en" },

    // Hero / Home
    "/home": { pt: "/pt", en: "/en" },

    // Sobre
    "/about": { pt: "/pt/sobre", en: "/en/about" },
    "/sobre": { pt: "/pt/sobre", en: "/en/about" },

    // Contato
    "/contact": { pt: "/pt/contato", en: "/en/contact" },
    "/contato": { pt: "/pt/contato", en: "/en/contact" },

    // Política de Cookies
    "/cookie-policy": {
        pt: "/pt/politica-de-cookies",
        en: "/en/cookie-policy",
    },

    "/politica-de-cookies": {
        pt: "/pt/politica-de-cookies",
        en: "/en/cookie-policy",
    },

    // Política de Privacidade
    "/privacy-policy": {
        pt: "/pt/politica-de-privacidade",
        en: "/en/privacy-policy",
    },

    "/politica-de-privacidade": {
        pt: "/pt/politica-de-privacidade",
        en: "/en/privacy-policy ",
    },

    // Termos de Uso
    "/terms-of-use": {
        pt: "/pt/termos-de-uso",
        en: "/en/terms-of-use",
    },

    "/termos-de-uso": {
        pt: "/pt/termos-de-uso",
        en: "/en/terms-of-use",
    },

    "/affiliate-policy": {
        pt: "/pt/politica-de-afiliados",
        en: "/en/affiliate-policy",
    },

    "/politica-de-afiliados": {
        pt: "/pt/politica-de-afiliados",
        en: "/en/affiliate-policy",
    },

    // =======================
    // Guides & Tutorials
    // =======================
    "/guias-tutoriais/performance": {
        pt: "/pt/guias-tutoriais/performance",
        en: "/en/guides-tutorials/performance",
    },

    "/guides-tutorials/performance": {
        pt: "/pt/guias-tutoriais/performance",
        en: "/en/guides-tutorials/performance",
    },

    "/guias-tutoriais/acessibilidade": {
        pt: "/pt/guias-tutoriais/acessibilidade",
        en: "/en/guides-tutorials/accessibility",
    },

    "/guides-tutorials/accessibility": {
        pt: "/pt/guias-tutoriais/acessibilidade",
        en: "/en/guides-tutorials/accessibility",
    },

    "/guias-tutoriais/seo": {
        pt: "/pt/guias-tutoriais/seo",
        en: "/en/guides-tutorials/seo",
    },

    "/guides-tutorials/seo": {
        pt: "/pt/guias-tutoriais/seo",
        en: "/en/guides-tutorials/seo",
    },

    "/guias-tutoriais/html-semantico": {
        pt: "/pt/guias-tutoriais/html-semantico",
        en: "/en/guides-tutorials/semantic-html",
    },

    "/guides-tutorials/semantic-html": {
        pt: "/pt/guias-tutoriais/html-semantico",
        en: "/en/guides-tutorials/semantic-html",
    },

    "/guias-tutoriais/nextjs": {
        pt: "/pt/guias-tutoriais/nextjs",
        en: "/en/guides-tutorials/nextjs",
    },

    "/guides-tutorials/nextjs": {
        pt: "/pt/guias-tutoriais/nextjs",
        en: "/en/guides-tutorials/nextjs",
    },

    "/guias-tutoriais/tailwind": {
        pt: "/pt/guias-tutoriais/tailwind",
        en: "/en/guides-tutorials/tailwind",
    },

    "/guides-tutorials/tailwind": {
        pt: "/pt/guias-tutoriais/tailwind",
        en: "/en/guides-tutorials/tailwind",
    },

    // =======================
    // Artigos e Blog
    // =======================

    "/blog": { pt: "/pt/blog", en: "/en/blog" },

    // Exemplo de artigo
    "/blog/arquitetura-moderna": {
        pt: "/pt/blog/arquitetura-moderna",
        en: "/en/blog/modern-architecture",
    },

    // Exemplo 2
    "/blog/tailwind-semantica": {
        pt: "/pt/blog/tailwind-semantica",
        en: "/en/blog/tailwind-semantics",
    },
};
