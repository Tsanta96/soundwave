import { 
    RECEIVE_ALL_TRACKS, 
    RECEIVE_TRACK, 
    RECEIVE_TRACK_ERRORS, 
    REMOVE_TRACK 
} from '../actions/track_actions';

const TracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action) {
        case RECEIVE_ALL_TRACKS:
            return Object.assign({}, oldState, action.tracks);
        case RECEIVE_TRACK:
            newState[action.track.id] = action.track;
            return newState;
        case RECEIVE_TRACK_ERRORS:
            return track.errors 
        case REMOVE_TRACK:
            delete newState[trackId];
            return newState;
        default:
            return oldState;
    }
}

export default TracksReducer;