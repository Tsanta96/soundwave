import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import TrackIndex from './tracks/track_index'

const App = () => {
    return (
        <div>
            <TrackIndex />
            <Route path="/signup" component={SignupContainer}/>
        </div>
    )
}

export default App;