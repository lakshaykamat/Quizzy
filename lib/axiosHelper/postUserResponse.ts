import axios from "axios";

async function postUserResponseOfQuestions(url: string, data: any) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_WEB_URL + url,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}

export default postUserResponseOfQuestions;
