import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import GameDevelopment from "@/components/GameDevelopment";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <FadeIn delay={0}>
        <Hero />
      </FadeIn>
      <FadeIn delay={0.15}>
        <Projects />
      </FadeIn>
      <FadeIn delay={0.3}>
        <GameDevelopment />
      </FadeIn>
      <FadeIn delay={0.45}>
        <Resume />
      </FadeIn>
      <FadeIn delay={0.6}>
        <Contact />
      </FadeIn>
    </main>
  );
}
