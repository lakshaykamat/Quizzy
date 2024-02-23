import Quiz from "@/app/models/Quiz";
import { connectMongodb } from "@/lib/mongodb";
import { QuizType } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import validateQuizId from "./validateQuizId";
import { shuffleArray } from "@/lib/utils";
import { UserResponse, RequestBody } from "./postRequestBody";
import getRightAnswer from "./getRightAnswer";
import Game from "@/app/models/Game";

export async function GET(req: any, res: NextApiResponse) {
  try {
    await connectMongodb();

    const { id, limit } = extractQueryFromRequest(req);

    if (!id) {
      return NextResponse.json(
        {
          isError: true,
          message: "Specify 'id' in the query parameters",
        },
        {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { isExist, quiz } = await validateQuizId(id);

    if (!isExist) {
      console.log(quiz);
      return NextResponse.json(
        {
          quiz,
          isError: true,
          message: "Quiz doesn't exist with this id",
        },
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Simplify the shuffling logic
    const shuffledQuestionsList = shuffleArray(quiz?.questionsList || []).slice(
      0,
      limit
    );
    shuffledQuestionsList.forEach((question) => {
      question.options = shuffleArray(question.options);
    });

    return NextResponse.json(
      {
        quizId: quiz?._id,
        name: quiz?.name,
        questionsList: shuffledQuestionsList,
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      isError: true,
      message: "Internal Server Error",
    });
  }
}

export async function POST(req: any, res: NextApiResponse) {
  try {
    await connectMongodb();
    //@ts-ignore
    const data: RequestBody = await req.json();
    const userResponse: UserResponse[] = data.userResponse;

    const { isExist, quiz } = await validateQuizId(data.quizId);

    if (!isExist || !quiz) {
      return NextResponse.json(
        {
          isError: true,
          message: "Quiz does not exist with this id",
        },
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    const userResult = await Promise.all(
      userResponse.map(async (response) => {
        const rightAnswer = await getRightAnswer(
          response.question.id,
          data.quizId
        );
        if (!rightAnswer)
          return {
            ...response,
            rightAnswer: null,
            isCorrect: null,
          };

        return {
          ...response,
          rightAnswer,
          isCorrect: rightAnswer === response.userChoice,
        };
      })
    );

    if (!userResult) {
      return NextResponse.json(
        {
          isError: true,
          message: "Something went wrong!",
        },
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    const totalScore = userResult.filter((result) => result?.isCorrect).length;
    const percentage = ((totalScore / userResponse.length) * 100).toFixed(2);

    const newGame = await Game.create({
      totalScore,
      percen: parseFloat(percentage),
      totalQuestions: userResponse.length,
      userId: "USER_ID",
      quizId: data.quizId,
      userResult,
    });
    return NextResponse.json(
      { game: newGame },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      isError: true,
      message: "Internal Server Error",
    });
  }
}

function extractQueryFromRequest(req: Request) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  return {
    id: params.get("id"),
    limit: parseInt(params.get("limit") || "10", 10),
  };
}
