import HeroSplitSobreEN from "@/components/hero/HeroSplitSobreEN";
import CardLayout from "@/components/layout/CardLayout";
import CardProjectEN from "@/components/cards/CardProjectEN";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Windly — History, Purpose and Professionalism",
  },

  description:
    "Learn the story behind Windly: a project built from real-world experience with Next.js, TailwindCSS and SEO. Discover how it was born from practice, organization and the desire to share clear, professional knowledge.",

  keywords: [
    "About Windly",
    "Windly History",
    "TailwindCSS",
    "Next.js",
    "SEO",
    "Web Development",
    "Semantic HTML",
    "Best Practices",
    "Web Projects",
  ],

  alternates: {
    canonical: "https://windly.com.br/en/about",
    languages: {
      "en-US": "https://windly.com.br/en/about",
      "pt-BR": "https://windly.com.br/pt/sobre",
    },
  },

  openGraph: {
    title: "About Windly — Origin, Purpose and Projects",
    description:
      "Understand the origin of Windly, its purpose and the projects that shaped its creation. A platform built with organization, clarity and best practices using Next.js and TailwindCSS.",
    url: "https://windly.com.br/en/about",
    siteName: "Windly",
    images: [
      {
        url: "/hero-windly.png",
        width: 1200,
        height: 630,
        alt: "Windly About Page Hero Image",
      },
    ],
    type: "website",
  },
};

export default function Sobre() {
  return (
    <>
      <HeroSplitSobreEN />
      <CardLayout id="see-projects">
        <CardProjectEN />
      </CardLayout>
    </>
  );
}
