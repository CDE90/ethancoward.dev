import { getNowPlaying } from "~/lib/spotify";

export async function POST() {
  const nowPlaying = await getNowPlaying();

  return Response.json(nowPlaying);
}

export const dynamic = "force-dynamic";
export const runtime = "edge";
