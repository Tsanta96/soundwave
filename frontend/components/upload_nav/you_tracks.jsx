import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import TrackItemContainer from '../tracks/track_item_container';

const YouTracks = (props) => {
    useEffect(() => {
        props.fetchArtistTracks(props.currentUser.id);
    }, [])

    return (
        <div>
            <div className="upload-nav">
                <NavLink to="/nav/upload" id="upload" className="upload" activeClassName="chosen">Upload</NavLink>
                <NavLink to="/nav/you/tracks" className="your-tracks" activeClassName="chosen">Your tracks</NavLink>
            </div>
            <div className="your-tracks-body">
                <h1 className="your-tracks-header">Your tracks</h1>
                <h1>{props.tracks.map((track, idx) => <TrackItemContainer key={track.id} idx={idx} track={track} />)}</h1>
            </div>
            <div id="sound-wave-everywhere"><img id="sound-wave-everywhere" src="http://d313rqwfqaf3f.cloudfront.net/design/wave_white.svg" width="400" height="400"></img></div>
        </div>
    )
}

export default YouTracks;