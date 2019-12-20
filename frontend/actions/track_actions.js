import * as trackUtils from '../utils/track_utils';

export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const REMOVE_TRACK = "RECEIVE_ALL_TRACKS";

const receiveAllTracks = tracks => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
});

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

const receiveTrackErrors = errors => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
})

const removeTrack = trackId => ({
    type: REMOVE_TRACK,
    trackId
});



//thunk action creators 
export const fetchTracks = () => dispatch => (
    trackUtils.fetchTracks()
        .then((tracks) => dispatch(receiveAllTracks(tracks)))
);

export const fetchTrack = trackId => dispatch => (
    trackUtils.fetchTrack(trackId)
        .then((track) => dispatch(receiveTrack(track)))
);

export const createTrack = newTrack => dispatch => (
    trackUtils.createTrack(newTrack)
        .then((track) => dispatch(receiveTrack(track)),
            (err) => dispatch(receiveTrackErrors(err.responseJSON)))
);

export const updateTrack = trackInfo => dispatch => (
    trackUtils.updateTrack(trackInfo)
        .then((trackInfo) => dispatch(receiveTrack(trackInfo)),
            ((err) => dispatch(receiveTrackErrors(err))))
);

export const deleteTrack = trackId => dispatch => (
    trackUtils.deleteTrack(trackId)
        .then(() => dispatch(removeTrack()))
);

