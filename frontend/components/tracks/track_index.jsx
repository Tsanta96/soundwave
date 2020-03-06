import React from 'react';
import TrackItemContainer from './track_item_container';

class TrackIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {
        return (
            <div className="discover-tracks">
                <h1>Discover</h1>
                {this.props.tracks.map((track, idx) => <TrackItemContainer key={track.id} idx={idx} track={track}/>)}
                <div id="sound-wave-everywhere"><img id="sound-wave-everywhere" src="http://d313rqwfqaf3f.cloudfront.net/design/wave_white.svg" width="400" height="400"></img></div>
            </div>
        )
    }
}

export default TrackIndex;