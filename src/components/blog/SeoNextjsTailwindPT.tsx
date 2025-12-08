"use client";

import { motion } from "framer-motion";
import { ButtonBlog } from "@/components/buttons/ButtonBlog";
import { staggerContainer } from "@/utils/animations";
import { posts } from "@/data/postsPT";
import CTA from "@/components/cta/CTA";

const currentIndex = posts.findIndex((p) => p.href === "/pt/blog/seo-nextjs-tailwind");
const previous = posts[currentIndex - 1];
const next = posts[currentIndex + 1];

export default function SeoNextjsTailwindContentPT() {
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
                        Quando pensamos em SEO, normalmente lembramos de palavras-chave, títulos chamativos e boas
                        descrições. Porém, no cenário atual — principalmente ao trabalhar com Next.js — a base do SEO
                        eficiente está muito mais ligada à forma como a sua página é construída. Isso inclui estrutura,
                        semântica, organização visual e o uso inteligente de recursos nativos como metadata e blocos
                        de informação estruturada.
                    </p>

                    <p>
                        Com o App Router, você deixa de focar apenas no conteúdo e passa a ter controle fino sobre como
                        cada detalhe técnico é entregue aos motores de busca. Quando combinamos isso com marcação
                        semântica correta, integração com Tailwind e padrões como JSON-LD, a página não só fica mais
                        fácil de rastrear, mas também ganha contexto — algo essencial para conquistar resultados
                        enriquecidos nos buscadores.
                    </p>

                    <p>
                        Ao longo deste artigo, você vai aprender a configurar metadata do jeito certo, implementar informações estruturadas para aumentar as chances de rich results, aplicar semântica moderna mesmo usando utilitários do Tailwind e, no final, montar um exemplo completo que mostra tudo isso funcionando em uma página real.
                    </p>

                    <p>
                        SEO deixou de ser apenas uma questão de &quot;escrever bem.&quot; Hoje, ele é profundamente influenciado
                        pela arquitetura da sua aplicação, pela forma como o Next.js prepara o HTML para o crawler e
                        até pela maneira que seus componentes são organizados. Quando todas essas camadas trabalham
                        juntas, sua aplicação ganha velocidade, precisão no ranqueamento e uma estrutura forte o
                        suficiente para crescer de forma saudável.
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
                        Diferente das SPAs tradicionais, onde grande parte do conteúdo só existe depois que o JavaScript carrega,
                        o Next.js trabalha com um modelo de <strong>renderização híbrida</strong>. Isso significa que você pode
                        decidir como cada página chega ao navegador — totalmente montada no servidor, pré-gerada ou renderizada
                        sob demanda. Na prática, essa flexibilidade aumenta muito a precisão com que o Google interpreta
                        suas páginas e melhora a forma como elas são indexadas.
                    </p>

                    <p>
                        Em vez de depender totalmente do cliente para montar o conteúdo, o Next.js entrega páginas com HTML real
                        desde o início. Isso reduz ambiguidades para crawlers, melhora a performance percebida e ajuda o buscador
                        a entender com mais clareza a estrutura do seu site. Além disso, você ganha controle direto sobre metadados,
                        rotas, layouts persistentes e dados estruturados, criando uma base sólida para um SEO mais estratégico.
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Renderização no servidor</strong> facilita o trabalho dos crawlers e entrega HTML pronto para indexação.</li>
                        <li><strong>Layouts persistentes</strong> reduzem downloads repetidos e fortalecem a consistência estrutural do site.</li>
                        <li><strong>Metadata centralizada</strong> evita divergências entre páginas e garante informações claras para mecanismos de busca.</li>
                        <li><strong>Suporte direto a JSON-LD e microdados</strong>, permitindo enriquecer páginas com dados estruturados de forma simples.</li>
                        <li><strong>Controle sobre roteamento e segmentação</strong>, ajudando a criar URLs limpas, semânticas e eficientes para SEO.</li>
                        <li><strong>Melhor experiência de performance</strong>, que impacta diretamente no ranqueamento, principalmente em Core Web Vitals.</li>
                    </ul>

                    <p>
                        Quando combinamos renderização inteligente com metadados bem definidos e dados estruturados,
                        o Next.js se destaca como uma das ferramentas mais completas para SEO moderno — especialmente em
                        projetos que exigem flexibilidade, desempenho e escalabilidade.
                    </p>
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
                        SEO em Next.js vai muito além de otimizar velocidade: é sobre construir páginas que sejam
                        fáceis de entender tanto para pessoas quanto para crawlers. Quando você combina metadata
                        bem estruturada, JSON-LD organizado e semântica aplicada com Tailwind, cria uma base sólida
                        que guia os buscadores com precisão e oferece ao usuário uma experiência mais clara,
                        previsível e intuitiva.
                    </p>

                    <p>
                        Cada detalhe importa. A forma como o HTML chega ao crawler, como o conteúdo é descrito nas
                        metadata e como sua hierarquia visual é construída influenciam diretamente no ranqueamento.
                        Páginas bem estruturadas têm mais chances de ganhar rich results, manter consistência entre
                        seções e transmitir autoridade — mesmo em projetos menores.
                    </p>

                    <p>
                        Ao aplicar essas camadas de forma consciente, você transforma seu projeto em algo que não só
                        funciona, mas se destaca. A busca entende melhor o propósito da página, o usuário navega com
                        mais conforto e o desenvolvimento se torna mais organizado e escalável. Isso cria um ciclo
                        positivo de qualidade para toda a aplicação.
                    </p>

                    <p>
                        Aproveite os recursos nativos do Next.js, use a semântica ao seu favor e trate o SEO como
                        parte da arquitetura — não como um adendo final. O resultado é um site bonito, rápido,
                        tecnicamente competente e, acima de tudo, fácil de ser encontrado.
                    </p>

                    <p>
                        Continue refinando sua abordagem, testando melhorias e explorando o potencial do App Router.
                        O futuro do seu SEO começa nas pequenas escolhas que você faz em cada componente.
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
