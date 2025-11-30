"use client";

import { useEffect, useState } from "react";

export default function PoliticaDeCookies() {
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
        <section className="space-y-8 text-gray-800">
            <header>
                <h1 className="text-3xl font-bold">Política de Cookies</h1>
                <p className="text-sm text-gray-600">
                    Última atualização: <strong>{currentDate}</strong>
                </p>

                <p className="mt-2 text-lg text-gray-600">
                    Esta Política de Cookies explica como o Windly utiliza cookies e tecnologias semelhantes
                    para melhorar sua experiência, analisar desempenho e oferecer funcionalidades importantes.
                </p>
            </header>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">1. O que são cookies?</h2>
                <p>
                    Cookies são pequenos arquivos armazenados no seu navegador quando você visita um site.
                    Eles servem para lembrar suas preferências, melhorar o funcionamento das páginas,
                    personalizar conteúdos e ajudar a entender como você usa o site.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">2. Por que usamos cookies?</h2>
                <p>O Windly utiliza cookies para:</p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Garantir funções essenciais do site;</li>
                    <li>Entender como os visitantes navegam e interagem;</li>
                    <li>Aprimorar nosso conteúdo e desempenho;</li>
                    <li>Exibir anúncios mais relevantes (quando permitido);</li>
                    <li>Guardar suas preferências de consentimento.</li>
                </ul>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">3. Tipos de cookies usados</h2>

                <h3 className="text-xl font-medium">3.1. Cookies essenciais</h3>
                <p>
                    Necessários para que o site funcione corretamente. Eles garantem recursos como navegação,
                    carregamento de páginas e segurança. Esses cookies não podem ser desativados.
                </p>

                <h3 className="text-xl font-medium">3.2. Cookies de análise</h3>
                <p>
                    Utilizados para entender o comportamento dos visitantes. Com eles avaliamos páginas mais
                    acessadas, tempo de permanência e melhorias possíveis. Somente são ativados com sua permissão.
                </p>

                <h3 className="text-xl font-medium">3.3. Cookies de publicidade</h3>
                <p>
                    Ajudam a exibir anúncios mais relevantes para você, melhorando a experiência com conteúdos
                    patrocinados. São utilizados por serviços como o Google AdSense. Só funcionam após seu consentimento.
                </p>

                <h3 className="text-xl font-medium">3.4. Cookies de personalização</h3>
                <p>
                    Usados para lembrar preferências como idioma, tema e configurações do site. Dependem da sua escolha.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">4. Consentimento e controle</h2>

                <p>
                    Quando você acessa o Windly pela primeira vez, exibimos um aviso solicitando seu consentimento
                    para o uso de cookies. Você pode aceitar todos, recusar ou escolher manualmente suas preferências.
                </p>

                <p>
                    Suas escolhas são salvas no navegador e podem ser alteradas a qualquer momento através do
                    botão “Revisar cookies”, disponível no rodapé ou no aviso inicial.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">5. Cookies de terceiros</h2>
                <p>
                    Alguns serviços externos que usamos — como Google Analytics e Google AdSense — podem instalar
                    seus próprios cookies. Cada provedor possui políticas próprias que recomendamos consultar.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">6. Como desativar cookies no navegador</h2>

                <p>Você pode gerenciar ou bloquear cookies diretamente no seu navegador:</p>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies.</li>
                    <li><strong>Mozilla Firefox:</strong> Preferências → Privacidade e segurança.</li>
                    <li><strong>Safari:</strong> Ajustes → Privacidade e segurança.</li>
                    <li><strong>Microsoft Edge:</strong> Configurações → Cookies e permissões.</li>
                </ul>

                <p>
                    Desativar certos cookies pode afetar algumas funções do site, mas você sempre terá controle
                    total sobre sua privacidade.
                </p>
            </article>

            <article className="space-y-6">
                <h2 className="text-2xl font-semibold">7. Atualizações desta política</h2>
                <p>
                    Podemos atualizar esta Política de Cookies para refletir melhorias, mudanças legais ou ajustes
                    feitos em nossas ferramentas. Recomendamos revisitar esta página periodicamente.
                </p>
            </article>
        </section>
    );
}
