import React, { useEffect } from 'react';
import TrackItemContainer from '../tracks/track_item_container';

const Library = (props) => {
    useEffect(() => {
        props.fetchLikedTracks(props.currentUser.id);
    }, []);

    return (
      <div>
        <div className="library-tracks">
          <h1>Library</h1>
          <p className="library-note">
            These are tracks that you've liked. You can remove them by unliking
            them
          </p>
          {props.tracks.map((track, idx) => (
            <TrackItemContainer key={track.id} idx={idx} track={track} />
          ))}
          <div id="sound-wave-everywhere">
            <img
              id="sound-wave-everywhere"
              src="https://dsmug1izjrtvi.cloudfront.net/design/wave_white.svg"
              width="400"
              height="400"
            ></img>
          </div>
        </div>
      </div>
    );
}

export default Library;

