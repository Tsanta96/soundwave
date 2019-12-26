import { connect } from 'react-redux';
import { createTrack, fetchTracks, removeTrackErrors, fetchArtistTracks } from '../../actions/track_actions';
import UploadTrackForm from './upload_track';

const mapStateToProps = state => {
    let stateTracksArr = Object.values(state.entities.tracks);

    stateTracksArr = stateTracksArr.map(obj => {
        Object.keys(obj).forEach(key => {
            obj = obj[key]
        })
        return obj
    })

    return {
        tracks: stateTracksArr,
        currentUser: state.session.currentUser,
        errors: state.errors.track
    }
};

const mapDispatchToProps = dispatch => ({
    createTrack: (newTrack) => dispatch(createTrack(newTrack)),
    fetchTracks: (tracks) => dispatch(fetchTracks(tracks)),
    removeTrackErrors: () => dispatch(removeTrackErrors()),
    fetchArtistTracks: (artistId) => dispatch(fetchArtistTracks(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadTrackForm);