import { connect } from 'react-redux';
import TrackItem from './track_item';
import { deleteTrack, fetchArtistTracks } from "../../actions/track_actions";

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    fetchArtistTracks: (artistId) => dispatch(fetchArtistTracks(artistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);