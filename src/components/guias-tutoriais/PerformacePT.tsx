"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Cpu, Image as ImageIcon, Cloud, Zap } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";

export default function PerformancePT() {
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

            <InitialSetup
                sections={[
                    { id: "performance-importa", label: "Por que a performance importa tanto?" },
                    { id: "otimizacao-de-imagens", label: "Otimização de Imagens" },
                    { id: "reduzindo-js", label: "Reduzindo JavaScript" },
                    { id: "core-web-vitals", label: "Core Web Vitals & Métricas Essenciais" },
                    { id: "testes-e-monitoramento-contínuo", label: "Testes & Monitoramento Contínuo" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="performance-sections"
            >
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Seção 1 */}
                    <section id="performance-importa" aria-labelledby="why" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="why" className="text-2xl font-bold">
                            Por que a performance importa tanto?
                        </h2>

                        <p>
                            Desempenho é, basicamente, o tempo que seu site leva para responder ao usuário. Quando essa
                            resposta é rápida, tudo flui com naturalidade: o visitante permanece mais tempo, navega com
                            tranquilidade e encontra o que precisa sem frustração. Sites velozes reduzem drasticamente
                            a taxa de rejeição, melhoram o ranqueamento em buscadores e aumentam tanto a confiança quanto
                            a chance de conversão — seja uma compra, um cadastro ou apenas continuar navegando.
                        </p>

                        <p className="mt-2">
                            Além disso, velocidade tem impacto direto em SEO. Google e outros mecanismos de busca avaliam
                            métricas como LCP (Largest Contentful Paint), FID/INP e CLS para entender se a experiência do
                            usuário é fluida. Quanto mais rápidas e estáveis forem essas métricas, maior a probabilidade
                            de seu conteúdo aparecer nas primeiras posições. Isso significa mais tráfego orgânico e mais
                            oportunidades.
                        </p>

                        <p className="mt-2">
                            Em um mercado altamente competitivo — especialmente em dispositivos móveis, conexões lentas e
                            ambientes com pouca largura de banda — cada milissegundo importa. Performances ruins prejudicam
                            interações simples, aumentam o abandono e fazem o usuário sentir que o site está &quot;pesado&quot; ou mal
                            construído. Já um site bem otimizado transmite profissionalismo, estabilidade e cuidado com a
                            experiência do usuário desde o primeiro carregamento.
                        </p>

                        <p className="mt-2">
                            E não se trata apenas de satisfazer o usuário. Performance impacta diretamente monetização,
                            principalmente quando se utiliza anúncios. Páginas lentas reduzem impressões, diminuem a
                            visibilidade dos anúncios e afetam o valor do CPM. Por outro lado, um site rápido maximiza
                            exibições, melhora a distribuição das campanhas e potencializa ganhos.
                        </p>

                        <p className="mt-2">
                            Otimizar performance é, no fim das contas, construir uma experiência inclusiva, ágil e confiável
                            para qualquer dispositivo — do smartphone mais simples ao desktop mais potente.
                        </p>
                    </section>

                    {/* Seção 2 */}
                    <section id="otimizacao-de-imagens" aria-labelledby="images" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="images" className="text-xl font-semibold flex items-center gap-2">
                            <ImageIcon size={18} /> Otimização de Imagens
                        </h3>

                        <p>
                            Imagens são, quase sempre, os maiores arquivos carregados em uma página web — e isso significa
                            que são também um dos principais fatores que tornam um site rápido ou lento. Quando mal otimizadas,
                            aumentam o tempo de carregamento, consomem mais dados móveis, prejudicam métricas essenciais como
                            LCP e podem até fazer o usuário abandonar a página antes de ver qualquer conteúdo útil.
                        </p>

                        <p className="mt-2">
                            Trabalhar corretamente com formatos modernos, redimensionamento inteligente e compressão eficiente
                            transforma completamente a experiência do usuário. Além de reduzir drasticamente o tamanho dos
                            arquivos, também melhora a estabilidade visual, evita &quot;saltos&quot; de layout e aumenta a pontuação nos
                            Core Web Vitals. Sites que tratam imagens com cuidado são mais rápidos, mais leves e muito melhor
                            avaliados pelos motores de busca.
                        </p>

                        <p className="mt-2">
                            Outro ponto importante é que a otimização não se limita a reduzir tamanho: envolve escolher o formato
                            ideal para cada tipo de imagem, controlar qualidade, definir tamanhos responsivos e carregar somente
                            aquilo que realmente aparece na tela. Esse conjunto de práticas torna o carregamento mais inteligente
                            e eficiente, especialmente em dispositivos móveis ou em redes lentas.
                        </p>

                        <ul className="list-disc pl-5 mt-2">
                            <li>Prefira AVIF ou WebP para fotos e use SVG para ícones, logos e ilustrações escaláveis.</li>
                            <li>Utilize o componente <code>Image</code> do Next.js para entregar automaticamente o tamanho ideal para cada viewport.</li>
                            <li>Ative lazy loading para elementos que estão fora da área visível, economizando banda e acelerando o carregamento inicial.</li>
                            <li>Comprima imagens, ajuste qualidade quando necessário e remova metadados que só aumentam o peso do arquivo.</li>
                            <li>Defina dimensões explícitas para evitar layout shifts e melhorar o CLS.</li>
                            <li>Use <code>srcset</code> e imagens responsivas para entregar arquivos ainda menores em telas menores.</li>
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
                                Formatos modernos, compressão eficiente e tamanhos responsivos são essenciais para um carregamento rápido e estável.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Seção 3 */}
                    <section id="reduzindo-js" aria-labelledby="js" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="js" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Reduzindo JavaScript
                        </h3>

                        <p>
                            JavaScript é um dos componentes mais pesados no ciclo de carregamento de uma página. Além de
                            baixar o arquivo, o navegador ainda precisa analisá-lo, interpretá-lo e executá-lo — e essas
                            etapas são especialmente custosas em dispositivos móveis básicos, redes instáveis e aparelhos
                            mais antigos. Quanto mais JS você envia, maior o tempo de interação, mais travamentos podem
                            ocorrer e mais tempo o usuário precisa esperar para conseguir usar a interface.
                        </p>

                        <p className="mt-2">
                            Reduzir JavaScript não significa sacrificar funcionalidades, mas sim entregá-las de forma
                            inteligente. Muitas vezes, componentes carregam muito mais código do que realmente utilizam,
                            bibliotecas pesadas são importadas desnecessariamente, ou comportamentos simples poderiam ser
                            resolvidos com HTML e CSS sem qualquer JS adicional. A chave está em equilibrar funcionalidade
                            com desempenho.
                        </p>

                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li>
                                <strong>Remova dependências desnecessárias.</strong> Bibliotecas grandes para tarefas simples
                                aumentam o bundle sem motivo. Muitas vezes, um utilitário pequeno ou até funções nativas do
                                JavaScript resolvem tudo.
                            </li>

                            <li>
                                <strong>Use <code>dynamic()</code> para importação dinâmica.</strong> Essa prática permite
                                dividir o bundle e carregar apenas componentes pesados quando realmente forem necessários —
                                como gráficos, mapas ou editores de texto.
                            </li>

                            <li>
                                <strong>Carregue apenas o código crítico no início.</strong> Evite bloquear o usuário com uma
                                avalanche de scripts logo no primeiro paint. Utilize lazy load, code splitting e priorização de
                                scripts para garantir que a parte essencial da página esteja pronta o mais rápido possível.
                            </li>

                            <li>
                                <strong>Prefira interações nativas sempre que possível.</strong> Atributos como
                                <code>details/summary</code>, validações nativas de formulários e animações via CSS podem
                                substituir JS em diversos casos.
                            </li>

                            <li>
                                <strong>Evite hidratação desnecessária.</strong> Em frameworks modernos, componentes 100%
                                estáticos podem ser renderizados no servidor sem enviar JS extra ao cliente.
                            </li>
                        </ol>

                        <p className="mt-3">
                            Quanto menos JavaScript o navegador precisar processar, mais rápido o usuário consegue interagir
                            com a página. Reduzir, dividir e carregar apenas o essencial transforma completamente a percepção
                            de velocidade e torna a interface muito mais fluida, especialmente em dispositivos de menor
                            desempenho.
                        </p>
                    </section>

                    {/* Seção 4 */}
                    <section id="core-web-vitals" aria-labelledby="metrics" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="metrics" className="text-xl font-semibold">
                            Core Web Vitals & Métricas Essenciais
                        </h3>

                        <p>
                            Core Web Vitals são um conjunto de métricas criadas pelo Google para medir como o usuário realmente
                            sente o carregamento, a resposta da página e a estabilidade dos elementos visuais. Não são métricas
                            teóricas: refletem diretamente a experiência real de uso em dispositivos variados, conexões lentas e
                            situações comuns do dia a dia. Um site pode até parecer &quot;leve&quot;, mas se essas métricas estiverem ruins,
                            o usuário perceberá lentidão, travamentos ou layout instável — e isso afeta ranqueamento, conversão e
                            até monetização.
                        </p>

                        <p className="mt-2">
                            Monitorar essas métricas continuamente é essencial, porque elas mudam conforme seu conteúdo evolui.
                            Adicionar uma imagem grande demais, incluir um script pesado ou alterar um componente pode impactar
                            diretamente esses indicadores. Mesmo pequenos detalhes podem tornar a experiência menos fluida, e é
                            justamente por isso que acompanhar esses valores deve fazer parte do ciclo de desenvolvimento.
                        </p>

                        <p className="mt-2">
                            O Google utiliza esses dados não apenas para entender o desempenho técnico, mas também para avaliar
                            quanto o usuário consegue navegar sem frustração. Um bom Core Web Vitals significa que a página carrega
                            rápido, reage rápido e mantém tudo estável durante o processo — três pilares fundamentais para qualquer
                            projeto profissional e competitivo.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 mt-4">
                            <div className="p-4 bg-white rounded-lg border">
                                <strong>LCP</strong>
                                <p className="text-sm">
                                    Largest Contentful Paint — mede quanto tempo leva para o principal elemento visível da página
                                    aparecer por completo. Ideal ≤ 2.5s.
                                </p>
                                <p className="text-xs mt-1 text-gray-600">
                                    Melhorias comuns: otimizar imagens grandes, usar CDN, pré-carregar fontes e minimizar bloqueios
                                    de renderização.
                                </p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border">
                                <strong>INP</strong>
                                <p className="text-sm">
                                    Interaction to Next Paint — mede o tempo entre o usuário interagir (clique, toque, teclado) e a
                                    página responder visualmente. Ideal ≤ 100ms.
                                </p>
                                <p className="text-xs mt-1 text-gray-600">
                                    Melhorias comuns: reduzir JavaScript, evitar tarefas longas, usar web workers e dividir scripts.
                                </p>
                            </div>

                            <div className="p-4 bg-white rounded-lg border">
                                <strong>CLS</strong>
                                <p className="text-sm">
                                    Cumulative Layout Shift — mede o quanto a página &quot;salta&quot; ou move elementos durante o carregamento.
                                    Ideal ≤ 0.1.
                                </p>
                                <p className="text-xs mt-1 text-gray-600">
                                    Melhorias comuns: definir dimensões fixas para imagens, ads, iframes e evitar carregamentos tardios
                                    sem reserva de espaço.
                                </p>
                            </div>
                        </div>

                        <p className="mt-4">
                            A soma dessas três métricas dá uma visão extremamente clara de como o usuário percebe sua página. Quando
                            todas estão dentro dos valores ideais, a navegação se torna suave, agradável e confiável, aumentando tempo
                            de permanência, reduzindo rejeição e reforçando credibilidade. Em ambientes competitivos, muitas vezes é a
                            diferença entre o usuário ficar no seu site ou abandonar em poucos segundos.
                        </p>
                    </section>

                    {/* Seção 5 */}
                    <section id="testes-e-monitoramento-contínuo" aria-labelledby="testing" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="testing" className="text-xl font-semibold">Testes & Monitoramento Contínuo</h3>

                        <p>
                            Garantir alta performance não é um evento único — é um processo contínuo. À medida que o projeto
                            cresce, novos componentes, scripts, imagens e integrações vão sendo adicionados, e cada mudança
                            pode impactar a velocidade. Por isso, testar regularmente se torna essencial para identificar
                            gargalos antes que eles afetem o usuário final.
                        </p>

                        <p className="mt-2">
                            Ferramentas como Lighthouse, PageSpeed Insights e WebPageTest permitem medir o comportamento do
                            site em situações reais, mostrando pontos fortes, fraquezas e recomendações claras de melhorias.
                            Elas revelam problemas de rede, excesso de JavaScript, imagens pesadas, falhas de acessibilidade
                            e até impactos no Core Web Vitals — tudo baseado em cenários que simulam o uso do mundo real.
                        </p>

                        <p className="mt-2">
                            Além disso, é fundamental testar em condições adversas: conexões lentas, limites de CPU e
                            dispositivos mais simples. É nesses contextos que surgem travamentos, atrasos na interação e
                            animações instáveis que não aparecem em máquinas potentes. Testes assim garantem que a experiência
                            seja estável e consistente para todos os usuários, não apenas para quem tem ótimos aparelhos.
                        </p>

                        <p className="mt-2">
                            Outro ponto importante é monitorar continuamente. Mudanças pequenas no frontend ou backend podem
                            alterar métricas críticas ao longo do tempo. Soluções de monitoramento como Vercel Analytics,
                            Cloudflare Web Analytics, Datadog ou até scripts personalizados ajudam a acompanhar o desempenho
                            real de visitantes e detectar quedas antes que causem prejuízos.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Dica: criar uma checklist de performance por release mantém o time atento, evita regressões e
                            transforma a otimização em um hábito, não em um esforço isolado.
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
                            <li><a href="/pt/guias-tutoriais/seo" className="underline">Fundamentos de SEO</a></li>
                            <li><a href="/pt/guias-tutoriais/acessibilidade" className="underline">Acessibilidade Web</a></li>
                            <li><a href="/pt/guias-tutoriais/tailwind" className="underline">Padrões com Tailwind</a></li>
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
