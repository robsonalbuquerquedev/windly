"use client";

import { useEffect, useState } from "react";

export default function PoliticaDePrivacidade() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        const formatted = date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
        setCurrentDate(formatted);
    }, []);

    return (
        <article className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">
                    Política de Privacidade
                </h1>

                <p className="text-sm text-gray-600">
                    Última atualização: <strong>{currentDate}</strong>
                </p>
            </header>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    1. Introdução
                </h2>
                <p>
                    Esta Política de Privacidade descreve como coletamos, usamos e
                    protegemos as informações fornecidas por você ao utilizar o Windly.
                    Nosso compromisso é garantir transparência e segurança ao navegar em
                    nosso site.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    2. Coleta de Informações
                </h2>
                <p>
                    Podemos coletar informações pessoais fornecidas diretamente por você,
                    como nome e e-mail quando você interage com formulários. Também
                    coletamos dados automaticamente, como endereço IP, tipo de navegador e
                    páginas visitadas, para fins estatísticos e de melhoria do site.
                </p>
                <p>
                    Cookies podem ser usados para melhorar sua experiência. Você pode
                    desativá-los no seu navegador, se desejar.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    3. Publicidade e Anúncios (Google AdSense)
                </h2>
                <p>
                    Exibimos anúncios fornecidos por terceiros, incluindo o Google
                    AdSense. Esses parceiros podem usar cookies, como o DART, para exibir
                    anúncios baseados nas suas visitas anteriores ao nosso ou a outros
                    sites.
                </p>
                <p>
                    Você pode desativar o uso do cookie DART acessando as configurações de
                    anúncios do Google.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    4. Links para Sites Externos e Programas de Afiliados
                </h2>
                <p>
                    O Windly participa de programas de afiliados, como Hotmart, Monetizze,
                    Eduzz, Amazon, Mercado Livre e Shopee. Isso significa que podemos
                    receber uma comissão quando você compra por meio dos links que
                    disponibilizamos.
                </p>
                <p>
                    Embora selecionemos cuidadosamente todas as recomendações, não temos
                    controle sobre o conteúdo, segurança ou práticas de privacidade desses
                    sites externos.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    5. Uso das Informações
                </h2>
                <p>As informações coletadas podem ser utilizadas para:</p>

                <ul className="list-disc list-inside space-y-1">
                    <li>Melhorar a experiência do usuário;</li>
                    <li>Personalizar conteúdos exibidos;</li>
                    <li>Enviar atualizações e comunicações;</li>
                    <li>Análises internas e métricas de desempenho;</li>
                    <li>Operação de anúncios e links de afiliados.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    6. Segurança dos Dados
                </h2>
                <p>
                    Implementamos medidas técnicas para proteger suas informações contra
                    perda, uso indevido ou acesso não autorizado. No entanto, nenhum
                    sistema digital é totalmente seguro, e recomendamos cautela ao
                    compartilhar dados pela internet.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    7. Alterações nesta Política
                </h2>
                <p>
                    Esta Política pode ser atualizada periodicamente para refletir mudanças
                    legais ou operacionais. A data de atualização acima sempre mostrará a
                    versão mais recente.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    8. Contato
                </h2>
                <p>
                    Se tiver dúvidas sobre esta Política de Privacidade, entre em contato
                    conosco pela página de Contato no menu principal.
                </p>
            </section>
        </article>
    );
}
