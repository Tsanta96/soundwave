import { connect } from 'react-redux';
import TrackItem from './track_item';
import { deleteTrack, fetchArtistTracks } from "../../actions/track_actions";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    fetchArtistTracks: (artistId) => dispatch(fetchArtistTracks(artistId))
})

export default connect(null, mapDispatchToProps)(TrackItem);