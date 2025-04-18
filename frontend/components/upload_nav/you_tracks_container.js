import { connect } from "react-redux";
import YouTracks from "./you_tracks";
import { fetchTracks, fetchArtistTracks } from "../../actions/track_actions";

const mapStateToProps = (state) => {
  let stateTracksArr = Object.values(state.entities.tracks);

  stateTracksArr = stateTracksArr.map((obj) => {
    Object.keys(obj).forEach((key) => {
      obj = obj[key];
    });
    return obj;
  });

  return {
    tracks: stateTracksArr,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchArtistTracks: (artistId) => dispatch(fetchArtistTracks(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YouTracks);
