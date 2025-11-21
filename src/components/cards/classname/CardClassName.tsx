interface CardClassNameProps {
    /**
     * Texto ou conteúdo descritivo que será exibido dentro do card.
     */
    title: string;

    /**
     * Classe Tailwind que será aplicada ao card.
     * Exemplo: "border-collapse border border-gray-500"
     */
    className?: string;
}

export default function CardClassName({ title, className }: CardClassNameProps) {
    return (
        <div className={`p-4 rounded-lg bg-white text-gray-800 shadow-md space-y-2 ${className}`}>
            <h2 className="text-lg font-semibold">{title}</h2>

            {/* Exibição das classes aplicadas */}
            {className && (
                <pre className="bg-gray-100 p-3 rounded text-sm text-gray-700 overflow-auto border border-gray-300">
                    <code>{className}</code>
                </pre>
            )}
        </div>
    );
}
