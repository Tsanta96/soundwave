import React from 'react';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        // this.props.deleteTrack = this.props.deleteTrack.bind(this);
        this.state = {
            id: this.props.track.id,
            title: this.props.track.title,
            artistId: this.props.artistId,
            imgUrl: this.props.imgUrl
        }
    }

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
        return (
            <div>
                <div className="song-container">
                    <img src={track.imgUrl} height="120" width="120" className="song-img"></img>
                    <div className="song-content">
                        <div className="song-container-name-edit-delete">
                            <h1 className="song-name">{track.title}</h1>
                            <button className="edit" onClick={() => this.handleEdit(track)}>Edit</button>
                            <button className="delete" onClick={() => this.handleDelete(track.id, track.artistId)}>Delete</button>
                        </div>
                        <h2 className="artist-name">{currentUser.username}</h2>
                        <audio
                            controls
                            src={track.trackFile}>
                            Track: {track.trackFile}
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackItem;