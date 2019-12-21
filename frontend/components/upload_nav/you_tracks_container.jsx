import { connect } from 'react-redux';
import YouTracks from './you_tracks';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = state => ({
    tracks: Object.keys(state.entities.tracks).map(key => state.entities.tracks[key])
})

const mapDispatchToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

export default connect(mapStateToProps, mapDispatchToProps)(YouTracks);