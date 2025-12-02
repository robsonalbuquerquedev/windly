"use client";

import { useEffect, useState } from "react";

interface SectionItem {
    id: string;
    label: string;
}

interface InitialSetupProps {
    sections: SectionItem[];
}

export default function InitialSetup({ sections }: InitialSetupProps) {
    const [activeSection, setActiveSection] = useState("");

    // Detecta qual seção está visível no scroll
    useEffect(() => {
        const handleScroll = () => {
            let current = "";

            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();

                    // Ativa quando o centro da tela cruza a seção
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = section.id;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    return (
        <div className="hidden lg:block">

            {/* --- Linha divisória superior --- */}
            <div className="border-b border-indigo-200/40 mb-4" />

            {/* Navegação horizontal */}
            <nav
                aria-label="initial-setup"
                className="
                    bg-indigo-50/40
                    border border-indigo-200/40
                    backdrop-blur-sm
                    shadow-sm
                    rounded-xl
                    p-4
                    overflow-x-auto
                    scrollbar-none
                "
            >
                <ul
                    className="
                        flex flex-nowrap gap-3
                        text-sm
                        min-w-max
                    "
                >
                    {sections.map((s) => {
                        const active = activeSection === s.id;

                        return (
                            <li key={s.id}>
                                <a
                                    href={`#${s.id}`}
                                    className={`
                                        px-4 py-2 rounded-md whitespace-nowrap transition-all
                                        ${active
                                            ? "bg-indigo-200 text-indigo-800 font-semibold shadow-sm scale-105"
                                            : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100"
                                        }
                                    `}
                                >
                                    {s.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* --- Linha divisória inferior --- */}
            <div className="border-b border-indigo-200/40 mt-4" />
        </div>
    );
}
