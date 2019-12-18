import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import TrackIndex from './tracks/track_index'
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import Modal from './modal/modal.jsx';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => {
    return (
        <div>
            <Modal />
            <Route path="/nav/" component={NavBarContainer}/>
            <div className="body-view">
                <Route exact path="/" component={HomeContainer} />
                <Route path="/nav/tracks" component={TrackIndex} />
            </div>
        </div>
    )
}

export default App;

/* 
<ProtectedRoute path="/profile/:id" component={ProfileComponent} />
<ProtectedRoute path="/create/" component={CreateAudioComponent} />
<ProtectedRoute path="/stream" component={StreamComponent} /> 
*/
