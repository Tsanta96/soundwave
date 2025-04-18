export const RECEIVE_CURRENT_TRACK = 'RECEIVE_CURRENT_TRACK';

const receiveCurrentTrack = (track) => ({
  type: RECEIVE_CURRENT_TRACK,
  track,
});

export const fetchCurrentTrack = (track) => (dispatch) =>
  dispatch(receiveCurrentTrack(track));
