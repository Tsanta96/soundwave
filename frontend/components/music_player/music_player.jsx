import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const MusicPlayer = props => {
    const [player, setPlayer] = useState(undefined);
    const [progressBar, setProgressBar] = useState(undefined);

    useEffect(() => {
        setPlayer(document.getElementById('music-player'));
    })

    useEffect(() => {
        if (player !== undefined) {
            if ((player.paused)
                && (player.currentTime !== 0)) {
                null;
            } else {
                player.play();
            }
    
            setProgressBar(document.getElementById('progress-bar'));
            if (progressBar !== undefined) {
                player.addEventListener('timeupdate', () => {
                    progressBar.value = (player.currentTime / player.duration);
                })
            }
        }
    });

    const playAud = () => {
        player.play();
    }

    const pauseAud = () => {
        player.pause();
    }

    const changeVol = () => {
        player.volume = document.getElementById("vol-bar").value;
    }

    const { currentTrack } = props

    return (
        <div className="music-player-background">
            <div className="player">
                <div className="music-player-container">
                    <audio id="music-player" src={currentTrack.trackFile}>
                    </audio>
                    <input id="play-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/play_icon.svg" onClick={playAud} />
                    <input id="pause-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/pause_icon.svg" onClick={pauseAud} />
                    <progress id="progress-bar" value="0" max="1"></progress>
                    <img id="vol-bar-img" src="" />
                    <input type="range" id="vol-bar" onChange={changeVol} step="0.025" min="0" max="1" />
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

export default withRouter(MusicPlayer);

// class MusicPlayer extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             player: undefined,
//             progressBar: undefined
//         }
//         this.playAud = this.playAud.bind(this);
//         this.pauseAud = this.pauseAud.bind(this);
//         this.changeVol = this.changeVol.bind(this);
//         // this.progressBar = this.progressBar.bind(this);
//     }

//     componentDidMount() {
//         this.setState({ 
//             player: document.getElementById('music-player'),
//             // progressBar: document.getElementById('progress-bar')
//         })
//     }

//     componentDidUpdate() {
//         if ((this.state.player.paused) 
//         && (this.state.player.currentTime !== 0)) {
//             null;
//         } else {
//             this.state.player.play();
//         }

//         const progressBar = document.getElementById('progress-bar');
//         this.state.player.addEventListener('timeupdate', () => {
//             progressBar.value = (this.state.player.currentTime / this.state.player.duration);
//         })
//     };

//     playAud() {
//         this.state.player.play();
//     }

//     pauseAud() {
//         this.state.player.pause();
//     }

//     changeVol() {
//         this.state.player.volume = document.getElementById("vol-bar").value;
//     }

//     // progressBar() {
//     // }

//     render() {
//         const { currentTrack } = this.props
//         const { player } = this.state
//         return (
//             <div className="music-player-background">
//                 <div className="player">
//                     <div className="music-player-container">
//                         <audio id="music-player" src={currentTrack.trackFile}>
//                         </audio>
//                         <input id="play-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/play_icon.svg" onClick={this.playAud}/>
//                         <input id="pause-button" type="image" src="https://d313rqwfqaf3f.cloudfront.net/musicPlayer/pause_icon.svg" onClick={this.pauseAud}/>
//                         <progress id="progress-bar" value="0" max="1"></progress>
//                         <img id="vol-bar-img" src="" />
//                         <input type="range" id="vol-bar" onChange={this.changeVol} step="0.025" min="0" max="1"/>
//                     </div>
//                     <div className="current-track-display">
//                         <div className="current-track-img">
//                             <img src={currentTrack.imgFile} height="40" width="40"></img>
//                         </div>
//                         <div className="current-track-details">
//                             <p id="song-name">{currentTrack.title}</p>
//                             <p id="song-artist">{currentTrack.userName}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }