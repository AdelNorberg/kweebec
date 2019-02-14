import {
  IS_LOGIN,
  LOGOUT,
  SIGN_IN,
  SIGN_UP,
  SIGN_ERROR,
  CLEAR_ERROR_MESSAGE,
} from "../actions/types";

const INITIAL_STATE = {
  loggedIn: null,
  userInfo: {},
  errorMessage: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, loggedIn: action.payload };
    case LOGOUT:
      return { ...state, ...INITIAL_STATE, loggedIn: false };
    case SIGN_IN:
      return { ...state, loggedIn: true, userInfo: action.payload };
    case SIGN_UP:
      return { ...state, loggedIn: true, userInfo: action.payload };
    case SIGN_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};
