import React from 'react';
import { withRouter } from 'react-router';
import SearchBar from '../search/searchbar';

const NavBar = (props) => {
  const handleUploadButton = (e) => {
    e.preventDefault();
    props.history.push('/nav/upload');
  };

  const handleDiscoverButton = (e) => {
    e.preventDefault();
    props.history.push('/nav/tracks');
  };

  const handleLogout = () => {
    props.logout().then(props.history.push('/'));
  };

  return (
    <header className="nav-bar">
      <div className="nav-bar-left-side">
        <div className="nav-bar-logo">
          <img
            src="http://dsmug1izjrtvi.cloudfront.net/design/wave_white.svg"
            height="40"
            width="40"
            onClick={() => props.history.push('/nav/tracks')}
          ></img>
        </div>
        <button className="nav-discover-button" onClick={handleDiscoverButton}>
          Discover
        </button>
        <button className="nav-stream-button">Stream</button>
        <button
          className="nav-library-button"
          onClick={() => props.history.push(`/nav/library`)}
        >
          Library
        </button>
      </div>
      <SearchBar />
      <div className="nav-bar-right-side">
        <button
          className="nav-upgrade-button"
          onClick={() => props.history.push('/nav/upgrade')}
        >
          Upgrade
        </button>
        <button className="nav-upload-button" onClick={handleUploadButton}>
          Upload
        </button>
        <div className="nav-bar-profile-icon">
          <h2>{props.currentUser.username}</h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </header>
  );
};

export default withRouter(NavBar);
