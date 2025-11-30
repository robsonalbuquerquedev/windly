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
    // Artigos e Blog
    // (adicione conforme o Windly crescer)
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
