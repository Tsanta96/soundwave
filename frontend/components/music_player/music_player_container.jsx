import React from 'react';
import { connect } from 'react-redux';
import MusicPlayer from './music_player';
import { fetchCurrentTrack } from '../../actions/music_player_actions';

const mapStateToProps = state => ({
    currentTrack: state.ui.musicPlayer
})

const mapDispatchToProps = dispatch => ({
    fetchCurrentTrack: (track) => dispatch(fetchCurrentTrack(track))
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
