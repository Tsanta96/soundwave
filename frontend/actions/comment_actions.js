import * as commentUtils from '../utils/comment_utils';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const fetchComments = trackId => dispatch => (
    commentUtils.fetchComments(trackId)
        .then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = comment => dispatch => (
    commentUtils.createComment(comment)
        .then((comment => dispatch(receiveTrack(comment))),
            ((err) => dispatch(receiveCommentErrors(err))))
);