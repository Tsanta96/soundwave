import { connect } from "react-redux";
import MusicPlayer from "./music_player";
import { fetchCurrentTrack } from "../../actions/music_player_actions";
import { fetchTracks } from "../../actions/track_actions";

const mapStateToProps = (state) => {
  let tracks = Object.values(state.entities.tracks);
  let trackIdsArr = tracks.map((ob1) => {
    return Object.keys(ob1).reduce((a, c) => {});
  });

  return {
    trackIds: trackIdsArr,
    currentTrack: state.ui.musicPlayer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks),
  fetchCurrentTrack: (track) => dispatch(fetchCurrentTrack(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
