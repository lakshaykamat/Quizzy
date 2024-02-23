import axios from "axios";
import { GameData } from "./fetchGameData";

export interface UserResponseData {
  data: {
    quizId: string;
    userResponse: UserResponse[];
  };
  quizId: string;
}

export interface UserResponse {
  userChoice: string;
  question: Question;
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

async function postUserResponseOfQuestions(
  url: string,
  data: UserResponseData
): Promise<GameData | unknown> {
  try {
    console.log(process.env.NEXT_PUBLIC_WEB_URL + url[0]);
    console.log(url);
    console.log(data);
    let da = data?.data;
    const response = await axios.post(
      process.env.NEXT_PUBLIC_WEB_URL + "/questions",
      da,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}

export default postUserResponseOfQuestions;
