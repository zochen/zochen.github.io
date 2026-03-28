import About from "@/components/About";
import FadeIn from "@/components/FadeIn";
import LiveAge from "@/components/LiveAge";

export default function AboutPage() {
  return (
    <main>
      <FadeIn delay={0}>
        <section className="pt-16 pb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-warm-700 dark:text-warm-200 mb-6">
            about me
          </h1>
          <div className="text-[1.15rem] leading-[1.7] text-warm-500 dark:text-warm-400 space-y-6">
            <p>Thanks for visiting my website!</p>
            <p>
              My name is Zoey Chen. As of now, I&apos;m <LiveAge />{" "}years old. I&apos;m currently a freshman at University of California, Irvine studying Computer Science and Engineering. My hometown is San Jose, CA.
            </p>
            <p>
              In my free time, I enjoy coding, art, music, and hanging out with friends. In these next few years, I hope to experience as many new things as possible.
            </p>
            <p>
              Feel free to reach out! I would love to talk to you. :D
            </p>
          </div>
        </section>
      </FadeIn>
      <FadeIn delay={0.15}>
        <About />
      </FadeIn>
    </main>
  );
}
