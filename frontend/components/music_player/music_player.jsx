import React from 'react';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     const player = document.getElementById('music-player');
    //     player.controls = false;
    // }



    render() {
        return (
            <div className="music-player-background">
                <div className="player">
                    <div className="music-player-container">
                        <audio id="music-player">
                        </audio>
                        <input id="play-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/play_icon.svg" />
                        <input id="pause-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/pause_icon.svg" />
                        <progress id="progress-bar" value="0" max="100"></progress>
                        <img id="vol-bar-img" src="" />
                        <input type="range" id="vol-bar" step="0.05" min="0" max="1" />
                    </div>
                    <div className="current-track-display">
                        <div className="current-track-img">
                            <img src="" height="10" width="10"></img>
                        </div>
                        <div className="current-track-details">
                            <p id="song-name">Song name</p>
                            <p id="song-artist">Artist name</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;