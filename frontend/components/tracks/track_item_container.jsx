import { connect } from 'react-redux';
import TrackItem from './track_item';
import { fetchTrack, deleteTrack, fetchArtistTracks } from "../../actions/track_actions";
import { fetchCurrentTrack } from '../../actions/music_player_actions';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    currentTrack: state.ui.musicPlayer
});

const mapDispatchToProps = dispatch => ({
    // fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    fetchCurrentTrack: (track) => dispatch(fetchCurrentTrack(track)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    fetchArtistTracks: (artistId) => dispatch(fetchArtistTracks(artistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackItem);