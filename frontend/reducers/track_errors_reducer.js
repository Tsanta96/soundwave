import { RECEIVE_TRACK_ERRORS } from '../actions/track_actions';

const TrackErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRACK_ERRORS:
            return action.errors
        default:
            return state;
    }
}

export default TrackErrorsReducer;