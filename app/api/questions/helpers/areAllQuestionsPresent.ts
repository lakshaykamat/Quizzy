import { UserResponse } from "../postRequestBody";

/**
 * Helper function to check if all questions in the user response belong to the quiz.
 *
 * @param {any[]} questionsList - The list of quiz questions.
 * @param {UserResponse[]} userResponse - The user's responses to the quiz questions.
 * @returns {boolean} - A boolean indicating whether all questions in the user response belong to the quiz.
 */
function areAllQuestionsPresent(
  questionsList: any[],
  userResponse: UserResponse[]
) {
  return userResponse.every((response) =>
    questionsList.some((question) => question.id === response.question.id)
  );
}
export default areAllQuestionsPresent;
