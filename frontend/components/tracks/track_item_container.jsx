import { connect } from 'react-redux';
import TrackItem from './track_item';
import { fetchTrack, deleteTrack, fetchArtistTracks } from "../../actions/track_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    // fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    fetchArtistTracks: (artistId) => dispatch(fetchArtistTracks(artistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);