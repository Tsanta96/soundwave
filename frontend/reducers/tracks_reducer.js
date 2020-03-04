import { 
    RECEIVE_ALL_TRACKS, 
    RECEIVE_TRACK, 
    REMOVE_TRACK,
    RECEIVE_ARTIST_TRACKS,
    EMPTY_TRACKS,
    RECEIVE_SEARCH_TRACKS,
} from '../actions/track_actions';
import { RECEIVE_LIKED_TRACKS } from '../actions/like_actions';

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
        case RECEIVE_SEARCH_TRACKS:
            return Object.assign({}, action.tracks)
        case RECEIVE_LIKED_TRACKS:
            return Object.assign({}, action.tracks)
        default:
            return oldState;
    }
}

export default TracksReducer;