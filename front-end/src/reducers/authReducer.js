const initialState = {
  isAuthenticated: false,
  userDetails: [],
  usersList: [],
  totalUserCount:0,
  jwtToken: "",
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        jwtToken: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: true,
        userDetails: null,
        error: null,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };
    case "FETCH_USER_LIST":
      return {
        ...state,
        usersList: action.usersList,
        totalUserCount: action.totalUserCount,
      };
    default:
      return state;
  }
};

export default authReducer;
