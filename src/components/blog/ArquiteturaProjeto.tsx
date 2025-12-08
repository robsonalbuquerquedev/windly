"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsPT";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/pt/blog/arquitetura-projeto");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function ArquiteturaProjetoContent() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-20"
            >
                {/* Título */}
                <motion.header className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Como montar sua arquitetura de projeto moderna
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        Guia completo sobre estrutura de pastas, padrões, organização, componentes e práticas usadas em produção.
                    </motion.p>
                </motion.header>

                {/* Introdução */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <p>
                        Construir um projeto moderno sem uma boa arquitetura é como erguer um prédio sem uma planta clara:
                        ele até pode parecer estável no começo, mas qualquer expansão, ajuste ou reparo vira um pesadelo.
                        No desenvolvimento de software, a arquitetura define o caminho que o código segue, organiza o fluxo
                        das funcionalidades e cria uma base previsível para que o projeto continue saudável conforme cresce
                        em tamanho, complexidade e colaboradores.
                    </p>

                    <p>
                        Uma arquitetura bem pensada elimina improvisos, reduz decisões desconexas e evita que o código vire
                        uma massa confusa de arquivos espalhados. Ela orienta como componentes devem se comunicar, como regras
                        de negócio são centralizadas, como dados transitam entre camadas e como cada parte do sistema deve —
                        e não deve — se relacionar. Isso é essencial para manter o projeto flexível, escalável e pronto para
                        receber novas funcionalidades sem causar efeitos colaterais imprevisíveis.
                    </p>

                    <p>
                        Ao longo deste artigo, vamos explorar como construir uma arquitetura moderna e realmente útil para
                        projetos do mundo real. Você vai aprender desde os princípios fundamentais usados em produção até
                        padrões amplamente adotados em empresas, como organização por responsabilidades, estruturas modulares,
                        separação por domínio e aplicação de camadas (UI, Domain e Infra). Além disso, veremos exemplos
                        práticos aplicados em projetos Next.js, mostrando como essas ideias funcionam na vida real — e não
                        apenas na teoria.
                    </p>

                    <p>
                        Nosso objetivo é transformar a forma como você pensa e projeta seus aplicativos. Ao final, você terá
                        uma visão clara de como organizar melhor seu código, reduzir retrabalho, facilitar manutenção e criar
                        projetos preparados para crescer com segurança, consistência e elegância.
                    </p>
                </motion.section>

                {/* Por que arquitetura importa */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🧠 Por que a arquitetura do projeto importa?
                    </h2>

                    <p>
                        Arquitetura não é sobre enfeitar o código — é sobre dar direção. Ela funciona como o mapa que
                        orienta cada decisão do projeto, desde a estrutura de pastas até como os componentes se comunicam,
                        como dados circulam e como o time evolui o código no futuro. Quando bem planejada, evita o caos,
                        reduz divergências e cria uma base sólida para que o projeto cresça com segurança e sem dores de cabeça.
                    </p>

                    <p>
                        Em equipes, uma boa arquitetura elimina suposições, padroniza decisões e diminui o tempo que novos
                        desenvolvedores levam para entender o sistema. Em projetos solo, ela evita retrabalhos, organiza fluxos
                        complexos e impede que o código vire uma colcha de retalhos difícil de interpretar depois de alguns meses.
                    </p>

                    <p>
                        Com uma arquitetura consistente, as funcionalidades fluem de forma previsível, bugs ficam mais fáceis de
                        rastrear e cada parte do sistema sabe exatamente o que deve — e o que não deve — fazer. O resultado é
                        um produto mais rápido, mais estável e muito mais fácil de manter.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Facilita manutenção, evolução contínua e escalabilidade real.</li>
                        <li>Reduz retrabalho, elimina duplicações e melhora a consistência.</li>
                        <li>Clarifica fronteiras entre camadas, domínios e responsabilidades.</li>
                        <li>Permite criar módulos, hooks, serviços e componentes verdadeiramente independentes.</li>
                        <li>Melhora performance, organização da UI, controle de cache e até SEO.</li>
                        <li>Aumenta a vida útil do projeto e diminui o custo de mudanças futuras.</li>
                        <li>Ajuda o time a tomar decisões mais rápidas e alinhadas com os mesmos princípios.</li>
                    </ul>

                    <p>
                        No fim das contas, arquitetura é sobre sustentabilidade. É construir hoje pensando no amanhã —
                        criando um ambiente onde o projeto não só funciona, mas também evolui com elegância e sem fricção,
                        seja com uma pessoa codando ou com uma equipe inteira colaborando.
                    </p>
                </motion.section>

                {/* Estruturas e padrões modernos */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🛠️ Estruturas modernas para organizar seu projeto
                    </h2>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Estrutura de pastas modular</h3>
                        <p>
                            Uma arquitetura moderna começa separando responsabilidades. Ao dividir o projeto em módulos
                            independentes — como <em>components</em>, <em>hooks</em>, <em>services</em>, <em>utils</em>,
                            <em>features</em> e <em>layouts</em> — o código ﬂui naturalmente, sem misturar interface com
                            lógica de negócio.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`src/
  app/
  components/
  hooks/
  services/
  utils/
  features/
  layouts/`}
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">2. Organização por domínio (feature-based)</h3>
                        <p>
                            Projetos modernos usam a organização por domínio, onde cada área do sistema possui seus
                            próprios componentes, hooks, validações, rotas e serviços. Isso isola contextos, reduz
                            dependências e torna o projeto mais escalável.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`src/features/
  auth/
    components/
    services/
    hooks/
    validations/
  dashboard/
    components/
    charts/
    utils/`}
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Aplicação de camadas (UI, Domain, Infra)</h3>
                        <p>
                            Separar a aplicação em camadas ajuda a manter o projeto consistente: a UI trata interface, o
                            domínio cuida da regra de negócio e a infraestrutura lida com APIs, banco, autenticação e
                            integrações externas.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`// Exemplo de service isolado
export async function loginService(credentials) {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return res.json();
}`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* Exemplo aplicado */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        ⚡ Exemplo final aplicado
                    </h2>

                    <p>
                        Abaixo temos um exemplo aplicando camadas, organização por domínio e componentização em um projeto
                        Next.js, mantendo o código limpo, fluido e pronto para escalar.
                    </p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<section className="max-w-4xl mx-auto space-y-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-6 rounded-2xl shadow-lg bg-white/80
               backdrop-blur-md space-y-4 border border-white/50"
  >
    <h2 className="text-2xl font-bold text-gray-900">
      Arquitetura modular aplicada
    </h2>
    <p className="text-gray-700">
      Estruturas independentes, previsíveis e prontas para crescer.
    </p>
  </motion.div>
</section>`}
                    </motion.pre>
                </motion.section>

                <p className="text-gray-700">
                    Quando você domina a arquitetura de um projeto, tudo muda: seu código fica mais limpo, suas decisões ficam mais rápidas e trabalhar em equipe se torna muito mais natural. É essa organização que separa projetos amadores de aplicações realmente prontas para o mundo real. E se você já está confortável com os fundamentos, este é o momento ideal para avançar para tecnologias profissionais usadas no mercado.
                </p>

                <CTA
                    title="Curso de Node.js, React e React Native"
                    description="Se você quer evoluir para o próximo nível e construir aplicações modernas, completas e preparadas para produção, este curso une Node.js, React e React Native em um único caminho de aprendizado sólido."
                    href="https://go.hotmart.com/M29939303X"
                />

                {/* Conclusão */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6 border-t pt-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        🏁 Conclusão
                    </h2>

                    <p>
                        Arquitetura não é um detalhe opcional, nem um luxo reservado a projetos gigantes. Ela é a base que
                        permite que qualquer aplicação — pequena, média ou grande — cresça com consistência, segurança e
                        previsibilidade. Sem uma estrutura clara, cada nova funcionalidade introduz riscos; cada ajuste
                        vira um processo demorado; e o código se torna cada vez mais difícil de entender, testar e manter.
                    </p>

                    <p>
                        Ao aplicar princípios sólidos como modularização, separação por responsabilidades, padrões bem
                        definidos, camadas independentes e organização orientada a domínio, você transforma seu projeto em
                        um ecossistema sustentável. Isso reduz retrabalho, facilita escalabilidade, diminui acoplamento,
                        melhora performance e torna seu código muito mais preparado para lidar com mudanças — desde as
                        pequenas correções até grandes evoluções estruturais.
                    </p>

                    <p>
                        Uma boa arquitetura também cria alinhamento entre membros do time, acelera onboarding,
                        diminui divergências técnicas e evita interpretações diferentes do mesmo problema.
                        Além disso, quando bem aplicada, ela melhora diretamente fatores como caching, SSR,
                        rotas, carregamento, organização da UI e até SEO em projetos modernos, especialmente em
                        frameworks como Next.js.
                    </p>

                    <p>
                        Se existe uma verdade universal no desenvolvimento é esta: projetos estruturados de forma
                        inteligente sobrevivem e evoluem; projetos improvisados acumulam dívidas e travam. Escolher
                        uma arquitetura consistente é uma decisão estratégica que afeta o presente, o futuro e até
                        a longevidade do código.
                    </p>

                    <p>
                        Use a arquitetura como bússola. Ela mantém o projeto no rumo certo hoje — e salva você de
                        dores de cabeça amanhã.
                    </p>
                </motion.section>

                {/* Navegação */}
                <motion.footer className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="text-3xl font-bold">Quer aprender mais?</h2>
                    <p className="mt-4 text-lg">
                        Explore novos conteúdos publicados regularmente sobre desenvolvimento, tecnologia e boas práticas modernas.
                    </p>

                    <ButtonBlog previous={previous} next={next} />
                </motion.footer>
            </motion.div>
        </article>
    );
}
