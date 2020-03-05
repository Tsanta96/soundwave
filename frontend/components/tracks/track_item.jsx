import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.track.id,
            title: this.props.track.title,
            artistId: this.props.artistId,
        }

        this.commentsClick = this.commentsClick.bind(this);
    }

    componentDidMount() {
        this.setState({ audio: document.getElementById('music-player')});
    }

    // componentDidUpdate(prevProps) {
    // }

    fetchTrack(e, trackId) {
        e.preventDefault();
        this.props.fetchCurrentTrack(this.props.track);
        // this.setState({ currSongId: e.target.parentElement.previousSibling.getAttribute("id")})
    }

    handleDelete(trackId, userId) {
        const delSong = confirm("Are you sure you want to delete this song?");
        if (delSong === true) {
            this.props.deleteTrack(trackId)
            this.props.fetchArtistTracks(userId);
        }
    }

    commentsClick(trackId) {
        this.props.removeAllComments();
        this.props.history.push(`/nav/track/comments/${trackId}`);
    }

    likeClick(trackId, userId) {
        this.props.addLike(trackId, userId);

        //Force a re render
        this.props.fetchTracks()
    }

    render() {
        const { track, idx } = this.props
        const playPause = (`track-id-${track.id}` !== this.state.currSongId) ? (
            <div>
                <input className="play-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/play_icon.svg" onClick={(e) => this.fetchTrack(e, track.id) } />
            </div>
        ) : (
            <div>
                <input className="pause-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/pause_icon.svg" onClick={this.pauseAud}/>            
            </div>
        )

        const trackContainer = ((this.props.match.path === '/nav/tracks') || (this.props.match.path === '/nav/library')) ? (
                <div className="song-container">
                    <img src={track.imgFile} height="120" width="120" className="song-img"></img>
                    <div className="song-content">
                        <div className="discover-song-container-name">
                            <p id="discover-song-name">{track.title}</p>
                        </div>
                        <p id="artist-name">{track.userName}</p>
                        <audio id={`track-id-${track.id}`} src={track.trackFile}>
                        </audio>
                        {playPause}
                        <div className="discover-comments-likes">
                            <img src="https://d313rqwfqaf3f.cloudfront.net/design/speech-bubble.svg" className="discover-comment" height="15" width="15" onClick={() => this.commentsClick(track.id)}></img>
                            <img src="https://d313rqwfqaf3f.cloudfront.net/design/like-icon.svg" className="discover-like" height="16" width="16" onClick={() => this.likeClick(track.id, this.props.currentUser.id)}></img>
                            <p className="discover-like-number">{track.likes}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="song-container">
                    <img src={track.imgFile} height="120" width="120" className="song-img"></img>
                    <div className="song-content">
                        <div className="song-container-name">
                            <h1 className="song-name">{track.title}</h1>
                        </div>
                        <h2 className="artist-name">{track.userName}</h2>
                        <audio id={`track-id-${track.id}`} src={track.trackFile}>
                        </audio>
                        {playPause}
                        <div className="bottom-container">
                            <div className="edit-delete">
                                <button className="edit" onClick={() => this.handleEdit(track.id)}>Edit</button>
                                <button className="delete" onClick={() => this.handleDelete(track.id, track.artistId)}>Delete</button>
                            </div>
                            <div className="comments-likes">
                                <img src="https://d313rqwfqaf3f.cloudfront.net/design/speech-bubble.svg" className="comment" height="15" width="15" onClick={() => this.commentsClick(track.id)}></img>
                                <img src="https://d313rqwfqaf3f.cloudfront.net/design/like-icon.svg" className="like" height="16" width="16" onClick={() => this.likeClick(track.id, this.props.currentUser.id)}></img>
                                <p className="comments-like-number">{track.likes}</p>
                            </div>
                        </div>
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