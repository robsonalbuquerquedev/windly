"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { routeMap } from "@/lib/routeMap";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [hovered, setHovered] = useState(false);

    const isPT = pathname?.startsWith("/pt");
    const isEN = pathname?.startsWith("/en");

    function findBaseRoute(path: string) {
        // Remove '/pt' ou '/en'
        const cleaned = path.replace(/^\/(pt|en)/, "");

        // Se ficar vazio, significa que é só "/pt" ou "/en"
        return cleaned === "" ? "/" : cleaned;
    }

    function toggle() {
        if (!pathname) return;

        const base = findBaseRoute(pathname);

        const entry = routeMap[base];

        if (!entry) {
            // fallback seguro
            router.push(isPT ? "/en" : "/pt");
            return;
        }

        router.push(isPT ? entry.en : entry.pt);
    }

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <button
                onClick={toggle}
                aria-label="Trocar idioma"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer"
            >
                <img
                    src={isPT ? "/flags/br.svg" : "/flags/us.svg"}
                    alt={isPT ? "Português (Brasil)" : "English (United States)"}
                    className="w-5 h-5 rounded-sm shadow"
                />
                <span className="text-xs opacity-80">
                    {isPT ? "EN" : "PT"}
                </span>
            </button>

            {hovered && (
                <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-md bg-black/80 text-white text-xs shadow-lg backdrop-blur-sm animate-fadeIn">
                    {isPT ? "Switch to English" : "Trocar para Português"}
                </div>
            )}
        </div>
    );
}
