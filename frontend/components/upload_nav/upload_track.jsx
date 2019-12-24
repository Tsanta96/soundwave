import React from 'react';
import { NavLink } from 'react-router-dom';

class UploadTrackForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            img_url: "",
            track_url: "",
            artist_id: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.removeTrackErrors();
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    // handleFile(e) {
    //     e.preventDefault();
    // }

    renderErrors() {
        if (this.props.errors) {
            return Object.values(this.props.errors)
                .map((error, idx) => (<li key={idx}>*{error}</li>)
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createTrack(this.state);
        this.setState({
            title: "",
            img_url: "",
            track_url: "",
            artist_id: this.props.currentUser.id
        })
    }

    render() {
        return (
            <div>
                <div className="upload-nav">
                    <NavLink to="/nav/upload" className="upload" activeClassName="chosen">Upload</NavLink>
                    <NavLink to="/nav/you/tracks" className="your-tracks" activeClassName="chosen">Your tracks</NavLink>
                </div>
                <div className="upload-track-view">
                    <h1>Upload Track!</h1>
                    <form className="upload-track-form">
                        <label className="title">Title:
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                        />
                        <br></br>
                        </label>
                        <label className="upload-img">Upload Image
                        <input
                            type="file"
                            value={this.state.img_url}
                            onChange={this.handleInput("img_url")}
                        />
                        <br></br>
                        </label>
                        <label className="upload-track">Upload Track
                        <input
                            type="file"
                            value={this.state.track_url}
                            onChange={this.handleInput("track_url")}
                        />
                        <br></br>
                        </label>
                        <div className="upload-form-errors">
                            {this.renderErrors()}
                        </div>
                        <button className="upload-track-form-submit" onClick={this.handleSubmit}>Upload</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UploadTrackForm;