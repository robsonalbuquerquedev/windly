import { ReactNode } from "react";

interface LayoutCardProps {
    id?: string;
    children: ReactNode;
}

export default function LayoutCard({ id, children }: LayoutCardProps) {
    return (
        <section
            id={id}
            className="
        w-full
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        px-6
        py-20
        mt-10
      "
        >
            {children}
        </section>
    );
}
