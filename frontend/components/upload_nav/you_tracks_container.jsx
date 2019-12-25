import { connect } from 'react-redux';
import YouTracks from './you_tracks';
import { fetchTracks, fetchArtistTracks } from '../../actions/track_actions';
// import destructured from '../../utils/function_utils';

const mapStateToProps = state => {
    // let stateTracksArr = Object.values(state.entities.tracks);
    // let tracksArr = [];
    // debugger;
    // for (let i = 0; i <= stateTracksArr.length-1; i++) {
    //     let temp = Object.keys(stateTracksArr[i]).join("")
    //     let val = stateTracksArr[i][temp];
    //     tracksArr.push(val);
    // }
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
    fetchTracks: () => dispatch(fetchTracks()),
    fetchArtistTracks: (artistId) => dispatch(fetchArtistTracks(artistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(YouTracks);