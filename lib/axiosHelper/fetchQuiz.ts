import { QuizType } from "@/types";
import axios from "axios";

async function fetchQuiz(): Promise<QuizType[]> {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_WEB_URL + "/quiz");
    return response.data.quizes as QuizType[];
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return error;
  }
}

export default fetchQuiz;
