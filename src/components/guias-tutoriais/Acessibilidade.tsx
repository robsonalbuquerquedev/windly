"use client";

import { motion } from "framer-motion";
import { Accessibility, Eye, Keyboard, Users } from "lucide-react";
import Image from "next/image";

export default function Acessibilidade() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Accessibility size={22} />
                        Acessibilidade Web (A11y): torne sua interface inclusiva para todos
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Aprenda como aplicar técnicas simples e eficazes de acessibilidade para criar
                    interfaces mais humanas, inclusivas e fáceis de navegar. Recursos essenciais
                    para melhorar SEO, usabilidade, experiência geral e ampliar o alcance do seu conteúdo.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Eye size={16} /> Contraste & Cores
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Keyboard size={16} /> Navegação por Teclado
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Users size={16} /> Inclusão Digital
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="accessibility-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="importance" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="importance" className="text-2xl font-bold">
                            Por que acessibilidade importa
                        </h2>

                        <p>
                            A acessibilidade garante que qualquer pessoa — com ou sem deficiência —
                            consiga usar, entender e navegar por uma interface. É uma prática que traz
                            mais qualidade, inclusão, melhor ranqueamento e uma experiência mais fluida em
                            dispositivos móveis e desktop.
                        </p>

                        <p>
                            Além dos benefícios sociais, acessibilidade impacta diretamente SEO, métricas
                            de engajamento e até mesmo a monetização com anúncios. Um site acessível mantém
                            usuários por mais tempo e reduz barreiras de navegação.
                        </p>
                    </section>

                    <section aria-labelledby="keyboard" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="keyboard" className="text-xl font-semibold flex items-center gap-2">
                            <Keyboard size={18} /> Navegação por Teclado
                        </h3>

                        <p>
                            Grande parte dos problemas de acessibilidade envolve navegação por teclado.
                            Usuários com mobilidade reduzida dependem totalmente da tecla Tab para acessar
                            elementos interativos.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Garanta ordem lógica no fluxo de foco.</li>
                            <li>Sempre use <code>&lt;button&gt;</code> para botões — nunca <code>&lt;div&gt;</code>.</li>
                            <li>Links precisam sempre de <code>href</code>.</li>
                            <li>Evite esconder elementos focáveis com CSS.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/a11y-keyboard.png"
                                alt="Exemplo de navegação por teclado com indicador de foco"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Destaque visual de foco ajuda todos os usuários, principalmente quem depende de navegação por teclado.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="color" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="color" className="text-xl font-semibold flex items-center gap-2">
                            <Eye size={18} /> Cores, Contraste e Legibilidade
                        </h3>

                        <p>
                            Cerca de 8% dos homens têm algum grau de daltonismo. Garantir contraste adequado
                            melhora a legibilidade e a compreensão para todos — inclusive em telas com brilho baixo.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Mantenha contraste mínimo de 4.5:1 entre texto e fundo.</li>
                            <li>Evite usar somente cores para transmitir informação.</li>
                            <li>Garanta boa hierarquia visual usando tamanho, peso e espaçamento.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="aria" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="aria" className="text-xl font-semibold">Uso correto de ARIA</h3>

                        <p>
                            ARIA foi feita para complementar HTML, não substituir. Use quando o elemento
                            nativo não for suficiente — nunca para recriar componentes básicos.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefira elementos semânticos sempre que possível.</li>
                            <li>Evite roles desnecessárias: <code>role="button"</code> raramente é necessário.</li>
                            <li>
                                Use atributos como <code>aria-expanded</code> e <code>aria-controls</code> em
                                componentes colapsáveis.
                            </li>
                        </ul>
                    </section>

                    <section aria-labelledby="test" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="test" className="text-xl font-semibold">Testes & Auditoria Contínua</h3>

                        <p>
                            Ferramentas como Lighthouse, Axe DevTools e WAVE ajudam a validar se sua interface
                            está realmente acessível. Testar com leitor de tela e navegação por teclado é fundamental.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Dica: mantenha uma checklist de acessibilidade no processo de revisão de código.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Boas Práticas Rápidas</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Títulos claros com hierarquia correta</li>
                            <li>Texto alternativo descritivo em imagens</li>
                            <li>Componentes interativos usando elementos nativos</li>
                            <li>Labels e instruções para formulários</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Ferramentas Úteis</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Axe DevTools</li>
                            <li>• Lighthouse Accessibility</li>
                            <li>• WAVE Evaluation Tool</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Guias Relacionados</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="/guias-tutoriais/performance" className="underline">Performance Front-end</a></li>
                            <li><a href="/guias-tutoriais/seo" className="underline">Fundamentos de SEO</a></li>
                            <li><a href="/guias-tutoriais/tailwind" className="underline">Padrões com Tailwind</a></li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Acessibilidade não é um extra — é uma melhoria contínua. Pequenos ajustes feitos ao longo
                    das releases criam uma experiência cada vez mais inclusiva e completa.
                </p>
            </footer>
        </article>
    );
}
