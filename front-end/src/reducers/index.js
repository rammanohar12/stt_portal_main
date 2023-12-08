import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  navbar: navReducer,
});

export default rootReducer;
