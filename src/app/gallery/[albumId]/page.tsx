import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import AlbumGallery from "@/components/AlbumGallery";
import { galleryAlbums } from "@/data/gallery";

export function generateStaticParams() {
  return galleryAlbums.map((album) => ({ albumId: album.id }));
}

export default async function AlbumPage({ params }: { params: Promise<{ albumId: string }> }) {
  const { albumId } = await params;
  const album = galleryAlbums.find((a) => a.id === albumId);
  if (!album) notFound();

  return (
    <main>
      <FadeIn delay={0}>
        <section className="pt-16 pb-8">
          <a
            href="/gallery"
            className="text-sm text-warm-400 hover:text-warm-600 dark:hover:text-warm-300 transition-colors mb-6 inline-block"
          >
            &larr; back to gallery
          </a>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-warm-700 dark:text-warm-200 mb-4">
            {album.title}
          </h1>
          {album.description && (
            <p className="text-[1.05rem] text-warm-500 dark:text-warm-400 mb-10">
              {album.description}
            </p>
          )}
        </section>
      </FadeIn>
      <FadeIn delay={0.15}>
        <AlbumGallery images={album.images} />
      </FadeIn>
    </main>
  );
}
