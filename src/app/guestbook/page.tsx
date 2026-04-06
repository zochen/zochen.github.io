import FadeIn from "@/components/FadeIn";
import Guestbook from "@/components/Guestbook";

export default function GuestbookPage() {
  return (
    <main>
      <FadeIn delay={0}>
        <section className="pt-16 pb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-warm-700 dark:text-warm-200 mb-4">
            guestbook
          </h1>
          <p className="text-[1.05rem] text-warm-500 dark:text-warm-400 mb-10">
            leave a message! i&apos;d love to hear from you. :D
          </p>
        </section>
      </FadeIn>
      <FadeIn delay={0.15}>
        <Guestbook />
      </FadeIn>
    </main>
  );
}
