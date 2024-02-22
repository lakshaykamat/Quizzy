import Quiz from "@/app/models/Quiz";
import { QuizType } from "@/types";

async function validateQuizId(
  id: string
): Promise<{ isExist: boolean; quiz: QuizType | null }> {
  try {
    const quiz = await Quiz.findById(id);

    return { isExist: !!quiz, quiz };
  } catch (error) {
    console.error("Error validating quiz id:", error);
    return { isExist: false, quiz: null };
  }
}

export default validateQuizId;
