import { connect } from 'react-redux';
import { fetchTracks, emptyTracks } from '../../actions/track_actions';
import TrackIndex from './track_index';

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
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex)