"use client";

import { useTheme } from "next-themes";

export default function SpotifyEmbed() {
  const { resolvedTheme } = useTheme();
  const spotifyTheme = resolvedTheme === "dark" ? "0" : "1";

  return (
    <iframe
      key={spotifyTheme}
      src={`https://open.spotify.com/embed/playlist/2Ej33uxE883QVkUnZS8ozn?utm_source=generator&theme=${spotifyTheme}`}
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl"
    />
  );
}
