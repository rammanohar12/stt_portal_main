import axios from "axios";

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
      });
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const registerUser = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, userData);
    history.push("/login");
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
