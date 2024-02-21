import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Question, QuizType } from "@/types";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getQuiz(id: string, quizArr: QuizType[]): QuizType | null {
  const quiz = quizArr.find((quiz) => quiz._id === id);

  if (!quiz) {
    return null;
  }

  return quiz;
}

export function shuffleQuestionAndOptions(
  quiz: QuizType,
  questionLength: number
): QuizType {
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
  questionsList: fetchQuestionsList,
};

async function fetchData(): Promise<QuizType[]> {
  try {
    const response = await axios.get("http://localhost:3000/api" + "/quiz");
    return response.data.quizes as QuizType[];
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return error;
  }
}
async function fetchQuestionsList(
  url: string
): Promise<{ name: string; questionsList: Question[] }> {
  try {
    const response = await axios.get(url);
    return response.data as { name: string; questionsList: Question[] };
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return error;
  }
}
