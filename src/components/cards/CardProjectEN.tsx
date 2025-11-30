"use client";

import Image from "next/image";

const projects = [
    {
        title: "Learn Guitar Online",
        description:
            "Platform built with Next.js, Tailwind and technical SEO. Organized content and a modern structure to help beginners learn guitar.",
        url: "https://aprenderviolaoonline.com.br",
        img: "/projects/violao.png",
    },
    {
        title: "Cantos JSM",
        description:
            "Website developed to offer dynamic content with SEO optimization. Built with Next.js, Tailwind and reusable components.",
        url: "https://cantosjsm.com.br",
        img: "/projects/cantos.png",
    },
    // {
    //     title: "English Study Hub",
    //     description:
    //         "Application focused on English learning, fully made with Next.js, TypeScript and framer-motion for smooth animations.",
    //     url: "https://englishstudyhub.vercel.app",
    //     img: "/projects/english.png",
    // },
    {
        title: "Arte Viva Q",
        description:
            "Artistic landing page built with Next.js and Tailwind, focused on a clean, fast and objective layout.",
        url: "https://artevivaq.vercel.app",
        img: "/projects/arteviva.png",
    },
    {
        title: "CM Store E-commerce",
        description:
            "Demonstrative e-commerce using Next.js, Tailwind, SEO and reusable components.",
        url: "https://cmstore-gray.vercel.app",
        img: "/projects/cmstore.png",
    },
    {
        title: "Robson Dev Portfolio",
        description:
            "Portfolio created with Vue.js, SaaS and JavaScript. One of the first projects that helped build the foundation of Windly.",
        url: "https://robson-dev-portfolio.vercel.app",
        img: "/projects/portfolio.png",
    },
];

export default function CardProjectEN() {
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
                                alt={`Project image: ${project.title}`}
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
                                Visit project →
                            </a>
                        </footer>
                    </div>
                </article>
            ))}
        </>
    );
}
