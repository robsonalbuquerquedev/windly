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
                            Next.js funciona muito bem quando sua estrutura é organizada com propósito.
                            Pastas bem definidas criam clareza e reduzem o acoplamento do projeto.
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>app/</strong>: rotas, layouts e páginas.</li>
                            <li><strong>components/</strong>: componentes compartilhados.</li>
                            <li><strong>lib/</strong>: funções utilitárias e módulos de negócio.</li>
                            <li><strong>hooks/</strong>: hooks customizados.</li>
                            <li><strong>styles/</strong>: estilos globais.</li>
                        </ul>

                        <figure className="mt-4 rounded-lg overflow-hidden">
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
                            A pasta <code>app/</code> permite criar layouts por rota, tornando a interface
                            muito mais modular. Componentes como headers, sidebars e footers podem ser
                            declarados uma única vez.
                        </p>

                        <ol className="list-decimal pl-5">
                            <li>Crie um layout por área do site.</li>
                            <li>Evite duplicar estrutura visual.</li>
                            <li>Centralize wrappers e elementos fixos.</li>
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
                            Componentes devem ser pequenos, claros e reutilizáveis. No Next.js,
                            priorize componentes server sempre que possível — eles são mais leves e
                            reduzem JavaScript no cliente.
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Prefira Server Components.</li>
                            <li>Use Client Components apenas quando necessário.</li>
                            <li>Separação clara entre UI e lógica.</li>
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
                            Projetos estruturados seguem um padrão de branches para manter estabilidade:
                        </p>

                        <ul className="list-disc pl-5">
                            <li><strong>main</strong>: versão estável.</li>
                            <li><strong>dev</strong>: ambiente de desenvolvimento.</li>
                            <li><strong>feature/*</strong>: novas funcionalidades.</li>
                        </ul>
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

                        <p>Organizar seu projeto Next.js traz ganhos diretos:</p>

                        <ul className="list-disc pl-5">
                            <li>Manutenção mais fácil.</li>
                            <li>Componentes mais limpos.</li>
                            <li>Layout consistente.</li>
                            <li>Melhor escalabilidade.</li>
                        </ul>
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
