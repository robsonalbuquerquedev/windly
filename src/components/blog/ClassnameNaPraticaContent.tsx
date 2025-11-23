"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/posts";

const currentIndex = posts.findIndex((p) => p.href === "/blog/classname-na-pratica");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function ClassnameNaPraticaContent() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">
            {/* CONTAINER COM ANIMAÇÃO DE ENTRADA DO ARTIGO INTEIRO */}
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
                        className na prática para páginas reais
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        Organização inteligente de classes Tailwind sem bagunça, repetição ou confusão.
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
                        Quando começamos a construir páginas reais com Tailwind, uma das primeiras dúvidas é:
                        "Como organizar minhas classes sem virar uma sopa de palavras?". Tailwind é poderoso, mas se
                        não soubermos estruturar, o código rapidamente perde legibilidade.
                    </p>

                    <p>
                        Neste artigo, vamos explorar como estruturar <strong>className</strong> de maneira limpa e
                        moderna, seguindo boas práticas que realmente funcionam em projetos profissionais. Além disso,
                        você verá exemplos reais de organização, animações com Framer Motion e tags semânticas que ajudam
                        tanto no SEO quanto na experiência do usuário.
                    </p>
                </motion.section>

                {/* Seção: Por que organização importa */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">🧠 Por que organizar o className importa?</h2>

                    <p>
                        Em projetos pequenos, é fácil acreditar que organização é opcional. Entretanto, quando a página
                        começa a crescer, cada minuto perdido tentando entender classes bagunçadas se transforma em
                        problemas de manutenção e retrabalho.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Código mais limpo e fácil de manter;</li>
                        <li>Redução de classes repetidas desnecessariamente;</li>
                        <li>Melhor experiência de onboarding para novos desenvolvedores;</li>
                        <li>Alta compatibilidade com patterns modernos como componentes reutilizáveis.</li>
                    </ul>
                </motion.section>

                {/* Seção: Técnicas eficazes */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">🛠️ Técnicas eficazes para organizar classes</h2>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Agrupe por responsabilidade visual</h3>
                        <p>
                            Uma técnica extremamente útil é ordenar classes por "categorias": layout, espaçamento,
                            tipografia, cores, e assim por diante. Isso cria um padrão visual claro.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<div
  className="flex items-center justify-between
             p-4 md:p-6
             bg-white shadow-md rounded-xl
             text-gray-800"
>`}
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">2. Use condicionais com libraries como clsx</h3>
                        <p>
                            Em páginas reais, elementos mudam de aparência conforme estado, props ou tamanho da tela.
                            Evite montar strings gigantes usando ternários dentro do className.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`import clsx from "clsx";

const buttonClass = clsx(
  "px-4 py-2 rounded-xl font-semibold transition",
  isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800",
  disabled && "opacity-50 cursor-not-allowed"
);`}
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Crie componentes reutilizáveis</h3>
                        <p>
                            Quando notar que um conjunto de classes aparece repetidamente, isso é um sinal de que deve virar
                            um componente. Isso reduz bugs e evita repetição.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`export function Card({ children }) {
  return (
    <div className="p-6 rounded-2xl shadow-md bg-white text-gray-900">
      {children}
    </div>
  );
}`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* EXEMPLO COMPLETO */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">⚡ Exemplo final aplicado</h2>

                    <p>Aqui está um trecho que demonstra organização clara, animação e semântica moderna:</p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<section className="max-w-4xl mx-auto space-y-6">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md
               space-y-4 border border-white/50"
  >
    <h2 className="text-2xl font-bold text-gray-900">Título do bloco</h2>
    <p className="text-gray-700">Conteúdo explicativo organizado e elegante.</p>
  </motion.div>
</section>`}
                    </motion.pre>
                </motion.section>

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
                        Organizar classes não é frescura — é um passo essencial para criar interfaces profissionais,
                        modernas e escaláveis. Ao seguir essas técnicas, seu código ganha clareza, seu layout ganha vida
                        e sua performance como desenvolvedor cresce.
                    </p>

                    <p>Use Tailwind a seu favor. Deixe a bagunça para trás, abrace a elegância.</p>
                </motion.section>

                {/* NAVEGAÇÃO ENTRE ARTIGOS */}
                <motion.footer
                    className="mt-16 border-t border-white/10 pt-10"
                >
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
