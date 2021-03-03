import numberReducer from "./numberReducer";
import reactionReducer from "./reactionReducer";
import speedReducer from "./speedReducer";
import chimpReducer from "./chimpReducer";
import {combineReducers} from "redux";

const allReducers= combineReducers({
    numberReducer,
    reactionReducer,
    speedReducer,
    chimpReducer
})

export default allReducers