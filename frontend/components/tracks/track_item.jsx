import React from 'react';

const TrackItem = ({ track, idx }) => {
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
                </ul>
            </h1>
        </div>
    )
}

export default TrackItem;