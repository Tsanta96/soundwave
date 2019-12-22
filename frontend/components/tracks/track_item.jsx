import React from 'react';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        // this.props.deleteTrack = this.props.deleteTrack.bind(this);
    }

    handleDelete(trackId, artistId) {
        const delSong = confirm("Are you sure you want to delete this song?");
        console.log(this.props);
        if (delSong === true) {
            this.props.deleteTrack(trackId)
            this.props.fetchArtistTracks(artistId);
        }
    }

    render() {
        // debugger;
        const { track, idx } = this.props
        return (
            <div>
                <h1>{idx}: {track.title}
                    <ul>
                        <li>Artist id: {track.artistId}</li>
                        <img src={track.imgUrl}></img>
                        <audio
                            controls
                            src={track.trackUrl}
                            >Track: {track.trackUrl}
                        </audio>
                        <button onClick={() => this.handleDelete(track.id, track.artistId)}>X</button>
                    </ul>
                </h1>
            </div>
        )
    }
}

export default TrackItem;