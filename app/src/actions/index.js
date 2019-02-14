import {
  SELECT_LANGUAGE,
  IS_LOGIN,
  LOGOUT,
  SIGN_IN,
  SIGN_UP,
  SIGN_ERROR,
  CLEAR_ERROR_MESSAGE,
} from "./types";
import graphql from "../helpers/graphql";
import queries from "../helpers/queries";

export const selectLanguage = lang => {
  return {
    type: SELECT_LANGUAGE,
    payload: lang,
  };
};

export const isLogin = () => dispatch => {
  const response = () =>
    graphql
      .post(null, {
        query: queries.isLogin(),
      })
      .then(response => {
        dispatch({
          type: IS_LOGIN,
          payload: response.data.data.isLogin,
        });
      });

  setTimeout(response, 1500);
};

export const logout = () => dispatch => {
  const response = () =>
    graphql
      .post(null, {
        query: queries.logout(),
      })
      .then(response => {
        dispatch({
          type: LOGOUT,
          payload: response.data.data.logout,
        });
      });

  setTimeout(response, 1000);
};

export const signIn = ({
  formValues: { email, password },
  callback,
}) => dispatch => {
  const response = () =>
    graphql
      .post(null, {
        query: queries.login(email, password),
      })
      .then(response => {
        dispatch({
          type: SIGN_IN,
          payload: response.data.data.login,
        });
      })
      .catch(error => {
        dispatch({
          type: SIGN_ERROR,
          payload: error.response.data.errors[0].message,
        });
        callback();
      });

  setTimeout(response, 1500);
};

export const signUp = ({
  formValues: { email, password },
  callback,
}) => dispatch => {
  const response = () =>
    graphql
      .post(null, {
        query: queries.signup(email, password),
      })
      .then(response => {
        dispatch({
          type: SIGN_UP,
          payload: response.data.data.signup,
        });
      })
      .catch(error => {
        dispatch({
          type: SIGN_ERROR,
          payload: error.response.data.errors[0].message,
        });
        callback();
      });

  setTimeout(response, 3500);
};

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};
