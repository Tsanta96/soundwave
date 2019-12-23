import React from 'react';
import { NavLink } from 'react-router-dom';
import TrackItemContainer from '../tracks/track_item_container';

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
                    <NavLink to="/nav/upload" className="upload" activeClassName="chosen">Upload</NavLink>
                    <NavLink to="/nav/you/tracks" className="your-tracks" activeClassName="chosen">Your tracks</NavLink>
                </div>
                <div className="your-tracks-body">
                    <h1>Your tracks</h1>
                    <h1>{this.props.tracks.map((track, idx) => <TrackItemContainer key={track.id} idx={idx} track={track}/>)}</h1>
                </div>
            </div>
        )
    }
}

export default YouTracks;