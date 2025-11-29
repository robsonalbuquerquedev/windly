import { BookOpen, Code, Globe, Layers, Accessibility, Zap } from "lucide-react";
import Link from "next/link";

const prefix = "/en/guides-tutorials/";

export default function CardContentEN() {
    const items = [
        {
            id: 1,
            icon: <Code className="w-10 h-10 text-sky-600" />,
            title: "TailwindCSS",
            description:
                "Learn how to build modern interfaces using utility classes that make everything fast, lightweight and easy to maintain.",
            link: `${prefix}tailwind`,
        },
        {
            id: 2,
            icon: <Layers className="w-10 h-10 text-sky-600" />,
            title: "Next.js Best Practices",
            description:
                "Discover how to organize routes, components and layouts to improve clarity and speed during development.",
            link: `${prefix}nextjs`,
        },
        {
            id: 3,
            icon: <BookOpen className="w-10 h-10 text-sky-600" />,
            title: "Semantic HTML",
            description:
                "Understand how to use modern tags to improve accessibility, SEO, structure and the clarity of your code.",
            link: `${prefix}semantic-html`,
        },
        {
            id: 4,
            icon: <Globe className="w-10 h-10 text-sky-600" />,
            title: "SEO in Practice",
            description:
                "Learn real techniques to optimize your pages and increase your presence in search engines consistently.",
            link: `${prefix}seo`,
        },
        {
            id: 5,
            icon: <Accessibility className="w-10 h-10 text-sky-600" />,
            title: "Web Accessibility (A11y)",
            description:
                "Learn how to make your interface inclusive with simple practices that help all users navigate better.",
            link: `${prefix}accessibility`,
        },
        {
            id: 6,
            icon: <Zap className="w-10 h-10 text-sky-600" />,
            title: "Front-end Performance",
            description:
                "Understand how to optimize images, scripts and loading to make your site even lighter, faster and more efficient.",
            link: `${prefix}performance`,
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
                        Access Content
                    </Link>
                </article>
            ))}
        </>
    );
}
