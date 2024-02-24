import Quiz from "@/app/models/Quiz";
import { QuizType } from "@/types";

/**
 * Asynchronous function to validate the existence of a quiz based on its ID.
 *
 * @param {string} id - The ID of the quiz to validate.
 * @returns {Promise<{ isExist: boolean; quiz: QuizType | null }>} - A promise that resolves to an object indicating whether the quiz exists and the quiz data if found.
 */
async function validateQuizId(
  id: string
): Promise<{ isExist: boolean; quiz: QuizType | null }> {
  try {
    // Attempt to find a quiz with the specified ID
    const quiz = await Quiz.findById(id);

    // Return an object indicating whether the quiz exists and the quiz data if found
    return { isExist: !!quiz, quiz };
  } catch (error) {
    // Handle errors, log them, and return an object indicating that the quiz doesn't exist
    console.error("Error validating quiz ID:", error);
    return { isExist: false, quiz: null };
  }
}

export default validateQuizId;
