import React from "react";

/**
 * MainLayout
 *
 * Focado exclusivamente em:
 * - Responsividade global
 * - Background elegante e temático (Tailwind + SEO + Semântica + Next.js)
 * - Espaçamentos internos e externos consistentes
 * - UI/UX limpa, moderna e agradável
 *
 * NÃO possui textos fixos, header, footer ou elementos semânticos como <main>.
 * Ele apenas define a "base visual" da aplicação.
 */

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <div
                className="
        min-h-screen
        w-full
        bg-gradient-to-br from-sky-50 via-blue-100 to-indigo-200
        text-gray-800
        font-sans
        px-6 md:px-10 lg:px-20
        py-10 md:py-16
        flex flex-col
        items-center
        justify-start
      "
            >
                <div
                    className="
          w-full
          max-w-6xl
          bg-white/70 backdrop-blur-md
          shadow-xl rounded-2xl
          border border-white/60
          p-6 md:p-10
          space-y-8
        "
                >
                    {children}
                </div>
            </div>
        </>
    );
}
