import FadeIn from "@/components/FadeIn";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import { fetchLetterboxdFilms } from "@/lib/letterboxd";

export default async function InterestsPage() {
  const { films, fetchedAt } = await fetchLetterboxdFilms();

  return (
    <main>
      <FadeIn delay={0}>
        <section className="pt-16 pb-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-warm-700 dark:text-warm-200 mb-10">
            interests
          </h1>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-warm-700 dark:text-warm-200 mb-4">
            music
          </h3>

          <p className="text-[1.05rem] text-warm-500 dark:text-warm-400 mb-2">
            self-proclaimed music enthusiast; i don&apos;t think there is a specific favorite genre i have. here&apos;s a playlist that includes music from my &apos;Liked Songs&apos; playlist that i think are pretty interesting/fun to listen to (or just have a nostalgia factor)
          </p>
          <p className="text-sm text-warm-400/60 dark:text-warm-500/60 mb-6">
            (this might be out of date)
          </p>

          <SpotifyEmbed />
        </section>
      </FadeIn>

      <FadeIn delay={0.15}>
        <section className="py-10 border-t border-warm-200 dark:border-warm-600">
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-warm-700 dark:text-warm-200 mb-4">
            <a href="https://letterboxd.com/diminish/films/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
              films
            </a>
          </h3>

          <p className="text-[1.05rem] text-warm-500 dark:text-warm-400 mb-2">
            amateur cinephile; these are the most recent watched films and the review if i wrote one, sourced from my letterboxd feed.
          </p>
          <p className="text-sm text-warm-400/60 dark:text-warm-500/60 mb-6">
            (last sourced on: {fetchedAt})
          </p>

          <div className="grid grid-cols-4 gap-4">
            {films.map((film) => (
              <a
                key={film.link}
                href={film.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {film.poster && (
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="rounded-lg w-full aspect-[2/3] object-cover mb-2 group-hover:opacity-80 transition-opacity"
                  />
                )}
                <p className="text-sm font-medium text-warm-600 dark:text-warm-300 leading-tight">
                  {film.title}
                </p>
                <p className="text-xs text-warm-400 dark:text-warm-500">
                  {film.year} {film.rating && `· ${film.rating}`}
                </p>
                <p className="text-xs text-warm-400/60 dark:text-warm-500/60">
                  {film.watchedDate}
                </p>
                {film.review && (
                  <p className="text-xs text-warm-400 dark:text-warm-500 mt-1 line-clamp-3">
                    {film.review}
                  </p>
                )}
              </a>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
