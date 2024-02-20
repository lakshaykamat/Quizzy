import Quiz from "@/app/models/Quiz";
import { connectMongodb } from "@/lib/mongodb";
import { QuizType } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongodb();

    const { id, limit } = extractQueryFromRequest(req);

    if (!id) {
      return NextResponse.json({
        isError: true,
        message: "Specify 'id' in the query parameters",
      });
    }

    const { isExist, quiz } = await validateQuizId(id);

    if (!isExist) {
      return NextResponse.json({
        isError: true,
        message: "Quiz doesn't exist with this id",
      });
    }

    let questionsList = quiz?.questionsList || [];

    // Shuffle the questions list using the Fisher-Yates shuffle algorithm
    questionsList = shuffleArray(questionsList);

    // Apply the limit to the shuffled questions list
    const limitedQuestionsList = questionsList.slice(0, limit);

    return NextResponse.json({
      name: quiz?.name,
      questionsList: limitedQuestionsList,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      isError: true,
      message: "Internal Server Error",
    });
  }
}

function extractQueryFromRequest(req: NextApiRequest) {
  const url = new URL(`http://localhost${req.url}`);
  const params = new URLSearchParams(url.search);
  return {
    id: params.get("id"),
    limit: parseInt(params.get("limit") || "10", 10),
  };
}

async function validateQuizId(
  id: string
): Promise<{ isExist: boolean; quiz: QuizType | null }> {
  try {
    const quiz = await Quiz.findById(id);
    console.log(quiz);

    return { isExist: !!quiz, quiz };
  } catch (error) {
    console.error("Error validating quiz id:", error);
    return { isExist: false, quiz: null };
  }
}

function shuffleArray<T>(array: T[]): T[] {
  // Fisher-Yates (Knuth) shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
