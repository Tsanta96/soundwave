import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import TrackIndex from './tracks/track_index'
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import Modal from './modal/modal.jsx';
import UploadTrackContainer from './upload_nav/upload_track_container';
import YouTracks from './upload_nav/you_tracks';


const App = () => {
    return (
        <div>
            <Modal />
            <Route path="/nav/" component={NavBarContainer}/>
            <div className="body-view">
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/nav/upload" component={UploadTrackContainer}/>
                <Route path="/nav/you/tracks" component={YouTracks}/>
                <ProtectedRoute path="/nav/tracks" component={TrackIndex}/>
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
