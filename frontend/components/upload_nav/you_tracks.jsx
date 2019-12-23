import React from 'react';
import { NavLink } from 'react-router-dom';
import TrackItemContainer from '../tracks/track_item_container';

class YouTracks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.props.fetchArtistTracks(this.props.currentUser.id);
        console.log(this.props.tracks)
    }

    render() {
        return (
            <div>
                <div className="upload-nav">
                    <NavLink to="/nav/upload" className="upload" activeClasName="chosen">Upload</NavLink>
                    <NavLink to="/nav/you/tracks" className="your-tracks" activeClassName="chosen">Your Tracks</NavLink>
                </div>
                <div>
                    <h1>{this.props.tracks.map((track, idx) => <TrackItemContainer key={track.id} idx={idx} track={track}/>)}</h1>
                </div>
            </div>
        )
    }
}

export default YouTracks;