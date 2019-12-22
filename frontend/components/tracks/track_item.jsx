import React from 'react';

const TrackItem = ({ track, idx }) => {
    return (
        <div>
            <h1>{idx}: {track.title}
                <ul>
                    <li>Artist id: {track.artistId}</li>
                    <li>Image: {track.imgUrl}</li>
                    <li>Track: {track.trackUrl}</li>
                </ul>
            </h1>
        </div>
    )
}

export default TrackItem;