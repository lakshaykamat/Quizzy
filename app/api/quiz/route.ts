import Quiz from "@/app/models/Quiz";
import { connectMongodb } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: any, res: NextApiResponse) {
  try {
    await connectMongodb();
    const quizes = await Quiz.find();
    return NextResponse.json({ quizes });
  } catch (err) {}
}
