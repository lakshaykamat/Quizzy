import validateQuizId from "./validateQuizId";

async function getRightAnswer(
  questionId: string,
  quizId: string
): Promise<string | undefined> {
  const { isExist, quiz } = await validateQuizId(quizId);

  if (!isExist || !quiz) return undefined;

  const question = quiz.questionsList.find((q) => q.id === questionId);

  if (question) {
    const rightOption = question.options.find((option) => option.isRight);

    if (rightOption) {
      return rightOption.text;
    }
  }

  return undefined;
}
export default getRightAnswer;
