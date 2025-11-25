import HeroSplitAbout from "@/components/hero/HeroSplitAbout";
import CardLayout from "@/components/layout/CardLayout";
import CardProject from "@/components/cards/CardProject";

export default function About() {
  return (
    <>
      <HeroSplitAbout />
      <CardLayout id="ver-projetos">
        <CardProject />
      </CardLayout>
    </>
  );
}
