import * as commentUtils from '../utils/comment_utils';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchComments = trackId => dispatch => (
    commentUtils.fetchComments(trackId)
        .then(comments => dispatch(receiveAllComments(comments)))
);

export const createComment = newComment => dispatch => (
    commentUtils.createComment(newComment)
        .then((comment => dispatch(receiveComment(comment))),
            (err => dispatch(receiveCommentErrors(err))))
);

export const deleteComment = commentId => dispatch => (
    commentUtils.deleteComment(commentId) 
        .then(() => dispatch(removeComment()))
);