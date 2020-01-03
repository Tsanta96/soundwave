import { 
    RECEIVE_ALL_TRACKS, 
    RECEIVE_TRACK, 
    REMOVE_TRACK,
    RECEIVE_ARTIST_TRACKS,
    EMPTY_TRACKS
} from '../actions/track_actions';

const TracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return Object.assign({}, action.tracks);
        case RECEIVE_ARTIST_TRACKS:
            return Object.assign({}, action.tracks);
        case RECEIVE_TRACK:
            return Object.assign({}, action.track);
        case REMOVE_TRACK:
            delete newState[trackId];
            return newState;
        case EMPTY_TRACKS:
            return Object.assign({}, []);
        default:
            return oldState;
    }
}

export default TracksReducer;