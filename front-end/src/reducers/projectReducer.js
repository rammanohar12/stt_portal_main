const initialState = {
  projectList: [],
  projectDeatils: {},
  totalCount: 0,
  error: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROJECT_LIST":
      return {
        ...state,
        projectList: action.projectList,
        totalCount: action.totalCount,
        error: null,
      };

    case "PROJECT_DETAILS":
      return {
        ...state,
        projectDeatils: action.projectDetails,
        error: null,
      };

    default:
      return state;
  }
};

export default projectReducer;
