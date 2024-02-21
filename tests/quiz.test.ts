import QUIZ from "../lib/data/quiz.json";
import { Options, Question } from "../types/index";

test("Only one option should be true", async () => {
  QUIZ.forEach((quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(isOnlyOneOptionTrue(question.options)).toBe(true);
    });
  });
}, 30000);

test("Options Array should have a length of 4", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(question.options.length).toBe(4);
    });
  });
});

test("Question explanation should be 20 words or more", () => {
  QUIZ.forEach((quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(checkExplationLength(question.explanation, 50)).toBe(true);
    });
  });
});

function checkExplationLength(explanation: string, length: number) {
  return explanation.length > length;
}

function isOnlyOneOptionTrue(options: Options[]) {
  const trueOptions = options.filter((option) => option.isRight);
  return trueOptions.length === 1;
}
