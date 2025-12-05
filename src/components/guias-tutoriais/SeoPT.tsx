"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, BarChart2, Target, Link as LinkIcon, TrendingUp } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";

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

            <InitialSetup
                sections={[
                    { id: "seo-na-pratica", label: "Como SEO funciona na prática" },
                    { id: "semantica-e-estrutura", label: "Semântica e Estrutura" },
                    { id: "intençao-de-busca", label: "Conteúdo com intenção de busca" },
                    { id: "otimizacao-tecnica", label: "Otimização Técnica" },
                    { id: "autoridade-e-link-building", label: "Autoridade & Link Building" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="seo-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Seção 1 */}
                    <section id="seo-na-pratica" aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            Como SEO funciona na prática
                        </h2>

                        <p>
                            SEO não é apenas sobre escolher boas palavras-chave — ele é, na verdade, um conjunto de fatores
                            que trabalham juntos para ajudar buscadores a entenderem a qualidade, o propósito e a
                            relevância da sua página. Elementos como experiência de usuário, semântica, acessibilidade,
                            velocidade, arquitetura do conteúdo e autoridade externa formam o núcleo do SEO moderno.
                            Quanto mais completa e clara for a experiência oferecida ao visitante, melhor o desempenho
                            nos resultados de busca.
                        </p>

                        <p className="mt-2">
                            Em termos práticos, buscadores avaliam como a página se comporta, como ela é estruturada,
                            como o conteúdo responde à intenção de quem pesquisa e se a navegação é intuitiva.
                            Eles analisam desde a organização dos títulos até a forma como links internos se conectam,
                            passando pela legibilidade, escaneabilidade e clareza das informações.
                        </p>

                        <p className="mt-2">
                            Além disso, o algoritmo tenta prever se o conteúdo realmente resolve o problema do usuário.
                            Para isso, ele observa sinais como engajamento, tempo de permanência, taxa de retorno,
                            facilidade de leitura, coerência temática e até a autoridade que outros sites demonstram
                            quando fazem referência à sua página.
                        </p>

                        <p className="mt-2">
                            Quando a estrutura é semântica, lógica e bem organizada, o buscador entende com muito mais
                            precisão o propósito de cada parte da página: o que é título, o que é seção, qual é o conteúdo
                            principal, quais são os pontos de apoio e como tudo se conecta dentro do tema central.
                            Isso facilita o ranqueamento e aumenta a relevância perante pesquisas relacionadas.
                        </p>

                        <p className="mt-2">
                            Em resumo: SEO funciona quando o site ajuda o usuário. Quanto mais claro, acessível,
                            organizado, rápido e útil for o conteúdo, mais os buscadores recompensam sua página.
                            SEO é, acima de tudo, alinhamento entre intenção e entrega.
                        </p>
                    </section>

                    {/* Seção 2 */}
                    <section id="semantica-e-estrutura" aria-labelledby="semantica" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="semantica" className="text-xl font-semibold flex items-center gap-2">
                            <Search size={18} /> Semântica e Estrutura
                        </h3>

                        <p>
                            A base de um HTML de qualidade está na sua estrutura. Uma página bem organizada não apenas
                            facilita o entendimento para buscadores, mas também melhora a leitura, acessibilidade e
                            experiência geral do usuário. Quando cada elemento está no lugar correto e usado com o
                            propósito certo, todo o ecossistema da página se torna mais previsível, funcional e claro.
                        </p>

                        <p className="mt-2">
                            A semântica cria uma camada de significado que motores de busca conseguem interpretar para
                            entender o contexto, a importância e a relação entre as partes do conteúdo. É como fornecer
                            um mapa mental do que é crucial, complementar, navegável ou informativo — e isso se traduz
                            diretamente em melhor desempenho de SEO, maior escaneabilidade e maior inclusão.
                        </p>

                        <ul className="list-disc pl-5 space-y-1 mt-3">
                            <li>
                                <strong>Use apenas um <code>&lt;h1&gt;</code> por página.</strong><br />
                                Ele representa o tema principal e serve como ponto de referência para buscadores e leitores
                                de tela. Múltiplos <code>h1</code> podem prejudicar a hierarquia e confundir o algoritmo.
                            </li>

                            <li>
                                <strong>Mantenha uma hierarquia clara de títulos (<code>h2</code>, <code>h3</code>, etc.).</strong><br />
                                Isso cria uma estrutura lógica de seções e subseções, permitindo que buscadores entendam
                                a ordem de importância e o fluxo narrativo do conteúdo.
                            </li>

                            <li>
                                <strong>Use elementos semânticos adequados.</strong><br />
                                Tags como <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code> e <code>&lt;footer&gt;</code> ajudam a organizar blocos de conteúdo e tornam a experiência mais clara para qualquer
                                tecnologia assistiva — além de melhorar a compreensão do algoritmo.
                            </li>

                            <li>
                                <strong>Evite blocos enormes de texto.</strong><br />
                                Parágrafos longos demais prejudicam a leitura e dificultam a escaneabilidade. Divida o
                                conteúdo em partes menores, objetivas e visualmente leves.
                            </li>

                            <li>
                                <strong>Dê contexto com descrições, títulos e agrupamentos.</strong><br />
                                Bons nomes e boas divisões facilitam o entendimento tanto para humanos quanto para
                                buscadores, reforçando a intenção de cada bloco.
                            </li>

                            <li>
                                <strong>Mantenha consistência na estrutura da página.</strong><br />
                                Repetir padrões de cabeçalhos, seções e ordem de informações em páginas diferentes
                                melhora a previsibilidade e cria uma experiência mais coesa.
                            </li>
                        </ul>

                        <p className="mt-3">
                            Quando o HTML é semântico, a navegação se torna mais natural, a leitura mais fluida e o
                            buscador ganha uma visão mais clara da arquitetura do conteúdo. Isso fortalece o ranqueamento
                            e melhora significativamente a acessibilidade.
                        </p>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Exemplo de estrutura semântica bem organizada para SEO"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Uma boa estrutura semântica permite que buscadores e usuários naveguem com mais facilidade,
                                interpretando cada parte da página com clareza.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Seção 3 */}
                    <section id="intençao-de-busca" aria-labelledby="conteudo" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="conteudo" className="text-xl font-semibold flex items-center gap-2">
                            <Target size={18} /> Conteúdo com intenção de busca
                        </h3>

                        <p>
                            Toda busca nasce de uma necessidade: alguém quer entender algo, resolver um problema,
                            comparar opções, comprar um produto ou simplesmente confirmar uma informação. Quando seu
                            conteúdo corresponde exatamente ao que a pessoa espera — e vai além do básico — ele se
                            torna extremamente valioso. Isso aumenta o tempo de permanência, reduz a taxa de rejeição e
                            envia ao buscador sinais positivos de que sua página realmente cumpre o que promete.
                        </p>

                        <p className="mt-2">
                            Construir conteúdo com intenção de busca não é apenas responder perguntas; é antecipar o que
                            o usuário quer sentir, saber, validar ou decidir. Uma página que entrega clareza, organização
                            e profundidade gera confiança instantânea e é recompensada pelos algoritmos que priorizam
                            relevância real.
                        </p>

                        <ol className="list-decimal pl-5 space-y-2 mt-3">
                            <li>
                                <strong>Identifique perguntas reais que o usuário faz.</strong><br />
                                Pesquise termos relacionados, autocomplete do Google, dúvidas comuns em fóruns,
                                comentários de vídeos e postagens em redes sociais. Quanto mais você entender a
                                linguagem do público, mais fácil será criar conteúdo que conversa diretamente com
                                ele — no tom certo e na profundidade certa.
                            </li>

                            <li>
                                <strong>Entregue respostas claras logo no início.</strong><br />
                                As primeiras linhas devem mostrar ao usuário que ele está no lugar certo. Resuma a
                                resposta principal rapidamente, sem enrolar, e depois aprofunde. Isso melhora o
                                engajamento e aumenta as chances de conquistar rich snippets, como o famoso
                                "featured snippet" do Google.
                            </li>

                            <li>
                                <strong>Aprofunde com exemplos, comparações, listas e guias práticos.</strong><br />
                                Depois de responder a pergunta central, expanda com detalhes úteis: passos,
                                demonstrações, analogias, casos reais, alternativas e boas práticas. Conteúdo rico
                                reforça autoridade, aumenta a compreensão e mantém o visitante por mais tempo na página —
                                outro sinal positivo para o algoritmo.
                            </li>
                        </ol>

                        <p className="mt-3">
                            Quando você respeita a intenção do usuário, cria clareza e entrega valor real, seu conteúdo
                            se torna naturalmente mais competitivo e tende a subir no ranking mesmo em nichos mais
                            disputados. Essa é uma das bases mais sólidas de SEO moderno.
                        </p>
                    </section>

                    {/* Seção 4 */}
                    <section id="otimizacao-tecnica" aria-labelledby="tecnico" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="tecnico" className="text-xl font-semibold flex items-center gap-2">
                            <BarChart2 size={18} /> Otimização Técnica
                        </h3>

                        <p>
                            A otimização técnica é o alicerce que sustenta todo o restante da estratégia de SEO. Mesmo
                            com um conteúdo excelente e altamente relevante, problemas técnicos podem comprometer a
                            experiência do usuário, prejudicar a leitura do buscador e, como consequência, derrubar o
                            ranqueamento. É a parte invisível do SEO — mas absolutamente essencial.
                        </p>

                        <p className="mt-2">
                            Quando o site é rápido, estável, bem estruturado e devidamente configurado, ele cria um
                            ambiente ideal para que tanto pessoas quanto algoritmos entendam, naveguem e valorizem o
                            conteúdo. Sites lentos, pesados ou desorganizados sofrem penalizações naturais, já que
                            pioram a usabilidade, aumentam o tempo de carregamento e geram frustração.
                        </p>

                        <ul className="list-disc pl-5 space-y-2 mt-3">
                            <li>
                                <strong>Use metadata corretamente (title, description, canonical e OG tags).</strong><br />
                                Tags bem configuradas ajudam buscadores a interpretar o contexto da página, evitam
                                conteúdo duplicado, melhoram o compartilhamento nas redes sociais e aumentam o
                                CTR (Click-Through Rate) nos resultados de busca. São pequenos detalhes que fazem
                                grande diferença.
                            </li>

                            <li>
                                <strong>Otimize imagens com <code>next/image</code>.</strong><br />
                                O componente nativo do Next.js aplica compressão, lazy loading, formatos modernos como
                                WebP e adequação automática de tamanho. Isso reduz drasticamente o peso total da página
                                e melhora o LCP (Largest Contentful Paint), uma das principais métricas de Core Web Vitals.
                            </li>

                            <li>
                                <strong>Reduza CSS e JS desnecessários.</strong><br />
                                Código morto, bibliotecas pesadas, estilos não utilizados e scripts redundantes
                                aumentam o tempo de carregamento e pioram o desempenho. Utilize tree-shaking,
                                carregamento dinâmico, limpeza de estilos e leveza nas dependências.
                            </li>

                            <li>
                                <strong>Evite CLS e layout shift.</strong><br />
                                Mudanças de layout inesperadas irritam o usuário e prejudicam o CLS (Cumulative Layout Shift).
                                Sempre defina largura e altura de imagens, reserve espaço para anúncios e carregue fontes
                                de maneira otimizada para evitar saltos visuais desagradáveis.
                            </li>

                            <li>
                                <strong>Implemente cache e otimizações de servidor.</strong><br />
                                CDN, cache de página, compressão GZIP/Brotli e otimização de headers ajudam a entregar
                                conteúdo rapidamente e reduzem a carga do servidor. Isso melhora SEO e a performance geral.
                            </li>

                            <li>
                                <strong>Garanta um HTML limpo e acessível.</strong><br />
                                Acessibilidade e SEO caminham juntos. Um HTML organizado, semanticamente correto e fácil
                                de navegar é interpretado com mais clareza tanto por buscadores quanto por tecnologias
                                assistivas.
                            </li>
                        </ul>

                        <p className="mt-3">
                            Quando o trabalho técnico é bem executado, o site ganha velocidade, estabilidade e clareza.
                            Isso cria a base perfeita para que o conteúdo brilhe e para que os buscadores reconheçam a
                            página como uma experiência confiável, eficiente e digna das melhores posições no ranking.
                        </p>
                    </section>

                    {/* Seção 5 */}
                    <section id="autoridade-e-link-building" aria-labelledby="links" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="links" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> Autoridade & Link Building
                        </h3>

                        <p>
                            Links são como recomendações públicas: quando outros sites apontam para o seu,
                            eles estão dizendo aos buscadores que seu conteúdo é confiável, útil e merece
                            destaque. Quanto mais esses “votos” vierem de domínios fortes, relevantes e
                            bem posicionados, maior será sua autoridade global.
                        </p>

                        <p className="mt-2">
                            Construir autoridade não acontece da noite para o dia. Envolve parcerias,
                            distribuição inteligente de conteúdo, presença em sites do seu nicho e
                            estratégias contínuas para ser citado de forma natural — sempre evitando
                            práticas artificiais que podem gerar penalidades.
                        </p>

                        <ul className="list-disc pl-5 mt-3">
                            <li>Busque links em sites com temática semelhante ao seu (relevância é tudo).</li>
                            <li>Crie conteúdos que se tornam referência, aumentando chances de links espontâneos.</li>
                            <li>Use guest posts de forma estratégica e sem exageros.</li>
                            <li>Evite trocar links em excesso — buscadores detectam padrões artificiais.</li>
                            <li>Acompanhe seu perfil de backlinks usando ferramentas como Search Console e Ahrefs.</li>
                        </ul>

                        <p className="mt-2 text-sm text-gray-700">
                            Dica: uma boa malha de links internos fortalece páginas importantes,
                            distribui autoridade pelo site e melhora a experiência do usuário.
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
