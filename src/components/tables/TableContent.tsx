import CardClassName from "@/components/cards/classname/CardClassName";

export default function CardTable() {
    return (
        <div className="space-y-12 p-6">
            {/* BORDER COLLAPSE */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">1. border-collapse</h2>
                <p>
                    Este modo “gruda” as bordas da tabela, deixando tudo mais compacto.
                </p>

                <table className="border-collapse border border-gray-500">
                    <thead>
                        <tr>
                            <th className="border p-2">Nome</th>
                            <th className="border p-2">Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Robson</td>
                            <td className="border p-2">27</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* BORDER SPACING */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">2. border-spacing</h2>
                <p>
                    Adiciona espaço entre as células da tabela. Funciona apenas quando usamos
                    <code className="px-1">border-separate</code>.
                </p>

                <table className="border-separate border-spacing-4 border border-gray-500">
                    <thead>
                        <tr>
                            <th className="border p-2">Nome</th>
                            <th className="border p-2">Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Robson</td>
                            <td className="border p-2">27</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* TABLE LAYOUT */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">3. table-layout</h2>
                <p>
                    Controla como o navegador calcula a largura das colunas.
                </p>

                <table className="table-fixed w-full border border-gray-500">
                    <thead>
                        <tr>
                            <th className="border p-2 w-32">Tipo</th>
                            <th className="border p-2">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Fixed</td>
                            <td className="border p-2">
                                A utilidade “table-fixed” faz com que as colunas respeitem larguras definidas.
                            </td>
                        </tr>
                        <tr>
                            <td className="border p-2">Auto</td>
                            <td className="border p-2">
                                A utilidade “table-auto” deixa o navegador decidir automaticamente a largura das colunas.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* CAPTION SIDE */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">4. caption-side</h2>
                <p>
                    Define onde a legenda (título) da tabela vai aparecer.
                </p>

                <table className="border border-gray-500">
                    <caption className="caption-top p-2 font-semibold">
                        Lista de Estudantes
                    </caption>
                    <thead>
                        <tr>
                            <th className="border p-2">Nome</th>
                            <th className="border p-2">Idade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">Robson</td>
                            <td className="border p-2">27</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <CardClassName
                title="Exemplo de classes para tabela"
                className="border-collapse border border-gray-500"
            />

            <CardClassName
                title="Outro exemplo"
                className="border-separate border-spacing-4 border border-gray-500"
            />

            <CardClassName
                title="Largura fixa"
                className="table-fixed w-full border border-gray-500"
            />

            <CardClassName
                title="Borda simples"
                className="border border-gray-500"
            />

            <CardClassName
                title="Legenda no topo"
                className="caption-top p-2 font-semibold"
            />
        </div>
    );
}
