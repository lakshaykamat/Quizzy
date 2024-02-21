import axiosInstance from "./axios";

const registerUser = async (userData: any) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    console.log(response.data);
    return response.data; // You may handle this response in your component
  } catch (error) {
    // Handle error
    throw error; // You may handle this error in your component
  }
};

const AXIOS = {
  register: registerUser,
};
export default AXIOS;
