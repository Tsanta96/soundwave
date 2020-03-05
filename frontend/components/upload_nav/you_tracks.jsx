import React from 'react';
import { NavLink } from 'react-router-dom';
import TrackItemContainer2 from '../tracks/track_item_container2';

class YouTracks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtistTracks(this.props.currentUser.id);
    }

    render() {
        return (
            <div>
                <div className="upload-nav">
                    <NavLink to="/nav/upload" id="upload" className="upload" activeClassName="chosen">Upload</NavLink>
                    <NavLink to="/nav/you/tracks" className="your-tracks" activeClassName="chosen">Your tracks</NavLink>
                </div>
                <div className="your-tracks-body">
                    <h1 className="your-tracks-header">Your tracks</h1>
                    <h1>{this.props.tracks.map((track, idx) => <TrackItemContainer2 key={track.id} idx={idx} track={track}/>)}</h1>
                </div>
            </div>
        )
    }
}

export default YouTracks;