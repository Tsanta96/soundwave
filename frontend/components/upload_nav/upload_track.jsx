import React from 'react';
import { Link } from 'react-router-dom';

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

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

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
                    <Link to="/nav/upload">Upload</Link>
                    <Link to="/nav/you/tracks">Your Tracks</Link>
                </div>
                <div>
                    <h1>Upload Track!</h1>
                    <form className="upload-track-form">
                        <label>Title:
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                        />
                        <br></br>
                        </label>
                        <label>Upload Image
                        <input
                            type="file"
                            value={this.state.img_url}
                            onChange={this.handleInput("img_url")}
                        />
                        <br></br>
                        </label>
                        <label>Upload Track
                        <input
                            type="file"
                            value={this.state.track_url}
                            onChange={this.handleInput("track_url")}
                        />
                        <br></br>
                        </label>
                        <button className="upload-track-form-submit" onClick={this.handleSubmit}>Upload</button>
                        <div className="upload-form-errors">
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UploadTrackForm;