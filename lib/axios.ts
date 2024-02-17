import axios from "axios";
import CONSTANTS from "./data/Constants";

const axiosInstance = axios.create({
  baseURL: CONSTANTS.API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // You can set common headers here
  },
});

export default axiosInstance;
