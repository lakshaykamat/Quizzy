/**
 * Asynchronous function to retrieve the correct answer for a specific question in a quiz.
 *
 * @param {string} questionId - The ID of the question for which to get the correct answer.
 * @param {string} quizId - The ID of the quiz to which the question belongs.
 * @returns {Promise<string | undefined>} - A promise that resolves to the correct answer text or undefined if not found.
 */
import validateQuizId from "./validateQuizId";

async function getRightAnswer(
  questionId: string,
  quizId: string
): Promise<string | undefined> {
  // Validate if the quiz with the specified ID exists
  const { isExist, quiz } = await validateQuizId(quizId);

  // If the quiz doesn't exist, or there's an issue, return undefined
  if (!isExist || !quiz) return undefined;

  // Find the question in the quiz with the specified question ID
  const question = quiz.questionsList.find((q) => q.id === questionId);

  // If the question is found, find the right option (answer) for the question
  if (question) {
    const rightOption = question.options.find((option) => option.isRight);

    // If the right option is found, return its text as the correct answer
    if (rightOption) {
      return rightOption.text;
    }
  }

  // Return undefined if the question or correct answer is not found
  return undefined;
}

export default getRightAnswer;
