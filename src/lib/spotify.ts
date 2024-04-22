import "server-only";

/*
  Credit: https://github.com/ivenuss/jakubh.com/blob/01acf4a15826229a56bc304d28437f07583b92ee/src/lib/server/spotify.ts
  Getting refresh token: https://khalilstemmler.com/articles/tutorials/getting-the-currently-playing-song-spotify/
*/

import { Buffer } from "node:buffer";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

type TokenResponse = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
};

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json() as Promise<TokenResponse>;
}

export type NowPlaying = {
  isPlaying: boolean;
  albumArt?: string;
  artist?: string;
  songUrl?: string;
  songName?: string;
  progress_ms?: number;
  duration_ms?: number;
};

export async function getNowPlaying() {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }

  const data = (await response.json()) as {
    item: {
      album: {
        images: { url: string }[];
      };
      artists: { name: string }[];
      name: string;
      duration_ms: number;
      external_urls: { spotify: string };
    };
    progress_ms: number;
    is_playing: boolean;
    currently_playing_type: string;
  };

  if (data.currently_playing_type === "ad") {
    return { isPlaying: false };
  }

  const albumArt = data.item.album.images[0]?.url;
  const artist = data.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const songUrl = data.item.external_urls.spotify;
  const songName = data.item.name;
  const progress_ms = data.progress_ms;
  const duration_ms = data.item.duration_ms;

  return {
    albumArt,
    artist,
    isPlaying: true,
    songUrl,
    songName,
    progress_ms,
    duration_ms,
  } as NowPlaying;
}
