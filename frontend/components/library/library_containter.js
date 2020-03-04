import Library from './library';
import { connect } from 'react-redux';
import { fetchLikedTracks } from '../../actions/like_actions';

const mapStateToProps = (state) => {
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
    fetchLikedTracks: (userId) => dispatch(fetchLikedTracks(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Library);