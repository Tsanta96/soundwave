import * as likeUtils from '../utils/like_utils';

export const RECEIVE_LIKED_TRACKS = 'RECEIVE_LIKED_TRACKS';

const receiveLikedTracks = (tracks) => ({
  type: RECEIVE_LIKED_TRACKS,
  tracks,
});

export const addLike = (trackId, userId) => (dispatch) =>
  likeUtils.addLike(trackId, userId);

export const fetchLikedTracks = (userId) => (dispatch) =>
  likeUtils
    .fetchLikedTracks(userId)
    .then((tracks) => dispatch(receiveLikedTracks(tracks)));
