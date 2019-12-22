import { connect } from 'react-redux';
import YouTracks from './you_tracks';
import { fetchTracks } from '../../actions/track_actions';
// import destructured from '../../utils/function_utils';

const mapStateToProps = state => {
    let stateTracksArr = Object.values(state.entities.tracks);
    let tracksArr = [];
    for (let i = 0; i < stateTracksArr.length; i++) {
        let temp = Object.keys(stateTracksArr[i]).join("")
        let val = stateTracksArr[i][temp];
        tracksArr.push(val);
    }

    return {tracks: tracksArr}
}

const mapDispatchToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
})

export default connect(mapStateToProps, mapDispatchToProps)(YouTracks);