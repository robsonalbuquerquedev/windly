import Link from "next/link";
import Image from "next/image";

interface CTAProps {
    title: string;
    description: string;
    href: string;
    image?: string; // opcional
}

export default function CTA({ title, description, href, image }: CTAProps) {
    return (
        <section
            className="
        w-full
        bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100
        rounded-2xl
        border border-white/60
        shadow-md
        p-6 md:p-8
        my-10
        flex flex-col md:flex-row
        items-center
        gap-6
      "
            aria-labelledby="cta-title"
        >
            {/* Imagem opcional */}
            {image && (
                <div className="w-full md:w-1/3">
                    <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Texto */}
            <div className="flex-1 space-y-3 text-center md:text-left">
                <h2
                    id="cta-title"
                    className="text-xl md:text-2xl font-semibold text-gray-800"
                >
                    {title}
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    {description}
                </p>

                <Link
                    href={href}
                    target="blank"
                    className="
            inline-block
            mt-4
            px-6 py-3
            bg-indigo-600
            text-white
            font-semibold
            rounded-xl
            shadow
            hover:bg-indigo-700
            transition-all
          "
                >
                    Quero saber mais →
                </Link>
            </div>
        </section>
    );
}
