import React from 'react';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: undefined,
            progressBar: undefined
        }
        this.playAud = this.playAud.bind(this);
        this.pauseAud = this.pauseAud.bind(this);
        this.changeVol = this.changeVol.bind(this);
        this.progressBar = this.progressBar.bind(this);
    }

    componentDidMount() {
        this.setState({ 
            player: document.getElementById('music-player'),
            progressBar: document.getElementById('progress-bar')
        })
    }

    //This doesn't work yet. 
    //Ask TA about the better approach. (this or state)
    componentDidUpdate() {
        const that = this;
        
        this.props.trackIds.forEach((trackId) => {
            if (document.getElementById(`track-id-${trackId}`) !== null ) {
                let temp = document.getElementById(`track-id-${trackId}`);
                temp.addEventListener('play', () => {
                    that.state.player.load();
                    that.state.player.play();
                })
            }
        })
    };

    playAud() {
        this.state.player.play();
    }

    pauseAud() {
        this.state.player.pause();
    }

    changeVol() {
        this.state.player.volume = document.getElementById("vol-bar").value;
    }

    progressBar() {
        const progressBar = document.getElementById('progress-bar');
        this.state.player.addEventListener('timeupdate', () => {
            progressBar.value = (this.state.player.currentTime / this.state.player.duration);  
        })
    }

    render() {
        const { currentTrack } = this.props
        return (
            <div className="music-player-background">
                <div className="player">
                    <div className="music-player-container">
                        <audio id="music-player" src={currentTrack.trackFile}>
                        </audio>
                        <input id="play-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/play_icon.svg" onClick={() => { this.playAud();this.progressBar()}}/>
                        <input id="pause-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/pause_icon.svg" onClick={this.pauseAud}/>
                        <progress id="progress-bar" value="0" max="1"></progress>
                        <img id="vol-bar-img" src="" />
                        <input type="range" id="vol-bar" onChange={this.changeVol} step="0.025" min="0" max="1"/>
                    </div>
                    <div className="current-track-display">
                        <div className="current-track-img">
                            <img src={currentTrack.imgFile} height="40" width="40"></img>
                        </div>
                        <div className="current-track-details">
                            <p id="song-name">{currentTrack.title}</p>
                            <p id="song-artist">{currentTrack.userName}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;

// const testTrack = document.getElementById('track-id-1');