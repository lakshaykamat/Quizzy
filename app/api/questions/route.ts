import { NextResponse } from "next/server";
import { connectMongodb } from "@/lib/mongodb";
import validateQuizId from "./helpers/validateQuizId";
import { UserResponse, RequestBody } from "./postRequestBody";
import createNewGame from "./helpers/createNewGame";
import createError from "./helpers/createError";
import HttpStatusCode from "./helpers/HttpStatusCode";
import shuffleQuestions from "./helpers/shuffleQuestions";
import calculateUserResult from "./helpers/calculateUserResult";
import areAllQuestionsPresent from "./helpers/areAllQuestionsPresent";
import calculateTotalScore from "./helpers/calculateTotalScore";
import calculatePercentage from "./helpers/calculatePercentage";
import extractQueryFromRequest from "./helpers/extractQueryFromRequest";

// Common response headers
const RESPONSE_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

/**
 * Handler for the GET request.
 *
 * @param {Request} req - The HTTP request object.
 * @returns {NextResponse} - The Next.js response object.
 */
export async function GET(req: Request) {
  try {
    // Connect to MongoDB
    await connectMongodb();

    // Extract parameters from the request
    const { id, limit } = extractQueryFromRequest(req);

    // Validate if 'id' is specified
    if (!id) {
      const error = createError(
        "Specify 'id' in query parameters",
        HttpStatusCode.BadRequest,
        RESPONSE_HEADERS
      );
      return NextResponse.json(error.messages, error.header);
    }

    // Validate if the quiz exists
    const { isExist, quiz } = await validateQuizId(id);
    if (!isExist || !quiz) {
      const error = createError(
        "Quiz doesn't exist with this id",
        HttpStatusCode.NotFound,
        RESPONSE_HEADERS
      );
      return NextResponse.json(error.messages, error.header);
    }

    // Shuffle questions and send response
    const shuffledQuestionsList = shuffleQuestions(quiz.questionsList, limit);
    return NextResponse.json(
      {
        quizId: quiz?._id,
        name: quiz?.name,
        questionsList: shuffledQuestionsList,
      },
      {
        status: 200,
        headers: RESPONSE_HEADERS,
      }
    );
  } catch (err) {
    // Handle errors and send an error response
    console.error("GET Error:", err);
    const error = createError(
      "Internal Server Error",
      HttpStatusCode.InternalServerError,
      RESPONSE_HEADERS
    );
    return NextResponse.json(error.messages, error.header);
  }
}

/**
 * Handler for the POST request.
 *
 * @param {Request} req - The HTTP request object.
 * @returns {NextResponse} - The Next.js response object.
 */
export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await connectMongodb();

    // Parse request body
    const data: RequestBody = await req.json();
    const userResponse: UserResponse[] = data.userResponse;

    // Validate if 'quizId' is specified
    if (!data.quizId) {
      const error = createError(
        "Specify 'quizId' in response",
        HttpStatusCode.BadRequest,
        RESPONSE_HEADERS
      );
      return NextResponse.json(error.messages, error.header);
    }

    // Validate if the quiz exists
    const { isExist, quiz } = await validateQuizId(data.quizId);
    if (!isExist || !quiz) {
      const error = createError(
        "Quiz does not exist with this id",
        HttpStatusCode.NotFound,
        RESPONSE_HEADERS
      );
      return NextResponse.json(error.messages, error.header);
    }

    // Check if all questions in the user response belong to the quiz
    const allQuestionsPresent = areAllQuestionsPresent(
      quiz.questionsList,
      userResponse
    );
    if (!allQuestionsPresent) {
      const error = createError(
        "QuizId doesn't belong to these questions",
        HttpStatusCode.BadRequest,
        RESPONSE_HEADERS
      );
      return NextResponse.json(error.messages, error.header);
    }

    // Calculate user result
    const userResult = await calculateUserResult(
      userResponse,
      data.quizId,
      quiz.questionsList
    );
    if (!userResult || userResult.length === 0) {
      const error = createError(
        "Error calculating user result",
        HttpStatusCode.InternalServerError,
        RESPONSE_HEADERS
      );
      return NextResponse.json(error.messages, error.header);
    }

    // Calculate total score and percentage
    const totalScore = calculateTotalScore(userResult);
    const percentage = calculatePercentage(totalScore, userResponse.length);

    // Create a new game
    const newGame = await createNewGame(
      data.quizId,
      totalScore,
      percentage,
      userResponse.length,
      userResult
    );

    // Send success response with the new game data
    return NextResponse.json(
      { game: newGame },
      {
        status: 200,
        headers: RESPONSE_HEADERS,
      }
    );
  } catch (err) {
    // Handle errors and send an error response
    console.error("POST Error:", err);
    const error = createError(
      "Internal Server Error",
      HttpStatusCode.InternalServerError,
      RESPONSE_HEADERS
    );
    return NextResponse.json(error.messages, error.header);
  }
}
