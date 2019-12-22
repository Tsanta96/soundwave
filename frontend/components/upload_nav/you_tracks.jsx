import React from 'react';
import { Link } from 'react-router-dom';
import TrackItem from '../tracks/track_item';

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
                    <Link to="/nav/upload">Upload</Link>
                    <Link to="/nav/you/tracks">Your Tracks</Link>
                </div>
                <div>
                    <h1>{this.props.tracks.map((track, idx) => <TrackItem key={track.id} idx={idx} track={track}/>)}</h1>
                </div>
            </div>
        )
    }
}

export default YouTracks;