import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const TrackItem = (props) => {
  const [id, setId] = useState(props.track.id);
  const [title, setTitle] = useState(props.track.title);
  const [artistId, setArtistId] = useState(props.artistId);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(document.getElementById("music-player"));
  }, []);

  const fetchTrack = (e, trackId) => {
    e.preventDefault();
    props.fetchCurrentTrack(props.track);
  };

  const pauseAud = () => {};

  const handleDelete = (trackId, userId) => {
    const delSong = confirm("Are you sure you want to delete this song?");
    if (delSong === true) {
      props.deleteTrack(trackId);
      props.fetchArtistTracks(userId);
    }
  };

  const commentsClick = (trackId) => {
    props.removeAllComments();
    props.history.push(`/nav/track/comments/${trackId}`);
  };

  const likeClick = (trackId, userId) => {
    props.addLike(trackId, userId);

    //Force a re render
    if (props.location.pathname === "/nav/tracks") {
      props.fetchTracks();
    } else if (props.location.pathname === "/nav/library") {
      props.fetchLikedTracks(userId);
    }
  };

  const { track, idx } = props;
  let musicPlayerSrc;
  let checkTrack;
  let trackSrc;
  if (document.getElementById("music-player") !== null) {
    musicPlayerSrc = document
      .getElementById("music-player")
      .getAttribute("src");
  }

  checkTrack = document.getElementById(`track-id-${track.id}`);

  if (checkTrack !== null) {
    trackSrc = checkTrack.getAttribute("src");
  }
  const playPause =
    musicPlayerSrc !== trackSrc ? (
      <div>
        <input
          className="play-button"
          type="image"
          src="https://dsmug1izjrtvi.cloudfront.net/musicPlayer/play_icon.svg"
          onClick={(e) => fetchTrack(e, track.id)}
        />
      </div>
    ) : (
      <div>
        <input
          className="play-button-active"
          type="image"
          src="https://dsmug1izjrtvi.cloudfront.net/musicPlayer/play_icon.svg"
          onClick={() => pauseAud(track.id)}
        />
      </div>
    );

  const trackContainer =
    props.match.path !== "/nav/you/tracks" ? (
      <div className="song-container">
        <img
          src={track.imgFile}
          height="120"
          width="120"
          className="song-img"
        ></img>
        <div className="song-content">
          <div className="discover-song-container-name">
            <p id="discover-song-name">{track.title}</p>
          </div>
          <p id="artist-name">{track.userName}</p>
          <audio id={`track-id-${track.id}`} src={track.trackFile}></audio>
          {playPause}
          <div className="discover-comments-likes">
            <img
              src="https://dsmug1izjrtvi.cloudfront.net/design/speech-bubble.svg"
              className="discover-comment"
              height="15"
              width="15"
              onClick={() => commentsClick(track.id)}
            ></img>
            <img
              src="https://dsmug1izjrtvi.cloudfront.net/design/like-icon.svg"
              className="discover-like"
              height="16"
              width="16"
              onClick={() => likeClick(track.id, props.currentUser.id)}
            ></img>
            <p className="discover-like-number">{track.likes}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="song-container">
        <img
          src={track.imgFile}
          height="120"
          width="120"
          className="song-img"
        ></img>
        <div className="song-content">
          <div className="song-container-name">
            <h1 className="song-name">{track.title}</h1>
          </div>
          <h2 className="artist-name">{track.userName}</h2>
          <audio id={`track-id-${track.id}`} src={track.trackFile}></audio>
          {playPause}
          <div className="bottom-container">
            <div className="edit-delete">
              <button
                className="delete"
                onClick={() => handleDelete(track.id, track.artistId)}
              >
                Delete
              </button>
            </div>
            <div className="comments-likes">
              <img
                src="https://dsmug1izjrtvi.cloudfront.net/design/speech-bubble.svg"
                className="comment"
                height="15"
                width="15"
                onClick={() => commentsClick(track.id)}
              ></img>
              <img
                src="https://dsmug1izjrtvi.cloudfront.net/design/like-icon.svg"
                className="like"
                height="16"
                width="16"
                onClick={() => likeClick(track.id, props.currentUser.id)}
              ></img>
              <p className="comments-like-number">{track.likes}</p>
            </div>
          </div>
        </div>
      </div>
    );

  return <div>{trackContainer}</div>;
};

export default withRouter(TrackItem);
