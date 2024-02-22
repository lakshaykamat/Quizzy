import { Question } from "@/types";
import axios from "axios";

async function fetchQuestionsList(
  url: string
): Promise<{ quizId: string; name: string; questionsList: Question[] }> {
  try {
    const response = await axios.get(url);
    return response.data as {
      quizId: string;
      name: string;
      questionsList: Question[];
    };
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return error;
  }
}
export default fetchQuestionsList;
