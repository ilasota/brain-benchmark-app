import numberReducer from "./numberReducer";
import reactionReducer from "./reactionReducer";
import speedReducer from "./speedReducer";
import chimpReducer from "./chimpReducer";
import logInStatusReducer from "./logInStatusReducer";
import userNameReducer from "./userNameReducer";
import followListReducer from "./followListReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  numberReducer,
  reactionReducer,
  speedReducer,
  chimpReducer,
  logInStatusReducer,
  userNameReducer,
  followListReducer,
});

export default allReducers;
