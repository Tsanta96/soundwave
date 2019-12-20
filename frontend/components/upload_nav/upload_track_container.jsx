import { connect } from 'react-redux';
import { createTrack } from '../../actions/track_actions';
import UploadTrackForm from './upload_track';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    createTrack: (newTrack) => dispatch(createTrack(newTrack))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrackForm);