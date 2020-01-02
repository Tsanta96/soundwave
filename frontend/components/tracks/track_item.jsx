import React from 'react';
import { withRouter } from 'react-router-dom';

class TrackItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.track.id,
            title: this.props.track.title,
            artistId: this.props.artistId,
            audio: undefined,
            playing: false,
            currElement: undefined
        }

        this.fetchTrack = this.fetchTrack.bind(this);
        this.pauseAud = this.pauseAud.bind(this);
        this.resetPlaying = this.resetPlaying.bind(this);
        this.commentsClick = this.commentsClick.bind(this);
    }

    componentDidMount() {
        this.setState({ audio: document.getElementById(`music-player`) });
    }

    componentDidUpdate() {
        const that = this;
        
        this.state.audio.addEventListener('pause', () => {
            this.setState({ playing: false });
            console.log("paused");
        })
        removeEventListener('pause', this.state.audio);

        // this.state.audio.addEventListener('play', () => {
        // }) 
    }

    resetPlaying() {
        this.setState({ playing: false });
    }

    fetchTrack(trackId) {
        // console.log(this.props.track);
        this.props.fetchCurrentTrack(this.props.track);
        this.setState({ currElement: document.getElementById(`track-id-${trackId}`)});
        this.setState({ playing: true });
    }

    pauseAud() {
        this.state.audio.pause();
        this.setState({ playing: false});
    }

    handleDelete(trackId, artistId) {
        const delSong = confirm("Are you sure you want to delete this song?");
        if (delSong === true) {
            this.props.deleteTrack(trackId)
            this.props.fetchArtistTracks(artistId);
        }
    }

    commentsClick(e) {
        e.preventDefault();
        // this.props.history.push('/nav/track/comments');
        if (this.props.history.location.pathname === '/nav/you/tracks') {
            const audioEl = e.target.parentElement.parentElement.parentElement.children[2];
            console.log("Chosen audio", audioEl);
        } else if (this.props.history.location.pathname === '/nav/tracks') {
            const audioEl = e.target.parentElement.parentElement.children[2];
            console.log("Chosen audio", audioEl);
        }
    }

    // handleEdit(trackId) {
    //     this.props.history.push('/nav/upload');
    //     this.props.fetchTrack(trackId);
    // }

    render() {
        const { track, idx } = this.props
        const playPause = (this.state.playing === false) ? (
            <div>
                <input className="play-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/play_icon.svg" onClick={() => this.fetchTrack(track.id) } />
            </div>
        ) : (
            <div>
                <input className="pause-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/pause_icon.svg" onClick={this.pauseAud}/>            
            </div>
        )

        const trackContainer = (this.props.match.path === '/nav/tracks') ? (
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
                            <img src="https://d313rqwfqaf3f.cloudfront.net/design/speech-bubble.svg" className="discover-comment" height="15" width="15" onClick={this.commentsClick}></img>
                            <img src="https://d313rqwfqaf3f.cloudfront.net/design/like-icon.svg" className="discover-like" height="16" width="16"></img>
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
                                {/* <button className="edit" onClick={() => this.handleEdit(track.id)}>Edit</button> */}
                                <button className="delete" onClick={() => this.handleDelete(track.id, track.artistId)}>Delete</button>
                            </div>
                            <div className="comments-likes">
                                <img src="https://d313rqwfqaf3f.cloudfront.net/design/speech-bubble.svg" className="comment" height="15" width="15" onClick={this.commentsClick}></img>
                                <img src="https://d313rqwfqaf3f.cloudfront.net/design/like-icon.svg" className="like" height="16" width="16"></img>
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

// const track = document.getElementById('track-id-1');
// const musicPlayer = document.getElementById('music-player');