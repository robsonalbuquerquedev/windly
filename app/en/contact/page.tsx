import HeroSplitContatoEN from "@/components/hero/HeroSplitContatoEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact — Talk Directly With Me | Windly",
  },

  description:
    "Get in touch directly with me for questions, suggestions, feedback, or ideas about web development, Next.js, TailwindCSS, and the Windly project. I personally read and reply to every message.",

  keywords: [
    "Contact Windly",
    "Talk to me",
    "Web development contact",
    "Next.js",
    "TailwindCSS",
    "SEO",
    "Web Development",
    "Semantic HTML",
    "Best Practices",
    "Windly Support",
  ],

  alternates: {
    canonical: "https://windly.com.br/en/contact",
    languages: {
      "en-US": "https://windly.com.br/en/contact",
      "pt-BR": "https://windly.com.br/pt/contato",
    },
  },

  openGraph: {
    title: "Contact — Talk Directly With Me | Windly",
    description:
      "Send your message directly to me. Ask questions, share ideas, or send suggestions about Next.js, TailwindCSS, SEO, and the Windly project.",
    url: "https://windly.com.br/en/contact",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Illustrative image of the Windly Contact page",
      },
    ],
    type: "website",
  },
};

export default function ContatoPage() {
    return (
        <HeroSplitContatoEN />
    );
}
