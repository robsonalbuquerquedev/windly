"use client";

import Image from "next/image";
import AnchorButton from "@/components/buttons/AnchorButton";

export default function HeroSplitAbout() {
    return (
        <section
            className="
                w-full
                pt-10 md:pt-20
                pb-16
                flex flex-col md:flex-row
                items-center
                gap-12
            "
        >
            {/* Left: Text */}
            <article className="flex-1 space-y-6">
                <header className="space-y-3">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        A história por trás do Windly
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700">
                        Um projeto que nasceu da prática real e evoluiu para se tornar
                        um guia moderno sobre Tailwind, SEO, semântica e Next.js —
                        tudo com foco em organização, clareza e profissionalismo.
                    </p>
                </header>

                <section className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                        O Windly surgiu enquanto eu criava e mantinha projetos como{" "}
                        <strong>cantosjsm.com.br</strong> e{" "}
                        <strong>aprenderviolaoonline.com.br</strong>. Durante esse
                        processo, percebi que precisava de um espaço onde pudesse
                        aplicar, estudar e aperfeiçoar técnicas modernas de
                        desenvolvimento.
                    </p>

                    <p>
                        Foi assim que nasceu o Windly: um ambiente pensado para ser
                        extremamente organizado, modular e escalável — refletindo tudo o
                        que o Next.js e o Tailwind podem oferecer quando usados com
                        cuidado e intenção.
                    </p>

                    <p>
                        E aí veio a pergunta inevitável:{" "}
                        <em>
                            “Se isso está me ajudando tanto, por que não ajudar outras
                            pessoas também?”
                        </em>{" "}
                        Assim, o Windly deixou de ser apenas um projeto de estudo e se
                        tornou uma plataforma que compartilha conhecimento acessível,
                        prático e direto ao ponto.
                    </p>

                    <p>
                        Aqui você encontra conteúdos claros, estruturados e escritos com
                        carinho — sempre evoluindo, sempre expandindo e sempre focados em
                        entregar valor real para quem deseja aprender e crescer no mundo
                        da tecnologia.
                    </p>
                </section>

                <footer>
                    <AnchorButton href="#ver-projetos">
                        Conheça outros projetos
                    </AnchorButton>
                </footer>
            </article>

            {/* Right: Image */}
            <figure className="flex-1 flex justify-center">
                <Image
                    src="/robson.png"
                    alt="Foto de Robson Albuquerque, criador do Windly"
                    width={480}
                    height={480}
                    className="
                        rounded-2xl
                        shadow-xl
                        object-cover
                        max-w-xs md:max-w-sm
                    "
                    priority
                />
            </figure>
        </section>
    );
}
