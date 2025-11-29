"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/posts";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/pt/blog/seo-nextjs-tailwind");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function SeoNextjsTailwindContent() {
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
                        SEO para Next.js explicado com Tailwind
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl"
                    >
                        Entenda como usar metadata, JSON-LD e semântica para melhorar ranqueamento com Next.js.
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
                        Quando pensamos em SEO, muitas vezes lembramos apenas de palavras-chave e títulos bem escritos.
                        Mas no mundo moderno, especialmente usando Next.js, grande parte do SEO eficiente nasce da
                        estrutura correta do código — e é aqui que entram metadata, semântica e até Tailwind.
                    </p>

                    <p>
                        Neste artigo, você vai entender como montar páginas otimizadas, rápidas e rastreáveis usando o
                        poder do App Router, tags semânticas alinhadas com Tailwind e blocos organizados de JSON-LD
                        para impulsionar o ranqueamento da sua aplicação.
                    </p>
                </motion.section>

                {/* POR QUE SEO É DIFERENTE NO NEXT.JS */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🔍 Por que SEO é diferente no Next.js?
                    </h2>

                    <p>
                        Diferente de SPAs tradicionais, Next.js trabalha com renderização híbrida. Isso significa que
                        você tem mais controle sobre como cada página é entregue ao Google, aumentando a precisão com
                        que seus dados são rastreados.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Renderização no servidor facilita a leitura por crawlers;</li>
                        <li>Layouts persistentes evitam downloads desnecessários;</li>
                        <li>Metadata unificada melhora consistência entre páginas;</li>
                        <li>Integração direta com JSON-LD e microdados.</li>
                    </ul>
                </motion.section>

                {/* BOAS PRÁTICAS DE METADATA */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">
                        🛠️ Como configurar metadata corretamente
                    </h2>

                    {/* CARD 1 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">1. Use o objeto metadata no App Router</h3>
                        <p>
                            Esse objeto substitui o uso manual de tags no arquivo head. Ele organiza e padroniza
                            informações essenciais para o SEO.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`export const metadata = {
  title: "Meu artigo otimizado",
  description: "Usando metadata no Next.js com SEO moderno.",
  openGraph: {
    title: "Meu artigo otimizado",
    description: "SEO com Next.js explicado.",
    images: ["/og-image.png"],
  }
};`}
                        </motion.pre>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">2. Adicione JSON-LD para Google Rich Results</h3>
                        <p>
                            Com JSON-LD, você fala diretamente a linguagem do Google, permitindo exibir card de artigo,
                            breadcrumb, produto, receita e muito mais.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`export function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO para Next.js explicado",
    author: "Robson Albuquerque",
    datePublished: "2025-01-01"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}`}
                        </motion.pre>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg space-y-6">
                        <h3 className="text-2xl font-semibold">3. Semântica com Tailwind? Sim!</h3>
                        <p>
                            Tailwind não atrapalha SEO — ele apenas estiliza. A responsabilidade de semântica continua
                            sendo sua. Use tags como <strong>header</strong>, <strong>main</strong>,
                            <strong>section</strong> e <strong>article</strong> para criar significado real para as páginas.
                        </p>

                        <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                            {`<main className="max-w-3xl mx-auto space-y-8">
  <section className="prose">
    <h1 className="font-bold text-3xl">Título otimizado</h1>
    <p className="text-gray-700">Texto estruturado com semântica moderna.</p>
  </section>
</main>`}
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
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                        ⚡ Exemplo final aplicado
                    </h2>

                    <p>Aqui está um bloco que combina semântica, metadata e SEO moderno:</p>

                    <motion.pre className="rounded-xl p-4 bg-black/30 border border-white/10 overflow-x-auto text-sm">
                        {`<article className="max-w-4xl mx-auto space-y-6">
  <header>
    <h1 className="text-4xl font-bold">SEO com Next.js</h1>
  </header>

  <p className="text-gray-700">
    Estrutura otimizada, carregamento rápido e dados prontos para o Google.
  </p>

  <ArticleJsonLd />
</article>`}
                    </motion.pre>
                </motion.section>

                <p className="text-gray-700">
                    Quando entendemos SEO no Next.js, percebemos que tudo começa no HTML. A estrutura semântica correta é o alicerce para que o metadata, o JSON-LD e todos os sinais de relevância façam sentido para os buscadores. Sem isso, qualquer estratégia de otimização perde força — mas com uma base sólida, tudo se encaixa de forma natural e eficiente.
                </p>

                <CTA
                    title="Template Profissional: Tela de Login e Cadastro em HTML, CSS e JavaScript"
                    description="Um template moderno, responsivo e pronto para uso. Ideal para projetos reais, estudos práticos e para fortalecer sua base em HTML e semântica — exatamente o que reforça um SEO técnico bem-feito."
                    href="https://go.hotmart.com/Q103138000O"
                />

                {/* CONCLUSÃO */}
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
                        SEO em Next.js não é só sobre performance: é sobre comunicar de forma clara com humanos e
                        mecanismos de busca. Com metadata bem estruturada, JSON-LD e semântica aplicada com Tailwind,
                        você cria páginas preparadas para disputar as primeiras posições.
                    </p>

                    <p>
                        Use cada camada a seu favor para construir aplicações bonitas, rápidas e encontráveis.
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
