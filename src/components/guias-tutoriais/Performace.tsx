"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Image as ImageIcon, Cloud, Zap } from "lucide-react";

export default function Performance() {
    return (
        <article className="w-full">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <span className="inline-flex items-center gap-2">
                        <Sparkles size={22} />
                        Performance Front-end: como tornar seu site realmente rápido e eficiente
                    </span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                    Aprenda, de forma prática, como otimizar imagens, scripts, carregamento de recursos e
                    toda a estrutura do seu site para garantir velocidade, leveza, consumo eficiente de
                    banda e uma experiência de navegação superior — fatores essenciais para SEO, retenção e monetização.
                </p>

                <div className="flex gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Cpu size={16} /> Caminho Crítico de Renderização
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <ImageIcon size={16} /> Otimização de Imagens
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        <Cloud size={16} /> Cache & CDN Avançado
                    </span>
                </div>
            </header>

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="performance-sections"
            >
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">
                    <section aria-labelledby="why" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="why" className="text-2xl font-bold">
                            Por que a performance importa tanto
                        </h2>
                        <p>
                            Um site rápido reduz taxa de rejeição, melhora SEO, aumenta o tempo de permanência
                            e aumenta significativamente conversões. Desempenho é a base de qualquer experiência
                            digital moderna e impacta desde a primeira impressão até a monetização via anúncios.
                        </p>
                        <p>
                            Em um cenário competitivo onde milissegundos fazem diferença, otimizar performance
                            significa criar uma experiência mais estável, acessível e confiável para todos os dispositivos.
                        </p>
                    </section>

                    <section aria-labelledby="images" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="images" className="text-xl font-semibold flex items-center gap-2">
                            <ImageIcon size={18} /> Otimização de Imagens
                        </h3>

                        <p>
                            Imagens representam grande parte do peso total de uma página e afetam diretamente
                            o tempo de carregamento, consumo de dados e ranqueamento. Trabalhar com formatos
                            modernos e carregamento inteligente reduz drasticamente o uso de banda e melhora
                            Core Web Vitals.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefira AVIF ou WebP para fotos e SVG para ícones e ilustrações.</li>
                            <li>Use <code>Image</code> do Next.js para servir apenas o tamanho necessário.</li>
                            <li>Ative lazy loading para elementos fora da tela.</li>
                            <li>Comprima arquivos e remova metadados desnecessários.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/perf-example.png"
                                alt="Exemplo de otimização de imagens e performance"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Utilize formatos modernos e tamanhos responsivos para melhorar o carregamento.
                            </figcaption>
                        </figure>
                    </section>

                    <section aria-labelledby="js" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="js" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Reduzindo JavaScript
                        </h3>

                        <p>
                            JavaScript é uma das partes mais caras do carregamento, especialmente em
                            dispositivos de entrada e conexões instáveis. Reduzir a quantidade de JS
                            enviado ao cliente melhora tempo de interação e reduz bloqueios de renderização.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Remova dependências desnecessárias.</li>
                            <li>Use <code>dynamic()</code> para importação dinâmica em componentes pesados.</li>
                            <li>Carregue apenas o código crítico no início e faça lazy load no restante.</li>
                        </ol>
                    </section>

                    <section aria-labelledby="metrics" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="metrics" className="text-xl font-semibold">
                            Core Web Vitals & Métricas Essenciais
                        </h3>

                        <p>
                            Essas métricas medem percepção real de velocidade e estabilidade pelos usuários —
                            fatores diretos para ranqueamento, experiência e anúncios. Monitorá-las é essencial
                            para saber se seu site está realmente rápido.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 mt-4">
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>LCP</strong>
                                <p className="text-sm">Largest Contentful Paint — ideal ≤ 2.5s</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>INP</strong>
                                <p className="text-sm">Interaction to Next Paint — ideal ≤ 100ms</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>CLS</strong>
                                <p className="text-sm">Cumulative Layout Shift — ideal ≤ 0.1</p>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="testing" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="testing" className="text-xl font-semibold">Testes & Monitoramento Contínuo</h3>

                        <p>
                            Use ferramentas como Lighthouse, PageSpeed Insights e WebPageTest para validar
                            melhorias e garantir que seu site mantenha boa performance ao longo do tempo.
                            Teste sempre em redes lentas, CPUs limitadas e dispositivos reais para capturar
                            comportamentos do mundo real.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Dica: criar uma checklist de performance por release ajuda a manter melhorias constantes.
                        </p>
                    </section>
                </main>

                <aside className="space-y-6">
                    <div className="sticky top-24 bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Ajustes Rápidos</h4>
                        <ul className="mt-3 list-disc pl-5 text-sm">
                            <li>Servir imagens em AVIF/WebP</li>
                            <li>Ativar compressão Brotli</li>
                            <li>Usar HTTP/2 ou HTTP/3</li>
                            <li>Carregar JS não crítico com <code>defer</code></li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-2xl border">
                        <h4 className="font-semibold">Ferramentas Essenciais</h4>
                        <ul className="mt-3 text-sm space-y-2">
                            <li>• Lighthouse</li>
                            <li>• WebPageTest</li>
                            <li>• DevTools Performance</li>
                        </ul>
                    </div>

                    <nav className="bg-white/60 p-4 rounded-2xl border" aria-label="related-guides">
                        <h4 className="font-semibold">Guias Relacionados</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li><a href="/guias-tutoriais/seo" className="underline">Fundamentos de SEO</a></li>
                            <li><a href="/guias-tutoriais/acessibilidade" className="underline">Acessibilidade Web</a></li>
                            <li><a href="/guias-tutoriais/tailwind" className="underline">Padrões com Tailwind</a></li>
                        </ul>
                    </nav>
                </aside>
            </motion.section>

            <footer className="mt-10 text-sm text-gray-700">
                <p>
                    Mantenha uma checklist de performance no CI para garantir que cada PR melhore seu site.
                    Pequenas otimizações acumuladas geram grandes resultados ao longo do tempo.
                </p>
            </footer>
        </article>
    );
}
