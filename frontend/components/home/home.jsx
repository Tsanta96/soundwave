import React from 'react';

const Home = ({ openModal }) => {
    const sessionLinks = () => (
        <nav className="auth-btns">
            <button id="login" onClick={() => openModal('login')}>Login</button>
            <button id="signup" onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );

    return (
        <div className="home">
            <div className="blue-bar">
                <div className="home-view">
                    <div className="home-header">
                        <h2 className="home-logo">SoundWave</h2>
                        <div className="modal-btns">
                            {sessionLinks()}
                        </div>
                    </div>
                    <h1>Discover Tracks with SoundWave</h1>
                    <p>Add your own songs and discover what other musicians are working on.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;

    // < Link to = "/login" id = "login" > Log In</Link >
    // <Link to="/signup" id="signup">Sign Up</Link>