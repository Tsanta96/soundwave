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
            </div>

        )
    }
}

export default TrackIndex;