import Quiz from "@/app/models/Quiz";
import { connectMongodb } from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  try {
    await connectMongodb();
    const quizes = await Quiz.find();
    return NextResponse.json(
      { quizes },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": req.headers.get("origin") || "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      isError: true,
      message: "Something went wrong!",
    });
  }
}
