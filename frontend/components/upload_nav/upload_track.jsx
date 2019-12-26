import React from 'react';
import { NavLink } from 'react-router-dom';

class UploadTrackForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            imgFile: "",
            trackFile: "",
            artist_id: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.removeTrackErrors();
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleFile(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.files[0] });
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
        e.preventDefault();
   
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[img_file]', this.state.imgFile);                
        formData.append('track[track_file]', this.state.trackFile);
        formData.append('track[artist_id]', this.props.currentUser.id);
        this.props.createTrack(formData);   //Why does form data get sent up as an empty object {}? This makes it very hard to debug!

        this.setState({
            title: "",
            artist_id: this.props.currentUser.id
        })
        document.getElementById("upload-imgFile").value = "";
        document.getElementById("upload-trackFile").value = "";

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
                        <input id="upload-title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput("title")}
                        />
                        <br></br>
                        </label>
                        <label className="upload-img">Upload Image
                        <input id="upload-imgFile"
                            type="file"
                            // value={this.state.img_url}
                            // onChange={this.handleInput("img_url")}
                            onChange={this.handleFile("imgFile")}
                        />
                        <br></br>
                        </label>
                        <label className="upload-track">Upload Track
                        <input id="upload-trackFile"
                            type="file"
                            // value={this.state.trackFile}
                            // onChange={this.handleInput("track_url")}
                            onChange={this.handleFile("trackFile")}
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