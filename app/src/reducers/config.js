import { SELECT_LANGUAGE } from "../actions/types";

const INITIAL_STATE = {
  selectedLanguage: "ru",
  languages: ["ru", "en"],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};
