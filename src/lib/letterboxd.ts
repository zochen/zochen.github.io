export interface LetterboxdFilm {
  title: string;
  year: string;
  rating: string;
  poster: string;
  link: string;
  watchedDate: string;
  review: string;
}

export async function fetchLetterboxdFilms(limit = 8): Promise<{ films: LetterboxdFilm[]; fetchedAt: string }> {
  const res = await fetch("https://letterboxd.com/diminish/rss/", {
    next: { revalidate: false },
  });
  const xml = await res.text();

  const films: LetterboxdFilm[] = [];
  const items = xml.split("<item>").slice(1);

  for (const item of items.slice(0, limit)) {
    const filmTitle = item.match(/<letterboxd:filmTitle>(.*?)<\/letterboxd:filmTitle>/)?.[1] ?? "";
    const filmYear = item.match(/<letterboxd:filmYear>(.*?)<\/letterboxd:filmYear>/)?.[1] ?? "";
    const memberRating = item.match(/<letterboxd:memberRating>(.*?)<\/letterboxd:memberRating>/)?.[1] ?? "";
    const link = item.match(/<link>(.*?)<\/link>/)?.[1] ?? "";
    const watchedDate = item.match(/<letterboxd:watchedDate>(.*?)<\/letterboxd:watchedDate>/)?.[1] ?? "";
    const poster = item.match(/<img src="(.*?)"/)?.[1] ?? "";

    // Extract review text from description CDATA
    const descMatch = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ?? "";
    // Remove img tags and "This review may contain spoilers" text
    let review = descMatch
      .replace(/<p><img[^>]*\/><\/p>/g, "")
      .replace(/<p><em>This review may contain spoilers\.<\/em><\/p>/g, "")
      .replace(/<\/?p>/g, "")
      .replace(/Watched on .*\./g, "")
      .trim();

    // Convert numeric rating to stars
    const ratingNum = parseFloat(memberRating);
    let stars = "";
    if (ratingNum) {
      const full = Math.floor(ratingNum);
      const half = ratingNum % 1 >= 0.5;
      stars = "★".repeat(full) + (half ? "½" : "");
    }

    films.push({
      title: filmTitle.replace(/&#039;/g, "'").replace(/&amp;/g, "&"),
      year: filmYear,
      rating: stars,
      poster,
      link,
      watchedDate,
      review,
    });
  }

  const now = new Date();
  const fetchedAt = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return { films, fetchedAt };
}
