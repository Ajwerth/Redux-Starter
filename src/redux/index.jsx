import { combineReducers } from "redux";
import fetchReducer from "./dataReducer";

const appReducer = combineReducers({
  fetchReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
