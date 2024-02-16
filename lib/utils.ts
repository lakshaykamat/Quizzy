import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import QUIZ_LOCAL_DATA from "./data/local/quiz-and-questions";
import { Quiz } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getQuiz(id: string, questionLength: number): Quiz | null {
  const quiz = QUIZ_LOCAL_DATA.find((q) => q.id === id);

  if (!quiz) {
    return null;
  }

  quiz.questionsList = shuffleArray([...quiz.questionsList]);
  quiz.questionsList = quiz.questionsList.slice(0, questionLength);

  quiz.questionsList.forEach((question) => {
    question.options = shuffleArray([...question.options]);
  });

  return quiz;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
