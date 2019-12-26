import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

//Add links to navbar to navigate
class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.handleUploadButton = this.handleUploadButton.bind(this);
    }

    handleUploadButton(e) {
        e.preventDefault()
            this.props.history.push('/nav/upload')
    }

    handleLogout() {
        this.props.logout()
            .then(this.props.history.push('/'));
    }

    render() {
        console.log(this.props.currentUser);
        // const { currentUser } = this.props
        // const authAction = currentUser ? (
        //     <div className="nav-bar-profile-icon">
        //         <h2>{currentUser.username}</h2>
        //         <button onClick={this.handleLogout}>Log Out</button>
        //     </div>
        // ) : (
        //     <div className="auth-btns">
        //         <Link to="/signup" id="signup">Sign Up</Link>
        //         <Link to="/login" id="login">Log In</Link>
        //     </div>
        // );

        return (
            <header className="nav-bar">
                <div className="nav-bar-logo">
                    <img src="http://d313rqwfqaf3f.cloudfront.net/design/wave_white.svg" height="40" width="40"></img>
                    {/* <h1 className="logo">SoundWave</h1> */}
                </div>
                <div className="nav-bar-right-side">
                    <button className="nav-upload-button" onClick={this.handleUploadButton}>Upload</button>
                    <div className="nav-bar-profile-icon">
                        <h2>{this.props.currentUser.username}</h2>
                        <button onClick={this.handleLogout}>Log Out</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(NavBar);