import {connect} from 'react-redux';
import SearchResults from './search_results';
import { searchTracks, removeTrackErrors } from '../../actions/track_actions';


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
        errors: state.errors.track
    }
}

const mapDispatchToProps = dispatch => ({
    searchTracks: (tracks) => dispatch(searchTracks(tracks))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);