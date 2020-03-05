import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchTracks, fetchTrack, createTrack, deleteTrack, fetchArtistTracks } from './utils/track_utils';
import { createComment } from './actions/comment_actions';



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState);
    window.store = store;
    ReactDOM.render(<Root store={store}/>, root);
})


// window.createComment = createComment;
// window.fetchComments = fetchComments;
// window.fetchArtistTracks = fetchArtistTracks;
// window.fetchTracks = fetchTracks;
// window.fetchTrack = fetchTrack;
// window.createTrack = createTrack;
// window.deleteTrack = deleteTrack;

// const testComment = ({comment: {body: "this is the body", author_id: 2, track_id: 2}});

