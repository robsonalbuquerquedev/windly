"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSplitContatoEN() {
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
                    body: formData,
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
            {/* LEFT SIDE — personal introduction */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                    Talk directly to me
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed">
                    Windly isn’t a team — it’s a project built by a single person, with dedication,
                    study, and a lot of real practice. Everything you see here was created from my
                    experience building projects, studying modern patterns, and constantly seeking
                    clarity, organization, and evolution.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    If you want to share an idea, suggest something, report an issue, or simply talk,
                    your message will come straight to me. I read everything carefully and reply as
                    soon as possible.
                </p>

                <p className="text-gray-600">
                    Thank you for being part of this journey and for supporting Windly’s growth 💙
                </p>
            </motion.div>

            {/* RIGHT SIDE — form */}
            <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/60"
            >
                {/* Success message */}
                {sent && (
                    <div className="text-green-600 font-semibold text-center">
                        Your message has been sent successfully! Thank you! 🌟
                    </div>
                )}

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium text-gray-800">
                        Your name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-medium text-gray-800">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="yourmail@example.com"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-medium text-gray-800">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="How can I help you?"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none resize-none"
                    ></textarea>
                </div>

                {/* Button */}
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
                    {isSending ? "Sending..." : "Send message"}
                </button>

                {/* FormSubmit config */}
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </section>
    );
}
