import { connect } from 'react-redux';
import { createComment, fetchComments } from '../../actions/comment_actions';
import { fetchTrack } from '../../actions/track_actions';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => {
  let stateCommentsArr = Object.values(state.entities.comments);

  stateCommentsArr = stateCommentsArr.map((obj) => {
    Object.keys(obj).forEach((key) => {
      obj = obj[key];
    });
    return obj;
  });

  return {
    currentUser: state.session.currentUser,
    trackId: ownProps.match.params.id,
    comments: stateCommentsArr,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: (trackId) => dispatch(fetchComments(trackId)),
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
