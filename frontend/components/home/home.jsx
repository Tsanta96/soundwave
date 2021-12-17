import React from 'react';

const Home = ({ openModal, removeErrors }) => {
  const sessionLinks = () => (
    <nav className="auth-btns">
      <button id="login" onClick={() => openModal("login")}>Login</button>
      <button
        id="signup"
        onClick={() => {
          openModal("signup");
          removeErrors();
        }}>Signup
        </button>
      <a
        href="https://github.com/Tsanta96"
        target="_blank"
        className="github-icon"
        height="40"
        width="40">
        <img src="http://dsmug1izjrtvi.cloudfront.net/design/github-icon-32.png"></img>
      </a>
    </nav>
  );

  return (
    <div>
      <img
        id="home-background-img"
        className="home-view"
        src="https://dsmug1izjrtvi.cloudfront.net/design/soundwave-home-img4.jpg" />
      <div className="home">
        <div className="home-header">
          <div className="home-logo">
            <img
              src="https://dsmug1izjrtvi.cloudfront.net/design/wave_lightblue.svg"
              height="45"
              width="45" />
            <h2>SoundWave</h2>
          </div>
          <div className="modal-btns">{sessionLinks()}</div>
        </div>
        <h1>Discover Tracks with SoundWave</h1>
        <p>Add your own songs and discover what other musicians are working on.</p>
      </div>
    </div>
  );
}

export default Home;