import {RECEIVE_CURRENT_TRACK} from '../actions/music_player_actions';

const MusicPlayerReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            return Object.assign({}, oldState, action.track);
        default:
            return oldState;
    }
}

export default MusicPlayerReducer;