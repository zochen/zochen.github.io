export interface SteamGame {
  name: string;
  appid: number;
  playtimeHours: number;
  iconUrl: string;
  headerUrl: string;
}

export async function fetchTopSteamGames(limit = 5): Promise<SteamGame[]> {
  const key = process.env.STEAM_API_KEY;
  if (!key) return [];

  const steamId = "76561198995905827";
  const res = await fetch(
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${steamId}&format=json&include_appinfo=1&include_played_free_games=1`,
    { next: { revalidate: false } }
  );
  const data = await res.json();
  const games = data.response?.games ?? [];

  // Sort by playtime descending and take top N
  const sorted = games
    .sort((a: { playtime_forever: number }, b: { playtime_forever: number }) =>
      b.playtime_forever - a.playtime_forever
    )
    .slice(0, limit);

  return sorted.map((game: { name: string; appid: number; playtime_forever: number; img_icon_url: string }) => ({
    name: game.name,
    appid: game.appid,
    playtimeHours: Math.round(game.playtime_forever / 60),
    iconUrl: `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
    headerUrl: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`,
  }));
}
