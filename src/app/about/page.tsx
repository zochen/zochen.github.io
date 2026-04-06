import About from "@/components/About";
import FadeIn from "@/components/FadeIn";
import LiveAge from "@/components/LiveAge";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <FadeIn delay={0}>
        <section className="pt-16 pb-8">
          <div className="flex items-center gap-8 mb-10">
            <Image
              src="/images/about-me.jpg"
              alt="Zoey Chen"
              width={140}
              height={140}
              className="rounded-full object-cover shrink-0"
            />
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl font-semibold text-warm-700 dark:text-warm-200">
                Zoey Chen <span className="text-3xl text-warm-400 dark:text-warm-500 font-normal">陳星怡</span>
              </h1>
              <p className="text-lg text-warm-400 dark:text-warm-400 mt-1">
                CSE @ UC Irvine &apos;29
              </p>
            </div>
          </div>
          <div className="text-[1.15rem] leading-[1.7] text-warm-500 dark:text-warm-400 space-y-6">
            <p>Thanks for visiting my website!</p>
            <p>
              My name is Zoey Chen. As of now, I&apos;m <LiveAge />{" "}years old. I&apos;m a freshman at University of California, Irvine studying Computer Science and Engineering. I was born and raised in San Jose, California!
            </p>
            <p>
              In my free time, I enjoy coding, art, music, and hanging out with friends (I&apos;ve picked up cafe-hopping recently). In these next few years, I hope to try as many new things as possible whether it be academics or interests.
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
