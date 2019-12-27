import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.track.id,
            title: this.props.track.title,
            artistId: this.props.artistId
        }
    }

    // componentDidMount() {
    // }

    handleDelete(trackId, artistId) {
        const delSong = confirm("Are you sure you want to delete this song?");
        if (delSong === true) {
            this.props.deleteTrack(trackId)
            this.props.fetchArtistTracks(artistId);
        }
    }

    // handleEdit(track) {
    // }

    render() {
        const { track, idx } = this.props
        const trackContainer = (this.props.match.path === '/nav/tracks') ? (
                <div className="song-container">
                    <img src={track.imgFile} height="120" width="120" className="song-img"></img>
                    <div className="song-content">
                        <div className="song-container-name-edit-delete">
                            <h1 className="song-name">{track.title}</h1>
                            {/* <button className="edit" onClick={() => this.handleEdit(track)}>Edit</button>
                                <button className="delete" onClick={() => this.handleDelete(track.id, track.artistId)}>Delete</button> */}
                        </div>
                        <h2 className="artist-name">{track.userName}</h2>
                        <audio
                            controls
                            src={track.trackFile}>
                            Track: {track.trackFile}
                        </audio>
                    </div>
                </div>
            ) : (
                <div className="song-container">
                    <img src={track.imgFile} height="120" width="120" className="song-img"></img>
                    <div className="song-content">
                        <div className="song-container-name-edit-delete">
                            <h1 className="song-name">{track.title}</h1>
                            <button className="edit" onClick={() => this.handleEdit(track)}>Edit</button>
                            <button className="delete" onClick={() => this.handleDelete(track.id, track.artistId)}>Delete</button>
                        </div>
                        <h2 className="artist-name">{track.userName}</h2>
                        <audio
                            controls
                            src={track.trackFile}>
                            Track: {track.trackFile}
                        </audio>
                    </div>
                </div>
            )

        return (
            <div>
                {trackContainer}
            </div>
        )
    }
}

export default withRouter(TrackItem);