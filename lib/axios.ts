import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEB_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // You can set common headers here
  },
});

export default axiosInstance;
