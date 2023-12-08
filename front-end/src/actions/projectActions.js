import axios from "axios";

const apiUrl = "http://localhost:5000/api/project";

export const createProject = (projectData) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/create-project`, projectData, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("jwtToken")}`,
      },
    });

    if (response?.data?.success) {
      console.log(response);
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const getProjectList = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/list`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("jwtToken")}`,
      },
    });
    if (response?.data?.success) {
      dispatch({
        type: "FETCH_PROJECT_LIST",
        projectList: response.data.projectList,
        totalCount: response.data.totalCount,
      });
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const getProjectDetails = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/projectDetails`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${localStorage.getItem("jwtToken")}`,
      },
    });
    if (response?.data?.success) {
      dispatch({
        type: "PROJECT_DETAILS",
        projectDetails: response.data.projectDetails[0],
      });
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};
