"use client";

import { motion } from "framer-motion";
import { Accessibility, Eye, Keyboard, Users } from "lucide-react";
import Image from "next/image";
import InitialSetup from "@/components/InitialSetup";
import Link from "next/link";

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

            <InitialSetup
                sections={[
                    { id: "acessibilidade-importa", label: "Por que acessibilidade importa" },
                    { id: "navegacao-por-teclado", label: "Navegação por Teclado" },
                    { id: "cores-contraste-e-legibilidade", label: "Cores, Contraste e Legibilidade" },
                    { id: "uso-correto-de-aria", label: "Uso correto de ARIA" },
                    { id: "testes-e-auditoria-continua", label: "Testes & Auditoria Contínua" },
                ]}
            />

            <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
                aria-labelledby="accessibility-sections"
            >
                {/* Main Content */}
                <main className="lg:col-span-2 space-y-8 prose prose-slate max-w-none">

                    <section id="acessibilidade-importa" aria-labelledby="importance" className="bg-white/60 p-6 rounded-2xl border">
                        <h2 id="importance" className="text-2xl font-bold">
                            Por que acessibilidade importa
                        </h2>

                        <p>
                            Acessibilidade é como abrir a porta da sua interface para todos. Assim como uma rampa não ajuda
                            apenas pessoas com cadeira de rodas, um site acessível beneficia qualquer usuário — seja alguém
                            com deficiência, alguém usando o celular com brilho reduzido no sol, ou até mesmo alguém com
                            internet lenta. Quando cada elemento pode ser entendido e utilizado sem esforço, a experiência
                            geral melhora drasticamente.
                        </p>

                        <p className="mt-2">
                            Criar interfaces acessíveis significa considerar leitura, navegação, contraste, estrutura e
                            clareza desde o início. Isso evita frustrações, amplia o público e torna o site mais acolhedor,
                            intuitivo e fácil de usar em diferentes contextos e dispositivos.
                        </p>

                        <p className="mt-2">
                            Além de promover inclusão, acessibilidade tem impacto direto em SEO e métricas de qualidade:
                            buscadores compreendem melhor páginas bem estruturadas, usuários permanecem mais tempo quando
                            conseguem interagir facilmente com o conteúdo, e a navegação fluida melhora até mesmo os
                            resultados de monetização com anúncios. Um site acessível reduz barreiras, diminui desistências
                            e aumenta conversões.
                        </p>

                        <p className="mt-2">
                            No fim das contas, acessibilidade não é só um requisito técnico — é uma forma de respeito com
                            o usuário e uma vantagem competitiva que transforma a experiência digital em algo realmente
                            universal.
                        </p>
                    </section>

                    {/* Seção 2 */}
                    <section id="navegacao-por-teclado" aria-labelledby="keyboard" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="keyboard" className="text-xl font-semibold flex items-center gap-2">
                            <Keyboard size={18} /> Navegação por Teclado
                        </h3>

                        <p>
                            A navegação por teclado é um dos pilares mais importantes da acessibilidade. Muitos usuários
                            com mobilidade reduzida, dificuldades motoras ou até mesmo profissionais avançados que preferem
                            agilidade dependem inteiramente da tecla <strong>Tab</strong> para percorrer links, botões,
                            formulários e outros elementos interativos. Se o site não respeita esse fluxo, ele simplesmente
                            se torna inutilizável para parte do público.
                        </p>

                        <p className="mt-2">
                            É essencial garantir que cada elemento seja alcançável, previsível e claramente destacado.
                            Um foco lógico e visível não só facilita a navegação de quem precisa, como também melhora
                            a experiência geral — especialmente em situações como telas pequenas, uso por teclado externo,
                            navegação assistiva e até acessos em ambientes com baixa responsividade.
                        </p>

                        <ul className="list-disc pl-5 mt-3 space-y-1">
                            <li>
                                <strong>Garanta ordem lógica no fluxo de foco.</strong><br />
                                O foco deve seguir a leitura natural da página, respeitando títulos, seções e elementos
                                interativos na ordem esperada. Mudanças aleatórias de foco confundem e atrapalham.
                            </li>

                            <li>
                                <strong>Sempre use <code>&lt;button&gt;</code> para botões — nunca <code>&lt;div&gt;</code>.</strong><br />
                                Elementos sem semântica não recebem foco corretamente e dificultam o uso de teclado e
                                tecnologias assistivas.
                            </li>

                            <li>
                                <strong>Links precisam sempre de <code>href</code>.</strong><br />
                                Sem ele, o link não entra no fluxo natural de navegação e não se comporta como um link real,
                                prejudicando leitores de tela e o SEO.
                            </li>

                            <li>
                                <strong>Evite esconder elementos focáveis com CSS.</strong><br />
                                Se algo está no fluxo de foco mas invisível ao usuário, a navegação quebra. Sempre remova
                                elementos interativos do foco quando estiverem ocultos.
                            </li>

                            <li>
                                <strong>Crie estilos de foco visíveis.</strong><br />
                                O foco não deve ser removido jamais. Destaques claros evitam perda de contexto e ajudam
                                todos os perfis de usuários.
                            </li>

                            <li>
                                <strong>Evite tabindex manual desnecessário.</strong><br />
                                A ordem natural é quase sempre a mais acessível. Valores maiores que 0
                                bagunçam o fluxo e criam navegação imprevisível.
                            </li>
                        </ul>

                        <p className="mt-3">
                            Quando o teclado funciona bem, o site se torna mais inclusivo, mais profissional e muito mais
                            fácil de navegar em diferentes cenários. Um bom fluxo de foco é sinal de qualidade — e buscadores
                            também reconhecem isso através de métricas de engajamento.
                        </p>

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

                        <p className="mt-4 text-sm text-black/70">
                            Se você está montando o seu setup e quer um teclado que realmente eleve sua experiência —
                            seja para programar, estudar ou criar — existe um modelo que combina conforto,
                            precisão e durabilidade. É a escolha ideal para quem passa horas no computador
                            e quer evitar dores, ganhar produtividade e ainda deixar a mesa mais bonita.
                            <a
                                href="https://amzn.to/4rGIe61"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 underline hover:text-black transition"
                            >
                                Ver detalhes do teclado.
                            </a>
                        </p>
                    </section>

                    {/* Seção 3 */}
                    <section id="cores-contraste-e-legibilidade" aria-labelledby="color" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="color" className="text-xl font-semibold flex items-center gap-2">
                            <Eye size={18} /> Cores, Contraste e Legibilidade
                        </h3>

                        <p>
                            A escolha de cores e o contraste adequado influenciam diretamente a capacidade de qualquer
                            pessoa compreender e interagir com uma interface. Cerca de 8% dos homens possuem algum grau
                            de daltonismo, e em ambientes de luz intensa ou brilho baixo, até mesmo usuários sem deficiência
                            visual enfrentam dificuldades. Por isso, garantir boa legibilidade não é apenas uma questão de
                            estética — é funcionalidade, acessibilidade e usabilidade real.
                        </p>

                        <p className="mt-2">
                            Quando o contraste é fraco, o usuário precisa fazer esforço para ler e distinguir elementos,
                            aumentando a fadiga visual e elevando as chances de erros e abandono da página. Por outro lado,
                            um bom uso de cores traz conforto, clareza e fluxo natural, além de melhorar métricas de
                            engajamento e até mesmo o SEO, já que buscadores conseguem interpretar melhor interfaces bem
                            estruturadas.
                        </p>

                        <ol className="list-decimal pl-5 mt-3 space-y-2">
                            <li>
                                <strong>Mantenha contraste mínimo de 4.5:1 entre texto e fundo.</strong><br />
                                Este é o padrão recomendado pelas WCAG para textos comuns. Para textos grandes, o mínimo é
                                3:1. Ferramentas como Contrast Checker e a extensão do Axe ajudam a testar combinações.
                            </li>

                            <li>
                                <strong>Evite usar somente cores para transmitir informação.</strong><br />
                                Pessoas com daltonismo podem não distinguir verde de vermelho, por exemplo. Use indicadores
                                adicionais como ícones, padrões, texto de apoio ou formatos diferentes.
                            </li>

                            <li>
                                <strong>Garanta boa hierarquia visual usando tamanho, peso e espaçamento.</strong><br />
                                A hierarquia organiza o olhar do usuário, reduz dúvidas e facilita a navegação. Cabeçalhos,
                                subtítulos, cards e botões devem ter proporções claras e consistentes.
                            </li>

                            <li>
                                <strong>Cuidado com texto sobre imagens.</strong><br />
                                Sempre use sobreposições (overlays), sombras sutis ou caixas semiopacas para manter a leitura
                                confortável mesmo em fundos complexos.
                            </li>

                            <li>
                                <strong>Use cores com propósito, não apenas por estética.</strong><br />
                                Cores transmitem emoções, direcionam atenção e ajudam a criar caminhos visuais eficientes.
                                Uma paleta bem pensada evita ruído visual e melhora a experiência global.
                            </li>
                        </ol>

                        <p className="mt-3 text-sm text-gray-700">
                            Dica: teste seu design em modo claro e escuro — diferenças de contraste ficam ainda mais evidentes
                            nesses cenários.
                        </p>
                    </section>

                    {/* Seção 4 */}
                    <section id="uso-correto-de-aria" aria-labelledby="aria" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="aria" className="text-xl font-semibold">Uso correto de ARIA</h3>

                        <p>
                            A especificação ARIA existe para preencher lacunas do HTML — não para substituí-lo. Muitos
                            desenvolvedores iniciantes tentam resolver problemas de acessibilidade adicionando <code>role</code> para tudo, mas isso costuma gerar mais confusão do que solução. A regra
                            fundamental é simples: se o HTML já oferece um elemento nativo que faz o trabalho, ele sempre
                            será mais acessível do que qualquer alternativa construída manualmente.
                        </p>

                        <p className="mt-2">
                            ARIA deve ser usada com intenção, especialmente em componentes interativos que não possuem
                            equivalentes diretos em HTML, como menus complexos, tabs, carrosséis e listas dinamicamente
                            atualizadas. O uso correto ajuda tecnologias assistivas, como leitores de tela, a interpretar
                            estados, hierarquias e relações entre elementos — garantindo uma navegação clara,
                            previsível e sem surpresas.
                        </p>

                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                <strong>Prefira elementos semânticos sempre que possível.</strong><br />
                                Tags como <code>&lt;button&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> e <code>&lt;ul&gt;</code> carregam significado próprio para leitores
                                de tela. Isso reduz a necessidade de ARIA e evita redundância.
                            </li>

                            <li>
                                <strong>Evite roles desnecessárias: <code>role=&quot;button&quot;</code> quase nunca deve ser usado.</strong><br />
                                Se algo deve agir como botão, use um <code>&lt;button&gt;</code> real. Criar um botão com <code>&lt;div&gt;</code> ou <code>&lt;span&gt;</code> força você a implementar acessibilidade
                                manualmente (foco via teclado, eventos Enter/Espaço, estados ARIA…), aumentando a chance de erros.
                            </li>

                            <li>
                                <strong>Use atributos como <code>aria-expanded</code>, <code>aria-controls</code> e <code>aria-hidden</code> em componentes colapsáveis.</strong><br />
                                Esses atributos informam ao leitor de tela se uma seção está aberta, fechada ou oculta.
                                Isso é essencial em accordions, dropdowns, menus móveis e tooltips.
                            </li>

                            <li>
                                <strong>Garanta que ARIA esteja sincronizada com o estado visual.</strong><br />
                                Se algo aparece visualmente aberto, mas o <code>aria-expanded</code> continua marcado como <code>false</code>, a experiência auditiva fica quebrada, causando confusão e navegação imprecisa.
                            </li>

                            <li>
                                <strong>Evite adicionar ARIA em excesso.</strong><br />
                                A recomendação oficial é: &quot;Não use ARIA se você não sabe exatamente por que está usando.&quot;
                                ARIA mal aplicada pode tornar a interface menos acessível do que não usar nada.
                            </li>
                        </ul>

                        <p className="mt-3 text-sm text-gray-700">
                            Dica: consulte sempre o padrão &quot;ARIA Authoring Practices&quot; — ele mostra modelos prontos de
                            comportamento esperado para cada tipo de componente.
                        </p>
                    </section>

                    {/* Seção 5 */}
                    <section id="testes-e-auditoria-continua" aria-labelledby="test" className="bg-white/60 p-6 rounded-2xl border">
                        <h3 id="test" className="text-xl font-semibold">Testes & Auditoria Contínua</h3>

                        <p>
                            Acessibilidade não é algo que se faz apenas uma vez — é um processo contínuo. Ferramentas como
                            Lighthouse, Axe DevTools e WAVE ajudam a identificar rapidamente problemas comuns, como baixo
                            contraste, elementos sem rótulos, hierarquia incorreta ou navegação inconsistente. Essas
                            auditorias automáticas não substituem testes humanos, mas são excelentes para manter um padrão
                            mínimo de qualidade durante o desenvolvimento.
                        </p>

                        <p className="mt-2">
                            Além das ferramentas, é essencial realizar testes reais: navegar com teclado usando apenas as
                            teclas <code>Tab</code>, <code>Shift + Tab</code>, <code>Enter</code> e <code>Space</code>,
                            simular leitores de tela, verificar comportamento em temas claro e escuro, e garantir que
                            elementos dinâmicos informem corretamente seus estados. Pequenas inconsistências que passam
                            despercebidas visualmente podem impactar profundamente usuários que dependem das tecnologias
                            assistivas.
                        </p>

                        <p className="mt-2">
                            Outra prática importante é incorporar testes de acessibilidade no fluxo de CI/CD. Linters,
                            verificações automatizadas e coverage de acessibilidade ajudam a evitar regressões,
                            garantindo que novas funcionalidades não introduzam problemas. Equipes que adotam auditoria
                            contínua reduzem drasticamente retrabalho e aumentam a confiabilidade da interface.
                        </p>

                        <ul className="list-disc pl-5 mt-3 space-y-2">
                            <li>
                                Valide headings, estrutura e semântica a cada deploy.
                            </li>
                            <li>
                                Teste comportamento de foco, ordem do tab e estados interativos.
                            </li>
                            <li>
                                Documente erros recorrentes para evitar que se repitam.
                            </li>
                            <li>
                                Sempre revise cores e contraste quando alterar estilos globais.
                            </li>
                        </ul>

                        <p className="mt-3 text-sm text-gray-700">
                            Dica: mantenha uma checklist de acessibilidade no processo de revisão de código. Ela ajuda a
                            reforçar boas práticas e padronizar a qualidade entre todos os membros da equipe.
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
                            <li><Link href="/pt/guias-tutoriais/performance" className="underline">Performance Front-end</Link></li>
                            <li><Link href="/pt/guias-tutoriais/seo" className="underline">Fundamentos de SEO</Link></li>
                            <li><Link href="/pt/guias-tutoriais/tailwind" className="underline">Padrões com Tailwind</Link></li>
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
