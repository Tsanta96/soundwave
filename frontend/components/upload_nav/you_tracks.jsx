import React from 'react';
import { Link } from 'react-router-dom';

const YouTracks = () => {
    return (
        <div>
            <div className="upload-nav">
                <Link to="/nav/upload">Upload</Link>
                <Link to="/nav/you/tracks">Your Tracks</Link>
            </div>
            <div>
                <h1> Your Tracks: 
                <div>
                    <h1>Track Index</h1>
                    <p>Track 1</p>
                    <p>Track 2</p>
                    <p>Track 3</p>
                </div>
                </h1>
            </div>
        </div>
    )
}

export default YouTracks;