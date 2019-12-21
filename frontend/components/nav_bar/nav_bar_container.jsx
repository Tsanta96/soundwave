import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/track_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchTracks: () => dispatch(fetchTracks())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);