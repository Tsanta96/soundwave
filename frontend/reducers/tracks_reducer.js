import { 
    RECEIVE_ALL_TRACKS, 
    RECEIVE_TRACK, 
    REMOVE_TRACK,
    RECEIVE_ARTIST_TRACKS 
} from '../actions/track_actions';

const TracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return Object.assign({}, oldState, action.tracks);
        case RECEIVE_ARTIST_TRACKS:
            return Object.assign({}, action.tracks);
        case RECEIVE_TRACK:
            return Object.assign({}, oldState, action.track);
        case REMOVE_TRACK:
            delete newState[trackId];
            return newState;
        default:
            return oldState;
    }
}

export default TracksReducer;