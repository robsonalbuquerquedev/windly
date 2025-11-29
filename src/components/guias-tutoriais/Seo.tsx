"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, BarChart2, Target, Link as LinkIcon, TrendingUp } from "lucide-react";

export default function Seo() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Search size={22} />
                        SEO na Prática: otimize suas páginas para crescer nos buscadores
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Aprenda técnicas reais para melhorar seu posicionamento orgânico: estrutura semântica,
                    conteúdo relevante, performance, acessibilidade e estratégias modernas que fortalecem
                    sua presença nos buscadores de forma consistente e sustentável.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <BarChart2 size={16} /> SEO Técnico
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Target size={16} /> Intenção de Busca
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <TrendingUp size={16} /> Crescimento Orgânico
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="seo-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            Como SEO funciona na prática
                        </h2>

                        <p>
                            SEO não é só sobre palavras-chave — é uma combinação de experiência de usuário,
                            qualidade de conteúdo, semântica, performance, acessibilidade e autoridade.
                            Quanto mais seu site atende à intenção do usuário, melhor ele performa.
                        </p>

                        <p>
                            O segredo é entender como o buscador interpreta sua página: estrutura,
                            contexto, hierarquia, relação entre elementos e clareza nas informações.
                        </p>
                    </section>

                    <section aria-labelledby="semantica" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="semantica" className="text-xl font-semibold flex items-center gap-2">
                            <Search size={18} /> Semântica e Estrutura
                        </h3>

                        <p>
                            Uma página bem estruturada facilita o entendimento para buscadores e para
                            pessoas. Usar tags semânticas ajuda na leitura do conteúdo e melhora
                            acessibilidade automaticamente.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Use apenas um <code>&lt;h1&gt;</code> por página.</li>
                            <li>Siga hierarquia clara com <code>h2</code>, <code>h3</code> e assim por diante.</li>
                            <li>Use <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code> e <code>&lt;header&gt;</code> quando fizer sentido.</li>
                            <li>Evite blocos enormes de texto sem divisão.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Exemplo de estrutura semântica bem organizada para SEO"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Estrutura clara ajuda buscadores a entender o conteúdo e melhora a
                                navegação para todos os usuários.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="conteudo" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="conteudo" className="text-xl font-semibold flex items-center gap-2">
                            <Target size={18} /> Conteúdo com intenção de busca
                        </h3>

                        <p>
                            Toda busca tem um propósito. Quando seu conteúdo responde exatamente o que
                            o usuário espera, o engajamento melhora e o buscador eleva sua página.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Identifique perguntas reais que o usuário faz.</li>
                            <li>Entregue respostas claras logo no início.</li>
                            <li>Aprofunde com exemplos, guias ou listas.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="tecnico" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="tecnico" className="text-xl font-semibold flex items-center gap-2">
                            <BarChart2 size={18} /> Otimização Técnica
                        </h3>

                        <p>
                            SEO técnico é a base de tudo. Mesmo com conteúdo excelente, uma página lenta
                            ou mal estruturada perde posições rapidamente.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Use metadata corretamente (title, description e OG tags).</li>
                            <li>Otimize imagens com <code>next/image</code>.</li>
                            <li>Reduza CSS e JS desnecessários.</li>
                            <li>Evite CLS e layout shift.</li>
                        </ul>
                    </section>

                    <section aria-labelledby="links" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="links" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> Autoridade & Link Building
                        </h3>

                        <p>
                            Links são votos de confiança. Quando seu site recebe links relevantes e
                            confiáveis, sua autoridade aumenta — e o ranking também.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Dica: links internos bem organizados dão contexto e reduzem taxa de rejeição.
                        </p>
                    </section>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Checklist rápido</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Use título claro com palavra-chave</li>
                            <li>Description focada no benefício</li>
                            <li>Estrutura semântica organizada</li>
                            <li>Conteúdo que responde intenção</li>
                            <li>Imagens otimizadas</li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Ferramentas de SEO</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Google Search Console</li>
                            <li>• Ahrefs / SEMrush</li>
                            <li>• PageSpeed Insights</li>
                            <li>• Screaming Frog SEO</li>
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
                                <a href="/pt/guias-tutoriais/performance" className="underline">
                                    Performance Front-end
                                </a>
                            </li>
                            <li>
                                <a href="/pt/guias-tutoriais/tailwind" className="underline">
                                    Organização no Tailwind
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    SEO é um processo contínuo: pequenos ajustes feitos com frequência constroem
                    resultados sólidos e duradouros ao longo do tempo.
                </p>
            </footer>
        </article>
    );
}
