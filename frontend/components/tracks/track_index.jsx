import React, { useEffect } from "react";
import TrackItemContainer from "./track_item_container";

const TrackIndex = (props) => {
  useEffect(() => {
    props.fetchTracks();
  }, []);

  return (
    <div className="discover-tracks">
      <h1>Discover</h1>
      <div className="tracklist-container">
        {props.tracks.length > 0 ? (
          <>
            {props.tracks.map((track, idx) => (
              <TrackItemContainer key={track.id} idx={idx} track={track} />
            ))}
          </>
        ) : (
          <div className="empty-list">This is a sad and empty list</div>
        )}
        {props.tracks.map((track, idx) => (
          <TrackItemContainer key={track.id} idx={idx} track={track} />
        ))}
      </div>
      <div id="sound-wave-everywhere">
        <img
          id="sound-wave-everywhere"
          src="https://dsmug1izjrtvi.cloudfront.net/design/wave_white.svg"
          width="400"
          height="400"
        ></img>
      </div>
    </div>
  );
};

export default TrackIndex;
