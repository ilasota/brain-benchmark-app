import { createStore } from "redux";

import allReducers from './index'

const store = createStore(allReducers);


export default store;