"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FolderTree, Layers, GitBranch, Component, Boxes, Workflow, LayoutTemplate, Grid, CheckCircle, Package } from "lucide-react";
import InitialSetup from "@/components/InitialSetup";

export default function NextjsPT() {
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

            <InitialSetup
                sections={[
                    { id: "estrutura-de-pastas-eficiente", label: "Estrutura de pastas eficiente" },
                    { id: "layouts-reutilizaveis", label: "Layouts reutilizáveis" },
                    { id: "componentizacao-inteligente", label: "Componentização inteligente" },
                    { id: "fluxo-de-desenvolvimento", label: "Fluxo de desenvolvimento (Git Flow)" },
                    { id: "beneficios-de-projeto-estruturado", label: "Benefícios de um projeto bem estruturado" },
                    { id: "padroes-de-componentizacao", label: "Padrões de Componentização" },
                    { id: "dependencias-essenciais", label: "Dependências essenciais" },
                ]}
            />

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
                        id="estrutura-de-pastas-eficiente"
                        aria-labelledby="estrutura-pastas"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h2 id="estrutura-pastas" className="text-2xl font-bold flex items-center gap-2">
                            <FolderTree size={20} /> Estrutura de pastas eficiente
                        </h2>

                        <p>
                            Uma aplicação Next.js se torna muito mais fácil de manter quando sua estrutura de pastas
                            é planejada com intenção. Uma organização clara reduz o acoplamento, melhora a legibilidade
                            e permite que novas funcionalidades sejam adicionadas sem gerar confusão ou retrabalho.
                        </p>

                        <p className="mt-3">
                            Quando cada diretório tem uma função objetiva, o time entende rapidamente onde colocar ou
                            buscar cada peça do projeto. Isso evita duplicações, melhora a comunicação entre
                            desenvolvedores e mantém o código escalável mesmo à medida que o sistema cresce.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>
                                <strong>app/</strong>: concentra rotas, layouts, páginas, segmentos e toda a
                                lógica derivada do App Router. É o coração da aplicação e define como a
                                navegação é organizada.
                            </li>

                            <li>
                                <strong>components/</strong>: guarda componentes reutilizáveis e independentes,
                                permitindo consistência visual e reduzindo duplicações ao longo do projeto.
                            </li>

                            <li>
                                <strong>lib/</strong>: contém funções utilitárias, validações, formatações,
                                módulos de regra de negócio e integrações. Tudo que representa lógica pura
                                e pode ser usado em qualquer lugar.
                            </li>

                            <li>
                                <strong>hooks/</strong>: responsável por hooks customizados que encapsulam
                                comportamentos reutilizáveis, abstraindo detalhes e tornando componentes menores
                                e mais legíveis.
                            </li>

                            <li>
                                <strong>styles/</strong>: concentra estilos globais, variáveis e resets. Mesmo
                                com Tailwind, esse diretório continua útil para regras amplas ou temas globais.
                            </li>

                            <li>
                                <strong>config/</strong>: ideal para centralizar configurações como
                                constantes, schemas, ambientes e integrações externas.
                            </li>

                            <li>
                                <strong>services/</strong>: onde ficam serviços como chamadas à API,
                                acessos a banco de dados (em ambientes server-side) ou lógica de comunicação externa.
                            </li>

                            <li>
                                <strong>types/</strong>: repositório para tipagens globais, interfaces e
                                contratos compartilhados. Mantém o TypeScript limpo e organizado.
                            </li>
                        </ul>

                        <p className="mt-4">
                            Ao estruturar seu projeto dessa forma, você garante que cada parte da aplicação tenha um
                            lugar definido, evitando pastas gigantescas ou confusão sobre responsabilidades. Isso
                            torna o desenvolvimento mais ágil e reduz o risco de decisões inconsistentes ao longo do tempo.
                        </p>

                        <figure className="mt-6 rounded-lg overflow-hidden">
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
                        id="layouts-reutilizaveis"
                        aria-labelledby="layouts"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="layouts" className="text-xl font-semibold flex items-center gap-2">
                            <Layers size={18} /> Layouts reutilizáveis
                        </h3>

                        <p>
                            O diretório <code>app/</code> introduz um dos recursos mais poderosos do Next.js:
                            a capacidade de definir <strong>layouts por rota</strong>. Essa abordagem torna a
                            arquitetura da aplicação muito mais modular, padronizada e fácil de expandir. Em vez de
                            replicar headers, sidebars, footers ou estruturas de navegação em cada página, esses
                            elementos passam a existir em um único ponto central, sendo automaticamente aplicados
                            a todas as rotas dependentes.
                        </p>

                        <p className="mt-3">
                            Além de reduzir duplicação de código, layouts garantem consistência visual,
                            simplificam a manutenção diária e melhoram a experiência do usuário — já que partes
                            fixas da interface permanecem estáveis durante a navegação. Com isso, sua aplicação se
                            torna mais organizada, previsível e alinhada às melhores práticas de projetos modernos.
                        </p>

                        <p className="mt-3">
                            Use layouts para estruturar grandes áreas do site, separar contextos visuais e criar
                            camadas independentes que podem incluir desde barras laterais e menus internos até
                            wrappers gerais, breadcrumbs ou comportamentos específicos daquela seção.
                        </p>

                        <ol className="list-decimal pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Crie um layout para cada área lógica do site.</strong> Seções como blog, painel administrativo ou áreas autenticadas podem possuir suas próprias estruturas visuais.
                            </li>

                            <li>
                                <strong>Evite duplicar estrutura visual.</strong> Sempre que perceber padrões repetidos em mais de uma página, transforme-os em um layout compartilhado.
                            </li>

                            <li>
                                <strong>Centralize wrappers e elementos fixos.</strong> Componentes como containers, barras superiores, rodapés e colunas estáticas devem estar no layout, deixando as páginas responsáveis apenas pelo conteúdo.
                            </li>

                            <li>
                                <strong>Utilize layouts aninhados quando necessário.</strong> Eles permitem construir seções complexas onde cada nível adiciona sua própria camada visual.
                            </li>

                            <li>
                                <strong>Padronize comportamentos comuns.</strong> Itens como metadados, contexto de tema, breadcrumbs e navegação interna podem viver no layout da seção.
                            </li>
                        </ol>
                    </section>

                    {/* Seção 3 */}
                    <section
                        id="componentizacao-inteligente"
                        aria-labelledby="componentizacao"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="componentizacao" className="text-xl font-semibold flex items-center gap-2">
                            <Component size={18} /> Componentização inteligente
                        </h3>

                        <p>
                            Componentes devem ser pequenos, objetivos e altamente reutilizáveis. Em Next.js, essa
                            filosofia se torna ainda mais poderosa graças ao uso de <strong>Server Components</strong>,
                            que permitem entregar páginas mais leves, rápidas e seguras. Ao delegar a maior parte do
                            processamento ao servidor, reduzimos a quantidade de JavaScript enviada ao cliente,
                            melhorando o desempenho e o carregamento inicial da aplicação.
                        </p>

                        <p className="mt-3">
                            A componentização inteligente também envolve separar responsabilidades de forma clara:
                            visual no lugar certo, lógica no lugar certo e interatividade somente onde for realmente
                            necessária. Essa divisão mantém o projeto limpo, previsível e mais fácil de evoluir,
                            especialmente conforme o número de componentes cresce.
                        </p>

                        <p className="mt-3">
                            Utilize componentes puros para estruturas visuais, componha interfaces com unidades pequenas
                            e independentes, e recorra a Client Components apenas quando houver interação direta com o
                            navegador — como eventos, animações controladas, estados locais ou acesso ao DOM.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Prefira Server Components.</strong> Eles reduzem o payload enviado ao cliente e melhoram o desempenho sem esforço adicional.
                            </li>

                            <li>
                                <strong>Use Client Components apenas quando necessário.</strong> Estados, formulários, eventos do usuário e manipulação direta da interface devem ser exceção,
                                não regra.
                            </li>

                            <li>
                                <strong>Separe claramente UI e lógica.</strong> Deixe a camada de apresentação focada apenas na interface, movendo cálculos, validações
                                e acessos a dados para funções isoladas ou componentes server.
                            </li>

                            <li>
                                <strong>Evite componentes gigantes.</strong> Sempre que algo começar a crescer demais, divida em partes menores e mais específicas.
                            </li>

                            <li>
                                <strong>Reutilize padrões visuais.</strong> Criar pequenos componentes como botões, cards, badges e wrappers ajuda a padronizar e manter consistência.
                            </li>
                        </ul>
                    </section>

                    {/* Seção 4 */}
                    <section
                        id="fluxo-de-desenvolvimento"
                        aria-labelledby="git-flow"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="git-flow" className="text-xl font-semibold flex items-center gap-2">
                            <GitBranch size={18} /> Fluxo de desenvolvimento (Git Flow)
                        </h3>

                        <p>
                            Projetos bem estruturados seguem um padrão consistente de branches para garantir
                            estabilidade, organização e segurança durante o desenvolvimento. O Git Flow é um dos
                            modelos mais utilizados justamente por oferecer um fluxo claro para criar novas
                            funcionalidades, corrigir bugs e preparar releases sem comprometer a versão que está em produção.
                        </p>

                        <p className="mt-3">
                            A ideia principal é separar ambientes e manter cada branch com um propósito único.
                            Assim, equipes conseguem trabalhar em paralelo, revisar código com mais facilidade e
                            evitar conflitos inesperados em momentos críticos. A seguir estão as branches mais comuns
                            dentro desse fluxo:
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>main</strong>:
                                Contém a versão estável e pronta para produção. Nada entra nela sem revisão e
                                sem testes adequados. É o &quot;ponto seguro&quot; do projeto.
                            </li>

                            <li>
                                <strong>dev</strong>:
                                É o ambiente de desenvolvimento, onde novos recursos são integrados antes de seguir
                                para testes mais aprofundados. Tudo o que está em progresso vive aqui.
                            </li>

                            <li>
                                <strong>feature/*</strong>:
                                Branches criadas para cada nova funcionalidade, melhoria ou experimento. Mantêm o
                                desenvolvimento isolado até estarem prontas para integração na <code>dev</code>.
                            </li>

                            <li>
                                <strong>hotfix/*</strong>:
                                Usadas para corrigir problemas urgentes diretamente na versão de produção. Após a
                                correção, ela é mesclada tanto em <code>main</code> quanto em <code>dev</code> para manter
                                tudo sincronizado.
                            </li>

                            <li>
                                <strong>release/*</strong>:
                                Criadas quando o projeto está prestes a receber uma nova atualização estável. Permitem
                                ajustes finais, revisões e preparação de documentação antes do merge na <code>main</code>.
                            </li>
                        </ul>

                        <p className="mt-4">
                            Trabalhar com esse fluxo evita conflitos complexos, melhora a comunicação entre times e
                            cria uma linha do tempo mais organizada e legível no repositório. É uma das práticas mais
                            eficazes para manter a qualidade do código mesmo quando muitas pessoas colaboram ao mesmo tempo.
                        </p>
                    </section>

                    {/* Seção 5 */}
                    <section
                        id="beneficios-de-projeto-estruturado"
                        aria-labelledby="beneficios"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3 id="beneficios" className="text-xl font-semibold flex items-center gap-2">
                            <Boxes size={18} /> Benefícios de um projeto bem estruturado
                        </h3>

                        <p>
                            Manter a estrutura do projeto organizada traz vantagens práticas e perceptíveis no dia a dia.
                            Quando cada parte do sistema está no lugar certo, o fluxo de trabalho fica mais eficiente,
                            o time colabora melhor e o código se torna muito mais fácil de evoluir ao longo do tempo.
                        </p>

                        <p className="mt-3">
                            Em aplicações Next.js, uma boa organização ajuda desde o carregamento das páginas até a
                            reutilização de componentes e a implementação de novas funcionalidades. Isso reduz retrabalho,
                            evita confusões e dá ao projeto uma base sólida para crescer.
                        </p>

                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            <li>
                                <strong>Manutenção mais fácil:</strong> Localizar arquivos e entender a função de cada parte se torna rápido, permitindo correções e melhorias sem complicações.
                            </li>

                            <li>
                                <strong>Componentes mais limpos:</strong> Com responsabilidades bem definidas, cada componente faz apenas o necessário, resultando
                                em código mais legível, reutilizável e simples de testar.
                            </li>

                            <li>
                                <strong>Layout consistente:</strong> Uma boa estrutura favorece padrões visuais e comportamentais, garantindo que a interface
                                tenha unidade e mantenha a mesma experiência em toda a aplicação.
                            </li>

                            <li>
                                <strong>Melhor escalabilidade:</strong> Projetos organizados crescem sem perder qualidade. É possível adicionar páginas, módulos
                                e funcionalidades sem gerar caos ou precisar refatorar tudo do zero.
                            </li>

                            <li>
                                <strong>Onboarding mais rápido:</strong> Novos desenvolvedores entendem a arquitetura sem esforço, reduzindo o tempo de adaptação
                                e aumentando a produtividade da equipe.
                            </li>

                            <li>
                                <strong>Menos bugs e retrabalho:</strong> A clareza estrutural diminui erros causados por arquivos mal posicionados, lógica duplicada
                                ou conflitos entre componentes.
                            </li>

                            <li>
                                <strong>Melhor performance e organização mental:</strong> Trabalhar em um ambiente limpo reduz a carga cognitiva, trazendo mais foco e decisões mais conscientes.
                            </li>
                        </ul>

                        <p className="mt-4">
                            No fim das contas, a estrutura é o alicerce do projeto. Quanto mais sólida ela for, mais confiança
                            você terá para evoluir, escalar e manter o código saudável mesmo em aplicações complexas.
                        </p>
                    </section>

                    {/* Seção 6 */}
                    <section
                        id="padroes-de-componentizacao"
                        aria-labelledby="padroes-componentizacao"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3
                            id="padroes-componentizacao"
                            className="text-xl font-semibold flex items-center gap-2"
                        >
                            <Layers size={18} /> Padrões de Componentização
                        </h3>

                        <p>
                            Uma interface profissional começa com componentes bem definidos e separados entre
                            estrutura (layout) e conteúdo. Isso garante organização, semântica correta e
                            escalabilidade. Abaixo você encontra três padrões essenciais usados em projetos
                            modernos.
                        </p>

                        {/* HeroSplit */}
                        <div className="mt-6 space-y-3">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <LayoutTemplate size={16} /> HeroSplit
                            </h4>

                            <p>
                                O bloco visual mais marcante da página. Ele apresenta o propósito da interface,
                                cria identidade e define o tom do site logo no topo.
                            </p>

                            <ul className="list-disc pl-5">
                                <li>Divide o conteúdo em imagem e texto.</li>
                                <li>Comunica o foco principal do site rapidamente.</li>
                                <li>Funciona como primeira impressão visual.</li>
                            </ul>

                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`export function HeroSplit() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-16">
      <div>
        <h1 className="text-4xl font-bold">Domine Next.js de forma simples</h1>
        <p className="mt-4 text-gray-600">
          Aprenda padrões modernos, organização de pastas e componentização profissional.
        </p>
      </div>

      <img
        src="/hero-image.png"
        alt="Ilustração do guia de Next.js"
        className="rounded-xl"
      />
    </section>
  );
}`}
                            </pre>
                        </div>

                        {/* CardLayout */}
                        <div className="mt-8 space-y-3">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <Grid size={16} /> CardLayout
                            </h4>

                            <p>
                                O layout responsável pela organização espacial dos cards. Define grid, colunas,
                                espaçamentos e responsividade. Ele é totalmente independente do conteúdo.
                            </p>

                            <ul className="list-disc pl-5">
                                <li>Distribui elementos visualmente.</li>
                                <li>Mantém consistência entre seções diferentes.</li>
                                <li>Pode ser reaproveitado em qualquer página.</li>
                            </ul>

                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`export function CardLayout({ children }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {children}
    </div>
  );
}`}
                            </pre>
                        </div>

                        {/* CardContent */}
                        <div className="mt-8 space-y-3">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <Component size={16} /> CardContent
                            </h4>

                            <p>
                                O conteúdo interno do card: ícones, títulos, descrições e links. É aqui que
                                você define a informação real, mantendo separado do layout externo.
                            </p>

                            <ul className="list-disc pl-5">
                                <li>Isola a informação do restante da interface.</li>
                                <li>Facilita a manutenção e troca de conteúdo.</li>
                                <li>Evita duplicação e deixa o código limpo.</li>
                            </ul>

                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`export function CardContent({ icon: Icon, title, description, href }) {
  return (
    <article className="p-5 rounded-xl border bg-white hover:shadow transition">
      <Icon className="size-6 text-blue-600" />

      <h3 className="font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>

      <a
        href={href}
        className="text-blue-600 text-sm font-medium mt-3 inline-block"
      >
        Ler mais →
      </a>
    </article>
  );
}`}
                            </pre>
                        </div>

                        {/* Por que isso é tão bom */}
                        <div className="mt-10">
                            <h4 className="text-lg font-medium flex items-center gap-2">
                                <CheckCircle size={16} /> Por que isso funciona tão bem?
                            </h4>

                            <p className="mt-2">
                                Separar layout e conteúdo traz vantagens imediatas em qualquer projeto:
                            </p>

                            <ul className="list-disc pl-5 mt-2">
                                <li>Uso correto do Next.js com componentização eficiente.</li>
                                <li>Reutilização extrema — menos código e mais organização.</li>
                                <li>Semântica limpa e acessível.</li>
                                <li>Responsividade garantida pelo layout.</li>
                                <li>Facilidade de manutenção e escalabilidade.</li>
                                <li>SEO fortalecido por estrutura clara.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Seção 7 */}
                    <section
                        id="dependencias-essenciais"
                        aria-labelledby="dependencias-next"
                        className="bg-white/60 p-6 rounded-2xl border"
                    >
                        <h3
                            id="dependencias-next"
                            className="text-xl font-semibold flex items-center gap-2"
                        >
                            <Package size={18} /> Dependências essenciais para projetos Next.js
                        </h3>

                        <p>
                            Antes de começar a desenvolver, é comum instalar algumas bibliotecas que
                            aceleram o fluxo de trabalho. A lista abaixo reúne dependências usadas com
                            frequência em projetos profissionais de Next.js.
                        </p>

                        <div className="mt-4 space-y-4">
                            <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                                {`npx create-next-app@latest .
npm install lucide-react
npm install react-icons
npm install react-hot-toast
npm install axios
npm install date-fns
npm install monitor
npm install prismjs
npm install --save-dev @types/prismjs
npm install framer-motion
npm install chart.js
npm install react-chartjs-2`}
                            </pre>

                            {/* Explicações */}
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li>
                                    <strong>create-next-app</strong>: inicializa um projeto Next.js configurado com TypeScript, ESLint e estrutura padrão.
                                </li>
                                <li>
                                    <strong>lucide-react</strong>: ícones modernos, leves e altamente customizáveis.
                                </li>
                                <li>
                                    <strong>react-icons</strong>: coleção gigantesca de bibliotecas de ícones (FontAwesome, Feather, etc.).
                                </li>
                                <li>
                                    <strong>react-hot-toast</strong>: sistema de notificações elegante e simples de usar.
                                </li>
                                <li>
                                    <strong>axios</strong>: cliente HTTP para requisições mais seguras e tipadas.
                                </li>
                                <li>
                                    <strong>date-fns</strong>: manipulação de datas de forma leve e modular.
                                </li>
                                <li>
                                    <strong>monitor</strong>: monitoramento e logs em tempo real (quando compatível).
                                </li>
                                <li>
                                    <strong>prismjs</strong>: destaque de código para páginas como blogs e documentações.
                                </li>
                                <li>
                                    <strong>@types/prismjs</strong>: tipagem para uso do PrismJS com TypeScript.
                                </li>
                                <li>
                                    <strong>framer-motion</strong>: animações fluidas e declarativas para React.
                                </li>
                                <li>
                                    <strong>chart.js</strong>: gráficos profissionais, responsivos e ricos.
                                </li>
                                <li>
                                    <strong>react-chartjs-2</strong>: integração direta entre React e Chart.js.
                                </li>
                            </ul>
                        </div>
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
