import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  REMOVE_ERRORS,
} from '../actions/session_actions';

const SessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return null;
    case RECEIVE_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      let newState = Object.assign({}, []);
      return newState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
