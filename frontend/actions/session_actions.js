import {
  postUser,
  postSession,
  deleteSession,
} from "../utils/session_api_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

//thunk action creators
export const createNewUser = (formUser) => (dispatch) =>
  postUser(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)),
  );

export const login = (formUser) => (dispatch) =>
  postSession(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)),
  );

export const logout = () => (dispatch) =>
  deleteSession().then(() => dispatch(logoutCurrentUser()));
