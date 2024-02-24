import getRightAnswer from "./getRightAnswer";
import { UserResponse } from "../postRequestBody";

/**
 * Helper function to calculate user results for a quiz.
 *
 * @param {UserResponse[]} userResponse - The array of user responses.
 * @param {string} quizId - The ID of the quiz for which results are being calculated.
 * @param {any[]} questionsList - The list of questions from the quiz.
 * @returns {Promise<any[]>} - A promise that resolves to an array of user results.
 */
async function calculateUserResult(
  userResponse: UserResponse[],
  quizId: string,
  questionsList: any[]
): Promise<any[]> {
  return Promise.all(
    userResponse.map(async (response) => {
      // Retrieve the correct answer for the current question
      const rightAnswer = await getRightAnswer(response.question.id, quizId);

      // If the correct answer is not found, set result properties to null
      if (!rightAnswer) {
        return {
          ...response,
          rightAnswer: null,
          isCorrect: null,
        };
      }

      // Determine if the user's choice is correct and include the result in the response
      return {
        ...response,
        rightAnswer,
        isCorrect: rightAnswer === response.userChoice,
      };
    })
  );
}

export default calculateUserResult;
