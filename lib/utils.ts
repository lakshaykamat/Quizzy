import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Quiz } from "@/types";
import axios from "axios";
import CONSTANTS from "./data/Constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getQuiz(id: string, quizArr: Quiz[]): Quiz | null {
  const quiz = quizArr.find((quiz) => quiz.id === id);

  if (!quiz) {
    return null;
  }

  return quiz;
}

export function shuffleQuestionAndOptions(
  quiz: Quiz,
  questionLength: number
): Quiz {
  quiz.questionsList = shuffleArray([...quiz.questionsList]);

  quiz.questionsList = quiz.questionsList.slice(0, questionLength);

  quiz.questionsList.forEach((question) => {
    question.options = shuffleArray([...question.options]);
  });
  return quiz;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export const INTERNET = {
  quiz: fetchData,
};

async function fetchData(): Promise<Quiz[]> {
  try {
    const response = await axios.get(CONSTANTS.API_URL + "quiz");
    return response.data as Quiz[];
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return error;
  }
}
