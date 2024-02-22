import Game from "@/app/models/Game";
import Quiz from "@/app/models/Quiz";
import { connectMongodb } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: any, res: NextApiResponse) {
  try {
    await connectMongodb();
    const { id } = extractQueryFromRequest(req);
    if (!id)
      return NextResponse.json({
        isError: true,
        message: "Specify game id in query",
      });
    const game = await Game.findById(id);
    return NextResponse.json({ game });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      isError: true,
      message: "Something went wrong!",
    });
  }
}
function extractQueryFromRequest(req: NextApiRequest) {
  const url = new URL(`http://localhost${req.url}`);
  const params = new URLSearchParams(url.search);
  return {
    id: params.get("id"),
  };
}
