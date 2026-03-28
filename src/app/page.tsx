import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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
        <Resume />
      </FadeIn>
      <FadeIn delay={0.45}>
        <Contact />
      </FadeIn>
    </main>
  );
}
