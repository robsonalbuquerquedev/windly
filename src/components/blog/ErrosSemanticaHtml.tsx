"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsPT";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/pt/blog/erros-semantica-html");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function ErrosSemanticaHtml() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-20"
            >
                {/* TÍTULO */}
                <motion.header className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Erros que iniciantes cometem ao usar semântica HTML
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        Os maiores deslizes na hora de estruturar páginas e como evitar problemas reais de acessibilidade e SEO.
                    </motion.p>
                </motion.header>

                {/* INTRODUÇÃO */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <p>
                        Mesmo parecendo apenas um detalhe técnico, a semântica HTML é o que dá <strong>significado real</strong> a cada parte da sua página. Ela orienta navegadores, mecanismos de busca e tecnologias assistivas a
                        entenderem a estrutura do conteúdo — e isso influencia diretamente acessibilidade, SEO, leitura por
                        crawlers, interpretação de contexto e até a experiência de quem desenvolve e mantém o projeto.
                    </p>

                    <p>
                        Quando a semântica é ignorada, surgem problemas invisíveis no início, mas devastadores ao longo do tempo.
                        Muitos iniciantes acabam criando verdadeiras &quot;sopas de div,&quot; misturam headings fora de ordem, deixam de usar
                        tags fundamentais como <strong>main</strong>, <strong>nav</strong>, <strong>article</strong> e <strong>section</strong>, ou então utilizam essas mesmas tags apenas para fins visuais — sem considerar sua
                        função estrutural. Isso gera páginas confusas tanto para usuários quanto para ferramentas de rastreamento,
                        reduz a qualidade de indexação e compromete a acessibilidade.
                    </p>

                    <p>
                        Além disso, elementos como listas, tabelas e figuras são frequentemente ignorados ou usados de forma
                        inadequada, o que prejudica clareza, dificulta a compreensão do conteúdo e elimina oportunidades de construir
                        blocos com significado semântico forte. Pequenas escolhas erradas acumulam impacto até que a página inteira
                        se torne difícil de navegar, difícil de manter e mal avaliada por buscadores.
                    </p>

                    <p>
                        Neste artigo, você vai aprender — de forma simples, direta e sem complicação — quais são os erros mais
                        comuns cometidos por quem está começando e como corrigi-los com semântica moderna, consciente e estratégica.
                        Vamos analisar cada falha em detalhes e mostrar como transformar páginas frágeis e confusas em estruturas
                        limpas, claras e bem organizadas.
                    </p>
                </motion.section>

                {/* ERRO 1 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">
                        ❌ 1. Usar div para tudo (divsoup)
                    </h2>

                    <p>
                        Um dos erros mais conhecidos: transformar a página inteira em uma sopa de
                        <code>&lt;div&gt;</code>. O código até funciona, mas perde completamente o significado.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">Por que isso é um problema?</h3>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Leitores de tela não entendem o propósito dos blocos.</li>
                            <li>Google tem mais dificuldade de mapear hierarquia.</li>
                            <li>Manutenções futuras ficam confusas e lentas.</li>
                        </ul>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<!-- ERRADO -->
<div>
  <div>
    <div>Meu título</div>
  </div>
</div>`}
                        </motion.pre>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<!-- CORRETO -->
<header>
  <h1>Meu título</h1>
</header>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* ERRO 2 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                        ❌ 2. Usar heading tags fora de ordem (pular de h1 para h4)
                    </h2>

                    <p>
                        Headings criam a hierarquia lógica da página. Quando você &quot;pula níveis&quot;, leitores de tela
                        e motores de busca interpretam que o conteúdo está quebrado.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">Como muitos iniciantes fazem:</h3>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<h1>Título principal</h1>
<h4>Subseção importante</h4>`}
                        </motion.pre>

                        <h3 className="text-2xl font-semibold">Como deveria ser:</h3>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<h1>Título principal</h1>
<h2>Subseção importante</h2>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* ERRO 3 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        ❌ 3. Ignorar tags essenciais como main, nav, article, section
                    </h2>

                    <p>
                        Essas tags não servem apenas para organização visual, mas para declarar o papel de cada bloco
                        dentro da página. É o mapa que o Google usa para entender o contexto.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>&lt;main&gt;</strong>: conteúdo principal da página;</li>
                            <li><strong>&lt;nav&gt;</strong>: navegação;</li>
                            <li><strong>&lt;article&gt;</strong>: conteúdo independente;</li>
                            <li><strong>&lt;section&gt;</strong>: agrupamento de conteúdo com propósito.</li>
                        </ul>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<!-- CERTO -->
<main>
  <article>
    <h1>Guia completo de semântica HTML</h1>
  </article>
</main>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* ERRO 4 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                        ❌ 4. Usar section apenas para &quot;dividir visualmente&quot;
                    </h2>

                    <p>
                        Section não é uma “div estilizada”. Ela precisa ter um propósito claro, geralmente iniciado por
                        um heading representando o conteúdo daquele bloco.
                    </p>

                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<!-- ERRADO -->
<section class="mb-10">
  <div>Texto aleatório sem título</div>
</section>`}
                        </motion.pre>

                        <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<!-- CERTO -->
<section>
  <h2>Sobre o projeto</h2>
  <p>Esse bloco tem significado real.</p>
</section>`}
                        </motion.pre>
                    </div>
                </motion.section>

                {/* ERRO 5 */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                        ❌ 5. Não usar corretamente listas, tabelas e figuras
                    </h2>

                    <p>
                        Muita gente usa listas apenas para criar indentação, tabelas para layout ou imagens sem texto alternativo.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Listas servem para itens relacionados.</li>
                        <li>Tabelas estruturam dados tabulares.</li>
                        <li>Imagens sem <code>alt</code> prejudicam acessibilidade.</li>
                    </ul>

                    <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<!-- ERRADO -->
<img src="/banner.png">`}
                    </motion.pre>

                    <motion.pre className="p-4 rounded-xl bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<!-- CORRETO -->
<img src="/banner.png" alt="Banner promocional do evento XPTO">`}
                    </motion.pre>
                </motion.section>

                <p className="text-gray-700">
                    Evitar esses erros semânticos não é só uma questão de organização — é dominar a base que sustenta toda a experiência do usuário, a acessibilidade e até o SEO. Quando você entende HTML com profundidade, cada tag passa a ter um propósito claro, e criar páginas sólidas se torna muito mais natural. É esse domínio que separa quem apenas “monta páginas” de quem realmente desenvolve com consistência.
                </p>

                <CTA
                    title="Curso HTML, CSS, JavaScript e TypeScript | 2024"
                    description="Antes de se aventurar em ferramentas avançadas como React ou Next.js, é essencial dominar HTML, CSS, JavaScript e TypeScript. Este curso reúne tudo o que você precisa para construir bases fortes e evoluir como desenvolvedor."
                    href="https://go.hotmart.com/B103136031E"
                />

                {/* CONCLUSÃO */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-6 border-t pt-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        🏁 Conclusão
                    </h2>

                    <p>
                        A semântica HTML funciona como o mapa oficial da sua aplicação. Quando cada elemento é nomeado e estruturado
                        corretamente, usuários, navegadores e ferramentas de busca conseguem entender o conteúdo com muito mais
                        facilidade. Esse entendimento claro gera benefícios imediatos em SEO, acessibilidade, indexação e até na
                        manutenção do próprio código.
                    </p>

                    <p>
                        Aplicar semântica não é apenas uma questão técnica — é uma decisão estratégica. Tags bem escolhidas ajudam
                        crawlers a identificar prioridades, permitem que leitores de tela interpretem o conteúdo com precisão e tornam
                        a navegação muito mais lógica. O resultado? Páginas mais profissionais, inclusivas e preparadas para escalar.
                    </p>

                    <p>
                        Além disso, quanto mais você domina a semântica, maior é sua capacidade de construir layouts claros, reduzir
                        dependência de código desnecessário e evitar o famoso &quot;div soup.&quot; Isso impacta diretamente a performance,
                        facilita revisões e colabora para que sua aplicação seja vista com bons olhos por mecanismos de análise
                        como o Google, o Search Console e plataformas de monetização, incluindo Adsence.
                    </p>

                    <p>
                        Em resumo: investir tempo em estudar e aplicar semântica é investir na qualidade geral do seu projeto.
                        Pode parecer um detalhe pequeno, mas é justamente esse tipo de detalhe que separa um código amador de um
                        código profissional — e abre portas para melhores resultados, melhores posições nos buscadores e uma
                        experiência mais sólida para todos que acessam o seu site.
                    </p>
                </motion.section>

                {/* NAVEGAÇÃO */}
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
