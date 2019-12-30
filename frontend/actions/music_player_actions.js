export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
// export const RECEIVE_CURRENT_TRACK_TIME = 'RECEIVE_CURRENT_TRACK_TIME';

const receiveCurrentTrack = (track) => ({
    type: RECEIVE_CURRENT_TRACK,
    track
})

export const currentTrack = (track) => dispatch => (
    dispatch(receiveCurrentTrack(track))
);