export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';
// export const RECEIVE_CURRENT_TRACK_TIME = 'RECEIVE_CURRENT_TRACK_TIME';

const receiveCurrentTrack = (track) => ({
    type: RECEIVE_CURRENT_TRACK,
    track
})

// const receiveCurrentTrackTime = (trackTime) => ({
//     type: RECEIVE_CURRENT_TRACK_TIME,
//     trackTime
// })

export const fetchCurrentTrack = (track) => dispatch => (
    dispatch(receiveCurrentTrack(track))
);