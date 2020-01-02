import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    trackId: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps,mapDispatchToProps)(Comments);