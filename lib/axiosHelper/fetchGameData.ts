import axios from "axios";

export interface GameData {
  game: Game;
}

export interface Game {
  _id: string;
  totalScore: string;
  totalQuestions: string;
  percen: string;
  userId: string;
  quizId: string;
  userResult: UserResult[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UserResult {
  userChoice: string;
  question: Question;
  rightAnswer: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  question: string;
  explanation: string;
  options: Option[];
  category: string;
}

export interface Option {
  text: string;
  isRight: boolean;
}

async function fetchGameData(url: string): Promise<GameData> {
  try {
    console.log("game url");
    console.log(url);
    const response = await axios.get(url);
    return response.data as GameData;
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return error;
  }
}

export default fetchGameData;
