"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FolderTree,
    Layers,
    GitBranch,
    Component,
    FolderGit2,
    Boxes,
    Workflow,
} from "lucide-react";

export default function Nextjs() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <FolderTree size={22} />
                        Boas Práticas em Next.js: estrutura, organização e eficiência
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Aprenda como organizar rotas, layouts, componentes e arquitetura no Next.js
                    para criar projetos escaláveis, rápidos e fáceis de manter. Ganhe clareza,
                    padronização e velocidade ao desenvolver.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Workflow size={16} /> Arquitetura
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Organização
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Component size={16} /> Componentização
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="nextjs-best-practices"
            >
                {/* Conteúdo Principal */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Seção 1 */}
                    <section
                        aria-labelledby="estrutura-pastas"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="estrutura-pastas" className="text-2xl font-bold flex items-center gap-2">
                            <FolderTree size={20} /> Estrutura de pastas eficiente
                        </h2>

                        <p>
                            Next.js funciona muito bem quando sua estrutura é organizada com propósito.
                            Pastas bem definidas criam clareza e reduzem o acoplamento do projeto.
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>app/</strong>: rotas, layouts e páginas.</li>
                            <li><strong>components/</strong>: componentes compartilhados.</li>
                            <li><strong>lib/</strong>: funções utilitárias e módulos de negócio.</li>
                            <li><strong>hooks/</strong>: hooks customizados.</li>
                            <li><strong>styles/</strong>: estilos globais.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/next-structure.png"
                                alt="Estrutura organizada de pastas no Next.js"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Exemplo visual de uma estrutura moderna e organizada em Next.js.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Seção 2 */}
                    <section
                        aria-labelledby="layouts"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="layouts" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Layouts reutilizáveis
                        </h3>

                        <p>
                            A pasta <code>app/</code> permite criar layouts por rota, tornando a interface
                            muito mais modular. Componentes como headers, sidebars e footers podem ser
                            declarados uma única vez.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Crie um layout por área do site.</li>
                            <li>Evite duplicar estrutura visual.</li>
                            <li>Centralize wrappers e elementos fixos.</li>
                        </ol>
                    </section>

                    {/* Seção 3 */}
                    <section
                        aria-labelledby="componentizacao"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="componentizacao" className="text-xl font-semibold flex items-center gap-2">
                            <Component size={18} /> Componentização inteligente
                        </h3>

                        <p>
                            Componentes devem ser pequenos, claros e reutilizáveis. No Next.js,
                            priorize componentes server sempre que possível — eles são mais leves e
                            reduzem JavaScript no cliente.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefira Server Components.</li>
                            <li>Use Client Components apenas quando necessário.</li>
                            <li>Separação clara entre UI e lógica.</li>
                        </ul>
                    </section>

                    {/* Seção 4 */}
                    <section
                        aria-labelledby="git-flow"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="git-flow" className="text-xl font-semibold flex items-center gap-2">
                            <GitBranch size={18} /> Fluxo de desenvolvimento (Git Flow)
                        </h3>

                        <p>
                            Projetos estruturados seguem um padrão de branches para manter estabilidade:
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>main</strong>: versão estável.</li>
                            <li><strong>dev</strong>: ambiente de desenvolvimento.</li>
                            <li><strong>feature/*</strong>: novas funcionalidades.</li>
                        </ul>
                    </section>

                    {/* Seção 5 */}
                    <section
                        aria-labelledby="beneficios"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="beneficios" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefícios de um projeto bem estruturado
                        </h3>

                        <p>Organizar seu projeto Next.js traz ganhos diretos:</p>

                        <ul className="list-disc pl-5">
                            <li>Manutenção mais fácil.</li>
                            <li>Componentes mais limpos.</li>
                            <li>Layout consistente.</li>
                            <li>Melhor escalabilidade.</li>
                        </ul>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Checklist rápido</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use layouts adequados</li>
                            <li>Rotas bem organizadas</li>
                            <li>Priorize Server Components</li>
                            <li>Estruture pastas com propósito</li>
                            <li>Padronize seu fluxo de desenvolvimento</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Pastas principais</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• app/</li>
                            <li>• components/</li>
                            <li>• lib/</li>
                            <li>• hooks/</li>
                            <li>• styles/</li>
                        </ul>
                    </div>

                    <nav
                        className="bg-white/60 p-4 rounded-2xl border"
                        aria-label="related-guides"
                    >
                        <h4 className="font-semibold">Guias Relacionados</h4>
                        <ul className="mt-3 space-y-2 text-sm">
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
                            <li>
                                <a href="/pt/guias-tutoriais/acessibilidade" className="underline">
                                    Acessibilidade Web
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Projetos bem estruturados em Next.js crescem com estabilidade, clareza e
                    velocidade. Arquitetura sólida é o primeiro passo para um código que escala.
                </p>
            </footer>
        </article>
    );
}
