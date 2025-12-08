"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsPT";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/pt/blog/classname-na-pratica");
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
                        Ao começar a construir interfaces reais com Tailwind, uma dúvida aparece rapidamente:
                        &quot;Existe uma maneira clara de organizar todas essas classes?&quot; É normal sentir que o <strong>className</strong> cresce rápido demais e perde a legibilidade, especialmente quando o layout
                        evolui ou quando surgem variações de estado, responsividade e estilos condicionais.
                    </p>

                    <p>
                        A boa notícia é que organizar classes não precisa ser complicado. Com algumas técnicas simples e
                        consistentes, é possível manter seu código limpo, previsível e fácil de evoluir — mesmo em páginas
                        mais complexas. Pequenos ajustes de organização tornam a leitura mais fluida, evitam repetições
                        desnecessárias e ajudam você a enxergar padrões que fortalecem o projeto como um todo.
                    </p>

                    <p>
                        Neste conteúdo, você vai aprender três abordagens práticas que realmente fazem diferença no dia a dia:
                        <strong> agrupar classes por responsabilidade visual</strong> para ter blocos intuitivos,
                        <strong> usar condicionais com libraries como clsx</strong> para lidar com estados sem bagunça,
                        e <strong> transformar padrões repetidos em componentes reutilizáveis</strong> que mantêm seu layout escalável.
                    </p>

                    <p>
                        Para complementar, no final da página há um <strong>exemplo aplicado</strong> que mostra essas técnicas
                        funcionando juntas em um componente real — da organização das classes até a estrutura final que você
                        pode usar como referência nos seus próprios projetos.
                    </p>

                    <p>
                        Se organizar suas classes sempre pareceu uma tarefa cansativa ou confusa, este guia vai te ajudar a
                        construir um método sólido e fácil de aplicar, deixando o Tailwind ainda mais confortável, produtivo
                        e prazeroso de usar.
                    </p>
                </motion.section>

                {/* Seção: Por que organização importa */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🧠 Por que organizar o className importa?
                    </h2>

                    <p>
                        Em projetos pequenos, pode até parecer que manter as classes em ordem é um cuidado exagerado.
                        Porém, à medida que o aplicativo cresce, cada bloco de código mal estruturado se transforma em
                        tempo perdido tentando entender o que cada classe faz, por que está ali ou como se relaciona
                        com o restante da interface. Essa perda de tempo vira retrabalho, aumenta a chance de bugs
                        visuais e afeta diretamente a evolução do projeto.
                    </p>

                    <p>
                        Quando o código está claro e bem organizado, o desenvolvedor trabalha com mais segurança,
                        toma decisões rápidas e evita inconsistências. E em times, essa organização se torna ainda
                        mais importante: ela define um padrão visual previsível, facilita colaboração e reduz o choque
                        ao receber código de outra pessoa.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Facilita a leitura e manutenção do código, mesmo meses depois.</li>
                        <li>Evita a criação de classes duplicadas que aumentam o peso e a complexidade do markup.</li>
                        <li>Melhora o onboarding de novos desenvolvedores ao oferecer uma estrutura padronizada.</li>
                        <li>Garante maior consistência ao trabalhar com padrões modernos, como design systems e componentes reutilizáveis.</li>
                        <li>Aumenta a previsibilidade visual, reduzindo conflitos entre estilos e comportamentos.</li>
                        <li>Torna refatorações futuras mais rápidas, seguras e menos cansativas.</li>
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
                            Uma técnica extremamente útil é ordenar classes por &quot;categorias:&quot; layout, espaçamento,
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

                <p className="text-gray-700">
                    Para organizar classes com clareza, a estrutura do HTML precisa ser forte. É ela que dá suporte para qualquer padrão de className realmente funcionar.
                </p>

                <CTA
                    title="Aprenda HTML5 em Poucas Horas e Crie Sites Profissionais Sem Enrolação"
                    description="Se você sempre quis criar seus próprios sites, entrar no mercado de desenvolvimento web ou finalmente começar no Front-End (CSS, JavaScript e muito mais), este eBook é exatamente o que você precisava."
                    href="https://go.hotmart.com/T103137279S"
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
                        Organizar classes não é apenas um detalhe estético — é um compromisso com a clareza, a manutenção e a
                        evolução constante do seu projeto. Quando você estrutura o <strong>className</strong> com intenção, cada
                        componente se torna mais fácil de entender, modificar e reaproveitar. O resultado é um código que trabalha
                        a seu favor, e não contra você.
                    </p>

                    <p>
                        Ao aplicar técnicas como agrupar por responsabilidade visual, usar condicionais inteligentes e transformar
                        padrões em componentes reutilizáveis, você cria interfaces que crescem de forma saudável. Isso evita
                        retrabalho, elimina ruído visual e fortalece a base do seu design system — mesmo que você ainda não tenha
                        um oficialmente.
                    </p>

                    <p>
                        Esse tipo de cuidado também se reflete na experiência final do usuário. Um layout organizado, previsível e
                        consistente transmite confiança, reduz atritos e ajuda o usuário a entender sua interface sem esforço.
                        Pequenos detalhes têm impacto real no todo.
                    </p>

                    <p>
                        Em resumo: organização transforma o caos em fluidez. Ela te permite focar no que importa — criar experiências
                        mais humanas, bonitas e estáveis. Use o Tailwind como uma ferramenta de liberdade, não como uma fábrica de
                        bagunça. Quando você domina o método, a elegância vem naturalmente.
                    </p>

                    <p>
                        Continue experimentando, aprimorando e refinando. Seu código — e seus futuros projetos — agradecem.
                    </p>
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
