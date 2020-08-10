import { combineReducers } from "redux";
import counterReducer from "./counter";

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
