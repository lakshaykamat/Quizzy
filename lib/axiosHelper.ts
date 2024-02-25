import axiosInstance from "./axios";
import fetchGameData from "./axiosHelper/fetchGameData";
import postUserResponseOfQuestions from "./axiosHelper/postUserResponse";
import fetchQuestionsList from "./axiosHelper/fetchQuestionsList";
import fetchQuiz from "./axiosHelper/fetchQuiz";

const AXIOS = {
  fetchGameData,
  postUserResponseOfQuestions,
  fetchQuestionsList,
  fetchQuiz,
};
export default AXIOS;
