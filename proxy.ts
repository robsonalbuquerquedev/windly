import { NextRequest, NextResponse } from "next/server";

// Extensão de tipo para suportar `geo` mesmo em dev
type RequestWithGeo = NextRequest & {
    geo?: {
        country?: string;
    };
};

export default function proxy(req: NextRequest) {
    const request = req as RequestWithGeo;

    const url = request.nextUrl;

    // Evita loop se já estiver dentro das rotas de idioma
    if (url.pathname.startsWith("/pt") || url.pathname.startsWith("/en")) {
        return NextResponse.next();
    }

    // Geo disponível apenas na Vercel (produção). Em dev = undefined → fallback BR.
    const country = request.geo?.country ?? "BR";

    // Lógica de idioma
    const lang = country === "BR" || country === "PT" ? "pt" : "en";

    url.pathname = `/${lang}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/"], // Executa apenas na raiz
};
