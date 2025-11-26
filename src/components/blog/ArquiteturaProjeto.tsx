"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/posts";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/blog/arquitetura-projeto");
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
                        Construir um projeto moderno sem uma boa arquitetura é como montar um prédio sem planta: ele até
                        pode ficar de pé, mas qualquer reforma vira uma dor de cabeça. Em desenvolvimento, a arquitetura
                        organiza o fluxo do código, define padrões e torna a manutenção previsível, mesmo quando o projeto
                        cresce.
                    </p>

                    <p>
                        Neste artigo, vamos mergulhar em como criar uma arquitetura sólida, modular e escalável para projetos
                        reais, usando princípios aplicados em produção. Aqui você encontrará desde organização por
                        responsabilidades, estrutura de pastas, padrões adotados por empresas, e exemplos completos
                        aplicados em projetos Next.js.
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
                        Arquitetura não é só estética. Ela é uma bússola que guia como o código nasce, cresce e permanece
                        saudável ao longo do tempo. Em times, ela reduz atrito entre desenvolvedores, facilita onboarding e
                        evita decisões aleatórias que geram código acoplado e difícil de estender.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Facilita manutenção e escalabilidade.</li>
                        <li>Reduz retrabalho e duplicação de código.</li>
                        <li>Melhora a clareza entre camadas e responsabilidades.</li>
                        <li>Permite a criação de componentes e módulos independentes.</li>
                        <li>Ajuda no SEO, performance, cache e organização da UI.</li>
                    </ul>
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
                        Arquitetura não é um luxo: é a fundação de todo projeto que pretende crescer sem virar uma bagunça.
                        Ao adotar organização modular, camadas independentes, padronização e separação por domínios, você
                        cria sistemas escaláveis, fáceis de manter e prontos para produção.
                    </p>

                    <p>
                        Use a arquitetura como bússola. Seu código — e seu futuro — agradecem.
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
