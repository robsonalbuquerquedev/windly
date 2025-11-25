import { BookOpen, Code, Globe, Layers, Accessibility, Zap } from "lucide-react";
import Link from "next/link";

export default function CardContent() {
    const items = [
        {
            id: 1,
            icon: <Code className="w-10 h-10 text-sky-600" />,
            title: "TailwindCSS",
            description:
                "Aprenda a criar interfaces modernas usando classes utilitárias que deixam tudo rápido, leve e fácil de manter.",
            link: "/tailwind",
        },
        {
            id: 2,
            icon: <Layers className="w-10 h-10 text-sky-600" />,
            title: "Boas Práticas em Next.js",
            description:
                "Aprenda como organizar rotas, componentes e layouts para ganhar velocidade e clareza no desenvolvimento.",
            link: "/nextjs",
        },
        {
            id: 3,
            icon: <BookOpen className="w-10 h-10 text-sky-600" />,
            title: "HTML Semântico",
            description:
                "Entenda como usar tags modernas para melhorar acessibilidade, SEO, estrutura e a importante clareza do seu código.",
            link: "/html-semantico",
        },
        {
            id: 4,
            icon: <Globe className="w-10 h-10 text-sky-600" />,
            title: "SEO na Prática",
            description:
                "Aprenda técnicas reais para otimizar páginas e aumentar sua presença nos buscadores de forma consistente.",
            link: "/seo",
        },
        {
            id: 5,
            icon: <Accessibility className="w-10 h-10 text-sky-600" />,
            title: "Acessibilidade Web (A11y)",
            description:
                "Aprenda como tornar sua interface inclusiva com práticas simples que ajudam todos os usuários a navegar melhor.",
            link: "/acessibilidade",
        },
        {
            id: 6,
            icon: <Zap className="w-10 h-10 text-sky-600" />,
            title: "Performance em Front-end",
            description:
                "Entenda como otimizar imagens, scripts e carregamento para deixar seu site ainda mais leve, rápido e eficiente.",
            link: "guias-tutoriais/performance",
        }
    ];

    return (
        <>
            {items.map((item) => (
                <article
                    key={item.id}
                    className="
            bg-white
            rounded-xl
            p-8
            shadow-[0_4px_20px_rgba(0,0,0,0.06)]
            border
            border-gray-200
            flex
            flex-col
            gap-4
            hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)]
            transition
          "
                >
                    <div>{item.icon}</div>

                    <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>

                    <p className="text-gray-600">{item.description}</p>

                    <Link
                        href={item.link}
                        className="
              inline-block
              mt-4
              w-fit
              px-5
              py-2
              rounded-lg
              bg-sky-600
              text-white
              font-semibold
              hover:bg-sky-700
              transition
            "
                    >
                        Acessar Conteúdo
                    </Link>
                </article>
            ))}
        </>
    );
}
