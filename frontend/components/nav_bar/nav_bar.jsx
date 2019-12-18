import React from 'react';
import { Link } from 'react-router-dom';

//Add links to navbar to navigate
class NavBar extends React.Component {
    render() {
        const { currentUser, logout } = this.props
        const authAction = currentUser ? (
            <div className="profile-icon">
                <h2>{currentUser.username}</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
            <div className="auth-btns">
                <Link to="/signup" id="signup">Sign Up</Link>
                <Link to="/login" id="login">Log In</Link>
            </div>
        );

        return (
            <header className="nav-bar">
                <h1 className="logo">SoundWave</h1>
                <div>
                    {authAction}
                </div>
            </header>
        )
    }
}

export default NavBar;


// const authAction = currentUser ? (
//     <div>
//         <h2>Welcome {currentUser.username}!</h2>
//         <button onClick={this.props.logout}>LogOut</button>
//     </div>
// ) : (
//         <div>
//             <Link className="auth-btn" to="/signup">Sign Up</Link>
//             <Link className="auth-btn" to="/login">Log In</Link>
//         </div>
//     )