import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import SearchBar from '../search/searchbar';

//Add links to navbar to navigate
class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.handleUploadButton = this.handleUploadButton.bind(this);
        this.handleDiscoverButton = this.handleDiscoverButton.bind(this);
    }

    handleUploadButton(e) {
        e.preventDefault()
            this.props.history.push('/nav/upload')
    }

    handleDiscoverButton(e) {
        e.preventDefault()
            this.props.history.push('/nav/tracks')
    }

    handleLogout() {
        this.props.logout()
            .then(this.props.history.push('/'));
    }

    render() {
        return (
            <header className="nav-bar">
                <div className="nav-bar-left-side">
                    <div className="nav-bar-logo">
                        <img src="http://d313rqwfqaf3f.cloudfront.net/design/wave_white.svg" height="40" width="40" onClick={() => this.props.history.push('/nav/tracks')}></img>
                    </div>
                    <button className="nav-discover-button" onClick={this.handleDiscoverButton}>Discover</button>
                    <button className="nav-stream-button">Stream</button>
                    <button className="nav-library-button">Library</button>
                </div>
                <SearchBar />
                {/* <div className="nav-bar-search">
                    <input className="search-input" type="text" placeholder="Search"></input>
                </div> */}
                <div className="nav-bar-right-side">
                    <button className="nav-upgrade-button" onClick={() => this.props.history.push('/nav/upgrade')}>Upgrade</button>
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