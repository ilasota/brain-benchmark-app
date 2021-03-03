import numberReducer from "./numberReducer";
import {combineReducers} from "redux";

const allReducers= combineReducers({
    numberReducer,
})

export default allReducers