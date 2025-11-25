"use client";

import { useEffect, useState } from "react";

export default function TermosDeUso() {
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
                <h1 className="text-3xl font-bold text-gray-900">Termos de Uso</h1>

                <p className="text-sm text-gray-600">
                    Última atualização: <strong>{currentDate}</strong>
                </p>
            </header>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">1. Aceitação</h2>
                <p>
                    Ao acessar o Windly, você concorda em cumprir estes Termos de Uso e
                    todas as leis e regulamentações aplicáveis. Caso não concorde com
                    qualquer um dos termos, recomendamos que não utilize nosso site.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    2. Responsabilidade do Usuário
                </h2>
                <p>
                    Você concorda em utilizar o site de forma ética e segura, sem violar
                    leis, direitos de terceiros ou comprometer o funcionamento do sistema.
                    É proibido tentar acessar áreas restritas, distribuir vírus ou
                    qualquer conteúdo malicioso.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    3. Conteúdo e Propriedade Intelectual
                </h2>
                <p>
                    Todo o conteúdo publicado no Windly, incluindo textos, códigos,
                    gráficos, imagens e tutoriais, é protegido por direitos autorais. Você
                    pode consultar, estudar e aplicar os conhecimentos, mas não é
                    permitido copiar, republicar ou distribuir o conteúdo sem autorização.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    4. Programas de Afiliados
                </h2>
                <p>
                    Participamos de programas de afiliados como Hotmart, Monetizze,
                    Eduzz, Amazon, Mercado Livre e Shopee. Ao clicar em nossos links e
                    realizar uma compra, podemos receber uma comissão, sem custo adicional
                    para você.
                </p>
                <p>
                    Embora recomendemos produtos com cuidado, não nos responsabilizamos
                    por compras feitas em sites externos.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    5. Anúncios e Publicidade (Google AdSense)
                </h2>
                <p>
                    Utilizamos publicidade fornecida por terceiros, incluindo Google
                    AdSense. Esses serviços podem usar cookies para exibir anúncios
                    personalizados com base em suas visitas anteriores ao nosso site ou a
                    outros sites.
                </p>
                <p>
                    Você pode desativar anúncios personalizados acessando as configurações
                    de anúncios do Google.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    6. Limitação de Responsabilidade
                </h2>
                <p>
                    Embora nos esforcemos para manter informações atualizadas e
                    precisas, não garantimos que todo o conteúdo estará sempre livre de
                    erros. O Windly não se responsabiliza por decisões tomadas com base
                    nas informações aqui apresentadas.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">
                    7. Alterações nos Termos
                </h2>
                <p>
                    Podemos atualizar estes Termos de Uso periodicamente para refletir
                    mudanças legais, técnicas ou de funcionamento do site. A data de
                    atualização sempre indicará a versão mais recente.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800">8. Contato</h2>
                <p>
                    Caso tenha dúvidas sobre estes Termos de Uso, entre em contato pela
                    página de Contato disponível no menu principal.
                </p>
            </section>
        </article>
    );
}
