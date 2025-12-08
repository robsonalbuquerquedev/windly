"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsPT";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/pt/blog/responsividade-tailwind");
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
                <motion.section className="space-y-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        📱 Mobile First como filosofia
                    </h2>

                    <p>
                        Em Tailwind, o ponto de partida é sempre o mobile. Isso significa que, por padrão,
                        qualquer classe que você aplicar será usada nos menores tamanhos de tela.
                        Depois disso, você só adiciona modificadores para que o layout cresça conforme
                        o espaço aumenta. Essa forma de pensar evita quebra de layout, cria fluidez
                        natural entre diferentes dispositivos e reduz a complexidade do CSS.
                    </p>

                    <p>
                        O grande benefício dessa filosofia é que você nunca precisa &quot;pensar ao contrário.&quot; Você não cria primeiro para telas enormes para só depois tentar encaixar tudo no
                        celular. Em vez disso, você constrói o essencial, limpo e direto. Depois,
                        adiciona apenas o que for necessário para telas médias, grandes e extragrandes —
                        garantindo ordem e previsibilidade no código.
                    </p>

                    <p>
                        Por isso, ao escrever classes como <strong>md:</strong> ou <strong>lg:</strong>,
                        você está dizendo: &quot;mantenha o estilo mobile como base e altere apenas quando
                        a tela for maior.&quot; O resultado? Layouts mais estáveis, uma experiência consistente
                        e um código muito mais fácil de manter e evoluir.
                    </p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto">
                        <code className="language-html text-sm">
                            {`<div className="p-4 md:p-8 lg:p-12 bg-blue-500 text-white">
  Responsive content
</div>`}
                        </code>
                    </motion.pre>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>p-4</strong>: estilo padrão (mobile)</li>
                        <li><strong>md:p-8</strong>: aplicado somente em telas médias ou maiores</li>
                        <li><strong>lg:p-12</strong>: aplicado apenas quando a tela já é bem ampla</li>
                    </ul>

                    <p>
                        Você pode aplicar isso em qualquer coisa: grids, espaçamentos, tipografia e até
                        cores. Com o Mobile First, cada etapa de ampliação do layout é consciente e
                        controlada — o que traz clareza e evita estilos conflitantes.
                    </p>
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
                <motion.section className="space-y-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        🎯 O que realmente importa na responsividade moderna
                    </h2>

                    <p>
                        Ser responsivo vai muito além de simplesmente &quot;caber na tela.&quot; É garantir que cada
                        elemento respire, se organize bem e ofereça uma leitura confortável em qualquer
                        dispositivo. Responsividade é sobre equilíbrio visual, ritmo entre elementos,
                        hierarquia clara e adaptação inteligente conforme o espaço aumenta ou diminui.
                    </p>

                    <p>
                        Um bom design responsivo cuida das proporções, respeita a escala dos componentes
                        e prioriza a fluidez. Em vez de tentar ajustar tudo manualmente para cada tela,
                        a ideia é criar regras consistentes que funcionam naturalmente em vários tamanhos.
                        Isso reduz retrabalho, evita conflitos entre estilos e mantém a identidade visual
                        sempre coerente.
                    </p>

                    <p>
                        Em outras palavras: responsividade moderna não se resume a remendar o layout
                        quando ele quebra — mas sim a projetar desde o início para que ele cresça
                        com elegância. Quanto mais previsível e modular o design, mais fácil será
                        evoluir a interface sem comprometer a experiência do usuário.
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Escalas tipográficas proporcionais:</strong> fontes que aumentam de
                            forma progressiva mantêm a leitura agradável e evitam que textos pareçam
                            enormes no mobile ou minúsculos no desktop.
                        </li>

                        <li>
                            <strong>Espaçamento com lógica consistente:</strong> usar um sistema de spacing
                            claro evita layouts apertados ou desbalanceados, criando ritmo visual entre
                            seções e componentes.
                        </li>

                        <li>
                            <strong>Evite duplicar estilos desnecessariamente:</strong> quanto mais
                            simples o CSS, mais fácil manter. Reaproveite classes, confie na base mobile
                            e sobrescreva apenas o essencial.
                        </li>

                        <li>
                            <strong>Expandir é melhor do que quebrar:</strong> pense em como o layout
                            cresce, e não em como ele &quot;desmonta.&quot; É mais eficiente definir como cada
                            parte se amplia do que criar remendos para quando algo sai do lugar.
                        </li>
                    </ul>

                    <p>
                        Ao unir essas práticas, você cria interfaces mais estáveis, flexíveis
                        e intuitivas — prontas para qualquer resolução, seja um celular simples
                        ou um monitor ultrawide. Responsividade deixa de ser um desafio técnico
                        e passa a ser uma extensão natural do design.
                    </p>
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
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-8 border-t pt-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                        🏁 Conclusão
                    </h2>

                    <p>
                        Responsividade não é apenas uma técnica — é uma forma de enxergar o usuário.
                        Cada pessoa tem um ritmo, um dispositivo diferente e um jeito próprio de navegar.
                        Quando entendemos isso, passamos a construir interfaces que se moldam à vida
                        real, oferecendo conforto visual, fluidez e previsibilidade em qualquer tela.
                    </p>

                    <p>
                        Com Tailwind, esse caminho se torna mais simples e natural. A filosofia mobile
                        first, a facilidade de criar escalas harmônicas e a clareza na organização das
                        classes permitem que você desenvolva layouts que crescem com elegância à medida
                        que o espaço aumenta. Isso reduz o peso das decisões, evita retrabalho
                        e mantém o foco na experiência do usuário.
                    </p>

                    <p>
                        Quando você combina boas práticas de espaçamento, tipografia bem planejada e
                        microanimações sutis, o resultado é uma interface que não apenas funciona,
                        mas que também transmite cuidado. O usuário sente que cada parte foi pensada
                        para acolher sua forma de navegar, seja no celular em movimento ou no monitor
                        grande de casa.
                    </p>

                    <p>
                        Em resumo: responsividade moderna é sobre criar experiências que se ajustam
                        às pessoas — e não forçar as pessoas a se ajustarem à interface. Com as
                        ferramentas certas e um olhar atento para detalhes, você constrói produtos
                        mais humanos, acessíveis e agradáveis de usar em qualquer contexto.
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
