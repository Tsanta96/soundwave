import React from 'react'
import TrackItemContainer2 from '../tracks/track_item_container2';

export class library extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLikedTracks(this.props.currentUser.id);
    }

    render() {
        return (
            <div>
                <div className="library-tracks">
                    <h1>Library</h1>
                    <p className="library-note">These are tracks that you've liked. You can remove them by unliking them</p>
                    {this.props.tracks.map((track, idx) => <TrackItemContainer2 key={track.id} idx={idx} track={track} />)}
                </div>
            </div>
        )
    }
}

export default library
