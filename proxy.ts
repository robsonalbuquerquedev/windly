import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface RequestWithGeo extends NextRequest {
    geo?: {
        country?: string;
    };
}

export default function proxy(request: RequestWithGeo) {
    const url = request.nextUrl;

    // Evita loop se usuário já estiver em /pt ou /en
    if (url.pathname.startsWith("/pt") || url.pathname.startsWith("/en")) {
        return NextResponse.next();
    }

    // Geo da Vercel (funciona apenas em produção)
    const country = request.geo?.country || "US";

    if (country === "BR") {
        url.pathname = "/pt";
        return NextResponse.redirect(url);
    }

    url.pathname = "/en";
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/"], // roda apenas na raiz
};
