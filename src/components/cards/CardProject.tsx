"use client";

import Image from "next/image";

const projects = [
    {
        title: "Aprender Violão Online",
        description:
            "Plataforma criada com Next.js, Tailwind e SEO técnico. Conteúdos organizados e estrutura moderna para ajudar iniciantes no violão.",
        url: "https://aprenderviolaoonline.com.br",
        img: "/projects/violao.png",
    },
    {
        title: "Cantos JSM",
        description:
            "Site desenvolvido para oferecer conteúdos dinâmicos e otimização em SEO. Feito com Next.js, Tailwind e componentes reaproveitáveis.",
        url: "https://cantosjsm.com.br",
        img: "/projects/cantos.png",
    },
    // {
    //     title: "English Study Hub",
    //     description:
    //         "Aplicação focada no aprendizado de inglês, totalmente feita com Next.js, TypeScript e framer-motion para animações suaves.",
    //     url: "https://englishstudyhub.vercel.app",
    //     img: "/projects/english.png",
    // },
    {
        title: "Arte Viva Q",
        description:
            "Landing page artística criada com Next.js, Tailwind e foco em visual clean, rápido e objetivo.",
        url: "https://artevivaq.vercel.app",
        img: "/projects/arteviva.png",
    },
    {
        title: "CM Store E-commerce",
        description:
            "E-commerce demonstrativo usando Next.js, Tailwind, SEO e componentes reutilizáveis.",
        url: "https://cmstore-gray.vercel.app",
        img: "/projects/cmstore.png",
    },
    {
        title: "Robson Dev Portfolio",
        description:
            "Portfólio criado com Vue.js, SaaS e JavaScript. Um dos primeiros projetos que ajudaram a construir a base do Windly.",
        url: "https://robson-dev-portfolio.vercel.app",
        img: "/projects/portfolio.png",
    },
];

export default function CardProject() {
    return (
        <>
            {projects.map((project, index) => (
                <article
                    key={index}
                    className="
                        bg-white/80
                        backdrop-blur-md
                        border border-gray-200
                        rounded-xl
                        shadow-lg
                        overflow-hidden
                        transition
                        hover:shadow-2xl
                        hover:-translate-y-1
                        duration-300
                        flex flex-col
                    "
                >
                    {/* Project Image */}
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <figure className="w-full h-48 relative">
                            <Image
                                src={project.img}
                                alt={`Imagem do projeto ${project.title}`}
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </a>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                        <header>
                            <h2 className="text-xl font-semibold text-gray-900">
                                {project.title}
                            </h2>
                        </header>

                        <p className="text-gray-700 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <footer className="pt-3">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-block
                                    text-sm
                                    font-medium
                                    text-blue-700
                                    hover:text-blue-900
                                    hover:underline
                                    transition
                                "
                            >
                                Acessar projeto →
                            </a>
                        </footer>
                    </div>
                </article>
            ))}
        </>
    );
}
