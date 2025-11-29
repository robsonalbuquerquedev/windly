"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Landmark, Blocks, Accessibility, Shapes, Link as LinkIcon } from "lucide-react";

export default function HtmlSemantico() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Landmark size={22} />
                        HTML Semântico: escreva código mais claro, acessível e otimizado
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Entenda como usar tags modernas para melhorar acessibilidade, SEO, estrutura e a
                    clareza do seu código. Aprenda a transformar blocos soltos em páginas bem definidas,
                    fáceis de navegar e prontas para buscadores e tecnologias assistivas.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Accessibility size={16} /> Acessibilidade
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Layers size={16} /> Estrutura Lógica
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Blocks size={16} /> Componentização
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="html-semantico-sections"
            >
                {/* Conteúdo Principal */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            O que é HTML semântico?
                        </h2>

                        <p>
                            HTML semântico é o uso de tags que possuem significado. Em vez de construir
                            tudo com <code>&lt;div&gt;</code>, você usa elementos que descrevem sua função:
                            <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
                            <code>&lt;section&gt;</code> e muito mais.
                        </p>

                        <p>
                            Isso melhora SEO, acessibilidade, entendimento do código e a forma como
                            buscadores interpretam sua página.
                        </p>
                    </section>

                    <section aria-labelledby="estrutura" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="estrutura" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Estrutura clara e organizada
                        </h3>

                        <p>
                            Uma página bem organizada segue uma hierarquia lógica. Cada área tem sua
                            função e ajuda tecnologias assistivas e buscadores a compreenderem o conteúdo.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Use <code>&lt;header&gt;</code> para introdução de uma página ou seção.</li>
                            <li><code>&lt;nav&gt;</code> deve representar conjuntos de links.</li>
                            <li><code>&lt;main&gt;</code> contém o conteúdo principal da página.</li>
                            <li><code>&lt;section&gt;</code> divide conteúdo em blocos temáticos.</li>
                            <li><code>&lt;article&gt;</code> representa conteúdo independente.</li>
                            <li><code>&lt;aside&gt;</code> é ideal para conteúdo complementar.</li>
                            <li><code>&lt;footer&gt;</code> fecha e contextualiza a página ou seção.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Diagrama ilustrando estrutura semântica moderna em HTML5"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Exemplo visual de como o HTML semântico organiza áreas principais da página.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="hierarquia" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="hierarquia" className="text-xl font-semibold flex items-center gap-2">
                            <Shapes size={18} /> Hierarquia de títulos
                        </h3>

                        <p>
                            A hierarquia correta de títulos ajuda leitores humanos e mecanismos de busca
                            a entenderem o fluxo da página.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Use apenas um <code>&lt;h1&gt;</code> por página.</li>
                            <li>Organize o conteúdo com <code>h2</code>, <code>h3</code>, <code>h4</code>…</li>
                            <li>Não pule níveis sem necessidade.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="acessibilidade" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="acessibilidade" className="text-xl font-semibold flex items-center gap-2">
                            <Accessibility size={18} /> Benefícios para Acessibilidade
                        </h3>

                        <p>
                            Quando o HTML segue padrões semânticos, leitores de tela navegam melhor,
                            pessoas com dificuldades cognitivas entendem mais rápido e a navegação fica
                            mais eficiente.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Tag correta = significado claro.</li>
                            <li>Menos necessidade de ARIA manual.</li>
                            <li>Melhor navegação por teclado.</li>
                        </ul>
                    </section>

                    <section aria-labelledby="seo" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="seo" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> Ganhos para SEO
                        </h3>

                        <p>
                            Tags semânticas ajudam buscadores a entenderem qual parte da página é mais
                            relevante, qual é o título, qual é o conteúdo e qual é o contexto.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Quanto mais clara a estrutura, mais fácil é ranquear bem.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Checklist rápido</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use tags com significado</li>
                            <li>Hierarquia de títulos correta</li>
                            <li>Evite divs sem função</li>
                            <li>Estruture seções logicamente</li>
                            <li>Mantenha consistência</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Tags importantes</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• header, nav, main, footer</li>
                            <li>• section, article, aside</li>
                            <li>• figure e figcaption</li>
                            <li>• time, mark, strong, em</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Guias Relacionados</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <a href="/pt/guias-tutoriais/acessibilidade" className="underline">
                                    Acessibilidade Web
                                </a>
                            </li>
                            <li>
                                <a href="/pt/guias-tutoriais/seo" className="underline">
                                    SEO na Prática
                                </a>
                            </li>
                            <li>
                                <a href="/pt/guias-tutoriais/performance" className="underline">
                                    Performance Front-end
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    HTML semântico é um investimento de longo prazo: quanto mais clara sua estrutura,
                    mais seu código cresce com qualidade e impacto.
                </p>
            </footer>
        </article>
    );
}
