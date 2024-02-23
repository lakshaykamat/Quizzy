import Game from "@/app/models/Game";
import { connectMongodb } from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Props = {
  params: {
    gameId: string;
  };
};
export async function GET(req: Request, { params: { gameId } }: Props) {
  try {
    await connectMongodb();

    console.log(gameId);
    if (!gameId)
      return NextResponse.json({
        isError: true,
        message: "Specify game id in query",
      });
    const game = await Game.findById(gameId);
    console.log(gameId);
    return NextResponse.json({ game });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      isError: true,
      message: "Something went wrong!",
      err,
    });
  }
}
function extractQueryFromRequest(req: Request) {
  console.log(req.url);
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  return {
    id: params.get("id"),
  };
}
