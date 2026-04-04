import Gallery from "@/components/Gallery";
import FadeIn from "@/components/FadeIn";

export default function GalleryPage() {
  return (
    <main>
      <FadeIn delay={0}>
        <section className="pt-16 pb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-warm-700 dark:text-warm-200 mb-6">
            gallery
          </h1>
          <p className="text-[1.05rem] text-warm-500 dark:text-warm-400 mb-10">
            a collection of images i took from my high school 3d art classes. i wish i took more!
          </p>
        </section>
      </FadeIn>
      <FadeIn delay={0.15}>
        <Gallery />
      </FadeIn>
    </main>
  );
}
