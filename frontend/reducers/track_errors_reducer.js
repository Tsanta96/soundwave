import {
  RECEIVE_TRACK_ERRORS,
  REMOVE_TRACK_ERRORS,
  RECEIVE_SEARCH_ERRORS,
} from '../actions/track_actions';

const TrackErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case REMOVE_TRACK_ERRORS:
      let newState = Object.assign({}, []);
      return newState;
    default:
      return state;
  }
};

export default TrackErrorsReducer;
