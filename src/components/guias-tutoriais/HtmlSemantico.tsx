"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Landmark, Blocks, Accessibility, Shapes, Link as LinkIcon } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

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

            <InitialSetup
                sections={[
                    { id: "section-intro", label: "O que é HTML semântico?" },
                    { id: "section-estrutura", label: "Estrutura clara e organizada" },
                    { id: "section-hierarquia", label: "Hierarquia de títulos" },
                    { id: "section-acessibilidade", label: "Benefícios para Acessibilidade" },
                    { id: "section-seo", label: "Ganhos para SEO" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="html-semantico-sections"
            >
                {/* Conteúdo Principal */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    {/* Seção 1 */}
                    <section id="section-intro" aria-labelledby="intro" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="intro" className="text-2xl font-bold">
                            O que é HTML semântico?
                        </h2>

                        <p>
                            HTML semântico é a prática de construir páginas usando elementos que têm significado real.
                            Em vez de montar toda a estrutura com <code>&lt;div&gt;</code> — que não diz nada ao navegador
                            — você utiliza tags que descrevem a função daquele conteúdo, como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
                            <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code> e <code>&lt;footer&gt;</code>.
                            Cada uma delas transmite propósito e contexto, tanto para o navegador quanto para o usuário.
                        </p>

                        <p className="mt-3">
                            O objetivo do HTML semântico é deixar claro o que cada parte da página representa. Isso
                            melhora a leitura do código, facilita manutenção, ajuda ferramentas assistivas e orienta
                            buscadores sobre a estrutura lógica do documento. Em outras palavras: você não está apenas
                            construindo uma página, mas criando significado.
                        </p>

                        <p className="mt-3">
                            Ao usar a marcação correta, mecanismos de busca conseguem identificar melhor seções de
                            conteúdo, entender hierarquias e avaliar relevância. Isso resulta em SEO mais forte. Além
                            disso, leitores de tela passam a interpretar o documento com muito mais precisão, o que
                            aumenta acessibilidade e inclusão.
                        </p>

                        <p className="mt-3">
                            Outro benefício é a clareza para os próprios desenvolvedores: estruturas semânticas tornam o
                            código autodescritivo, reduzindo ambiguidades e eliminando a necessidade de comentários
                            explicando &quot;o que aquela div representa.&quot; Um projeto bem semântico envelhece melhor, escala
                            com mais segurança e facilita o trabalho de qualquer pessoa que assumir o código no futuro.
                        </p>

                        <p className="mt-3">
                            Em resumo, HTML semântico não é apenas uma boa prática — é um alicerce essencial para
                            acessibilidade, SEO, organização e qualidade profissional de qualquer aplicação web.
                        </p>

                        <p className="mt-4 text-sm text-black/70">
                            Se você está começando no universo do desenvolvimento web e quer aprender de forma prática como HTML,
                            CSS e JavaScript se conectam para criar interfaces modernas, existe um curso completo que serve como
                            ponto de partida ideal para dominar essas bases:
                            <a
                                href="https://go.hotmart.com/C103301757L?dp=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                Conheça o curso “Desenvolvimento Web Front-end: Domine as Bases da Web Interativa!”.
                            </a>
                        </p>
                    </section>

                    {/* Seção 2 */}
                    <section id="section-estrutura" aria-labelledby="estrutura" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="estrutura" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Estrutura clara e organizada
                        </h3>

                        <p>
                            Uma boa estrutura semântica cria um fluxo natural para quem navega e também para as ferramentas
                            que interpretam o conteúdo. Quando cada bloco da página tem um propósito definido, o código
                            fica mais legível, mais eficiente e muito mais inteligente para SEO e acessibilidade.
                        </p>

                        <p className="mt-2">
                            Usar HTML semântico não é apenas uma recomendação moderna — é uma forma de garantir que a página
                            comunique seu significado corretamente, mesmo sem estilos visuais. Assim, leitores de tela,
                            buscadores e outros sistemas conseguem entender as prioridades e relações entre os elementos.
                        </p>

                        <ul className="list-disc pl-5 space-y-1 mt-3">
                            <li>
                                Use <code>&lt;header&gt;</code> para introduzir uma página ou seção, trazendo títulos,
                                menus ou informações de identificação.
                            </li>
                            <li>
                                <code>&lt;nav&gt;</code> deve representar conjuntos de links que levam o usuário para outras
                                áreas importantes, como menus principais ou secundários.
                            </li>
                            <li>
                                <code>&lt;main&gt;</code> guarda o conteúdo central da página. Deve existir apenas um por página.
                            </li>
                            <li>
                                <code>&lt;section&gt;</code> ajuda a separar blocos temáticos, funcionando como capítulos dentro
                                do conteúdo.
                            </li>
                            <li>
                                <code>&lt;article&gt;</code> representa algo independente, como um post, notícia, tutorial ou qualquer
                                peça que possa existir fora da página.
                            </li>
                            <li>
                                <code>&lt;aside&gt;</code> é usado para informações complementares: links extras, chamadas, banners,
                                notas e conteúdos de apoio.
                            </li>
                            <li>
                                <code>&lt;footer&gt;</code> finaliza uma página ou seção oferecendo contexto — créditos, links legais,
                                informações adicionais, entre outros.
                            </li>
                        </ul>

                        <p className="mt-3">
                            Pense na estrutura semântica como uma forma de &quot;mapear&quot; sua página. Quando esse mapa está claro,
                            toda a experiência melhora: manutenção fica mais simples, leitores de tela ganham fluidez
                            e até mecanismos de busca passam a entender melhor o valor do conteúdo.
                        </p>

                        <figure className="mt-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/html-structure.png"
                                alt="Diagrama ilustrando estrutura semântica moderna em HTML5"
                                width={1024}
                                height={576}
                                className="w-full h-auto rounded-lg"
                            />

                            <figcaption className="text-sm text-gray-600 mt-2">
                                Exemplo visual de como o HTML semântico organiza e define as áreas principais de uma página moderna.
                            </figcaption>
                        </figure>

                        <p className="mt-4 text-sm text-black/70">
                            Se você está começando no front-end e quer uma base sólida sobre estrutura, organização e boas práticas,
                            existe um e-book direto ao ponto que ajuda a entender esses pilares de forma clara:
                            <a
                                href="https://go.hotmart.com/C103301650S?dp=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                Conheça o e-book “Decodificando o Front-end”.
                            </a>
                        </p>
                    </section>

                    {/* Seção 3 */}
                    <section id="section-hierarquia" aria-labelledby="hierarquia" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="hierarquia" className="text-xl font-semibold flex items-center gap-2">
                            <Shapes size={18} /> Hierarquia de títulos
                        </h3>

                        <p>
                            A hierarquia de títulos funciona como o &quot;esqueleto lógico&quot; da sua página. Ela mostra quais partes
                            são mais importantes e como os conteúdos se relacionam entre si. Quando essa estrutura é seguida
                            corretamente, leitores humanos compreendem melhor o fluxo da informação e mecanismos de busca
                            interpretam sua página com muito mais precisão.
                        </p>

                        <p className="mt-2">
                            Cada título, do <code>&lt;h1&gt;</code> ao <code>&lt;h6&gt;</code>, representa um nível de importância.
                            Eles não existem apenas para aumentar o tamanho do texto — eles definem uma hierarquia clara,
                            permitindo que tecnologias assistivas criem um &quot;índice virtual&quot; que usuários podem navegar.
                        </p>

                        <ol className="list-decimal pl-5 space-y-1 mt-3">
                            <li>
                                Use apenas um <code>&lt;h1&gt;</code> por página.
                                Ele representa o assunto principal do documento e deve funcionar como o título geral da página.
                            </li>
                            <li>
                                Organize o restante do conteúdo usando <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>,
                                <code>&lt;h4&gt;</code>…
                                Cada nível representa uma subdivisão lógica. O <code>h2</code> introduz grandes seções,
                                o <code>h3</code> detalha essas seções e assim por diante.
                            </li>
                            <li>
                                Evite pular níveis sem necessidade.
                                Por exemplo, não salte de <code>h2</code> para <code>h4</code> se um <code>h3</code> faz sentido
                                como intermediário. Esse salto quebra o fluxo e confunde leitores de tela.
                            </li>
                            <li>
                                Utilize títulos para organizar ideias, não para estilizar texto.
                                Se a intenção é apenas deixar algo maior ou mais chamativo, prefira classes CSS ou utilitários
                                do seu framework — títulos devem servir à lógica da estrutura, não à estética.
                            </li>
                            <li>
                                Mantenha uma relação clara entre títulos e conteúdo.
                                Cada seção deve estar &quot;debaixo&quot; do título que a representa, como se fosse um capítulo
                                e seus subcapítulos.
                            </li>
                        </ol>

                        <p className="mt-3">
                            Seguir corretamente essa hierarquia transforma a página em algo fácil de navegar — tanto para pessoas
                            quanto para algoritmos. Leitores de tela permitem que o usuário pule diretamente para títulos
                            específicos, e buscadores entendem quais partes do conteúdo têm mais peso dentro da estrutura geral.
                        </p>

                        <p className="mt-2">
                            No fim das contas, pensar na hierarquia de títulos é pensar na experiência completa: clareza,
                            acessibilidade, escaneabilidade e organização profissional do seu projeto.
                        </p>
                    </section>

                    {/* Seção 4 */}
                    <section id="section-acessibilidade" aria-labelledby="acessibilidade" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="acessibilidade" className="text-xl font-semibold flex items-center gap-2">
                            <Accessibility size={18} /> Benefícios para Acessibilidade
                        </h3>

                        <p>
                            Um HTML bem estruturado e semântico torna a web mais inclusiva para todos. Quando cada elemento
                            é usado de acordo com seu significado, leitores de tela conseguem interpretar a página com muito
                            mais precisão. Isso beneficia pessoas com deficiências visuais, cognitivas ou motoras, permitindo
                            uma navegação mais fluida, compreensível e previsível.
                        </p>

                        <p className="mt-2">
                            Além disso, elementos semânticos já carregam funções e comportamentos nativos que reduzem a
                            necessidade de hacks, atributos extras ou ARIA manual. Dessa forma, o código se mantém mais
                            limpo, mais fácil de manter e mais amigável para qualquer tecnologia assistiva.
                        </p>

                        <ul className="list-disc pl-5 space-y-1 mt-3">
                            <li>
                                <strong>Tag correta = significado claro.</strong><br />
                                Um <code>&lt;button&gt;</code> já informa ao leitor de tela que é um botão, um
                                <code>&lt;nav&gt;</code> já indica uma região de navegação e um <code>&lt;main&gt;</code>
                                representa imediatamente o conteúdo principal da página.
                            </li>

                            <li>
                                <strong>Menos necessidade de ARIA manual.</strong><br />
                                Como muitos elementos já trazem papéis (roles) nativos, o uso de ARIA se torna complementar
                                — apenas para casos específicos. Isso evita erros comuns como definir roles conflitantes,
                                desnecessários ou incoerentes.
                            </li>

                            <li>
                                <strong>Melhor navegação por teclado.</strong><br />
                                Com uma estrutura semântica clara, o usuário consegue navegar usando Tab, Shift+Tab e até
                                atalhos específicos de leitores de tela para saltar entre títulos, regiões e links.
                            </li>

                            <li>
                                <strong>Ordem de leitura mais lógica.</strong><br />
                                A estrutura correta garante que leitores de tela sigam um fluxo natural, evitando confusão,
                                repetições ou saltos estranhos no conteúdo.
                            </li>

                            <li>
                                <strong>Mais previsibilidade na interação.</strong><br />
                                Elementos semânticos têm comportamentos esperados — por exemplo, um botão pode ser acionado
                                via Enter/Espaço, enquanto um link leva a outra página. Isso cria uma experiência mais
                                consistente para todos os tipos de usuários.
                            </li>
                        </ul>

                        <p className="mt-3">
                            No final, utilizar HTML semântico significa construir interfaces mais humanas. A página se torna
                            mais clara, mais navegável e mais justa para qualquer pessoa — independentemente das ferramentas
                            que ela usa ou das limitações que possui.
                        </p>

                        <p className="mt-2">
                            Acessibilidade não é apenas um detalhe técnico: é um compromisso com inclusão,
                            respeito e qualidade no desenvolvimento.
                        </p>
                    </section>

                    {/* Seção 5 */}
                    <section id="section-seo" aria-labelledby="seo" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="seo" className="text-xl font-semibold flex items-center gap-2">
                            <LinkIcon size={18} /> Ganhos para SEO
                        </h3>

                        <p>
                            Tags semânticas são essenciais para que mecanismos de busca entendam com precisão a hierarquia
                            e a importância de cada parte da página. Quando um documento HTML segue uma estrutura lógica,
                            motores como Google, Bing e outros conseguem diferenciar com clareza o que é título,
                            subtítulo, conteúdo principal, navegação, rodapé e outras seções fundamentais.
                        </p>

                        <p className="mt-2">
                            Isso faz com que os algoritmos interpretem melhor o contexto do conteúdo, identifiquem
                            padrões de relevância e consigam relacionar sua página a buscas específicas com muito mais
                            confiança. Em outras palavras: quanto mais semântico e bem organizado, mais fácil é indicar
                            ao buscador exatamente sobre o que sua página fala.
                        </p>

                        <p className="mt-2">
                            Além disso, elementos semânticos como <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code> e <code>&lt;footer&gt;</code> ajudam a estruturar blocos de conteúdo que o Google pode
                            interpretar como entidades independentes. Isso abre portas para rich snippets, featured
                            snippets e até melhores interpretações em busca por voz.
                        </p>

                        <p className="mt-2">
                            O uso correto de heading tags (<code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>)
                            também contribui para que o motor de busca compreenda a prioridade de cada informação,
                            evitando ambiguidades e reforçando o tópico central da página.
                        </p>

                        <p className="mt-2 text-sm text-gray-700">
                            Quanto mais clara, coerente e lógica for a estrutura, mais forte seu potencial de ranqueamento.
                            Semântica não é apenas organização — é estratégia de SEO.
                        </p>

                        <p className="mt-4 text-sm text-black/70">
                            Se você ainda está dando os primeiros passos na criação de páginas bem estruturadas e quer
                            aprender como aplicar HTML, CSS e JavaScript para montar sites profissionais com atenção ao SEO,
                            existe um curso que aprofunda exatamente esses fundamentos. Ele mostra, na prática, como
                            organizar o código, estruturar o conteúdo e construir uma base sólida para projetos reais.
                            <a
                                href="https://go.hotmart.com/G103301873E"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                Veja mais detalhes aqui.
                            </a>
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
                                <Link href="/pt/guias-tutoriais/acessibilidade" className="underline">
                                    Acessibilidade Web
                                </Link>
                            </li>
                            <li>
                                <Link href="/pt/guias-tutoriais/seo" className="underline">
                                    SEO na Prática
                                </Link>
                            </li>
                            <li>
                                <Link href="/pt/guias-tutoriais/performance" className="underline">
                                    Performance Front-end
                                </Link>
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
