import React from 'react';
import { Link } from 'react-router-dom';
import TrackItem from '../tracks/track_item';

class YouTracks extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        debugger;
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