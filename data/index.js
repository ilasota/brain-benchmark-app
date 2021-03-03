import numberReducer from "./numberReducer";
import reactionReducer from "./reactionReducer";
import speedReducer from "./speedReducer";
import {combineReducers} from "redux";

const allReducers= combineReducers({
    numberReducer,
    reactionReducer,
    speedReducer
})

export default allReducers