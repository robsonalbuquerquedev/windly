"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Palette, Layers, Zap, Boxes, Code, } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

export default function TailwindPT() {
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

            <InitialSetup
                sections={[
                    { id: "classes-utilitarias", label: "Classes utilitárias na prática" },
                    { id: "section-design-system", label: "Construindo um Design System com Tailwind" },
                    { id: "componentização-com-eficiencia", label: "Componentização com eficiência" },
                    { id: "section-vantagens", label: "Por que usar Tailwind?" },
                    { id: "section-beneficios", label: "Benefícios de um projeto com Tailwind bem aplicado" },
                ]}
            />

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
                        id="classes-utilitarias"
                        aria-labelledby="utilitarios"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="utilitarios" className="text-2xl font-bold flex items-center gap-2">
                            <Code size={20} /> Classes utilitárias na prática
                        </h2>

                        <p>
                            O TailwindCSS segue uma regra simples e poderosa: cada classe utilitária representa uma única
                            responsabilidade, permitindo que você construa o estilo diretamente no HTML ou JSX. Essa filosofia
                            reduz a necessidade de criar folhas de estilo separadas e torna o processo de desenvolvimento mais
                            rápido e intuitivo.
                        </p>

                        <p className="mt-3">
                            Em vez de alternar entre arquivos, componentes e estilos, você mantém tudo em um único fluxo.
                            Isso não só agiliza a implementação de páginas e interfaces, como também garante consistência entre
                            diferentes partes do projeto. O resultado é um desenvolvimento mais fluido e previsível, especialmente
                            em times maiores ou projetos que crescem rapidamente.
                        </p>

                        <p className="mt-3">
                            Além disso, por trabalhar com um conjunto extenso de utilitários pré-definidos, o Tailwind evita
                            conflitos de nomenclatura, reduz estilos repetidos e facilita ajustes finos sem esforço. As
                            personalizações também são simples: basta configurar no <code>tailwind.config.js</code> para criar
                            temas, cores e espaçamentos próprios.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Menos arquivos CSS para gerenciar:</strong> A maior parte do estilo é aplicada diretamente nos componentes, reduzindo a necessidade de folhas
                                auxiliares e facilitando a manutenção.
                            </li>

                            <li>
                                <strong>Estilos previsíveis e consistentes:</strong> Como as classes utilitárias seguem padrões claros, o comportamento visual da interface se mantém
                                uniforme em toda a aplicação.
                            </li>

                            <li>
                                <strong>Criação rápida de layouts e UI:</strong> A composição direta dos estilos acelera protótipos, interfaces complexas e ajustes de design
                                no dia a dia.
                            </li>

                            <li>
                                <strong>Redução de CSS duplicado:</strong> Como as classes são reutilizáveis, você evita múltiplas definições de estilos semelhantes em
                                vários arquivos.
                            </li>

                            <li>
                                <strong>Melhor integração com design systems:</strong> Tailwind se adapta facilmente a sistemas de design, permitindo criar componentes totalmente
                                padronizados com pouco esforço.
                            </li>

                            <li>
                                <strong>Produtividade no desenvolvimento:</strong> Sem precisar alternar contextos, você foca diretamente na interface e entrega resultados mais
                                rapidamente.
                            </li>
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
                                Classes utilitárias simplificam o desenvolvimento, reduzem retrabalho e trazem velocidade ao projeto.
                            </figcaption>
                        </figure>
                    </section>

                    {/* Seção 2 */}
                    <section
                        id="section-design-system"
                        aria-labelledby="design-system"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="design-system" className="text-xl font-semibold flex items-center gap-2">
                            <Palette size={18} /> Construindo um Design System com Tailwind
                        </h3>

                        <p>
                            Criar um Design System sólido é um dos maiores investimentos que você pode fazer para garantir
                            consistência, escalabilidade e velocidade no desenvolvimento. Com o TailwindCSS, esse processo
                            se torna muito mais simples, pois a própria ferramenta já fornece uma base de tokens altamente
                            estruturada: cores, espaçamentos, tipografia, sombras, bordas e até animações podem ser
                            padronizadas de forma centralizada.
                        </p>

                        <p className="mt-3">
                            Em vez de reinventar estilos para cada componente, você cria um conjunto de regras que toda a
                            interface irá seguir. Isso garante que botões, cards, inputs, modais e qualquer outro elemento
                            compartilhem o mesmo visual, comportamento e sensação, mantendo o projeto coerente — mesmo quando
                            várias pessoas estão colaborando.
                        </p>

                        <p className="mt-3">
                            O segredo está em transformar o <code>tailwind.config.js</code> na fonte da verdade do projeto.
                            É lá onde você organiza cores principais, secundárias e de suporte; define ritmos de espaçamento;
                            cria tamanhos de fonte elegantes; e ajusta sombras e bordas para formar uma identidade visual
                            única e profissional.
                        </p>

                        <ol className="list-decimal pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Defina cores no <code>tailwind.config.js</code>:</strong> Centralize sua paleta criando tokens como <code>primary</code>, <code>secondary</code>,
                                <code>accent</code> e <code>neutral</code>. Isso facilita ajustes futuros e mantém todo o
                                sistema alinhado.
                            </li>

                            <li>
                                <strong>Padronize spacing, radius e tipografia:</strong> Crie um ritmo visual consistente definindo espaçamentos proporcionais, bordas equilibradas
                                (como <code>rounded-md</code>, <code>rounded-xl</code>) e uma hierarquia tipográfica clara
                                para títulos, subtítulos, textos e legendas.
                            </li>

                            <li>
                                <strong>Use componentes com classes reutilizáveis:</strong> Botões, inputs, badges e cards podem seguir padrões fixos. Ao criar componentes com
                                utilitários bem definidos, você evita duplicações e mantém o estilo do projeto limpo e
                                previsível.
                            </li>

                            <li>
                                <strong>Documente seu Design System:</strong> Mesmo algo simples — como um arquivo de referência ou uma página interna — ajuda o time
                                a seguir as mesmas diretrizes e evita inconsistências visuais.
                            </li>

                            <li>
                                <strong>Crie variantes visuais:</strong> Estados como <code>hover</code>, <code>active</code>, <code>focus</code>, <code>disabled</code>
                                e temas escuros podem ser padronizados para manter uniformidade entre diferentes atmosferas
                                da interface.
                            </li>
                        </ol>

                        <p className="mt-4">
                            Quando o Design System está bem estruturado, o desenvolvimento se torna mais rápido, o código fica
                            mais limpo e a identidade visual da aplicação permanece profissional independente do tamanho do
                            projeto ou do número de pessoas trabalhando nele.
                        </p>
                    </section>

                    {/* Seção 3 */}
                    <section
                        id="componentização-com-eficiencia"
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
                            Componentizar de forma inteligente é o que transforma uma interface comum em uma base sólida,
                            previsível e fácil de expandir. Quando você combina esse conceito com o poder das classes
                            utilitárias do Tailwind, cada componente se torna mais claro, direto e com responsabilidades
                            bem delimitadas — exatamente o que um projeto moderno precisa para crescer sem perder qualidade.
                        </p>

                        <p className="mt-3">
                            Separar estrutura, comportamento e estilo ajuda a reduzir acoplamento e evita a conhecida
                            &quot;bagunça de estilos&quot; que cresce junto com o projeto. Em vez disso, cada parte da interface
                            passa a seguir um padrão de construção que facilita manutenção, testes, ajustes de layout e
                            até mesmo reescritas futuras.
                        </p>

                        <p className="mt-3">
                            Com Tailwind, uma abordagem comum é deixar o estilo o mais explícito possível dentro do próprio
                            JSX, enquanto a lógica fica isolada no componente. Isso cria transparência visual: basta olhar
                            o componente e imediatamente entender como ele se comporta e como deve ser exibido.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Componha classes com lógica minimalista:</strong> Mantenha a lógica simples e objetiva. Deixe o componente fazer apenas o necessário, enquanto
                                o Tailwind cuida da aparência. Essa separação aumenta clareza e evita responsabilidades
                                duplicadas.
                            </li>

                            <li>
                                <strong>Crie padrões visuais reaproveitáveis:</strong> Botões, alerts, cards, inputs e navegação podem seguir estruturas e estilos consistentes.
                                Isso aumenta velocidade de criação e reduz inconsistências.
                            </li>

                            <li>
                                <strong>Mantenha consistência entre componentes:</strong> Ao repetir padrões de layout, cores e espaçamento, a experiência do usuário se mantém estável
                                e o código fica mais fácil de entender por toda a equipe.
                            </li>

                            <li>
                                <strong>Use variantes inteligentes:</strong> Tailwind facilita a criação de estados como <code>hover</code>, <code>active</code>,
                                <code>focus</code> e <code>disabled</code> diretamente na marcação, evitando CSS extra
                                e mantendo o estilo centralizado no próprio componente.
                            </li>

                            <li>
                                <strong>Componentes menores, projetos maiores:</strong> Componentes pequenos e bem definidos são mais fáceis de testar, substituir, versionar e
                                evoluir. Esse é o caminho para um design escalável.
                            </li>
                        </ul>

                        <p className="mt-4">
                            Quando a componentização é feita com eficiência, o projeto se torna modular, intuitivo e muito
                            mais fácil de evoluir. Cada componente vira uma peça independente, reutilizável e pronta para
                            ser adaptada conforme a interface cresce — sem dores de cabeça no futuro.
                        </p>
                    </section>

                    {/* Seção 4 */}
                    <section
                        id="section-vantagens"
                        aria-labelledby="vantagens"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="vantagens" className="text-xl font-semibold flex items-center gap-2">
                            <Zap size={18} /> Por que usar Tailwind?
                        </h3>

                        <p>
                            Tailwind não é apenas um conjunto de classes utilitárias — ele representa uma forma moderna
                            de pensar o design e a construção de interfaces. Em vez de criar CSS do zero para cada
                            componente, você compõe estilos diretamente na marcação, o que agiliza o fluxo, reduz
                            repetições e torna o código mais transparente.
                        </p>

                        <p className="mt-3">
                            A grande vantagem está na previsibilidade: cada classe faz exatamente uma coisa, permitindo
                            que qualquer desenvolvedor entenda rapidamente como um layout foi montado. Isso elimina a
                            necessidade de navegar por centenas de arquivos CSS, facilita manutenção e acelera entregas
                            — especialmente em equipes maiores.
                        </p>

                        <p className="mt-3">
                            Além disso, Tailwind cria uma base uniforme para cores, espaçamentos, tipografia e estados
                            visuais. Dessa forma, o projeto se mantém consistente, independente do tamanho, da complexidade
                            ou da quantidade de colaboradores envolvidos.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Produtividade massiva:</strong> Criar layouts complexos se torna rápido e direto, já que tudo é baseado em combinações
                                simples de classes utilitárias.
                            </li>

                            <li>
                                <strong>Fim dos estilos duplicados:</strong> Como as classes já seguem padrões globais, você evita recriar regras CSS desnecessárias
                                e mantém uma base limpa.
                            </li>

                            <li>
                                <strong>Padronização visual garantida:</strong> Todo o projeto segue um mesmo conjunto de regras, criando uma identidade visual sólida,
                                profissional e fácil de manter.
                            </li>

                            <li>
                                <strong>Integração perfeita com frameworks modernos:</strong> Tailwind funciona de forma impecável com React, Next.js, Vue e outros frameworks,
                                proporcionando uma experiência fluida no desenvolvimento de componentes.
                            </li>

                            <li>
                                <strong>Extremamente personalizável:</strong> Através do <code>tailwind.config.js</code>, você ajusta cores, espaçamentos,
                                tipografia e até animações para moldar o design ao estilo exato do seu projeto.
                            </li>

                            <li>
                                <strong>Ótimo para equipes:</strong> Como o estilo é padronizado e explícito, colaborar fica mais simples e menos propenso
                                a erros ou divergências visuais.
                            </li>
                        </ul>

                        <p className="mt-4">
                            Usar Tailwind significa escrever menos CSS, ganhar mais velocidade e manter seu design
                            sempre limpo e consistente. É uma ferramenta que evolui junto com o projeto e acompanha
                            facilmente qualquer escala de crescimento.
                        </p>
                    </section>

                    {/* Seção 5 */}
                    <section
                        id="section-beneficios"
                        aria-labelledby="beneficios"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="beneficios" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefícios de um projeto com Tailwind bem aplicado
                        </h3>

                        <p>
                            Quando o Tailwind é utilizado de forma estratégica, seu projeto ganha em clareza,
                            velocidade e organização. A combinação de utilitários bem planejados com uma
                            arquitetura consistente transforma o código em algo mais previsível, enxuto
                            e fácil de evoluir.
                        </p>

                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>
                                <strong>Código mais limpo</strong>, sem regras espalhadas ou CSS acumulando
                                complexidade ao longo do tempo.
                            </li>
                            <li>
                                <strong>UI extremamente consistente</strong>, já que todos os padrões visuais
                                passam a seguir a configuração central e os mesmos tokens.
                            </li>
                            <li>
                                <strong>Entrega muito mais rápida</strong>, reduzindo idas e vindas ao CSS e
                                eliminando a criação desnecessária de classes repetidas.
                            </li>
                            <li>
                                <strong>Componentes realmente reutilizáveis</strong>, pois a lógica e o estilo
                                ficam desacoplados, permitindo que o mesmo bloco visual seja aplicado em qualquer
                                parte do projeto.
                            </li>
                            <li>
                                Melhor <strong>legibilidade em times</strong>, facilitando a manutenção e o
                                entendimento do que cada parte da interface representa.
                            </li>
                            <li>
                                Redução drástica de <strong>estilos mortos ou não utilizados</strong>, graças ao
                                purge integrado e à modularidade natural do Tailwind.
                            </li>
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
                                <Link href="/pt/guias-tutoriais/nextjs" className="underline">
                                    Boas práticas em Next.js
                                </Link>
                            </li>
                            <li>
                                <Link href="/pt/guias-tutoriais/html-semantico" className="underline">
                                    HTML Semântico
                                </Link>
                            </li>
                            <li>
                                <Link href="/pt/guias-tutoriais/seo" className="underline">
                                    SEO na Prática
                                </Link>
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
