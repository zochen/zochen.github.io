import FadeIn from "@/components/FadeIn";
import { galleryAlbums } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main>
      <FadeIn delay={0}>
        <section className="pt-16 pb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-warm-700 dark:text-warm-200 mb-10">
            gallery
          </h1>

          <div className="grid grid-cols-2 gap-6">
            {galleryAlbums.map((album) => (
              <a
                key={album.id}
                href={`/gallery/${album.id}`}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-medium text-warm-700 dark:text-warm-200">
                  {album.title}
                </h2>
                {album.description && (
                  <p className="text-sm text-warm-400 dark:text-warm-500 mt-1">
                    {album.description}
                  </p>
                )}
                <p className="text-xs text-warm-400/60 dark:text-warm-500/60 mt-1">
                  {album.images.length} photos
                </p>
              </a>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
