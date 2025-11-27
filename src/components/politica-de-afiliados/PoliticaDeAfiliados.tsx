"use client";

import { useEffect, useState } from "react";

export default function PoliticaDeAfiliados() {
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
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-6 text-gray-800">
            <h1 className="text-3xl font-bold">Política de Afiliados</h1>
            <p className="text-sm text-gray-600">
                Última atualização: <strong>{currentDate}</strong>
            </p>

            <p>
                Esta Política de Afiliados descreve como os links de afiliado são utilizados no
                site Windly (windly.com.br), garantindo total transparência para nossos
                usuários.
            </p>

            <h2 className="text-xl font-semibold">1. O que são links de afiliados?</h2>
            <p>
                Links de afiliados são URLs especiais que direcionam para produtos ou
                serviços oferecidos por plataformas como Amazon, Mercado Livre, Shopee e
                outros parceiros comerciais. Quando você clica em um desses links e realiza
                uma compra, podemos receber uma pequena comissão sem que isso altere o valor
                final do produto para você.
            </p>

            <h2 className="text-xl font-semibold">2. Como usamos links de afiliados</h2>
            <p>
                Os links de afiliados são inseridos em conteúdos como recomendações,
                análises, listas de produtos e artigos específicos. Todos os produtos
                indicados são selecionados com base em utilidade, qualidade e relevância
                para o público do Windly.
            </p>

            <h2 className="text-xl font-semibold">3. Transparência com o usuário</h2>
            <p>
                Sempre que um link de afiliado estiver presente, deixaremos claro no
                contexto da recomendação ou nas páginas específicas que utilizamos programas
                de afiliados. A sua experiência permanece a mesma — o uso desses links não
                aumenta o preço do produto.
            </p>

            <h2 className="text-xl font-semibold">4. Programas de afiliados utilizados</h2>
            <ul className="list-disc pl-5 space-y-1">
                <li>Amazon Afiliados</li>
                <li>Mercado Livre Afiliados</li>
                <li>Shopee Afiliados</li>
                <li>Hotmart Afiliados</li>
            </ul>

            <h2 className="text-xl font-semibold">5. Independência editorial</h2>
            <p>
                A participação em programas de afiliados não interfere em nossas opiniões ou
                recomendações. Mantemos total independência editorial e sugerimos produtos
                que realmente acreditamos que possam ajudar nossos leitores.
            </p>

            <h2 className="text-xl font-semibold">6. Atualizações desta política</h2>
            <p>
                Esta Política de Afiliados pode ser atualizada periodicamente para refletir
                mudanças nos programas de afiliados ou nas práticas do site. Recomendamos
                que você revise esta página regularmente.
            </p>

            <h2 className="text-xl font-semibold">7. Contato</h2>
            <p>
                Se tiver dúvidas sobre esta política, entre em contato pela página de Contato disponível no menu principal.
            </p>
        </section>
    );
}