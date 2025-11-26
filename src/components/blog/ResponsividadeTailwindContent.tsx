"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/posts";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/blog/responsividade-tailwind");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function ResponsividadeTailwindContent() {
    return (
        <article className="prose prose-invert prose-lg max-w-none text-balance leading-relaxed">

            {/* CONTAINER COM ANIMAÇÃO DE ENTRADA DO ARTIGO INTEIRO */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-20"
            >

                {/* SEÇÃO — HERO DO ARTIGO */}
                <motion.header className="space-y-6">
                    <motion.h1 initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Como pensar responsividade no mundo real com Tailwind
                    </motion.h1>

                    <motion.p initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl">
                        Criar layouts responsivos é como organizar uma mochila
                        que precisa funcionar em diferentes viagens: no mobile levamos só o essencial,
                        e em telas maiores usamos todo o espaço disponível.
                        O Tailwind facilita essa adaptação — basta entender como cada peça se encaixa.
                    </motion.p>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg">
                        <p className="text-sky-200 font-semibold">
                            🎒 Dica inicial: design responsivo começa na menor tela possível.
                        </p>
                    </div>
                </motion.header>

                {/* MOBILE FIRST */}
                <motion.section className="space-y-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        📱 Mobile First como filosofia
                    </h2>

                    <p>
                        Tudo no Tailwind nasce para o mobile. Esse é o tamanho padrão.
                        A partir dele, aumentamos o layout conforme a tela cresce.
                        Isso deixa tudo mais consistente, previsível e fácil de manter.
                    </p>

                    <motion.pre
                        className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto"
                    >
                        <code className="language-html text-sm">
                            {`<div className="p-4 md:p-8 lg:p-12 bg-blue-500 text-white">
  Responsive content
</div>`}
                        </code>
                    </motion.pre>

                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>p-4</strong>: base (mobile)</li>
                        <li><strong>md:p-8</strong>: telas médias</li>
                        <li><strong>lg:p-12</strong>: desktops grandes</li>
                    </ul>
                </motion.section>

                {/* ZONAS RESPONSIVAS */}
                <motion.section className="space-y-10">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">
                        📐 Dividindo o layout em Zonas Responsivas
                    </h2>

                    <p>
                        Um layout bem planejado é dividido em áreas que se adaptam conforme a tela muda.
                        Isso melhora a clareza visual, evita ruídos e organiza a experiência.
                    </p>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Zona de Conteúdo</h3>

                        <motion.pre
                            className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                        >
                            <code className="language-html text-sm">
                                {`<section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Responsive Title</h2>
  <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-700">
    This text adapts its size based on the screen width.
  </p>
</section>`}
                            </code>
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">2. Zona de Imagens</h3>

                        <motion.pre
                            className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                        >
                            <code className="language-html text-sm">
                                {`<img
  src="/example.jpg"
  alt="Responsive layout example"
  className="w-full max-w-lg mx-auto rounded-xl shadow-md"
/>`}
                            </code>
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Zona de Ações (CTA)</h3>

                        <motion.pre
                            className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                        >
                            <code className="language-html text-sm">
                                {`<div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
  <a href="#" className="px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold">
    Get Started
  </a>
  <a href="#" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold">
    Learn More
  </a>
</div>`}
                            </code>
                        </motion.pre>
                    </div>
                </motion.section>

                {/* BOAS PRÁTICAS */}
                <motion.section className="space-y-6">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        🎯 O que realmente importa na responsividade moderna
                    </h2>

                    <p>
                        Ser responsivo não é apenas “caber na tela”.
                        É sobre equilíbrio visual, ritmo, hierarquia e leitura confortável.
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                        <li>Escalas tipográficas proporcionais</li>
                        <li>Espaçamento com lógica consistente</li>
                        <li>Evite duplicar estilos desnecessariamente</li>
                        <li>Expandir é melhor do que quebrar o layout</li>
                    </ul>
                </motion.section>

                {/* EXEMPLO COMPLETO */}
                <motion.section initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-6">

                    <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                        ⚡ Exemplo completo
                    </h2>

                    <motion.pre
                        className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm"
                    >
                        <code className="language-html text-sm">
                            {`<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
      Build truly responsive layouts
    </h2>

    <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
      Learn how to transform designs into real interfaces using TailwindCSS.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
      <a href="#start" className="px-8 py-4 bg-sky-600 text-white rounded-lg font-semibold">
        Get Started
      </a>
      <a href="#resources" className="px-8 py-4 bg-gray-200 text-gray-800 rounded-lg font-semibold">
        Resources
      </a>
    </div>
  </div>
</section>`}
                        </code>
                    </motion.pre>
                </motion.section>

                <p className="text-gray-700">
                    Antes de dominar responsividade com Tailwind, é essencial ter uma base sólida de HTML.
                </p>

                <CTA
                    title="HTML Descomplicado"
                    description="Quer aprender HTML de forma prática e descomplicada? Este eBook é o guia perfeito para iniciantes e para quem deseja consolidar seus conhecimentos."
                    href="https://go.hotmart.com/I103136264W"
                    image="/images/cta-tailwind.png"
                />

                {/* CONCLUSÃO */}
                <motion.section initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6 border-t pt-6">

                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        🏁 Conclusão
                    </h2>

                    <p>
                        Responsividade é sobre pessoas: seus ritmos, telas e hábitos.
                        Com Tailwind, esse processo fica leve, rápido e intuitivo.
                        Quando você une boa organização, tipografia e microanimações,
                        cria interfaces agradáveis de navegar em qualquer dispositivo.
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
