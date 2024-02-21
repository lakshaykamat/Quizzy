import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // You can set common headers here
  },
});

export default axiosInstance;
