import {
  RECEIVE_ALL_COMMENTS,
  REMOVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return Object.assign({}, oldState, action.comments);
    case REMOVE_ALL_COMMENTS:
      return Object.assign({}, []);
    case RECEIVE_COMMENT:
      return Object.assign({}, oldState, action.comment);
    case REMOVE_COMMENT:
      return;
    default:
      return oldState;
  }
};

export default CommentsReducer;
