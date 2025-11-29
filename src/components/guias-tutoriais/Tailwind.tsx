"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Sparkles,
    Palette,
    Layers,
    Zap,
    Boxes,
    Code,
} from "lucide-react";

export default function Tailwind() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Zap size={22} />
                        TailwindCSS: velocidade, consistência e interfaces modernas
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Aprenda a criar interfaces modernas usando classes utilitárias que deixam tudo
                    rápido, leve e fácil de manter. Construa componentes consistentes, escaláveis
                    e com produtividade máxima usando TailwindCSS como sua camada de estilo.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Sparkles size={16} /> Produtividade
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Palette size={16} /> Design System
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Componentização
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="tailwind-guide"
            >
                {/* Conteúdo Principal */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Seção 1 */}
                    <section
                        aria-labelledby="utilitarios"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="utilitarios" className="text-2xl font-bold flex items-center gap-2">
                            <Code size={20} /> Classes utilitárias na prática
                        </h2>

                        <p>
                            TailwindCSS funciona com uma abordagem simples: cada classe faz uma única
                            coisa, e você compõe o estilo diretamente no HTML ou no JSX.
                            Isso deixa o fluxo rápido e diminui a criação de arquivos CSS.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Menos arquivos CSS para gerenciar.</li>
                            <li>Estilos previsíveis e consistentes.</li>
                            <li>Criação rápida de layouts e UI.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/tailwind-utility.png"
                                alt="Exemplo visual de utilitários TailwindCSS"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Classes utilitárias simplificam o desenvolvimento e trazem velocidade.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Seção 2 */}
                    <section
                        aria-labelledby="design-system"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="design-system" className="text-xl font-semibold flex items-center gap-2">
                            <Palette size={18} /> Construindo um Design System com Tailwind
                        </h3>

                        <p>
                            Tailwind oferece tokens poderosos para cores, espaçamento, tipografia
                            e sombras. Isso permite criar uma identidade visual consistente
                            sem reinventar a roda a cada componente.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Defina cores no <code>tailwind.config.js</code>.</li>
                            <li>Padronize spacing, radius e tipografia.</li>
                            <li>Use componentes com classes reutilizáveis.</li>
                        </ol>
                    </section>

                    {/* Seção 3 */}
                    <section
                        aria-labelledby="componentizacao"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3
                            id="componentizacao"
                            className="text-xl font-semibold flex items-center gap-2"
                        >
                            <Layers size={18} /> Componentização com eficiência
                        </h3>

                        <p>
                            Componentes combinados com Tailwind tornam sua interface clara
                            e fácil de manter. Separar estrutura de estilo deixa tudo escalável
                            e reduz acoplamento.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Componha classes com lógica minimalista.</li>
                            <li>Crie padrões visuais reaproveitáveis.</li>
                            <li>Mantenha consistência entre componentes.</li>
                        </ul>
                    </section>

                    {/* Seção 4 */}
                    <section
                        aria-labelledby="vantagens"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="vantagens" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Por que usar Tailwind?
                        </h3>

                        <p>
                            Tailwind é mais do que um utilitário — é um fluxo de desenvolvimento
                            moderno que elimina CSS repetitivo e traz clareza ao código.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Produtividade enorme.</li>
                            <li>Menos estilos duplicados.</li>
                            <li>Padronização visual garantida.</li>
                            <li>Integração perfeita com React, Next.js e Vue.</li>
                        </ul>
                    </section>

                    {/* Seção 5 */}
                    <section
                        aria-labelledby="beneficios"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="beneficios" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefícios de um projeto com Tailwind bem aplicado
                        </h3>

                        <p>Aplicar Tailwind com boas práticas gera ganhos diretos:</p>

                        <ul className="list-disc pl-5">
                            <li>Código mais limpo.</li>
                            <li>UI mais consistente.</li>
                            <li>Maior velocidade de entrega.</li>
                            <li>Componentes realmente reutilizáveis.</li>
                        </ul>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Checklist rápido</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use classes utilitárias</li>
                            <li>Crie tokens no config</li>
                            <li>Construa um design system leve</li>
                            <li>Padronize componentes</li>
                            <li>Evite CSS desnecessário</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Principais recursos</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Variáveis e tokens</li>
                            <li>• Responsividade simplificada</li>
                            <li>• Utilitários inteligentes</li>
                            <li>• Componentes práticos</li>
                            <li>• Performance nativa</li>
                        </ul>
                    </div>

                    <nav
                        className="bg-white/60 p-4 rounded-2xl border"
                        aria-label="related-guides"
                    >
                        <h4 className="font-semibold">Guias Relacionados</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="/pt/guias-tutoriais/nextjs" className="underline">
                                    Boas práticas em Next.js
                                </a>
                            </li>
                            <li>
                                <a href="/pt/guias-tutoriais/html-semantico" className="underline">
                                    HTML Semântico
                                </a>
                            </li>
                            <li>
                                <a href="/pt/guias-tutoriais/seo" className="underline">
                                    SEO na Prática
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    TailwindCSS permite criar interfaces modernas e produtivas com agilidade.
                    Menos CSS, mais clareza e muito mais velocidade — é a base perfeita para
                    projetos profissionais.
                </p>
            </footer>
        </article>
    );
}
