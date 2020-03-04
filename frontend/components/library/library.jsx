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
                <div>
                    <h1>Library</h1>
                    <p>These are tracks that you've liked. You can remove them by unliking them</p>
                    {this.props.tracks.map((track, idx) => <TrackItemContainer2 key={track.id} idx={idx} track={track} />)}
                </div>
            </div>
        )
    }
}

export default library
