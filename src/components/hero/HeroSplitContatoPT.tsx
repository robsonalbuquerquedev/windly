"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSplitContato() {
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f",
                {
                    method: "POST",
                    body: formData, // ❗ sem headers customizados — igual ao exemplo que funciona
                }
            );

            setIsSending(false);
            setSent(response.ok);

            if (response.ok) {
                form.reset();
            }
        } catch (error) {
            setIsSending(false);
            setSent(false);
        }
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LADO ESQUERDO — história pessoal */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                    Fale diretamente comigo
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed">
                    O Windly não é um time — é um projeto construído por uma única pessoa,
                    com carinho, estudo e muita prática real. Tudo o que você vê aqui
                    nasceu da minha experiência construindo projetos, estudando padrões
                    modernos e buscando sempre clareza, organização e evolução.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Se você quiser compartilhar uma ideia, sugerir algo, relatar um problema
                    ou simplesmente conversar, sua mensagem vai chegar diretamente até mim.
                    Eu leio tudo com atenção e respondo o mais rápido possível.
                </p>

                <p className="text-gray-600">
                    Obrigado por fazer parte dessa jornada e por apoiar o crescimento do Windly 💙
                </p>
            </motion.div>

            {/* LADO DIREITO — formulário */}
            <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/60"
            >
                {/* Feedback de sucesso */}
                {sent && (
                    <div className="text-green-600 font-semibold text-center">
                        Sua mensagem foi enviada com sucesso! Obrigado! 🌟
                    </div>
                )}

                {/* Nome */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium text-gray-800">
                        Seu nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Digite seu nome"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-gray-800">
                        Seu email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                    />
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-medium text-gray-800">
                        Sua mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Como posso te ajudar?"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none resize-none"
                    ></textarea>
                </div>

                {/* Botão */}
                <button
                    type="submit"
                    disabled={isSending}
                    className="
                        w-full p-3
                        bg-gradient-to-r from-indigo-500 to-sky-500
                        text-white font-semibold rounded-lg
                        hover:opacity-90 transition
                        shadow-md shadow-indigo-200
                        cursor-pointer
                        flex items-center justify-center gap-2
                    "
                >
                    {isSending ? "Enviando..." : "Enviar mensagem"}
                </button>

                {/* Configuração FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </section>
    );
}
