import numberReducer from "./numberReducer";
import reactionReducer from "./reactionReducer";
import speedReducer from "./speedReducer";
import chimpReducer from "./chimpReducer";
import logInStatusReducer from "./logInStatusReducer";
import userNameReducer from "./userNameReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  numberReducer,
  reactionReducer,
  speedReducer,
  chimpReducer,
  logInStatusReducer,
  userNameReducer,
});

export default allReducers;
