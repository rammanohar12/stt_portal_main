import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = "http://localhost:5000/api/auth";

export const loginUser = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, userData);
    // console.log(response);

    if (response?.data?.success) {
      const jwtToken = response.data.token;
      localStorage.setItem("jwtToken", jwtToken);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: jwtToken,
        isAuthenticated: true,
      });
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const registerUser = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, userData);
    toast.success("New user created Successfully");
  } catch (error) {
    console.error("Error Registering user:", error);
  }
};

export const logoutUser = (history) => async (diapatch) => {
  try {
    localStorage.clear("jwtToken");
    diapatch({
      type: "USER_LOGOUT",
      isAuthenticated: false,
    });
    toast.success("Logged out successfully");
  } catch (error) {
    console.log("Error while logout", error);
  }
};

export const sendOtp = (history) => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/login`);

    if (response?.data?.suucess) {
      console.log(response);
    }
  } catch (error) {
    console.log("ERror while sending otp to the user");
  }
};

export const getUsersList = (body, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/list`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("jwtToken")}`,
      },
    });
    if (response?.data?.success) {
      dispatch({
        type: "FETCH_USER_LIST",
        usersList: response?.data?.usersList,
        totalUserCount: response?.data?.totalUserCount,
        isAuthenticated: true,
      });
    }
  } catch (error) {
    console.log("ERROR: Error while fetching the users list");
  }
};

export const deleteUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/delete`, data, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("jwtToken")}`,
      },
    });
    if (response?.data?.success) {
      toast.success("User deleted successfully");
    } else {
      toast.error("ERROR: Unable to delet the User");
    }
  } catch (error) {
    console.log("ERROR: Error while deleting the user");
  }
};
