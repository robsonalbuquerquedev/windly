import Link from "next/link";

interface AnchorButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function AnchorButton({ href, children }: AnchorButtonProps) {
    return (
        <Link
            href={href}
            className="
        inline-block
        px-6
        py-3
        rounded-lg
        bg-sky-600
        text-white
        font-semibold
        hover:bg-sky-700
        transition
        shadow-md
      "
        >
            {children}
        </Link>
    );
}
