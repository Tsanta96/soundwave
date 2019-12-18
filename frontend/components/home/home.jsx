import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="home">
        <div className="blue-bar">
            <div className="home-view">
                <div className="home-header">
                    <h2 className="home-logo">SoundWave</h2>
                    <div className="auth-btns">
                        <Link to="/login" id="login">Log In</Link>
                        <Link to="/signup" id="signup">Sign Up</Link>
                    </div>
                </div>
                <h1>Discover Tracks with SoundWave</h1>
                <p>Add your own songs and discover what other musicians are working on.</p>
            </div>
        </div>
    </div>
)