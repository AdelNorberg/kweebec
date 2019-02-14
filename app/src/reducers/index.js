import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import config from "./config";
import auth from "./auth";

export default combineReducers({
  config,
  auth,
  form: formReducer,
});
