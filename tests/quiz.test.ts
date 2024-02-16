import QUIZ_LOCAL_DATA from "../lib/data/local/quiz-and-questions";
import { Options, Question, Quiz } from "../types/index";

test("Only one option should be true", () => {
  QUIZ_LOCAL_DATA.forEach((quiz: Quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(isOnlyOneOptionTrue(question.options)).toBe(true);
    });
  });
});

test("Options Array should have a length of 4", () => {
  QUIZ_LOCAL_DATA.forEach((quiz: Quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(question.options.length).toBe(4);
    });
  });
});

test("Question explanation should be 20 words or more", () => {
  QUIZ_LOCAL_DATA.forEach((quiz: Quiz) => {
    quiz.questionsList.forEach((question: Question) => {
      expect(checkExplationLength(question.explanation)).toBe(true);
    });
  });
});

function checkExplationLength(explanation: string) {
  return explanation.length > 20;
}

function isOnlyOneOptionTrue(options: Options[]) {
  const trueOptions = options.filter((option) => option.isRight);
  return trueOptions.length === 1;
}
