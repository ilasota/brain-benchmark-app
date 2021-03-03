import numberReducer from "./numberReducer";
import reactionReducer from "./reactionReducer";
import {combineReducers} from "redux";

const allReducers= combineReducers({
    numberReducer,
    reactionReducer,
})

export default allReducers