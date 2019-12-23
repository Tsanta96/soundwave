import { connect } from 'react-redux';
import { createTrack, fetchTracks } from '../../actions/track_actions';
import UploadTrackForm from './upload_track';

const mapStateToProps = state => {
    let stateTracksArr = Object.values(state.entities.tracks);
    let tracksArr = [];
    for (let i = 0; i < stateTracksArr.length - 1; i++) {
        let temp = Object.keys(stateTracksArr[i]).join("")
        let val = stateTracksArr[i][temp];
        tracksArr.push(val);
    }

    return {
        tracks: tracksArr,
        currentUser: state.session.currentUser,
        errors: state.errors.track
    }
};

const mapDispatchToProps = dispatch => ({
    createTrack: (newTrack) => dispatch(createTrack(newTrack)),
    fetchTracks: (tracks) => dispatch(fetchTracks(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrackForm);